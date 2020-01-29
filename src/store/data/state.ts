import {DataActions} from './actions';
import initialData from './initial.json';

export const dataInitialState: DataState = initialData;

export function dataReducer(
    state: DataState = dataInitialState,
    action: Action<any>,
): DataState {
  switch (action.type) {
    case DataActions.LOAD:
      return initialData;
    case DataActions.PUSH:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}
