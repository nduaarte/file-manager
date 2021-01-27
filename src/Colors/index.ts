import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    grey: string;
    white: string;
    darkWhite: string;
    graphite: string;
    yellow: string;
    purple: string;
    turquoise: string;
    whiteRed: string;
  }
}

export const Colors: DefaultTheme = {
  background: '#171721',
  grey:'#626263',
  white: '#fff',
  darkWhite:'#DCDCDE',
  graphite: '#2C2C34',

  yellow: '#FEB95A',
  purple: '#F2C8EE',  
  turquoise:'#20BFA9',
  whiteRed: '#EE786C',
}