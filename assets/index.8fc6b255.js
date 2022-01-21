var D=Object.defineProperty,I=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var w=(n,a,r)=>a in n?D(n,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[a]=r,u=(n,a)=>{for(var r in a||(a={}))M.call(a,r)&&w(n,r,a[r]);if(f)for(var r of f(a))F.call(a,r)&&w(n,r,a[r]);return n},b=(n,a)=>I(n,j(a));import{R as t,s as y,j as p,L as g,O as L,r as d,a as O,g as R,N as P,c as C,u as X,b as z,d as c,e as k,f as B,h as A,B as G}from"./vendor.ca188348.js";const q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&e(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};q();function U(n={}){const{wrapper:a}=n.components||{};return a?t.createElement(a,n,t.createElement(r)):r();function r(){const e=Object.assign({blockquote:"blockquote",p:"p",a:"a",h2:"h2",ol:"ol",li:"li",ul:"ul",code:"code",pre:"pre",span:"span",h3:"h3"},n.components);return t.createElement(t.Fragment,null,t.createElement(e.blockquote,null,`
`,t.createElement(e.p,null,"Check out ",t.createElement(e.a,{href:"https://github.com/tianwenh/tianwenh.github.io"},"github")," for source code."),`
`),`
`,t.createElement(e.p,null,"Instead of learning all the exsiting static site generators, I decided to start 2022 by building my own."),`
`,t.createElement(e.h2,{id:"what-are-the-options"},t.createElement(e.a,{className:"header-anchor",href:"#what-are-the-options"},"#"),"What are the options?"),`
`,t.createElement(e.p,null,"There are several options building your own blog:"),`
`,t.createElement(e.ol,{start:"0"},`
`,t.createElement(e.li,null,"Write your own SSG from scratch;"),`
`,t.createElement(e.li,null,"Use existing SSG (static site generator) + theme;"),`
`,t.createElement(e.li,null,"Use existing SSG + custom theme;"),`
`),`
`,t.createElement(e.p,null,"The time needed for learning/hacking existing theme and SSG is probably similar to writing your own. Even if not, knowing all the details at the very beginning will probably compensate the costs later on."),`
`,t.createElement(e.h2,{id:"static-site-generator-breakdown"},t.createElement(e.a,{className:"header-anchor",href:"#static-site-generator-breakdown"},"#"),"Static site generator breakdown"),`
`,t.createElement(e.p,null,"Break down features that I need:"),`
`,t.createElement(e.ul,null,`
`,t.createElement(e.li,null,"Light weight dev experience;"),`
`,t.createElement(e.li,null,"MDX and plugin customization;"),`
`,t.createElement(e.li,null,"Frontmatter extraction;"),`
`,t.createElement(e.li,null,"SSR support;"),`
`,t.createElement(e.li,null,"Deploy automation;"),`
`,t.createElement(e.li,null,"Dark mode;"),`
`,t.createElement(e.li,null,"Custom theming;"),`
`),`
`,t.createElement(e.h2,{id:"lightweight-dev-experience"},t.createElement(e.a,{className:"header-anchor",href:"#lightweight-dev-experience"},"#"),"Lightweight dev experience"),`
`,t.createElement(e.p,null,"I am not working for a billion dollar project. ",t.createElement(e.a,{href:"https://vitejs.dev/"},"Vite")," comes in handy for what I expectes. Fast load, SSR support, extensible, reasonable defaults, etc."),`
`,t.createElement(e.p,null,"Starting the project with its official ",t.createElement(e.a,{href:"https://vitejs.dev/guide/#trying-vite-online"},"react-ts template"),", just a few clicks, website is up running."),`
`,t.createElement(e.p,null,"Other general setups (eslint, prettier) are omitted here, but you can find resources online or copy ",t.createElement(e.a,{href:"https://github.com/tianwenh/vite-template"},"my template"),"."),`
`,t.createElement(e.p,null,"This paves way for all the later works, enables customization and so on."),`
`,t.createElement(e.h2,{id:"mdx-and-customization"},t.createElement(e.a,{className:"header-anchor",href:"#mdx-and-customization"},"#"),"MDX and customization"),`
`,t.createElement(e.p,null,"The next big piece is MDX support. Mostly, follow ",t.createElement(e.a,{href:"https://mdxjs.com/"},"mdxjs")," tutorial."),`
`,t.createElement(e.p,null,"Once MDX plugin is installed, it is time for more MDX plugins:"),`
`,t.createElement(e.ul,null,`
`,t.createElement(e.li,null,t.createElement(e.code,null,"remark-gfm")," for better markdown rendering;"),`
`,t.createElement(e.li,null,t.createElement(e.code,null,"remark-frontmatter")," for extracting frontmatter;"),`
`,t.createElement(e.li,null,t.createElement(e.code,null,"remark-math"),", ",t.createElement(e.code,null,"rehype-katex")," for math latex rendering;"),`
`,t.createElement(e.li,null,t.createElement(e.code,null,"mdx-prism")," for code highlighting and line highlighting;"),`
`,t.createElement(e.li,null,t.createElement(e.code,null,"rehype-slug"),", ",t.createElement(e.code,null,"rehype-autolink-headings")," for linkify headings;"),`
`),`
`,t.createElement(e.p,null,"Just follow github repo tutoirals, install and add to ",t.createElement(e.code,null,"vite.config.ts"),". I also assembled them together to save you some research:"),`
`,t.createElement(e.pre,{className:"language-ts"},t.createElement(e.code,{className:"language-ts"},t.createElement(e.span,{className:"token keyword"},"import")," ",t.createElement(e.span,{className:"token imports"},t.createElement(e.span,{className:"token punctuation"},"{")," mdx ",t.createElement(e.span,{className:"token punctuation"},"}"))," ",t.createElement(e.span,{className:"token keyword"},"from")," ",t.createElement(e.span,{className:"token string"},"'@tianwenh/vite-plugin-ssgpage'"),t.createElement(e.span,{className:"token punctuation"},";"),`
`)),`
`,t.createElement(e.h3,{id:"music-notation"},t.createElement(e.a,{className:"header-anchor",href:"#music-notation"},"#"),"Music notation"),`
`,t.createElement(e.p,null,"For music notation rendering, I ended up with building ",t.createElement(e.code,null,"Vexflow")," React components and calling them from mdx. Considered ",t.createElement(e.code,null,"lilypond"),", it seems to be too heavy for my usage."),`
`,t.createElement(e.h3,{id:"override-mdx-component-rendering"},t.createElement(e.a,{className:"header-anchor",href:"#override-mdx-component-rendering"},"#"),"Override MDX component rendering"),`
`,t.createElement(e.p,null,"I also customized my own ",t.createElement(e.code,null,"MdxLink")," so that:"),`
`,t.createElement(e.ul,null,`
`,t.createElement(e.li,null,"Links always jump to new pages;"),`
`,t.createElement(e.li,null,"Extensions are dropped for correct deeplink routing;"),`
`),`
`,t.createElement(e.h2,{id:"frontmatter"},t.createElement(e.a,{className:"header-anchor",href:"#frontmatter"},"#"),"Frontmatter"),`
`,t.createElement(e.p,null,"Frontmatter is metadata at the beginning of the markdown file. There are 4 main properties I defined:"),`
`,t.createElement(e.ul,null,`
`,t.createElement(e.li,null,"title: UUID for each post;"),`
`,t.createElement(e.li,null,"date: when is post wrote;"),`
`,t.createElement(e.li,null,"subtitle: a sneak peek of post;"),`
`,t.createElement(e.li,null,"tags: used for grouping posts;"),`
`),`
`,t.createElement(e.p,null,"This is a pretty standard way of organizing blog posts."),`
`,t.createElement(e.h2,{id:"grab-pages"},t.createElement(e.a,{className:"header-anchor",href:"#grab-pages"},"#"),"Grab pages"),`
`,t.createElement(e.p,null,"SSG is pages (similar to config) driven. Pages are essentailly all the md/mdx files."),`
`,t.createElement(e.p,null,"I wrote a ",t.createElement(e.code,null,"pages")," vite plugin, which auto grabs pages from certain folders, parse then rendering them in my custom theme."),`
`,t.createElement(e.pre,{className:"language-ts"},t.createElement(e.code,{className:"language-ts"},t.createElement(e.span,{className:"token keyword"},"import")," ",t.createElement(e.span,{className:"token imports"},t.createElement(e.span,{className:"token punctuation"},"{")," pages ",t.createElement(e.span,{className:"token punctuation"},"}"))," ",t.createElement(e.span,{className:"token keyword"},"from")," ",t.createElement(e.span,{className:"token string"},"'@tianwenh/vite-plugin-ssgpage'"),t.createElement(e.span,{className:"token punctuation"},";"),`
`)),`
`,t.createElement(e.p,null,"At higher level, it works this way:"),`
`,t.createElement(e.ol,null,`
`,t.createElement(e.li,null,t.createElement(e.code,null,"/pages")," folder serves all static md/mdx files;"),`
`,t.createElement(e.li,null,t.createElement(e.code,null,"pages")," plugin grabs these files, transforms and groups them under ",t.createElement(e.code,null,"@pages")," virtual plugin;"),`
`,t.createElement(e.li,null,"Theme TS files import metadata from ",t.createElement(e.code,null,"@pages"),", vite will resolve to metadata file at build time;"),`
`,t.createElement(e.li,null,"Runtime rendering retrives metadata and convert them into pages/tags under different routes;"),`
`),`
`,t.createElement(e.h2,{id:"custom-theming"},t.createElement(e.a,{className:"header-anchor",href:"#custom-theming"},"#"),"Custom theming"),`
`,t.createElement(e.p,null,"As you can tell, my theme is pretty minimal. I took design inspiration from ",t.createElement(e.a,{href:"https://overreacted.io"},"overreacted.io"),". Just tweak around css to make it not ugly..."),`
`,t.createElement(e.p,null,"It supports dark mode as well, which auto detects user system preference, and persists user setting in local storage."),`
`,t.createElement(e.h2,{id:"ssr"},t.createElement(e.a,{className:"header-anchor",href:"#ssr"},"#"),"SSR"),`
`,t.createElement(e.p,null,"To begin with SSR, follow the vite tutorial. I did some modification, and put together another plugin to fit in my use case:"),`
`,t.createElement(e.pre,{className:"language-ts"},t.createElement(e.code,{className:"language-ts"},t.createElement(e.span,{className:"token keyword"},"import")," ",t.createElement(e.span,{className:"token imports"},t.createElement(e.span,{className:"token punctuation"},"{")," ssr ",t.createElement(e.span,{className:"token punctuation"},"}"))," ",t.createElement(e.span,{className:"token keyword"},"from")," ",t.createElement(e.span,{className:"token string"},"'@tianwenh/vite-plugin-ssgpage'"),t.createElement(e.span,{className:"token punctuation"},";"),`
`)),`
`,t.createElement(e.p,null,"Once installed, it preloads all linkable pages with a BFS search from provided entry html."),`
`,t.createElement(e.h2,{id:"deploy-automation"},t.createElement(e.a,{className:"header-anchor",href:"#deploy-automation"},"#"),"Deploy automation"),`
`,t.createElement(e.p,null,"For deployment, ",t.createElement(e.code,null,"gh-pages")," is used for manual push. I also created a ",t.createElement(e.a,{href:"https://github.com/tianwenh/tianwenh.github.io/blob/main/.github/workflows/deploy.yml"},"github action")," that auto builds and deploys the latest ",t.createElement(e.code,null,"main")," branch push to ",t.createElement(e.code,null,"gh-pages"),"."),`
`,t.createElement(e.h2,{id:"how-to-use"},t.createElement(e.a,{className:"header-anchor",href:"#how-to-use"},"#"),"How to use"),`
`,t.createElement(e.p,null,"I abstracted everything generic into ",t.createElement(e.a,{href:"https://github.com/tianwenh/vite-plugin-ssgpage"},"plugins"),". Read ",t.createElement(e.a,{href:"https://github.com/tianwenh/vite-plugin-ssgpage/tree/main/examples/blog"},"my example README")," for detailed instructions."),`
`,t.createElement(e.p,null,"For writing posts, just add new pages, and ",t.createElement(e.code,null,"git push"),"."),`
`,t.createElement(e.h2,{id:"future-plans"},t.createElement(e.a,{className:"header-anchor",href:"#future-plans"},"#"),"Future plans"),`
`,t.createElement(e.p,null,"Develop the idea to:"),`
`,t.createElement(e.ul,null,`
`,t.createElement(e.li,null,"Serving docs for projects;"),`
`,t.createElement(e.li,null,"Jupyter Notebook-ish interactive playground for personal code study;"),`
`,t.createElement(e.li,null,"Foam/roam research-ish rendering;"),`
`),`
`,t.createElement(e.h2,{id:"conclusion"},t.createElement(e.a,{className:"header-anchor",href:"#conclusion"},"#"),"Conclusion"),`
`,t.createElement(e.p,null,"I said it easy, it in fact does require a few weeks to build up a plan, research best practices, tweak around css/js, and debugging."),`
`,t.createElement(e.p,null,"Finally, ",t.createElement(e.a,{href:"https://github.com/tianwenh/tianwenh.github.io"},"website source code")," is here."))}}var W=[{component:U,filepath:"/home/runner/work/tianwenh.github.io/tianwenh.github.io/pages/how-this-blog-is-built/index.md",slug:"how-this-blog-is-built",frontmatter:{title:"How this blog is built",date:"2022-01-08T00:00:00.000Z",subtitle:"Yet another static site generator built in 2022.",tags:[],only:!1,hide:!1}}];const E=W.sort((n,a)=>new Date(a.frontmatter.date).getTime()-new Date(n.frontmatter.date).getTime()),N=E.reduce((n,a)=>(a.frontmatter.tags.forEach(r=>{var e;n[r]=[...(e=n[r])!=null?e:[],a]}),n),{}),_=Object.entries(N).reduce((n,[a,r])=>{var s;const e=y(a);return n[e]=[...(s=n[e])!=null?s:[],...r],n},{}),$=Object.keys(N);const l=p.exports.jsx,i=p.exports.jsxs,m=p.exports.Fragment,H=()=>i("div",{className:"layout-container",children:[l("header",{className:"layout-head",children:i("h3",{children:[l(g,{to:"/",children:"HTW"}),l(V,{})]})}),l("main",{children:l(L,{})})]});function J(){return typeof window=="undefined"?!1:R()==="dark"}const V=()=>{const n=e=>e?"dark":"light",[a,r]=d.exports.useState(J());return d.exports.useEffect(()=>{O(n(a))},[a]),l("span",{className:"dark-toggle",onClick:()=>r(!a),children:a?"\u{1F318}":"\u{1F314}"})},v=n=>{const a=y(n.tag);return i(P,{to:`/tags/${a}`,className:({isActive:r})=>{var e;return C({[(e=n.className)!=null?e:""]:!0,"tag-active":r})},children:["#",n.tag]})},x=n=>{const a=new Date(n.page.frontmatter.date).toLocaleDateString();return i(m,{children:[l("h2",{className:"page-title",children:l(g,{to:`/${n.page.slug}`,children:n.page.frontmatter.title})}),l("p",{className:"page-subtitle",children:n.page.frontmatter.subtitle}),i("small",{children:[l("time",{dateTime:a,className:"page-info",children:a}),n.page.frontmatter.tags.map(r=>l(v,{tag:r,className:"page-info"},r))]})]})},K=n=>{if(/^https?:\/\//.test(n.href))return l("a",u({target:"_blank"},n));const r=n.href.replace(/\.mdx?/,"");return r.startsWith("#")?l("a",u({},n)):l(g,b(u({},n),{to:r}))},Y={a:K},Z=n=>i(m,{children:[l("header",{children:l(x,{page:n.page})}),l("hr",{}),l(n.page.component,{components:Y}),l("hr",{}),l("footer",{children:"EOF"})]}),S=n=>l(m,{children:n.pages.map(a=>l("article",{className:"card pages-card",children:l(x,{page:a})},a.slug))}),Q=n=>{const a=n&&_[n];return!a||a.length===0?l("div",{children:"No pages..."}):l(S,{pages:a})},T=()=>{const{tagSlug:n}=X();return i(m,{children:[l("section",{className:"tags",children:$.map(a=>l(v,{tag:a,className:"card tag-card"},a))}),l("hr",{}),Q(n)]})},ee=()=>l(m,{children:"404 Not Found..."});function te(){return ne(),ae(),l(z,{children:i(c,{path:"/",element:l(H,{}),children:[l(c,{index:!0,element:l(S,{pages:E})}),l(c,{path:"/tags",element:l(T,{})}),l(c,{path:"/tags/:tagSlug",element:l(T,{})}),E.map(n=>l(c,{path:`/${n.slug}`,element:l(Z,{page:n})},n.slug)),l(c,{path:"*",element:l(ee,{})})]})})}function ne(){const{pathname:n}=k();d.exports.useEffect(()=>{window.scrollTo(0,0)},[n])}function ae(){const{hash:n}=k();d.exports.useEffect(()=>{const a=document.getElementById(n.slice(1));a==null||a.scrollIntoView({behavior:"smooth"})},[])}B();const le=A.hydrate;le(l(t.StrictMode,{children:l(G,{children:l(te,{})})}),document.getElementById("app"));
