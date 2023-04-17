import React from 'react';
import {RouterProvider} from 'react-router-dom'
import router from './router'
import Category from './pages/Category/Category/Category';
function App() {
  return (
  // <RouterProvider router={router}>
  
  //  <App/>
  //  </RouterProvider>   
  <div>
  <Category/>   
</div>  
  );
}

export default App;
