import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
 
import rootReducer from './root.reducer';
import rootSaga from './sagas';
 
const sagaMiddleware = createSagaMiddleware();
 
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
 
sagaMiddleware.run(rootSaga);
 
export {store};