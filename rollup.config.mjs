import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'dist/esm/index.js',
  plugins: [
    nodeResolve({
      extensions: ['.js', '.mjs', '.cjs'],
    }),
  ],
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'SignInWithApple',
      globals: {
        '@capacitor/core': 'capacitorExports',
        'scriptjs': 'scriptjs',
      },
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: ['@capacitor/core', 'scriptjs'],
};
