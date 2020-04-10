const fs = require('fs-extra');
const fileContent = require('./testTemplate.js');
const camelCaseTransform = require('../../helpers/camelCaseTransform');

const createTestFile = (componentName) => {
	let componentNameTransformed = camelCaseTransform(componentName);
	fs.writeFileSync(`${componentNameTransformed}.test.js`, `${fileContent(componentName)}`);
  fs.move(`./${componentNameTransformed}.test.js`,`./${componentName}/${componentNameTransformed}.test.js`);
};

module.exports =  createTestFile;
