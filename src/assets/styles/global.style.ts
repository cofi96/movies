import { createGlobalStyle } from 'styled-components';
import { reset } from './config/reset.style';

export const GlobalStyle = createGlobalStyle`
 ${reset}

 body {
    background-color: #181818;
    color: #fff;
 }
`;
