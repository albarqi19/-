import React, { useState } from 'react';
import { seasonalMeals } from '@/data/meals/seasonalMeals';
import { arthritisMeals } from '@/data/meals/arthritisMeals';
import { migraineMeals } from '@/data/meals/migraineMeals';
import { diabetesMeals } from '@/data/meals/diabetesMeals';
import { celiacMeals } from '@/data/meals/celiacMeals';
import { immunityMeals } from '@/data/meals/immunityMeals';
import { mentalHealthMeals } from '@/data/meals/mentalHealthMeals';
import { soreThroatMeals } from '@/data/meals/soreThroatMeals';
import { gallbladderMeals } from '@/data/meals/gallbladderMeals';
import { hairLossMeals } from '@/data/meals/hairLossMeals';
import { colonMeals } from '@/data/meals/colonMeals';
import { energyMeals } from '@/data/meals/energyMeals';
import { MealCard } from '@/components/meals/MealCard';
import { MealDetails } from '@/components/meals/MealDetails';
import { Dialog } from '@/components/ui/Dialog';
import { translateCondition } from '@/utils/conditionTranslations';
import { type Meal } from '@/data/types/meal';

export function MealsPage() {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const allMeals = [
    ...seasonalMeals,
    ...arthritisMeals,
    ...migraineMeals,
    ...diabetesMeals,
    ...celiacMeals,
    ...immunityMeals,
    ...mentalHealthMeals,
    ...soreThroatMeals,
    ...gallbladderMeals,
    ...hairLossMeals,
    ...colonMeals,
    ...energyMeals
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">الوجبات المخصصة للأمراض</h1>
          <p className="mt-4 text-xl text-gray-600">اختر الوجبة المناسبة لحالتك الصحية</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allMeals.map((meal) => (
            <div key={meal.id} className="flex flex-col h-full">
              <MealCard
                title={meal.title}
                description={meal.description}
                image={meal.image}
                calories={meal.calories}
                protein={meal.protein}
                carbs={meal.carbs}
                conditions={meal.conditions.map(translateCondition)}
                healthBenefits={meal.benefits}
                onClick={() => setSelectedMeal(meal)}
              />
            </div>
          ))}
        </div>

        <Dialog
          open={selectedMeal !== null}
          onClose={() => setSelectedMeal(null)}
          title={selectedMeal?.title}
        >
          {selectedMeal && (
            <MealDetails
              meal={selectedMeal}
              onClose={() => setSelectedMeal(null)}
            />
          )}
        </Dialog>
      </div>
    </div>
  );
}