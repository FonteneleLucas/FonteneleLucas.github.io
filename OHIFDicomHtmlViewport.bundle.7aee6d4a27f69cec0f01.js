(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{962:function(t,e,r){},985:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(1),i=r.n(a),c=r(15),u=r(70),p=r(66),f={any:function(t,e,r){var n=t[e];if(!(n instanceof Float64Array||n instanceof Float32Array||n instanceof Int32Array||n instanceof Int16Array||n instanceof Int8Array||n instanceof Uint32Array||n instanceof Uint16Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a typed array.")},float64:function(t,e,r){if(!(t[e]instanceof Float64Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Float64Array.")},float32:function(t,e,r){if(!(t[e]instanceof Float32Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Float32Array.")},float:function(t,e,r){if(!(t[e]instanceof Float64Array||t[e]instanceof Float32Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Float32Array or Float64Array.")},int32:function(t,e,r){if(!(t[e]instanceof Int32Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected an Int32Array.")},int16:function(t,e,r){if(!(t[e]instanceof Int16Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected an In16Array.")},int8:function(t,e,r){if(!(t[e]instanceof Int8Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected an Int8Array.")},int:function(t,e,r){if(!(t[e]instanceof Int32Array||t[e]instanceof Int16Array||t[e]instanceof Int8Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected an Int32Array, In16Array, or Int8Array.")},uint32:function(t,e,r){if(!(t[e]instanceof Uint32Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Uint32Array.")},uint16:function(t,e,r){if(!(t[e]instanceof Uint16Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Uint16Array.")},uint8:function(t,e,r){if(!(t[e]instanceof Uint8Array))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Uint8Array.")},uint8clamped:function(t,e,r){if(!(t[e]instanceof Uint8ClampedArray))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Uint8ClampedArray.")},uint:function(t,e,r){if(!(t[e]instanceof Uint32Array||t[e]instanceof Uint16Array||t[e]instanceof Uint8Array||t[e]instanceof Uint8ClampedArray))return new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Expected a Uint32Array, Uint16Array, Uint8Array, or Uint8ClampedArray.")}};r(962);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=p.b,w=m.DicomMetaDictionary,A=m.DicomMessage;function h(t,e){return o.a.createElement("div",{key:t},o.a.createElement("b",null,t),": ",e)}var E=function(t){function e(){var t,r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(t=y(e)).call.apply(t,[this].concat(i)),r=!o||"object"!==l(o)&&"function"!=typeof o?d(n):o,b(d(r),"state",{content:null,error:null}),b(d(r),"setViewportActiveHandler",(function(){var t=r.props,e=t.setViewportActive,n=t.viewportIndex;n!==t.activeViewportIndex&&e(n)})),r}var r,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),r=e,(n=[{key:"componentDidMount",value:function(){this.setContentFromByteArray(this.props.byteArray)}},{key:"setContentFromByteArray",value:function(t){var e=t.buffer,r=A.readFile(e),n=w.naturalizeDataset(r.dict);n._meta=w.namifyDataset(r.meta);var a=function(t){var e=[],r="".concat(t.PatientName," (").concat(t.PatientSex,", #").concat(t.PatientID,")");e.push(h("Paciente",r));var n=t.StudyDescription;e.push(h("Exame",n));var a="".concat(t.SeriesDescription," (#").concat(t.SeriesNumber,")");e.push(h("Series",a));var i="".concat(t.Manufacturer," (").concat(t.ManufacturerModelName,", #").concat(t.DeviceSerialNumber,")");e.push(h("Fabricante",i));var c={CompletionFlag:"Sinalizador de conclusão",VerificationFlag:"Sinalizador de verificação"};Object.keys(c).forEach((function(r){if(t[r]){var n=h(c[r],t[r]);e.push(n)}}));var u="".concat(t.ContentDate," ").concat(t.ContentTime);return e.push(h("Data / Hora da captura",u)),e.push(),o.a.createElement("div",null,e)}(n),i=function t(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.ConceptNameCodeSequence){var a=e.ConceptNameCodeSequence,i=a.CodeMeaning,c=a.CodeValue,u=a.CodingSchemeDesignator;r="".concat(i," (").concat(c," - ").concat(u,")")}var p=[];if(r){var f="h".concat(n);p.push(o.a.createElement(f,{key:r},r))}return Object.keys(e).forEach((function(r){var a,i=e[r];a=i instanceof Object?t(i,n+1):o.a.createElement("div",{key:r},r," - ",e[r]),p.push(a)})),o.a.createElement("div",null,p)}(n),c=o.a.createElement(o.a.Fragment,null,a,i);this.setState({content:c})}},{key:"render",value:function(){var t=this.state,e=t.content,r=t.error;return o.a.createElement("div",{"data-cy":"dicom-html-viewport",className:"DicomHtmlViewport",onClick:this.setViewportActiveHandler,onScroll:this.setViewportActiveHandler},e,r&&o.a.createElement("h2",null,JSON.stringify(r)))}}])&&s(r.prototype,n),a&&s(r,a),e}(n.Component);b(E,"propTypes",{byteArray:f.uint8,setViewportActive:i.a.func.isRequired,viewportIndex:i.a.number.isRequired,activeViewportIndex:i.a.number.isRequired});var I=E,S=c.a.redux.actions.setViewportActive,x=Object(u.b)((function(t,e){var r=e.viewportIndex,n=e.byteArray;return{viewportIndex:r,activeViewportIndex:t.viewports.activeViewportIndex,byteArray:n}}),(function(t,e){var r=e.viewportIndex;return{setViewportActive:function(){t(S(r))}}}))(I);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var F=c.a.utils.DicomLoaderService,P=function(t){function e(){var t,r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,r=!(o=(t=j(e)).call.apply(t,[this].concat(i)))||"object"!==O(o)&&"function"!=typeof o?C(n):o,D(C(r),"state",{byteArray:null,error:null}),r}var r,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(e,t),r=e,(n=[{key:"componentDidMount",value:function(){var t=this,e=this.props.viewportData,r=e.displaySet,n=e.studies;F.findDicomDataPromise(r,n).then((function(e){var r=new Uint8Array(e);t.setState({byteArray:r})}),(function(e){throw t.setState({error:e}),new Error(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.byteArray&&o.a.createElement(x,{byteArray:this.state.byteArray,viewportIndex:this.props.viewportIndex}),this.state.error&&o.a.createElement("h2",null,JSON.stringify(this.state.error)))}}])&&g(r.prototype,n),a&&g(r,a),e}(n.Component);D(P,"propTypes",{studies:i.a.object,displaySet:i.a.object,viewportIndex:i.a.number,viewportData:i.a.object});e.default=P}}]);
//# sourceMappingURL=OHIFDicomHtmlViewport.bundle.7aee6d4a27f69cec0f01.js.map