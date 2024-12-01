import { type Meal } from '../types/meal';

export const celiacMeals: Meal[] = [
  {
    id: "quinoa-breakfast-bowl",
    title: "بول الكينوا للفطور",
    description: "فطور صحي خالٍ من الغلوتين",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800",
    calories: 310,
    protein: "10g",
    carbs: "48g",
    fats: "12g",
    conditions: ["celiac"],
    ingredients: [
      "كينوا",
      "حليب جوز الهند",
      "موز",
      "توت",
      "مكسرات",
      "عسل"
    ],
    benefits: [
      "خالٍ من الغلوتين",
      "سهل الهضم",
      "غني بالألياف",
      "غني بالفيتامينات والمعادن",
      "يدعم صحة الأمعاء"
    ],
    whyItWorks: "الكينوا بديل ممتاز للحبوب المحتوية على الغلوتين وغنية بالبروتين والمعادن",
    recipe: {
      prepTime: "10 دقائق",
      cookTime: "15 دقيقة",
      servings: 2,
      ingredients: [
        "كوب كينوا",
        "كوبان حليب جوز الهند",
        "موزة مقطعة",
        "كوب توت مشكل",
        "ربع كوب مكسرات",
        "ملعقة عسل"
      ],
      instructions: [
        "طهي الكينوا مع حليب جوز الهند",
        "إضافة القرفة والفانيليا",
        "تقديم مع الفواكه الطازجة",
        "تزيين بالمكسرات",
        "إضافة العسل حسب الرغبة"
      ],
      tips: [
        "تأكد من غسل الكينوا جيداً",
        "استخدم منتجات معتمدة خالية من الغلوتين",
        "يمكن تحضيره مسبقاً"
      ]
    }
  },
  {
    id: "rice-noodle-stir-fry",
    title: "نودلز الأرز المقلي",
    description: "طبق آسيوي خالٍ من الغلوتين",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    calories: 380,
    protein: "15g",
    carbs: "58g",
    fats: "12g",
    conditions: ["celiac"],
    ingredients: [
      "نودلز أرز",
      "دجاج",
      "خضار مشكلة",
      "صلصة الصويا الخالية من الغلوتين",
      "زنجبيل",
      "ثوم"
    ],
    benefits: [
      "خالٍ من الغلوتين",
      "سهل الهضم",
      "غني بالألياف",
      "غني بالفيتامينات والمعادن",
      "يدعم صحة الأمعاء"
    ],
    whyItWorks: "نودلز الأرز بديل آمن للمعكرونة العادية، مع إضافة البروتين والخضار للتغذية المتكاملة",
    recipe: {
      prepTime: "20 دقيقة",
      cookTime: "15 دقيقة",
      servings: 3,
      ingredients: [
        "عبوة نودلز أرز",
        "300g دجاج مقطع",
        "2 كوب خضار مشكلة",
        "3 ملاعق صلصة صويا خالية من الغلوتين",
        "زنجبيل مبشور",
        "3 فصوص ثوم"
      ],
      instructions: [
        "نقع النودلز في ماء ساخن",
        "قلي الدجاج مع الثوم والزنجبيل",
        "إضافة الخضار",
        "إضافة النودلز والصلصة",
        "التقليب حتى تمتزج النكهات"
      ],
      tips: [
        "تأكد من أن جميع المكونات خالية من الغلوتين",
        "لا تفرط في طهي النودلز",
        "يمكن استخدام أي خضار متوفرة"
      ]
    }
  }
];