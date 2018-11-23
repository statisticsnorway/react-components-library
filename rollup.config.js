import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      include: 'node_modules/dc-react-form-fields-library/**'
    }),
    commonjs(),
    json({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'axios',
    'moment',
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
