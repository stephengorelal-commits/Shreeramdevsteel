import { Home, ShoppingCart, Check, MessageCircle } from 'lucide-react';
import { openWholesaleQuote } from '@/lib/whatsapp';

const retailFeatures = [
  'Small quantity orders',
  'SS railing accessories',
  'Kitchen trolleys and storage',
  'Direct supplier pricing',
  'Local Pune / PCMC delivery enquiry',
];

const wholesaleFeatures = [
  'Bulk quantity enquiries',
  'Railing fabrication material',
  'SS pipes, bends, fittings and accessories',
  'Project and contractor requirements',
  'Wholesale rate discussion through call or WhatsApp',
];

export default function RetailWholesale() {
  return (
    <section
      id="wholesale"
      data-section-name="Retail & Wholesale"
      className="bg-offwhite py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Retail + Wholesale
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Serving Every Requirement — Small &amp; Bulk
          </h2>
          <p className="text-steel-400 mt-3 text-sm lg:text-base max-w-2xl mx-auto">
            Whether you need a single railing accessory or a full project supply, we cater to both
            individual and wholesale customers across Pune and PCMC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Retail */}
          <div className="reveal bg-white rounded-2xl shadow-card hover:shadow-premium transition-shadow duration-300 overflow-hidden border border-steel-100">
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-steel-950 text-gold-500">
                  <Home className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-steel-950">RETAIL SUPPLY</h3>
                  <p className="text-steel-400 text-sm">For individual customers</p>
                </div>
              </div>
              <p className="text-steel-400 text-sm mb-5">
                For individual homeowners, small fabricators and local customers.
              </p>
              <ul className="space-y-3">
                {retailFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-steel-900">
                    <Check className="h-4 w-4 text-whatsapp-dark mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  openWholesaleQuote('Retail Card WhatsApp')
                }
                className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-steel-950 text-white font-semibold text-sm hover:bg-steel-800 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </button>
            </div>
          </div>

          {/* Wholesale */}
          <div className="reveal bg-steel-950 rounded-2xl shadow-premium hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-32 w-32 bg-gold-500/10 rounded-full blur-2xl" />
            <div className="p-6 lg:p-8 relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-steel-950">
                  <ShoppingCart className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">WHOLESALE SUPPLY</h3>
                  <p className="text-gold-500 text-sm">For bulk &amp; project buyers</p>
                </div>
              </div>
              <p className="text-steel-300 text-sm mb-5">
                For fabricators, contractors, builders, dealers and project buyers.
              </p>
              <ul className="space-y-3">
                {wholesaleFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-steel-200">
                    <Check className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openWholesaleQuote('Wholesale Card Quote')}
                className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-steel-950 font-heading font-bold text-sm hover:scale-[1.02] transition-transform duration-200 shadow-gold"
              >
                <MessageCircle className="h-4 w-4" />
                Get Wholesale Quote on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
