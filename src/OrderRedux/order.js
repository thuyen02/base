import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../shared/services/http-client';

export const fetchOrderAction = createAsyncThunk(
  'order/fetchOrder',
  async userID => {
    const listOrders = await axiosInstance.get(
      `/orders?populate=product&filters[user][id]=${userID}`
    );
    return listOrders;
  }
);
export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (params, thunkAPI) => {
    try {
      const listOrders = await axiosInstance
        .delete(`/orders/${params.id}`)
        .then(response => console.log(response.data));
      thunkAPI.dispatch(fetchOrderAction(params.userID));
      return listOrders;
    } catch (error) {
      console.log(error);
    }
  }
);
export const checkoutOrder = createAsyncThunk('order/checkoutOrder', async (params, thunkAPI) => {
  const orderID = params.orders.map(order => order.id)
  try {
    const data = {
      data: {
        total: params.total,
        orders: orderID
      }
    }
    await axiosInstance.post('/payments', data).then(() => {
      console.log(data);
      params.orders.forEach(order => {
        axiosInstance.delete(`/orders/${order.id}`)
      })
    })
  } catch (error) {
    console.log(error);
  }
})
export const addQuantity = createAsyncThunk(
  'order/addQuantity',
  async (params, thunkAPI) => {
    try {
      const data = {
        data: {
          quantity: params.product.attributes.quantity + 1,
        },
      };
      const listOrders = await axiosInstance
        .put(`/orders/${params.product.id}`, data)
        .then(response => console.log(response.data.attributes.quantity));
      thunkAPI.dispatch(fetchOrderAction(params.userID));
      return listOrders;
    } catch (error) {
      console.log(error);
    }
  }
);
export const subQuantity = createAsyncThunk(
  'order/subQuantity',
  async (params, thunkAPI) => {
    try {
      const data = {
        data: {
          quantity: params.product.attributes.quantity - 1,
        },
      };
      const listOrders = await axiosInstance
        .put(`/orders/${params.product.id}`, data)
        .then(response => console.log(response.data.attributes.quantity));
      thunkAPI.dispatch(fetchOrderAction(params.userID));
      return listOrders;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  orders: [],
};
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrderAction.pending]: state => {
      state.loading = true;
    },
    [fetchOrderAction.rejected]: state => {
      state.loading = false;
    },
    [fetchOrderAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data;
    },
    [deleteOrder.pending]: state => {
      state.loading = true;
    },
    [deleteOrder.rejected]: state => {
      state.loading = false;
    },
    [deleteOrder.fulfilled]: (state, action) => {
      state.loading = false;
      // state.orders = action
    },
    [checkoutOrder.pending]: state => {
      state.loading = true;
    },
    [checkoutOrder.rejected]: state => {
      state.loading = false;
    },
    [checkoutOrder.fulfilled]: (state, action) => {
      state.loading = false;
      // state.orders = []
    },
    [addQuantity.pending]: state => {
      state.loading = true;
    },
    [addQuantity.rejected]: state => {
      state.loading = false;
    },
    [addQuantity.fulfilled]: (state, action) => {
      state.loading = false;
      // state.orders = action.payload.orders;
    },
    [subQuantity.pending]: state => {
      state.loading = true;
    },
    [subQuantity.rejected]: state => {
      state.loading = false;
    },
    [subQuantity.fulfilled]: (state, action) => {
      state.loading = false;
      // state.orders = action.payload;
    },
  },
});
export const selectOrder = state => state.order;
export default orderSlice.reducer;
