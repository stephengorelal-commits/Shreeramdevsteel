import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';
import { openWhatsApp, PHONE_NUMBER } from '@/lib/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-offwhite py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-xl shadow-card border border-steel-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="font-heading font-semibold text-sm lg:text-base text-steel-950">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gold-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-content-${index}`}
                className={`grid transition-all duration-300 ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-steel-400 text-sm lg:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="text-center mt-8 reveal">
          <p className="text-steel-400 text-sm mb-4">
            Still have questions? Call or WhatsApp us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() =>
                openWhatsApp(
                  'Hello Shree Ramdev Steel, I have a question about your products.',
                  'FAQ WhatsApp'
                )
              }
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp-dark transition-colors"
            >
              WhatsApp Us
            </button>
            <a
              href="tel:+919920776840"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-steel-950 text-white font-semibold text-sm hover:bg-steel-800 transition-colors"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
