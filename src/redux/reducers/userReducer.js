import * as actionTypes from "../ActionTypes";
import { currentUser as initialState } from "../initialState";

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.HANDLE_INPUT:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [payload.type]: payload.value
        }
      };
    case actionTypes.SET_SUBMITTING:
      return {
        ...state,
        submitting: payload
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        profile: {
          ...payload.data
        },
        isLoggedIn: true,
        token: payload.token
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: "Email and Password don't match"
      };
    case actionTypes.CLEAR_CREDENTIALS:
      return {
        ...state,
        credentials: {
          email: "",
          password: ""
        }
      };
    default:
      return state;
  }
};

export default userReducer;
