import React, { useState } from 'react';
import { healthCategories } from '@/data/healthCategories';
import { healthConditions } from '@/data/healthConditions';
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
import { ChevronDown, ChevronUp, AlertCircle, Info, Clock, Users } from 'lucide-react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';

export function IntegratedSeasonalContent() {
  const [expandedCondition, setExpandedCondition] = useState<string | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<typeof seasonalMeals[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(healthCategories[0].id);

  const getConditionsForCategory = (categoryId: string) => {
    return healthConditions.filter(condition => condition.categoryId === categoryId);
  };

  const getMealsForCondition = (conditionId: string) => {
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
    return allMeals.filter(meal => meal.conditions.includes(conditionId));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          الحالات الصحية والوجبات المناسبة
        </h2>

        <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-8">
          {healthCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-emerald-50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {getConditionsForCategory(activeCategory).map((condition) => (
            <div key={condition.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <button
                  className="w-full flex justify-between items-center"
                  onClick={() => setExpandedCondition(
                    expandedCondition === condition.id ? null : condition.id
                  )}
                >
                  <div className="text-right">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {condition.name}
                    </h4>
                    <p className="text-gray-600 mt-1">{condition.description}</p>
                  </div>
                  {expandedCondition === condition.id ? (
                    <ChevronUp className="h-6 w-6 text-emerald-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-emerald-600" />
                  )}
                </button>

                {expandedCondition === condition.id && (
                  <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">الأعراض:</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {condition.symptoms.map((symptom, index) => (
                              <li key={index}>{symptom}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">الأطعمة الموصى بها:</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {condition.recommendedFoods.map((food, index) => (
                              <li key={index}>{food}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h5 className="font-medium text-red-900 mb-2 flex items-center">
                            <AlertCircle className="h-5 w-5 ml-2" />
                            أطعمة يجب تجنبها:
                          </h5>
                          <ul className="list-disc list-inside text-red-700 space-y-1">
                            {condition.avoidFoods.map((food, index) => (
                              <li key={index}>{food}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <h5 className="font-medium text-emerald-900 mb-2">نصائح غذائية:</h5>
                          <ul className="list-disc list-inside text-emerald-700 space-y-1">
                            {condition.nutritionalTips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-2 flex items-center">
                        <Info className="h-5 w-5 ml-2" />
                        لماذا هذه التوصيات؟
                      </h5>
                      <p className="text-blue-700">{condition.whyTheseRecommendations}</p>
                    </div>

                    <div className="mt-8">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">الوجبات المقترحة:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getMealsForCondition(condition.id).map((meal) => (
                          <div key={meal.id} className="bg-white rounded-lg shadow border overflow-hidden">
                            <img
                              src={meal.image}
                              alt={meal.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h6 className="text-lg font-semibold text-gray-900">{meal.title}</h6>
                              <p className="text-sm text-gray-600 mt-1">{meal.description}</p>
                              
                              <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                                <div className="text-center bg-gray-50 p-2 rounded">
                                  <span className="block text-gray-500">سعرات</span>
                                  <span className="font-semibold">{meal.calories}</span>
                                </div>
                                <div className="text-center bg-gray-50 p-2 rounded">
                                  <span className="block text-gray-500">بروتين</span>
                                  <span className="font-semibold">{meal.protein}</span>
                                </div>
                                <div className="text-center bg-gray-50 p-2 rounded">
                                  <span className="block text-gray-500">كربوهيدرات</span>
                                  <span className="font-semibold">{meal.carbs}</span>
                                </div>
                              </div>

                              <Button 
                                onClick={() => setSelectedMeal(meal)}
                                className="w-full mt-4"
                              >
                                عرض التفاصيل والوصفة
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={selectedMeal !== null}
          onClose={() => setSelectedMeal(null)}
          title={selectedMeal?.title}
        >
          {selectedMeal && (
            <div className="space-y-6">
              <img
                src={selectedMeal.image}
                alt={selectedMeal.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">لماذا هذه الوجبة مناسبة؟</h4>
                <p className="text-emerald-700">{selectedMeal.whyItWorks}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">وقت التحضير</p>
                    <p className="font-semibold">{selectedMeal.recipe.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">وقت الطهي</p>
                    <p className="font-semibold">{selectedMeal.recipe.cookTime}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-50 p-4 rounded-lg">
                <Users className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">عدد الأشخاص</p>
                  <p className="font-semibold">{selectedMeal.recipe.servings} أشخاص</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">المكونات:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {selectedMeal.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">طريقة التحضير:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  {selectedMeal.recipe.instructions.map((instruction, index) => (
                    <li key={index} className="leading-relaxed">{instruction}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-amber-900 mb-2">نصائح مفيدة:</h4>
                <ul className="list-disc list-inside text-amber-700 space-y-1">
                  {selectedMeal.recipe.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <span className="block text-sm text-gray-500">سعرات حرارية</span>
                  <span className="text-lg font-semibold text-gray-900">{selectedMeal.calories}</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-500">بروتين</span>
                  <span className="text-lg font-semibold text-gray-900">{selectedMeal.protein}</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-500">كربوهيدرات</span>
                  <span className="text-lg font-semibold text-gray-900">{selectedMeal.carbs}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">الفوائد الصحية:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMeal.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button onClick={() => setSelectedMeal(null)} variant="outline">
                  إغلاق
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </section>
  );
}