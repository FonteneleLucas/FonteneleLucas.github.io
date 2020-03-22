/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
  };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
  };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports) {

    // https://developers.google.com/web/tools/workbox/guides/troubleshoot-and-debug
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js'); // Install newest
    // https://developers.google.com/web/tools/workbox/modules/workbox-core

    workbox.core.skipWaiting();
    workbox.core.clientsClaim(); // Cache static assets that aren't precached

    workbox.routing.registerRoute(/\.(?:js|css)$/, new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources'
    })); // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.

    workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets'
    })); // Cache the underlying font files with a cache-first strategy for 1 year.

    workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        // 1 Year
        maxEntries: 30
      })]
    })); // MESSAGE HANDLER

    self.addEventListener('message', function (event) {
      if (event.data && event.data.type === 'SKIP_WAITING') {
        switch (event.data.type) {
          case 'SKIP_WAITING':
            // TODO: We'll eventually want this to be user prompted
            // workbox.core.skipWaiting();
            // workbox.core.clientsClaim();
            // TODO: Global notification to indicate incoming reload
            break;

          default:
            console.warn("SW: Invalid message type: ".concat(event.data.type));
        }
      }
    });
    workbox.precaching.precacheAndRoute([{ "revision": "d9f4fe68aee350429507fc899c34df35", "url": "/0.ae13634dacc289baa195.css" }, { "revision": "2483aea553d4b75c2b2718905029893c", "url": "/1.ae13634dacc289baa195.css" }, { "revision": "aa9f43831a1c0a863baaf2b8992713d3", "url": "/10.ae13634dacc289baa195.css" }, { "revision": "a57aff5fd9d056fc26514bfd3a4f95d2", "url": "/11.ae13634dacc289baa195.css" }, { "revision": "70c218776d9a115131fec3e430b4c12e", "url": "/3.ae13634dacc289baa195.css" }, { "revision": "a6227937aa9e3d0b9ce80fee84ca5591", "url": "/8.ae13634dacc289baa195.css" }, { "revision": "45e6adab5e9748b97a5d5c536668abd6", "url": "/9.ae13634dacc289baa195.css" }, { "revision": "6d249edbb4c304f9d222eb62904d65d1", "url": "/CallbackPage.bundle.f7a4f3992ca2a20d8573.js" }, { "revision": "8a744f0fb0321dd78905c959c5e82218", "url": "/ConnectedOHIFDicomPDFViewer.bundle.9d64c8eb232289faad78.js" }, { "revision": "e31761041c93ec91d559c15ebb4a8184", "url": "/ConnectedStandaloneRouting.bundle.47a516c55084ad83459c.js" }, { "revision": "ee4ba1d9f24e309fb448d5a1e64e4b54", "url": "/ConnectedStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~ViewerLocalFileData~ViewerRouting.bundle.8c02f3cb204f4e36093d.js" }, { "revision": "171b3c276351e50e9c0cdb863631d429", "url": "/ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerLocalFileData~ViewerRouting.bundle.2889d6e30abacde572a9.js" }, { "revision": "5f7d35953335862acc57d2bbc228de47", "url": "/DicomMicroscopyViewport.bundle.6c236336d880d95fc678.js" }, { "revision": "de0ad05a548d95ad1090d3ef67c5a971", "url": "/IHEInvokeImageDisplay.bundle.58ff83f440c7aa887002.js" }, { "revision": "ebbd5d423091c7183b159f4d218f9140", "url": "/OHIFCornerstoneViewport.bundle.9d999b50ff43c57eb523.js" }, { "revision": "271051cc5312e6ae0ce3b427c2e15031", "url": "/OHIFDicomHtmlViewport.bundle.7aee6d4a27f69cec0f01.js" }, { "revision": "e4fc825c08b117fa5988c29abc7b651f", "url": "/OHIFVTKViewport.bundle.40a41e2fcd5c0e9907e8.js" }, { "revision": "13f3ef0ccd6fb1a4862b8098f29b07ff", "url": "/StudyListRouting.bundle.53fbb8654c6998b346be.js" }, { "revision": "14ed1fb74ebe8a2749a2385e7cb3a578", "url": "/ViewerLocalFileData.bundle.4cda32cdcc49e1290731.js" }, { "revision": "e10f51d705f3ebe0686237270133231b", "url": "/ViewerRouting.bundle.360d04821544460e3b29.js" }, { "revision": "f85cbd5773fa015185b3a8308488f708", "url": "/app-config.js" }, { "revision": "6f4a559fdd86b5c19110405eba869f55", "url": "/app.ae13634dacc289baa195.css" }, { "revision": "8c6635529c30f5b356de5c11ce313561", "url": "/app.bundle.4e5230a43ea5a9fe51a7.js.LICENSE" }, { "revision": "473e74a795f5a95dcfba304960bbcdf8", "url": "/assets/Button_File.svg" }, { "revision": "271da60b435c1445580caab72e656818", "url": "/assets/Button_Folder.svg" }, { "revision": "fefe8618fc913d51bbc77589d95b6456", "url": "/assets/android-icon-144x144.png" }, { "revision": "1bc4c6da6383189cb3ad755c9154f3b3", "url": "/assets/android-icon-192x192.png" }, { "revision": "f6db161c61d12814c60f6fbfd9aa25dc", "url": "/assets/android-icon-256x256.png" }, { "revision": "f659a980a2a8a9c9a271627cb469cb45", "url": "/assets/android-icon-36x36.png" }, { "revision": "f6db161c61d12814c60f6fbfd9aa25dc", "url": "/assets/android-icon-384x384.png" }, { "revision": "ae17f32a128961b1d4e88cd922c66893", "url": "/assets/android-icon-48x48.png" }, { "revision": "f6db161c61d12814c60f6fbfd9aa25dc", "url": "/assets/android-icon-512x512.png" }, { "revision": "80761665170b2c65dcb7b9df8156b7c5", "url": "/assets/android-icon-72x72.png" }, { "revision": "f54347377cb9e3f27a75f0ded64a9586", "url": "/assets/android-icon-96x96.png" }, { "revision": "751771a23e55d296a77ceedf40d6ce6f", "url": "/assets/apple-icon-114x114.png" }, { "revision": "7084dd84758457ba53d032235a1c0be1", "url": "/assets/apple-icon-120x120.png" }, { "revision": "fefe8618fc913d51bbc77589d95b6456", "url": "/assets/apple-icon-144x144.png" }, { "revision": "ccea8475c6a54d67b9f1a5d6c928383c", "url": "/assets/apple-icon-152x152.png" }, { "revision": "f6db161c61d12814c60f6fbfd9aa25dc", "url": "/assets/apple-icon-180x180.png" }, { "revision": "68c60b808b1476972511022e0d0f9e43", "url": "/assets/apple-icon-57x57.png" }, { "revision": "14124d1aaad5cf0f6c21f4d109e046d2", "url": "/assets/apple-icon-60x60.png" }, { "revision": "80761665170b2c65dcb7b9df8156b7c5", "url": "/assets/apple-icon-72x72.png" }, { "revision": "3c46502cd83905b9da9a5d6c402af932", "url": "/assets/apple-icon-76x76.png" }, { "revision": "9df17208b15531c7fe2c6491defef483", "url": "/assets/apple-icon-precomposed.png" }, { "revision": "9df17208b15531c7fe2c6491defef483", "url": "/assets/apple-icon.png" }, { "revision": "9df17208b15531c7fe2c6491defef483", "url": "/assets/apple-touch-startup-image-320x460.png" }, { "revision": "f6db161c61d12814c60f6fbfd9aa25dc", "url": "/assets/coast-228x228.png" }, { "revision": "3acea64f272ff14892b37dc6803a0a5f", "url": "/assets/favicon-16x16.png" }, { "revision": "f6374016a3502fad35dedc4dfdf40cad", "url": "/assets/favicon-32x32.png" }, { "revision": "f54347377cb9e3f27a75f0ded64a9586", "url": "/assets/favicon-96x96.png" }, { "revision": "509fc6045200950ce6156c565a1b25c0", "url": "/assets/favicon.ico" }, { "revision": "b58fcfa7628c9205cb11a1b2c3e8f99a", "url": "/assets/manifest.json" }, { "revision": "fefe8618fc913d51bbc77589d95b6456", "url": "/assets/ms-icon-150x150.png" }, { "revision": "9f498a4955a50ce42c7696f3ba0d2c32", "url": "/assets/ms-icon-310x310.png" }, { "revision": "80761665170b2c65dcb7b9df8156b7c5", "url": "/assets/ms-icon-70x70.png" }, { "revision": "e8f47b3d9b1416012db9a4baaffd1ae3", "url": "/assets/mstile-144x144.png" }, { "revision": "fefe8618fc913d51bbc77589d95b6456", "url": "/assets/mstile-150x150.png" }, { "revision": "c69beb12e49c5d0bfb78d60e0e4f002e", "url": "/assets/mstile-70x70.png" }, { "revision": "68c60b808b1476972511022e0d0f9e43", "url": "/assets/yandex-browser-50x50.png" }, { "revision": "cfea70d7ddc8f06f276ea0c85c4b2adf", "url": "/assets/yandex-browser-manifest.json" }, { "revision": "0ca44a1b8719e835645ffa804a9d1395", "url": "/es6-shim.min.js" }, { "revision": "ac5e806f491211dbb49613144fdedc90", "url": "/google.js" }, { "revision": "ee52b25db49ea746d9991970bfc4b6f7", "url": "/index.html" }, { "revision": "4e41fd55c08031edf19119a1df1a0538", "url": "/init-service-worker.js" }, { "revision": "b3362bf27c88ee6c721bdc984e1dd075", "url": "/manifest.json" }, { "revision": "754d698a7b334af57c00f29723fd9751", "url": "/oidc-client.min.js" }, { "revision": "d05a380d50b74e629738ae6f62fb7e78", "url": "/polyfill.min.js" }, { "revision": "f528b6861c82ee4415fce0821fd695c1", "url": "/silent-refresh.html" }, { "revision": "f4bff1fb48875ce3bc2f84b0b5741fcb", "url": "/vendors~ConnectedOHIFDicomPDFViewer.bundle.2254a6d791ea46d7ec65.js" }, { "revision": "c0d7779563922092acf5ad8e794f6322", "url": "/vendors~ConnectedOHIFDicomPDFViewer.bundle.2254a6d791ea46d7ec65.js.LICENSE" }, { "revision": "7c72f61176f58b6215611ed9789f36dd", "url": "/vendors~DicomMicroscopyViewport.bundle.4f7ef0a8e93ed02a2a81.js" }, { "revision": "8f09388b2eb88d0d8d91e064f091a8e7", "url": "/vendors~OHIFCornerstoneViewport.bundle.1ed11b7c30eafbb5ecdf.js" }, { "revision": "3fc6ff4c81cd6a523bee927348ab17ad", "url": "/vendors~OHIFCornerstoneViewport.bundle.1ed11b7c30eafbb5ecdf.js.LICENSE" }, { "revision": "8eac05ebfc3c452e9c5dd5e69b7ba2fa", "url": "/vendors~StudyListRouting.bundle.ee493e7bcbd200788275.js" }, { "revision": "04f6f4878a614e5797d05482f2922ec1", "url": "/vendors~ViewerLocalFileData.bundle.482c5cc364d412e1661c.js" }, { "revision": "b099146640fdc306675a4f3f657f74a3", "url": "/vendors~dicom-microscopy-viewer.bundle.c2d2767da2c3778cefd8.js" }, { "revision": "2de3eb75701d6cb3d4158adbb65e9f3e", "url": "/vendors~dicom-microscopy-viewer.bundle.c2d2767da2c3778cefd8.js.LICENSE" }]);// TODO: Cache API
    // https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api
    // Store DICOMs?
    // Clear Service Worker cache?
    // navigator.storage.estimate().then(est => console.log(est)); (2GB?)

    /***/
  })
/******/]);