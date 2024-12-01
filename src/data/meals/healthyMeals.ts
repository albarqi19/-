import { type Meal } from '../types/meal';

export const healthyMeals: Meal[] = [
  {
    id: 'immune-boost-smoothie',
    title: 'سموذي تقوية المناعة',
    description: 'مشروب صحي غني بفيتامين C والمضادات الأكسدة',
    image: '/images/meals/immune-boost-smoothie.jpg',
    calories: 180,
    protein: '4g',
    carbs: '25g',
    conditions: ['تقوية المناعة', 'الطاقة والنشاط'],
    ingredients: [
      'برتقال',
      'كيوي',
      'زنجبيل طازج',
      'عسل',
      'ليمون'
    ],
    instructions: [
      'قطع الفواكه إلى قطع صغيرة',
      'إضافة العسل والزنجبيل',
      'خلط المكونات في الخلاط',
      'تقديم باردًا'
    ]
  },
  {
    id: 'winter-vegetable-soup',
    title: 'شوربة الخضار الشتوية',
    description: 'شوربة دافئة غنية بالفيتامينات والمعادن',
    image: '/images/meals/winter-soup.jpg',
    calories: 220,
    protein: '8g',
    carbs: '30g',
    conditions: ['الصحة في فصل الشتاء', 'تقوية المناعة'],
    ingredients: [
      'جزر',
      'بطاطا حلوة',
      'كوسا',
      'بصل',
      'ثوم',
      'زنجبيل',
      'مرق دجاج'
    ],
    instructions: [
      'تقطيع الخضار',
      'قلي البصل والثوم',
      'إضافة المرق والخضار',
      'الطهي على نار هادئة'
    ]
  },
  {
    id: 'energy-oatmeal',
    title: 'شوفان الطاقة',
    description: 'وجبة فطور غنية بالطاقة والبروتين',
    image: '/images/meals/energy-oatmeal.jpg',
    calories: 350,
    protein: '12g',
    carbs: '45g',
    conditions: ['الطاقة والنشاط', 'الصحة النفسية'],
    ingredients: [
      'شوفان',
      'موز',
      'لوز',
      'عسل',
      'قرفة',
      'توت'
    ],
    instructions: [
      'طهي الشوفان بالماء أو الحليب',
      'إضافة العسل والقرفة',
      'تزيين بالموز والمكسرات والتوت'
    ]
  },
  {
    id: 'mood-boost-salad',
    title: 'سلطة تحسين المزاج',
    description: 'سلطة غنية بأوميغا 3 والمغذيات المعززة للمزاج',
    image: '/images/meals/mood-salad.jpg',
    calories: 280,
    protein: '15g',
    carbs: '20g',
    conditions: ['الصحة النفسية', 'الطاقة والنشاط'],
    ingredients: [
      'سلمون مشوي',
      'أفوكادو',
      'سبانخ',
      'جوز',
      'توت بري',
      'بذور اليقطين'
    ],
    instructions: [
      'شوي السلمون',
      'تقطيع الأفوكادو',
      'خلط مكونات السلطة',
      'إضافة صلصة زيت الزيتون والليمون'
    ]
  }
];
