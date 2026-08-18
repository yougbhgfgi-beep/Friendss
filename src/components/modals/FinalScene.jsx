import { useState, useEffect } from "react";
import Heart from "../icons/Heart";
import { FINAL_SCENE_STEPS, RECEIVER_NAME } from "../../utils/constants";

export default function FinalScene({ onClose }) {
    const [step, setStep] = useState(0);
    
    useEffect(() => {
        const timings = [500, 3000, 8000, 13000, 18000, 23000, 28000];
        const timeouts = timings.map((t, i) => setTimeout(() => setStep(i + 1), t));
        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-center p-4 overflow-y-auto font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-black z-0 pointer-events-none"></div>
            {[...Array(40)].map((_, i) => (
                <div key={`fs-star-${i}`} className="star absolute bg-white/80 rounded-full z-0 pointer-events-none" style={{
                    width: Math.random() * 2 + 1 + 'px', height: Math.random() * 2 + 1 + 'px',
                    top: Math.random() * 100 + '%', left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 3 + 's'
                }}></div>
            ))}
            
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-yellow-100/90 shadow-[0_0_80px_rgba(253,224,71,0.6)] z-0 pointer-events-none opacity-80 animate-pulse-slow"></div>

            <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white hover:rotate-90 transition-all duration-300 text-3xl font-bold z-50">×</button>
            
            <div className="max-w-lg w-full text-white relative z-10" dir="rtl">
                {step === 1 && <h2 className="text-3xl font-bold text-rose-500 animate-[pulse_2s_infinite] drop-shadow-[0_0_40px_rgba(225,29,72,0.8)]">{FINAL_SCENE_STEPS[0]}</h2>}
                {step >= 2 && step < 6 && (
                    <div className="space-y-4 animate-fade-in py-6">
                        {step >= 2 && (
                            <div className="bg-slate-900/40 p-4 rounded-2xl backdrop-blur-md border border-slate-700/50 shadow-[0_0_50px_rgba(225,29,72,0.1)]">
                                <p className="text-sm font-bold leading-relaxed shadow-red-900/40 drop-shadow-lg mb-2 text-rose-100">{FINAL_SCENE_STEPS[1]}</p>
                                <p className="text-xs text-rose-300">{FINAL_SCENE_STEPS[2]}</p>
                            </div>
                        )}
                        {step >= 3 && (
                            <div className="animate-fade-in delay-500">
                                <p className="text-sm font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">{FINAL_SCENE_STEPS[3]}</p>
                            </div>
                        )}
                        {step >= 4 && (
                            <p className="text-2xl font-script text-rose-400 mt-4 animate-bounce drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]">{FINAL_SCENE_STEPS[4]}</p>
                        )}
                        {step >= 5 && (
                            <p className="text-xs text-yellow-300 font-bold mt-3 tracking-wide">{FINAL_SCENE_STEPS[5]}</p>
                        )}
                    </div>
                )}
                {step >= 6 && (
                    <div className="animate-fade-in flex flex-col items-center">
                        <div className="mb-6 text-rose-500 bg-slate-900/50 p-4 rounded-full animate-float shadow-[0_0_40px_rgba(225,29,72,0.4)] border border-rose-500/20">
                            <Heart size={50} fill="currentColor" className="animate-pulse" />
                        </div>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 mb-6 font-script drop-shadow-2xl hero-title">{FINAL_SCENE_STEPS[6]}</h1>
                        <p className="text-lg font-bold mb-2 text-slate-100">حبنا أقوى من كل شيء..</p>
                        <p className="text-xl font-bold text-rose-400 animate-pulse">إلى ما لا نهاية ♾️</p>
                        {step >= 7 && <p className="text-xs text-slate-400 mt-6 font-serif italic border-t border-slate-800/80 pt-3">With love, {RECEIVER_NAME} 💖</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
