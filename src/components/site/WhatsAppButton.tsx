import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801700000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Eminent Sourcing on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-primary px-4 py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lg transition-colors hover:bg-navy-deep"
    >
      <MessageCircle size={18} aria-hidden />
      <span className="hidden sm:inline">WhatsApp Inquiry</span>
    </a>
  );
}
