import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Send, Info } from 'lucide-react';
import { openWhatsApp, openCall, PHONE_NUMBER, buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    product: '',
    quantity: '',
    location: '',
    message: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello Shree Ramdev Steel,\n\nI would like to enquire about your products.\n\nName: ${form.name}\nMobile: ${form.mobile}\nProduct / Requirement: ${form.product}\nQuantity: ${form.quantity}\nLocation: ${form.location}\nMessage: ${form.message}`;
    trackEvent('whatsapp_form_submit', { label: 'Contact Form WhatsApp' });
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" data-section-name="Contact" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Contact Us
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Get in Touch for Enquiries
          </h2>
          <p className="text-steel-400 mt-3 text-sm lg:text-base max-w-2xl mx-auto">
            Call or WhatsApp us with your requirement. Fill the form below and it will open WhatsApp
            with your enquiry pre-filled.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact info */}
          <div className="reveal lg:col-span-2 space-y-4">
            <div className="bg-steel-950 rounded-2xl p-6 lg:p-8 shadow-premium relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold-500/10 blur-2xl" />
              <div className="relative">
                <h3 className="font-heading font-bold text-lg text-white mb-5">
                  Contact Information
                </h3>

                <button
                  onClick={() => openCall('Contact Section Call')}
                  className="flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors mb-3 border border-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-gradient text-steel-950 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-steel-300 text-xs">Call Supplier</p>
                    <p className="text-white font-semibold text-sm">{PHONE_NUMBER}</p>
                  </div>
                </button>

                <button
                  onClick={() =>
                    openWhatsApp(
                      'Hello Shree Ramdev Steel, I would like to enquire about your products.',
                      'Contact Section WhatsApp'
                    )
                  }
                  className="flex items-center gap-3 w-full p-4 rounded-xl bg-whatsapp/15 hover:bg-whatsapp/25 transition-colors border border-whatsapp/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-whatsapp text-white shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-whatsapp text-xs font-medium">WhatsApp Supplier</p>
                    <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                  </div>
                </button>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="text-steel-300 text-xs leading-relaxed">
                    <strong className="text-gold-500">Location:</strong> Alandi, Pune-Nashik
                    Highway, Pune, Maharashtra
                  </p>
                  <p className="text-steel-300 text-xs leading-relaxed mt-2">
                    <strong className="text-gold-500">Hours:</strong> Mon – Sat: 9 AM – 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-offwhite rounded-2xl p-6 lg:p-8 shadow-card border border-steel-100"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-steel-600 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-steel-200 bg-white text-sm text-steel-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-xs font-medium text-steel-600 mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-steel-200 bg-white text-sm text-steel-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-xs font-medium text-steel-600 mb-1.5">
                    Requirement / Product
                  </label>
                  <input
                    id="product"
                    type="text"
                    required
                    value={form.product}
                    onChange={(e) => handleChange('product', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-steel-200 bg-white text-sm text-steel-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all"
                    placeholder="e.g. SS Railing Posts"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-xs font-medium text-steel-600 mb-1.5">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-steel-200 bg-white text-sm text-steel-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all"
                    placeholder="e.g. 50 pieces / bulk"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="location" className="block text-xs font-medium text-steel-600 mb-1.5">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-steel-200 bg-white text-sm text-steel-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all"
                    placeholder="e.g. PCMC, Pune"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-medium text-steel-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-steel-200 bg-white text-sm text-steel-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all resize-none"
                    placeholder="Additional details about your requirement..."
                  />
                </div>
              </div>

              {/* Info note */}
              <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
                <Info className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
                <p className="text-steel-600 text-xs leading-relaxed">
                  No online payment. This form opens WhatsApp with your enquiry.
                </p>
              </div>

              <button
                type="submit"
                className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp text-white font-heading font-bold text-sm sm:text-base shadow-lg hover:bg-whatsapp-dark hover:scale-[1.01] transition-all duration-200"
              >
                <Send className="h-4 w-4" />
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
