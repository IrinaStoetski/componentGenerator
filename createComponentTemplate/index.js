const fs = require('fs-extra');
const createComponentFile = require('./createComponentFile');
const createTestFile = require('./createTestFile');
const createStoryFile = require('./createStoryFile');
const createIndexFile = require('./createIndexFile');
const createComponentTemplate = (componentName) => {

	fs.ensureDir(`${componentName}`)
	.then(() => {
		createComponentFile(componentName);
		createTestFile(componentName);
		createStoryFile(componentName);
		createIndexFile(componentName);
		console.log('success!')
	})
	.catch(err => {
		console.error(err)
	});
}

module.exports = createComponentTemplate;
