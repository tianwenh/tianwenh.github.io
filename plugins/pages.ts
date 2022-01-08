import type { Plugin } from 'vite';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Frontmatter, PageMetadata } from '@pages';
import { slugify } from '../utils/utils';

const MODULE_NAME = '@pages';

export interface PageGlob {
  basepath: string;
  filePattern: string;
}
export interface PageOptions {
  globs: PageGlob[];
}

function slugifyFilepath(filepath: string, basepath: string): string {
  const subpath = filepath.replace(basepath, '');
  const parsed = path.parse(subpath);
  // Filename or its dir name if filename is just 'index'.
  const slug = path
    .resolve(parsed.dir, parsed.name === 'index' ? '' : parsed.name)
    .slice(1);
  return slug;
}

// generate script that exports list of page metadata
async function generatePageMetadata(options: PageOptions): Promise<string> {
  const ms: Omit<PageMetadata, 'component'>[][] = await Promise.all(
    options.globs.map(async (glob) => {
      const filepaths = await fg(path.resolve(glob.basepath, glob.filePattern));
      return Promise.all(
        filepaths.map(async (filepath) => {
          const slug = slugifyFilepath(filepath, glob.basepath);
          const file = await fs.readFile(filepath, 'utf-8');
          const fm = matter(file);
          const title = fm.data['title'] ?? slugify(slug);
          const subtitle = fm.data['subtitle'] ?? 'unknown subtitle';
          const date = fm.data['date'] ?? 'unknown date';
          const tags = fm.data['tags'] ?? [];
          const only = fm.data['only'] ?? false;
          const frontmatter: Frontmatter = {
            ...fm.data,
            title,
            tags,
            date,
            subtitle,
            only,
          };
          return {
            filepath,
            slug,
            frontmatter,
          };
        })
      );
    })
  );
  const meta = ms.flat();
  // For dev mode, only load marked posts.
  const onlymeta = meta.filter((m) => m.frontmatter.only);
  const metadata = onlymeta.length === 0 ? meta : onlymeta;
  const metadataWithComponent = metadata
    .map((m, i) => `{"component": Component${i},${JSON.stringify(m).slice(1)}`)
    .join(',');
  const componentImports = metadata
    .map((m, i) => `import Component${i} from '${m.filepath}';`)
    .join('\n');

  console.log('loaded pages:', metadata.length);

  return `
${componentImports}
export default [${metadataWithComponent}];
  `;
}

function pages(options: PageOptions): Plugin {
  return {
    name: 'pages',
    enforce: 'pre',
    resolveId(source) {
      if (source !== MODULE_NAME) {
        return;
      }
      return source;
    },
    async load(id) {
      if (id !== MODULE_NAME) {
        return;
      }
      return await generatePageMetadata(options);
    },
  };
}

export default pages;
