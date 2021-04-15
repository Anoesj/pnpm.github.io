(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(318)),l={id:"run",title:"pnpm run"},p={unversionedId:"cli/run",id:"cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/run.md",slug:"/cli/run",permalink:"/ru/next/cli/run",editUrl:"https://crowdin.com/project/pnpm/ru",version:"current",sidebar:"docs",previous:{title:"pnpm why",permalink:"/ru/next/cli/why"},next:{title:"pnpm test",permalink:"/ru/next/cli/test"}},o=[{value:"Examples",id:"examples",children:[]},{value:"Details",id:"details",children:[]},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",children:[]},{value:"Options",id:"options",children:[{value:"script-shell",id:"script-shell",children:[]},{value:"shell-emulator",id:"shell-emulator",children:[]},{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--stream",id:"--stream",children:[]},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Aliases: ",Object(a.b)("inlineCode",{parentName:"p"},"run-script")),Object(a.b)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u043a\u0440\u0438\u043f\u0442, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430 \u043f\u0430\u043a\u0435\u0442\u0430."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Let's say you have a ",Object(a.b)("inlineCode",{parentName:"p"},"watch")," script configured in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),Object(a.b)("p",null,"You can now run that script by using ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right? Another thing to note for those that like to save keystrokes and time is that all scripts get aliased in as pnpm commands, so ultimately ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm watch")," is just shorthand for ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name as already existing pnpm commands)."),Object(a.b)("h2",{id:"details"},"Details"),Object(a.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," includes ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",Object(a.b)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),Object(a.b)("p",null,"And even though ",Object(a.b)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),Object(a.b)("p",null,"For workspaces, as of v3.5, ",Object(a.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),"."),Object(a.b)("h2",{id:"differences-with-npm-run"},"Differences with ",Object(a.b)("inlineCode",{parentName:"h2"},"npm run")),Object(a.b)("p",null,"By default, pnpm doesn't run arbitrary ",Object(a.b)("inlineCode",{parentName:"p"},"pre")," and ",Object(a.b)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",Object(a.b)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),Object(a.b)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",Object(a.b)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"script-shell"},"script-shell"),Object(a.b)("p",null,"Added in: v5.10.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"null")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"path"))),Object(a.b)("p",null,"The shell to use for scripts run with the ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," command."),Object(a.b)("p",null,"For instance, to force usage of Git Bash on Windows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),Object(a.b)("h3",{id:"shell-emulator"},"shell-emulator"),Object(a.b)("p",null,"Added in: v5.8.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),Object(a.b)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),Object(a.b)("p",null,"But if the ",Object(a.b)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),Object(a.b)("h3",{id:"--if-present"},"--if-present"),Object(a.b)("p",null,"Added in: v4.5.0"),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),Object(a.b)("h3",{id:"--parallel"},"--parallel"),Object(a.b)("p",null,"Added in: v5.1.0"),Object(a.b)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),Object(a.b)("h3",{id:"--stream"},"--stream"),Object(a.b)("p",null,"Added in: v5.1.0"),Object(a.b)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),Object(a.b)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),Object(a.b)("p",null,"Added in: v6.1.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/ru/next/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(m,p(p({ref:t},c),{},{components:n})):i.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);