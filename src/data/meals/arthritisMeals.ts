import { type Meal } from '../types/meal';

export const arthritisMeals: Meal[] = [
  {
    id: "grilled-tuna",
    title: "سمك التونة المشوي",
    description: "سمك التونة الغني بأوميغا 3 المشوي مع الأعشاب الطازجة",
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800",
    calories: 320,
    protein: "28g",
    carbs: "2g",
    fats: "22g",
    conditions: ["arthritis"],
    ingredients: [
      "شرائح تونة طازجة",
      "زيت زيتون",
      "ليمون",
      "أعشاب طازجة",
      "ثوم"
    ],
    benefits: [
      "غني بأوميغا 3",
      "مضاد للالتهابات",
      "غني بالبروتين",
      "قليل الكربوهيدرات"
    ],
    whyItWorks: "يحتوي سمك التونة على نسبة عالية من أوميغا 3 وفيتامين D التي تساعد في تخفيف التهاب المفاصل",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "10 دقائق",
      servings: 2,
      ingredients: [
        "400g سمك تونة طازج",
        "2 ملعقة كبيرة زيت زيتون",
        "عصير ليمونة",
        "3 فصوص ثوم مفروم",
        "أعشاب طازجة (زعتر، إكليل الجبل)",
        "ملح وفلفل حسب الرغبة"
      ],
      instructions: [
        "تتبيل شرائح التونة بالزيت والثوم والليمون والأعشاب",
        "ترك السمك يتبل لمدة 10 دقائق",
        "تسخين الشواية جيداً",
        "شوي السمك لمدة 2-3 دقائق لكل جانب",
        "تقديم السمك مع شرائح الليمون الطازجة"
      ],
      tips: [
        "تأكد من عدم طهي السمك أكثر من اللازم",
        "استخدم زيت زيتون عالي الجودة",
        "قدم مع سلطة خضراء طازجة"
      ]
    }
  },
  {
    id: "turmeric-lentil-stew",
    title: "يخنة العدس مع الكركم",
    description: "يخنة غنية بالكركم والعدس لتخفيف الالتهابات",
    image: "https://images.unsplash.com/photo-1547928576-b822bc410bdf?auto=format&fit=crop&q=80&w=800",
    calories: 280,
    protein: "14g",
    carbs: "45g",
    fats: "6g",
    conditions: ["arthritis"],
    ingredients: [
      "عدس",
      "كركم",
      "زنجبيل",
      "خضروات",
      "بهارات"
    ],
    benefits: [
      "غني بمضادات الالتهاب",
      "مصدر جيد للبروتين النباتي",
      "غني بالألياف",
      "منخفض الدهون"
    ],
    whyItWorks: "الكركم والزنجبيل من أقوى مضادات الالتهاب الطبيعية التي تساعد في تخفيف آلام المفاصل",
    recipe: {
      prepTime: "20 دقيقة",
      cookTime: "40 دقيقة",
      servings: 4,
      ingredients: [
        "2 كوب عدس",
        "2 ملعقة كبيرة كركم",
        "زنجبيل طازج مبشور",
        "بصل مفروم",
        "جزر مقطع",
        "كرفس مقطع",
        "ثوم مفروم",
        "مرق خضار"
      ],
      instructions: [
        "غسل العدس جيداً",
        "قلي البصل والثوم في قليل من الزيت",
        "إضافة الخضروات والتقليب",
        "إضافة الكركم والزنجبيل والبهارات",
        "إضافة العدس والمرق",
        "الطهي على نار هادئة حتى ينضج العدس"
      ],
      tips: [
        "أضف المزيد من الماء إذا لزم الأمر",
        "يمكن تناوله مع الأرز البني",
        "احفظه في الثلاجة لمدة تصل إلى 3 أيام"
      ]
    }
  },
  {
    id: "ginger-green-tea",
    title: "شاي الزنجبيل الأخضر",
    description: "مشروب دافئ مضاد للالتهابات مع الزنجبيل والكركم",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    calories: 45,
    protein: "0g",
    carbs: "10g",
    fats: "0g",
    conditions: ["arthritis"],
    ingredients: [
      "شاي أخضر",
      "زنجبيل طازج",
      "كركم",
      "عسل",
      "ليمون"
    ],
    benefits: [
      "مضاد للالتهابات",
      "يحسن الدورة الدموية",
      "غني بمضادات الأكسدة",
      "يخفف الألم"
    ],
    whyItWorks: "يحتوي الزنجبيل والكركم على مركبات نشطة تساعد في تخفيف التهاب المفاصل وتحسين الدورة الدموية",
    recipe: {
      prepTime: "5 دقائق",
      cookTime: "10 دقائق",
      servings: 2,
      ingredients: [
        "2 كيس شاي أخضر",
        "3 شرائح زنجبيل طازج",
        "½ ملعقة صغيرة كركم",
        "2 ملعقة كبيرة عسل",
        "شرائح ليمون للتقديم",
        "3 أكواب ماء"
      ],
      instructions: [
        "غلي الماء مع الزنجبيل والكركم",
        "إضافة أكياس الشاي الأخضر",
        "نقع لمدة 5 دقائق",
        "تصفية المشروب",
        "إضافة العسل والليمون حسب الرغبة"
      ],
      tips: [
        "اشربه دافئاً للحصول على أفضل النتائج",
        "يمكن تحضيره مرتين يومياً",
        "استخدم زنجبيل طازج للحصول على أفضل نكهة"
      ]
    }
  },
  {
    id: "spinach-broccoli-salad",
    title: "سلطة البروكلي والسبانخ",
    description: "سلطة غنية بمضادات الأكسدة والفيتامينات",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    calories: 180,
    protein: "8g",
    carbs: "20g",
    fats: "10g",
    conditions: ["arthritis"],
    ingredients: [
      "بروكلي",
      "سبانخ",
      "جوز",
      "رمان",
      "زيت زيتون"
    ],
    benefits: [
      "غني بفيتامين K",
      "مضاد للالتهابات",
      "غني بالألياف",
      "مصدر جيد للكالسيوم"
    ],
    whyItWorks: "تحتوي الخضروات الورقية والبروكلي على مضادات الأكسدة والفيتامينات التي تساعد في تقليل الالتهابات",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "5 دقائق",
      servings: 2,
      ingredients: [
        "2 كوب سبانخ طازجة",
        "1 رأس بروكلي مقطع",
        "½ كوب جوز مقطع",
        "½ كوب حب رمان",
        "2 ملعقة كبيرة زيت زيتون",
        "عصير ليمون",
        "ملح وفلفل حسب الرغبة"
      ],
      instructions: [
        "سلق البروكلي لمدة 3-4 دقائق",
        "تبريد البروكلي بالماء البارد",
        "خلط السبانخ مع البروكلي",
        "إضافة الجوز وحب الرمان",
        "تتبيل بزيت الزيتون والليمون"
      ],
      tips: [
        "لا تطهي البروكلي أكثر من اللازم",
        "يمكن تحضير الصلصة مسبقاً",
        "قدمها مباشرة للحفاظ على نضارتها"
      ]
    }
  }
];