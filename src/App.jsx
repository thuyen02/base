import React from 'react';
import ProductCard from './components/ProductCard/ProductCard'
import HasOrders from './pages/Cart/Hasorders/Hasorders';
import NoOrder from './pages/Cart/Noorder/Noorder';
function App() {

  return (
    <div>    
      <ProductCard/>
      <HasOrders />
      <NoOrder/>
    </div>
    
  );
}

export default App;
