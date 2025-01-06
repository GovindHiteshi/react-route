import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'
import Products, { githubInfoLoader } from './components/Github/Products.jsx'
import Cart from './components/Cart/cart.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import Login from './components/Authentication/Login.jsx'
import Signup from './components/Authentication/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='cart' element={<Cart />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />


      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='products'
        element={<Products />}
      />
      <Route path='policy' element={<PrivacyPolicy />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
