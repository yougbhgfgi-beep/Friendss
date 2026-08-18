import { useState } from "react";
import { MINI_MESSAGES, RECEIVER_NAME } from "../../utils/constants";

export default function MiniMessages() {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    
    return (
        <div className="fixed bottom-3 right-3 z-[110]" dir="rtl">
            {!isOpen ? (
                <div onClick={() => setIsOpen(true)} className="w-12 h-12 bg-gradient-to-tr from-rose-600 to-indigo-700 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.6)] cursor-pointer flex items-center justify-center hover:scale-110 transition-transform animate-bounce border-2 border-white/20">
                    <span className="text-xl drop-shadow-md">🎂</span>
                </div>
            ) : (
                <div className="bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl border border-rose-500/50 shadow-[0_15px_50px_rgba(0,0,0,0.8)] w-[80vw] max-w-xs text-center animate-fade-in relative">
                    <button onClick={() => setIsOpen(false)} className="absolute top-2 left-2 text-slate-400 hover:text-white text-2xl font-bold">&times;</button>
                    <div className="text-3xl mb-2 ml-1 animate-pulse">🎂</div>
                    <h4 className="text-rose-400 font-bold mb-3 font-script text-lg drop-shadow-md">رسايل ليكِ يا {RECEIVER_NAME}</h4>
                    <div className="flex justify-between items-center bg-slate-800/80 p-3 rounded-xl border border-slate-700 shadow-inner">
                        <button onClick={() => setIndex((index + 1) % MINI_MESSAGES.length)} className="text-rose-500 hover:text-rose-300 font-bold text-xl px-1">&#10095;</button>
                        <p className="text-slate-200 font-medium min-h-[50px] flex items-center justify-center leading-relaxed flex-1 px-2 text-xs">
                            {MINI_MESSAGES[index]}
                        </p>
                        <button onClick={() => setIndex((index - 1 + MINI_MESSAGES.length) % MINI_MESSAGES.length)} className="text-rose-500 hover:text-rose-300 font-bold text-xl px-1">&#10094;</button>
                    </div>
                    <span className="block mt-3 text-slate-400 text-[10px] font-bold tracking-widest">{index + 1} / {MINI_MESSAGES.length}</span>
                </div>
            )}
        </div>
    );
}
