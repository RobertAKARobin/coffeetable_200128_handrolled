import {
  combineReducers,
  createStore,
  Reducer,
} from 'redux';

import {
  dataReducer,
  dataInitialState,
} from 'src/store/data/state';

export const initialAppState: AppState = {
  data: dataInitialState,
};

export const appReducer: Reducer<AppState> = combineReducers({
  data: dataReducer,
});

export const store = createStore(appReducer);
