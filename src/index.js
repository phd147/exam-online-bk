import React from 'react';
import App from './App';

import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';


//redux middleware
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import auth from './store/action/saga/index';

import {createStore,applyMiddleware,compose} from 'redux';

//react redux 
import {Provider} from 'react-redux'

import authReducer from './store/reducers/auth';
import  watchAuth from './store/action/saga/index';


const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(authReducer,composeEnhancers(applyMiddleware(thunk,saga)));

saga.run(watchAuth);


ReactDOM.render(<Provider store={store}>
   <BrowserRouter>
<App/></BrowserRouter> </Provider>, document.getElementById('root'))