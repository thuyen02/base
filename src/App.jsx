import React from 'react';
import Header from './pages/Home/Header/Header';
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import Footer from './pages/Home/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Updateprofile />
      <Changepassword />
      <Footer />
    </div>
  );
}

export default App;
