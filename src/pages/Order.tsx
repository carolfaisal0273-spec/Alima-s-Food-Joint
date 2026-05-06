import { MessageCircle, MapPin, CreditCard, Clock, CheckCircle } from 'lucide-react';

export default function Order() {
  const whatsappNumber = "233241234567";
  const defaultMessage = "Hello Nava's Pot! I would like to place an order.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="pt-24 min-h-screen bg-stone-50 pb-20">
      
      {/* Header */}
      <div className="bg-orange-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">Place Your Order</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto font-medium">Fast, simple, and direct. Order via WhatsApp for immediate response and processing.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 text-center mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full text-[#25D366] mb-6 relative z-10">
            <MessageCircle size={48} strokeWidth={2.5}/>
          </div>
          
          <h2 className="text-3xl font-heading font-black text-stone-900 mb-4 relative z-10">Order in 3 Simple Steps</h2>
          
          <div className="text-left space-y-6 max-w-lg mx-auto mb-10 mt-8 relative z-10">
            <div className="flex gap-4">
              <div className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <strong className="text-stone-900 text-lg block mb-1">Click the button below</strong>
                <span className="text-stone-600 font-medium">This will open WhatsApp directly with our business line.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <strong className="text-stone-900 text-lg block mb-1">Tell us your order & location</strong>
                <span className="text-stone-600 font-medium">Example: "Hi, 2 bowls of Classic Waakye to Lomnava Station."</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <strong className="text-stone-900 text-lg block mb-1">Pay & Receive</strong>
                <span className="text-stone-600 font-medium">Pay via MoMo or cash on delivery. Your food arrives hot!</span>
              </div>
            </div>
          </div>

          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#25D366]/30 transition-all hover:-translate-y-1 relative z-10"
          >
            <MessageCircle size={28} />
            Open WhatsApp to Order
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
             <div className="flex items-center gap-3 mb-4 text-stone-900">
               <MapPin className="text-orange-600" />
               <h3 className="font-bold text-lg">Delivery Areas</h3>
             </div>
             <p className="text-stone-600 font-medium leading-relaxed">
               We deliver primarily within <strong>Lomnava, Lapaz, and Achimota</strong> environs. Fast and affordable delivery fees applied based on exact location.
             </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200">
             <div className="flex items-center gap-3 mb-4 text-stone-900">
               <CreditCard className="text-orange-600" />
               <h3 className="font-bold text-lg">Payment Methods</h3>
             </div>
             <p className="text-stone-600 font-medium leading-relaxed">
               We accept <strong>Mobile Money (MTN, Telecel, AT)</strong> as well as <strong>Cash on Delivery</strong> (please indicate if you need change).
             </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-stone-200 md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
             <div className="flex items-center gap-3 text-stone-900">
               <Clock className="text-orange-600" />
               <div>
                  <h3 className="font-bold text-lg">Opening Hours</h3>
                  <p className="text-stone-600 font-medium">Monday - Saturday: 8:00 AM - 10:00 PM</p>
               </div>
             </div>
             <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
               <CheckCircle size={18} />
               Currently Accepting Orders
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
