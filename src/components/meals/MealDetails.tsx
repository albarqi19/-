import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { type Meal } from '@/data/types/meal';

interface MealDetailsProps {
  meal: Meal;
  isOpen: boolean;
  onClose: () => void;
}

export function MealDetails({ meal, isOpen, onClose }: MealDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 shadow-xl">
          {/* رأس الصفحة مع الصورة */}
          <div className="relative w-full h-64 mb-6">
            <img
              src={meal.image}
              alt={meal.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* العنوان والوصف */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{meal.title}</h2>
          <p className="text-gray-600 mb-6">{meal.description}</p>

          {/* المعلومات الغذائية */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-emerald-50 p-4 rounded-lg text-center">
              <p className="text-sm text-emerald-600 font-medium">السعرات الحرارية</p>
              <p className="text-lg font-bold text-emerald-700">{meal.calories}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg text-center">
              <p className="text-sm text-emerald-600 font-medium">البروتين</p>
              <p className="text-lg font-bold text-emerald-700">{meal.protein}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg text-center">
              <p className="text-sm text-emerald-600 font-medium">الكربوهيدرات</p>
              <p className="text-lg font-bold text-emerald-700">{meal.carbs}</p>
            </div>
          </div>

          {/* المكونات */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">المكونات:</h3>
            <ul className="list-disc list-inside space-y-2">
              {meal.recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* طريقة التحضير */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">طريقة التحضير:</h3>
            <ol className="list-decimal list-inside space-y-3">
              {meal.recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>

          {/* لماذا هذه الوجبة مناسبة */}
          <div className="border-2 border-emerald-200 rounded-lg p-6 mb-6 bg-emerald-50">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              لماذا هذه الوجبة مناسبة؟
            </h3>
            <ul className="space-y-2">
              {meal.whyItWorks.split('\n').map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-600 ml-2">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* وقت التحضير وعدد الأشخاص */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">وقت التحضير</p>
                <p className="font-semibold">{meal.recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Users className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">عدد الأشخاص</p>
                <p className="font-semibold">{meal.recipe.servings} أشخاص</p>
              </div>
            </div>
          </div>

          {/* زر الإغلاق */}
          <Button onClick={onClose} variant="outline">
            إغلاق
          </Button>
        </div>
      </div>
    </Dialog>
  );
}