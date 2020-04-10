const fs = require('fs-extra');
const fileContent = require('./componentTemplate');
const camelCaseTransform = require('../../helpers/camelCaseTransform');

const createComponentFile = (componentName) => {
	let componentNameTransformed = camelCaseTransform(componentName);
	fs.writeFileSync(`${componentNameTransformed}.js`, `${fileContent(componentName)}`);
  fs.move(`./${componentNameTransformed}.js`,`./${componentName}/${componentNameTransformed}.js`);
};

module.exports = createComponentFile;
