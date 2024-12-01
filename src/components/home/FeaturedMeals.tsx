import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const FEATURED_MEALS = [
  {
    id: 1,
    title: 'وجبة السلمون المشوي',
    category: 'مرضى القلب',
    calories: 450,
    protein: '32g',
    carbs: '12g',
    fats: '28g',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    description: 'وجبة غنية بأحماض أوميغا 3 الدهنية المفيدة للقلب، مع نسبة عالية من البروتين ومضادات الأكسدة',
    whyHealthy: [
      'غني بأحماض أوميغا 3 المفيدة للقلب',
      'يحتوي على بروتين عالي الجودة',
      'مصدر جيد لفيتامين D',
      'قليل الكربوهيدرات'
    ],
    tips: [
      'يفضل تناوله مشوياً أو مطهواً بالفرن',
      'يمكن إضافة الليمون للحصول على نكهة منعشة',
      'تجنب الإفراط في الطهي للحفاظ على العناصر الغذائية'
    ],
    healthBenefits: [
      'يساعد في خفض الكوليسترول الضار',
      'يقلل من خطر الإصابة بأمراض القلب',
      'يدعم صحة الدماغ والذاكرة',
      'يحسن صحة العظام'
    ]
  },
  {
    id: 2,
    title: 'سلطة الكينوا بالخضروات',
    category: 'مرضى السكري',
    calories: 380,
    protein: '15g',
    carbs: '45g',
    fats: '18g',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    description: 'وجبة متوازنة غنية بالألياف والبروتين النباتي، مثالية لمرضى السكري مع مؤشر جلايسيمي منخفض',
    whyHealthy: [
      'مؤشر جلايسيمي منخفض',
      'غني بالألياف الغذائية',
      'يحتوي على بروتين نباتي كامل',
      'مصدر جيد للمعادن'
    ],
    tips: [
      'تناول الوجبة في أوقات منتظمة',
      'يمكن إضافة الأفوكادو للحصول على دهون صحية',
      'تجنب إضافة الصلصات الغنية بالسكر'
    ],
    healthBenefits: [
      'يساعد في استقرار مستوى السكر في الدم',
      'يعزز الشعور بالشبع لفترة أطول',
      'يدعم صحة الجهاز الهضمي',
      'غني بمضادات الأكسدة'
    ]
  },
  {
    id: 3,
    title: 'طبق الدجاج المشوي مع الخضار',
    category: 'الطاقة والنشاط',
    calories: 420,
    protein: '45g',
    carbs: '25g',
    fats: '15g',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
    description: 'وجبة عالية البروتين مثالية للرياضيين ومن يبحثون عن الطاقة والنشاط، مع خضروات غنية بالفيتامينات',
    whyHealthy: [
      'غني بالبروتين قليل الدهون',
      'مصدر ممتاز للفيتامينات B',
      'يحتوي على كربوهيدرات معقدة',
      'غني بالمعادن الأساسية'
    ],
    tips: [
      'يفضل تناوله بعد التمرين مباشرة',
      'تأكد من طهي الدجاج جيداً',
      'يمكن تتبيله قبل الطهي بساعتين للنكهة الأفضل'
    ],
    healthBenefits: [
      'يساعد في بناء وإصلاح العضلات',
      'يعزز مستويات الطاقة',
      'يدعم جهاز المناعة',
      'يحسن الأداء الرياضي'
    ]
  }
];

export function FeaturedMeals() {
  const [selectedMeal, setSelectedMeal] = React.useState<typeof FEATURED_MEALS[0] | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">أبرز الوجبات المميزة</h2>
          <p className="mt-4 text-xl text-gray-600">وجبات صحية مختارة بعناية لتناسب احتياجاتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_MEALS.map((meal) => (
            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
              onClick={() => setSelectedMeal(meal)}
            >
              <div className="relative h-48">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                    {meal.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{meal.title}</h3>
                <p className="text-gray-600 mb-4">{meal.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <span className="block text-sm text-gray-500">سعرات</span>
                    <span className="font-semibold text-gray-900">{meal.calories}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-sm text-gray-500">بروتين</span>
                    <span className="font-semibold text-gray-900">{meal.protein}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-sm text-gray-500">كربوهيدرات</span>
                    <span className="font-semibold text-gray-900">{meal.carbs}</span>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMeal(meal);
                  }}
                >
                  عرض التفاصيل
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={selectedMeal !== null}
          onClose={() => setSelectedMeal(null)}
        >
          {selectedMeal && (
            <div className="p-6">
              <div className="relative h-64 mb-6">
                <img
                  src={selectedMeal.image}
                  alt={selectedMeal.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedMeal.title}</h2>
              <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                {selectedMeal.category}
              </span>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center bg-gray-50 p-3 rounded-lg">
                  <span className="block text-sm text-gray-500">سعرات</span>
                  <span className="font-semibold text-gray-900">{selectedMeal.calories}</span>
                </div>
                <div className="text-center bg-gray-50 p-3 rounded-lg">
                  <span className="block text-sm text-gray-500">بروتين</span>
                  <span className="font-semibold text-gray-900">{selectedMeal.protein}</span>
                </div>
                <div className="text-center bg-gray-50 p-3 rounded-lg">
                  <span className="block text-sm text-gray-500">كربوهيدرات</span>
                  <span className="font-semibold text-gray-900">{selectedMeal.carbs}</span>
                </div>
                <div className="text-center bg-gray-50 p-3 rounded-lg">
                  <span className="block text-sm text-gray-500">دهون</span>
                  <span className="font-semibold text-gray-900">{selectedMeal.fats}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">لماذا هذه الوجبة صحية؟</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedMeal.whyHealthy.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">نصائح مفيدة</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedMeal.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">الفوائد الصحية</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedMeal.healthBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={() => setSelectedMeal(null)}>إغلاق</Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </section>
  );
}