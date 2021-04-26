import * as actionTypess from "./constants";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const addUserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypess.ADD_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actionTypess.ADD_USER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case actionTypess.ADD_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default addUserReducer;
