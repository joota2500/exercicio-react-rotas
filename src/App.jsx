import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import NotFound from './pages/NotFound';
import { ProductList } from './components/ProductList';

function Header() {
  return (
    <header style={{ padding: '10px', background: '#333', color: 'white' }}>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
        <Link to="/user/1" style={{ margin: '0 10px', color: 'white' }}>Usuário 1</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '10px', background: '#333', color: 'white', marginTop: '20px' }}>
      © 2026 - Atividade de Rotas
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: '20px' }}>
        <ProductList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;