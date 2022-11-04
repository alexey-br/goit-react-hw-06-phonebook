import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import App from 'components/App';
import { store, persistor } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
