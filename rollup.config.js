import path from 'path'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'

const isProduction = process.env.BUILD === 'production'

const config = {
  input: {
    index: path.resolve('src/index.vue'),
  },
  output: [
    {
      dir: path.resolve('dist'),
      entryFileNames: '[name].js',
      format: 'amd',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions: ['.mjs', '.js', '.ts', '.json', '.vue'] }),
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development'),
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
    vue({ target: 'browser' }),
    typescript(),
  ]
}

export default config
