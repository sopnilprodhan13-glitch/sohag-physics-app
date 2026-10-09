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
    <div className="flex flex-col h-[calc(100vh-64px-72px)] md:h-[calc(100vh-64px)] max-w-2xl mx-auto bg-white rounded-t-3xl md:rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative animate-in fade-in">
      
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white z-10 relative">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 text-gray-500 hover:text-brand-dark rounded-full hover:bg-gray-50">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2 bg-[#EAF6F0] text-brand-dark px-3 py-1.5 rounded-xl">
            <div className="w-5 h-5 bg-brand-default rounded flex items-center justify-center text-white text-[10px] font-bold">
              AI
            </div>
            <span className="font-bold text-sm">Sohag Physics</span>
            <span className="text-xs text-gray-500 truncate max-w-[100px]">AI Tutor</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setMessages([messages[0]])} className="p-2 text-brand-default hover:bg-gray-50 rounded-full">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#fcfdfc]">
        
        {messages.map((msg, index) => (
          msg.role === 'user' ? (
            <div key={index} className="flex justify-end">
              <div className="bg-[#EAF6F0] text-brand-dark px-5 py-3 rounded-2xl rounded-tr-sm border border-[#d1ecd8] max-w-[85%] shadow-sm">
                <p className="text-[15px] font-medium leading-relaxed">{msg.content}</p>
                <span className="text-[10px] text-gray-400 block text-right mt-1">{msg.time}</span>
              </div>
            </div>
          ) : (
            <div key={index} className="flex gap-3 max-w-[95%]">
              <div className="w-8 h-8 rounded bg-brand-default shrink-0 flex items-center justify-center overflow-hidden">
                 <Image src="/logo.jpg" alt="AI" width={32} height={32} className="object-cover" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="bg-white border border-gray-100 p-5 rounded-2xl rounded-tl-sm shadow-sm text-[15px] text-gray-800 leading-relaxed overflow-x-auto markdown-body">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          )
        ))}
        {isLoading && (
          <div className="flex gap-3 max-w-[95%]">
             <div className="w-8 h-8 rounded bg-brand-default shrink-0 flex items-center justify-center overflow-hidden">
                 <Image src="/logo.jpg" alt="AI" width={32} height={32} className="object-cover" />
              </div>
              <div className="flex-1">
                 <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-sm inline-flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-default rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-default rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-brand-default rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                 </div>
              </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-3 bg-[#f8faf9] border border-gray-200 rounded-full p-2 pr-3 focus-within:border-brand-default focus-within:ring-2 focus-within:ring-brand-light transition-all shadow-sm">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="তোমার প্রশ্ন লেখো..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-base py-2 px-4 text-gray-700 placeholder:text-gray-400 outline-none"
          />
          <button onClick={handleSend} disabled={!input.trim() || isLoading} className="p-2.5 bg-brand-default text-white rounded-full hover:bg-brand-dark transition-colors shadow-sm disabled:opacity-50">
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
