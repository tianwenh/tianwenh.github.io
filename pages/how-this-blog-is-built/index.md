---
title: How this blog is built
date: 2022-01-08
subtitle: Yet another static site generator built in 2022.
tags:
---

> Check out [github](https://github.com/tianwenh/tianwenh.github.io) for source code.

Instead of learning all the exsiting static site generators, I decided to start 2022 by building my own.

## What are the options?

There are several options building your own blog:

0. Write your own SSG from scratch;
1. Use existing SSG (static site generator) + theme;
2. Use existing SSG + custom theme;

The time needed for learning/hacking existing theme and SSG is probably similar to writing your own. Even if not, knowing all the details at the very beginning will probably compensate the costs later on.

## Static site generator breakdown

Break down features that I need:

- Light weight dev experience;
- MDX and plugin customization;
- Frontmatter extraction;
- SSR support;
- Deploy automation;
- Dark mode;
- Custom theming;

## Lightweight dev experience

I am not working for a billion dollar project. [Vite](https://vitejs.dev/) comes in handy for what I expectes. Fast load, SSR support, extensible, reasonable defaults, etc.

Starting the project with its official [react-ts template](https://vitejs.dev/guide/#trying-vite-online), just a few clicks, website is up running.

Other general setups (eslint, prettier) are omitted here, but you can find resources online or copy [my template](https://github.com/tianwenh/vite-template).

This paves way for all the later works, enables customization and so on.

## MDX and customization

The next big piece is MDX support. Mostly, follow [mdxjs](https://mdxjs.com/) tutorial.

Once MDX plugin is installed, it is time for more MDX plugins:

- `remark-gfm` for better markdown rendering;
- `remark-frontmatter` for extracting frontmatter;
- `remark-math`, `rehype-katex` for math latex rendering;
- `mdx-prism` for code highlighting and line highlighting;
- `rehype-slug`, `rehype-autolink-headings` for linkify headings;

Just follow github repo tutoirals, install and add to `vite.config.ts`. I also assembled them together to save you some research:

```ts
import { mdx } from '@tianwenh/vite-plugin-ssgpage';
```

### Music notation

For music notation rendering, I ended up with building `Vexflow` React components and calling them from mdx. Considered `lilypond`, it seems to be too heavy for my usage.

### Override MDX component rendering

I also customized my own `MdxLink` so that:

- Links always jump to new pages;
- Extensions are dropped for correct deeplink routing;

## Frontmatter

Frontmatter is metadata at the beginning of the markdown file. There are 4 main properties I defined:

- title: UUID for each post;
- date: when is post wrote;
- subtitle: a sneak peek of post;
- tags: used for grouping posts;

This is a pretty standard way of organizing blog posts.

## Grab pages

SSG is pages (similar to config) driven. Pages are essentailly all the md/mdx files.

I wrote a `pages` vite plugin, which auto grabs pages from certain folders, parse then rendering them in my custom theme.

```ts
import { pages } from '@tianwenh/vite-plugin-ssgpage';
```

At higher level, it works this way:

1. `/pages` folder serves all static md/mdx files;
2. `pages` plugin grabs these files, transforms and groups them under `@pages` virtual plugin;
3. Theme TS files import metadata from `@pages`, vite will resolve to metadata file at build time;
4. Runtime rendering retrives metadata and convert them into pages/tags under different routes;

## Custom theming

As you can tell, my theme is pretty minimal. I took design inspiration from [overreacted.io](https://overreacted.io). Just tweak around css to make it not ugly...

It supports dark mode as well, which auto detects user system preference, and persists user setting in local storage.

## SSR

To begin with SSR, follow the vite tutorial. I did some modification, and put together another plugin to fit in my use case:

```ts
import { ssr } from '@tianwenh/vite-plugin-ssgpage';
```

Once installed, it preloads all linkable pages with a BFS search from provided entry html.

## Deploy automation

For deployment, `gh-pages` is used for manual push. I also created a [github action](https://github.com/tianwenh/tianwenh.github.io/blob/main/.github/workflows/deploy.yml) that auto builds and deploys the latest `main` branch push to `gh-pages`.

## How to use

I abstracted everything generic into [plugins](https://github.com/tianwenh/vite-plugin-ssgpage). Read [my example README](https://github.com/tianwenh/vite-plugin-ssgpage/tree/main/examples/blog) for detailed instructions.

For writing posts, just add new pages, and `git push`.

## Future plans

Develop the idea to:

- Serving docs for projects;
- Jupyter Notebook-ish interactive playground for personal code study;
- Foam/roam research-ish rendering;

## Conclusion

I said it easy, it in fact does require a few weeks to build up a plan, research best practices, tweak around css/js, and debugging.

Finally, [website source code](https://github.com/tianwenh/tianwenh.github.io) is here.
