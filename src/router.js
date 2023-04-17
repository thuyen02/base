import { createBrowserRouter } from 'react-router-dom';
import Banner from './pages/Home/Banner/Banner';
import HomepageProduct from './pages/Home/ShowProducts/HomepageProduct';
<<<<<<< HEAD
import SignIn from './pages/Authorization/SignIn/SignIn';
=======
import SignIn from './pages/Authorization/SignIn/SignIn'
import SignUp from './pages/Authorization//Signup/Signup'
>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b
import Updateprofile from './pages/Myprofile/Updateprofile/Updateprofile';
import Changepassword from './pages/Myprofile/Changepassword/Changepassword';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Category from './pages/Category/Category/Category';
<<<<<<< HEAD
import SignUp from './pages/Authorization/Signup/Signup'
=======

>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b
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
<<<<<<< HEAD

=======
>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b
]);
export default router;