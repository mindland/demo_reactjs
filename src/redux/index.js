import { createStore, applyMiddleware, compose } from "redux"; // applyMiddleware của redux thunk

import reducer from "./reducers";
import thunk from "redux-thunk";

const configStore = () => {
  // n dong code ...

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

const store = configStore();

export default store;
