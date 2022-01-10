import path from 'path';
import { prerender } from '../pages-plugin/utils/prerender.js';

const globBase = path.resolve('./pages');
const globPattern = path.resolve(globBase, './**/*.{mdx,md}');
const clientDistPath = './dist';
const indexHtmlPath = path.resolve(clientDistPath, 'index.html');
const serverPath = './ssr/entry-server.tsx';

prerender({
  globBase,
  globPattern,
  clientDistPath,
  indexHtmlPath,
  serverPath,
}).then(() => {
  console.log('SSR pages generated...');
});