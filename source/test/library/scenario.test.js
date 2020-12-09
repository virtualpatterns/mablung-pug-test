import Path from 'path'

import { Scenario } from './scenario.js'

const FilePath = __filePath
const FolderPath = Path.dirname(FilePath)

Scenario.createTest(`${FolderPath}/resource`)  
