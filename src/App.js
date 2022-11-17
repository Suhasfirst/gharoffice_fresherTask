import './App.css';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Admin from './components/Admin';
import AdmProducts from './components/AdmProducts';
import Customer from './components/Customer';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/pro' element={<AdmProducts />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
