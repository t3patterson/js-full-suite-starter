webpackJsonp([0],[function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}n(1);var r=n(3),i=t(r),a=n(4),o=(0,i["default"])(1e3).format("$0,0.00");console.log("I would pay "+o+" for this awesome course!");var u=function(e){return console.log(e),"\n      <table>\n         <thead>\n            <tr>\n               <th>&nbsp;</th>\n               <th>Id</th>\n               <th>First</th>\n               <th>Last</th>\n               <th>Email</th>\n\n            </tr>\n         </thead>\n         <tbody>\n               "+e.map(function(e){return"\n                  <tr>\n                     <td><button data-user_id="+e.id+' class="delete-user">x</button></td>\n                     <td>'+e.id+"</td>\n                     <td>"+e.firstName+"</td>\n                     <td>"+e.lastName+"</td>\n                     <td>"+e.email+"</td>\n                  </tr>\n                  "}).join("")+"\n            </tr>\n         </tbody>\n      </table>\n   "};(0,a.getUsers)().then(function(t){var n=t;e.document.getElementById("table").innerHTML=u(n);var r=e.document.getElementsByClassName("delete-user");Array.from(r,function(e){e.addEventListener("click",function(e){var t=e.target,n=e.target.parentNode.parentNode,r=n.parentNode;(0,a.deleteUser)(t.dataset.user_id),r.removeChild(n)})})})}).call(t,function(){return this}())},function(e,t){},,function(e,t,n){var r,i;/*!
	 * numeral.js
	 * version : 1.5.3
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
(function(){function n(e){this._value=e}function a(e,t,n,r){var i,a,o=Math.pow(10,t);return a=(n(e*o)/o).toFixed(t),r&&(i=new RegExp("0{1,"+r+"}$"),a=a.replace(i,"")),a}function o(e,t,n){var r;return r=t.indexOf("$")>-1?l(e,t,n):t.indexOf("%")>-1?c(e,t,n):t.indexOf(":")>-1?s(e,t):d(e._value,t,n)}function u(e,t){var n,r,i,a,o,u=t,l=["KB","MB","GB","TB","PB","EB","ZB","YB"],c=!1;if(t.indexOf(":")>-1)e._value=f(t);else if(t===w)e._value=0;else{for("."!==g[y].delimiters.decimal&&(t=t.replace(/\./g,"").replace(g[y].delimiters.decimal,".")),n=new RegExp("[^a-zA-Z]"+g[y].abbreviations.thousand+"(?:\\)|(\\"+g[y].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+g[y].abbreviations.million+"(?:\\)|(\\"+g[y].currency.symbol+")?(?:\\))?)?$"),i=new RegExp("[^a-zA-Z]"+g[y].abbreviations.billion+"(?:\\)|(\\"+g[y].currency.symbol+")?(?:\\))?)?$"),a=new RegExp("[^a-zA-Z]"+g[y].abbreviations.trillion+"(?:\\)|(\\"+g[y].currency.symbol+")?(?:\\))?)?$"),o=0;o<=l.length&&!(c=t.indexOf(l[o])>-1&&Math.pow(1024,o+1));o++);e._value=(c?c:1)*(u.match(n)?Math.pow(10,3):1)*(u.match(r)?Math.pow(10,6):1)*(u.match(i)?Math.pow(10,9):1)*(u.match(a)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=c?Math.ceil(e._value):e._value}return e._value}function l(e,t,n){var r,i,a=t.indexOf("$"),o=t.indexOf("("),u=t.indexOf("-"),l="";return t.indexOf(" $")>-1?(l=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(l=" ",t=t.replace("$ ","")):t=t.replace("$",""),i=d(e._value,t,n),a<=1?i.indexOf("(")>-1||i.indexOf("-")>-1?(i=i.split(""),r=1,(a<o||a<u)&&(r=0),i.splice(r,0,g[y].currency.symbol+l),i=i.join("")):i=g[y].currency.symbol+l+i:i.indexOf(")")>-1?(i=i.split(""),i.splice(-1,0,l+g[y].currency.symbol),i=i.join("")):i=i+l+g[y].currency.symbol,i}function c(e,t,n){var r,i="",a=100*e._value;return t.indexOf(" %")>-1?(i=" ",t=t.replace(" %","")):t=t.replace("%",""),r=d(a,t,n),r.indexOf(")")>-1?(r=r.split(""),r.splice(-1,0,i+"%"),r=r.join("")):r=r+i+"%",r}function s(e){var t=Math.floor(e._value/60/60),n=Math.floor((e._value-60*t*60)/60),r=Math.round(e._value-60*t*60-60*n);return t+":"+(n<10?"0"+n:n)+":"+(r<10?"0"+r:r)}function f(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}function d(e,t,n){var r,i,o,u,l,c,s=!1,f=!1,d=!1,h="",p=!1,v=!1,m=!1,b=!1,x=!1,O="",_="",M=Math.abs(e),B=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],E="",N=!1;if(0===e&&null!==w)return w;if(t.indexOf("(")>-1?(s=!0,t=t.slice(1,-1)):t.indexOf("+")>-1&&(f=!0,t=t.replace(/\+/g,"")),t.indexOf("a")>-1&&(p=t.indexOf("aK")>=0,v=t.indexOf("aM")>=0,m=t.indexOf("aB")>=0,b=t.indexOf("aT")>=0,x=p||v||m||b,t.indexOf(" a")>-1?(h=" ",t=t.replace(" a","")):t=t.replace("a",""),M>=Math.pow(10,12)&&!x||b?(h+=g[y].abbreviations.trillion,e/=Math.pow(10,12)):M<Math.pow(10,12)&&M>=Math.pow(10,9)&&!x||m?(h+=g[y].abbreviations.billion,e/=Math.pow(10,9)):M<Math.pow(10,9)&&M>=Math.pow(10,6)&&!x||v?(h+=g[y].abbreviations.million,e/=Math.pow(10,6)):(M<Math.pow(10,6)&&M>=Math.pow(10,3)&&!x||p)&&(h+=g[y].abbreviations.thousand,e/=Math.pow(10,3))),t.indexOf("b")>-1)for(t.indexOf(" b")>-1?(O=" ",t=t.replace(" b","")):t=t.replace("b",""),o=0;o<=B.length;o++)if(r=Math.pow(1024,o),i=Math.pow(1024,o+1),e>=r&&e<i){O+=B[o],r>0&&(e/=r);break}return t.indexOf("o")>-1&&(t.indexOf(" o")>-1?(_=" ",t=t.replace(" o","")):t=t.replace("o",""),_+=g[y].ordinal(e)),t.indexOf("[.]")>-1&&(d=!0,t=t.replace("[.]",".")),u=e.toString().split(".")[0],l=t.split(".")[1],c=t.indexOf(","),l?(l.indexOf("[")>-1?(l=l.replace("]",""),l=l.split("["),E=a(e,l[0].length+l[1].length,n,l[1].length)):E=a(e,l.length,n),u=E.split(".")[0],E=E.split(".")[1].length?g[y].delimiters.decimal+E.split(".")[1]:"",d&&0===Number(E.slice(1))&&(E="")):u=a(e,null,n),u.indexOf("-")>-1&&(u=u.slice(1),N=!0),c>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+g[y].delimiters.thousands)),0===t.indexOf(".")&&(u=""),(s&&N?"(":"")+(!s&&N?"-":"")+(!N&&f?"+":"")+u+E+(_?_:"")+(h?h:"")+(O?O:"")+(s&&N?")":"")}function h(e,t){g[e]=t}function p(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)}function v(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var n=p(e),r=p(t);return n>r?n:r},-(1/0))}var m,b="1.5.3",g={},y="en",w=null,x="0,0",O="undefined"!=typeof e&&e.exports;m=function(e){return m.isNumeral(e)?e=e.value():0===e||"undefined"==typeof e?e=0:Number(e)||(e=m.fn.unformat(e)),new n(Number(e))},m.version=b,m.isNumeral=function(e){return e instanceof n},m.language=function(e,t){if(!e)return y;if(e&&!t){if(!g[e])throw new Error("Unknown language : "+e);y=e}return!t&&g[e]||h(e,t),m},m.languageData=function(e){if(!e)return g[y];if(!g[e])throw new Error("Unknown language : "+e);return g[e]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(e){w="string"==typeof e?e:null},m.defaultFormat=function(e){x="string"==typeof e?e:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(e,t){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,r,i=this.length>>>0,a=!1;for(1<arguments.length&&(r=t,a=!0),n=0;i>n;++n)this.hasOwnProperty(n)&&(a?r=e(r,this[n],n,this):(r=this[n],a=!0));if(!a)throw new TypeError("Reduce of empty array with no initial value");return r}),m.fn=n.prototype={clone:function(){return m(this)},format:function(e,t){return o(this,e?e:x,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:u(this,e?e:x)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t,r,i){return e+n*t}var n=v.call(null,this._value,e);return this._value=[this._value,e].reduce(t,0)/n,this},subtract:function(e){function t(e,t,r,i){return e-n*t}var n=v.call(null,this._value,e);return this._value=[e].reduce(t,this._value*n)/n,this},multiply:function(e){function t(e,t,n,r){var i=v(e,t);return e*i*(t*i)/(i*i)}return this._value=[this._value,e].reduce(t,1),this},divide:function(e){function t(e,t,n,r){var i=v(e,t);return e*i/(t*i)}return this._value=[this._value,e].reduce(t),this},difference:function(e){return Math.abs(m(this._value).subtract(e).value())}},O&&(e.exports=m),"undefined"==typeof ender&&(this.numeral=m),r=[],i=function(){return m}.apply(t,r),!(void 0!==i&&(e.exports=i))}).call(this)},function(e,t,n){"use strict";function r(){return fetch((0,u.getBaseUrl)()+"users").then(a,o)}function i(e){var t=new Request((0,u.getBaseUrl)()+"users/"+e,{method:"DELETE"});return fetch(t).then(a,o)}function a(e){return e.json()}function o(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=r,t.deleteUser=i,n(5);var u=n(6)},,function(e,t){"use strict";function n(e,t){t||(t=window.location.href),e=e.replace(/[\][\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}function r(){return n("mockapi")?i.developmentBaseUrl:i.productionBaseUrl}Object.defineProperty(t,"__esModule",{value:!0}),t.getBaseUrl=r;var i={productionBaseUrl:"/",developmentBaseUrl:"http://localhost:4000/"}}]);
//# sourceMappingURL=main.c33988445f68268a83d2.js.map