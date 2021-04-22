/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _request_list_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-list-plugin */ "./client/request-list-plugin/index.js");




Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerBpmnJSPlugin"])(_request_list_plugin__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./client/request-list-plugin/RequestListPlugin.js":
/*!*********************************************************!*\
  !*** ./client/request-list-plugin/RequestListPlugin.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestListPlugin; });


function createSVGIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("viewBox", "0 0 512 512");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width", "12");
  svg.setAttribute("height", "16");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d",
    "M445,386.7l-84.8-85.9c13.8-24.1,21-50.9,21-77.9c0-87.6-71.2-158.9-158.6-158.9C135.2,64,64,135.3,64,222.9  c0,87.6,71.2,158.9,158.6,158.9c27.9,0,55.5-7.7,80.1-22.4l84.4,85.6c1.9,1.9,4.6,3.1,7.3,3.1c2.7,0,5.4-1.1,7.3-3.1l43.3-43.8  C449,397.1,449,390.7,445,386.7z M222.6,125.9c53.4,0,96.8,43.5,96.8,97c0,53.5-43.4,97-96.8,97c-53.4,0-96.8-43.5-96.8-97  C125.8,169.4,169.2,125.9,222.6,125.9z");

  svg.appendChild(path);

  return svg;
}

async function requestRepositoryData() {
  const url = 'https://api.github.com/users/camunda/repos';
  const response = await fetch(url);
  const repos = await response.json();
  return repos;
}

function RequestListPlugin(eventBus, propertiesPanel, propertiesProvider) {
  eventBus.on(`import.done`, function () {
   
    propertiesPanel
    propertiesProvider
    
    debugger;
    const button = document.createElement("button");
    button.classList.add("action-button")
    button.attributes["data-action"] = "open-github-search";
    button.classList.add("open-search")
    button.appendChild(createSVGIcon());

    button.style.backgroundColor = "transparent";
    button.style.border = "none";
    button.style.right = "24px";
    button.style.display = "flex";
    button.style.cursor = "pointer";

    const camundaId = document.querySelector("#camunda-id");
    camundaId.classList.add("with-search");
    camundaId.parentElement.appendChild(button);

    const modal = document.createElement("div");

    let data;

    modal.innerHTML = `
      <div class="search-modal center-block absolute-center is-fixed is-variable modal is-small" id="fixed-modal">
        <div class="center-content" style="z-index: 3000;">
          <button id="close-modal" class="close-modal">&times;</button>
          <div class="input-container">
            <input type="text" class="search-input" id="search-input" style="z-index: 2000" />
          </div>
          <ul class='repo-list'></ul>
        </div>
      </div>
    `;

    const search = modal.querySelector("#search-input");
    const close = modal.querySelector("#close-modal");
    const repoList = modal.querySelector('.repo-list');

    function showModal() {
      document.body.appendChild(modal);
    }

    function closeModal() {
      modal.remove();
    }

    function setIdContent(id, value) {
      camundaId.value = `process_${id}_${value}`;
    }

    function filterList(filter) {
      if (filter) {
        return data.filter(d => d.full_name.includes(filter))
      }
      return data;
    }

    function renderData(data) {
      repoList.innerHTML = "";

      const fragment = document.createDocumentFragment();
      data.forEach(({ id, full_name }) => {
        const li = document.createElement("li");

        li.classList.add('repo-item');
        li.dataset['id'] = id;
        li.dataset['value'] = full_name;
        li.innerHTML = `
              <span>${full_name}</span>
              <button class='btn-select-repo'>
                &#8658;
              </button>
            `;
        fragment.appendChild(li);
      });

      repoList.append(fragment);
    }

    repoList.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("btn-select-repo")) {
        const parent = target.parentElement;
        setIdContent(parent.dataset["id"], parent.dataset["value"]);
        closeModal();
      }
    });

    close.addEventListener("click", closeModal);

    search.addEventListener("input", function (e) {
      e.stopPropagation();
      console.log(e.target.value);
      renderData(filterList(e.target.value));
    });

    button.addEventListener("click", function (e) {
      showModal();
      search.click();
      search.focus();

      requestRepositoryData().then(repos => {
        data = repos;
        renderData(data);
      });

    });
  });
}

RequestListPlugin.$inject = [
  'eventBus',
  'propertiesPanel',
  'propertiesProvider'
];

/***/ }),

/***/ "./client/request-list-plugin/index.js":
/*!*********************************************!*\
  !*** ./client/request-list-plugin/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestListPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestListPlugin */ "./client/request-list-plugin/RequestListPlugin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: [ 'requestListPlugin' ],
  requestListPlugin: [ 'type', _RequestListPlugin__WEBPACK_IMPORTED_MODULE_0__["default"] ]
});


/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/*! exports provided: registerClientPlugin, registerBpmnJSPlugin, registerBpmnJSModdleExtension, getModelerDirectory, getPluginsDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientPlugin", function() { return registerClientPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSPlugin", function() { return registerBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSModdleExtension", function() { return registerBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelerDirectory", function() { return getModelerDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPluginsDirectory", function() { return getPluginsDirectory; });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ })

/******/ });
//# sourceMappingURL=client.js.map