(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/recipe-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,a,r,!1,null,null,null),u=c.exports,h=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("TestComponent"),n("h2",[t._v("this is also where you html ")]),n("p",[t._v("this is a view though which is suppoed to be like a static page like a home or an about or something, which you put the compononents (sections, whatever) onto in some sort of layout (it's actually probably bad practice that i'm writing so much here but whatever)")]),n("p",[t._v("(there's also the app page that's kinda where everything gets put into but that doesn't really matter unless we wanna change the navigation etc)")]),n("p",[t._v("every time you want to import a component you just do the three things this one has; you import it in the script, list it under components where this page gets exported, and then put it like in the actual html wherever you want it to go. pretty handy for organization")]),n("b-button",{on:{click:t.showScriptInfo}},[t._v("Click Me For Script Info")]),t.showScript?n("div",[n("p",[t._v("Javascript stuff goes in the script section; you put any variables you really wanna keep in the data return section, and define all your functions in the methods section")]),n("p",[t._v("then you can call functions at certain things the user does (like @click or @change) or at certain times, which is what the 'created' section is (there are other times you can call stuff too, like when the page is updated after a form is submited and stuff like that) ")]),n("p",[t._v("anyway there's probably more stuff that's relevant to know but that's all i can think of for now, have fun goofing off")])]):t._e()],1)},p=[],f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("hi sarah this is where you html")]),n("p",[t._v("everything has to go into one big div in the template every time but after that you can do div section etc however ya want")]),n("p",[t._v("this is a test component within the homepage to fiddle around with")]),n("p",[t._v("components are things that you put within a page basically, so you could have a whole bunch of different things on a page like a search form and like a thing of response stuff and like a grocery list section idk that's just my thoughts maybe we want more components or maybe that's enough? idk it's a way to separate things that you can then all import into one thing")]),n("p",[t._v("they're good for organization or like style stuff because you can style components and main view pages differently; see the style section for where to put css")])])}],v={name:"TestComponent",props:{msg:String}},m=v,y=(n("66a9"),Object(i["a"])(m,f,d,!1,null,"0024131c",null)),g=y.exports,b={name:"Home",components:{TestComponent:g},data:function(){return{testvariable:"hi sarah",showScript:!1}},created:function(){console.log(this.testvariable)},methods:{testFunction:function(){console.log(this.testvariable)},showScriptInfo:function(){this.showScript=!0}}},w=b,_=Object(i["a"])(w,l,p,!1,null,null,null),k=_.exports;o["a"].use(h["a"]);var j=[{path:"/",name:"Home",component:k}],O=new h["a"]({mode:"history",base:"/recipe-list/",routes:j}),S=O,x=n("289d");o["a"].config.productionTip=!1,o["a"].use(x["a"]),new o["a"]({router:S,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"66a9":function(t,e,n){"use strict";n("bd30")},"9c0c":function(t,e,n){},bd30:function(t,e,n){}});
//# sourceMappingURL=app.a33bc152.js.map