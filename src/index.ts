import {of} from 'rxjs';

import {DataActions} from 'src/store/data/actions';
import {store} from 'src/store/state';

document.addEventListener('DOMContentLoaded', () => {
  const data$ = of(store);
  data$.subscribe(console.log);
  store.dispatch(DataActions.load());

  const foo = (document.getElementById('foo') as HTMLElement);
  foo.addEventListener('click', () => {
    store.dispatch(DataActions.push(4));
  });
});
