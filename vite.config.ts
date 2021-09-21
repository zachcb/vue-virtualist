import { defineConfig, UserConfig } from 'vite'
import pkg from './package.json';

const isDev = process.env.mode !== 'production';
// const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const banner = `/**
* virtualized v${pkg.version}
* open source under the MIT license
* ${pkg.homepage}
*/`;

export const config: UserConfig = {

}

export default defineConfig(({ command }) => ({
    ...config,
    input: 'packages/virtualized/src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'esm',
      banner,
      sourcemap: isDev,
    },
}))
