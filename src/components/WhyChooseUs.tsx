import { Store, Package, ChefHat, MapPin, Tag, Users, MessageCircle } from 'lucide-react';

const points = [
  { icon: Store, title: 'Retail and Wholesale Supply', desc: 'From single pieces to bulk project orders' },
  { icon: Package, title: 'SS Railing Product Range', desc: 'Posts, connectors, clamps, bends, balls & finials' },
  { icon: ChefHat, title: 'Kitchen Trolley & Storage', desc: 'Trolleys, baskets, drawer & cabinet solutions' },
  { icon: MapPin, title: 'Local Supply Across Pune & PCMC', desc: 'Alandi, Bhosari, Moshi, Chakan & nearby areas' },
  { icon: Tag, title: 'Direct Supplier Enquiry', desc: 'No middlemen — talk to the supplier directly' },
  { icon: Users, title: 'For Homes, Fabricators & Projects', desc: 'Serving all customer types and project sizes' },
  { icon: MessageCircle, title: 'Quick WhatsApp Quotation', desc: 'Send your requirement and get a fast response' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Trusted Stainless Steel Supplier in Pune
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="reveal group flex items-start gap-4 p-5 lg:p-6 rounded-xl bg-offwhite border border-steel-100 hover:border-gold-500/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel-950 text-gold-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm lg:text-base text-steel-950 mb-1">
                  {point.title}
                </h3>
                <p className="text-steel-400 text-xs lg:text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
