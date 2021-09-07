"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3089,9514],{52935:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(6832),l=n(18607),o=n(91891),i=n(51384),c=n(54416);var s=function(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(i.Z,{className:"pagination-nav__link",to:n},a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",a.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&a.createElement(i.Z,{className:"pagination-nav__link",to:r},a.createElement("div",{className:"pagination-nav__label"},a.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=n(19257);var u=function(e){var t=e.metadata,n=e.items,i=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return a.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},n.map((function(e){var t=e.content;return a.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},a.createElement(t,null))})),a.createElement(s,{metadata:t}))}},91891:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(67294),r=n(86010),l=n(3905),o=n(54416),i=n(51384),c=n(51402),s=n(19257),m=n(83949),u=n(30513),d="blogHeader_11Jz",g="blogPostTitle_nmLu",v="blogPostData_3WzT",f="blogPostDetailsFull_3bEF",b="blogPostDataContainer_1pWc",p="tagsList_1Cfm",h=n(21192),_=n(16509);var E=function(e){var t,n,E,k,Z=(E=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),w=(0,c.C)().withBaseUrl,N=e.children,y=e.frontMatter,C=e.assets,D=e.metadata,I=e.truncated,x=e.isBlogPostPage,T=void 0!==x&&x,B=D.date,P=D.formattedDate,L=D.permalink,S=D.tags,A=D.readingTime,U=D.title,R=D.editUrl,M=D.authors,V=null!=(t=C.image)?t:y.image;return a.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(k=T?"h1":"h2",a.createElement("header",{className:d},a.createElement(k,{className:g,itemProp:"headline"},T?U:a.createElement(i.Z,{itemProp:"url",to:L},U)),a.createElement("div",{className:"row row--no-gutters"},a.createElement("div",{className:"col"},a.createElement(_.Z,{authors:M,assets:C})),a.createElement("div",{className:(0,r.Z)(v,"margin-vert--md","col")},a.createElement("div",{className:b},a.createElement("time",{dateTime:B,itemProp:"datePublished"},P),void 0!==A&&a.createElement(a.Fragment,null," \xb7 ",Z(A))))))),V&&a.createElement("meta",{itemProp:"image",content:w(V,{absolute:!0})}),a.createElement("div",{className:"markdown",itemProp:"articleBody"},a.createElement(l.Zo,{components:m.Z},N)),(S.length>0||I)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(n={},n[f]=T,n))},S.length>0&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":!T})},a.createElement("div",{className:p},a.createElement(h.Z,{tags:S}))),T&&R&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:R})),!T&&I&&a.createElement("div",{className:"col col--3 text--right"},a.createElement(i.Z,{to:D.permalink,"aria-label":"Read more about "+U},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},30513:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(54416),l=n(23779),o=n(15987);function i(e){var t=e.editUrl,n=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return a.createElement(a.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a.createElement(l.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):a.createElement(o.Z,{editUrl:t}))}},91148:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(22122),r=n(19756),l=n(67294),o=n(86010),i=n(51384),c=n(19257),s=n(51402),m=n(34455),u="socialBar_2nY3",d="socialLink_1As6",g="socialImage_2plZ",v="socialTitle_3JEm",f=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function b(e){var t=e.title,n=e.imageUrl,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,o.Z)("padding-horiz--sm padding-vert--md",d),style:{backgroundColor:r},href:a},l.createElement("img",{className:(0,o.Z)(g),src:(0,s.Z)(n)}),l.createElement("div",{className:(0,o.Z)(v)},t))}var p=function(){return l.createElement("div",{className:(0,o.Z)(u)},f.map((function(e,t){return l.createElement(b,(0,a.Z)({key:t},e))})))},h=["to","href","label","prependBaseUrlToHref"];function _(e){var t=e.to,n=e.href,o=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,h),u=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?d:n}:{to:u},m),o)}var E=function(e){var t=e.sources,n=e.alt;return l.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};var k=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,m=t.logo,u=void 0===m?{}:m,d={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,o.Z)("footer","padding--none","padding-top--xl",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"footer-container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(_,e))}))):null)}))),(u||n)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(i.Z,{href:u.href},l.createElement(E,{alt:u.alt,sources:d})):l.createElement(E,{alt:u.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),l.createElement(p,null))):null}},53366:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(22122),r=n(67294),l=n(86010),o=n(54416),i=n(67859),c=n(19257),s=n(5730),m=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,o=e.checked,i=e.disabled,c=e.onChange,s=(0,r.useState)(o),m=s[0],u=s[1],d=(0,r.useState)(!1),g=d[0],v=d[1],f=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":g,"toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=f.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:f,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!m)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=f.current)||t.click())}}))}));function u(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,i=t.lightIconStyle,u=(0,s.Z)();return r.createElement(m,(0,a.Z)({disabled:!u,styles:{unchecked:i,checked:l},icons:{unchecked:o,checked:n}},e))}var d=n(26266),g=n(98565),v=n(74909),f=n(27213),b=n(64090),p=n(90974),h=n(3089),_="toggle_2xs0",E="navbarHideable_1VR7",k="navbarHidden_1FmO",Z="right";function w(){return(0,c.LU)().navbar.items}function N(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,d.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function y(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,v.Z)(t);var i=w(),s=N(),m=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),o=(0,c.D9)(l),i=(0,r.useState)((function(){return!1})),s=i[0],m=i[1];(0,r.useEffect)((function(){l&&!o&&m(!0)}),[l,o]);var u=!!l;return(0,r.useEffect)((function(){u?n||m(!0):m(!1)}),[n,u]),{shown:s,hide:(0,r.useCallback)((function(){m(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(u,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var C=function(){var e,t,n,o,s,m,d,v=(0,c.LU)().navbar,C=v.hideOnScroll,D=v.style,I=(t=(0,f.Z)(),n="mobile"===t,o=(0,r.useState)(!1),s=o[0],m=o[1],d=(0,r.useCallback)((function(){m((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&m(!1)}),[t]),{shouldRender:n,toggle:d,shown:s}),x=N(),T=(0,g.Z)(C),B=T.navbarRef,P=T.isNavbarVisible,L=w(),S=L.some((function(e){return"search"===e.type})),A=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:Z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:Z)}))}}(L),U=A.leftItems,R=A.rightItems;return r.createElement("nav",{ref:B,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===D,"navbar--primary":"primary"===D,"navbar-sidebar--show":I.shown},e[E]=C,e[k]=C&&!P,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),U.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},R.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))})),!S&&r.createElement(i.Z,null),!x.disabled&&r.createElement(u,{className:_,checked:x.isDarkTheme,onChange:x.toggle}),(null==L?void 0:L.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:I.toggle,onKeyDown:I.toggle},r.createElement(h.Z,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I.toggle}),I.shouldRender&&r.createElement(y,{sidebarShown:I.shown,toggleSidebar:I.toggle}))}},78358:function(e,t,n){n.d(t,{O:function(){return f}});var a=n(22122),r=n(19756),l=n(67294),o=n(86010),i=n(51384),c=n(51402),s=n(78168),m=n(71699),u=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],g=["className","isDropdownItem"],v=["mobile","position"];function f(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,d=e.href,g=e.label,v=e.sublabel,f=e.icon,b=e.activeClassName,p=void 0===b?"navbar__link--active":b,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,u),E=(0,c.Z)(o),k=(0,c.Z)(t),Z=(0,c.Z)(d,{forcePrependBaseUrl:!0}),w=g&&d&&!(0,m.Z)(d),N="dropdown__link--active"===p;return l.createElement(i.Z,(0,a.Z)({},d?{href:h?Z:d}:Object.assign({isNavLink:!0,activeClassName:p,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),_),l.createElement("div",{className:"link"},f&&l.createElement("div",{className:"link__icon"},f),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},w?l.createElement("span",null,g,l.createElement(s.Z,N&&{width:12,height:12})):g),v&&l.createElement("div",{className:"link__sublabel"},v))))}function b(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,d),s=l.createElement(f,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,g));return l.createElement("li",{className:"menu__list-item"},l.createElement(f,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,v));if("category-header"===a.to){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},a.label)}var o=n?p:b;return l.createElement(o,a)}},16679:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),l=n(67294),o=n(78358),i=n(57617),c=n(86010),s=n(19257),m=n(79861),u=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,g=e.label,v=e.docsPluginId,f=(0,r.Z)(e,u),b=(0,i.useActiveDocContext)(v),p=b.activeVersion,h=b.activeDoc,_=(0,s.J)(v).preferredVersion,E=(0,i.useLatestVersion)(v),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([p,_,E].filter(Boolean)),n);return l.createElement(o.Z,(0,a.Z)({exact:!0},f,{className:(0,c.Z)(f.className,(t={},t[d]=h&&h.sidebar===k.sidebar,t)),label:null!=g?g:k.id,to:k.path}))}},68510:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),l=n(67294),o=n(78358),i=n(61142),c=n(57617),s=n(19257),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,g=e.docsPluginId,v=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,r.Z)(e,m),h=(0,c.useActiveDocContext)(g),_=(0,c.useVersions)(g),E=(0,c.useLatestVersion)(g),k=(0,s.J)(g),Z=k.preferredVersion,w=k.savePreferredVersionName;var N,y=(N=_.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(f,N,b)),C=null!=(t=null!=(n=h.activeVersion)?n:Z)?t:E,D=d&&y?"Versions":C.label,I=d&&y?void 0:u(C).path;return y.length<=1?l.createElement(o.Z,(0,a.Z)({},p,{mobile:d,label:D,to:I,isActive:v?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},p,{mobile:d,label:D,to:I,items:y,isActive:v?function(){return!1}:void 0}))}},18384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(22122),r=n(19756),l=n(67294),o=n(78358),i=n(57617),c=n(19257),s=["label","to","docsPluginId"];function m(e){var t,n=e.label,m=e.to,u=e.docsPluginId,d=(0,r.Z)(e,s),g=(0,i.useActiveVersion)(u),v=(0,c.J)(u).preferredVersion,f=(0,i.useLatestVersion)(u),b=null!=(t=null!=g?g:v)?t:f,p=null!=n?n:b.label,h=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:p,to:h}))}},61142:function(e,t,n){var a=n(22122),r=n(19756),l=n(67294),o=n(86010),i=n(19257),c=n(78358),s=n(64090),m=["items","position","className"],u=["items","className","position"],d=["mobile","isDropdownItem"];function g(e,t){return!!(0,i.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,n=e.items,u=e.position,d=e.className,v=(0,r.Z)(e,m),f=(0,l.useRef)(null),b=(0,l.useRef)(null),p=(0,l.useState)(!1),h=p[0],_=p[1],E=function(e,t,n){var a=t.filter((function(e){return g(e,(0,i.be)())})),r=e;return a.length&&(r=Object.assign({},a[0],{label:e.label+" > "+a[0].label})),r}(v,n,(0,i.be)());return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===u,"dropdown--show":h})},l.createElement(c.O,(0,a.Z)({className:(0,o.Z)("navbar__item navbar__link",d)},E,{onClick:v.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=v.children)?t:v.label),l.createElement("ul",{ref:b,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function f(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,u)),v=(0,i.be)(),f=function(e,t){return e.some((function(e){return g(e,t)}))}(n,v),b=(0,i.uR)({initialState:function(){return!f}}),p=b.collapsed,h=b.toggleCollapsed,_=b.setCollapsed;return(0,l.useEffect)((function(){f&&_(!f)}),[v,f]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.isDropdownItem,(0,r.Z)(e,d)),o=n?f:v;return l.createElement(o,a)}},64090:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(19756),r=n(67294),l=n(78358),o=n(61142),i=n(22122),c=n(86010),s=n(19257),m=["items","label","className"],u=["className"],d=["items_","layout","position","className"],g=["items_","className","position","layout"],v=["mobile"];function f(e,t){return e.some((function(e){e.items?f(e.items,t):function(e,t){!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function b(e){var t,n=e.items,r=e.label,l=e.className,o=(0,a.Z)(e,m),i={items:[],index:0};n?(r&&i.items.push({label:r,className:l}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:r,className:l},o));return i}function p(e){var t=e.className,n=(0,a.Z)(e,u);if(n.to||n.href)return r.createElement(l.O,(0,i.Z)({className:(0,c.Z)("dropdown__link",t),activeClassName:"dropdown__link--active"},n));if(n.label)return r.createElement("div",{className:"mega-dropdown__label"},n.label);throw"Mega dropdown item must be a link or a category header."}function h(e){var t,n=e.items_,o=e.layout,m=e.position,u=e.className,g=(0,a.Z)(e,d),v=f(n,(0,s.be)()),h=(0,r.useRef)(null),_=(0,r.useState)(!1),E=_[0],k=_[1],Z=n.map(b),w=o.length,N=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),y=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(y[t+n*w]=e)}))}));for(var C=y.map((function(e){var t,n=Z[e];if(n)return null!=(t=n.items[n.index++])?t:null})),D=[],I=null,x=0;x<w;x++){for(var T=[],B=0;B<N;B++){var P=C[x+B*w];T.push(P),P&&(I=P)}D.push(T)}return I.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,r.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[h]),r.createElement(r.Fragment,null,r.createElement("div",{ref:h,className:(0,c.Z)("navbar__item","dropdown",{"dropdown--right":"right"===m}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},r.createElement(l.O,(0,i.Z)({className:(0,c.Z)("navbar__link",{"navbar__link--active":v},u)},g,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!E))}}),null!=(t=g.children)?t:g.label)),r.createElement("div",{className:(0,c.Z)("mega-dropdown__container",{"mega-dropdown__container--show":E})},r.createElement("div",{className:"mega-dropdown__menu"},r.createElement("div",{className:"mega-dropdown__grid"},D.map((function(e,t){return r.createElement("div",{className:"row row--no-gutters mega-dropdown__row",key:t},e.map((function(e,t){return r.createElement("div",{className:"col margin-horiz--xs mega-dropdown__col",key:t},e?r.createElement(p,e):null)})))}))))))}function _(e){var t,n=e.items_,o=e.className,m=(e.position,e.layout,(0,a.Z)(e,g)),u=(0,s.be)(),d=f(n,u),v=(0,s.uR)({initialState:function(){return!d}}),b=v.collapsed,p=v.toggleCollapsed,h=v.setCollapsed;return(0,r.useEffect)((function(){d&&h(!d)}),[u,d]),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":b})},r.createElement(l.O,(0,i.Z)({role:"button",className:(0,c.Z)("menu__link menu__link--sublist",o)},m,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=m.children)?t:m.label),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return r.createElement(x,(0,i.Z)({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}var E=function(e){var t=e.mobile,n=void 0!==t&&t,l=(0,a.Z)(e,v),o=n?_:h;return r.createElement(o,l)},k=n(4194),Z=n(6832),w=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function N(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,c=(0,a.Z)(e,w),m=(0,Z.Z)().i18n,u=m.currentLocale,d=m.locales,g=m.localeConfigs,v=(0,s.l5)();function f(e){return g[e].label}var b=d.map((function(e){var t="pathname://"+v.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),p=[].concat(n,b,l),h=t?"Languages":f(u);return r.createElement(o.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(k.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:p}))}var y=n(67859);function C(e){return e.mobile?null:r.createElement(y.Z,null)}var D=["type"],I={default:function(){return l.Z},localeDropdown:function(){return N},search:function(){return C},dropdown:function(){return o.Z},megaDropdown:function(){return E},docsVersion:function(){return n(18384).Z},docsVersionDropdown:function(){return n(68510).Z},doc:function(){return n(16679).Z}};function x(e){var t=e.type,n=(0,a.Z)(e,D),l=function(e){var t=I[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items,void 0!==n.layout));return r.createElement(l,n)}}}]);