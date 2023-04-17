import axiosInstance from "../../../shared/services/http-client";
const productApi = {
    getAll:(params) =>{
       const url = '/products'
       return axiosInstance.get(url,{params})
    },
    // get:(id) =>{
    //     const url = `/products/${id}`;
    //     return axiosInstance.get(url);
    //  },
     
};
export default productApi;