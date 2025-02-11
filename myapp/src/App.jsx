import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import required components from react-router-dom
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomeProducts from './components/HomeProducts';
import Add from './components/Add';
import Manage from './components/Manage';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Payment from './components/Payment';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component will render at '/' */}
        <Route path="/products" element={<HomeProducts />} /> {/* HomeProducts component will render at '/products' */}
        <Route path="/add" element={<Add />} /> 
        <Route path="/manage" element={<Manage />} /> 

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
      </Routes>
    </>
  );
}

export default App;
