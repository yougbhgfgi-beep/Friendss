import { useState, useEffect, useRef } from "react";
import { BOT_REPLIES } from "../../utils/constants";

export default function BotChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('birthday_chat_v1');
        if (saved) {
            try { return JSON.parse(saved); } catch(e) {}
        }
        return [{ id: 1, text: "يا أيات يا أحلى بنت 🎂❤️.. كل سنة وأنتي طيبة! كنت لسة بفكر فيكي!", sender: "bot", time: new Date().toLocaleTimeString('ar-EG', {hour:'2-digit', minute:'2-digit'}) }];
    });
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('birthday_chat_v1', JSON.stringify(messages));
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSend = () => {
        if (!input.trim()) return;
        
        const newMsg = {
            id: Date.now(),
            text: input,
            sender: "user",
            time: new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'})
        };
        
        setMessages(prev => [...prev, newMsg]);
        setInput("");
        setIsTyping(true);
        
        setTimeout(() => {
            const reply = {
                id: Date.now() + 1,
                text: BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)],
                sender: "bot",
                time: new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'})
            };
            setMessages(prev => [...prev, reply]);
            setIsTyping(false);
        }, 1500 + Math.random() * 1500);
    };

    const deleteMessage = (id) => {
        setMessages(prev => prev.filter(m => m.id !== id));
    };

    const clearChat = () => {
        if(confirm("هل أنت متأكد من مسح جميع الرسائل؟")) {
            setMessages([{ id: 1, text: "مهما مسحت الرسايل صداقتنا هتفضل محفورة في قلبي للأبد 🥺❤️", sender: "bot", time: new Date().toLocaleTimeString('ar-EG', {hour:'2-digit', minute:'2-digit'}) }]);
        }
    };

    return (
        <div className="fixed bottom-3 left-3 z-[110]" dir="rtl">
            {!isOpen ? (
                <button onClick={() => setIsOpen(true)} className="w-12 h-12 bg-gradient-to-tr from-rose-600 to-indigo-700 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.6)] cursor-pointer flex items-center justify-center hover:scale-110 transition-transform animate-pulse border-2 border-white/20 text-white">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </button>
            ) : (
                <div className="bg-slate-100 w-[85vw] max-w-[300px] h-[60vh] max-h-[400px] rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-sans animate-fade-in relative z-[120] border border-slate-300">
                    <div className="bg-gradient-to-r from-rose-600 to-indigo-700 text-white p-2 flex items-center justify-between shadow-md relative z-20">
                        <div className="flex items-center gap-2">
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-rose-600 font-bold overflow-hidden border-2 border-white/50 text-xs">ز</div>
                            <div>
                                <h3 className="font-bold text-sm leading-tight">زينب 💖</h3>
                                <p className="text-[10px] text-rose-200">{isTyping ? "يكتب الآن..." : "متصل الآن"}</p>
                            </div>
                        </div>
                        <button onClick={clearChat} className="text-white hover:text-red-300 p-1" title="مسح المحادثة">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto relative scroll-smooth flex flex-col gap-2 bg-slate-50">
                        {messages.map((m) => (
                            <div key={m.id} className={`max-w-[85%] rounded-2xl p-2 shadow-sm relative group text-xs ${m.sender === "user" ? 'bg-indigo-600 text-white self-end rounded-bl-sm' : 'bg-white text-slate-800 self-start rounded-br-sm border border-slate-200'}`}>
                                <button onClick={() => deleteMessage(m.id)} className={`absolute top-1/2 -translate-y-1/2 hidden group-hover:flex items-center justify-center p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition ${m.sender === "user" ? "-left-8" : "-right-8"}`} title="حذف الرسالة">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                                </button>
                                <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                                <div className={`text-[8px] mt-0.5 flex justify-end gap-0.5 items-center ${m.sender === "user" ? "text-indigo-200" : "text-slate-400"}`}>
                                    {m.time}
                                    {m.sender === "user" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="bg-white border border-slate-200 self-start rounded-2xl rounded-br-sm p-2 shadow-sm w-12 h-8 flex items-center justify-center gap-1 text-slate-800">
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: "0ms"}}></div>
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: "150ms"}}></div>
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: "300ms"}}></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="pb-1 text-transparent">.</div>
                    </div>

                    <div className="bg-white p-2 flex items-center gap-1.5 border-t border-slate-200">
                        <div className="flex-1 bg-slate-100 rounded-full flex items-center px-3 py-1.5 border border-slate-200">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="اكتب رسالة..."
                                className="flex-1 outline-none border-none bg-transparent text-slate-800 placeholder-slate-400 text-xs w-full"
                            />
                        </div>
                        <button 
                            onClick={handleSend}
                            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors ${input.trim() ? 'bg-rose-600 hover:bg-rose-700' : 'bg-slate-300'} text-white shrink-0`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-0.5 -ml-0.5"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
