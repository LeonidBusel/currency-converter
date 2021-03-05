import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from '@sagas';
import reducers from '@reducers';


export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(reducers, initialState, composeWithDevTools(...enhancers));

  sagaMiddleware.run(rootSagas, store.dispatch);

  return store;
}