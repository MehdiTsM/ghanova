import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Loading from './components/Loading';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loading spinner on route change
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Optional: adjust the timeout

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="App flex flex-col min-h-screen">
      {loading && <Loading />}

      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
