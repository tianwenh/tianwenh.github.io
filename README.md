# tianwenh.github.io

See [how-this-blog-is-built](https://tianwenh.github.io/how-this-blog-is-built) for tech details.

## Build

```
git clone
npm install
```

## Dev

Start two terminal windows, run:

```
npm run check
```

for TS checking,
and

```
npm run dev
```

for dev server.

## Write new posts

Simply add `md`, `mdx` under `pages/` folder.

## Local SSR

```
npm run build
npm run serve
```

## Deploy

Github actions [[.github/workflows/deploy.yml]] should auto build and deploy everytime `main` is pushed.

For rare manual build and deploy, run:

```
npm run deploy
```

## Custom theming

Change code under `./theme`.

## Features

- `mdx` rendering
  - Math Latex
  - Music notation
    - Vexflow TODO:
  - Code rendering
    - Syntax highlighting
    - Selected lines highlighting
    - Line number display
  - Header anchors
- Frontmatter
  - Tags group
- SSR
- Deployment automation
- Dark mode
- Submodule plugins
