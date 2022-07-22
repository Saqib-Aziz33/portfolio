import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer';
// pages
import Portfolio from './pages/Portfolio'
import Index from './pages/Index'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return <>
    <Router>
      <Navbar />
        <main>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
        </main>
      <Footer />
    </Router>
  </>;
}

export default App;
