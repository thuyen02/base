import axiosInstance from '../shared/services/http-client';

const productApi = {
  getAll: params => {
    const url = '/products';
    return axiosInstance.get(url, { params });
  },
  getId: id => {
    const url = `/products/${id}`;
    return axiosInstance.get(url);
  },
  getCategory: (params, id) => {
    const url = `/categories/${id}?populate=products`;
    return axiosInstance.get(url, { params });
  },
};
console.log(productApi);
export default productApi;
