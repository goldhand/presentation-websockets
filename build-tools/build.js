const path = require('path');
const ws = require('brazil-ws');
const fse = require('fs-extra');
const packageJson = require('../package.json');


const builder = () => {
  const targets = [];

  const add = target => targets.push(target);

  const run = () => targets.forEach(
    ({source, target}) => fse.copySync(source, target)
  );

  return {add, run};
};

const build = builder();

const modulePath = path.join(ws.buildDir, 'lib', 'commonjs', packageJson.name);

build.add({
  source: path.join(ws.srcDir, 'dist'),
  target: path.join(modulePath, 'dist'),
});
build.add({
  source: path.join(ws.srcDir, 'lib'),
  target: path.join(modulePath, 'lib'),
});
build.add({
  source: path.join(ws.srcDir, 'package.json'),
  target: path.join(modulePath, 'package.json'),
});
build.add({
  source: path.join(ws.srcDir, 'configuration'),
  target: ws.buildDir,
});

build.run();
