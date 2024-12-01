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
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-102 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {conditions.map((condition, index) => (
              <span
                key={index}
                className="bg-emerald-600 text-white px-2 py-0.5 rounded-full text-xs font-medium inline-block"
              >
                {condition}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 text-sm">
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
    </div>
  );
}