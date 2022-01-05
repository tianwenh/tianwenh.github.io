// Pre-render the app into static HTML.

import path from 'path';
import fs from 'fs/promises';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { createServer } from 'vite';

const globPattern = './pages/**/*$.*';
const clientDistPath = './dist';
const indexHtmlPath = path.resolve(clientDistPath, 'index.html');
const serverPath = './ssr/entry-server.tsx';

// TODO how to code split?
async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });
  const { render } = await vite.ssrLoadModule(serverPath);
  const template = await fs.readFile(indexHtmlPath, 'utf-8');
  const pagePaths = await fg(globPattern, { absolute: true });
  const pageSlugs = await Promise.all(pagePaths.map(async (path) => {
    const file = await fs.readFile(path, 'utf-8');
    const frontmatter = matter(file);
    const title = frontmatter.data['title'] ?? 'unknown title';
    const slug = title.toLowerCase().replace(/\s/g, '-');
    return slug;
  }));
  const replaceByUrl = (url) => {
    const ssrHtml = render(url, {});
    return template.replace(`<!--app-html-->`, ssrHtml);
  };
  // Post pages
  await Promise.all(pageSlugs.map(slug => {
    const filePath = path.resolve(clientDistPath, `${slug}.html`);
    const replacedTemplate = replaceByUrl(`/${slug}`);
    return fs.writeFile(filePath, replacedTemplate);
  }));
  // Index page
  await fs.writeFile(indexHtmlPath, replaceByUrl(`/`));
}

prerender().then(() => {
  console.log('SSR pages generated...');
});