import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsappNumber = "233241234567";
  const defaultMessage = "Hello Nava's Pot! I would like to place an order.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button group"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-stone-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Order in 2 mins!
      </span>
    </a>
  );
}
