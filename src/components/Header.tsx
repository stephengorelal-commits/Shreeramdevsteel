import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { navItems } from '@/lib/data';
import { openCall, openWhatsApp, PHONE_NUMBER } from '@/lib/whatsapp';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-steel-950/95 backdrop-blur-lg shadow-lg'
            : 'bg-steel-950/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            
        
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center text-left shrink-0"
          aria-label="Shree Ramdev Steel — Home"
        >
          <img
            src="/logo.png"
            alt="Shree Ramdev Steel"
            className="h-12 w-auto max-w-[180px] sm:h-14 sm:max-w-[210px] lg:h-16 lg:max-w-[240px] object-contain"
            width={240}
            height={64}
          />
        </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm font-medium text-steel-200 hover:text-gold-500 transition-colors duration-200 rounded-md hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => openCall('Header Call')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 text-white font-medium text-sm border border-white/20 hover:bg-white/15 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                Call Supplier
              </button>
              <button
                onClick={() =>
                  openWhatsApp(
                    'Hello Shree Ramdev Steel, I would like to make an enquiry about your stainless steel products.',
                    'Header WhatsApp'
                  )
                }
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp-dark transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Enquiry
              </button>
            </div>

            {/* Mobile CTA */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => openCall('Header Call Mobile')}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white border border-white/20"
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                <Phone className="h-5 w-5" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white border border-white/20"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden animate-slide-down bg-steel-950 border-t border-white/10">
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-steel-200 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() =>
                  openWhatsApp(
                    'Hello Shree Ramdev Steel, I would like to make an enquiry about your stainless steel products.',
                    'Header WhatsApp Mobile'
                  )
                }
                className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 rounded-lg bg-whatsapp text-white font-semibold text-base"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Enquiry
              </button>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer to offset fixed header */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  );
}
