import axiosInstance from "../shared/services/http-client";

const orderApi = {
  getOrderById: id => {
    const url = `/api/order/${id}`,
    
    return axiosInstance.get()
      
  }
}