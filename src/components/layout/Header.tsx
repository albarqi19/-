import React from 'react';
import { Link } from 'react-router-dom';
import { Salad } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <Salad className="h-8 w-8 text-emerald-600" />
              <div className="text-right">
                <h1 className="text-xl font-bold text-gray-900">الوجبة المناسبة</h1>
                <p className="text-sm text-emerald-600">صحتك في طعامك</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-emerald-600">الرئيسية</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600">من نحن</Link>
            <Link to="/meals" className="text-gray-700 hover:text-emerald-600">الوجبات</Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600">تواصل معنا</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}