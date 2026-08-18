export default function TimeBox({ label, value }) {
    return (
        <div className="bg-slate-900/60 backdrop-blur-md border border-rose-500/30 text-rose-400 w-14 p-2 rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.2)] transform hover:-translate-y-1 transition-all hover:border-rose-500/60 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]">
            <div className="text-xl font-bold mb-0.5 drop-shadow-sm">{value || 0}</div>
            <div className="text-[8px] font-bold uppercase tracking-widest text-rose-300/70">{label}</div>
        </div>
    );
}
