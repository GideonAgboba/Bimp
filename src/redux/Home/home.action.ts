import * as actionTypes from './home.types';
import Axios from '../Axios';

// categories
export const getCategories = (_success, _error) => async dispatch => {
  await Axios.get('/products/categories')
    .then(async response => {
      const {data} = response;
      await dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: data ? data : [],
      });
      _success(data);
    })
    .catch(err => {
      _error();
    });

  return;
};

// trendings
export const getTrending =
  (start = 0, end = 9, _success, _error) =>
  async dispatch => {
    await ICGAxios.get(`/GetAllItemsWithNewDetails/${start}/${end}`)
      .then(async response => {
        const {data} = response;
        await dispatch({
          type: actionTypes.SET_TRENDINGS,
          payload: data ? data : [],
        });
        _success(data);
      })
      .catch(err => {
        _error();
      });

    return;
  };
  
// get all products
export const getProducts =
  (limit = 5, _success, _error) =>
  async dispatch => {
    await Axios.get(`/products?limit=${limit}`)
      .then(async response => {
        const {data} = response;
        _success(data);
      })
      .catch(err => {
        _error();
      });

    return;
  };

// get product
export const getProduct =
  (id, _success, _error) =>
  async dispatch => {
    await Axios.get(`/products/${id}`)
      .then(async response => {
        const {data} = response;
        _success(data);
      })
      .catch(err => {
        _error();
      });

    return;
  };

// get category products
export const getCategoryProducts =
  (category, _success, _error) =>
  async dispatch => {
    await Axios.get(
      `/products/category/${category}`
    )
      .then(async response => {
        const {data} = response;
        _success(data);
      })
      .catch(err => {
        _error();
      });

    return;
  };

// checkout
// export const checkout = (item, _success, _error) => async dispatch => {
//   await Axios.post(`/user/checkout`, item)
//     .then(async response => {
//       const {data} = response.data;
//       await dispatch({
//         type: actionTypes.SET_CART,
//         payload: [],
//       });
//       _success(data);
//     })
//     .catch(async err => {
//       // _error();
//       await dispatch({
//         type: actionTypes.SET_CART,
//         payload: [],
//       });
//       _success();
//     });

//   return;
// };
