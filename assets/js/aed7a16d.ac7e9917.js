"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79458],{60440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"auto-docs/App/functions/default","title":"default","description":"Admin Docs","source":"@site/docs/auto-docs/App/functions/default.md","sourceDirName":"auto-docs/App/functions","slug":"/auto-docs/App/functions/default","permalink":"/docs/auto-docs/App/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-admin/edit/develop/docs/docs/auto-docs/App/functions/default.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Plugin Architecture","permalink":"/docs/docs/plugins/plugin-architecture"},"next":{"title":"AUTH_TOKEN","permalink":"/docs/auto-docs/Constant/constant/variables/AUTH_TOKEN"}}');var o=t(74848),i=t(28453);const r={},c=void 0,a={},d=[{value:"Important Details",id:"important-details",level:2},{value:"Returns",id:"returns",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/",children:"Admin Docs"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"default"}),"(): ",(0,o.jsx)(n.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/App.tsx#L74",children:"src/App.tsx:74"})]}),"\n",(0,o.jsxs)(n.p,{children:["This is the main function for our application. It sets up all the routes and components,\ndefining how the user can navigate through the app. The function uses React Router's ",(0,o.jsx)(n.code,{children:"Routes"}),"\nand ",(0,o.jsx)(n.code,{children:"Route"})," components to map different URL paths to corresponding screens and components."]}),"\n",(0,o.jsx)(n.h2,{id:"important-details",children:"Important Details"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"UseEffect Hook"}),": This hook checks user authentication status using the ",(0,o.jsx)(n.code,{children:"CHECK_AUTH"})," GraphQL query."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Plugins"}),": It dynamically loads additional routes for any installed plugins."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Routes"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['The root route ("/") takes the user to the ',(0,o.jsx)(n.code,{children:"LoginPage"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Protected routes are wrapped with the ",(0,o.jsx)(n.code,{children:"SecuredRoute"})," component to ensure they are only accessible to authenticated users."]}),"\n",(0,o.jsx)(n.li,{children:"Admin and Super Admin routes allow access to organization and user management screens."}),"\n",(0,o.jsx)(n.li,{children:"User portal routes allow end-users to interact with organizations, settings, chat, events, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"JSX.Element"})}),"\n",(0,o.jsx)(n.p,{children:"The rendered routes and components of the application."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);