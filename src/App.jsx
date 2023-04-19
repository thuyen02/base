import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
function App() {
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
