import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useDispatch } from 'react-redux';
import { fetchOrderAction } from './OrderRedux/order';
function App() {
  const userID = localStorage.getItem('ut')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrderAction(userID))
  }, [dispatch])
  return (
    <RouterProvider router={router}>
      {/* <div>
      <Category/>   
    </div> */}
      <App />
    </RouterProvider>
  );
}

export default App;
