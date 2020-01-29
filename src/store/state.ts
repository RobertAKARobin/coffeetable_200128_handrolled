import {
  combineReducers,
  createStore,
  Reducer,
} from 'redux';

import {
  dataReducer,
  dataInitialState,
} from 'src/store/data/state';

declare const window: any;

export const initialAppState: AppState = {
  data: dataInitialState,
};

export const appReducer: Reducer<AppState> = combineReducers({
  data: dataReducer,
});

export const store = createStore(
    appReducer,
    (
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);
