import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    settings: {
      react: {
        // Change "detect" to your actual version (e.g., "19" or "18.3")
        // This stops ESLint from running the crashing "detect" code.
        version: "19" 
      }
    }
  }
]);

export default eslintConfig;
