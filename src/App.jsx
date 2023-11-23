<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
    </BrowserRouter>
}
=======
import React from 'react'

export default function App() {

  return (
    <h1>App</h1>
  )
}
>>>>>>> 0a03017f50aea7594bea4ac1def212ed2d899add
