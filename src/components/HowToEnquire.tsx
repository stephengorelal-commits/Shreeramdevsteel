import { Camera, MessageCircle, FileText, Package } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const steps = [
  {
    icon: Camera,
    title: 'Send Product Photo or Requirement',
    desc: 'Share a photo of the product you need, your application or the quantity required via WhatsApp.',
    num: '01',
  },
  {
    icon: MessageCircle,
    title: 'Discuss Size, Finish & Requirement',
    desc: 'Our team will discuss sizes, finishes and your specific requirement to identify the right product.',
    num: '02',
  },
  {
    icon: FileText,
    title: 'Receive Pricing Information',
    desc: 'Get retail or wholesale pricing information based on your requirement and quantity.',
    num: '03',
  },
  {
    icon: Package,
    title: 'Confirm Order & Coordinate Delivery',
    desc: 'Confirm your order and coordinate delivery or pickup as per your convenience.',
    num: '04',
  },
];

export default function HowToEnquire() {
  return (
    <section className="bg-offwhite py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            How to Enquire
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Simple 4-Step Enquiry Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-steel-200 via-gold-500/40 to-steel-200" />

          {steps.map((step) => (
            <div key={step.num} className="reveal relative">
              <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-premium transition-shadow duration-300 border border-steel-100 text-center">
                <div className="relative mx-auto mb-4">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-steel-950 text-gold-500 relative z-10">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-steel-950 font-heading font-bold text-xs z-20">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-sm lg:text-base text-steel-950 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-steel-400 text-xs lg:text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <button
            onClick={() =>
              openWhatsApp(
                'Hello Shree Ramdev Steel, I would like to send my requirement. Please assist.',
                'How to Enquire CTA'
              )
            }
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-whatsapp text-white font-heading font-bold text-sm sm:text-base shadow-lg hover:bg-whatsapp-dark hover:scale-[1.02] transition-all duration-200"
          >
            <MessageCircle className="h-5 w-5" />
            Send Requirement on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
