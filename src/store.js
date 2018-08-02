import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducer from './reducers';

const store = createStore( reducer, applyMiddleWare(promise(), thunk, logger) );

export default store;