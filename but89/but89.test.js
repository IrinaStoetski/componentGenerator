import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import but89 from './but89';

expect.addSnapshotSerializer(serializer);

test('renders correctly but89', () => {
  const tree = renderer
    .create(<but89 />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});