import { ArrowRight, Star, Clock, ShieldCheck, Utensils, Award, MessageCircle } from 'lucide-react';
import { menuData } from '../data/menu';

export default function Home({ onNavigate }: { onNavigate: (path: string) => void }) {
  const featured = menuData.filter(item => item.popular).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-stone-50 pb-16 lg:pb-24 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold mb-6 text-sm tracking-wide">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                Hot & Fresh Right Now in Lomnava
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-black text-stone-900 leading-[1.1] mb-6">
                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Waakye & Jollof</span> You Will Ever Taste.
              </h1>
              
              <p className="text-lg lg:text-xl text-stone-600 mb-8 leading-relaxed font-medium">
                Generous portions, home-style taste, and 100% hygienic. 
                Whether you're searching for the "best waakye near me" or looking for affordable, "cheap rice in Accra" without compromising quality, we've got you covered. Delivered in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => onNavigate('/order')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
                >
                  Order via WhatsApp
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => onNavigate('/menu')}
                  className="bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors"
                >
                  View Full Menu
                  <Utensils size={20} />
                </button>
              </div>
              
              {/* Trust Signals */}
              <div className="flex items-center gap-8 text-stone-600 text-sm font-bold">
                 <div className="flex items-center gap-2"><Clock className="text-orange-600" size={20} /> Fast Prep</div>
                 <div className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={20} /> Top Hygiene</div>
                 <div className="flex items-center gap-2"><Award className="text-yellow-500" size={20} /> 5★ Taste</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Delicious Waakye Dish" 
                className="relative z-10 w-full h-[500px] lg:h-[600px] object-cover rounded-[2rem] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border-8 border-white"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-stone-100">
                 <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Star size={28} fill="currentColor" />
                 </div>
                 <div>
                   <div className="font-black text-2xl text-stone-900">4.9/5</div>
                   <div className="text-stone-500 font-bold text-sm">from 500+ locals</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-black text-stone-900 mb-4">Why Lomnava Loves Our Food</h2>
            <p className="text-xl text-stone-600 font-medium">We don't just sell rice; we sell satisfaction, energy, and joy in every pack.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck size={40}/>, title: "100% Hygienic", desc: "Clean kitchen, fresh ingredients every morning. Your health is our priority." },
              { icon: <Utensils size={40}/>, title: "Generous Portions", desc: "We serve like a true African mother. You will definitely be full!" },
              { icon: <Clock size={40}/>, title: "Super Fast", desc: "From order to serving/delivery in record time. Say goodbye to long queues." },
            ].map((f, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:border-orange-200 hover:shadow-lg transition-all group">
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-stone-600 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BEST SELLERS */}
      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-heading font-black text-stone-900 mb-4">Our Best Sellers</h2>
              <p className="text-lg text-stone-600 font-medium">The favorites that sell out every single day.</p>
            </div>
            <button 
              onClick={() => onNavigate('/menu')}
              className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all"
            >
              See All Menu <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map(item => (
              <div key={item.id} className="food-card flex flex-col group cursor-pointer" onClick={() => onNavigate('/menu')}>
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    Hot Seller
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-stone-900">{item.name}</h3>
                  <p className="text-stone-500 font-medium line-clamp-2 mb-4 flex-grow">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-black text-stone-900">GHS {item.price}</span>
                    <button className="bg-stone-100 hover:bg-orange-600 hover:text-white text-stone-800 p-3 rounded-xl transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => onNavigate('/menu')}
            className="md:hidden mt-8 w-full bg-stone-200 hover:bg-stone-300 text-stone-800 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
          >
            See All Menu <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* QUICK ORDER CTA */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grilled-noise.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Hungry? Sells Out Fast!</h2>
          <p className="text-xl text-stone-300 mb-10 font-medium">Skip the wait. Chat with us directly on WhatsApp, tell us what you want, and your food will be ready in minutes.</p>
          <button 
            onClick={() => onNavigate('/order')}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#25D366]/20 transition-transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={28} />
            Order on WhatsApp Now
          </button>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-black text-stone-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Hands down the best waakye near me. The shito has that perfect local kick, and delivery is so fast!", name: "Kwame A.", type: "Student" },
              { text: "I ordered the weekend jollof. The packaging was neat, and it was so affordable for the huge portion they gave me.", name: "Sarah M.", type: "Nurse at Achimota" },
              { text: "Consistent taste every single time. It's my go-to lunch spot. Highly recommend their Fried Rice and Guinea Fowl.", name: "Desmond T.", type: "Banker" },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative">
                <div className="flex justify-center gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-stone-700 italic font-medium mb-6">"{review.text}"</p>
                <div className="font-bold text-stone-900">{review.name}</div>
                <div className="text-sm text-stone-500">{review.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
