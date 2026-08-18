import { WHY_YOU_ARE_SPECIAL } from "../../utils/constants";

export default function WhySpecialSection() {
    return (
        <section className="py-10 relative z-10 bg-slate-900/20 border-y border-slate-800/50">
            <div className="max-w-lg mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-rose-300 drop-shadow-md">ليه أنتي مميزة؟ 🤔💜</h2>
                <div className="grid grid-cols-1 gap-4">
                    {WHY_YOU_ARE_SPECIAL.map((item, i) => (
                        <div key={i} className="bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50 hover:bg-slate-800/80 transition-all group">
                            <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                            <h3 className="text-lg font-bold text-rose-400 mb-1">{item.title}</h3>
                            <p className="text-slate-300 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
