import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './store/configureStore';

const store = configureStore( window.__REDUX_STATE__ || {} );

const AppBundle = (
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
);

window.onload = () => {
    ReactDOM.hydrate(
        AppBundle,
        document.getElementById('root')
    );
};