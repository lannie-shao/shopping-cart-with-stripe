import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import CartProvider from './CartContext';

function App() {
  return (
    <div className="App">
    <CartProvider>
     <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route index element={<Store />}/>
        <Route path='cancel' element={<Cancel />}/>
        <Route path='success' element={<Success />} />
      </Routes>
     </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
