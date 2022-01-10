import path from 'path';
import fs from 'fs/promises';
import fg from 'fast-glob';
import { createServer } from 'vite';

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
// Pre-render the app into static HTML.
export async function prerender(options) {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });
  const { render } = await vite.ssrLoadModule(options.serverPath);
  const template = await fs.readFile(options.indexHtmlPath, 'utf-8');
  const pagePaths = await fg(options.globPattern);
  const pageSlugs = await Promise.all(pagePaths.map(async (filepath) => {
    return slugifyFilepath(filepath, options.globBase)
  }));
  // Insert page content to template
  const replaceByUrl = (url) => {
    const ssrHtml = render(url, {});
    return template.replace(`<!--app-html-->`, ssrHtml);
  };
  // Write static post pages html
  await Promise.all(pageSlugs.map(slug => {
    const filePath = path.resolve(options.clientDistPath, `${slug}.html`);
    const replacedTemplate = replaceByUrl(`/${slug}`);
    return fs.writeFile(filePath, replacedTemplate);
  }));
  // Write static index html
  await fs.writeFile(options.indexHtmlPath, replaceByUrl(`/`));
  await vite.close();
}