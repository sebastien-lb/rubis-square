import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { store } from './redux/config';
import { history } from './redux/Router/router';
import { theme } from './style/theme';

import App from './App';
test('Renders learn react link', () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>,
  );
});
