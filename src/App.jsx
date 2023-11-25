
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'

function App() {


  return (
<>
<Router>
<Navbar />
  <Routes>
    <Route path='/' element={<Dashboard></Dashboard>} />
    <Route path='/cart' element={<Cart></Cart>} />
  </Routes>
</Router>
</>
  )
}

export default App
