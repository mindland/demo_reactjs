import * as actionTypess from "./constants";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypess.AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actionTypess.AUTH_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case actionTypess.AUTH_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
