import { createBrowserRouter } from 'react-router-dom';
import Banner from './pages/Home/Banner/Banner';
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization//Signup/Signup';
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/Productdetail/Productdetail/ProductDetail';
import { Outlet } from 'react-router-dom';
import Category from './pages/Category/Category/Category';
import Hasresult from './pages/Search/Hasresult/Hasresult';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
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
