const fs = require('fs-extra');
const fileContent = require('./storyTemplate');
const camelCaseTransform = require('../../helpers/camelCaseTransform');

const createStoryFile = (componentName) => {
	let componentNameTransformed = camelCaseTransform(componentName);
	fs.writeFileSync(`${componentNameTransformed}.story.js`, `${fileContent(componentName)}`);
  fs.move(`./${componentNameTransformed}.story.js`,`./${componentName}/${componentNameTransformed}.story.js`);
};

module.exports = createStoryFile;
