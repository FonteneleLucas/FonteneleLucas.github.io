(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{924:function(e,t,n){"use strict";var i=n(70),r=n(0),o=n.n(r),a=n(1),s=n.n(a),u=n(12),c=n.n(u),p=n(543),l=n(15),d=n(232),f=n(17),m=n(5),v=n.n(m),y=n(937),h=n(29),b=(n(945),n(241)),g=n(11),w=n.n(g),S=n(24),I=n.n(S),O=(0,w.a.import)("util/scrollToIndex"),P=l.a.redux.actions.setViewportSpecificData,E=Object(i.b)((function(e){var t=e.viewports,n=(t.viewportSpecificData[t.activeViewportIndex]||{}).cine;return{activeEnabledElement:b.a.runCommand("getActiveViewportEnabledElement"),activeViewportCineData:n||{isPlaying:!1,cineFrameRate:24},activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e){return{dispatchSetViewportSpecificData:function(t,n){e(P(t,n))}}}),(function(e,t,n){var i=e.activeEnabledElement,r=e.activeViewportCineData,o=e.activeViewportIndex;return{cineFrameRate:r.cineFrameRate,isPlaying:r.isPlaying,onPlayPauseChanged:function(e){var n=I()(r);n.isPlaying=!n.isPlaying,t.dispatchSetViewportSpecificData(o,{cine:n})},onFrameRateChanged:function(e){var n=I()(r);n.cineFrameRate=e,t.dispatchSetViewportSpecificData(o,{cine:n})},onClickNextButton:function(){var e=w.a.getToolState(i,"stack");if(e&&e.data&&e.data.length){var t=e.data[0],n=t.currentImageIdIndex;n>=t.imageIds.length-1||O(i,n+1)}},onClickBackButton:function(){var e=w.a.getToolState(i,"stack");if(e&&e.data&&e.data.length){var t=e.data[0].currentImageIdIndex;0!==t&&O(i,t-1)}},onClickSkipToStart:function(){var e=w.a.getToolState(i,"stack");e&&e.data&&e.data.length&&O(i,0)},onClickSkipToEnd:function(){var e=w.a.getToolState(i,"stack");if(e&&e.data&&e.data.length){var t=e.data[0].imageIds.length-1;O(i,t)}}}}))(f.c),x=l.a.redux.actions,C=x.setLayout,D=x.setViewportActive,T=Object(i.b)((function(e){return{currentLayout:e.viewports.layout,activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e){return{onChange:function(t,n,i){for(var r=[],o=t.row+1,a=t.col+1,s=o*a,u=0;u<s;u++){var c=n.viewports[u],p=c&&c.plugin;c&&c.vtk&&(p="cornerstone"),r.push({plugin:p})}var l={numRows:o,numColumns:a,viewports:r};i>s-1&&e(D(0)),e(C(l))}}}),(function(e,t){var n=t.onChange,i=e.currentLayout,r=e.activeViewportIndex;return{onChange:function(e){return n(e,i,r)}}}))(f.k);function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A,L,N,q=function(e){function t(e){var n,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=U(t).call(this,e),n=!r||"object"!==R(r)&&"function"!=typeof r?k(i):r;var o=W.call(k(n));n.state={toolbarButtons:o,activeButtons:[]},n._handleBuiltIn=Y.bind(k(n));var a=b.c.modules[p.a.PANEL];return n.buttonGroups={left:[{value:"studies",icon:"th-large",bottomLabel:n.props.t("Series")}],right:[]},a.forEach((function(e){var t=e.module,i=Array.from(t.defaultContext);t.menuOptions.forEach((function(e){var t=Array.from(e.context||i);if(n.props.activeContexts.some((function(e){return t.includes(e)}))){var r={value:e.target,icon:e.icon,bottomLabel:e.label},o=e.from||"right";n.buttonGroups[o].push(r)}}))})),n}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(i=[{key:"componentDidUpdate",value:function(e){e.activeContexts!==this.props.activeContexts&&this.setState({toolbarButtons:W.call(this)})}},{key:"render",value:function(){var e=this,t=G.call(this,this.state.toolbarButtons,this.state.activeButtons),n=function(t,n){e.props.handleSidePanelChange(t,n)},i=n.bind(this,"left"),r=n.bind(this,"right");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ToolbarRow"},o.a.createElement("div",{className:"pull-left m-t-1 p-y-1",style:{padding:"10px"}},o.a.createElement(f.r,{options:this.buttonGroups.left,value:this.props.selectedLeftSidePanel||"",onValueChanged:i})),t,o.a.createElement(T,null),o.a.createElement("div",{className:"pull-right m-t-1 rm-x-1",style:{marginLeft:"auto"}},this.buttonGroups.right.length&&o.a.createElement(f.r,{options:this.buttonGroups.right,value:this.props.selectedRightSidePanel||"",onValueChanged:r}))))}}])&&V(n.prototype,i),r&&V(n,r),t}(r.Component);function M(e,t){var n=e.CustomComponent;if("function"==typeof n){var i=t.map((function(e){return e.id})),r=i.includes(e.id);return o.a.createElement(n,{parentContext:this,toolbarClickCallback:J.bind(this),button:e,key:e.id,activeButtons:i,isActive:r})}}function B(e,t){var n,i=this,r=e.buttons.map((function(e){return e.onClick=J.bind(i,e),t.map((function(e){return e.id})).indexOf(e.id)>-1&&(n=e.id),e}));return o.a.createElement(f.g,{key:e.id,label:e.label,icon:e.icon,buttons:r,activeCommand:n})}function F(e,t){return o.a.createElement(f.C,{key:e.id,label:e.label,icon:e.icon,onClick:J.bind(this,e),isActive:t.map((function(e){return e.id})).includes(e.id)})}function G(e,t){var n=this;return e.map((function(e){var i=e.CustomComponent,r=e.buttons&&e.buttons.length;return i?M.call(n,e,t):r?B.call(n,e,t):F.call(n,e,t)}))}function J(e,t,n){var i=this.state.activeButtons;if(e.commandName){var r=Object.assign({evt:t},e.commandOptions);b.a.runCommand(e.commandName,r)}if("setToolActive"===e.type){var o=i.filter((function(e){var t=e.options;return t&&!t.togglable}));this.setState({activeButtons:[].concat(j(o),[e])})}else"builtIn"===e.type&&this._handleBuiltIn(e)}function W(){var e=this,t=b.c.modules[p.a.TOOLBAR],n=[];return t.forEach((function(t){var i=t.module,r=i.definitions,o=i.defaultContext;r.forEach((function(t){var i=t.context||o;e.props.activeContexts.includes(i)&&n.push(t)}))})),n}function Y(e){var t=this.props,n=t.dialog,i=(t.modal,t.t),r=this.state.dialogId,o=e.id,a=e.options;if("CINE"===a.behavior)if(r)n.dismiss({id:r}),this.setState((function(e){return{dialogId:null,activeButtons:j(e.activeButtons.filter((function(e){return e.id!==o})))}}));else{var s=document.querySelector(".ViewerMain").getBoundingClientRect(),u=s.x,c=s.y,p=n.create({content:E,defaultPosition:{x:u+20||0,y:c+20||0}});this.setState((function(t){return{dialogId:p,activeButtons:[].concat(j(t.activeButtons),[e])}}))}"DOWNLOAD_SCREEN_SHOT"===a.behavior&&b.a.runCommand("showDownloadViewportModal",{title:i("Download de imagem de alta qualidade")})}A=q,L="propTypes",N={isLeftSidePanelOpen:s.a.bool.isRequired,isRightSidePanelOpen:s.a.bool.isRequired,selectedLeftSidePanel:s.a.string.isRequired,selectedRightSidePanel:s.a.string.isRequired,handleSidePanelChange:s.a.func,activeContexts:s.a.arrayOf(s.a.string).isRequired,studies:s.a.array},L in A?Object.defineProperty(A,L,{value:N,enumerable:!0,configurable:!0,writable:!0}):A[L]=N;var H=Object(h.d)(["Common","ViewportDownloadForm"])(Object(f.J)(Object(f.I)(q))),z=n(481),K=Object(i.b)((function(e){return{activeContexts:Object(z.a)(e)}}))(H),Q=l.a.redux.actions.setActiveViewportSpecificData,X=Object(i.b)((function(e,t){var n=e.loading.progress,i=I()(t.studies);return i.forEach((function(e){e.thumbnails.forEach((function(e){var t=e.displaySetInstanceUid,i="StackProgress:".concat(t),r=n[i],o=0;r&&(o=r.percentComplete),e.stackPercentComplete=o}))})),{studies:i}}),(function(e,t){return{onThumbnailClick:function(n){var i=t.studyMetadata[0].displaySets.find((function(e){return e.displaySetInstanceUid===n}));e(Q(i))}}}))(f.w),Z=(n(946),n(947),n(182));n(948);function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ee=function(e){var t=e.children,n=e.onDrop,i=e.viewportIndex,r=e.className,a=$(Object(Z.d)({accept:"thumbnail",drop:function(e,t){var r=t.canDrop(),o=t.isOver();if(r&&o&&n){var a=e.studyInstanceUid,s=e.displaySetInstanceUid;n({viewportIndex:i,studyInstanceUid:a,displaySetInstanceUid:s})}},collect:function(e){return{highlighted:e.canDrop(),hovered:e.isOver()}}}),2),s=a[0],u=s.hovered,p=s.highlighted,l=a[1];return o.a.createElement("div",{className:c()("viewport-drop-target",{hovered:u},{highlighted:p},r),ref:l,"data-cy":"viewport-container-".concat(i)},t)};ee.propTypes={children:s.a.node.isRequired,viewportIndex:s.a.number.isRequired,onDrop:s.a.func.isRequired,className:s.a.string};var te=ee;var ne=n(949),ie=n.n(ne),re=function(e){var t=e.activeViewportIndex,n=e.availablePlugins,i=e.defaultPlugin,r=e.layout,a=e.numRows,s=e.numColumns,u=e.setViewportData,p=e.studies,l=e.viewportData,d=e.children,f=100/a,m=100/s;if(!l||!l.length)return null;var v=r.viewports.map((function(e,r){var a=l[r];if(!a)return null;var s={displaySet:a,studies:p},f=!e.plugin&&a&&a.plugin?a.plugin:e.plugin,m=function(e,t,n,i,r,a){if(e.displaySet){var s=i[r=r||a];if(!s)throw new Error("No Viewport Component available for name ".concat(r,".\n         Available plugins: ").concat(JSON.stringify(i)));return o.a.createElement(s,{viewportData:e,viewportIndex:t,children:[n]})}return o.a.createElement(ie.a,null)}(s,r,d,n,f,i);return o.a.createElement(te,{onDrop:function(e){var t=e.viewportIndex,n=e.studyInstanceUid,i=e.displaySetInstanceUid;u({viewportIndex:t,studyInstanceUid:n,displaySetInstanceUid:i})},viewportIndex:r,className:c()("viewport-container",{active:t===r}),key:r},m)}));return o.a.createElement("div",{"data-cy":"viewprt-grid",style:{display:"grid",gridTemplateRows:"repeat(".concat(a,", ").concat(f,"%)"),gridTemplateColumns:"repeat(".concat(s,", ").concat(m,"%)"),height:"100%",width:"100%"}},v)};re.propTypes={viewportData:s.a.array.isRequired,supportsDrop:s.a.bool.isRequired,activeViewportIndex:s.a.number.isRequired,layout:s.a.object.isRequired,availablePlugins:s.a.object.isRequired,setViewportData:s.a.func.isRequired,studies:s.a.array,children:s.a.node,defaultPlugin:s.a.string,numRows:s.a.number.isRequired,numColumns:s.a.number.isRequired},re.defaultProps={viewportData:[],numRows:1,numColumns:1,layout:{viewports:[{}]},activeViewportIndex:0,supportsDrop:!0,availablePlugins:{DefaultViewport:function(e){return React.createElement("div",null,JSON.stringify(e))}},defaultPlugin:"defaultViewportPlugin"};var oe=re,ae=Object(i.b)((function(e){var t,n={},i=b.c.modules[p.a.VIEWPORT];i.forEach((function(e){n[e.extensionId]=e.module})),i.length&&(t=i[0].extensionId);var r=e.viewports;return{numRows:r.numRows,numColumns:r.numColumns,layout:r.layout,activeViewportIndex:r.activeViewportIndex,availablePlugins:n,defaultPlugin:t}}),null)(oe);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fe=function(e){function t(e){var n,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=ce(t).call(this,e),n=!r||"object"!==se(r)&&"function"!=typeof r?pe(i):r,de(pe(n),"fillEmptyViewportPanes",(function(){var e=[],t=n.props,i=t.layout,r=t.viewportSpecificData,o=n.state.displaySets;if(o&&o.length){for(var a=0;a<i.viewports.length;a++){var s=r[a];if(s&&s.studyInstanceUid&&s.displaySetInstanceUid)e.push({studyInstanceUid:s.studyInstanceUid,displaySetInstanceUid:s.displaySetInstanceUid});else{var u=o.find((function(t){return!e.some((function(e){return e.displaySetInstanceUid===t.displaySetInstanceUid}))}))||o[o.length-1];e.push(u)}}e.forEach((function(e,t){e&&e.studyInstanceUid&&n.setViewportData({viewportIndex:t,studyInstanceUid:e.studyInstanceUid,displaySetInstanceUid:e.displaySetInstanceUid})}))}})),de(pe(n),"setViewportData",(function(e){var t=e.viewportIndex,i=e.studyInstanceUid,r=e.displaySetInstanceUid,o=n.findDisplaySet(n.props.studies,i,r);n.props.setViewportSpecificData(t,o)})),n.state={displaySets:[]},n}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(t,e),n=t,(i=[{key:"getDisplaySets",value:function(e){var t=[];return e.forEach((function(e){e.displaySets.forEach((function(e){e.plugin||(e.plugin="cornerstone"),t.push(e)}))})),t}},{key:"findDisplaySet",value:function(e,t,n){var i=e.find((function(e){return e.studyInstanceUid===t}));if(i)return i.displaySets.find((function(e){return e.displaySetInstanceUid===n}))}},{key:"componentDidMount",value:function(){if(this.props.studies){var e=this.getDisplaySets(this.props.studies);this.setState({displaySets:e},this.fillEmptyViewportPanes)}}},{key:"componentDidUpdate",value:function(e){var t=e.layout.viewports.length,n=this.props.layout.viewports.length,i=this.props.layout.viewports.some((function(e){return!!e.vtk}));if(this.props.studies!==e.studies||n!==t&&!i){var r=this.getDisplaySets(this.props.studies);this.setState({displaySets:r},this.fillEmptyViewportPanes)}}},{key:"render",value:function(){var e=this.props.viewportSpecificData,t=e?Object.values(e):[];return o.a.createElement("div",{className:"ViewerMain"},this.state.displaySets.length&&o.a.createElement(ae,{studies:this.props.studies,viewportData:t,setViewportData:this.setViewportData}))}},{key:"componentWillUnmount",value:function(){var e=this,t=this.props.viewportSpecificData;Object.keys(t).forEach((function(t){e.props.clearViewportSpecificData(t)}))}}])&&ue(n.prototype,i),r&&ue(n,r),t}(r.Component);de(fe,"propTypes",{activeViewportIndex:s.a.number.isRequired,studies:s.a.array,viewportSpecificData:s.a.object.isRequired,layout:s.a.object.isRequired,setViewportSpecificData:s.a.func.isRequired,clearViewportSpecificData:s.a.func.isRequired});var me=fe,ve=l.a.redux.actions,ye=ve.setViewportSpecificData,he=ve.clearViewportSpecificData,be=Object(i.b)((function(e){var t=e.viewports;return{activeViewportIndex:t.activeViewportIndex,layout:t.layout,viewportSpecificData:t.viewportSpecificData,viewports:e.viewports}}),(function(e){return{setViewportSpecificData:function(t,n){e(ye(t,n))},clearViewportSpecificData:function(){e(he())}}}))(me);n(950);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Se(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Pe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Se(this,Ie(t).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e="right"===this.props.from?"from-right":"from-left",t=this.props.width?{maxWidth:this.props.width,marginRight:this.props.isOpen?"0":-1*Number.parseInt(this.props.width)}:{};return o.a.createElement("section",{style:t,className:c()("sidepanel",e,{"is-open":this.props.isOpen})},this.props.children)}}])&&we(n.prototype,i),r&&we(n,r),t}(r.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(Pe,"propTypes",{from:s.a.string.isRequired,isOpen:s.a.bool.isRequired,children:s.a.node,width:s.a.string});var Ee=Pe,xe=n(226),Ce=n(242);n(951);function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ke=function(e){function t(e){var n,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=je(t).call(this,e),n=!r||"object"!==De(r)&&"function"!=typeof r?Re(i):r,Ue(Re(n),"state",{isLeftSidePanelOpen:!0,isRightSidePanelOpen:!1,selectedRightSidePanel:"",selectedLeftSidePanel:"studies",thumbnails:[]}),Ue(Re(n),"retrieveTimepoints",(function(e){l.a.log.info("retrieveTimepoints");var t=(new Date).toISOString(),i=(new Date).toISOString();return n.props.studies&&(i=new Date("1000-01-01").toISOString(),n.props.studies.forEach((function(e){var n=v()(e.studyDate,"YYYYMMDD").toISOString();n<t&&(t=n),n>i&&(i=n)}))),Promise.resolve([{timepointType:"baseline",timepointId:"TimepointId",studyInstanceUids:n.props.studyInstanceUids,patientId:e.patientId,earliestDate:t,latestDate:i,isLocked:!1}])})),Ue(Re(n),"storeTimepoints",(function(e){return l.a.log.info("storeTimepoints"),Promise.resolve()})),Ue(Re(n),"updateTimepoint",(function(e,t){return l.a.log.info("updateTimepoint"),Promise.resolve()})),Ue(Re(n),"removeTimepoint",(function(e){return l.a.log.info("removeTimepoint"),Promise.resolve()})),Ue(Re(n),"disassociateStudy",(function(e,t){return l.a.log.info("disassociateStudy"),Promise.resolve()})),Ue(Re(n),"onTimepointsUpdated",(function(e){n.props.onTimepointsUpdated&&n.props.onTimepointsUpdated(e)})),Ue(Re(n),"onMeasurementsUpdated",(function(e){n.props.onMeasurementsUpdated&&n.props.onMeasurementsUpdated(e)}));var o=n.props.activeServer,a=Object.assign({},o);return l.a.measurements.MeasurementApi.setConfiguration({dataExchange:{retrieve:d.a.retrieveMeasurements,store:d.a.storeMeasurements},server:a}),l.a.measurements.TimepointApi.setConfiguration({dataExchange:{retrieve:n.retrieveTimepoints,store:n.storeTimepoints,remove:n.removeTimepoint,update:n.updateTimepoint,disassociate:n.disassociateStudy}}),n}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(t,e),n=t,(i=[{key:"componentWillUnmount",value:function(){this.props.dialog&&this.props.dialog.dismissAll()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.studies,n=e.isStudyLoaded,i=l.a.measurements,r=i.TimepointApi,o=i.MeasurementApi,a=new r("TimepointId",{onTimepointsUpdated:this.onTimepointsUpdated}),s=new o(a,{onMeasurementsUpdated:this.onMeasurementsUpdated});if(this.currentTimepointId="TimepointId",this.timepointApi=a,this.measurementApi=s,t){var u=t[0]&&t[0].patientId;a.retrieveTimepoints({patientId:u}),n&&this.measurementApi.retrieveMeasurements(u,["TimepointId"]),this.setState({thumbnails:Ae(t)})}}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.studies,i=t.isStudyLoaded;if(n!==e.studies&&this.setState({thumbnails:Ae(n)}),i&&i!==e.isStudyLoaded){var r=n[0]&&n[0].patientId,o=this.currentTimepointId;this.timepointApi.retrieveTimepoints({patientId:r}),this.measurementApi.retrieveMeasurements(r,[o])}}},{key:"render",value:function(){var e,t,n=this;return b.c.modules[p.a.PANEL].forEach((function(i){i.module.components.forEach((function(i){i.id===n.state.selectedRightSidePanel?t=i.component:i.id===n.state.selectedLeftSidePanel&&(e=i.component)}))})),o.a.createElement(o.a.Fragment,null,o.a.createElement(xe.a.Consumer,null,(function(e){return o.a.createElement(Ce.a.Consumer,null,(function(t){return o.a.createElement(y.a,{home:!1,userManager:t},e.logoComponent)}))})),o.a.createElement(K,{isLeftSidePanelOpen:this.state.isLeftSidePanelOpen,isRightSidePanelOpen:this.state.isRightSidePanelOpen,selectedLeftSidePanel:this.state.isLeftSidePanelOpen?this.state.selectedLeftSidePanel:"",selectedRightSidePanel:this.state.isRightSidePanelOpen?this.state.selectedRightSidePanel:"",handleSidePanelChange:function(e,t){var i=e&&e[0].toUpperCase()+e.slice(1),r="is".concat(i,"SidePanelOpen"),o="selected".concat(i,"SidePanel"),a=Object.assign({},n.state),s=a[r],u=a[o],c=u===t||null===t;a[o]=t||u,(!s||c)&&(a[r]=!a[r]),n.setState(a)},studies:this.props.studies}),o.a.createElement("div",{className:"FlexboxLayout"},o.a.createElement(Ee,{from:"left",isOpen:this.state.isLeftSidePanelOpen},e?o.a.createElement(e,{viewports:this.props.viewports,activeIndex:this.props.activeViewportIndex}):o.a.createElement(X,{studies:this.state.thumbnails,studyMetadata:this.props.studies})),o.a.createElement("div",{className:c()("main-content")},o.a.createElement(be,{studies:this.props.studies})),o.a.createElement(Ee,{from:"right",isOpen:this.state.isRightSidePanelOpen},t&&o.a.createElement(t,{viewports:this.props.viewports,activeIndex:this.props.activeViewportIndex}))))}}])&&Te(n.prototype,i),r&&Te(n,r),t}(r.Component);Ue(ke,"propTypes",{studies:s.a.array,studyInstanceUids:s.a.array,activeServer:s.a.shape({type:s.a.string,wadoRoot:s.a.string}),onTimepointsUpdated:s.a.func,onMeasurementsUpdated:s.a.func,viewports:s.a.object.isRequired,activeViewportIndex:s.a.number.isRequired,isStudyLoaded:s.a.bool,dialog:s.a.object});var _e=Object(f.I)(ke),Ae=function(e){return e.map((function(e){return{studyInstanceUid:e.studyInstanceUid,thumbnails:e.displaySets.map((function(e){var t,n,i=e.displaySetInstanceUid,r=e.seriesDescription,o=e.seriesNumber,a=e.instanceNumber,s=e.numImageFrames;if(e.modality&&"SEG"===e.modality)n="SEG";else if(e.images&&e.images.length){var u=Math.floor(e.images.length/2);t=e.images[u].getImageId()}else n=e.modality?e.modality:"UN";return{imageId:t,altImageText:n,displaySetInstanceUid:i,seriesDescription:r,seriesNumber:o,instanceNumber:a,numImageFrames:s}}))}}))},Le=l.a.redux.actions,Ne=Le.setTimepoints,qe=Le.setMeasurements,Me=function(e){return e.servers.find((function(e){return!0===e.active}))},Be=Object(i.b)((function(e){var t=e.viewports,n=e.servers;return{viewports:t.viewportSpecificData,activeViewportIndex:t.activeViewportIndex,activeServer:Me(n)}}),(function(e){return{onTimepointsUpdated:function(t){e(Ne(t))},onMeasurementsUpdated:function(t){e(qe(t))}}}))(_e);t.a=Be},945:function(e,t,n){},946:function(e,t,n){},947:function(e,t,n){},948:function(e,t,n){},949:function(e,t){},950:function(e,t,n){},951:function(e,t,n){}}]);
//# sourceMappingURL=ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerLocalFileData~ViewerRouting.bundle.2889d6e30abacde572a9.js.map