import { ShieldCheck, Heart, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* Hero */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-stone-900 mb-6">Our Story</h1>
          <p className="text-xl text-stone-600 font-medium max-w-3xl mx-auto leading-relaxed">
            From a tiny family kitchen to Lomnava's favorite hangout spot. Nava's Pot is built on the belief that good food brings good people together.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-200 rounded-[3rem] transform translate-x-6 translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cooking fresh food" 
                className="relative z-10 rounded-[3rem] shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-heading font-black text-stone-900 mb-6">Born in Lomnava, Made for Everyone</h2>
              <div className="space-y-6 text-lg text-stone-600 font-medium leading-relaxed">
                <p>
                  It all started with a simple recipe passed down through generations. The secret wasn't just in the spices, it was in the patience. The slow-cooked beans, the perfectly seasoned rice, and the shito that takes hours to perfect.
                </p>
                <p>
                  Today, Nava's Pot isn't just a place to grab lunch. It's where students fuel up for exams, where workers find comfort after a long shift, and where families order from on lazy weekends.
                </p>
                <p>
                  We don't cut corners. We buy fresh from the local market every morning, and we maintain a level of hygiene that we would demand for our own children. 
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-black text-center mb-16">Our Core Promises</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-stone-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unmatched Hygiene</h3>
              <p className="text-stone-400 font-medium leading-relaxed">A spotless kitchen is the foundation of great food. We adhere to the highest cleanliness standards.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-stone-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Heart size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Authentic Taste</h3>
              <p className="text-stone-400 font-medium leading-relaxed">No artificial shortcuts. We cook our meals with traditional methods to preserve the real Ghanaian flavor.</p>
            </div>

            <div className="text-center group">
              <div className="bg-stone-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-stone-400 font-medium leading-relaxed">We source locally, hire locally, and serve generously because Lomnava is our home.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
