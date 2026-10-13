import { Ruler, Hexagon, Circle, UtensilsCrossed, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const categories = [
  {
    icon: Ruler,
    title: 'SS Railing Accessories',
    description: 'Posts, holders, connectors, clamps & brackets',
  },
  {
    icon: Hexagon,
    title: 'SS Pipes, Bends & Fittings',
    description: 'Pipes, tubes, bends, elbows & joints',
  },
  {
    icon: Circle,
    title: 'SS Balls & Finials',
    description: 'Decorative balls, end caps & finials',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Trolley & Storage',
    description: 'Trolleys, baskets, drawer & cabinet storage',
  },
];

export default function CategoryStrip() {
  return (
    <section className="bg-offwhite py-10 lg:py-14 border-b border-steel-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="reveal group bg-white rounded-xl p-4 lg:p-5 shadow-card hover:shadow-premium transition-all duration-300 border border-steel-100 hover:border-gold-500/30 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg bg-steel-950 text-gold-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-sm lg:text-base text-steel-950 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-steel-400 text-xs mt-1 leading-snug hidden sm:block">
                    {cat.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello Shree Ramdev Steel, I would like to enquire about ${cat.title}.`,
                    `Category Strip — ${cat.title}`
                  )
                }
                className="mt-3 flex items-center gap-1.5 text-xs font-medium text-whatsapp-dark hover:text-whatsapp transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
