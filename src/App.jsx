import Hero from './components/Hero';
import AboutGoals from './components/AboutGoals';
import AgendaSpeaker from './components/AgendaSpeaker';
import Booking from './components/Booking';
import DocsInfo from './components/DocsInfo';
import SEO from './components/SEO';
import './components/TicketStyles.css';

export default function App() {
  return (
    <div className="min-h-screen font-inter bg-white text-gray-900">
      <SEO />
      <Header />
      <Hero />
      <AboutGoals />
      <AgendaSpeaker />
      <Booking />
      <DocsInfo />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#hero" className="font-semibold">TRUST ISLAM</a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#about" className="text-white/80 hover:text-white">Tentang</a>
          <a href="#agenda" className="text-white/80 hover:text-white">Agenda</a>
          <a href="#booking" className="text-white/80 hover:text-white">Daftar</a>
        </nav>
        <a href="#booking" className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-black hover:bg-emerald-400">Daftar Gratis</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
        <p className="font-semibold text-gray-800">Rekomendasi warna & font</p>
        <ul className="mt-2 list-disc pl-5">
          <li>Warna: Hitam pekat (#0B0B0B), Putih, Emerald 500, Abu-abu netral untuk teks.</li>
          <li>Font: Inter/Manrope untuk tampilan modern dan bersih.</li>
        </ul>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} TRUST ISLAM. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}
