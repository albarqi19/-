import React from 'react';

interface MealImageProps {
  mealId: string;
  title: string;
  className?: string;
}

export function MealImage({ mealId, title, className = '' }: MealImageProps) {
  // تخزين الصور في مجلد public/images/meals
  const imagePath = `/images/meals/${mealId}.jpg`;
  
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img
        src={imagePath}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          // إذا فشل تحميل الصورة، استخدم صورة افتراضية
          (e.target as HTMLImageElement).src = '/images/meals/default-meal.jpg';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="absolute bottom-2 right-2 text-white font-bold text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}
