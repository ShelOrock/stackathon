import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/Root';
import Theme from './theme';

render(
  <Provider store={ store }>
    <Theme>
      <App />
    </Theme>
  </Provider>,
  document.getElementById('app')
);
