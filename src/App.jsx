import React from 'react';
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import ProductCard from './components/ProductCard/ProductCard'

function App() {

  return (
    <div>    
    <Header/>
      <Updateprofile />
      <Changepassword/>
      <ProductCard/>
      <Footer />
    </div>
    
  );
}

export default App;
