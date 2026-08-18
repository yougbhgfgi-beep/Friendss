import { RECEIVER_NAME, GIVER_NAME } from "../../utils/constants";

export default function HeroSection({ onSecretClick }) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 relative z-10">
            <div className="animate-float mb-4">
                <img 
                    src="/logo.jpg" 
                    alt="Logo" 
                    className="w-28 h-28 rounded-full object-cover shadow-[0_0_40px_rgba(225,29,72,0.5)] border-4 border-rose-500/30"
                />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400 font-script hero-title">Happy Birthday 🎂</h1>
            <h2 className="text-2xl font-bold text-rose-300 mb-3 drop-shadow-md">يا {RECEIVER_NAME} ❤️</h2>
            <p className="text-sm text-slate-400 font-medium italic">هدية من {GIVER_NAME} بمناسبة عيد ميلادك 🎁</p>
            <button onClick={onSecretClick} className="mt-6 bg-slate-900/60 backdrop-blur-md text-rose-400 px-8 py-3 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] font-bold text-sm hover:bg-slate-800 transition-all border border-slate-700 hover:scale-105 active:scale-95">زر المفاجأة 🎉</button>
        </section>
    );
}
