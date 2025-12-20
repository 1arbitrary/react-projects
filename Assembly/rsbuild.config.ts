import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  html: {
    favicon: './src/favicon.jpg',
    title: 'Assembly: Endgame ',
    meta: {
      charset: {
        charset: 'UTF-8',
      },
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  plugins: [pluginReact()],
});
