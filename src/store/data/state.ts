import {DataActions} from './actions';
import * as initialData from './initial.json';

export const dataInitialState: DataState = initialData;

export function dataReducer(
    state: DataState = dataInitialState,
    action: Action<any>,
): DataState {
  switch (action.type) {
    case DataActions.LOAD:
      return initialData;
    default:
      return state;
  }
}
