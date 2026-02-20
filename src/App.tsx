import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import Rating from './pages/Rating'
import Creator from './pages/Creator'
import Register from './pages/Register'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/rating" element={<Rating/>}></Route>
          <Route path="/creator" element={<Creator/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>

        </Routes>
        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
