import { useState, useEffect } from "react";
import Heart from "../icons/Heart";
import { LETTER_PARAGRAPHS, RECEIVER_NAME, GIVER_NAME } from "../../utils/constants";

export default function EnvelopeMessage({ onClose }) {
    const [isOpened, setIsOpened] = useState(false);
    const [showFullLetter, setShowFullLetter] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setIsOpened(true), 1500);
        const timer2 = setTimeout(() => setShowFullLetter(true), 3000);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 overflow-y-auto animate-fade-in">
            
            {!showFullLetter ? (
                <div className="relative w-full max-w-md h-[250px] flex items-end justify-center">
                    <div className={`absolute bottom-3 w-[85%] bg-slate-100 rounded-t-2xl shadow-2xl transition-all duration-[1500ms] ease-out z-20 flex flex-col items-center justify-start py-4 ${isOpened ? '-translate-y-[120px] h-[300px]' : 'h-[180px]'}`}>
                        <div className="text-rose-800 font-script text-lg opacity-60">إلى {RECEIVER_NAME} من {GIVER_NAME} ❤️</div>
                        <Heart size={30} fill="#f43f5e" className="text-rose-500 mt-6 animate-pulse opacity-50" />
                    </div>

                    <div className={`absolute top-[10%] left-0 right-0 h-[50%] bg-pink-900 z-30 transition-all duration-[1500ms] origin-top ease-out shadow-xl ${isOpened ? 'rotate-x-180 opacity-0 pointer-events-none' : ''}`} style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/50 to-transparent"></div>
                        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.8)] border-2 border-white/20">
                            <Heart size={16} fill="white" className="text-white animate-pulse" />
                        </div>
                    </div>
                    
                    <div className={`absolute bottom-0 left-0 right-0 h-[80%] bg-rose-800 z-30 rounded-b-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-t border-rose-400/20 transition-all duration-1000 ${isOpened ? 'opacity-0 scale-95 translate-y-10 pointer-events-none' : ''}`} style={{ clipPath: 'polygon(0 0, 50% 30%, 100% 0, 100% 100%, 0 100%)' }}></div>
                    <div className={`absolute bottom-0 left-0 right-0 h-[80%] bg-rose-950 z-0 rounded-b-2xl transition-all duration-1000 ${isOpened ? 'opacity-0 scale-95 translate-y-10 pointer-events-none' : ''}`}></div>
                    
                    {!isOpened && (
                        <div className="absolute -top-10 text-rose-300 font-bold text-sm animate-bounce drop-shadow-md">جاري فتح الظرف السري... 💌</div>
                    )}
                </div>
            ) : (
                <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl w-full max-w-lg p-5 shadow-[0_0_60px_rgba(244,63,94,0.3)] text-right border border-rose-500/30 animate-fade-in relative z-50 my-auto" dir="rtl">
                    <Heart size={35} fill="#f43f5e" className="text-rose-500 mx-auto mb-3 animate-pulse drop-shadow-md" />
                    <h2 className="text-xl text-center font-bold mb-4 text-rose-400 border-b border-slate-700 pb-2 font-script">رسالة من قلبي لقلبك 🎂❤️</h2>
                    <div className="text-sm leading-relaxed text-slate-300 space-y-3 font-medium">
                        {LETTER_PARAGRAPHS.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center pb-2">
                        <button onClick={onClose} className="bg-gradient-to-r from-rose-500 to-indigo-600 text-white px-8 py-2 rounded-full shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:scale-110 transition-transform font-bold text-sm border border-white/20">بحبك يا أيات 🎂❤️</button>
                    </div>
                </div>
            )}
        </div>
    );
}
