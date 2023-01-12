import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  background-color: #171A21;


}
    

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding-left: 0;
}

button {
  cursor: pointer;
}

img {
  display: block;
  height: auto;
  max-width: 100%;

  width: 100%;
}

address {
  font-style: normal;
}


li {
  list-style: none;
  padding: 0;
}

`;
