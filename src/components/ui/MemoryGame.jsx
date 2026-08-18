import { useState, useEffect } from "react";

const initialCards = ['🎂', '🎂', '🎁', '🎁', '💖', '💖', '🎈', '🎈', '🎉', '🎉', '💌', '💌'];

export default function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [won, setWon] = useState(false);

    useEffect(() => {
        const shuffled = [...initialCards].sort(() => Math.random() - 0.5).map((emoji, index) => ({ id: index, emoji }));
        setCards(shuffled);
    }, []);

    useEffect(() => {
        if (solved.length > 0 && solved.length === initialCards.length) {
            setTimeout(() => setWon(true), 1000);
        }
    }, [solved]);

    const handleClick = (index) => {
        if (flipped.includes(index) || solved.includes(index) || flipped.length >= 2) return;
        
        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);
        
        if (newFlipped.length === 2) {
            const [first, second] = newFlipped;
            if (cards[first].emoji === cards[second].emoji) {
                setSolved([...solved, first, second]);
                setFlipped([]);
            } else {
                setTimeout(() => setFlipped([]), 800);
            }
        }
    };

    return (
        <section className="py-10 relative z-10 bg-slate-900/50 backdrop-blur-sm border-y border-slate-800/50">
            <div className="max-w-lg mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-3 text-rose-300 drop-shadow-md">لعبة الهدايا 🎁</h2>
                <p className="text-slate-300 mb-6 text-sm font-medium">وصل كل زوجين ببعض عشان تشوفي مفاجأتك يا أيات 🎂❤️</p>
                
                <div className="grid grid-cols-3 gap-3 justify-center max-w-sm mx-auto">
                    {cards.map((card, i) => {
                        const isFlipped = flipped.includes(i) || solved.includes(i);
                        return (
                            <div 
                                key={i} 
                                onClick={() => handleClick(i)}
                                className={`aspect-square w-full rounded-xl flex items-center justify-center text-3xl cursor-pointer transition-all duration-300 transform border-2 ${isFlipped ? 'bg-slate-900 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)] scale-[1.02]' : 'bg-slate-800/80 border-slate-700 hover:scale-105 shadow-xl hover:border-slate-500'}`}
                            >
                                <span className={`transition-all duration-300 drop-shadow-md ${isFlipped ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'}`}>
                                    {card.emoji}
                                </span>
                            </div>
                        );
                    })}
                </div>
                
                {won && (
                    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
                        <div className="bg-slate-900/90 border border-rose-500/50 p-6 rounded-3xl shadow-[0_0_60px_rgba(225,29,72,0.5)] text-center max-w-sm transform scale-110">
                            <div className="text-5xl mb-4 animate-bounce">🎉🎂</div>
                            <h3 className="text-2xl font-bold text-rose-400 mb-4 font-script">happy birthday Ayat!</h3>
                            <p className="text-sm text-slate-200 leading-relaxed font-medium mb-6">
                                مبروك يا أيات! 🎉 أنتي تستاهلي أحسن حاجة في الدنيا.. كل سنة وأنتي طيبة يا نور عيني 🎂❤️
                            </p>
                            <button onClick={() => {
                              setWon(false);
                              setSolved([]);
                              setCards([...initialCards].sort(() => Math.random() - 0.5).map((emoji, index) => ({ id: index, emoji })));
                            }} className="bg-gradient-to-r from-rose-600 to-rose-800 text-white px-8 py-3 rounded-full text-sm font-bold shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:scale-110 transition-transform w-full border border-rose-400/30">
                                العب تاني 🎮
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
