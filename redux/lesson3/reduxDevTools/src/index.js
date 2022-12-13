import { decrement, increment, store } from './counter';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(increment());
store.dispatch(decrement());
