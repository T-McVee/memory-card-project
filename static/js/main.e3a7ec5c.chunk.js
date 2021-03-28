(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{25:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(5),r=c.n(n),s=c(3),i=c(4),o=c(15),l=(c(25),c(12)),j=c(0),d=function(){return Object(j.jsx)("div",{className:"git-icon",children:Object(j.jsxs)("a",{href:"https://github.com/T-McVee/memory-card-project",target:"blank",children:[Object(j.jsx)("span",{children:"Created by T-McVee "}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(l.a,{icon:["fab","github"]})})]})})},u=function(){return Object(j.jsxs)("div",{className:"heading",children:[Object(j.jsx)("div",{className:"rm-logo"}),Object(j.jsx)("h1",{className:"title",children:"Welcome, To Morty's Memory Mismatch"}),Object(j.jsx)("p",{className:"sub-heading",children:"Don't click the same card twice Morty, or you'll destroy the universe!"})]})},m=function(e){var t=e.htmlFor,c=e.label,a=e.children;return Object(j.jsxs)("div",{className:"form-control",children:[c&&Object(j.jsxs)("label",{htmlFor:t,children:[c,":"]}),a]})},b=function(e){var t=e.handleNameChange,c=e.toggleDeck,a=e.handleSubmit;return Object(j.jsxs)("form",{className:"settings-form",onSubmit:function(e){return a(e)},children:[Object(j.jsxs)("div",{className:"screen",children:[Object(j.jsx)(m,{htmlFor:"name",label:"Name",children:Object(j.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){return t(e)},required:!0})}),Object(j.jsx)("span",{children:"Choose deck"}),Object(j.jsxs)("div",{className:"radio-group",children:[Object(j.jsx)(m,{htmlFor:"morty",label:"Morty",children:Object(j.jsx)("input",{type:"radio",id:"morty",value:"morty",name:"deck",onChange:function(e){return c(e)},checked:!0})}),Object(j.jsx)(m,{htmlFor:"rick",label:"Rick",children:Object(j.jsx)("input",{type:"radio",id:"rick",value:"rick",name:"deck",onChange:function(e){return c(e)}})}),Object(j.jsx)("div",{className:"overlay"})]})]}),Object(j.jsx)(m,{children:Object(j.jsx)("button",{className:"btn-large",type:"submit",children:"Start"})}),e.children]})},h=c(31),O=function(e){var t=e.handleNameChange,c=e.toggleDeck,n=e.handleSubmit,r=Object(a.useState)(!1),i=Object(s.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){return l(!0),function(){l(!1)}}),[]),Object(j.jsx)(h.a,{in:o,timeout:1e3,classNames:"fade",appear:!0,unmountOnExit:!0,children:Object(j.jsxs)("div",{className:"welcome-screen",children:[Object(j.jsx)(d,{}),Object(j.jsx)(u,{}),Object(j.jsx)(b,{handleNameChange:t,toggleDeck:c,handleSubmit:n}),Object(j.jsx)("div",{className:"characters"})]})})},x=c(11),f=c.n(x),g=c(13),v=function(e){var t=e.deckTheme,c=e.setCharacters,n=e.setIsLoading,r=Object(a.useState)(!1),i=Object(s.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){return Object(g.a)(f.a.mark((function e(){var a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://rickandmortyapi.com/api/character/?name=".concat(t),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,c(s.results),setTimeout((function(){n(!1)}),2e3);case 9:case"end":return e.stop()}}),e)})))(),l(!0),function(){l(!1)}})),Object(j.jsx)(h.a,{in:o,timeout:1e3,classNames:"fade",appear:!0,unmountOnExit:!0,children:Object(j.jsx)("div",{className:"loading-screen",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"loading-text",children:"Loading..."}),Object(j.jsx)("div",{className:"loading-portal"})]})})})},N=function(e){var t=e.returnHome,c=Object(a.useState)(!1),n=Object(s.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){return i(!0),function(){i(!1)}}),[]),Object(j.jsxs)("div",{className:"victory-screen",children:[Object(j.jsx)(h.a,{in:r,timeout:3e3,classNames:"spin",appear:!0,unmountOnExit:!0,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"YOU DID IT MORTY!"}),Object(j.jsx)("button",{className:"btn-large",onClick:function(e){return t(e)},children:"Return home"})]})}),Object(j.jsx)("div",{className:"characters characters-victory"})]})},p=function(e){var t=e.returnHome,c=Object(a.useState)(!1),n=Object(s.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){return i(!0),function(){i(!1)}}),[]),Object(j.jsxs)("div",{className:"victory-screen",children:[Object(j.jsx)(h.a,{in:r,timeout:3e3,classNames:"spin",appear:!0,unmountOnExit:!0,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"YOU BLEW IT MORTY!"}),Object(j.jsx)("button",{className:"btn-large",onClick:function(e){return t(e)},children:"Return home"})]})}),Object(j.jsx)("div",{className:"characters characters-fail"})]})},S=c(16),k=function(e){var t=e.playerName,c=e.score,a=e.highScore;return Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"score",children:[Object(j.jsxs)("div",{className:"current",children:[t,"'s score: ",c]}),Object(j.jsxs)("div",{className:"high",children:["High score: ",a.score," - ",a.name]})]}),Object(j.jsx)("div",{className:"credits"})]})})},y=function(e){var t=e.id,c=e.content,a=(e.isClicked,e.handleClick);return Object(j.jsx)(h.a,{children:Object(j.jsxs)("div",{id:t,className:"card",onClick:function(e){return a(e)},children:[Object(j.jsx)("div",{className:"content-img",children:Object(j.jsx)("img",{className:"avatar",src:c.image,alt:""})}),Object(j.jsx)("div",{className:"content-name",children:c.name})]})})},C=function(e){var t=e.cards,c=e.handleClick;return Object(j.jsx)("section",{className:"game-board-outer",id:"gameBoard",children:Object(j.jsx)("div",{className:"game-board-inner",children:t.map((function(e){return Object(j.jsx)(y,{id:e.id,content:e.content,isClicked:e.isClicked,handleClick:c},e.id)}))})})},E=c(14),T=c.n(E),D=function(e){var t=e.playerName,c=e.characters,n=e.isLoading,r=e.setIsLoading,i=e.setGameOver,o=e.setVictory,l=e.storageAvailable,d=e.saveHighScoreToLocalStorage,u=e.getHighScoreFromLocalStorage,m=Object(a.useState)(0),b=Object(s.a)(m,2),O=b[0],x=b[1],f=Object(a.useState)({name:"",score:0}),g=Object(s.a)(f,2),v=g[0],N=g[1],p=Object(a.useState)([]),y=Object(s.a)(p,2),E=y[0],D=y[1],I=Object(a.useState)(!1),L=Object(s.a)(I,2),M=L[0],H=L[1],R=function(e,t){for(var c=[],a=1;a<=e;a++){var n={id:T()(),content:{image:t[a+6].image,name:t[a+6].name},isClicked:!1};c.push(n)}return c},_=function(e){return e.sort((function(){return Math.random()-.5}))};Object(a.useEffect)((function(){H(!0);var e=R(12,c);return D(_(e)),l("localStorage")&&u()&&N(u()),function(){H(!1),r(!0)}}),[]);return Object(j.jsx)(h.a,{in:M,timeout:1e3,classNames:"fade",appear:!0,unmountOnExit:!0,children:Object(j.jsxs)("div",{className:"game-screen",children:[Object(j.jsx)(k,{playerName:t,score:O,highScore:v}),!n&&Object(j.jsx)(C,{characters:c,createDeck:R,cards:E,setCards:D,shuffleDeck:_,handleClick:function(e){var c=function(e){return e.target.id?e.target.id:e.target.parentElement.id?e.target.parentElement.id:e.target.parentElement.parentElement.id}(e),a=Object(S.a)(E.filter((function(e){return e.id===c})))[0];if(a.isClicked)O>=v.score&&d({name:t,score:O}),i(!0);else{a.isClicked=!0;var n=E.filter((function(e){return e.id!==c}));D(n.concat(a)),x(O+1),console.log("current score:",O),D(_(E)),0===E.filter((function(e){return!1===e.isClicked})).length&&(O+1>=v.score&&d({name:t,score:O+1}),o(!0))}}})]})})};i.b.add(o.a);var I=function(){var e=Object(a.useState)("Tim"),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)("morty"),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)({}),u=Object(s.a)(d,2),m=u[0],b=u[1],h=Object(a.useState)(!1),x=Object(s.a)(h,2),f=x[0],g=x[1],S=Object(a.useState)(!1),k=Object(s.a)(S,2),y=k[0],C=k[1],E=Object(a.useState)(!1),T=Object(s.a)(E,2),I=T[0],L=T[1],M=Object(a.useState)(!0),H=Object(s.a)(M,2),R=H[0],_=H[1],w=function(e){e.preventDefault(),g(!1),l("morty"),L(!1),C(!1),_(!0)};return Object(j.jsx)("div",{className:"App",children:f?f&&R?Object(j.jsx)(v,{deckTheme:o,characters:m,setCharacters:b,setIsLoading:_}):f&&I?Object(j.jsx)(N,{returnHome:w}):f&&y?Object(j.jsx)(p,{returnHome:w}):Object(j.jsx)(D,{runGame:f,setRunGame:g,playerName:c,deckTheme:o,characters:m,isLoading:R,setIsLoading:_,setGameOver:C,setVictory:L,storageAvailable:function(e){var t;try{t=window[e];var c="__storage_test__";return t.setItem(c,c),t.removeItem(c),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&t&&0!==t.length}},saveHighScoreToLocalStorage:function(e){localStorage.setItem("highScore",JSON.stringify(e))},getHighScoreFromLocalStorage:function(){return JSON.parse(localStorage.getItem("highScore"))}}):Object(j.jsx)(O,{deckTheme:o,handleNameChange:function(e){var t=e.target.value;n(t)},toggleDeck:function(e){var t=e.target.value;l(t)},handleSubmit:function(e){e.preventDefault(),g(!0)}})})};r.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e3a7ec5c.chunk.js.map