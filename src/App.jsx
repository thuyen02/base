import React from 'react';
import ProductCard from './Components/ProductCard/ProductCard'
import SignIn from './pages/Authorization/SignIn/SignIn'
import SignUp from './pages/Authorization/Signup/Signup.jsx'
import Header from './Components/Header/Header'
import Banner from './pages/Home/Banner/Banner.jsx'
import Footer from './Components/Footer/Footer'
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
import Hasresult from './pages/Search/Hasresult/Hasresult';
import Noresult from './pages/Search/Noresult/Noresult';
function App() {
  return (
    <div>    
      {/* <SignUp/>
      <SignIn/> */}
      {/* <ProductCard/> */}
      <Header/>
      {/* <Banner/>
      <HomepageProduct/> */}
      <Hasresult/>
      {/* <Noresult/> */}
      {/* <Footer/> */}
    </div>
    
  );
}

export default App;
