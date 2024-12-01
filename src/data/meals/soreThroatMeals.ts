import { type Meal } from '../types/meal';

export const soreThroatMeals: Meal[] = [
  {
    id: "honey-ginger-tea",
    title: "شاي الزنجبيل بالعسل",
    description: "مشروب دافئ ومهدئ للحلق",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    calories: 60,
    protein: "0g",
    carbs: "15g",
    fats: "0g",
    conditions: ["sore-throat"],
    ingredients: [
      "زنجبيل طازج",
      "عسل",
      "ليمون",
      "ماء ساخن"
    ],
    benefits: [
      "مضاد للالتهابات",
      "مهدئ للحلق",
      "يعزز المناعة",
      "مضاد للبكتيريا"
    ],
    whyItWorks: "يحتوي العسل على خصائص مضادة للبكتيريا، والزنجبيل مضاد للالتهابات، مما يساعد في تخفيف آلام الحلق",
    recipe: {
      prepTime: "5 دقائق",
      cookTime: "5 دقائق",
      servings: 1,
      ingredients: [
        "2 سم زنجبيل طازج مقطع",
        "2 ملعقة كبيرة عسل",
        "نصف ليمونة",
        "كوب ماء ساخن"
      ],
      instructions: [
        "غلي الماء مع الزنجبيل",
        "تصفية الزنجبيل",
        "إضافة العسل",
        "عصر الليمون",
        "التقديم ساخناً"
      ],
      tips: [
        "يمكن إضافة القرفة للنكهة",
        "تناوله دافئاً وليس ساخناً جداً",
        "يمكن تناوله 3 مرات يومياً"
      ]
    }
  },
  {
    id: "soothing-chicken-soup",
    title: "شوربة الدجاج المهدئة",
    description: "شوربة دافئة غنية بالمغذيات لتهدئة الحلق",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    calories: 180,
    protein: "15g",
    carbs: "20g",
    fats: "6g",
    conditions: ["sore-throat"],
    ingredients: [
      "دجاج",
      "جزر",
      "بصل",
      "ثوم",
      "زنجبيل",
      "كركم"
    ],
    benefits: [
      "مهدئ للحلق",
      "غني بالبروتين",
      "يعزز المناعة",
      "سهل البلع"
    ],
    whyItWorks: "تحتوي شوربة الدجاج على مضادات الالتهاب الطبيعية والبروتين اللازم للشفاء، كما أن قوامها السائل يسهل البلع",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "45 دقيقة",
      servings: 4,
      ingredients: [
        "صدر دجاج",
        "2 جزر مقطع",
        "بصلة مفرومة",
        "3 فصوص ثوم",
        "قطعة زنجبيل صغيرة",
        "ملعقة صغيرة كركم"
      ],
      instructions: [
        "سلق الدجاج مع البهارات",
        "إضافة الخضروات",
        "الطهي حتى تنضج المكونات",
        "تقطيع الدجاج",
        "إضافة الملح حسب الرغبة"
      ],
      tips: [
        "تناولها دافئة وليست ساخنة",
        "يمكن إضافة الليمون عند التقديم",
        "تجنب البهارات الحارة"
      ]
    }
  }
];