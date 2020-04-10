const camelCaseTransform = (string) => {
  let arr = string.split('');
  let newString = '';

  for(let i = 0; i < arr.length; i++) {
    if (i === 0 ){
      arr[i] = arr[i].toLowerCase();
    }
    newString+=arr[i];
  }
  return newString;
};

module.exports = camelCaseTransform;
