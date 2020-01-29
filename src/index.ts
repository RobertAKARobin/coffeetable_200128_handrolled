// import {Observable} from 'rxjs';

import {DataActions} from 'src/store/data/actions';
import {store} from 'src/store/state';

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(() => console.log(store.getState()));
  store.dispatch(DataActions.load());
});
