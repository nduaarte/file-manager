import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Colors } from './src/Colors';
import Folder from './src/Components/Folder';

export default function App() {
  return (
    <ThemeProvider theme={Colors}>
      <Folder
        color='red'
        percentage={86}
        quantity={3.242}
        title='Vídeos'
      />
    </ThemeProvider>
  );
}


