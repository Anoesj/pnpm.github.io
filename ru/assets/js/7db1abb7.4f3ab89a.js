(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(8),r=(n(0),n(448)),i={id:"install",title:"pnpm install"},o={unversionedId:"cli/install",id:"version-5.x/cli/install",isDocsHomePage:!1,title:"pnpm install",description:"Aliases: i",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/install.md",slug:"/cli/install",permalink:"/ru/5.x/cli/install",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"pnpm add <\u043f\u0430\u043a\u0435\u0442>",permalink:"/ru/5.x/cli/add"},next:{title:"pnpm update",permalink:"/ru/5.x/cli/update"}},b=[{value:"TL;DR",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;name&gt;",id:"--reportername",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--shamefully-hoist",id:"--shamefully-hoist",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:b};function c(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Aliases: ",Object(r.b)("inlineCode",{parentName:"p"},"i")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),Object(r.b)("p",null,"\u0412 \u0441\u0440\u0435\u0434\u0435 CI \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u043e\u043a\u0444\u0430\u0439\u043b, \u043d\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435."),Object(r.b)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 ",Object(r.b)("a",{parentName:"p",href:"/ru/5.x/workspaces"},"\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u044d\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u043b\u044f ",Object(r.b)("inlineCode",{parentName:"p"},"recursive-install")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("p",null,Object(r.b)("img",{src:n(453).default})),Object(r.b)("h2",{id:"tldr"},"TL;DR"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --offline")),Object(r.b)("td",{parentName:"tr",align:null},"Install offline from the store only")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),Object(r.b)("td",{parentName:"tr",align:null},"Only ",Object(r.b)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is updated")))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"--offline"},"--offline"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e, pnpm \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u044b, \u0443\u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435. \u0415\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e."),Object(r.b)("h3",{id:"--prefer-offline"},"--prefer-offline"),Object(r.b)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.28.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use ",Object(r.b)("inlineCode",{parentName:"p"},"--offline"),"."),Object(r.b)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Do not execute any scripts defined in the project ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and its dependencies."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This flag does not prevent the execution of ",Object(r.b)("a",{parentName:"p",href:"/ru/5.x/pnpmfile"},"pnpmfile.js")))),Object(r.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(r.b)("p",null,"pnpm will not install any package listed in ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies")," if the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),Object(r.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(r.b)("p",null,"Only ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),Object(r.b)("h3",{id:"--no-optional"},"--no-optional"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),Object(r.b)("h3",{id:"--lockfile-only"},"--lockfile-only"),Object(r.b)("p",null,"Added in: v1.26.0 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When used, only updates ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," instead of checking ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),Object(r.b)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),Object(r.b)("p",null,"Added in: v1.37.1 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For non-CI: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"For CI: ",Object(r.b)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present."),Object(r.b)("h3",{id:"--reportername"},"--reporter=","<","name",">"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For TTY stdout: ",Object(r.b)("strong",{parentName:"li"},"default")),Object(r.b)("li",{parentName:"ul"},"For non-TTY stdout: ",Object(r.b)("strong",{parentName:"li"},"append-only")))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"default"),", ",Object(r.b)("strong",{parentName:"li"},"append-only"),", ",Object(r.b)("strong",{parentName:"li"},"ndjson"),", ",Object(r.b)("strong",{parentName:"li"},"silent"))),Object(r.b)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about the installation progress."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",Object(r.b)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),Object(r.b)("h3",{id:"--use-store-server"},"--use-store-server"),Object(r.b)("p",null,"Added in: v1.30.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm server stop")),Object(r.b)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Creates a flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),". ",Object(r.b)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),Object(r.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/ru/5.x/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),c=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return n?l.a.createElement(m,o(o({ref:t},p),{},{components:n})):l.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},453:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);