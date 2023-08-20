export const initialState = {
  val: null,
};

export const actionTypes = {
  SET_SEARCH_VAL: "SET_SEARCH_VAL",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_VAL:
      return { ...state, val: action.val };

    default:
      return state;
  }
};
export default reducer;
