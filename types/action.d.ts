declare interface Action<T> {
  error?: boolean;
  meta?: any;
  payload?: T;
  type: string;
}
