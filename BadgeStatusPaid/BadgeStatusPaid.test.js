import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import BadgeStatusPaid from './BadgeStatusPaid';

expect.addSnapshotSerializer(serializer);

test('renders correctly BadgeStatusPaid', () => {
  const tree = renderer
    .create(<BadgeStatusPaid />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});