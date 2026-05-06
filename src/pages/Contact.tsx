import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "233241234567";
  const defaultMessage = "Hello, I have a question about Nava's Pot.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="pt-24 min-h-screen bg-stone-50 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mt-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-stone-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-stone-600 font-medium">Have a question, feedback, or need catering for an event? We're always happy to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex items-start gap-6">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Visit Us</h3>
                <p className="text-stone-600 font-medium leading-relaxed">
                  Off the main street, Opposite the Pharmacy,<br />
                  Lomnava, Accra, Ghana
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex items-start gap-6">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Call Us</h3>
                <p className="text-stone-600 font-medium text-lg tracking-wider mb-2">
                  +233 24 123 4567
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="tel:+233241234567" 
                    className="bg-stone-900 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-stone-800 transition-colors"
                  >
                    Call Now
                  </a>
                  <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#20bd5a] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={16}/> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex items-start gap-6">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Working Hours</h3>
                <p className="text-stone-600 font-medium">Monday - Saturday: <strong className="text-stone-900">8:00 AM - 10:00 PM</strong></p>
                <p className="text-stone-600 font-medium">Sunday: <strong className="text-stone-900">12:00 PM - 8:00 PM</strong></p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-stone-200 rounded-3xl overflow-hidden relative min-h-[400px] border border-stone-300">
             {/* Note: In a real app, embed a Google Map here */}
             <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lomnava,Accra&zoom=14&size=800x800&sensor=false')] bg-cover bg-center opacity-50 grayscale mix-blend-multiply"></div>
             
             <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center bg-stone-900/10 backdrop-blur-sm">
                <div className="bg-white p-4 rounded-full shadow-2xl mb-4 text-orange-600 animate-bounce">
                  <MapPin size={40} />
                </div>
                <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-xl max-w-sm">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Google Maps</h3>
                  <p className="text-stone-600 font-medium mb-4 text-sm">Find "Nava's Pot" easily on your map. We're fully optimized for local search—just search "Food near me" in Lomnava!</p>
                  <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors">
                    Get Directions
                  </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
