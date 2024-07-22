import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom"
import Course from './course/Course';
import Signup from './components/Signup';
import Contact from './contact/Contact';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
    <>
  <div className=''>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course'element={authUser ? <Course/>:<Navigate to="/signup"/>}/>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/contact'element={<Contact/>}/>
    
   </Routes>
   <Toaster/>
   </div>
    </>
  );
}

export default App;
