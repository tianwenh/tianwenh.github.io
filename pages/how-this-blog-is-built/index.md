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

0. Write your own SSG;
1. Use existing SSG(static site generator) + theme;
2. Use existing SSG + writing custom theme;

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

Other general step up (eslint, prettier) are omitted here, but you can find resources online or copy [my template](https://github.com/tianwenh/vite-template).

This paves way for all the later works, enables customization and so on.

## MDX and customization

The next big piece is MDX support. Mostly, follow [mdxjs](https://mdxjs.com/) tutorial.

Once MDX plugin is install, it is time for more MDX plugins:

- `remark-gfm` for better markdown rendering;
- `rehype-slug` for extracting frontmatter;
- `remark-math`, `rehype-katex` for math latex rendering;
- `mdx-prism` for code highlighting and line highlighting;
- `rehype-slug`, `rehype-autolink-headings` for linkify headings;

Just follow github repo tutoirals, install and add to `vite.config.ts`. I also assembled them together:

```ts
import { mdx } from '@tianwenh/vite-plugin-ssgpage';
```

### Music notation

For music notation rendering, I ended up with building `Vexflow` React components and calling them from mdx. Considered `lilypond`, it seems to be too heavy for my usage.

### Override MDX component rendering

I also implemented my own `MdxLink` so that

- Links always jump to new pages;
- Extensions are dropped for correct deeplink routing;

## Frontmatter

Frontmatter is metadata for each posts. There are 4 main properties I use:

- title: UUID for each post;
- date;
- subtitle: a sneak peek of post;
- tags: used for grouping posts;

This is a pretty standard way of organizing blog posts.

## Grab pages

SSG is pages (similar to config) driven. Pages are essentailly all the md/mdx files.

I wrote a `pages` plugin for vite, so that it auto grabs pages(config) from certain folders, parse then rendering them in my custom theme.

```ts
import { pages } from '@tianwenh/vite-plugin-ssgpage';
```

Higher level, it works this way:

1. `/pages` folder serves all static md/mdx files;
2. `pages` plugin grabs these files, transforms and groups them under `@pages` virtual plugin;
3. Theme TS files import metadata from `@pages`, vite will resolve to metadata file at build time;
4. Runtime rendering retrives metadata and convert them into pages/tags under different routes;

## Custom theming

My theme is pretty minimal. I took design inspiration from [overreacted.io](https://overreacted.io). Just tweak around css to make it not ugly...

I also made dark mode. It auto detects user system preference, and persists user setup in local storage.

## SSR

To begin, follow vite SSR tutoirals. I did some modification, and put together a plugin to fit in my use case.

```ts
import { ssr } from '@tianwenh/vite-plugin-ssgpage';
```

## Deploy automation

For deployment, `gh-pages` is used for manual push. I also created a github action that auto builds and deploys the latest push from `main` to `gh-pages`.

## How to use

I made everything generic into a [plugin](https://github.com/tianwenh/vite-plugin-ssgpage). Read [example README](https://github.com/tianwenh/vite-plugin-ssgpage/tree/main/examples/blog) for detailed instructions.

For writing posts, just add new pages, and `git push`.

## Future plans

Develop the idea to:

- Serving docs for projects;
- Jupyter Notebook-ish interactive playground for personal code study;
- Foam/roam research-ish rendering;

## Conclusion

I said it easy, it in fact does require a few weeks to build up a plan, research best practices, tweak around css/js, and debugging.

Finally, [website source code](https://github.com/tianwenh/tianwenh.github.io) is here.
