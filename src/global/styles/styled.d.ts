import 'styled-components';
import theme from './theme';


// acessar o modulo do styled-component e sobrescrever
declare module 'styled-components' {
    type ThemeType = typeof theme;

    // acrescentando ThemeType dentro de DefaultTheme
    export interface DefaultTheme extends ThemeType {}
}