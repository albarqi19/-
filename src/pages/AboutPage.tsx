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
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-emerald-600 mb-4">مهمتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نعمل على توفير وجبات صحية متنوعة تناسب مختلف الحالات الصحية، معدة بعناية من قبل خبراء
                التغذية. هدفنا مساعدتك في اتباع نمط حياة صحي من خلال وجبات لذيذة ومغذية.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800" 
                alt="مهمتنا"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* القسم الثالث: قيمنا */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">الجودة</h3>
            <p className="text-gray-600">نلتزم بتقديم أعلى معايير الجودة في وصفاتنا وتوصياتنا الغذائية</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">الابتكار</h3>
            <p className="text-gray-600">نسعى دائماً لتطوير حلول مبتكرة تلبي احتياجات عملائنا المتنوعة</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">الرعاية</h3>
            <p className="text-gray-600">نهتم بصحة عملائنا ونقدم لهم الدعم المستمر لتحقيق أهدافهم الصحية</p>
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
