(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(394)),c={id:"publish",title:"pnpm publish"},l={unversionedId:"cli/publish",id:"cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/docs/cli/publish.md",slug:"/cli/publish",permalink:"/next/cli/publish",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/cli/publish.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615766402,formattedLastUpdatedAt:"3/15/2021",sidebar:"docs",previous:{title:"pnpm start",permalink:"/next/cli/start"},next:{title:"pnpm recursive",permalink:"/next/cli/recursive"}},p=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"--force",id:"--force",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Publishes a package to the registry."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),Object(i.b)("p",null,"When publishing a package inside a ",Object(i.b)("a",{parentName:"p",href:"/next/workspaces"},"workspace"),", the LICENSE file\nfrom the root of the workspace is packed with the package (unless the package\nhas a license of its own)."),Object(i.b)("p",null,"You may override some fields before publish, using the\n",Object(i.b)("a",{parentName:"p",href:"/next/package_json#publishconfig"},"publishConfig")," field in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("p",null,"When running this command recursively (",Object(i.b)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all\nthe packages that have versions not yet published to the registry."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),Object(i.b)("p",null,"Publishes the package with the given tag. By default, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(i.b)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),Object(i.b)("p",null,"Tells the registry whether the published package should be public or restricted."),Object(i.b)("h3",{id:"git-checks"},"git-checks"),Object(i.b)("p",null,"Added in: v4.11.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default : ",Object(i.b)("strong",{parentName:"li"},"true")," (since v5)"),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When true, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch\n(master by default), clean, and up-to-date."),Object(i.b)("h3",{id:"publish-branch"},"publish-branch"),Object(i.b)("p",null,"Added in: v4.11.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"master")),Object(i.b)("li",{parentName:"ul"},"Types: ",Object(i.b)("strong",{parentName:"li"},"String"))),Object(i.b)("p",null,"The primary branch of the repository which is used for publishing the latest\nchanges."),Object(i.b)("h3",{id:"--force"},"--force"),Object(i.b)("p",null,"Added in: v5.18.0"),Object(i.b)("p",null,"Try to publish packages even if their current version is already found in the\nregistry."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(i.b)("p",null,"Added in: 4.6.0"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(h,l(l({ref:t},o),{},{components:n})):a.a.createElement(h,l({ref:t},o))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);