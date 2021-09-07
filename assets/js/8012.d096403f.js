"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8012,9514],{12004:function(e,t,n){n.r(t);var a=n(67294),r=n(7359),o=n(54416);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},15502:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},26266:function(e,t,n){var a=n(67294),r=n(15502);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},91148:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(51384),c=n(19257),s=n(51402),u=n(34455),m="socialBar_2nY3",d="socialLink_1As6",f="socialImage_2plZ",v="socialTitle_3JEm",b=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function g(e){var t=e.title,n=e.imageUrl,a=e.url,r=e.backgroundColor;return o.createElement("a",{className:(0,l.Z)("padding-horiz--sm padding-vert--md",d),style:{backgroundColor:r},href:a},o.createElement("img",{className:(0,l.Z)(f),src:(0,s.Z)(n)}),o.createElement("div",{className:(0,l.Z)(v)},t))}var p=function(){return o.createElement("div",{className:(0,l.Z)(m)},b.map((function(e,t){return o.createElement(g,(0,a.Z)({key:t},e))})))},h=["to","href","label","prependBaseUrlToHref"];function _(e){var t=e.to,n=e.href,l=e.label,c=e.prependBaseUrlToHref,u=(0,r.Z)(e,h),m=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?d:n}:{to:m},u),l)}var E=function(e){var t=e.sources,n=e.alt;return o.createElement(u.Z,{className:"footer__logo",alt:n,sources:t})};var k=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,s.Z)(m.src),dark:(0,s.Z)(m.srcDark||m.src)};return e?o.createElement(o.Fragment,null,o.createElement("footer",{className:(0,l.Z)("footer","padding--none","padding-top--xl",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"footer-container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(_,e))}))):null)}))),(m||n)&&o.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},m&&(m.src||m.srcDark)&&o.createElement("div",null,m.href?o.createElement(i.Z,{href:m.href},o.createElement(E,{alt:m.alt,sources:d})):o.createElement(E,{alt:m.alt,sources:d})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),o.createElement(p,null))):null}},53366:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(22122),r=n(67294),o=n(86010),l=n(54416),i=n(67859),c=n(19257),s=n(5730),u=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,l=e.checked,i=e.disabled,c=e.onChange,s=(0,r.useState)(l),u=s[0],m=s[1],d=(0,r.useState)(!1),f=d[0],v=d[1],b=(0,r.useRef)(null);return r.createElement("div",{className:(0,o.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":f,"toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=b.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:b,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=b.current)||t.click())}}))}));function m(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,o=t.darkIconStyle,l=t.lightIcon,i=t.lightIconStyle,m=(0,s.Z)();return r.createElement(u,(0,a.Z)({disabled:!m,styles:{unchecked:i,checked:o},icons:{unchecked:l,checked:n}},e))}var d=n(26266),f=n(98565),v=n(74909),b=n(27213),g=n(64090),p=n(90974),h=n(3089),_="toggle_2xs0",E="navbarHideable_1VR7",k="navbarHidden_1FmO",w="right";function Z(){return(0,c.LU)().navbar.items}function N(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,d.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function y(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,v.Z)(t);var i=Z(),s=N(),u=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),l=(0,c.D9)(o),i=(0,r.useState)((function(){return!1})),s=i[0],u=i[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(m,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,o.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(g.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var C=function(){var e,t,n,l,s,u,d,v=(0,c.LU)().navbar,C=v.hideOnScroll,D=v.style,I=(t=(0,b.Z)(),n="mobile"===t,l=(0,r.useState)(!1),s=l[0],u=l[1],d=(0,r.useCallback)((function(){u((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&u(!1)}),[t]),{shouldRender:n,toggle:d,shown:s}),x=N(),B=(0,f.Z)(C),L=B.navbarRef,S=B.isNavbarVisible,A=Z(),T=A.some((function(e){return"search"===e.type})),U=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:w)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:w)}))}}(A),R=U.leftItems,P=U.rightItems;return r.createElement("nav",{ref:L,className:(0,o.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===D,"navbar--primary":"primary"===D,"navbar-sidebar--show":I.shown},e[E]=C,e[k]=C&&!S,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),R.map((function(e,t){return r.createElement(g.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.createElement(g.Z,(0,a.Z)({},e,{key:t}))})),!T&&r.createElement(i.Z,null),!x.disabled&&r.createElement(m,{className:_,checked:x.isDarkTheme,onChange:x.toggle}),(null==A?void 0:A.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:I.toggle,onKeyDown:I.toggle},r.createElement(h.Z,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I.toggle}),I.shouldRender&&r.createElement(y,{sidebarShown:I.shown,toggleSidebar:I.toggle}))}},78358:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(51384),c=n(51402),s=n(78168),u=n(71699),m=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function b(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,d=e.href,f=e.label,v=e.sublabel,b=e.icon,g=e.activeClassName,p=void 0===g?"navbar__link--active":g,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,m),E=(0,c.Z)(l),k=(0,c.Z)(t),w=(0,c.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),N="dropdown__link--active"===p;return o.createElement(i.Z,(0,a.Z)({},d?{href:h?w:d}:Object.assign({isNavLink:!0,activeClassName:p,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),_),o.createElement("div",{className:"link"},b&&o.createElement("div",{className:"link__icon"},b),o.createElement("div",{className:"link__body"},o.createElement("div",{className:"link__label"},Z?o.createElement("span",null,f,o.createElement(s.Z,N&&{width:12,height:12})):f),v&&o.createElement("div",{className:"link__sublabel"},v))))}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,d),s=o.createElement(b,(0,a.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?o.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,v));if("category-header"===a.to){return o.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},a.label)}var l=n?p:g;return o.createElement(l,a)}},16679:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),o=n(67294),l=n(78358),i=n(57617),c=n(86010),s=n(19257),u=n(79861),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,b=(0,r.Z)(e,m),g=(0,i.useActiveDocContext)(v),p=g.activeVersion,h=g.activeDoc,_=(0,s.J)(v).preferredVersion,E=(0,i.useLatestVersion)(v),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,u.uniq)([p,_,E].filter(Boolean)),n);return o.createElement(l.Z,(0,a.Z)({exact:!0},b,{className:(0,c.Z)(b.className,(t={},t[d]=h&&h.sidebar===k.sidebar,t)),label:null!=f?f:k.id,to:k.path}))}},68510:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),o=n(67294),l=n(78358),i=n(61142),c=n(57617),s=n(19257),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,r.Z)(e,u),h=(0,c.useActiveDocContext)(f),_=(0,c.useVersions)(f),E=(0,c.useLatestVersion)(f),k=(0,s.J)(f),w=k.preferredVersion,Z=k.savePreferredVersionName;var N,y=(N=_.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){Z(e.name)}}})),[].concat(b,N,g)),C=null!=(t=null!=(n=h.activeVersion)?n:w)?t:E,D=d&&y?"Versions":C.label,I=d&&y?void 0:m(C).path;return y.length<=1?o.createElement(l.Z,(0,a.Z)({},p,{mobile:d,label:D,to:I,isActive:v?function(){return!1}:void 0})):o.createElement(i.Z,(0,a.Z)({},p,{mobile:d,label:D,to:I,items:y,isActive:v?function(){return!1}:void 0}))}},18384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(22122),r=n(19756),o=n(67294),l=n(78358),i=n(57617),c=n(19257),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,i.useActiveVersion)(m),v=(0,c.J)(m).preferredVersion,b=(0,i.useLatestVersion)(m),g=null!=(t=null!=f?f:v)?t:b,p=null!=n?n:g.label,h=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,a.Z)({},d,{label:p,to:h}))}},61142:function(e,t,n){var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(19257),c=n(78358),s=n(64090),u=["items","position","className"],m=["items","className","position"],d=["mobile","isDropdownItem"];function f(e,t){return!!(0,i.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,n=e.items,m=e.position,d=e.className,v=(0,r.Z)(e,u),b=(0,o.useRef)(null),g=(0,o.useRef)(null),p=(0,o.useState)(!1),h=p[0],_=p[1],E=function(e,t,n){var a=t.filter((function(e){return f(e,(0,i.be)())})),r=e;return a.length&&(r=Object.assign({},a[0],{label:e.label+" > "+a[0].label})),r}(v,n,(0,i.be)());return(0,o.useEffect)((function(){var e=function(e){b.current&&!b.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[b]),o.createElement("div",{ref:b,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===m,"dropdown--show":h})},o.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",d)},E,{onClick:v.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=v.children)?t:v.label),o.createElement("ul",{ref:g,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=b.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.be)(),b=function(e,t){return e.some((function(e){return f(e,t)}))}(n,v),g=(0,i.uR)({initialState:function(){return!b}}),p=g.collapsed,h=g.toggleCollapsed,_=g.setCollapsed;return(0,o.useEffect)((function(){b&&_(!b)}),[v,b]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":p})},o.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.isDropdownItem,(0,r.Z)(e,d)),l=n?b:v;return o.createElement(l,a)}},64090:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(19756),r=n(67294),o=n(78358),l=n(61142),i=n(22122),c=n(86010),s=n(19257),u=["items","label","className"],m=["className"],d=["items_","layout","position","className"],f=["items_","className","position","layout"],v=["mobile"];function b(e,t){return e.some((function(e){e.items?b(e.items,t):function(e,t){!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function g(e){var t,n=e.items,r=e.label,o=e.className,l=(0,a.Z)(e,u),i={items:[],index:0};n?(r&&i.items.push({label:r,className:o}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:r,className:o},l));return i}function p(e){var t=e.className,n=(0,a.Z)(e,m);if(n.to||n.href)return r.createElement(o.O,(0,i.Z)({className:(0,c.Z)("dropdown__link",t),activeClassName:"dropdown__link--active"},n));if(n.label)return r.createElement("div",{className:"mega-dropdown__label"},n.label);throw"Mega dropdown item must be a link or a category header."}function h(e){var t,n=e.items_,l=e.layout,u=e.position,m=e.className,f=(0,a.Z)(e,d),v=b(n,(0,s.be)()),h=(0,r.useRef)(null),_=(0,r.useState)(!1),E=_[0],k=_[1],w=n.map(g),Z=l.length,N=Math.max.apply(Math,l.map((function(e){return e.split(/\s+/).length}))),y=[];l.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(y[t+n*Z]=e)}))}));for(var C=y.map((function(e){var t,n=w[e];if(n)return null!=(t=n.items[n.index++])?t:null})),D=[],I=null,x=0;x<Z;x++){for(var B=[],L=0;L<N;L++){var S=C[x+L*Z];B.push(S),S&&(I=S)}D.push(B)}return I.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,r.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[h]),r.createElement(r.Fragment,null,r.createElement("div",{ref:h,className:(0,c.Z)("navbar__item","dropdown",{"dropdown--right":"right"===u}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},r.createElement(o.O,(0,i.Z)({className:(0,c.Z)("navbar__link",{"navbar__link--active":v},m)},f,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!E))}}),null!=(t=f.children)?t:f.label)),r.createElement("div",{className:(0,c.Z)("mega-dropdown__container",{"mega-dropdown__container--show":E})},r.createElement("div",{className:"mega-dropdown__menu"},r.createElement("div",{className:"mega-dropdown__grid"},D.map((function(e,t){return r.createElement("div",{className:"row row--no-gutters mega-dropdown__row",key:t},e.map((function(e,t){return r.createElement("div",{className:"col margin-horiz--xs mega-dropdown__col",key:t},e?r.createElement(p,e):null)})))}))))))}function _(e){var t,n=e.items_,l=e.className,u=(e.position,e.layout,(0,a.Z)(e,f)),m=(0,s.be)(),d=b(n,m),v=(0,s.uR)({initialState:function(){return!d}}),g=v.collapsed,p=v.toggleCollapsed,h=v.setCollapsed;return(0,r.useEffect)((function(){d&&h(!d)}),[m,d]),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement(o.O,(0,i.Z)({role:"button",className:(0,c.Z)("menu__link menu__link--sublist",l)},u,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=u.children)?t:u.label),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return r.createElement(x,(0,i.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}var E=function(e){var t=e.mobile,n=void 0!==t&&t,o=(0,a.Z)(e,v),l=n?_:h;return r.createElement(l,o)},k=n(4194),w=n(6832),Z=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function N(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,a.Z)(e,Z),u=(0,w.Z)().i18n,m=u.currentLocale,d=u.locales,f=u.localeConfigs,v=(0,s.l5)();function b(e){return f[e].label}var g=d.map((function(e){var t="pathname://"+v.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===m?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),p=[].concat(n,g,o),h=t?"Languages":b(m);return r.createElement(l.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(k.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:p}))}var y=n(67859);function C(e){return e.mobile?null:r.createElement(y.Z,null)}var D=["type"],I={default:function(){return o.Z},localeDropdown:function(){return N},search:function(){return C},dropdown:function(){return l.Z},megaDropdown:function(){return E},docsVersion:function(){return n(18384).Z},docsVersionDropdown:function(){return n(68510).Z},doc:function(){return n(16679).Z}};function x(e){var t=e.type,n=(0,a.Z)(e,D),o=function(e){var t=I[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items,void 0!==n.layout));return r.createElement(o,n)}}}]);