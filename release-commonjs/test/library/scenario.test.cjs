"use strict";

var _path = _interopRequireDefault(require("path"));

var _scenario = require("./scenario.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilePath = __filename;

const FolderPath = _path.default.dirname(FilePath);

_scenario.Scenario.createTest(`${FolderPath}/resource`);
//# sourceMappingURL=scenario.test.cjs.map