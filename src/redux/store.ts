import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { ArrayDataAllConfig } from '../interfaces';
//  формирование хранилища

const initialStore: ArrayDataAllConfig = { data: [] };
const middleware = [thunk, logger];
const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
