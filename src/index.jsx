import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from '@/app/store';
import { App } from '@/pages/App';
import { theme } from '@/theme';

import { Global } from './GlobalStyles';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
