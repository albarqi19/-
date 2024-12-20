import { type Meal } from '../types/meal';

export const mentalHealthMeals: Meal[] = [
  {
    id: "mood-boost-smoothie",
    title: "سموذي تحسين المزاج",
    description: "مشروب طبيعي غني بالمغذيات المعززة للمزاج",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=800",
    calories: 280,
    protein: "8g",
    carbs: "42g",
    fats: "10g",
    conditions: ["mental-health"],
    ingredients: [
      "موز",
      "توت أزرق",
      "كاكاو خام",
      "حليب جوز الهند",
      "عسل",
      "مكسرات"
    ],
    benefits: [
      "يحسن المزاج",
      "مضاد للأكسدة",
      "غني بالمغنيسيوم",
      "يدعم صحة الدماغ"
    ],
    whyItWorks: "يحتوي على مركبات تعزز إنتاج السيروتونين وتحسن المزاج مع مضادات الأكسدة",
    recipe: {
      prepTime: "10 دقائق",
      cookTime: "0 دقائق",
      servings: 1,
      ingredients: [
        "موزة ناضجة",
        "كوب توت أزرق",
        "ملعقتان كاكاو خام",
        "كوب حليب جوز الهند",
        "ملعقة عسل",
        "حفنة لوز"
      ],
      instructions: [
        "تقطيع الموز",
        "خلط جميع المكونات",
        "إضافة العسل للتحلية",
        "تزيين بالمكسرات المفرومة",
        "تقديم مباشرة"
      ],
      tips: [
        "استخدم موز ناضج للحلاوة الطبيعية",
        "أضف بذور الشيا للفائدة الإضافية",
        "يمكن استخدام التوت المجمد"
      ]
    }
  },
  {
    id: "omega-rich-salad",
    title: "سلطة الأوميغا 3",
    description: "سلطة غنية بالأحماض الدهنية المفيدة للدماغ",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    calories: 380,
    protein: "22g",
    carbs: "20g",
    fats: "28g",
    conditions: ["mental-health"],
    ingredients: [
      "سلمون مشوي",
      "أفوكادو",
      "جوز",
      "سبانخ",
      "طماطم كرزية",
      "بذور الشيا"
    ],
    benefits: [
      "غني بأوميغا 3",
      "بروتين عالي الجودة",
      "دهون صحية",
      "مضادات أكسدة"
    ],
    whyItWorks: "الأحماض الدهنية أوميغا 3 ضرورية لصحة الدماغ والمزاج",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "10 دقائق",
      servings: 2,
      ingredients: [
        "200g سلمون",
        "أفوكادو ناضج",
        "نصف كوب جوز",
        "2 كوب سبانخ",
        "كوب طماطم كرزية",
        "ملعقتان بذور شيا"
      ],
      instructions: [
        "شوي السلمون",
        "تقطيع الخضار",
        "تحميص الجوز",
        "خلط المكونات",
        "إضافة صلصة الليمون وزيت الزيتون"
      ],
      tips: [
        "استخدم سلمون بري للحصول على أعلى نسبة أوميغا 3",
        "أضف الأفوكادو في النهاية",
        "يمكن تحضير الصلصة مسبقاً"
      ]
    }
  },
  {
    id: "mood-boosting-smoothie",
    title: "سموذي تحسين المزاج",
    description: "مشروب طبيعي غني بالمغذيات المحسنة للمزاج",
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&q=80&w=800",
    calories: 200,
    protein: "5g",
    carbs: "35g",
    fats: "8g",
    conditions: ["depression"],
    ingredients: [
      "موز",
      "توت",
      "شوكولاتة داكنة",
      "حليب لوز",
      "عسل",
      "مكسرات"
    ],
    benefits: [
      "يحسن المزاج",
      "غني بمضادات الأكسدة",
      "يزود الجسم بالطاقة",
      "يدعم الصحة النفسية"
    ],
    whyItWorks: "يحتوي على مواد طبيعية تحفز إنتاج السيروتونين وتحسن المزاج",
    recipe: {
      prepTime: "10 دقائق",
      cookTime: "0 دقائق",
      servings: 2,
      ingredients: [
        "2 موزة ناضجة",
        "كوب توت مشكل",
        "2 ملعقة كبيرة شوكولاتة داكنة مبشورة",
        "كوب حليب لوز",
        "1 ملعقة كبيرة عسل",
        "حفنة مكسرات مشكلة"
      ],
      instructions: [
        "تقطيع الموز",
        "خلط جميع المكونات في الخلاط",
        "إضافة العسل حسب الرغبة",
        "تزيين بالمكسرات المجروشة"
      ],
      tips: [
        "استخدم موز ناضج للحلاوة الطبيعية",
        "يمكن استخدام التوت المجمد",
        "اختر شوكولاتة داكنة 70% أو أكثر"
      ]
    }
  },
  {
    id: "omega3-rich-salmon",
    title: "سلمون غني بالأوميغا 3",
    description: "وجبة صحية غنية بالأحماض الدهنية الأساسية للدماغ",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800",
    calories: 350,
    protein: "28g",
    carbs: "15g",
    fats: "22g",
    conditions: ["depression"],
    ingredients: [
      "سلمون",
      "كينوا",
      "سبانخ",
      "ليمون",
      "ثوم",
      "زيت زيتون"
    ],
    benefits: [
      "غني بالأوميغا 3",
      "يدعم صحة الدماغ",
      "يحسن المزاج",
      "يقوي المناعة"
    ],
    whyItWorks: "الأحماض الدهنية أوميغا 3 ضرورية لصحة الدماغ وتحسين المزاج",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "20 دقيقة",
      servings: 2,
      ingredients: [
        "300g سلمون طازج",
        "كوب كينوا",
        "2 كوب سبانخ طازجة",
        "2 فص ثوم",
        "ليمونة",
        "2 ملعقة كبيرة زيت زيتون"
      ],
      instructions: [
        "طهي الكينوا حسب التعليمات",
        "تتبيل السلمون بالليمون والثوم",
        "شوي السلمون لمدة 15-20 دقيقة",
        "سوتيه السبانخ مع الثوم",
        "تقديم السلمون فوق الكينوا مع السبانخ"
      ],
      tips: [
        "اختر سلمون طازج أو مجمد عالي الجودة",
        "تأكد من عدم طهي السلمون أكثر من اللازم",
        "يمكن إضافة الأفوكادو للمزيد من الدهون الصحية"
      ]
    }
  }
];
