'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hi! 👋 I'm the Trekkers Heaven trek advisor. Ask me about treks, difficulty levels, gear, best seasons, or how to book — I'm happy to help!",
};

const QUICK_PROMPTS = [
  'Best treks for beginners',
  'Which trek suits a family trip?',
  'How do I book a trek?',
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      if (window.innerWidth <= 640) document.body.style.overflow = 'hidden';
      inputRef.current?.focus();
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const data = await res.json();

      if (!res.ok || !data.reply) {
        throw new Error('No reply');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I couldn't respond just now. Please try again, or chat with our team directly on WhatsApp.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button
        type="button"
        className="chat-widget-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <MessageSquareText size={24} />}
      </button>

      {open && (
        <div className="chat-widget-panel" role="dialog" aria-modal="true" aria-label="Trek advisor chat">
          <header className="chat-widget-header">
            <div className="chat-widget-header-title">
              <span className="chat-widget-avatar">
                <Sparkles size={18} />
              </span>
              <div>
                <div className="chat-widget-title">Trek Advisor</div>
                <div className="chat-widget-subtitle">Ask about treks &amp; booking</div>
              </div>
            </div>
            <button
              type="button"
              className="chat-widget-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div className="chat-widget-messages" ref={listRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-widget-bubble ${m.role === 'user' ? 'chat-widget-bubble-user' : 'chat-widget-bubble-bot'}`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-widget-bubble chat-widget-bubble-bot chat-widget-typing" aria-label="Trek advisor is typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {messages.length === 1 && (
              <div className="chat-widget-quick-prompts">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className="chat-widget-quick-prompt"
                    onClick={() => sendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {error && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-widget-whatsapp-fallback"
            >
              Chat with our team on WhatsApp instead →
            </a>
          )}

          <form className="chat-widget-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a trek..."
              aria-label="Type your message"
              maxLength={2000}
            />
            <button type="submit" aria-label="Send message" disabled={loading || !input.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
