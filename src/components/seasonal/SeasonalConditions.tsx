import React from 'react';
import { seasonalConditions } from '@/data/seasonalConditions';

export function SeasonalConditions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          الحالات الصحية الموسمية
        </h2>
        <div className="space-y-12">
          {Object.entries(seasonalConditions).map(([season, { title, conditions }]) => (
            <div key={season} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">{title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conditions.map((condition) => (
                  <div key={condition.id} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {condition.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{condition.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">الأعراض:</h5>
                        <ul className="list-disc list-inside text-gray-600">
                          {condition.symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">الأطعمة الموصى بها:</h5>
                        <ul className="list-disc list-inside text-gray-600">
                          {condition.recommendedFoods.map((food, index) => (
                            <li key={index}>{food}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}