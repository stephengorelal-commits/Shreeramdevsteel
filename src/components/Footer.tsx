import { useEffect, useState } from 'react';
import { Phone, MessageCircle, ArrowUp, MapPin } from 'lucide-react';
import { navItems, serviceAreas } from '@/lib/data';
import { openCall, openWhatsApp, PHONE_NUMBER, PHONE_TEL } from '@/lib/whatsapp';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const productCategories = [
    'SS Railing Accessories',
    'SS Pipes & Tubes',
    'SS Bends & Fittings',
    'SS Balls & Finials',
    'Kitchen Trolleys',
    'Kitchen Drawer Baskets',
  ];

  return (
    <footer className="bg-steel-900 text-steel-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
      
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center text-left mb-5"
            aria-label="Shree Ramdev Steel — Home"
          >
            <img
              src="/logo.png"
              alt="Shree Ramdev Steel"
              className="h-16 w-auto max-w-[260px] sm:h-20 sm:max-w-[300px] object-contain"
              width={300}
              height={80}
            />
          </button>

          <p className="text-sm leading-relaxed mb-4">
            Retail and wholesale supplier of stainless steel railing accessories, SS pipes, bends,
            fittings, balls, finials, kitchen trolleys and storage solutions in Pune, PCMC and
            Alandi.
          </p>

          <p className="text-xs text-steel-400 font-medium">
            Trader – Retailer | Retail &amp; Wholesale
          </p>
        </div>
        
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-steel-300 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-sm text-steel-300 hover:text-gold-500 transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-steel-400 text-xs"
                >
                  <MapPin className="h-3 w-3 text-gold-500" />
                  {area}
                </span>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-white text-sm mb-3">Contact</h3>
            <button
              onClick={() => openCall('Footer Call')}
              className="flex items-center gap-2 text-sm text-steel-300 hover:text-gold-500 transition-colors mb-2"
            >
              <Phone className="h-4 w-4 text-gold-500" />
              {PHONE_NUMBER}
            </button>
            <button
              onClick={() =>
                openWhatsApp(
                  'Hello Shree Ramdev Steel, I would like to enquire about your products.',
                  'Footer WhatsApp'
                )
              }
              className="flex items-center gap-2 text-sm text-whatsapp hover:text-whatsapp-dark transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Enquiry
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shree Ramdev Steel. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="text-xs text-steel-400 hover:text-gold-500 transition-colors"
            >
              {PHONE_NUMBER}
            </a>
            <span className="text-steel-600">|</span>
            <span className="text-xs text-steel-400">Alandi, Pune-Nashik Highway</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-steel-950 text-gold-500 shadow-lg hover:scale-110 transition-transform animate-fade-in border border-gold-500/30"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
