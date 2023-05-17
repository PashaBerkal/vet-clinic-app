import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './redux/store/store';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore();

moment.locale('ru');

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
