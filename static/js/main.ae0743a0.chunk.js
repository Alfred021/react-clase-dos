(this["webpackJsonpreact-clase-dos"]=this["webpackJsonpreact-clase-dos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),i=(n(18),n(1)),u=function(){return c.a.createElement("div",null,"Primera p\xe1gina de nuestra aplicaci\xf3n")},l=n(5),s=n(2),m=n.n(s),f=(n(19),c.a.forwardRef((function(e,t){var n=e.className,a=e.theme,r=void 0===a?"dark":a,o=e.title,i=Object(l.a)(e,["className","theme","title"]);return c.a.createElement(c.a.Fragment,null,o&&c.a.createElement("label",{htmlFor:o},o),c.a.createElement("input",Object.assign({ref:t,name:o,className:m()("fancy-input",n,"fancy-input--".concat(r))},i)))}))),v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return document.title=n,function(){document.title="React App"}})),c.a.createElement(f,{title:"Cambiame!",value:n,onChange:function(e){return r(e.target.value)}})},d=(n(20),function(){var e=Object(a.useState)(window.innerWidth),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),c.a.createElement("div",null,"Window width: ",n)}),p=function(){var e=function(e){var t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1];return{value:c,onChange:function(e){return r(e.target.value)}}}("");return c.a.createElement(f,Object.assign({title:"Custom hook"},e))};n(21);var E=function(e){var t=e.className,n=e.active,a=void 0!==n&&n,r=e.navigation,o=void 0!==r&&r,i=Object(l.a)(e,["className","active","navigation"]);return c.a.createElement("button",Object.assign({className:m()("fancy-button",t,{"fancy-button--navigation":o,"fancy-button--active":a})},i))},b=(n(22),function(){var e=Object(a.useRef)();return c.a.createElement("div",{className:"focusable-input-wrapper"},c.a.createElement(f,{className:"focusable-input",ref:e}),c.a.createElement(E,{onClick:function(){return e.current.focus()}},"Focus that input!"))}),h=n(9),w=n(10),O=n(12),k=n(11),C=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={counter:0},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){document.title="Counter: ".concat(this.state.counter)}},{key:"componentDidUpdate",value:function(){document.title="Counter: ".concat(this.state.counter)}},{key:"componentWillUnmount",value:function(){document.title=""}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",null,this.props.name),c.a.createElement("div",null,"Counter: ",this.state.counter),c.a.createElement(E,{onClick:function(){return e.setState({counter:e.state.counter+1})}},"Add to counter!"))}}]),n}(a.Component),g=n(6),j=(n(23),function(e){var t=e.value,n=e.onClick,a=void 0===n?function(){}:n;return c.a.createElement("div",{onClick:a,className:"square"},t)}),y=function(e){var t=e.show,n=e.winner,a=e.onRestart,r=void 0===a?function(){}:a;return c.a.createElement("div",{className:m()("winner-card",{"winner-card--hidden":!t})},c.a.createElement("span",{className:"winner-card-text"},n?"Player ".concat(n," has won the game!"):"It's a tie!"),c.a.createElement(E,{onClick:r},"Play again?"))},N={home:{name:"Home",component:u},titleChanger:{name:"Title Changer",component:v},windowTracker:{name:"Window Tracker",component:d},customHook:{name:"Custom Hook",component:p},focusableInput:{name:"Focusable Input",component:b},uglyClass:{name:"Ugly Class",component:C},ticTacToe:{name:"Tic Tac Toe",component:function(){var e=function(e){var t=c.a.useState(["","","","","","","","",""]),n=Object(i.a)(t,2),a=n[0],r=n[1],o=c.a.useState(e),u=Object(i.a)(o,2),l=u[0],s=u[1],m=function(e,t){var n="X"===t?"O":"X";return function(e,t){for(var n=0;n<3;n++)if(e[n]===t&&e[n+3]===t&&e[n+6]===t)return!0}(e,n)||function(e,t){for(var n=0;n<7;n+=3)if(e[n]===t&&e[n+1]===t&&e[n+2]===t)return!0}(e,n)||function(e,t){if(e[4]===t){if(e[0]===t&&e[8]===t)return!0;if(e[2]===t&&e[6]===t)return!0}}(e,n)?n:null}(a,l),f=0!==a.filter((function(e){return""===e})).length,v=null!==m||!f;return{tiles:a,currentPlayer:l,winner:m,gameEnded:v,setTileTo:function(e,t){v||""===a[e]&&(r([].concat(Object(g.a)(a.slice(0,e)),[t],Object(g.a)(a.slice(e+1)))),s("X"===t?"O":"X"))},restart:function(){r(["","","","","","","","",""])}}}("O"),t=e.tiles,n=e.currentPlayer,a=e.winner,r=e.gameEnded,o=e.setTileTo,u=e.restart;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tictactoe"},c.a.createElement(y,{show:r,winner:a,onRestart:u}),c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(j,{value:t[0],onClick:function(){return o(0,n)}}),c.a.createElement(j,{value:t[1],onClick:function(){return o(1,n)}}),c.a.createElement(j,{value:t[2],onClick:function(){return o(2,n)}})),c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(j,{value:t[3],onClick:function(){return o(3,n)}}),c.a.createElement(j,{value:t[4],onClick:function(){return o(4,n)}}),c.a.createElement(j,{value:t[5],onClick:function(){return o(5,n)}})),c.a.createElement("div",{className:"tictactoe-row"},c.a.createElement(j,{value:t[6],onClick:function(){return o(6,n)}}),c.a.createElement(j,{value:t[7],onClick:function(){return o(7,n)}}),c.a.createElement(j,{value:t[8],onClick:function(){return o(8,n)}}))))}}};var T=function(){var e=Object(a.useState)("home"),t=Object(i.a)(e,2),n=t[0],r=t[1],o=N[n].component;return c.a.createElement("div",{className:"app"},c.a.createElement("nav",{className:"app-navigation"},Object.entries(N).map((function(e){var t=Object(i.a)(e,2),a=t[0],o=t[1];return c.a.createElement(E,{active:a===n,key:a,navigation:!0,onClick:function(){return r(a)}},o.name)}))),c.a.createElement("header",{className:"app-page-title"},N[n].name),c.a.createElement("div",{className:"app-content"},c.a.createElement(o,{name:N[n].name})))};o.a.render(c.a.createElement(T,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.ae0743a0.chunk.js.map