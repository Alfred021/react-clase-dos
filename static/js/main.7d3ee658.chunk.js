(this["webpackJsonpreact-clase-dos"]=this["webpackJsonpreact-clase-dos"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),i=n.n(o),r=(n(19),n(1)),u=function(){return c.a.createElement("div",null,"Primera p\xe1gina de nuestra aplicaci\xf3n")},l=n(6),s=n(2),m=n.n(s),f=(n(20),c.a.forwardRef((function(e,t){var n=e.className,a=e.theme,o=void 0===a?"dark":a,i=e.title,r=Object(l.a)(e,["className","theme","title"]);return c.a.createElement(c.a.Fragment,null,i&&c.a.createElement("label",{htmlFor:i},i),c.a.createElement("input",Object.assign({ref:t,name:i,className:m()("fancy-input",n,"fancy-input--".concat(o))},r)))}))),v=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){return document.title=n,function(){document.title="React App"}})),c.a.createElement(f,{title:"Cambiame!",value:n,onChange:function(e){return o(e.target.value)}})},p=(n(21),function(){var e=Object(a.useState)(window.innerWidth),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=function(){o(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),c.a.createElement("div",null,"Window width: ",n)}),d=function(){var e=function(e){var t=Object(a.useState)(e),n=Object(r.a)(t,2),c=n[0],o=n[1];return{value:c,onChange:function(e){return o(e.target.value)}}}("");return c.a.createElement(f,Object.assign({title:"Custom hook"},e))};n(22);var E=function(e){var t=e.className,n=e.active,a=void 0!==n&&n,o=e.navigation,i=void 0!==o&&o,r=Object(l.a)(e,["className","active","navigation"]);return c.a.createElement("button",Object.assign({className:m()("fancy-button",t,{"fancy-button--navigation":i,"fancy-button--active":a})},r))},b=(n(23),function(){var e=Object(a.useRef)();return c.a.createElement("div",{className:"focusable-input-wrapper"},c.a.createElement(f,{className:"focusable-input",ref:e}),c.a.createElement(E,{onClick:function(){return e.current.focus()}},"Focus that input!"))}),k=n(9),C=n(10),h=n(13),g=n(11),O=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={counter:0},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){document.title="Counter: ".concat(this.state.counter)}},{key:"componentDidUpdate",value:function(){document.title="Counter: ".concat(this.state.counter)}},{key:"componentWillUnmount",value:function(){document.title=""}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",null,this.props.name),c.a.createElement("div",null,"Counter: ",this.state.counter),c.a.createElement(E,{onClick:function(){return e.setState({counter:e.state.counter+1})}},"Add to counter!"))}}]),n}(a.Component),j=(n(24),function(){return c.a.createElement("div",{className:"tictactoe"})}),w=n(12),N=n(4),y=(n(25),function(e){var t=e.value,n=e.position,a=e.onClick,o=void 0===a?function(){}:a;return c.a.createElement("div",{onClick:o,className:m()("square","card",n,{"card-face-up":"face-up"===t},{"card-clear":"card-cleared"===t})},c.a.createElement("div",{className:"inner-card"},c.a.createElement("div",{className:"front-card"}),c.a.createElement("div",{className:"back-card"})))}),T=function(){var e=["red","red","blue","blue","cyan","cyan","violet","violet","green","green","rose","rose","black","black","fuchsia","fuchsia"];return function(e){for(var t=e.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),a=e[n];e[n]=e[t],e[t]=a}}(e),e.map((function(e){return{position:e,value:"face-down"}}))},S=function(e){var t=c.a.useState(e),n=Object(r.a)(t,2),a=n[0],o=n[1],i=c.a.useState(!1),u=Object(r.a)(i,2),l=u[0],s=u[1],m=a.every((function(e){return"card-cleared"===e.value})),f=function(){s(!1)};return{deckOfCards:a,gameEnded:m,clickHandler:function(e){var t=Object(w.a)(a);"face-down"===t[e].value&&(t[e].value="face-up",o(t));var n=a.filter((function(e){return"face-up"===e.value}));return 2===n.length&&(s(!0),n[0].position===n[1].position?setTimeout((function(){!function(){var e=a.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{value:"face-up"===e.value?"card-cleared":e.value})}));o(e)}(),f()}),1e3):setTimeout((function(){!function(){var e=a.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{value:"face-up"===e.value?"face-down":e.value})}));o(e)}(),f()}),1e3)),null},restartGame:function(){o(T())},cardDisabled:l}},F={home:{name:"Home",component:u},titleChanger:{name:"Title Changer",component:v},windowTracker:{name:"Window Tracker",component:p},customHook:{name:"Custom Hook",component:d},focusableInput:{name:"Focusable Input",component:b},uglyClass:{name:"Ugly Class",component:O},ticTacToe:{name:"Tic Tac Toe",component:j},Memotest:{name:"Memotest",component:function(){var e=S(T()),t=e.deckOfCards,n=e.gameEnded,a=e.clickHandler,o=e.restartGame,i=e.cardDisabled;return console.log(t[1].position),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:m()("memotest",{"show-board":n})},c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(y,{value:t[0].value,position:t[0].position,onClick:i?function(){}:function(){return a(0)}}),c.a.createElement(y,{value:t[1].value,position:t[1].position,onClick:i?function(){}:function(){return a(1)}}),c.a.createElement(y,{value:t[2].value,position:t[2].position,onClick:i?function(){}:function(){return a(2)}}),c.a.createElement(y,{value:t[3].value,position:t[3].position,onClick:i?function(){}:function(){return a(3)}})),c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(y,{value:t[4].value,position:t[4].position,onClick:i?function(){}:function(){return a(4)}}),c.a.createElement(y,{value:t[5].value,position:t[5].position,onClick:i?function(){}:function(){return a(5)}}),c.a.createElement(y,{value:t[6].value,position:t[6].position,onClick:i?function(){}:function(){return a(6)}}),c.a.createElement(y,{value:t[7].value,position:t[7].position,onClick:i?function(){}:function(){return a(7)}})),c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(y,{value:t[8].value,position:t[8].position,onClick:i?function(){}:function(){return a(8)}}),c.a.createElement(y,{value:t[9].value,position:t[9].position,onClick:i?function(){}:function(){return a(9)}}),c.a.createElement(y,{value:t[10].value,position:t[10].position,onClick:i?function(){}:function(){return a(10)}}),c.a.createElement(y,{value:t[11].value,position:t[11].position,onClick:i?function(){}:function(){return a(11)}})),c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(y,{value:t[12].value,position:t[12].position,onClick:i?function(){}:function(){return a(12)}}),c.a.createElement(y,{value:t[13].value,position:t[13].position,onClick:i?function(){}:function(){return a(13)}}),c.a.createElement(y,{value:t[14].value,position:t[14].position,onClick:i?function(){}:function(){return a(14)}}),c.a.createElement(y,{value:t[15].value,position:t[15].position,onClick:i?function(){}:function(){return a(15)}}))),c.a.createElement("div",{className:m()({"show-board":!n})},c.a.createElement("strong",null,"Congratulations, Game Completed!!!")),c.a.createElement(E,{onClick:o},"Restart Game"))}}};var H=function(){var e=Object(a.useState)("home"),t=Object(r.a)(e,2),n=t[0],o=t[1],i=F[n].component;return c.a.createElement("div",{className:"app"},c.a.createElement("nav",{className:"app-navigation"},Object.entries(F).map((function(e){var t=Object(r.a)(e,2),a=t[0],i=t[1];return c.a.createElement(E,{active:a===n,key:a,navigation:!0,onClick:function(){return o(a)}},i.name)}))),c.a.createElement("header",{className:"app-page-title"},F[n].name),c.a.createElement("div",{className:"app-content"},c.a.createElement(i,{name:F[n].name})))};i.a.render(c.a.createElement(H,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.7d3ee658.chunk.js.map