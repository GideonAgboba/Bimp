import * as authActionTypes from './authentication.types';
import * as homeActionTypes from '../Home/home.types';

// login
export const loginUser = (user) => ({
  type: authActionTypes.LOGIN_REQUEST,
  payload: user,
});
// export const login = (userData, _success, _error) => dispatch => {
//   Axios.post(`/auth/login`, userData)
//     .then(response => {
//       const {token} = response.data;

//       console.log('response.data', response.data)
//       const user = {};
//       user['username'] = userData?.username || 'Unknown';
//       user['loggedInAt'] = new Date();

//       // set user token
//       setAuthToken(token);

//       // set user data
//       dispatch({
//         type: authActionTypes.SET_USER,
//         payload: user,
//       });

//       // user has onboarded
//       dispatch({
//         type: homeActionTypes.SET_ONBOARDED,
//         payload: true,
//       });

//       _success(user);
//     })
//     .catch(err => {
//       console.log('err', err)
//       _error();
//     });
// };

// export const login = (userData, _success, _error) => async (dispatch) => {
//       Axios.post(`/auth/login`, userData)
//       .then(response => {
//         const {token} = response.data;
//         const user = {};
//         user['username'] = userData?.username || 'Unknown';
//         user['loggedInAt'] = new Date();

//         // set user token
//         setAuthToken(token);

//         // set user data
//         dispatch({
//           type: authActionTypes.SET_USER,
//           payload: user,
//         });

//         // user has onboarded
//         dispatch({
//           type: homeActionTypes.SET_ONBOARDED,
//           payload: true,
//         });

//         _success(user);
//       })
//       .catch(err => {
//         console.log('err', err);
//         _error();
//       });
//   };

// // logout
// export const logout =
//   (_callback = () => {}) =>
//   async dispatch => {
//     try {
//       dispatch({
//         type: authActionTypes.LOGOUT_USER,
//       });
//       setAuthToken(false);
//       _callback();
//     } catch (err) {
//       return false;
//     }
//   };

// // update
// export const update = (id, userData, _success, _error) => async dispatch => {
//   await Axios.put(`/user/${id}`, userData)
//     .then(async response => {
//       const {data} = response;

//       // set user data
//       await dispatch({
//         type: authActionTypes.SET_USER,
//         payload: data,
//       });

//       _success();
//     })
//     .catch(err => {
//       _error();
//     });

//   return;
// };



// // add item to cart
// export const addItemToCart =
//   (item, cart, _success, _error) => async (dispatch) => {
//     // dispatch item to cart
//     // check if already in cart
//     const prevItem = cart.filter(
//       cartItem => cartItem.id == item?.id
//     )[0];
//     if (prevItem) {
//       const index = cart.findIndex(cartItem => cartItem.id == item?.id);
//       cart[index] = item;
//     } else {
//       cart.push(item);
//     }
//     dispatch({
//       type: authActionTypes.SET_CART,
//       payload: cart,
//     });

//     // save in database
//     await Axios.post('/carts', {
//       products: cart,
//     })
//       .then(async response => {
//         const {data} = response;
//         _success(data);
//       })
//       .catch(err => {
//         _error();
//       });

//     return;
//   };

// // update item to cart
// export const updateItemToCart =
//   (item, cart, _success, _error) => async (dispatch) => {
//     // dispatch item to cart
//     // check if already in cart
//     const ItemID = item?.id, prevItem = cart.filter(
//       cartItem => cartItem.id == ItemID
//     )[0];
//     if (prevItem) {
//       const index = cart.findIndex(cartItem => cartItem.id == ItemID);
//       cart[index] = item;
//     } else {
//       cart.push(item);
//     }
//     dispatch({
//       type: authActionTypes.SET_CART,
//       payload: cart,
//     });

//     // save in database
//     await Axios.put(`/carts/${ItemID}`, cart)
//       .then(async response => {
//         const {data} = response;
//         _success(data);
//       })
//       .catch(err => {
//         _error();
//       });

//     return;
//   };

// // delete from cart
// export const deleteFromCart =
//   (item, cart, _success, _error) => async dispatch => {
//     // dispatch item to cart
//     // check if already in cart
//     const ItemID = item?.id, prevItem = cart.filter(
//       cartItem => cartItem.id == ItemID
//     )[0];
//     if (prevItem) {
//       const index = cart.findIndex(cartItem => cartItem.id == ItemID);
//       cart.splice(index, 1);
//     }
//     dispatch({
//       type: authActionTypes.SET_CART,
//       payload: cart,
//     });

//     // save in database
//     await Axios.delete(`/carts/${ItemID}`)
//       .then(async response => {
//         _success();
//       })
//       .catch(err => {
//         _error();
//       });

//     return;
//   };
