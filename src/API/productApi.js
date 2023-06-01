import axiosInstance from '../shared/services/http-client';

const productApi = {
  getAll: params => {
    const url = '/products';
    return axiosInstance.get(url, { params });
  },
  getId: id => {
    const url = `/products/${id}?populate=category`;
    return axiosInstance.get(url);
  },
  getCategory: id => {
    const url = `/categories/${id}?populate=products`;
    return axiosInstance.get(url);
  },

  postAddToCart: data => {
    const url = `orders`;
    return axiosInstance.post(url, { data });
  },
  getCategoryId: id => {
    const url = `/categories/${id}?populate=products`;
    return axiosInstance.get(url);
  },
};
export default productApi;
