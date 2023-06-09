import { createBrowserRouter } from 'react-router-dom';
import Banner from './pages/Home/Banner/Banner';
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization//Signup/Signup';
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductDetail from './pages/Productdetail/Productdetail/ProductDetail';
import { Outlet } from 'react-router-dom';
import Category from './pages/Category/Category/Category';
import Sportshoes from './pages/Sportshoes/Shoes_sport/Sportshoes';
import Hasresult from './pages/Search/Hasresult/Hasresult';
import Noresult from './pages/Search/Noresult/Noresult';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: '/',
        element: (
          <div>
            <Banner />
            <HomepageProduct />
          </div>
        ),
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/sportshoes',
        element: <Sportshoes />,
      },
      {
        path: '/update-profile',
        element: <Updateprofile />,
      },
      {
        path: '/change-password',
        element: <Changepassword />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/search?',
        element: <Hasresult />,
      },
      {
        path: '/noresults?',
        element: <Noresult />,
      },
    ],
  },

  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
export default router;
