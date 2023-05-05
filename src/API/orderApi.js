import axiosInstance from '../shared/services/http-client';

const orderApi = {
  getOrderList: params => {
    const url = '/orders';
    return axiosInstance.get(url, { params });
  },
  createOrder: product => {
    const url = '/orders';
    return axiosInstance.post(url, { data: product });
  },
  updateOrder: (id, data) => {
    const url = `/orders/${id}`;
    return axiosInstance.put(url, { data });
  },
};
export default orderApi;
