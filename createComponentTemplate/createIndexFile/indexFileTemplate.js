const camelCaseTransform = require("../../helpers/camelCaseTransform");

const getIndexFileData = name => {
	let nameCamelCased = camelCaseTransform(name);
	return `export default from './${nameCamelCased}';`;
};

module.exports = getIndexFileData;
