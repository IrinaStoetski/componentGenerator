const getComponentTestTemplateData = (name) =>
`import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import ${name} from './${name}';

expect.addSnapshotSerializer(serializer);

test('renders correctly ${name}', () => {
  const tree = renderer
    .create(<${name} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});`

module.exports = getComponentTestTemplateData;
