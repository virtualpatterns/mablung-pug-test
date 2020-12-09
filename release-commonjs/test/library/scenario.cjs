"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scenario = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _index = require("../../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilePath = __filename;

class Scenario extends _index.Scenario {
  constructor(...parameter) {
    super(...parameter);
  }

  async createModule() {
    let path = `${_path.default.dirname(this._path)}/${this._name}${_path.default.extname(FilePath)}`;
    let source = _path.default.extname(FilePath).toUpperCase() === '.CJS' ? 'module.exports = () => []' : 'export default () => []';

    if (!(await _fsExtra.default.pathExists(path))) {
      await _fsExtra.default.writeFile(path, source, {
        'encoding': 'utf-8',
        'flag': 'wx'
      });
    }

    return path;
  }

  getNodeHtml()
  /* node */
  {
    return '<div></div>';
  }

  async getSource()
  /* modulePath */
  {
    return ` let div = document.querySelector('body div')
              div.appendChild(document.createElement('div'))`;
  }

  static createScenarioFromFile(...parameter) {
    return new Scenario(...parameter);
  }

}

exports.Scenario = Scenario;
//# sourceMappingURL=scenario.cjs.map