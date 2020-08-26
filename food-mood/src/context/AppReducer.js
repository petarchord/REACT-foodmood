export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDE_DRAWWER":
      return {
        ...state,
        sideDrawwerOpen: !state.sideDrawwerOpen,
      };

    default:
      return state;
  }
};
