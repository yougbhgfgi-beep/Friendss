import { useState } from "react";

export default function FriendshipMeter() {
    const [meterValue, setMeterValue] = useState(0);
    const [showResult, setShowResult] = useState(false);
    
    const handleMeter = (e) => {
        const val = parseInt(e.target.value);
        setMeterValue(val);
        if (val >= 100) setShowResult(true);
    };

    return (
        <section className="py-10 px-4 relative overflow-hidden">
            <div className="max-w-lg mx-auto text-center glass-panel p-5 rounded-3xl border-2 border-red-100 shadow-2xl relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
                <h2 className="text-2xl font-bold mb-3 text-rose-300">مقياس صداقتنا 🤝❤️</h2>
                <div className="mb-6 text-sm text-rose-400 font-bold">حرك القطة الفضية وتعرف قدر صداقتنا!</div>
                
                <div className="relative h-14 flex items-center mb-4 px-2">
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={meterValue} 
                        onChange={handleMeter}
                        className="love-slider z-20"
                    />
                </div>

                {showResult && (
                    <div className="animate-fade-in bg-slate-900/50 p-4 rounded-2xl border border-rose-500/20 mb-4">
                        <h3 className="text-2xl font-bold text-rose-500 mb-2 animate-pulse">صداقتنا للأبد! 🤝♾️</h3>
                        <p className="text-sm text-slate-300 font-medium">صداقتنا أكبر من أي رقم.. صداقتنا هي الدنيا بحالها. ❤️</p>
                    </div>
                )}
                
                {!showResult && (
                    <div className="text-rose-400 font-bold text-sm animate-bounce">
                        {meterValue < 30 ? "لسة يا روحي..." : meterValue < 70 ? "قربنا يا صاحبتي!" : "هانت خلاص!"}
                    </div>
                )}
                <div className="mt-4 text-4xl opacity-20 filter grayscale drop-shadow-lg">🤝❤️</div>
            </div>
        </section>
    );
}
