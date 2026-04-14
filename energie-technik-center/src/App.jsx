import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Elektrotechnik from './pages/Elektrotechnik';
import Energietechnik from './pages/Energietechnik';
import Kontakt from './pages/Kontakt';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elektrotechnik" element={<Elektrotechnik />} />
          <Route path="/energietechnik" element={<Energietechnik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
