import React from 'react';
import ReactDOM from 'react-dom';

// Redux state management stuff
import { Provider } from "react-redux"; // allows access to global store
import { store } from "./redux/store";


import "./index.css"

import App from './App';

//console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root')
);


