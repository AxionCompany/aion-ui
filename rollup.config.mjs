import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';


export default {
    input: 'src/Main.jsx',
    output: {
        file: 'dist/widget.mjs',
        format: 'es',
    },
    external: [],
    plugins: [
        resolve({
            browser: true,
            dedupe: ['solid-js'],
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['solid'],
        }),
        postcss({
            inject: true,
            plugins: [postcssImport()],
            modules: false,
        }),
        terser(),
    ],
};
