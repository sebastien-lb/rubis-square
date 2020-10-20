import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://97ea3a1ca7bd4fbf870d04e501ca5350@o464425.ingest.sentry.io/5473076',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { store } from './redux/config';
import { history } from './redux/Router/router';
import { theme } from './style/theme';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
