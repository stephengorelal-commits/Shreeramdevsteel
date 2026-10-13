import { Phone, MessageCircle, ShoppingCart, MapPin, Wrench, Home, Layers } from 'lucide-react';
import { openCall, openWhatsApp, openWholesaleQuote, PHONE_NUMBER } from '@/lib/whatsapp';

const trustBadges = [
  { icon: Home, label: 'Retail Enquiries' },
  { icon: ShoppingCart, label: 'Wholesale / Bulk Supply' },
  { icon: MapPin, label: 'Pune • PCMC • Alandi' },
  { icon: Wrench, label: 'SS Railing & Fittings' },
  { icon: Layers, label: 'Kitchen Storage Solutions' },
];

export default function Hero() {
  return (
    <section
      id="home"
      data-section-name="Hero"
      className="relative overflow-hidden bg-steel-950"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-950 via-steel-900 to-steel-950" />
      {/* Decorative glow */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-steel-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="reveal text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-medium mb-5">
              <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
              Retail + Wholesale Stainless Steel Supplier
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
              Stainless Steel Products for{' '}
              <span className="gold-text">Homes, Fabricators &amp; Projects</span>
            </h1>

            <p className="mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg text-steel-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Retail &amp; Wholesale Supplier of SS Railing Accessories, Pipes, Fittings, Kitchen
              Trolleys &amp; Storage Solutions in Pune, PCMC &amp; Alandi.
            </p>

            {/* CTAs */}
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => openWholesaleQuote('Hero Wholesale Quote')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-steel-950 font-heading font-bold text-sm sm:text-base shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                <ShoppingCart className="h-5 w-5" />
                Get Wholesale Quote
              </button>
              <button
                onClick={() =>
                  openWhatsApp(
                    'Hello Shree Ramdev Steel, I would like to enquire about your stainless steel products.',
                    'Hero WhatsApp'
                  )
                }
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp text-white font-heading font-bold text-sm sm:text-base shadow-lg hover:bg-whatsapp-dark hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Enquiry
              </button>
              <button
                onClick={() => openCall('Hero Call')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-heading font-bold text-sm sm:text-base border border-white/20 hover:bg-white/15 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Call +91 99207 76840
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-steel-200 text-xs font-medium"
                >
                  <badge.icon className="h-3.5 w-3.5 text-gold-500" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium group">
              <img
                src="https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Stainless steel railing supplied by Shree Ramdev Steel in Pune — premium industrial SS products"
                width={900}
                height={600}
                className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 via-transparent to-transparent" />
              {/* Floating info card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4 animate-float">
                <p className="text-white font-heading font-semibold text-sm">
                  SS Railing Accessories &amp; Fittings
                </p>
                <p className="text-steel-300 text-xs mt-1">
                  Premium quality • Retail &amp; Wholesale • Pune • PCMC • Alandi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
