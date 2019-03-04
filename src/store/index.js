import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

// const composeEnhancers = composeWithDevTools({
// 	// Specify here name, actionsBlacklist, actionsCreators and other options
// });

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;