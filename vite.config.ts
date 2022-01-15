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

// TODO: Consider auto ssg all paths.
const globBase = path.resolve('./pages');
const globPattern = path.resolve(globBase, './**/*.{mdx,md}');
const clientDistPath = './dist';
const indexHtmlPath = path.resolve(clientDistPath, 'index.html');
const serverPath = './ssr/entry-server.tsx';

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
      globBase,
      globPattern,
      clientDistPath,
      indexHtmlPath,
      serverPath,
    }),
  ],
});
