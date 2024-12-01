import React from 'react';
import { seasonalMeals } from '@/data/seasonalMeals';

export function SeasonalMeals() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          وجبات موسمية مخصصة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seasonalMeals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {meal.title}
                </h3>
                <p className="text-gray-600 mb-4">{meal.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-500">سعرات</span>
                    <span className="font-semibold">{meal.calories}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500">بروتين</span>
                    <span className="font-semibold">{meal.protein}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500">كربوهيدرات</span>
                    <span className="font-semibold">{meal.carbs}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-900">{meal.price} ر.س</span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                    أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}