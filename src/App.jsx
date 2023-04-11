import React from 'react';
import Updateprofile from './components/Authorization/updateprofile/Updateprofile';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import ProductCard from './components/ProductCard/ProductCard'

function App() {

  return (
    <div>    
    <Header/>
      <Updateprofile />
      <Changepassword/>
      <Footer />
      <ProductCard/>
    </div>
    
  );
}

export default App;
