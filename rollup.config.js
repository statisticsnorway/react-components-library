import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  input: 'src/components/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    json({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'react-datepicker',
    'react-dom',
    'react-router-dom',
    'react-scripts',
    'react-table',
    'semantic-ui-css',
    'semantic-ui-react',
    'uuid'
  ]
}
