import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import less from 'rollup-plugin-less';
import babel from 'rollup-plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
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
		less({
			sourceMap: false,
			insert: true,
		}),
		terser(),
	],
	output: {
		file: 'dist/index.js',
		format: 'iife',
	},
};
