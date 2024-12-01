import { type Meal } from '../types/meal';

export const energyMeals: Meal[] = [
  {
    id: "energy-smoothie-bowl",
    title: "بول سموذي الطاقة",
    description: "وجبة فطور غنية بالطاقة والفيتامينات",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800",
    calories: 350,
    protein: "12g",
    carbs: "45g",
    fats: "14g",
    conditions: ["energy-boost"],
    ingredients: [
      "موز",
      "توت مشكل",
      "شوفان",
      "حليب لوز",
      "بذور الشيا",
      "عسل"
    ],
    benefits: [
      "طاقة مستدامة",
      "غني بالألياف",
      "مضادات أكسدة",
      "بروتين نباتي"
    ],
    whyItWorks: "مزيج متوازن من الكربوهيدرات المعقدة والبروتين والدهون الصحية للطاقة المستدامة",
    recipe: {
      prepTime: "10 دقائق",
      cookTime: "0 دقائق",
      servings: 1,
      ingredients: [
        "موزة مجمدة",
        "كوب توت مشكل",
        "ربع كوب شوفان",
        "كوب حليب لوز",
        "ملعقتان بذور الشيا",
        "ملعقة عسل"
      ],
      instructions: [
        "خلط الموز المجمد مع التوت وحليب اللوز",
        "إضافة الشوفان والعسل",
        "صب الخليط في وعاء",
        "تزيين بالتوت الطازج وبذور الشيا",
        "تقديم مباشرة"
      ],
      tips: [
        "استخدم فاكهة مجمدة للقوام السميك",
        "أضف البروتين النباتي للتعزيز",
        "يمكن تحضيره مسبقاً وحفظه ليلة كاملة"
      ]
    }
  },
  {
    id: "quinoa-power-bowl",
    title: "طبق الكينوا بالخضار",
    description: "وجبة متكاملة غنية بالبروتين والطاقة",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    calories: 420,
    protein: "15g",
    carbs: "55g",
    fats: "18g",
    conditions: ["energy-boost"],
    ingredients: [
      "كينوا",
      "حمص",
      "أفوكادو",
      "سبانخ",
      "جزر",
      "بذور اليقطين"
    ],
    benefits: [
      "بروتين كامل",
      "دهون صحية",
      "ألياف عالية",
      "فيتامينات متنوعة"
    ],
    whyItWorks: "الكينوا مصدر ممتاز للبروتين النباتي والكربوهيدرات المعقدة مع الخضار الغنية بالمغذيات",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "20 دقيقة",
      servings: 2,
      ingredients: [
        "كوب كينوا",
        "علبة حمص",
        "أفوكادو ناضج",
        "2 كوب سبانخ",
        "2 جزر مبشور",
        "ربع كوب بذور يقطين"
      ],
      instructions: [
        "طهي الكينوا حسب التعليمات",
        "تحميص بذور اليقطين",
        "تقطيع الخضار",
        "خلط المكونات في وعاء",
        "إضافة صلصة الليمون وزيت الزيتون"
      ],
      tips: [
        "يمكن تحضيره مسبقاً",
        "قدم دافئاً أو بارداً",
        "أضف البيض المسلوق للمزيد من البروتين"
      ]
    }
  },
  {
    id: "quinoa-power-bowl",
    title: "طبق الكينوا للطاقة",
    description: "وجبة غنية بالبروتين والكربوهيدرات المعقدة للطاقة المستدامة",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    calories: 420,
    protein: "18g",
    carbs: "65g",
    fats: "12g",
    conditions: ["energy-boost"],
    ingredients: [
      "كينوا",
      "حمص",
      "أفوكادو",
      "سبانخ",
      "بذور اليقطين",
      "صلصة الليمون"
    ],
    benefits: [
      "طاقة مستدامة",
      "غني بالبروتين النباتي",
      "مصدر جيد للألياف",
      "غني بالفيتامينات والمعادن"
    ],
    whyItWorks: "يحتوي على مزيج متوازن من الكربوهيدرات المعقدة والبروتين والدهون الصحية للطاقة المستدامة",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "20 دقيقة",
      servings: 2,
      ingredients: [
        "كوب كينوا",
        "علبة حمص",
        "أفوكادو ناضج",
        "2 كوب سبانخ طازجة",
        "ربع كوب بذور يقطين",
        "عصير ليمونة"
      ],
      instructions: [
        "طهي الكينوا حسب التعليمات",
        "غسل وتجهيز السبانخ",
        "تقطيع الأفوكادو",
        "تحميص بذور اليقطين",
        "خلط جميع المكونات",
        "إضافة صلصة الليمون"
      ],
      tips: [
        "يمكن تحضير الكينوا مسبقاً",
        "أضف الأفوكادو عند التقديم",
        "احفظ المكونات منفصلة للوجبات المحضرة مسبقاً"
      ]
    }
  },
  {
    id: "date-almond-energy-balls",
    title: "كرات التمر واللوز للطاقة",
    description: "وجبة خفيفة طبيعية وصحية غنية بالطاقة",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800",
    calories: 150,
    protein: "4g",
    carbs: "25g",
    fats: "7g",
    conditions: ["energy-boost"],
    ingredients: [
      "تمر",
      "لوز",
      "جوز الهند المبشور",
      "بذور الشيا",
      "كاكاو خام"
    ],
    benefits: [
      "طاقة فورية",
      "خالي من السكر المضاف",
      "غني بالألياف",
      "مصدر جيد للمغنيسيوم"
    ],
    whyItWorks: "التمر مصدر طبيعي للطاقة السريعة، واللوز يوفر البروتين والدهون الصحية للطاقة المستدامة",
    recipe: {
      prepTime: "15 دقيقة",
      cookTime: "0 دقائق",
      servings: 12,
      ingredients: [
        "2 كوب تمر منزوع النوى",
        "كوب لوز",
        "نصف كوب جوز هند مبشور",
        "2 ملعقة بذور شيا",
        "2 ملعقة كاكاو خام"
      ],
      instructions: [
        "نقع التمر في ماء دافئ لمدة 10 دقائق",
        "طحن اللوز في محضر الطعام",
        "إضافة التمر والمكونات الأخرى",
        "تشكيل العجينة إلى كرات صغيرة",
        "تغليف الكرات بجوز الهند"
      ],
      tips: [
        "احفظها في الثلاجة لمدة تصل إلى أسبوعين",
        "تناول 2-3 كرات كوجبة خفيفة",
        "يمكن تجميدها لمدة تصل إلى شهرين"
      ]
    }
  }
];
