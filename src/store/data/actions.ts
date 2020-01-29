export class DataActions {
  static LOAD = 'Data: Load';
  static LOAD_SUCCESS = 'Data: Load success';
  static LOAD_FAILURE = 'Data: Load failure';

  static load = (): Action<void> => ({
    type: DataActions.LOAD,
  });

  static loadSuccess = (payload: DataState): Action<DataState> => ({
    type: DataActions.LOAD_SUCCESS,
    payload,
  });

  static loadFailure = (payload: string = ''): Action<string> => ({
    type: DataActions.LOAD_FAILURE,
    error: true,
    payload,
  });
}
