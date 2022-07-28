/*eslint-env node*/
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'

const PACKAGE_ROOT_PATH = process.cwd()

export default [
  {
    input: `${PACKAGE_ROOT_PATH}/src/index.ts`,
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      // svgをimage-pluginで処理すると、base64形式になる
      // inlineで扱いたいので、image-pluginでは扱わないで、svgrを利用する
      image({ exclude: /.svg/ }),
      svgr(),
      typescript(),
      terser(),
      visualizer(),
    ],
  },
]
