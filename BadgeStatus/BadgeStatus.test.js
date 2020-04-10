import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import BadgeStatus from './BadgeStatus';

expect.addSnapshotSerializer(serializer);

test('renders correctly BadgeStatus', () => {
  const tree = renderer
    .create(<BadgeStatus />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});