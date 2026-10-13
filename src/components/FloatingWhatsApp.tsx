import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={() =>
        openWhatsApp(
          'Hello Shree Ramdev Steel, I would like to enquire about your stainless steel products.',
          'Floating WhatsApp'
        )
      }
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl hover:scale-110 transition-transform duration-200 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white" />
      </span>
    </button>
  );
}
