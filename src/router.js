import { createBrowserRouter } from 'react-router-dom';
import Banner from './pages/Home/Banner/Banner';
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
import SignIn from './pages/Authorization/SignIn/SignIn';
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Category from './pages/Category/Category/Category';
import SignUp from './pages/Authorization/Signup/Signup'
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
        element: <Category/>
      }
    ],
  },
  {
    path: "/",
    element: (
      <>
        <Header/>
        <Outlet/>
        {/* <Updateprofile/> */}
      </>
    ),
    children: [
      {
        path: '/updateprofile',
        element: <Updateprofile/>
      },
      {
        path: '/changepassword',
        element: <Changepassword/>
      }
    ]
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },

]);
export default router;