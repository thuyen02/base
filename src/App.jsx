import React from 'react';
// import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Category from './pages/Category/thuyen/Category';
function App() {

  return (
    <div>    
      <Header/>
      {/* <Updateprofile/> */}
      <Category/>
      <Footer/>
    </div>
    
  );
}

export default App;
