import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t-[6px] border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-orange-600 text-white">
                <span className="font-heading font-black text-xl leading-none">NP</span>
              </div>
              <span className="font-heading font-bold text-2xl text-white">Nava's Pot</span>
            </div>
            <p className="text-stone-400 font-medium max-w-sm mb-6 leading-relaxed">
              Serving the authentic taste of continuous joy. The best rice and waakye joint in Lomnava, providing hygienic, affordable, and mouth-watering meals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="flex flex-col gap-4 font-medium">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> View Menu</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> Order Delivery</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> Contact Info</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
             <h4 className="text-white font-heading font-bold text-lg mb-6 tracking-wide">Locate Us</h4>
             <ul className="flex flex-col gap-6 font-medium">
               <li className="flex items-start gap-4">
                 <div className="bg-stone-800 p-2.5 rounded-lg text-orange-500 flex-shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <span className="block text-white mb-1">Nava's Pot Headquarters</span>
                   <span className="text-stone-400">Off the main street, Opposite the Pharmacy,<br/>Lomnava, Accra</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="bg-stone-800 p-2.5 rounded-lg text-orange-500 flex-shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <span className="block text-white mb-1">Order Hotline</span>
                   <span className="text-stone-400 font-bold tracking-wider">+233 24 123 4567</span>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-stone-500">
          <p>© {new Date().getFullYear()} Nava's Pot. All rights reserved.</p>
          <p>Made with ❤️ in Accra, Ghana</p>
        </div>
      </div>
    </footer>
  );
}
