// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n\u63A5\u4E0B\u6765\u6211\u8981\u52A0\u6837\u5F0F\u4E86\n\u6211\u8981\u52A0\u7684\u6837\u5F0F\u662F**/\nbody{\n    color: white;\n    background: rgb(238,174,202);\nbackground: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n}\n#bagua{\n    border:1px solid red;\n    height:200px;\n    width:200px;\n    border-radius:50%;\n}\n/*\u63A5\u4E0B\u6765\u5C06\u5706\u653E\u5728\u5C4F\u5E55\u53F3\u4E0A\u65B9**/\n\n/*\u63A5\u4E0B\u6765\u5C31\u662F\u89C1\u8BC1\u5947\u8FF9\u7684\u65F6\u523B**/\n#bagua{\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n\n}\n#bagua::before{\n    content:'';\n    display:block;\n    height:100px;\n    width:100px;\n    border-radius:50%;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#bagua::after{\n    content:'';\n    display:block;\n    height:100px;\n    width:100px;\n    border-radius:50%;\n    top:50%;\n    left:50%;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n";
var string2 = "";
var n = 0;
html.innerHTML = string.substring(0, n);

var step = function step() {
  setTimeout(function () {
    n = n + 1;

    if (string[n] === "\n") {
      string2 += '<br>';
    } else if (string[n] === " ") {
      string2 += '&nbsp';
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 999999);

    if (n < string.length - 1) {
      step();
    }
  }, 00);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ef86e35a.js.map