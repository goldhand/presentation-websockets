const ws = require('brazil-ws');
const fse = require('fs-extra');

fse.removeSync(ws.buildDir);
