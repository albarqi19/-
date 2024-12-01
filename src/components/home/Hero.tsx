import React from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            وجبات صحية
            <span className="block text-emerald-600">مخصصة لأمراضك</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            نقدم وجبات صحية متنوعة تناسب حالتك الصحية، معدة بعناية من قبل خبراء التغذية
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/meals">
              <Button size="lg">ابدأ رحلتك الصحية</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}