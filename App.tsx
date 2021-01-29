import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Colors } from './src/Colors';
import SpaceMemory from './src/Components/SpaceMemory';

export default function App() {
  return (
    <ThemeProvider theme={Colors}>
      <SpaceMemory
        foldersQuantity={['red', 'green', 'blue', 'yellow']}
        title='Espaço Usado'
        usedMemory={180}
      />
    </ThemeProvider>
  );
}


