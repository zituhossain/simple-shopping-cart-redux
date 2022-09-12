import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
