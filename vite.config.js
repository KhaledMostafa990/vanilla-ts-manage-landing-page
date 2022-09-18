/** @type {import('vite').UserConfig} */

import { resolve } from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollipOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    minify: 'terser',
    terserOptions: {
      keep_classnames: false,
      keep_fnames: false,
      format: {
        comments: false,
      },
    },
  },
});
