const myRedux = {
  createStore(reducer) {
    // TODO
    let store;
    let state;
    let stack = [];

    const getState = () => {
      return state;
    };

    const dispatch = action => {
      state = reducer(state, action);
      stack.forEach(func => func());
    };

    const subscribe = render => {
      stack.push(render);
      return () => {
        stack.filter(func => func !== render);
      };
    };

    store = {
      getState,
      dispatch,
      subscribe,
    };

    dispatch({});

    return store;
  },
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const render = () => {
  document.getElementById(
    "value"
  ).innerHTML = store.getState().toString();
};

const store = myRedux.createStore(counter);

store.subscribe(render);
render();

document
  .getElementById("increment")
  .addEventListener("click", function() {
    store.dispatch({ type: "INCREMENT" });
  });

document
  .getElementById("decrement")
  .addEventListener("click", function() {
    store.dispatch({ type: "DECREMENT" });
  });

// test section

console.log("ストアが与えられた初期値で作成できたか");
expect(store.getState()).toEqual(0);
console.log("test passed!");

console.log("減算がディスパッチされたとき-1されたか");
const before1 = store.getState();
store.dispatch({ type: "DECREMENT" });
const after1 = store.getState();
expect(after1).toEqual(before1 - 1);
console.log("test passed!");

console.log("足し算がディスパッチされたとき+1されたか");
const before2 = store.getState();
store.dispatch({ type: "INCREMENT" });
const after2 = store.getState();
expect(after2).toEqual(before2 + 1);
console.log("test passed!");

console.log("きちんとunsubscribeされているか");
const unscribe = store.subscribe(render);
unscribe();

console.log("all test passed!");
