declare interface Action {
  type: string;

  error?: boolean;
  meta?: any;
  payload?: any;
}
