export default function SecretPopup({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 animate-fade-in backdrop-blur-sm" onClick={onClose}>
            <div className="bg-slate-900 px-8 py-5 rounded-2xl text-2xl font-bold text-rose-400 shadow-[0_0_50px_rgba(225,29,72,0.3)] scale-110 border border-slate-700">بحبك يا أيات 🎂❤</div>
        </div>
    );
}
