import axiosInstance from '../shared/services/http-client';

const productApi = {
  getAll: parmas => {
    const url = '/products';
    return axiosInstance.get(url, { parmas });
  },
  getId: id => {
    const url = `/products/${id}`;
    return axiosInstance.get(url);
  },
};

export default productApi;
