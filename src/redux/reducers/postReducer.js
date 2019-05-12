import * as actionTypes from "../ActionTypes";
import { posts as initialState } from "../initialState";

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload
      };
    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        errors: payload.message
      };
    default:
      return state;
  }
};

export default postReducer;
