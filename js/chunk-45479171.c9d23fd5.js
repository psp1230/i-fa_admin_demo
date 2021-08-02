(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45479171"],{"17b3":function(t,e,a){},"297c":function(t,e,a){"use strict";a("a9e3");var i=a("2b0e"),s=a("5530"),n=a("ade3"),r=(a("c7cd"),a("6ece"),a("0789")),o=a("90a2"),l=a("a9ad"),c=a("fe6c"),u=a("a452"),h=a("7560"),d=a("80d2"),v=a("58df"),p=Object(v["a"])(l["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),u["a"],h["a"]),g=p.extend({name:"v-progress-linear",directives:{intersect:o["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(d["f"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(s["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?r["b"]:r["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["l"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},onObserve:function(t,e,a){this.isVisible=a},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=g;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4b85":function(t,e,a){},"615b":function(t,e,a){},"6ece":function(t,e,a){},"891e":function(t,e,a){"use strict";var i=a("2909"),s=a("5530"),n=(a("a9e3"),a("99af"),a("d3b7"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),r=a("dc22"),o=a("a9ad"),l=a("de2c"),c=a("7560"),u=a("58df");e["a"]=Object(u["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(s["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,s=Math.floor(e/2),n=this.length-s+1+a;if(this.value>s&&this.value<n){var r=1,o=this.length,l=this.value-s+2,c=this.value+s-2-a,u=l-1===r+1?2:"...",h=c+1===o-1?c+1:"...";return[1,u].concat(Object(i["a"])(this.range(l,c)),[h,this.length])}if(this.value===s){var d=this.value+s-1-a;return[].concat(Object(i["a"])(this.range(1,d)),["...",this.length])}if(this.value===n){var v=this.value-s+1;return[1,"..."].concat(Object(i["a"])(this.range(v,this.length)))}return[].concat(Object(i["a"])(this.range(1,s)),["..."],Object(i["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":s},on:a?{}:{click:i}},[t(n["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},8929:function(t,e,a){"use strict";a("bb66")},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var i=a("2b0e");function s(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,s=a.data,n=a.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var r=s.attrs;if(r){s.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,n)}})}var n=a("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,s=e.data,r=e.children,o=s.attrs;return o&&(s.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),r)}})},b0af:function(t,e,a){"use strict";var i=a("5530"),s=(a("a9e3"),a("0481"),a("615b"),a("10d2")),n=a("297c"),r=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(n["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},bb66:function(t,e,a){},e2f8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pt-8"}),a("v-container",[a("div",{staticClass:"data-table"},[a("div",{staticClass:"d-flex justify-space-between align-center flex-wrap"},[a("div",{staticClass:"d-flex"},[a("v-icon",{staticClass:"ml-4",attrs:{"x-large":""}},[t._v("mdi-account")]),a("h5",{staticClass:"table-title"},[t._v("客服對話列表")])],1),a("div",{staticClass:"my-3"},[t._v(" 一頁顯示 "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.totalData,expression:"totalData"}],staticClass:"onepageshow-select mx-1",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.totalData=e.target.multiple?a:a[0]},function(e){return t.selectServiceList()}]}},[a("option",{attrs:{value:"5",selected:""}},[t._v("5")]),a("option",{attrs:{value:"10"}},[t._v("10")]),a("option",{attrs:{value:"20"}},[t._v("20")]),a("option",{domProps:{value:t.serviceData.total}},[t._v("All")])]),t._v(" 筆資料 ")])]),t._l(t.serviceList,(function(e){return a("v-card",{key:e.name,staticClass:"my-2"},[a("v-container",[a("div",{staticClass:"\n              d-flex\n              justify-space-between\n              align-center\n              black--text\n              text-decoration-none\n            ",on:{click:function(a){return t.toContent(e.service_id)}}},[a("div",{staticClass:"d-flex flex-column"},[a("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(e.subject))]),a("p",{staticClass:"text-subtitle-1 mb-0 text-content"},[t._v(" "+t._s(e.service_text)+" ")]),a("p",{staticClass:"text-subtitle-1 mb-0"},[a("v-icon",[t._v("mdi-clock-time-eight-outline")]),t._v(" "+t._s(e.time_create.replace("T"," "))+" ")],1)]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.service_status))])])])],1)})),a("div",{staticClass:"page-nav"},[a("div",{staticClass:"py-2 py-md-0"},[t._v(" 顯示第"+t._s(t.first)+"至"+t._s(t.last)+"筆資料，共"+t._s(t.serviceData.total)+"筆資料 ")]),a("div",{staticClass:"d-block d-md-flex align-center justify-space-center"},[a("div",{staticClass:"text-center mr-md-4 py-2 py-md-0"},[a("v-pagination",{attrs:{length:t.serviceData.total_page,"total-visible":5,circle:""},on:{input:function(e){return t.showServiceList()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("div",{staticClass:"text-center py-2 py-md-0"},[t._v(" 前往 "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.page,expression:"page"}],staticClass:"onepageshow-select mx-1",attrs:{type:"number"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.page=e.target.multiple?a:a[0]},function(e){return t.showServiceList()}]}},[a("option",{attrs:{selected:""},domProps:{value:Number(1)}},[t._v("1")]),t._l(t.selectTotalPage,(function(e){return a("option",{key:e,domProps:{value:e+1}},[t._v(" "+t._s(e+1)+" ")])}))],2),t._v(" 頁 ")])])])],2)]),a("div",{staticClass:"pt-16"})],1)},s=[],n=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("a9e3"),a("365c")),r={name:"App",data:function(){return{serviceList:"",serviceData:"",page:1,totalData:5,first:1,last:5,selectTotalPage:null}},created:function(){var t=this;this.last=this.totalData;var e=new URLSearchParams;e.append("pageNo",this.page),e.append("pageSize",this.totalData),Object(n["d"])(e).then((function(e){t.serviceList=e.data.datas,t.serviceData=e.data,t.selectTotalPage=t.serviceData.total_page-1,console.log(e)}))},methods:{selectServiceList:function(){var t=this;this.page=1,this.first=1,this.last=Number(this.totalData),this.page>1&&(this.first=this.first+(this.page-1)*this.totalData,this.page==this.serviceData.total_page?this.last=this.serviceData.total:this.last=this.last+(this.page-1)*this.totalData);var e=new URLSearchParams;e.append("pageNo",this.page),e.append("pageSize",this.totalData),Object(n["d"])(e).then((function(e){t.serviceList=e.data.datas,t.serviceData=e.data}))},showServiceList:function(){var t=this;this.first=1,this.last=Number(this.totalData),this.page>1&&(this.first=this.first+(this.page-1)*this.totalData,this.page==this.serviceData.total_page?this.last=this.serviceData.total:this.last=this.last+(this.page-1)*this.totalData);var e=new URLSearchParams;e.append("pageNo",this.page),e.append("pageSize",this.totalData),Object(n["d"])(e).then((function(e){t.serviceList=e.data.datas,t.serviceData=e.data}))},toContent:function(t){this.$router.push({path:"/service/".concat(t)})}}},o=r,l=(a("8929"),a("2877")),c=a("6544"),u=a.n(c),h=a("b0af"),d=a("a523"),v=a("132d"),p=a("891e"),g=Object(l["a"])(o,i,s,!1,null,"fe74adae",null);e["default"]=g.exports;u()(g,{VCard:h["a"],VContainer:d["a"],VIcon:v["a"],VPagination:p["a"]})}}]);
//# sourceMappingURL=chunk-45479171.c9d23fd5.js.map