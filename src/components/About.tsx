import { MapPin, Phone, Clock, Building2 } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/whatsapp';

export default function About() {
  return (
    <section id="about" data-section-name="About" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden shadow-premium">
              <img
                src="https://images.pexels.com/photos/29224609/pexels-photo-29224609.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stainless steel supplier workshop at Shree Ramdev Steel Alandi Pune"
                width={800}
                height={600}
                className="w-full h-[300px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 lg:-right-4 bg-steel-950 rounded-xl p-4 shadow-lg max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="h-4 w-4 text-gold-500" />
                <p className="text-white font-heading font-semibold text-xs">Established Supplier</p>
              </div>
              <p className="text-steel-300 text-[10px]">Alandi, Pune-Nashik Highway</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
              About Us
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950 mb-4">
              About Shree Ramdev Steel
            </h2>
            <p className="text-steel-400 text-sm lg:text-base leading-relaxed mb-5">
              Shree Ramdev Steel is a stainless steel retail and wholesale supplier based at Alandi
              on the Pune-Nashik Highway. The business supplies SS railing accessories, pipes, bends,
              fittings, balls, finials and kitchen trolley/storage solutions for homes, fabricators,
              contractors and project requirements across Pune, Pimpri-Chinchwad and nearby areas.
            </p>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-offwhite border border-steel-100">
                <MapPin className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-xs text-steel-950">Location</p>
                  <p className="text-steel-400 text-xs mt-0.5">
                    Alandi, Pune-Nashik Highway, Pune
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-offwhite border border-steel-100">
                <Phone className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-xs text-steel-950">Phone</p>
                  <a href={PHONE_TEL} className="text-steel-400 text-xs mt-0.5 hover:text-gold-500 transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-offwhite border border-steel-100">
                <Clock className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-xs text-steel-950">Hours</p>
                  <p className="text-steel-400 text-xs mt-0.5">Mon – Sat: 9 AM – 7 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-offwhite border border-steel-100">
                <Building2 className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-xs text-steel-950">Business Type</p>
                  <p className="text-steel-400 text-xs mt-0.5">Trader – Retailer | Retail &amp; Wholesale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
