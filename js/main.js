/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: lastPageYOffset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastPageYOffset", function() { return lastPageYOffset; });
var vars = {};
var lastPageYOffset = null;
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.$siteContainer = $('.site-container');
vars.$preloader = $('.preloader');
vars.$header = $('.header');

vars.isMobile = function () {
  return innerWidth <= 1024;
};

vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};

vars.winWidth = window.innerWidth;
var debounced = [];

var cancelFunc = function cancelFunc(timeout) {
  return function () {
    clearTimeout(timeout);
  };
};

vars.debounce = function (fn, wait) {
  var d = debounced.find(function (_ref) {
    var funcString = _ref.funcString;
    return funcString === fn.toString();
  });

  if (d) {
    d.cancel();
  } else {
    d = {};
    debounced.push(d);
  }

  d.func = fn;
  d.funcString = fn.toString();

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  d.timeout = setTimeout.apply(void 0, [fn, wait].concat(args));
  d.cancel = cancelFunc(d.timeout);
};

vars.saveScrollPosition = function () {
  vars.$html.css('scroll-behavior', 'initial');
  lastPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
};

vars.restoreScrollPosition = function () {
  if (lastPageYOffset !== null) {
    window.scrollTo(window.pageXOffset, lastPageYOffset);
    lastPageYOffset = null;
    vars.$html.css('scroll-behavior', '');
  }
}; // smooth scrolling


vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').animate({
    scrollTop: "".concat($container.offset().top + offset)
  }, time);
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, time + 100);
};

var scrollDiv;

vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.clientWidth;

  if (width) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

function hasHoverSupport() {
  var hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}

function resize() {
  vars.debounce(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _modules_infoBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/infoBlock */ "./src/js/modules/infoBlock.js");
/* harmony import */ var _modules_paralax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/paralax */ "./src/js/modules/paralax.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_showMainMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMainMenu */ "./src/js/modules/showMainMenu.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");







document.addEventListener('DOMContentLoaded', function () {
  try {
    Object(_modules_infoBlock__WEBPACK_IMPORTED_MODULE_2__["default"])('main');
  } catch (error) {
    console.log("error init infoBlock ".concat(error));
  }

  try {
    Object(_modules_paralax__WEBPACK_IMPORTED_MODULE_3__["default"])('.slider__img-first', '.slider__img-second', '.slider__img-thrid');
  } catch (error) {
    console.log("error init paralax ".concat(error));
  }

  try {
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])('.slider__img-first', '.slider__img-second', '.slider__img-thrid');
  } catch (error) {
    console.log("error init slider ".concat(error));
  }

  try {
    Object(_modules_showMainMenu__WEBPACK_IMPORTED_MODULE_5__["default"])('main');
  } catch (error) {
    console.log("error init show main menu ".concat(error));
  }

  try {
    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_6__["default"])('.header__nav', '.header__nav-menu');
  } catch (error) {
    console.log("error init menu ".concat(error));
  }
});

/***/ }),

/***/ "./src/js/modules/infoBlock.js":
/*!*************************************!*\
  !*** ./src/js/modules/infoBlock.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var infoBlock = function infoBlock(block) {
  var main = document.querySelector(block);
  var info = document.createElement('div');

  function showInfoBlock(pos) {
    info.style.cssText = "\n\t\t\tdisplay: block;\n\t\t\topacity: .8;\n\t\t\tleft: ".concat(pos.pageX + 20, "px;\n\t\t\ttop: ").concat(pos.pageY - 20, "px;\n\t\t");
  }

  function createInfoBlock(pos) {
    document.body.append(info);
    info.classList.add('info');
    info.textContent = 'drag me';
    showInfoBlock(pos);
  }

  function hideInfoBlock() {
    info.style.cssText = "\n\t\t\tdisplay: none;\n\t\t\topacity: 0;\n\t\t";
  }

  function init() {
    if (main.style.opacity !== '0' && main.style.opacity !== '') {
      main.addEventListener('mousemove', function (position) {
        createInfoBlock(position);
      });
      main.addEventListener('mouseleave', function () {
        hideInfoBlock();
      });
    } else {
      setTimeout(function () {
        init();
      }, 1000);
    }
  }

  init();
};

/* harmony default export */ __webpack_exports__["default"] = (infoBlock);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menu = function menu(trigger, menuSelector) {
  var btn = document.querySelector(trigger);
  var menuBlock = document.querySelector(menuSelector);

  function toggleShow(elem, display) {
    elem.style.display = display;
  }

  function toggleOpac(elem, opac) {
    elem.style.opacity = opac;
  }

  btn.addEventListener('click', function (e) {
    if (e.target === btn) {
      toggleShow(menuBlock, 'flex');
      setTimeout(function () {
        toggleOpac(menuBlock, '1');
      }, 100);
    } else if (e.target === menuBlock) {
      toggleOpac(menuBlock, '0');
      setTimeout(function () {
        toggleShow(menuBlock, 'none');
      }, 1000);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/paralax.js":
/*!***********************************!*\
  !*** ./src/js/modules/paralax.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paralax = function paralax(first, second, thrid) {
  var firstImg = document.querySelector(first);
  var secondImg = document.querySelector(second);
  var thridImg = document.querySelector(thrid);

  function createPosition(x, y, element, numb1, numb2) {
    element.style.transform = "translate(-".concat(x * numb1, "px, -").concat(y * numb2, "px )");
  }

  window.addEventListener('mousemove', function (pos) {
    var x = (pos.clientX / window.innerWidth).toFixed(4);
    var y = (pos.clientY / innerHeight).toFixed(4);
    createPosition(x, y, firstImg, 25, 31);
    createPosition(x, y, secondImg, 15, 21);
    createPosition(x, y, thridImg, 30, 42);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (paralax);

/***/ }),

/***/ "./src/js/modules/showMainMenu.js":
/*!****************************************!*\
  !*** ./src/js/modules/showMainMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var showMainMenu = function showMainMenu(main) {
  var mainScreen = document.querySelector(main);
  mainScreen.style.opacity = 0;

  function show() {
    mainScreen.style.opacity = 1;
  }

  setTimeout(function () {
    show();
  }, 2900);
};

/* harmony default export */ __webpack_exports__["default"] = (showMainMenu);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


var slider = function slider(firstImg, secondImg, thridImg) {
  var first = document.querySelector(firstImg);
  var second = document.querySelector(secondImg);
  var thrid = document.querySelector(thridImg);
  var firstImgUrl = '../images/sprites/png/first.png';
  var secondImgUrl = '../images/sprites/png/main.png';
  var thridImgUrl = '../images/sprites/png/second.png';

  function hellperSwapImg(elem, img) {
    elem.style.backgroundImage = "url(".concat(img, ")");
  }

  function swapImg() {
    if (mySwiper.activeIndex === 0) {
      hellperSwapImg(first, secondImgUrl);
      hellperSwapImg(second, firstImgUrl);
      hellperSwapImg(thrid, thridImgUrl);
    } else if (mySwiper.activeIndex === 2) {
      hellperSwapImg(first, firstImgUrl);
      hellperSwapImg(second, thridImgUrl);
      hellperSwapImg(thrid, secondImgUrl);
    } else if (mySwiper.activeIndex === 1) {
      hellperSwapImg(first, firstImgUrl);
      hellperSwapImg(second, secondImgUrl);
      hellperSwapImg(thrid, thridImgUrl);
    } else {
      console.log("slide ".concat(mySwiper.activeIndex, " not found"));
    }
  }

  var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
    initialSlide: 1,
    clickable: false
  });
  mySwiper.on('slideChange', function () {
    swapImg();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map