import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Estoque from 'pages/Estoque';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Bike from 'pages/Bike';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='bikes' element={<Estoque />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='bike/:id' element={<Bike />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}