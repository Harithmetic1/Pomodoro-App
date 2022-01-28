import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Chakra UI
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1F1B2E',
    800: '#664EFF',
    700: '#6C4EB3'
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Maven Pro, sans-serif'
      }
    }
  },
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #6C4EB3',
    }
  }
}

const theme = extendTheme({ colors })

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
