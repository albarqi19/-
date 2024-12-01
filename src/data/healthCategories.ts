export interface HealthCategory {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const healthCategories: HealthCategory[] = [
  {
    id: "digestive",
    title: "صحة الجهاز الهضمي",
    description: "وجبات تساعد في تحسين عملية الهضم وتخفيف الاضطرابات المعوية"
  },
  {
    id: "immunity",
    title: "تقوية المناعة",
    description: "وجبات غنية بالفيتامينات والمعادن لتعزيز جهاز المناعة"
  },
  {
    id: "seasonal",
    title: "الحالات الموسمية",
    description: "وجبات مخصصة للتعامل مع التغيرات الموسمية وأعراضها"
  },
  {
    id: "pain",
    title: "تخفيف الألم",
    description: "وجبات تساعد في تخفيف الآلام المزمنة والالتهابات"
  },
  {
    id: "energy",
    title: "الطاقة والنشاط",
    description: "وجبات متوازنة لتحسين مستويات الطاقة والنشاط اليومي"
  },
  {
    id: "mood",
    title: "الصحة النفسية",
    description: "وجبات تساعد في تحسين المزاج والشعور بالراحة النفسية"
  },
  {
    id: "respiratory",
    title: "الجهاز التنفسي",
    description: "وجبات تساعد في علاج مشاكل الجهاز التنفسي مثل التهاب الحلق والسعال"
  },
  {
    id: "skin",
    title: "صحة الجلد والشعر",
    description: "وجبات تعزز صحة وجمال الجلد والشعر"
  }
];