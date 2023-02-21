// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import HomePage from 'components/pages/HomePage/HomePage';
import MoviesPage from 'components/pages/MoviesPage/MoviesPage';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';
import SinglePostPage from 'components/pages/SinglePostPage/SinglePostPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SinglePostPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
