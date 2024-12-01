import React from 'react';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            من نحن
          </motion.h1>
          <p className="text-xl text-gray-600">نقدم حلولاً غذائية مخصصة لتحسين صحتك</p>
        </div>

        {/* القسم الأول: رؤيتنا */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-emerald-600 mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نسعى لأن نكون المنصة الرائدة في تقديم حلول غذائية مخصصة تساعد الأشخاص على تحسين صحتهم
                من خلال نظام غذائي متوازن يراعي احتياجاتهم الصحية الخاصة.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800" 
                alt="رؤيتنا"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* القسم الثاني: مهمتنا */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-emerald-600 mb-4">مهمتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نعمل على توفير وجبات صحية متنوعة تناسب مختلف الحالات الصحية، معدة بدقة باستخدام تقنيات الذكاء الاصطناعي المتقدمة. هدفنا مساعدتك في اتباع نمط حياة صحي من خلال وجبات لذيذة ومغذية.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" 
                alt="مهمتنا"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* توقيع المطور */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <p className="text-gray-600 text-sm">تم التطوير بواسطة</p>
            <h3 className="text-xl font-semibold text-emerald-600 mt-1">أحمد علي البارقي</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
