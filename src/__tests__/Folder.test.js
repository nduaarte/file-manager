import React from 'react';
import { renderer } from '@testing-library/react-native';
import Folder from '../Components/Folder';

test('renders correclty', () => {
  const tree = renderer.create(<Folder />).toJSON();
  expect(tree).toMatchSnapshot();
});

