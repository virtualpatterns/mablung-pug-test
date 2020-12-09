import _URL from "url";import Path from 'path';

import { Scenario } from './scenario.js';

const FilePath = _URL.fileURLToPath(import.meta.url);
const FolderPath = Path.dirname(FilePath);

Scenario.createTest(`${FolderPath}/resource`);
//# sourceMappingURL=scenario.test.js.map