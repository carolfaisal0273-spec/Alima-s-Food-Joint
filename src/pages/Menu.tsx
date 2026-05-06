import { useState } from 'react';
import { menuData, menuCategories } from '../data/menu';
import { MessageCircle, ShoppingBag } from 'lucide-react';

export default function Menu({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-stone-50 pb-20">
      
      {/* Header */}
      <div className="bg-stone-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">Our Full Menu</h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">Explore our mouth-watering selection of authentic Ghanaian dishes, perfectly prepared just for you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-10 pb-4">
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm transition-colors shadow-sm ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map(item => (
            <div key={item.id} className="food-card flex flex-col group bg-white">
              {item.image && (
                <div className="h-48 overflow-hidden relative">
                  {item.popular && (
                    <div className="absolute top-3 right-3 z-10 bg-orange-600 text-white px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-md">
                      Popular
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                  <span className="text-lg font-black text-orange-600 whitespace-nowrap">GHS {item.price}</span>
                </div>
                <p className="text-stone-500 font-medium text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                
                <button 
                  onClick={() => onNavigate('/order')}
                  className="w-full bg-stone-100 hover:bg-orange-600 hover:text-white text-stone-800 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-orange-50 group-hover:text-orange-700"
                >
                  <ShoppingBag size={18} />
                  Order This
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 bg-orange-100 rounded-3xl p-8 md:p-12 text-center border border-orange-200">
           <h3 className="text-2xl font-bold text-stone-900 mb-4">Ready to eat?</h3>
           <p className="text-stone-700 mb-8 max-w-xl mx-auto">Send us a quick WhatsApp message with your order and location, and we'll handle the rest.</p>
           <button 
            onClick={() => onNavigate('/order')}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 mx-auto transition-transform hover:-translate-y-1"
           >
             <MessageCircle size={24} />
             Message Us to Order
           </button>
        </div>

      </div>
    </div>
  );
}
