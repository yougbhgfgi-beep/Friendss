import Music from "../icons/Music";

export default function MusicPlayer({ isPlaying, onToggle }) {
    return (
        <button 
            onClick={onToggle} 
            className={`fixed top-3 left-3 z-50 p-2 rounded-full shadow-lg border transition-all animate-fade-in ${isPlaying ? 'bg-rose-600 border-rose-500 text-white animate-pulse shadow-[0_0_15px_rgba(225,29,72,0.5)]' : 'bg-slate-800 border-slate-700 text-rose-400 hover:scale-110'}`}
        >
            <Music size={16} className={isPlaying ? 'animate-spin-slow' : ''} />
        </button>
    );
}
