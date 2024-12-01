import React from 'react';
import { cn } from '@/lib/utils';

interface MealCardProps {
  title: string;
  description: string;
  image: string;
  calories: number;
  protein: string;
  carbs: string;
  conditions: string[];
  healthBenefits?: string[];
  onClick?: () => void;
}

export function MealCard({
  title,
  description,
  image,
  calories,
  protein,
  carbs,
  conditions,
  healthBenefits,
  onClick
}: MealCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-102"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {conditions.map((condition, index) => (
            <span
              key={index}
              className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              {condition}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1 line-clamp-2">{description}</p>
        
        {healthBenefits && healthBenefits.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">الفوائد الصحية:</h4>
            <ul className="list-disc list-inside space-y-1">
              {healthBenefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
          <div className="text-center bg-gray-50 p-2 rounded">
            <span className="block text-gray-500">سعرات</span>
            <span className="font-semibold">{calories}</span>
          </div>
          <div className="text-center bg-gray-50 p-2 rounded">
            <span className="block text-gray-500">بروتين</span>
            <span className="font-semibold">{protein}</span>
          </div>
          <div className="text-center bg-gray-50 p-2 rounded">
            <span className="block text-gray-500">كربوهيدرات</span>
            <span className="font-semibold">{carbs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}