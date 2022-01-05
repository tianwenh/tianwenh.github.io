import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'mdx-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import pages from './plugins/pages';
import path from 'path';

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      rehypePlugins: [
        rehypePrism,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { class: 'header-anchor' },
            content: {
              type: 'text',
              value: '#',
            },
          },
        ],
      ],
      jsxRuntime: 'classic',
    }),
    react(),
    pages({
      globs: [
        {
          dirname: __dirname,
          filePattern: './foam/**/*.{mdx,md}',
        },
        {
          dirname: path.resolve(__dirname, './pages'),
          filePattern: './**/*.{mdx,md}',
        },
      ],
    }),
  ],
});
