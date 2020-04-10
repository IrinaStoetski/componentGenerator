
const getComponentTemplateData = (name) =>
`// @flow
import * as React from 'react';

type Props = {

}

const ${name} = (props: Props) => {

  return (

  )
 };

 export default ${name};`

module.exports = getComponentTemplateData;
