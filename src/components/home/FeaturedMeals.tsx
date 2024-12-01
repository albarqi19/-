import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';

const FEATURED_MEALS = [
  {
    id: 1,
    title: 'وجبة السلمون المشوي',
    category: 'مرضى القلب',
    calories: 450,
    protein: '32g',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    recipe: {
      ingredients: [
        '500g سمك سلمون طازج',
        '2 ملعقة زيت زيتون',
        '2 فص ثوم مفروم',
        'عصير ليمونة',
        'ملح وفلفل حسب الرغبة',
        'أعشاب طازجة (شبت، بقدونس)'
      ],
      instructions: [
        'سخن الفرن على درجة حرارة 200 درجة مئوية',
        'تبل السلمون بالزيت والثوم والليمون والتوابل',
        'اخبز لمدة 15-20 دقيقة حتى ينضج',
        'قدم مع الأعشاب الطازجة'
      ],
      nutritionalBenefits: [
        'غني بأوميغا 3',
        'مصدر ممتاز للبروتين',
        'يحتوي على فيتامين D',
        'مضاد للالتهابات'
      ]
    }
  },
  {
    id: 2,
    title: 'سلطة الكينوا',
    category: 'مرضى السكري',
    calories: 380,
    protein: '15g',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    recipe: {
      ingredients: [
        'كوب كينوا',
        'خضروات ملونة مقطعة',
        'أفوكادو',
        'حبوب رمان',
        'مكسرات محمصة',
        'صلصة زيت زيتون وليمون'
      ],
      instructions: [
        'اغسل الكينوا جيداً واطبخها حسب التعليمات',
        'اخلط الخضروات المقطعة مع الكينوا',
        'أضف الأفوكادو والرمان والمكسرات',
        'تبل بصلصة زيت الزيتون والليمون'
      ],
      nutritionalBenefits: [
        'غني بالألياف',
        'بروتين نباتي كامل',
        'مؤشر جلايسيمي منخفض',
        'غني بمضادات الأكسدة'
      ]
    }
  },
  {
    id: 3,
    title: 'طبق الدجاج المشوي',
    category: 'عالي البروتين',
    calories: 420,
    protein: '45g',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
    recipe: {
      ingredients: [
        'صدور دجاج',
        'بهارات متنوعة',
        'زيت زيتون',
        'خضروات مشوية',
        'أعشاب طازجة'
      ],
      instructions: [
        'تتبيل الدجاج بالبهارات والزيت',
        'شوي الدجاج حتى ينضج تماماً',
        'تحضير الخضروات المشوية كجانب',
        'تقديم مع الأعشاب الطازجة'
      ],
      nutritionalBenefits: [
        'غني بالبروتين الخالي من الدهون',
        'مصدر جيد للفيتامينات B',
        'قليل الدهون المشبعة',
        'مناسب لبناء العضلات'
      ]
    }
  }
];

export function FeaturedMeals() {
  const [selectedMeal, setSelectedMeal] = React.useState<typeof FEATURED_MEALS[0] | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          أبرز الوجبات المميزة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_MEALS.map((meal) => (
            <div key={meal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{meal.title}</h3>
                <p className="text-emerald-600 mt-1">{meal.category}</p>
                <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                  <span>{meal.calories} سعرة حرارية</span>
                  <span>{meal.protein} بروتين</span>
                </div>
                <div className="mt-4">
                  <Button 
                    onClick={() => setSelectedMeal(meal)}
                    className="w-full"
                  >
                    عرض الوصفة
                  </Button>
                </div>
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
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">المكونات:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedMeal.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">طريقة التحضير:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  {selectedMeal.recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">الفوائد الغذائية:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedMeal.recipe.nutritionalBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
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