import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomeProducts from './components/HomeProducts';
import Add from './components/Add';
import Manage from './components/Manage';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Payment from './components/Payment';
import Cart from './components/Cart'; // Import the Cart component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<HomeProducts />} />
        <Route path="/add" element={<Add />} />
        <Route path="/manage" element={<Manage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/cart/:userId' element={<Cart />} /> {/* Add the Cart route */}
      </Routes>
    </>
  );
}

export default App;