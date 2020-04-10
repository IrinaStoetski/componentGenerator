const fs = require('fs-extra');
const fileContent = require('./indexFileTemplate.js');
const camelCaseTransform = require('../../helpers/camelCaseTransform');

const createIndexFile = (componentName) => {
	let componentNameTransformed = camelCaseTransform(componentName);
	fs.writeFileSync(`index.js`, `${fileContent(componentName)}`);
  fs.move(`./index.js`,`./${componentName}/index.js`);
};

module.exports =  createIndexFile;
