// // import css from './App.module.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from 'components/Navbar/Navbar';
// import HomePage from 'components/pages/HomePage/HomePage';
// import MoviesPage from 'components/pages/MoviesPage/MoviesPage';
// import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';
// import SinglePostPage from 'components/pages/SinglePostPage/SinglePostPage';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<MoviesPage />} />
//         <Route path="/movies/:id" element={<SinglePostPage />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// import css from './App.module.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Navbar = lazy(() => import('components/Navbar/Navbar'));
const HomePage = lazy(() => import('components/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('components/pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() =>
  import('components/pages/NotFoundPage/NotFoundPage')
);
const SinglePostPage = lazy(() =>
  import('components/pages/SinglePostPage/SinglePostPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
