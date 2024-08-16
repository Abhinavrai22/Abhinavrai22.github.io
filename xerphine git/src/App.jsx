
import './App.css'
import {Routes, Route, useNavigate } from 'react-router-dom'
import SignUp from './pages/SignUp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Registration from './pages/registration/Registration';
import Layout from './components/Layout';
import Home from './pages/customers/Home';
import Verification from './pages/registration/Verification';
import Category from './pages/admin/products/categories/Categories'
import AddCategories from './pages/admin/products/categories/AddCategories';


function App() {
  const navigate = useNavigate()
  const { authenticated , token , user } = useSelector(state => state.auth)
  console.log(user ,token , authenticated)
  useEffect(() => {
    if(authenticated && (['signup' , 'signin' , 'verify-email' , 'recover-password'].includes(location.pathname))) {
      if(user?.role === 'ADMIN'){
        navigate('/dashboard')
      }
      else{
        navigate('/')
      }
    }
  } , [authenticated  , token])
  return (
    <>
    
        <Routes>
          <Route path="/signin" element={<SignUp />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/verify-email/:token" element={<Verification />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          {
            authenticated && (
              <>
              
              </>
            )
          }
          {
            authenticated && user?.role === 'ADMIN' && (
              <>
                <Route path='/allCategories' element={<Layout> <Category /> </Layout> } />
                <Route path='/dashboard' element={<Layout> <AddCategories /> </Layout> } />
              </>
            )
          }
        </Routes>

    </>
  )
}

export default App
