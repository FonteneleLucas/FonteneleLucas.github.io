(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{969:function(e,t){},970:function(e,t){},971:function(e,t){},972:function(e,t){},976:function(e,t,r){},984:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r(70),o=r(0),i=r.n(o),c=r(1),u=r.n(c);function p(e){return i.a.createElement(i.a.Fragment,null,e.children)}p.propTypes={id:u.a.string.isRequired,init:u.a.func.isRequired,destroy:u.a.func.isRequired,children:u.a.node};var s=p,f=r(146),l=r.n(f),d=r(934),y=r.n(d),v={any:function(e,t,r){var n=e[t];if(!(n instanceof Float64Array||n instanceof Float32Array||n instanceof Int32Array||n instanceof Int16Array||n instanceof Int8Array||n instanceof Uint32Array||n instanceof Uint16Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a typed array.")},float64:function(e,t,r){if(!(e[t]instanceof Float64Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Float64Array.")},float32:function(e,t,r){if(!(e[t]instanceof Float32Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Float32Array.")},float:function(e,t,r){if(!(e[t]instanceof Float64Array||e[t]instanceof Float32Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Float32Array or Float64Array.")},int32:function(e,t,r){if(!(e[t]instanceof Int32Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected an Int32Array.")},int16:function(e,t,r){if(!(e[t]instanceof Int16Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected an In16Array.")},int8:function(e,t,r){if(!(e[t]instanceof Int8Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected an Int8Array.")},int:function(e,t,r){if(!(e[t]instanceof Int32Array||e[t]instanceof Int16Array||e[t]instanceof Int8Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected an Int32Array, In16Array, or Int8Array.")},uint32:function(e,t,r){if(!(e[t]instanceof Uint32Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Uint32Array.")},uint16:function(e,t,r){if(!(e[t]instanceof Uint16Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Uint16Array.")},uint8:function(e,t,r){if(!(e[t]instanceof Uint8Array))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Uint8Array.")},uint8clamped:function(e,t,r){if(!(e[t]instanceof Uint8ClampedArray))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Uint8ClampedArray.")},uint:function(e,t,r){if(!(e[t]instanceof Uint32Array||e[t]instanceof Uint16Array||e[t]instanceof Uint8Array||e[t]instanceof Uint8ClampedArray))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected a Uint32Array, Uint16Array, Uint8Array, or Uint8ClampedArray.")}},b=(r(976),r(977)),w=r.n(b);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){A(o,n,a,i,c,"next",e)}function c(e){A(o,n,a,i,c,"throw",e)}i(void 0)}))}}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}y.a.GlobalWorkerOptions.workerSrc=w.a;var C={ENCAPSULATED_PDF:"1.2.840.10008.5.1.4.1.1.104.1"},j=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=P(t).call(this,e),r=!a||"object"!==h(a)&&"function"!=typeof a?I(n):a,D(I(r),"updatePDFCanvas",x(regeneratorRuntime.mark((function e(){var t,n,a,o,i,c,u,p,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state,n=t.pdf,a=t.scale,o=t.currentPageIndex,i=r.canvas.getContext("2d"),e.next=4,n.getPage(o);case 4:return c=e.sent,u=c.getViewport({scale:a}),r.canvas.height=u.height,r.canvas.width=u.width,p={canvasContext:i,viewport:u},e.next=11,c.render(p);case 11:return e.next=13,c.getTextContent();case 13:s=e.sent,r.textLayer.innerHTML="",r.textLayer.style.height=u.height+"px",r.textLayer.style.width=u.width+"px",y.a.renderTextLayer({textContent:s,container:r.textLayer,viewport:u,textDivs:[]});case 18:case"end":return e.stop()}}),e)})))),D(I(r),"getPDFFileUrl",(function(e,t){var r=t;if(e){if(e.string("x00080016")!==C.ENCAPSULATED_PDF)throw new Error("This is not a DICOM-encapsulated PDF");var n=e.elements.x00420011,a=n.dataOffset,o=a+n.length;r=e.byteArray.slice(a,o)}var i=new Blob([r],{type:"application/pdf"});return URL.createObjectURL(i)})),D(I(r),"onPageChange",function(){var e=x(regeneratorRuntime.mark((function e(t){var n,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.state,a=n.currentPageIndex,o=n.pdf,i=a,"prev"!==(c=t.target.getAttribute("data-pager"))){e.next=8;break}if(1!==a){e.next=6;break}return e.abrupt("return");case 6:i-=1,a<0&&(i=0);case 8:if("next"!==c){e.next=13;break}if(a!==o.numPages-1){e.next=11;break}return e.abrupt("return");case 11:i+=1,a>o.numPages-1&&(i=o.numPages-1);case 13:r.setState((function(e){return g({},e,{currentPageIndex:i})}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D(I(r),"onZoomChange",(function(){var e=r.state.scale,t=event.target.getAttribute("data-pager");"+"===t&&(e+=.25),"-"===t&&(e-=.25),r.setState((function(t){return g({},t,{scale:e})}))})),D(I(r),"parseByteArray",(function(e){var t;try{t=l.a.parseDicom(e,{untilTag:""})}catch(e){r.setState((function(t){return g({},t,{error:e})}))}return t})),D(I(r),"setViewportActiveHandler",(function(){var e=r.props,t=e.setViewportActive,n=e.viewportIndex;n!==e.activeViewportIndex&&t(n)})),D(I(r),"downloadPDFCanvas",(function(){var e=r.state.fileURL,t=document.createElement("a");t.href=e,t.download=e.substr(e.lastIndexOf("/")+1),document.body.appendChild(t),t.click(),document.body.removeChild(t)})),r.state={fileURL:null,error:null,currentPageIndex:1,pdf:null,scale:1},r.canvas=Object(o.createRef)(),r.textLayer=Object(o.createRef)(),r}var r,n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(c=x(regeneratorRuntime.mark((function e(){var t,r,n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.parseByteArray(this.props.byteArray),r=this.getPDFFileUrl(t,this.props.byteArray),this.setState((function(e){return g({},e,{fileURL:r})})),this.props.useNative){e.next=8;break}return e.next=6,y.a.getDocument(r).promise;case 6:n=e.sent,this.setState((function(e){return g({},e,{pdf:n})}),(function(){return a.updatePDFCanvas()}));case 8:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"componentDidUpdate",value:function(e,t){var r=this.state,n=r.currentPageIndex,a=r.scale,o=t.scale!==a&&a>0,i=t.currentPageIndex!==n&&n>0;(o||i)&&this.updatePDFCanvas()}},{key:"render",value:function(){var e=this,t=this.state,r=t.fileURL,n=t.pdf,a=t.error;return i.a.createElement("div",{className:"DicomPDFViewport",onClick:this.setViewportActiveHandler,onScroll:this.setViewportActiveHandler,style:{width:"100%",height:"100%"}},this.props.useNative?i.a.createElement("object",{"aria-label":"PDF Viewer",data:r,type:"application/pdf",width:"100%",height:"100%"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"toolbar"},i.a.createElement("div",{id:"pager"},n&&n.numPages>1&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{"data-pager":"prev",onClick:this.onPageChange},"<"),i.a.createElement("button",{"data-pager":"next",onClick:this.onPageChange},">")),i.a.createElement("button",{"data-pager":"-",onClick:this.onZoomChange},"-"),i.a.createElement("button",{"data-pager":"+",onClick:this.onZoomChange},"+"),i.a.createElement("button",{onClick:this.downloadPDFCanvas},"Download"))),i.a.createElement("div",{id:"canvas"},i.a.createElement("div",{id:"pdf-canvas-container"},i.a.createElement("canvas",{id:"pdf-canvas",ref:function(t){return e.canvas=t}}),i.a.createElement("div",{id:"text-layer",ref:function(t){return e.textLayer=t}})))),a&&i.a.createElement("h2",null,JSON.stringify(a)))}}])&&E(r.prototype,n),a&&E(r,a),t}(o.Component);D(j,"propTypes",{byteArray:v.uint8,useNative:u.a.bool,viewportData:u.a.object,activeViewportIndex:u.a.number,setViewportActive:u.a.func,viewportIndex:u.a.number}),D(j,"defaultProps",{useNative:!1});var U=j;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=n.a.utils.DicomLoaderService,T=function(e){function t(){var e,r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=this,r=!(a=(e=k(t)).call.apply(e,[this].concat(i)))||"object"!==F(a)&&"function"!=typeof a?V(n):a,_(V(r),"state",{byteArray:null,error:null}),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),r=t,a=[{key:"init",value:function(){console.log("DicomPDFViewport init()")}},{key:"destroy",value:function(){console.log("DicomPDFViewport destroy()")}}],(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props.viewportData,r=t.displaySet,n=t.studies;L.findDicomDataPromise(r,n).then((function(t){return e.setState({byteArray:new Uint8Array(t)})}),(function(t){throw e.setState({error:t}),new Error(t)}))}},{key:"render",value:function(){var e=this.props,r=e.setViewportActive,n=e.viewportIndex,a=e.activeViewportIndex,o=this.state,c=o.byteArray,u=o.error,p={id:t.id,init:t.init,destroy:t.destroy};return i.a.createElement(s,p,c&&i.a.createElement(U,{byteArray:c,setViewportActive:r,viewportIndex:n,activeViewportIndex:a}),u&&i.a.createElement("h2",null,JSON.stringify(u)))}}])&&S(r.prototype,n),a&&S(r,a),t}(o.Component);_(T,"propTypes",{studies:u.a.object,displaySet:u.a.object,viewportIndex:u.a.number,viewportData:u.a.object,activeViewportIndex:u.a.number,setViewportActive:u.a.func}),_(T,"id","DicomPDFViewportPDF");var N=T,H=n.a.redux.actions.setViewportActive,J=Object(a.b)((function(e,t){return{activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e,t){var r=t.viewportIndex;return{setViewportActive:function(){e(H(r))}}}))(N);t.default=J}}]);
//# sourceMappingURL=ConnectedOHIFDicomPDFViewer.bundle.9d64c8eb232289faad78.js.map