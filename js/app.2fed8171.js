(function(){"use strict";var t={7497:function(t,e,r){var n=r(144),i=r(6017),a=r.n(i),o=function(){var t=this,e=t._self._c;return e("div",[e("topNavBat"),e("div",{staticClass:"divdoinput"},[e("p",[t._v("Informe o tamanho da sua matriz: 1 a 99")]),e("div",{staticClass:"centralizador"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.numeroMatriz,expression:"numeroMatriz"}],attrs:{type:"number",min:"1",pattern:"/^-?\\d+\\.?\\d*$/",onKeyPress:"if(this.value.length==2) return false;"},domProps:{value:t.numeroMatriz},on:{input:function(e){e.target.composing||(t.numeroMatriz=e.target.value)}}}),e("div",{staticClass:"dosbotoes"},[e("button",{attrs:{id:"reinicia"},on:{click:t.reiniciaJogo}},[t._v("Reiniciar")]),t.ativarBotaoPlay?e("button",{on:{click:function(e){return e.preventDefault(),t.playGame.apply(null,arguments)}}},[t._v("Play")]):t._e()]),e("p",[t._v("Estamos na geração "+t._s(t.geracoes))])])]),e("div",{staticClass:"tabelinha"},[e("table",t._l(t.grid,(function(r,n){return e("tr",{key:`${r}-${n}`},t._l(r,(function(r,i){return e("td",{key:`${n}-${i}-${r}`,class:t.classes(n,i),on:{click:function(e){return t.clickUsuario(n,i)}}},[t._v("   ")])})),0)})),0)]),e("footerBar")],1)},s=[];r(7658);const u=(t,e,r)=>{let n=0;for(let i of[-1,0,1])for(let a of[-1,0,1]){if(0==i&&0==a)continue;const o=e+i,s=r+a;t[o]?.[s]&&(n+=1)}return n},l=t=>{const e=[];for(let r=0;r<t;r++){const r=[];for(let e=0;e<t;e++){const t=Math.random()>.8;r.push(1*t)}e.push(r)}return e};var c=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"centralizadora"},[e("h1",[t._v("Game of Life")])])}],d=r(1001),v={},h=(0,d.Z)(v,c,f,!1,null,null,null),m=h.exports,p=r(1751),g=r(5223),y=r(4192),_=r(6053),b=function(){var t=this,e=t._self._c;return e(_.Z,{attrs:{dark:"",padless:""}},[e(p.Z,{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:"",id:"footerzinho"}},[e(g.ZB,{staticClass:"white--text pt-0"},[t._v(" Game of Life foi desenvolvido por John Conway em 1970, concretizou a descrição da máquina de Turing Universal(máquina capaz de construir cópias de si) com regras simples. "),e("br"),t._v(" O mais importante desse projeto foi que ele inaugurou o campo da matemática denominada de autômatos celulares. "),e("br"),t._v(" Game of Life é um trabalho simples, mas originou as simulações computacionais. ")]),e(y.Z),e(g.ZB,{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[e("a",{attrs:{href:t.url}},[t._v("Santos")])])])],1)],1)},O=[],w={data(){return{url:"https://www.linkedin.com/in/clarasantosmf/"}}},z=w,k=(0,d.Z)(z,b,O,!1,null,"b0a6d5e0",null),M=k.exports,x={components:{topNavBat:m,footerBar:M},data(){return{grid:[],numeroMatriz:0,gameOver:!1,geracoes:0,ativarBotaoPlay:!0,rotina:null}},methods:{playGame(){this.ativarBotaoPlay=!1;let t=()=>{1==this.gameOver?clearInterval(this.rotina):(this.calculoDaNovaMatriz(),this.geracoes++)};this.grid=l(this.numeroMatriz),this.rotina=setInterval(t,500)},calculoDaNovaMatriz(){let t=JSON.parse(JSON.stringify(this.grid));for(let e=0;e<this.numeroMatriz;e++)for(let r=0;r<this.numeroMatriz;r++){let n=u(this.grid,e,r);1===this.grid[e][r]?(n<2||n>3)&&(t[e][r]=0):3===n&&(t[e][r]=1)}return JSON.stringify(t)==JSON.stringify(this.grid)&&(this.gameOver=!0),this.grid=t,t},classes(t,e){return{pintado:this.grid[t][e]}},reiniciaJogo(){this.grid=[],this.gameOver=!1,this.geracoes=0,this.ativarBotaoPlay=!0},clickUsuario(t,e){console.log("Ainda não funciona como deveria"),this.rotina&&(this.grid[t][e]=0==this.grid[t][e]?1:0)}}},C=x,P=(0,d.Z)(C,o,s,!1,null,"68061f28",null),B=P.exports;r(8556);n["default"].config.productionTip=!1,n["default"].use(a()),new n["default"]({render:t=>t(B)}).$mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,a){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],a=t[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,i,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,o=n[0],s=n[1],u=n[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(u)var c=u(r)}for(e&&e(n);l<o.length;l++)a=o[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(c)},n=self["webpackChunksawvue"]=self["webpackChunksawvue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7497)}));n=r.O(n)})();
//# sourceMappingURL=app.2fed8171.js.map