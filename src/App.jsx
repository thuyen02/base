import React from 'react';
import Category from './pages/Category/Category/Category'
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile'
import BannerImg from './pages/Home/Banner/Banner';
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
import Footer from './Components/Footer/Footer';
import  Header  from './Components/Header/Header';
import SignIn from './pages/Authorization/SignIn/SignIn';
function App() {
  return (
    <div>    
    {/* <SignIn/> */}
      <Header/>
         <BannerImg/>
      {/* <Updateprofile/> */}
       <HomepageProduct/>
      {/* <Category/> */}
      <Footer/>
   
     
      {/* <Footer/> */}
    </div>
    
  );
}

export default App;
