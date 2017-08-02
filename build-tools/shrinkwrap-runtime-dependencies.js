/**
 * Add all runtime dependencies here
 * This is a targets-only version set so we need to get non-npm dependencies this way
 */
const runtimeDependencies = [
  '[MinimalProcessManager]run.runtimefarm',
  '[NodeJS]run.runtimefarm',
];

try {
  /**
   * Wrap this in a try/catch so this will work on local machines that don't
   * need to do this
   */
  const fse = require('fs-extra');
  const ws = require('brazil-ws');
  const bp = require('brazil-path');
  Promise.all(runtimeDependencies.map(p => new Promise((resolve, reject) => {
    bp(p, (err, res) => {
      if (err) return reject(err);
      fse.copy(res[p], ws.buildDir, {overwrite: false, dereference: true, errorOnExist: false}, error => {
        if (error) return reject(error);
        resolve();
      });
    });
  })));
} catch (e) {
  process.exit(0);
}
