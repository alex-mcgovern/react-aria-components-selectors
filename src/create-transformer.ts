import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

const OMITTED = ["RenderProps", "StyleRenderProps"]

function isIncluded(n: ts.Node): n is ts.InterfaceDeclaration {
  return ts.isInterfaceDeclaration(n)
    && !OMITTED.includes(n.name.text)
    && n.name.text.endsWith('RenderProps')
    && Boolean(n.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword));

}

function getExtends(i: ts.InterfaceDeclaration): ts.HeritageClause | undefined {
  return i.heritageClauses?.find(clause => clause.token === ts.SyntaxKind.ExtendsKeyword)
}

function buildSelectorsForEnum(selector: string): string[] {
  // get the value inside the quotes
  const s = selector.replace(/"(.*?)"/, "{replace-me}")
  const v = selector.match(/"(.*?)"/)?.[1];
  if (!v) return []


  const options = v.split('|').map(opt => opt.trim().replace(/"/g, ''));
  return options.map(option => `'${s.replace("{replace-me}", `\"${option}\"`)}'`);

}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('buildSelectorsForEnum', () => {
    expect(buildSelectorsForEnum('[data-placement="left | right | top | bottom"]')).toStrictEqual(['"[data-placement=\"left\"]"', '"[data-placement=\"right\"]"', '"[data-placement=\"top\"]"', '"[data-placement=\"bottom\"]"']);
  });
}

interface SelectorInfo {
  selector: string;
  type: string;
}

function generateSelectorsTypes(sourceFilePath: string, outputFilePath: string) {
  const program = ts.createProgram([sourceFilePath], {});
  const sourceFile = program.getSourceFile(sourceFilePath);
  const typeChecker = program.getTypeChecker();

  if (!sourceFile) {
    return;
  }

  const renderPropsTypes: { [key: string]: SelectorInfo[] | string } = {};



  ts.forEachChild(sourceFile, node => {
    if (isIncluded(node)) {
      const typeName = node.name.text;
  
      renderPropsTypes[typeName] = [];
  
      const extendedType = getExtends(node);
      if (extendedType) {
        const extendedTypeName = extendedType.types[0].expression.getText();
        const extendedTypeNode = sourceFile.statements.find(
          stmt => ts.isInterfaceDeclaration(stmt) && stmt.name.text === extendedTypeName
        );
  
        if (extendedTypeNode) {
          processMembers(extendedTypeNode.members, typeName);
        }
      }
  
      // Process the current interface's members
      processMembers(node.members, typeName);
    }
  });
  
  function processMembers(members: ts.NodeArray<ts.TypeElement>, typeName: string) {
    members.forEach(member => {
      if (ts.isPropertySignature(member) && member.jsDoc) {
        const selectorTag = member.jsDoc[0].tags?.find(tag => tag.tagName.text === 'selector');
        if (selectorTag && ts.isJSDocTag(selectorTag) && typeof selectorTag.comment === 'string') {
          const propertyType = member.type
            ? typeChecker.typeToString(typeChecker.getTypeFromTypeNode(member.type))
            : 'any';
          renderPropsTypes[typeName].push({
            selector: selectorTag.comment.trim(),
            type: propertyType
          });
        }
      }
    });
  }

  let output = '';


  for (const [typeName, selectors] of Object.entries(renderPropsTypes)) {
  console.debug("👉  renderPropsTypes:", renderPropsTypes)

    if (selectors.length === 0) {
      continue;
    }

    if (typeof selectors === 'string') {
      output += selectors;
      continue;
    }

    output += `export type ${typeName.replace('RenderProps', 'Selectors')} = `;
    const typeMembers = selectors.map(({ selector, type }) => {
      if (type === 'boolean') {
        return `"${selector}"`;
      } else if (selector.includes('|')) {
        return buildSelectorsForEnum(selector).join(' | ');
      } else if (type === 'string' || type === 'string | null') {
        return `\`${selector.replace('...', '${string}')}\``;
      }
      return '';
    }).filter(Boolean).join(' | ');
    output += `${typeMembers};\n\n`;
  }

  fs.writeFileSync(outputFilePath, output);
}

// Usage
generateSelectorsTypes(
  path.resolve('node_modules/react-aria-components/dist/types.d.ts'),
  path.resolve(__dirname, 'generatedSelectors.ts')
);