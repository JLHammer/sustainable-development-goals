import 'styled-components';
import type { AppTheme } from './theme';

declare module 'styled-components' {
  // Makes the app theme available as `props.theme` in every styled component.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
