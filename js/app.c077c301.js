(function(){"use strict";var t={9783:function(t,i,e){var a=e(2856),n=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],o=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"appContainer"}},[i("div",{attrs:{id:"sidebar"}},[t._m(0),i("div",{attrs:{id:"preview-thumbnails"}},[i("button",{staticClass:"thumbnail",on:{click:t.viewUp}},[t._v("View 1")]),i("button",{staticClass:"thumbnail",on:{click:t.viewDown}},[t._v("View 2")]),i("button",{staticClass:"thumbnail",on:{click:t.viewLeft}},[t._v("View 3")]),i("button",{staticClass:"thumbnail",on:{click:t.viewRight}},[t._v("View 4")])])]),t._m(1),t._m(2)])},r=[function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"logo"}},[i("img",{attrs:{src:"https://rio-assets.s3.eu-west-2.amazonaws.com/rio-logo.png",alt:"Logo"}})])},function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"canvasArea"}},[i("canvas",{attrs:{id:"mcanvas"}})])},function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"controlsPanel"}},[i("div",{staticClass:"control-group"},[i("span",{staticClass:"group-label"},[t._v("Diamond Type")]),i("div",{staticClass:"button-group"},[i("button",{staticClass:"object ui-button",attrs:{"data-category":"Basket","data-index":"0"}},[t._v("Cushion Halo")]),i("button",{staticClass:"object ui-button",attrs:{"data-category":"Basket","data-index":"1"}},[t._v("Empty")]),i("button",{staticClass:"object ui-button",attrs:{"data-category":"Basket","data-index":"2"}},[t._v("Pear Halo")])])]),i("div",{staticClass:"control-group"},[i("span",{staticClass:"group-label"},[t._v("Ring Type")]),i("div",{staticClass:"button-group"},[i("button",{staticClass:"object ui-button",attrs:{"data-category":"Ring","data-index":"0"}},[t._v("Alliance")]),i("button",{staticClass:"object ui-button",attrs:{"data-category":"Ring","data-index":"1"}},[t._v("Baguette")])])]),i("div",{staticClass:"control-group"},[i("span",{staticClass:"group-label"},[t._v("Metal")]),i("div",{staticClass:"button-group"},[i("button",{staticClass:"material ui-button",attrs:{"data-category":"Metal","data-index":"0"}},[t._v("Rose")]),i("button",{staticClass:"material ui-button",attrs:{"data-category":"Metal","data-index":"1"}},[t._v("White")])])])])}],c=(e(4114),e(8992),e(2577),e(3949),e(2661)),u={name:"WebgiViewer",data(){return{viewer:null,controls:null}},mounted(){this.setupViewer()},methods:{async setupViewer(){this.viewer=new c.EW5({canvas:this.$el.querySelector("#mcanvas")}),await(0,c.rQr)(this.viewer),await this.viewer.addPlugin(c.GMU);const t=await this.viewer.addPlugin(c.mKI);this.camViewPlugin=this.viewer.plugins.CameraViews,this.viewer.renderer.refreshPipeline(),this.controls=this.viewer.scene.activeCamera.controls,this.view=new c.hzv,console.log("d",this.controls),await this.viewer.load("https://3dassetsmaan.s3.ap-south-1.amazonaws.com/VariationConfiguratorTutorials/1/scene.vjson"),await t.importPath("https://3dassetsmaan.s3.ap-south-1.amazonaws.com/VariationConfiguratorTutorials/1/config.json"),document.querySelectorAll(".object").forEach((i=>{const e=parseInt(i.getAttribute("data-index")),a=t.variations.objects.find((t=>t.name===i.getAttribute("data-category"))),n="objects";i.addEventListener("click",(async()=>{await t.applyVariation(a,e,n)})),0===e&&i.click()})),document.querySelectorAll(".material").forEach((i=>{const e=parseInt(i.getAttribute("data-index")),a=t.variations.materials.find((t=>t.name===i.getAttribute("data-category"))),n="materials";i.addEventListener("click",(async()=>{await t.applyVariation(a,e,n)})),0===e&&i.click()})),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2},async viewUp(){this.controls.autoRotate=!1,this.view.position=new c.Pq0(7,8,7),this.view.up=new c.Pq0(1,1,1),this.camViewPlugin.camViews.push(this.view),await this.camViewPlugin.animateToView(this.view,500),this.viewer.renderer.refreshPipeline()},async viewDown(){this.controls&&(this.controls.autoRotate=!1,this.view.position=new c.Pq0(-13,1,1),this.view.up=new c.Pq0(1,1,1),this.camViewPlugin.camViews.push(this.view),await this.camViewPlugin.animateToView(this.view,500),this.viewer.renderer.refreshPipeline())},async viewLeft(){this.controls&&(this.controls.autoRotate=!1,this.view.position=new c.Pq0(0,13,0),this.view.up=new c.Pq0(1,1,1),this.camViewPlugin.camViews.push(this.view),await this.camViewPlugin.animateToView(this.view,500),this.viewer.renderer.refreshPipeline())},async viewRight(){this.controls&&(this.controls.autoRotate=!1,this.view.position=new c.Pq0(-5,2,12),this.view.up=new c.Pq0(1,1,1),this.camViewPlugin.camViews.push(this.view),await this.camViewPlugin.animateToView(this.view,500),this.viewer.renderer.refreshPipeline())}}},l=u,v=e(1656),w=(0,v.A)(l,o,r,!1,null,null,null),h=w.exports,d={name:"App",components:{HelloWorld:h}},p=d,f=(0,v.A)(p,n,s,!1,null,null,null),m=f.exports;a.Ay.config.productionTip=!1,new a.Ay({render:t=>t(m)}).$mount("#app")}},i={};function e(a){var n=i[a];if(void 0!==n)return n.exports;var s=i[a]={exports:{}};return t[a].call(s.exports,s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(i,a,n,s){if(!a){var o=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],s=t[l][2];for(var r=!0,c=0;c<a.length;c++)(!1&s||o>=s)&&Object.keys(e.O).every((function(t){return e.O[t](a[c])}))?a.splice(c--,1):(r=!1,s<o&&(o=s));if(r){t.splice(l--,1);var u=n();void 0!==u&&(i=u)}}return i}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,n,s]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={524:0};e.O.j=function(i){return 0===t[i]};var i=function(i,a){var n,s,o=a[0],r=a[1],c=a[2],u=0;if(o.some((function(i){return 0!==t[i]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(c)var l=c(e)}for(i&&i(a);u<o.length;u++)s=o[u],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(l)},a=self["webpackChunkring_builder"]=self["webpackChunkring_builder"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=e.O(void 0,[504],(function(){return e(9783)}));a=e.O(a)})();
//# sourceMappingURL=app.c077c301.js.map