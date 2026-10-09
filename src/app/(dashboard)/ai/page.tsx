"use client";

import { ArrowLeft, Plus, History, Camera, Send, Copy, Share2, ArrowDownCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'ai';
  content: string;
  time: string;
}

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: 'হ্যালো! আমি সোহাগ ফিজিক্সের AI টিউটর। পদার্থবিজ্ঞান নিয়ে তোমার যেকোনো প্রশ্ন আমাকে করতে পারো।',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: userMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: data.reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    } catch (error) {
      console.error("Chat error", error);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: "দুঃখিত, কোনো একটি সমস্যা হয়েছে। আবার চেষ্টা করো।", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px-72px)] md:h-[calc(100vh-64px)] max-w-3xl mx-auto bg-surface md:my-4 md:rounded-3xl shadow-subtle border-0 md:border md:border-border-light overflow-hidden relative animate-in fade-in">
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-surface/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 text-text-secondary hover:text-primary rounded-xl hover:bg-surface-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2.5 bg-surface-muted text-primary px-3 py-1.5 rounded-lg border border-border-light">
            <div className="w-5 h-5 bg-action rounded-[4px] flex items-center justify-center text-white text-[10px] font-bold">
              AI
            </div>
            <span className="font-bold text-[13px] tracking-wide">Sohag Physics</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setMessages([messages[0]])} className="p-2 text-action hover:bg-surface-muted rounded-xl transition-colors" title="New Chat">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-background">
        
        {messages.map((msg, index) => (
          msg.role === 'user' ? (
            <div key={index} className="flex justify-end">
              <div className="bg-primary text-white px-5 py-3.5 rounded-2xl rounded-tr-[4px] max-w-[85%] md:max-w-[75%] shadow-sm">
                <p className="text-[15px] font-medium leading-relaxed">{msg.content}</p>
                <span className="text-[10px] text-white/60 block text-right mt-1">{msg.time}</span>
              </div>
            </div>
          ) : (
            <div key={index} className="flex gap-3 max-w-[95%] md:max-w-[85%]">
              <div className="w-8 h-8 rounded-lg bg-surface-muted shrink-0 flex items-center justify-center overflow-hidden border border-border-light shadow-sm">
                 <Image src="/logo.jpg" alt="AI" width={32} height={32} className="object-cover" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="bg-surface border border-border-light p-5 rounded-2xl rounded-tl-[4px] shadow-sm text-[15px] text-text-primary leading-relaxed overflow-x-auto markdown-body">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          )
        ))}
        {isLoading && (
          <div className="flex gap-3 max-w-[95%]">
             <div className="w-8 h-8 rounded-lg bg-surface-muted shrink-0 flex items-center justify-center overflow-hidden border border-border-light shadow-sm">
                 <Image src="/logo.jpg" alt="AI" width={32} height={32} className="object-cover" />
              </div>
              <div className="flex-1">
                 <div className="bg-surface border border-border-light p-4 rounded-2xl rounded-tl-[4px] shadow-sm inline-flex items-center gap-2">
                    <div className="w-2 h-2 bg-action rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-action rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-action rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                 </div>
              </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-surface border-t border-border-light">
        <div className="flex items-center gap-2 bg-background border border-border-light rounded-2xl p-1.5 focus-within:border-action/50 focus-within:ring-4 focus-within:ring-action/10 transition-all">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ফিজিক্স নিয়ে প্রশ্ন করো..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-2.5 px-4 text-text-primary placeholder:text-text-secondary outline-none"
          />
          <button onClick={handleSend} disabled={!input.trim() || isLoading} className="p-3 bg-action text-white rounded-xl hover:bg-action/90 transition-colors shadow-sm disabled:opacity-50 disabled:hover:bg-action">
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
