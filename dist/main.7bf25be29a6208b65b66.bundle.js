(()=>{"use strict";var __webpack_modules__={863:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function parse(){let value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(value.startsWith("="))try{return eval(value.slice(1))}catch(t){return value}return value}__webpack_require__.d(__webpack_exports__,{q:()=>parse})}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{class t{static get path(){return window.location.hash.slice(1)}static get param(){return t.path.split("/")[1]}static navigate(t){window.location.hash=t}}class e{constructor(t){this.$el="string"==typeof t?document.querySelector(t):t}html(t){return"string"==typeof t?(this.$el.innerHTML=t,this):this.$el.outerHTML.trim()}clear(){return this.html(""),this}text(t){return void 0!==t?(this.$el.textContent=t,this):"input"===this.$el.tagName.toLowerCase()?this.$el.value.trim():this.$el.textContent.trim()}on(t,e){this.$el.addEventListener(t,e)}off(t,e){this.$el.removeEventListener(t,e)}find(t){return n(this.$el.querySelector(t))}append(t){return t instanceof e&&(t=t.$el),Element.prototype.append?this.$el.append(t):this.$el.appendChild(t),this}get data(){return this.$el.dataset}closest(t){return n(this.$el.closest(t))}getCoords(){return this.$el.getBoundingClientRect()}findAll(t){return this.$el.querySelectorAll(t)}css(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(t).forEach((e=>{this.$el.style[e]=t[e]}))}getStyles(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(((t,e)=>(t[e]=this.$el.style[e],t)),{})}id(t){if(t){const t=this.id().split(":");return{row:+t[0],col:+t[1]}}return this.data.id}focus(){return this.$el.focus(),this}attr(t,e){return e?(this.$el.setAttribute(t,e),this):this.$el.getAttribute(t)}addClass(t){return this.$el.classList.add(t),this}removeClass(t){return this.$el.classList.remove(t),this}}function n(t){return new e(t)}n.create=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=document.createElement(t);return e&&r.classList.add(e),n(r)};class r{constructor(t){this.params=t}getRoot(){throw new Error('Method "getRoot" should be implemented!')}afterRender(){}destroy(){}}function s(t,e){return t>e&&([e,t]=[t,e]),new Array(e-t+1).fill("").map(((e,n)=>t+n))}function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e)return JSON.parse(localStorage.getItem(t));localStorage.setItem(t,JSON.stringify(e))}function o(t,e){let n;return function(){for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),t.apply(this,s)}),e)}}function a(t){t.preventDefault()}function c(t){const e=i(t),n=t.split(":")[1];return'\n    <li class="db__record">\n      <a href="#excel/'.concat(n,'">\n        ').concat(e.title,"\n      </a>\n      <strong>\n        ").concat(new Date(e.openedDate).toLocaleDateString(),"\n        ").concat(new Date(e.openedDate).toLocaleTimeString(),"\n      </strong>\n    </li>\n  ")}class l{constructor(t){this.store=t,this.sub=null,this.prevState={}}subscribeComponents(t){this.prevState=this.store.getState(),this.sub=this.store.subscribe((e=>{Object.keys(e).forEach((n=>{var r,s;r=this.prevState[n],s=e[n],("object"==typeof r&&"object"==typeof s?JSON.stringify(r)===JSON.stringify(s):r===s)||t.forEach((t=>{if(t.isWatching(n)){const r={[n]:e[n]};t.storeChanged(r)}}))})),this.prevState=this.store.getState()}))}unsubscribeFromStore(){this.sub.unsubscribe()}}class u{constructor(){this.listeners={}}emit(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return!!Array.isArray(this.listeners[t])&&(this.listeners[t].forEach((t=>{t(...n)})),!0)}subscribe(t,e){return this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e),()=>{this.listeners[t]=this.listeners[t].filter((t=>t!==e))}}}const h="TABLE_RESIZE",d="CHANGE_TEXT",p="APPLY_STYLE",f="CHANGE_STYLES",m="CHANGE_TITLE",v="UPDATE_DATE";function b(){return{type:v}}class g{constructor(t){this.components=t.components||[],this.store=t.store,this.emitter=new u,this.subscriber=new l(this.store)}getRoot(){const t=n.create("div","excel"),e={emitter:this.emitter,store:this.store};return this.components=this.components.map((r=>{const s=n.create("div",r.className),i=new r(s,e);return s.html(i.toHTML()),t.append(s),i})),t}init(){document.addEventListener("contextmenu",a),this.store.dispatch(b),this.subscriber.subscribeComponents(this.components),this.components.forEach((t=>t.init()))}destroy(){this.subscriber.unsubscribeFromStore(),this.components.forEach((t=>t.destroy())),document.removeEventListener("contextmenu",a)}}class _{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t)throw new Error("No $root provided for DomListener!");this.$root=t,this.listeners=e}initDOMListeners(){this.listeners.forEach((t=>{const e=y(t);if(!this[e]){const t=this.name||"";throw new Error("Method ".concat(e," is not implemented in ").concat(t," Component!"))}this[e]=this[e].bind(this),this.$root.on(t,this[e])}))}removeDOMListeners(){this.listeners.forEach((t=>{const e=y(t);this.$root.off(t,this[e])}))}}function y(t){return"on"+("string"!=typeof(e=t)?"":e.charAt(0).toUpperCase()+e.slice(1));var e}class w extends _{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(t,e.listeners),this.name=e.name||"",this.emitter=e.emitter,this.subscribe=e.subscribe||[],this.store=e.store,this.unsubscribers=[],this.prepare()}prepare(){}toHTML(){return""}$emit(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.emitter.emit(t,...n)}$on(t,e){const n=this.emitter.subscribe(t,e);this.unsubscribers.push(n)}$dispatch(t){this.store.dispatch(t)}storeChanged(){}isWatching(t){return this.subscribe.includes(t)}init(){this.initDOMListeners()}destroy(){this.removeDOMListeners(),this.unsubscribers.forEach((t=>t()))}}const S={textAlign:"left",fontWeight:"normal",textDecoration:"none",fontStyle:"normal"},x="Новая таблица";class $ extends w{constructor(t,e){super(t,{name:"Header",listeners:["input","click"],...e})}prepare(){this.onInput=o(this.onInput,300)}toHTML(){const t=this.store.getState().title||x;return'\n      <input type="text" class="input" value="'.concat(t,'">\n      <div>\n        <div class="button" data-button="remove">\n          <span class="material-icons" data-button="remove">\n            delete\n          </span>\n        </div>\n        <div class="button" data-button="exit">\n          <span class="material-icons" data-button="exit">\n            exit_to_app\n          </span>\n        </div>\n      </div>\n    ')}onClick(e){const r=n(e.target);"remove"===r.data.button?confirm("Удаление таблицы необратимо! Вы действительно хотите удалить данную таблицу?")&&(localStorage.removeItem("excel:"+t.param),t.navigate("")):"exit"===r.data.button&&t.navigate("")}onInput(t){const e=n(t.target);var r;this.$dispatch((r=e.text(),{type:m,data:r}))}}function E(t){const e='data-type="button"\n    data-value=\''.concat(JSON.stringify(t.value),"'");return'\n    <div\n      class="button '.concat(t.active?"active":"",'"\n        ').concat(e,'\n    >\n      <span class="material-icons"\n        ').concat(e,"\n      >\n        ").concat(t.incon,"\n      </span>\n    </div>\n  ")}!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}($,"className","excel__header");class T extends w{constructor(){super(...arguments)}get template(){return JSON.stringify(this.state,null,2)}initState(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.state={...t}}setState(t){this.state={...this.state,...t},this.$root.html(this.template)}}class A extends T{constructor(t,e){super(t,{name:"Toolbar",listeners:["click"],subscribe:["currentStyles"],...e})}prepare(){this.initState(S)}get template(){return[{incon:"format_align_left",active:"left"===(t=this.state).textAlign,value:{textAlign:"left"}},{incon:"format_align_center",active:"center"===t.textAlign,value:{textAlign:"center"}},{incon:"format_align_right",active:"right"===t.textAlign,value:{textAlign:"right"}},{incon:"format_bold",active:"bold"===t.fontWeight,value:{fontWeight:"bold"===t.fontWeight?"normal":"bold"}},{incon:"format_italic",active:"italic"===t.fontStyle,value:{fontStyle:"italic"===t.fontStyle?"normal":"italic"}},{incon:"format_underlined",active:"underline"===t.textDecoration,value:{textDecoration:"underline"===t.textDecoration?"none":"underline"}}].map(E).join("");var t}toHTML(){return this.template}storeChanged(t){this.setState(t.currentStyles)}onClick(t){const e=n(t.target);if("button"===e.data.type){const t=JSON.parse(e.data.value);this.$emit("toolbar:applyStyle",t)}}}!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(A,"className","excel__toolbar");class k extends w{constructor(t,e){super(t,{name:"Formula",listeners:["input","keydown"],subscribe:["currentText"],...e})}toHTML(){return'\n      <div class="info">\n        fx\n      </div>\n      <div id="formula" class="input" contenteditable spellcheck="false"></div>\n    '}init(){super.init(),this.$formula=this.$root.find("#formula"),this.$on("table:select",(t=>{this.$formula.text(t.data.value)}))}storeChanged(t){let{currentText:e}=t;this.$formula.text(e)}onInput(t){const e=n(t.target).text();this.$emit("formula:input",e)}onKeydown(t){["Enter","Tab"].includes(t.key)&&(t.preventDefault(),this.$emit("formula:done"))}}!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(k,"className","excel__formula");var L=__webpack_require__(863);const C={A:65,Z:90},j=120,O=24;function N(t,e){return(t[e]||j)+"px"}function D(t,e){return function(n,r){const s="".concat(e,":").concat(r),i=N(t.colState,r),o=t.dataState[s],a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).map((e=>{return"".concat((n=e,n.replace(/([A-Z])/g,(t=>"-".concat(t[0].toLowerCase())))),": ").concat(t[e]);var n})).join("; ")}({...S,...t.stylesState[s]});return'\n      <div \n        class="cell" \n        contenteditable \n        data-col="'.concat(r,'"\n        data-type="cell"\n        data-id="').concat(s,'"\n        data-value="').concat(o||"",'"\n        style="').concat(a,"; width: ").concat(i,'"\n      >\n        ').concat((0,L.q)(o)||"","\n      </div>\n    ")}}function P(t){let{col:e,index:n,width:r}=t;return'\n    <div \n      class="column" \n      data-type="resizable" \n      data-col="'.concat(n,'" \n      style="width: ').concat(r,'"\n    >\n      ').concat(e,'\n      <div class="col-resize" data-resize="col"></div>\n    </div>\n  ')}function H(t,e){const n=t?'<div class="row-resize" data-resize="row"></div>':"",r=function(t,e){return(t[e]||O)+"px"}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t);return'\n    <div \n      class="row" \n      data-type="resizable" \n      data-row="'.concat(t,'"\n      style="height: ').concat(r,'"\n    >\n      <div class="row-info">\n        ').concat(t||"","\n        ").concat(n,'\n      </div>\n      <div class="row-data">\n        ').concat(e,"\n      </div>\n    </div>\n  ")}function I(t,e){return String.fromCharCode(C.A+e)}class M{constructor(){this.group=[],this.current=null}select(t){this.clear(),t.focus().addClass(M.className),this.group.push(t),this.current=t}clear(){this.group.forEach((t=>t.removeClass(M.className))),this.group=[]}get selectedIds(){return this.group.map((t=>t.id()))}selectGroup(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.clear(),this.group=t,this.group.forEach((t=>t.addClass(M.className)))}applyStyle(t){this.group.forEach((e=>e.css(t)))}}!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(M,"className","selected");class R extends w{constructor(t,e){super(t,{name:"Table",listeners:["mousedown","keydown","input"],...e})}toHTML(){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=C.Z-C.A+1,r=[],s=new Array(n).fill("").map(I).map(function(t){return function(e,n){return{col:e,index:n,width:N(t.colState,n)}}}(e)).map(P).join("");r.push(H(null,s));for(let s=0;s<t;s++){const t=new Array(n).fill("").map(D(e,s)).join("");r.push(H(s+1,t,e.rowState))}return r.join("")}(45,this.store.getState())}prepare(){this.selection=new M}init(){super.init(),this.selectCell(this.$root.find('[data-id="0:0"]')),this.$on("formula:input",(t=>{this.selection.current.attr("data-value",t).text((0,L.q)(t)),this.updateTextInStore(t)})),this.$on("formula:done",(()=>{this.selection.current.focus()})),this.$on("toolbar:applyStyle",(t=>{var e;this.selection.applyStyle(t),this.$dispatch((e={value:t,ids:this.selection.selectedIds},{type:p,data:e}))}))}selectCell(t){this.selection.select(t),this.$emit("table:select",t);const e=t.getStyles(Object.keys(S));this.$dispatch({type:f,data:e})}async resizeTable(t){try{const e=await function(t,e){return new Promise((r=>{const s=n(e.target),i=s.closest('[data-type="resizable"]'),o=i.getCoords(),a=s.data.resize,c="col"===a?"bottom":"right";let l;s.css({[c]:"-5000px",opacity:1}),t.findAll('[data-col="'.concat(i.data.col,'"]')),document.onmousemove=t=>{if("col"===a){const e=Math.floor(t.pageX-o.right);l=o.width+e,s.css({right:-e+"px"})}else{const e=Math.floor(t.pageY-o.bottom);l=o.height+e,s.css({bottom:-e+"px"})}},document.onmouseup=e=>{document.onmousemove=null,document.onmouseup=null,"col"===a?(i.css({width:l+"px"}),t.findAll('[data-col="'.concat(i.data.col,'"]')).forEach((t=>t.style.width=l+"px"))):i.css({height:l+"px"}),r({value:l,type:a,id:i.data[a]}),s.css({bottom:0,opacity:0,right:0})}}))}(this.$root,t);this.$dispatch(function(t){return{type:h,data:t}}(e))}catch(t){console.warn("Resize error: ",t.message)}}onMousedown(t){if(function(t){return t.target.dataset.resize}(t))this.resizeTable(t);else if(function(t){return"cell"===t.target.dataset.type}(t)){const e=n(t.target);if(t.shiftKey){const t=function(t,e){const n=t.id(!0),r=e.id(!0),i=s(r.col,n.col),o=s(r.row,n.row);return i.reduce(((t,e)=>(o.forEach((n=>t.push("".concat(n,":").concat(e)))),t)),[])}(e,this.selection.current).map((t=>this.$root.find('[data-id="'.concat(t,'"]'))));this.selection.selectGroup(t)}else this.selectCell(e)}}onKeydown(t){const{key:e}=t;if(["Enter","Tab","ArrowLeft","ArrowRight","ArrowDown","ArrowUp"].includes(e)&&!t.shiftKey){t.preventDefault();const n=this.selection.current.id(!0),r=this.$root.find(function(t,e){let{col:n,row:r}=e;switch(t){case"Enter":case"ArrowDown":r++;break;case"Tab":case"ArrowRight":n++;break;case"ArrowLeft":n=n-1<0?0:n-1;break;case"ArrowUp":r=r-1<0?0:r-1}return'[data-id="'.concat(r,":").concat(n,'"]')}(e,n));this.selectCell(r)}}updateTextInStore(t){var e;this.$dispatch((e={id:this.selection.current.id(),value:t},{type:d,data:e}))}onInput(t){this.updateTextInStore(n(t.target).text())}}function q(t,e){let n,r;switch(e.type){case h:return n="col"===e.data.type?"colState":"rowState",{...t,[n]:J(t,n,e)};case d:return n="dataState",{...t,currentText:e.data.value,[n]:J(t,n,e)};case f:return{...t,currentStyles:e.data};case p:return n="stylesState",r=t[n]||{},e.data.ids.forEach((t=>{r[t]={...r[t],...e.data.value}})),{...t,[n]:r,currentStyles:{...t.currentStyles,...e.data.value}};case m:return{...t,title:e.data};case v:return{...t,openedDate:(new Date).toJSON()};default:return t}}function J(t,e,n){const r=t[e]||{};return r[n.data.id]=n.data.value,r}!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(R,"className","excel__table");const z={title:x,rowState:{},colState:{},dataState:{},stylesState:{},currentText:"",currentStyles:S,openedDate:(new Date).toJSON()};function W(t){return"excel:"+t}new class{constructor(t,e){if(!t)throw new Error("Selector is not provided in Router!");this.$placeholder=n(t),this.routes=e,this.page=null,this.changePageHandler=this.changePageHandler.bind(this),this.init()}init(){window.addEventListener("hashchange",this.changePageHandler),this.changePageHandler()}changePageHandler(){this.page&&this.page.destroy(),this.$placeholder.clear();const e=t.path.includes("excel")?this.routes.excel:this.routes.dashboard;this.page=new e(t.param),this.$placeholder.append(this.page.getRoot()),this.page.afterRender()}destroy(){window.removeEventListener("hashchange",this.changePageHandler)}}("#app",{dashboard:class extends r{getRoot(){const t=Date.now().toString();return n.create("div","db").html('\n          <div class="db__header">\n            <h1>\n              Excel Панель Управления\n            </h1>\n          </div>\n          <div class="db__new">\n            <div class="db__view">\n              <a href="#excel/'.concat(t,'" class="db__create">\n                Новая <br /> Таблица\n              </a>\n            </div>\n          </div>\n          <div class="db__table db__view">\n            ').concat(function(){const t=function(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n.includes("excel")&&t.push(n)}return t}();return t.length?'\n    <div class="db__list-header">\n      <span>\n        Название\n      </span>\n      <span>\n        Дата открытия\n      </span>\n    </div>\n    <ul class="db__list">\n      '.concat(t.map(c).join(""),"\n    </ul>\n  "):"\n      <p>\n        Пока вы не создали не одной таблицы.\n      </p>\n    "}(),"\n          </div>\n        "))}},excel:class extends r{getRoot(){const t=this.params?this.params:Date.now().toString(),e=function(t){let e=t({...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}},{type:"__INIT__"}),n=[];return{subscribe:t=>(n.push(t),{unsubscribe(){n=n.filter((e=>e!==t))}}),dispatch(r){e=t(e,r),n.forEach((t=>t(e)))},getState:()=>JSON.parse(JSON.stringify(e))}}(q,(r=i(W(t)))?(t=>({...t,currentStyles:S,currentText:""}))(r):(s=z,JSON.parse(JSON.stringify(s)))),n=o((e=>{i(W(t),e)}),300);var r,s;return e.subscribe(n),this.excel=new g({components:[$,A,k,R],store:e}),this.excel.getRoot()}afterRender(){this.excel.init()}destroy(){this.excel.destroy()}}})})()})();