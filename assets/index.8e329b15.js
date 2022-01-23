var N=Object.defineProperty,v=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var m=(t,r,n)=>r in t?N(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(t,r)=>{for(var n in r||(r={}))T.call(r,n)&&m(t,n,r[n]);if(u)for(var n of u(r))D.call(r,n)&&m(t,n,r[n]);return t},x=(t,r)=>v(t,S(r));import{j as e,s as g,L as d,O as F,r as c,a as I,g as M,N as O,c as L,u as E,R,b as a,d as j,e as P,f as C,h as X,B as z}from"./vendor.37389aaf.js";const B=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};B();function A(t={}){const{wrapper:r}=t.components||{};return r?e.exports.jsx(r,Object.assign({},t,{children:e.exports.jsx(n,{})})):n();function n(){const s=Object.assign({blockquote:"blockquote",p:"p",a:"a",h2:"h2",ol:"ol",li:"li",ul:"ul",code:"code",pre:"pre",span:"span",h3:"h3"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["Check out ",e.exports.jsx(s.a,{href:"https://github.com/tianwenh/tianwenh.github.io",children:"github"})," for source code."]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"Instead of learning all the exsiting static site generators, I decided to start 2022 by building my own."}),`
`,e.exports.jsxs(s.h2,{id:"what-are-the-options",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#what-are-the-options",children:"#"}),"What are the options?"]}),`
`,e.exports.jsx(s.p,{children:"There are several options building your own blog:"}),`
`,e.exports.jsxs(s.ol,{start:"0",children:[`
`,e.exports.jsx(s.li,{children:"Write your own SSG from scratch;"}),`
`,e.exports.jsx(s.li,{children:"Use existing SSG (static site generator) + theme;"}),`
`,e.exports.jsx(s.li,{children:"Use existing SSG + custom theme;"}),`
`]}),`
`,e.exports.jsx(s.p,{children:"The time needed for learning/hacking existing theme and SSG is probably similar to writing your own. Even if not, knowing all the details at the very beginning will probably compensate the costs later on."}),`
`,e.exports.jsxs(s.h2,{id:"static-site-generator-breakdown",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#static-site-generator-breakdown",children:"#"}),"Static site generator breakdown"]}),`
`,e.exports.jsx(s.p,{children:"Break down features that I need:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Light weight dev experience;"}),`
`,e.exports.jsx(s.li,{children:"MDX and plugin customization;"}),`
`,e.exports.jsx(s.li,{children:"Frontmatter extraction;"}),`
`,e.exports.jsx(s.li,{children:"SSR support;"}),`
`,e.exports.jsx(s.li,{children:"Deploy automation;"}),`
`,e.exports.jsx(s.li,{children:"Dark mode;"}),`
`,e.exports.jsx(s.li,{children:"Custom theming;"}),`
`]}),`
`,e.exports.jsxs(s.h2,{id:"lightweight-dev-experience",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#lightweight-dev-experience",children:"#"}),"Lightweight dev experience"]}),`
`,e.exports.jsxs(s.p,{children:["I am not working for a billion dollar project. ",e.exports.jsx(s.a,{href:"https://vitejs.dev/",children:"Vite"})," comes in handy for what I expectes. Fast load, SSR support, extensible, reasonable defaults, etc."]}),`
`,e.exports.jsxs(s.p,{children:["Starting the project with its official ",e.exports.jsx(s.a,{href:"https://vitejs.dev/guide/#trying-vite-online",children:"react-ts template"}),", just a few clicks, website is up running."]}),`
`,e.exports.jsxs(s.p,{children:["Other general setups (eslint, prettier) are omitted here, but you can find resources online or copy ",e.exports.jsx(s.a,{href:"https://github.com/tianwenh/vite-template",children:"my template"}),"."]}),`
`,e.exports.jsx(s.p,{children:"This paves way for all the later works, enables customization and so on."}),`
`,e.exports.jsxs(s.h2,{id:"mdx-and-customization",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#mdx-and-customization",children:"#"}),"MDX and customization"]}),`
`,e.exports.jsxs(s.p,{children:["The next big piece is MDX support. Mostly, follow ",e.exports.jsx(s.a,{href:"https://mdxjs.com/",children:"mdxjs"})," tutorial."]}),`
`,e.exports.jsx(s.p,{children:"Once MDX plugin is installed, it is time for more MDX plugins:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"remark-gfm"})," for better markdown rendering;"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"remark-frontmatter"})," for extracting frontmatter;"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"remark-math"}),", ",e.exports.jsx(s.code,{children:"rehype-katex"})," for math latex rendering;"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"mdx-prism"})," for code highlighting and line highlighting;"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"rehype-slug"}),", ",e.exports.jsx(s.code,{children:"rehype-autolink-headings"})," for linkify headings;"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["Just follow github repo tutoirals, install and add to ",e.exports.jsx(s.code,{children:"vite.config.ts"}),". I also assembled them together to save you some research:"]}),`
`,e.exports.jsx(s.pre,{className:"language-ts",children:e.exports.jsxs(s.code,{className:"language-ts",children:[e.exports.jsx(s.span,{className:"token keyword",children:"import"})," ",e.exports.jsxs(s.span,{className:"token imports",children:[e.exports.jsx(s.span,{className:"token punctuation",children:"{"})," mdx ",e.exports.jsx(s.span,{className:"token punctuation",children:"}"})]})," ",e.exports.jsx(s.span,{className:"token keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"token string",children:"'@tianwenh/vite-plugin-ssgpage'"}),e.exports.jsx(s.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e.exports.jsxs(s.h3,{id:"music-notation",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#music-notation",children:"#"}),"Music notation"]}),`
`,e.exports.jsxs(s.p,{children:["For music notation rendering, I ended up with building ",e.exports.jsx(s.code,{children:"Vexflow"})," React components and calling them from mdx. Considered ",e.exports.jsx(s.code,{children:"lilypond"}),", it seems to be too heavy for my usage."]}),`
`,e.exports.jsxs(s.h3,{id:"override-mdx-component-rendering",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#override-mdx-component-rendering",children:"#"}),"Override MDX component rendering"]}),`
`,e.exports.jsxs(s.p,{children:["I also customized my own ",e.exports.jsx(s.code,{children:"MdxLink"})," so that:"]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Links always jump to new pages;"}),`
`,e.exports.jsx(s.li,{children:"Extensions are dropped for correct deeplink routing;"}),`
`]}),`
`,e.exports.jsxs(s.h2,{id:"frontmatter",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#frontmatter",children:"#"}),"Frontmatter"]}),`
`,e.exports.jsx(s.p,{children:"Frontmatter is metadata at the beginning of the markdown file. There are 4 main properties I defined:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"title: UUID for each post;"}),`
`,e.exports.jsx(s.li,{children:"date: when is post wrote;"}),`
`,e.exports.jsx(s.li,{children:"subtitle: a sneak peek of post;"}),`
`,e.exports.jsx(s.li,{children:"tags: used for grouping posts;"}),`
`]}),`
`,e.exports.jsx(s.p,{children:"This is a pretty standard way of organizing blog posts."}),`
`,e.exports.jsxs(s.h2,{id:"grab-pages",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#grab-pages",children:"#"}),"Grab pages"]}),`
`,e.exports.jsx(s.p,{children:"SSG is pages (similar to config) driven. Pages are essentailly all the md/mdx files."}),`
`,e.exports.jsxs(s.p,{children:["I wrote a ",e.exports.jsx(s.code,{children:"pages"})," vite plugin, which auto grabs pages from certain folders, parse then rendering them in my custom theme."]}),`
`,e.exports.jsx(s.pre,{className:"language-ts",children:e.exports.jsxs(s.code,{className:"language-ts",children:[e.exports.jsx(s.span,{className:"token keyword",children:"import"})," ",e.exports.jsxs(s.span,{className:"token imports",children:[e.exports.jsx(s.span,{className:"token punctuation",children:"{"})," pages ",e.exports.jsx(s.span,{className:"token punctuation",children:"}"})]})," ",e.exports.jsx(s.span,{className:"token keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"token string",children:"'@tianwenh/vite-plugin-ssgpage'"}),e.exports.jsx(s.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e.exports.jsx(s.p,{children:"At higher level, it works this way:"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"/pages"})," folder serves all static md/mdx files;"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"pages"})," plugin grabs these files, transforms and groups them under ",e.exports.jsx(s.code,{children:"@pages"})," virtual plugin;"]}),`
`,e.exports.jsxs(s.li,{children:["Theme TS files import metadata from ",e.exports.jsx(s.code,{children:"@pages"}),", vite will resolve to metadata file at build time;"]}),`
`,e.exports.jsx(s.li,{children:"Runtime rendering retrives metadata and convert them into pages/tags under different routes;"}),`
`]}),`
`,e.exports.jsxs(s.h2,{id:"custom-theming",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#custom-theming",children:"#"}),"Custom theming"]}),`
`,e.exports.jsxs(s.p,{children:["As you can tell, my theme is pretty minimal. I took design inspiration from ",e.exports.jsx(s.a,{href:"https://overreacted.io",children:"overreacted.io"}),". Just tweak around css to make it not ugly..."]}),`
`,e.exports.jsx(s.p,{children:"It supports dark mode as well, which auto detects user system preference, and persists user setting in local storage."}),`
`,e.exports.jsxs(s.h2,{id:"ssr",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#ssr",children:"#"}),"SSR"]}),`
`,e.exports.jsx(s.p,{children:"To begin with SSR, follow the vite tutorial. I did some modification, and put together another plugin to fit in my use case:"}),`
`,e.exports.jsx(s.pre,{className:"language-ts",children:e.exports.jsxs(s.code,{className:"language-ts",children:[e.exports.jsx(s.span,{className:"token keyword",children:"import"})," ",e.exports.jsxs(s.span,{className:"token imports",children:[e.exports.jsx(s.span,{className:"token punctuation",children:"{"})," ssr ",e.exports.jsx(s.span,{className:"token punctuation",children:"}"})]})," ",e.exports.jsx(s.span,{className:"token keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"token string",children:"'@tianwenh/vite-plugin-ssgpage'"}),e.exports.jsx(s.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e.exports.jsx(s.p,{children:"Once installed, it preloads all linkable pages with a BFS search from provided entry html."}),`
`,e.exports.jsxs(s.h2,{id:"deploy-automation",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#deploy-automation",children:"#"}),"Deploy automation"]}),`
`,e.exports.jsxs(s.p,{children:["For deployment, ",e.exports.jsx(s.code,{children:"gh-pages"})," is used for manual push. I also created a ",e.exports.jsx(s.a,{href:"https://github.com/tianwenh/tianwenh.github.io/blob/main/.github/workflows/deploy.yml",children:"github action"})," that auto builds and deploys the latest ",e.exports.jsx(s.code,{children:"main"})," branch push to ",e.exports.jsx(s.code,{children:"gh-pages"}),"."]}),`
`,e.exports.jsxs(s.h2,{id:"how-to-use",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#how-to-use",children:"#"}),"How to use"]}),`
`,e.exports.jsxs(s.p,{children:["I abstracted everything generic into ",e.exports.jsx(s.a,{href:"https://github.com/tianwenh/vite-plugin-ssgpage",children:"plugins"}),". Read ",e.exports.jsx(s.a,{href:"https://github.com/tianwenh/vite-plugin-ssgpage/tree/main/examples/blog",children:"my example README"})," for detailed instructions."]}),`
`,e.exports.jsxs(s.p,{children:["For writing posts, just add new pages, and ",e.exports.jsx(s.code,{children:"git push"}),"."]}),`
`,e.exports.jsxs(s.h2,{id:"future-plans",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#future-plans",children:"#"}),"Future plans"]}),`
`,e.exports.jsx(s.p,{children:"Develop the idea to:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Serving docs for projects;"}),`
`,e.exports.jsx(s.li,{children:"Jupyter Notebook-ish interactive playground for personal code study;"}),`
`,e.exports.jsx(s.li,{children:"Foam/roam research-ish rendering;"}),`
`]}),`
`,e.exports.jsxs(s.h2,{id:"conclusion",children:[e.exports.jsx(s.a,{className:"header-anchor",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,e.exports.jsx(s.p,{children:"I said it easy, it in fact does require a few weeks to build up a plan, research best practices, tweak around css/js, and debugging."}),`
`,e.exports.jsxs(s.p,{children:["Finally, ",e.exports.jsx(s.a,{href:"https://github.com/tianwenh/tianwenh.github.io",children:"website source code"})," is here."]})]})}}var G=[{component:A,filepath:"/home/runner/work/tianwenh.github.io/tianwenh.github.io/pages/how-this-blog-is-built/index.md",slug:"how-this-blog-is-built",frontmatter:{title:"How this blog is built",date:"2022-01-08T00:00:00.000Z",subtitle:"Yet another static site generator built in 2022.",tags:[],only:!1,hide:!1}}];const h=G.sort((t,r)=>new Date(r.frontmatter.date).getTime()-new Date(t.frontmatter.date).getTime()),f=h.reduce((t,r)=>(r.frontmatter.tags.forEach(n=>{var s;t[n]=[...(s=t[n])!=null?s:[],r]}),t),{}),q=Object.entries(f).reduce((t,[r,n])=>{var o;const s=g(r);return t[s]=[...(o=t[s])!=null?o:[],...n],t},{}),U=Object.keys(f);const W=()=>e.exports.jsxs("div",{className:"layout-container",children:[e.exports.jsx("header",{className:"layout-head",children:e.exports.jsxs("h3",{children:[e.exports.jsx(d,{to:"/",children:"HTW"}),e.exports.jsx($,{className:"dark-toggle"})]})}),e.exports.jsx("main",{children:e.exports.jsx(F,{})})]});function _(){return typeof window=="undefined"?!1:M()==="dark"}const $=t=>{const r=o=>o?"dark":"light",[n,s]=c.exports.useState(_());return c.exports.useEffect(()=>{I(r(n))},[n]),e.exports.jsx("span",x(l({},t),{onClick:()=>s(!n),children:n?"\u{1F318}":"\u{1F314}"}))},w=t=>{const r=g(t.tag);return e.exports.jsxs(O,{to:`/tags/${r}`,className:({isActive:n})=>{var s;return L({[(s=t.className)!=null?s:""]:!0,"tag-active":n})},children:["#",t.tag]})},H=t=>{if(/^https?:\/\//.test(t.href))return e.exports.jsx("a",l({target:"_blank"},t));const n=t.href.replace(/\.mdx?/,"");return n.startsWith("#")?e.exports.jsx("a",l({},t)):e.exports.jsx(d,x(l({},t),{to:n}))},b=t=>{const r=new Date(t.page.frontmatter.date).toLocaleDateString();return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx("h2",{className:"page-title",children:e.exports.jsx(d,{to:`/${t.page.slug}`,children:t.page.frontmatter.title})}),e.exports.jsx("p",{className:"page-subtitle",children:t.page.frontmatter.subtitle}),e.exports.jsxs("small",{children:[e.exports.jsx("time",{dateTime:r,className:"page-info",children:r}),t.page.frontmatter.tags.map(n=>e.exports.jsx(w,{tag:n,className:"page-info"},n))]})]})},J={a:H},V=t=>e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx("header",{children:e.exports.jsx(b,{page:t.page})}),e.exports.jsx("hr",{}),e.exports.jsx(t.page.component,{components:J}),e.exports.jsx("hr",{}),e.exports.jsx("footer",{children:"EOF"})]}),y=t=>e.exports.jsx(e.exports.Fragment,{children:t.pages.map(r=>e.exports.jsx("article",{className:"card pages-card",children:e.exports.jsx(b,{page:r})},r.slug))}),K=t=>{const r=t&&q[t];return!r||r.length===0?e.exports.jsx("div",{children:"No pages..."}):e.exports.jsx(y,{pages:r})},k=()=>{const{tagSlug:t}=E();return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx("section",{className:"tags",children:U.map(r=>e.exports.jsx(w,{tag:r,className:"card tag-card"},r))}),e.exports.jsx("hr",{}),K(t)]})},Y=()=>e.exports.jsx(e.exports.Fragment,{children:"404 Not Found..."});function Z(){const{pathname:t}=j();c.exports.useEffect(()=>{window.scrollTo(0,0)},[t])}function Q(){const{hash:t}=j();c.exports.useEffect(()=>{const r=document.getElementById(t.slice(1));r==null||r.scrollIntoView({behavior:"smooth"})},[])}function ee(){return Z(),Q(),e.exports.jsx(R,{children:e.exports.jsxs(a,{path:"/",element:e.exports.jsx(W,{}),children:[e.exports.jsx(a,{index:!0,element:e.exports.jsx(y,{pages:h})}),e.exports.jsx(a,{path:"/tags",element:e.exports.jsx(k,{})}),e.exports.jsx(a,{path:"/tags/:tagSlug",element:e.exports.jsx(k,{})}),h.map(t=>e.exports.jsx(a,{path:`/${t.slug}`,element:e.exports.jsx(V,{page:t})},t.slug)),e.exports.jsx(a,{path:"*",element:e.exports.jsx(Y,{})})]})})}P();const se=C.hydrate;se(e.exports.jsx(X.StrictMode,{children:e.exports.jsx(z,{children:e.exports.jsx(ee,{})})}),document.getElementById("app"));
