import React from 'react';
import ReactDOM from 'react-dom';

// Redux state management stuff
import { Provider } from "react-redux"; // allows access to global store
import { createStore, applyMiddleware, compose } from "redux"; // using deprecated createStore
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from './App';

const store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root')
);


