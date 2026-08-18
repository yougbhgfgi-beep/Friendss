import { TIMELINE_ITEMS } from "../../utils/constants";

export default function TimelineSection() {
    return (
        <section className="py-10 relative z-10 bg-slate-900/20 backdrop-blur-sm border-y border-slate-800/50">
            <h2 className="text-2xl font-bold text-center mb-10 text-rose-300 px-4 drop-shadow-md">ذكرياتنا الحلوة 🎂</h2>
            <div className="max-w-2xl mx-auto px-4 relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-800 rounded-full"></div>
                {TIMELINE_ITEMS.map((item, i) => (
                    <div key={i} className="flex mb-10 flex-col items-start group pl-12 relative">
                        <div className="z-10 bg-rose-500 w-6 h-6 rounded-full border-3 border-slate-900 shadow-[0_0_15px_rgba(225,29,72,0.5)] absolute left-3.5 top-0 group-hover:scale-125 transition-transform"></div>
                        <div className="w-full mb-2">
                            <div className="w-40 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
                                <img src={item.img} className="w-full h-full object-cover opacity-90" alt="Memory" />
                            </div>
                        </div>
                        <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50 w-full mt-2">
                            <h3 className="text-lg font-bold text-rose-400 mb-1 drop-shadow-sm">{item.t}</h3>
                            <p className="text-slate-300 font-medium text-sm leading-relaxed whitespace-pre-line">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
