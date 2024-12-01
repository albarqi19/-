export const translateCondition = (condition: string): string => {
  const translations: Record<string, string> = {
    // الحالات الموسمية
    'weak-immunity': 'ضعف المناعة',
    'flu': 'الإنفلونزا',
    'spring-allergy': 'حساسية الربيع',
    'summer-dehydration': 'الجفاف',
    
    // الطاقة والنشاط
    'fatigue': 'التعب',
    'energy-boost': 'تعزيز الطاقة',
    
    // الآلام والالتهابات
    'arthritis': 'التهاب المفاصل',
    'migraine': 'الصداع النصفي',
    
    // الجهاز الهضمي
    'gallbladder': 'المرارة',
    'colon': 'القولون',
    'celiac': 'حساسية القمح',
    
    // الأمراض المزمنة
    'diabetes': 'السكري',
    'hypertension': 'ارتفاع ضغط الدم',
    
    // الصحة النفسية والجسدية
    'mental-health': 'الصحة النفسية',
    'sore-throat': 'التهاب الحلق',
    'hair-loss': 'تساقط الشعر'
  };
  
  return translations[condition] || condition;
};