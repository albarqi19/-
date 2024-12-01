import { type Meal } from '../types/meal';

export const hairLossMeals: Meal[] = [
  {
    id: "protein-rich-breakfast",
    title: "فطور غني بالبروتين",
    description: "وجبة فطور متكاملة غنية بالبروتين والفيتامينات الضرورية لصحة الشعر",
    image: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?auto=format&fit=crop&q=80&w=800",
    calories: 350,
    protein: "25g",
    carbs: "30g",
    fats: "15g",
    conditions: ["hair-loss"],
    ingredients: [
      "بيض",
      "سبانخ",
      "أفوكادو",
      "بذور اليقطين",
      "شوفان",
      "توت"
    ],
    benefits: [
      "غني بالبروتين",
      "مصدر للحديد",
      "غني بفيتامين B",
      "مضادات أكسدة",
      "أحماض دهنية صحية"
    ],
    whyItWorks: "يحتوي على مزيج متكامل من العناصر الغذائية الضرورية لنمو الشعر وصحته، مثل البروتين والحديد وفيتامينات B",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "10 دقائق",
      servings: 2,
      ingredients: [
        "3 بيضات",
        "كوب سبانخ طازج",
        "نصف أفوكادو",
        "2 ملعقة كبيرة بذور يقطين",
        "نصف كوب شوفان",
        "حفنة توت طازج"
      ],
      instructions: [
        "تحضير الشوفان بالماء الساخن",
        "طهي البيض المخفوق مع السبانخ",
        "تقطيع الأفوكادو",
        "تزيين الطبق بالتوت وبذور اليقطين"
      ],
      tips: [
        "تناول الوجبة مع كوب عصير برتقال طازج للحديد",
        "يمكن إضافة المكسرات حسب الرغبة",
        "تجنب الإفراط في الملح"
      ]
    }
  },
  {
    id: "salmon-quinoa-bowl",
    title: "طبق السلمون مع الكينوا",
    description: "وجبة غنية بأوميغا 3 والبروتين لتعزيز صحة الشعر",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    calories: 450,
    protein: "30g",
    carbs: "35g",
    fats: "20g",
    conditions: ["hair-loss"],
    ingredients: [
      "سلمون",
      "كينوا",
      "سبانخ",
      "جزر",
      "أفوكادو",
      "بذور الشيا"
    ],
    benefits: [
      "غني بأوميغا 3",
      "مصدر ممتاز للبروتين",
      "غني بالزنك",
      "مضادات أكسدة",
      "فيتامينات متعددة"
    ],
    whyItWorks: "السلمون غني بأوميغا 3 والبروتين الضروري لصحة الشعر، والكينوا مصدر جيد للحديد والزنك",
    recipe: {
      prepTime: "20 دقيقة",
      cookTime: "25 دقيقة",
      servings: 2,
      ingredients: [
        "200 جرام سلمون",
        "كوب كينوا",
        "2 كوب سبانخ",
        "جزر مبشور",
        "نصف أفوكادو",
        "ملعقة كبيرة بذور شيا"
      ],
      instructions: [
        "طهي الكينوا في مرق الخضار",
        "شوي السلمون مع التتبيلة",
        "خلط السبانخ والجزر",
        "تقطيع الأفوكادو",
        "تجميع المكونات في وعاء"
      ],
      tips: [
        "تأكد من طهي السلمون جيداً",
        "يمكن إضافة عصير ليمون طازج",
        "قدم الطبق دافئاً"
      ]
    }
  }
];
