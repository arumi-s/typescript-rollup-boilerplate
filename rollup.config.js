import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts'];

export default {
	input: 'src/index.ts',
	plugins: [
		typescript(),
		nodeResolve({
			extensions,
		}),
		commonjs(),
		babel({
			extensions,
			exclude: 'node_modules/**',
		}),
		postcss({
			extensions: ['.css', '.less'],
			plugins: [autoprefixer, cssnano],
			extract: 'index.css',
		}),
		terser(),
	],
	output: {
		file: 'dist/index.js',
		format: 'iife',
	},
};
