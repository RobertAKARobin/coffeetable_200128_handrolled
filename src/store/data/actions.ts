export class Load implements Action {
  type = '[Data] Load';
}

export class LoadSuccess implements Action {
  type = '[Data] Load success';

  constructor(
    public payload: DataState,
  ) {}
}

export class LoadFail implements Action {
  type = '[Data] Load fail';

  constructor(
    public error = true,
    public payload: DataState,
  ) {}
}
