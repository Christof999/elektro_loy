import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leistungen from './components/Leistungen';
import UeberUns from './components/UeberUns';
import Vorteile from './components/Vorteile';
import Referenzen from './components/Referenzen';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Leistungen />
        <UeberUns />
        <Vorteile />
        <Referenzen />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
