import 'styled-components';
import { ThemeTypes } from './theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
};