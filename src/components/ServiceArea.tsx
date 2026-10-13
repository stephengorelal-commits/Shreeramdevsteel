import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/lib/data';

export default function ServiceArea() {
  return (
    <section className="bg-steel-950 py-14 lg:py-20 relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Service Area
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Serving Pune, PCMC, Alandi &amp; Nearby Areas
          </h2>
          <p className="text-steel-300 mt-3 text-sm lg:text-base max-w-2xl mx-auto">
            Located at Alandi on the Pune-Nashik Highway, we supply stainless steel products across
            Pune and Pimpri-Chinchwad region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Service area list */}
          <div className="reveal">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg glass-card text-steel-200 text-xs lg:text-sm font-medium"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Map embed */}
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-premium border border-white/10">
              <iframe
                title="Shree Ramdev Steel Location — Alandi, Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30269.726563!2d73.87!3d18.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9!2sAlandi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
