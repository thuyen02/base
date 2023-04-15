import React from 'react';
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile'
import BannerImg from './pages/Home/Banner/Banner';
import Category from './pages/Category/Category/Category';
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
import Footer from './Components/Footer/Footer';
import  Header  from './Components/Header/Header';
import SignIn from './pages/Authorization/SignIn/SignIn';
import { RouterProvider } from 'react-router-dom';
import router from './router';
function App() {

  return (
   <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
