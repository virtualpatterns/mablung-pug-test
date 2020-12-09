import FileSystem from 'fs-extra'
import Path from 'path'

import { Scenario as BaseScenario } from '../../index.js'

const FilePath = __filePath

class Scenario extends BaseScenario {

  constructor(...parameter) {
    super(...parameter)
  }

  async createModule() {

    let path = `${Path.dirname(this._path)}/${this._name}${Path.extname(FilePath)}`
    let source = Path.extname(FilePath).toUpperCase() === '.CJS' ? 'module.exports = () => []' : 'export default () => []'

    if (!(await FileSystem.pathExists(path))) {
      await FileSystem.writeFile(path, source, { 'encoding': 'utf-8', 'flag': 'wx' })
    }

    return path

  }

  getNodeHtml( /* node */ ) {
    return '<div></div>'
  }

  async getSource( /* modulePath */ ) {
    return  ` let div = document.querySelector('body div')
              div.appendChild(document.createElement('div'))`
  }
  
  static createScenarioFromFile(...parameter) {
    return new Scenario(...parameter)
  }

}

export { Scenario }