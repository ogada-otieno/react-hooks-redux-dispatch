let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count;
}

const dispatch = (action) => {
  state = changeState(state, action);
  // call the render function
  render();
};

dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });
