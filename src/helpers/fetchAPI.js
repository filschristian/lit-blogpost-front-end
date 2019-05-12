import store from "../redux/store";

const { token = localStorage.getItem("token") } = store.getState().currentUser;
const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    Authorization: `bearer ${token}`
  }
};

const fetchAPI = (endpoint, config) =>
  new Promise((resolve, reject) => {
    const options = {
      ...defaultOptions,
      ...config
    };
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    fetch(`https://lit-blog.herokuapp.com/api/v1${endpoint}`, options)
      .then(res => res.json() || {})
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          return resolve(res);
        }
        return reject(res);
      })
      .catch(err => reject(err));
  });

export default fetchAPI;
