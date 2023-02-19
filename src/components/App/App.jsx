// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import HomePage from 'components/pages/HomePage/HomePage';
import MoviesPage from 'components/pages/MoviesPage/Movies';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
