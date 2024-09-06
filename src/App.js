import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import Detailpage from './components/Detailpage';
import Showmore from './components/Showmore';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Booknow from './components/Booknow';
import SearchResults from './components/SearchResults';
import ContactLens from './components/ContactLens';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div>
         <Navbar/>

          <Routes>
             <Route path="/" element={
              <>
               <Carousel/>
               <Logo />
               <Booknow/>
               <Contact/>

              </>
            } />
            <Route path="/detailpage" element={<Detailpage />} />
            <Route path="/showmore" element={<Showmore />} />
            <Route path="/contact-lens" element={<ContactLens />} />
            <Route path="/product/:id" element={<ProductDetails />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        
    
    </div>
  );
}

export default App;
