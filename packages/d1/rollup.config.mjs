/** @type {import('rollup').RollupOptions} */
import typescript from '@rollup/plugin-typescript';
import { dts } from "rollup-plugin-dts";

export default {
  input: 'src/index.ts',
  output: {
      file: 'dist/bundle.js',
      format: 'cjs'
  },
  plugins: [typescript()]
};