import type { Plugin } from 'vite';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Frontmatter } from '@pages';
import { slugify } from '../utils/utils';

const MODULE_NAME = '@pages';

export interface PageOptions {
  globs: Array<{
    dirname: string;
    filePattern: string;
  }>;
}

// generate script that exports list of page metadata
async function generatePageMetadata(options: PageOptions): Promise<string> {
  const m = await Promise.all(
    options.globs.map(async (glob) => {
      const filepaths = await fg(path.resolve(glob.dirname, glob.filePattern));
      return Promise.all(
        filepaths.map(async (filepath) => {
          const subpath = filepath.replace(glob.dirname, '');
          const parsed = path.parse(subpath);
          const slug = path
            .resolve(parsed.dir, parsed.name === 'index' ? '' : parsed.name)
            .slice(1);
          const file = await fs.readFile(filepath, 'utf-8');
          const fm = matter(file);
          const title = fm.data['title'] ?? slugify(slug);
          const subtitle = fm.data['subtitle'] ?? 'unknown subtitle';
          const date = fm.data['date'] ?? 'unknown date';
          const tags = fm.data['tags'] ?? [];
          const frontmatter: Frontmatter = {
            ...fm.data,
            title,
            tags,
            date,
            subtitle,
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
  const meta = m.flat();
  // Dev mode, only load marked posts.
  const onlymeta = meta.filter((m) => m.frontmatter['only']);
  const metadata = onlymeta.length === 0 ? meta : onlymeta;
  const metadataStr = metadata
    .map((m, i) => `{"component": Component${i},${JSON.stringify(m).slice(1)}`)
    .join(',');
  const pageImports = metadata
    .map((m, i) => `import Component${i} from '${m.filepath}';`)
    .join('\n');

  console.log('loaded pages:', metadata.length);

  return `
${pageImports}
export default [${metadataStr}];
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
