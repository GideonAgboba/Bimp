import setAuthToken from '../setAuthToken';
import Axios from '../Axios';

export const userLogin = async (userData) => {
    const response = await Axios.post(`/auth/login`, userData);
    const {token} = response.data;
    const user = {};
    user['username'] = userData?.username || 'Unknown';
    user['loggedInAt'] = new Date();
    user['token'] = token

    // set user token
    setAuthToken(token);

    return user;
}

export const fetchUserCart = async (id) => {
    const response = await Axios.get(`/carts/user/${id}`);
    const {data} = response;
    return data || [];
}

// get user cart
export const getUserCart =
  (id, _success, _error) =>
  async dispatch => {
    await Axios.get(`/carts/user/${id}`)
      .then(async response => {
        const {data} = response;
        dispatch({
          type: authActionTypes.SET_CART,
        });
        _success(data);
      })
      .catch(err => {
        _error();
      });

    return;
  };