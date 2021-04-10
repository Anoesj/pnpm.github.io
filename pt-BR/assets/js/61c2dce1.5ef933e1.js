(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),l=(n(0),n(448)),i={id:"filtering",title:"Filtering",original_id:"filtering"},p={unversionedId:"filtering",id:"version-3.x/filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0 (Ability to pass selectors after -- added in v2.15.0)",source:"@site/versioned_docs/version-3.x/filtering.md",slug:"/filtering",permalink:"/pt-BR/3.x/filtering",editUrl:"https://crowdin.com/project/pnpm/pt-BR",version:"3.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"07/03/2021",sidebar:"version-3.x/docs",previous:{title:"Configuring",permalink:"/pt-BR/3.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/pt-BR/3.x/cli/add"}},c=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-2",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]}],o={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Added in: v2.13.0 (Ability to pass selectors after ",Object(l.b)("inlineCode",{parentName:"p"},"--")," added in v2.15.0)"),Object(l.b)("p",null,"Filtering allows to restrict commands to subsets of packages."),Object(l.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name\nor by relation."),Object(l.b)("p",null,"Selectors may be specified via the ",Object(l.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"pnpm <command> --filter <package_selector>\n")),Object(l.b)("p",null,"Most of the commands, also allow passing selectors after ",Object(l.b)("inlineCode",{parentName:"p"},"--"),".\nExcept commands that run scripts (",Object(l.b)("inlineCode",{parentName:"p"},"pnpm run"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm test"),", etc)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"pnpm <command> -- &lt;package_selectors>...\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"An article that compares Lerna's filtering to pnpm's: ",Object(l.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"))),Object(l.b)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"To select an exact package, just specify its name (",Object(l.b)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern\nto select a set of packages (",Object(l.b)("inlineCode",{parentName:"p"},"@babel/*"),")."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter @babel/core\npnpm install --filter @babel/*\n# or\npnpm install -- @babel/core\npnpm install -- @babel/*\n")),Object(l.b)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",Object(l.b)("inlineCode",{parentName:"p"},"<package_name>..."),".\nFor instance, the next command will run installation in all dependencies of ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter foo...\n# or\npnpm install -- foo...\n")),Object(l.b)("p",null,'You may use a pattern to select a set of "root" packages:'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter @babel/preset-*...\n# or\npnpm install -- @babel/preset-*...\n")),Object(l.b)("h2",{id:"--filter-package_name-2"},"--filter ...","<","package_name>"),Object(l.b)("p",null,"Added in: 2.14.0"),Object(l.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",Object(l.b)("inlineCode",{parentName:"p"},"...<package_name>"),".\nFor instance, the next command will run installation in all dependents of ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter ...foo\n# or\npnpm install -- ...foo\n")),Object(l.b)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter ...foo --filter bar --filter qar...\n# or\npnpm install -- ...foo bar qar...\n")),Object(l.b)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(l.b)("p",null,"Added in: v2.15.0"))}s.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,f=b["".concat(i,".").concat(m)]||b[m]||d[m]||l;return n?r.a.createElement(f,p(p({ref:t},o),{},{components:n})):r.a.createElement(f,p({ref:t},o))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);