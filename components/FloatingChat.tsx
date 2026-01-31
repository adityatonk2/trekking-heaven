import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export default function FloatingChat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-chat"
      aria-label="Start chat on WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={2} />
      <span>START CHAT</span>
    </a>
  );
}
