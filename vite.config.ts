import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'mdx-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import pages from './pages-plugin/plugins/pages';
import path from 'path';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import ssg from './pages-plugin/plugins/ssg';

const distPath = path.resolve('./dist');
const templatePath = path.resolve(distPath, 'index.html');
const serverPath = path.resolve('./ssr/entry-server.tsx');

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMath],
      rehypePlugins: [
        rehypeKatex,
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
          basepath: path.resolve('./pages'),
          filePattern: './**/*.{mdx,md}',
        },
      ],
    }),
    ssg({
      distPath,
      templatePath,
      serverPath,
      entryRoutes: ['/', '/404'],
    }),
  ],
});
