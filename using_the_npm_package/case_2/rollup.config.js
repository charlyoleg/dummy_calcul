import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/abc.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [resolve(), commonjs()]
};

