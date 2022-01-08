// Pre-render the app into static HTML.

import path from 'path';
import fs from 'fs/promises';
import fg from 'fast-glob';
import { createServer } from 'vite';

const globBase = path.resolve('./pages');
const globPattern = path.resolve(globBase, './**/*.{mdx,md}');
const clientDistPath = './dist';
const indexHtmlPath = path.resolve(clientDistPath, 'index.html');
const serverPath = './ssr/entry-server.tsx';

// TODO: refactor out common code and glob pattern.
function slugifyFilepath(filepath, basepath) {
  const subpath = filepath.replace(basepath, '');
  const parsed = path.parse(subpath);
  // Filename or its dir name if filename is just 'index'.
  const slug = path
    .resolve(parsed.dir, parsed.name === 'index' ? '' : parsed.name)
    .slice(1);
  return slug;
}

// TODO: only posts and index are SSRed, not other routes (tags etc)
async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });
  const { render } = await vite.ssrLoadModule(serverPath);
  const template = await fs.readFile(indexHtmlPath, 'utf-8');
  const pagePaths = await fg(globPattern);
  const pageSlugs = await Promise.all(pagePaths.map(async (filepath) => {
    return slugifyFilepath(filepath, globBase)
  }));
  // Insert page content to template
  const replaceByUrl = (url) => {
    const ssrHtml = render(url, {});
    return template.replace(`<!--app-html-->`, ssrHtml);
  };
  // Write static post pages html
  await Promise.all(pageSlugs.map(slug => {
    const filePath = path.resolve(clientDistPath, `${slug}.html`);
    const replacedTemplate = replaceByUrl(`/${slug}`);
    return fs.writeFile(filePath, replacedTemplate);
  }));
  // Write static index html
  await fs.writeFile(indexHtmlPath, replaceByUrl(`/`));
}

prerender().then(() => {
  console.log('SSR pages generated...');
});