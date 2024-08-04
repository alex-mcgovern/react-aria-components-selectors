import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { GridListItemRenderProps } from 'react-aria-components';
interface SelectorInfo {
  selector: string;
  type: string;
}

function generateSelectorsTypes(sourceFilePath: string, outputFilePath: string) {
  console.debug("👉  sourceFilePath:", sourceFilePath)
  const program = ts.createProgram([sourceFilePath], {});
  const sourceFile = program.getSourceFile(sourceFilePath);
  const typeChecker = program.getTypeChecker();

  if (!sourceFile) {
    console.error('Source file not found');
    return;
  }

  const renderPropsTypes: { [key: string]: SelectorInfo[] } = {};

  ts.forEachChild(sourceFile, node => {
    if (ts.isInterfaceDeclaration(node) && node.name.text.endsWith('RenderProps')) {
      const typeName = node.name.text;
      renderPropsTypes[typeName] = [];

      node.members.forEach(member => {
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
  });

  let output = '';

  for (const [typeName, selectors] of Object.entries(renderPropsTypes)) {
    output += `export type ${typeName.replace('RenderProps', 'Selectors')} = `;
    const typeMembers = selectors.map(({ selector, type }) => {
      if (type === 'boolean') {
        return `"${selector}"`;
      } else if (type.includes('|')) {
        const options = type.split('|').map(opt => opt.trim().replace(/"/g, ''));
        return options.map(option => `'${selector.replace(/".*"/, `"${option}"`)}'`).join(' | ');
      }
      return '';
    }).filter(Boolean).join(' | ');
    output += `${typeMembers};\n\n`;
  }

  fs.writeFileSync(outputFilePath, output);
  console.log(`Generated selectors types in ${outputFilePath}`);
}

// Usage
generateSelectorsTypes(
  path.resolve('node_modules/react-aria-components/dist/types.d.ts'),
  path.resolve(__dirname, 'generatedSelectors.ts')
);