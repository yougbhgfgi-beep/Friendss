export default function VideoSection({ onVideoPlay, onVideoPause }) {
    return (
        <section className="py-10 relative z-10 bg-slate-900/30 border-y border-slate-800/50">
            <div className="max-w-lg mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-6 text-rose-300 drop-shadow-md">لحظة من القلب 🎬❤️</h2>
                <div className="relative group p-0 border-4 border-slate-800 bg-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="w-full h-full relative">
                        <video 
                            controls 
                            preload="auto"
                            className="w-full h-auto min-h-[200px] object-cover shadow-inner opacity-90"
                            onPlay={onVideoPlay}
                            onPause={onVideoPause}
                            onEnded={onVideoPause}
                        >
                            <source src="/birthday-video.mp4" type="video/mp4" />
                            المتصفح مش بيدعم الفيديو
                        </video>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-script text-rose-400 italic drop-shadow-md bg-black/40 py-1">"كل لحظة معاكي أحلى لحظة في حياتي 🎂"</div>
                </div>
            </div>
        </section>
    );
}
