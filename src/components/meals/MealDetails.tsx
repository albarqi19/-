import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { type Meal } from '@/data/types/meal';

interface MealDetailsProps {
  meal: Meal;
  onClose: () => void;
}

export function MealDetails({ meal, onClose }: MealDetailsProps) {
  return (
    <div className="space-y-6">
      <img
        src={meal.image}
        alt={meal.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      
      <div className="bg-emerald-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-emerald-900 mb-2">لماذا هذه الوجبة مناسبة؟</h4>
        <p className="text-emerald-700">{meal.whyItWorks}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Clock className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">وقت التحضير</p>
            <p className="font-semibold">{meal.recipe.prepTime}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Clock className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">وقت الطهي</p>
            <p className="font-semibold">{meal.recipe.cookTime}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-50 p-4 rounded-lg">
        <Users className="h-5 w-5 text-gray-400" />
        <div>
          <p className="text-sm text-gray-500">عدد الأشخاص</p>
          <p className="font-semibold">{meal.recipe.servings} أشخاص</p>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">المكونات:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {meal.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">طريقة التحضير:</h4>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {meal.recipe.instructions.map((instruction, index) => (
            <li key={index} className="leading-relaxed">{instruction}</li>
          ))}
        </ol>
      </div>

      <div className="bg-amber-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-amber-900 mb-2">نصائح مفيدة:</h4>
        <ul className="list-disc list-inside space-y-1 text-amber-700">
          {meal.recipe.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-end">
        <Button onClick={onClose} variant="outline">
          إغلاق
        </Button>
      </div>
    </div>
  );
}