import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'react-dom',
    'react-scripts',
    'axios',
    'moment',
    'semantic-ui-css',
    'semantic-ui-react',
    'react-datepicker',
    'react-router-dom',
    'uuid'
  ]
}
