import * as actionTypes from "../ActionTypes";
import fetchAPI from "../../helpers/fetchAPI";

export const handleInput = payload => ({
  type: actionTypes.HANDLE_INPUT,
  payload
});

export const loginSuccess = payload => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: actionTypes.LOGIN_FAILURE,
  payload
});

export const clearCredemtials = () => ({
  type: actionTypes.CLEAR_CREDENTIALS
});

export const fetchPostsSuccess = payload => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload
});

export const fetchPostsFailure = payload => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
  payload
});

export const fetchPosts = (userId, token) => dispatch => {
  fetchAPI(`/users/${userId}/posts`, {
    headers: { Authorization: `bearer ${token}` }
  })
    .then(data => {
      dispatch(fetchPostsSuccess(data.posts));
    })
    .catch(err => {
      dispatch(fetchPostsFailure(err));
    });
};

export const setSubmitting = payload => ({
  type: actionTypes.SET_SUBMITTING,
  payload
});

export const login = (email, password) => dispatch => {
  dispatch(setSubmitting(true));
  fetchAPI("/auth/login", { method: "POST", body: { email, password } })
    .then(data => {
      localStorage.setItem("token", data.token);
      dispatch(clearCredemtials());
      dispatch(loginSuccess(data));
      dispatch(fetchPosts(data.data.id, data.token));
      dispatch(setSubmitting(false));
      return data;
    })
    .catch(err => {
      dispatch(loginFailure(err));
      dispatch(setSubmitting(false));
    });
};
