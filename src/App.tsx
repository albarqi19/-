import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { FeaturedMeals } from './components/home/FeaturedMeals';
import { IntegratedSeasonalContent } from './components/seasonal/IntegratedSeasonalContent';
import { MealsPage } from './pages/MealsPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <FeaturedMeals />
              <IntegratedSeasonalContent />
            </main>
          } />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;