import * as initialData from './initial.json';

export const dataInitialState: DataState = initialData;

export function dataReducer(state = dataInitialState): DataState {
  return state;
}
