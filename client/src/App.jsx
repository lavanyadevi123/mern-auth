import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/Signin';



export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
   </BrowserRouter>
  )
}
