/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['**/*test.ts?(x)'],
    includeSource: ['**/*.{js,cjs,mjs,ts,tsx}'],
  },
})
