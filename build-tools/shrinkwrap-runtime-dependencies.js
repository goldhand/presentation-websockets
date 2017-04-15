const ws = require('brazil-ws');
const bp = require('brazil-path');
const fse = require('fs-extra');

/**
 * Add all runtime dependencies here
 * This is a targets-only version set so we need to get non-npm dependencies this way
 */
const runtimeDependencies = [
  '[MinimalProcessManager]run.runtimefarm',
  '[NodeJS]run.runtimefarm',
];

Promise.all(runtimeDependencies.map(p => new Promise((resolve, reject) => {
  bp(p, (err, res) => {
    if (err) return reject(err);
    fse.copy(res[p], ws.buildDir, {overwrite: false, dereference: true, errorOnExist: false}, error => {
      if (error) return reject(error);
      resolve();
    });
  });
})));
