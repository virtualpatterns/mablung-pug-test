"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scenario = require("./library/scenario.cjs");

Object.keys(_scenario).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _scenario[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scenario[key];
    }
  });
});
//# sourceMappingURL=index.cjs.map