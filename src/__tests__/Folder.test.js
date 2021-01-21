import React from 'react';
import renderer from 'react-test-renderer';
import Folder from '../Components/Folder';

test('renders correclty', () => {
  const tree = renderer.create(<Folder />).toJSON();
  expect(tree).toMatchSnapshot();
});

