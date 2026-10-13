import { Phone, MessageCircle, FileText } from 'lucide-react';
import { openCall, openWhatsApp, openWholesaleQuote } from '@/lib/whatsapp';

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-steel-950 border-t border-white/10 pb-safe">
      <div className="grid grid-cols-3 gap-px">
        <button
          onClick={() => openCall('Mobile Bottom Call')}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white hover:bg-white/5 transition-colors"
          aria-label="Call supplier"
        >
          <Phone className="h-5 w-5 text-gold-500" />
          <span className="text-[10px] font-medium">Call</span>
        </button>
        <button
          onClick={() =>
            openWhatsApp(
              'Hello Shree Ramdev Steel, I would like to enquire about your products.',
              'Mobile Bottom WhatsApp'
            )
          }
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white hover:bg-white/5 transition-colors border-x border-white/10"
          aria-label="WhatsApp enquiry"
        >
          <MessageCircle className="h-5 w-5 text-whatsapp" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </button>
        <button
          onClick={() => openWholesaleQuote('Mobile Bottom Quote')}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white hover:bg-white/5 transition-colors"
          aria-label="Get quote"
        >
          <FileText className="h-5 w-5 text-gold-500" />
          <span className="text-[10px] font-medium">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
