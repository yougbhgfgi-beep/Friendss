import { useEffect, useState } from "react";

export default function CakeSection() {
    const [blown, setBlown] = useState(false);
    const [showWish, setShowWish] = useState(false);

    useEffect(() => {
        if (blown) {
            const t = setTimeout(() => setShowWish(true), 800);
            return () => clearTimeout(t);
        }
    }, [blown]);

    const candles = Array.from({ length: 8 }, (_, i) => i);

    const handleBlow = () => {
        if (!blown) setBlown(true);
    };

    return (
        <section className="py-16 relative z-10 overflow-hidden">
            <div className="max-w-md mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-2 text-rose-300 drop-shadow-md">18 سنة من النور ✨🎂</h2>
                <p className="text-xs text-slate-400 mb-8">نفسي أشوفك فرحانة دايمًا يا أيات 🥺❤️</p>

                <div className="relative inline-block">
                    {/* Glow behind cake */}
                    <div className="absolute -inset-20 bg-gradient-to-t from-rose-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                    <svg viewBox="0 0 400 420" className="w-72 h-80 mx-auto relative" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="cakeBase" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#fda4af"/>
                                <stop offset="100%" stopColor="#e11d48"/>
                            </linearGradient>
                            <linearGradient id="cakeMid" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#fecdd3"/>
                                <stop offset="100%" stopColor="#fb7185"/>
                            </linearGradient>
                            <linearGradient id="cakeTop" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#fff1f2"/>
                                <stop offset="100%" stopColor="#fda4af"/>
                            </linearGradient>
                            <linearGradient id="icing" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ffffff"/>
                                <stop offset="100%" stopColor="#fecdd3"/>
                            </linearGradient>
                            <linearGradient id="plate" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#e2e8f0"/>
                                <stop offset="100%" stopColor="#94a3b8"/>
                            </linearGradient>
                            <filter id="cakeShadow">
                                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#e11d48" floodOpacity="0.3"/>
                            </filter>
                            <filter id="candleGlow">
                                <feGaussianBlur stdDeviation="3" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id="flameGlow">
                                <feGaussianBlur stdDeviation="4" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Plate */}
                        <ellipse cx="200" cy="380" rx="170" ry="20" fill="url(#plate)" filter="url(#cakeShadow)"/>
                        <ellipse cx="200" cy="378" rx="160" ry="16" fill="#f1f5f9" opacity="0.5"/>

                        {/* Bottom tier */}
                        <rect x="80" y="300" width="240" height="80" rx="12" fill="url(#cakeBase)"/>
                        <rect x="80" y="300" width="240" height="8" rx="4" fill="url(#icing)" opacity="0.9"/>
                        {/* Icing drips bottom tier */}
                        <path d="M90,308 Q95,325 92,308" fill="white" opacity="0.7"/>
                        <path d="M130,308 Q135,330 128,308" fill="white" opacity="0.6"/>
                        <path d="M180,308 Q185,335 178,308" fill="white" opacity="0.7"/>
                        <path d="M230,308 Q235,328 228,308" fill="white" opacity="0.6"/>
                        <path d="M280,308 Q285,322 278,308" fill="white" opacity="0.7"/>
                        {/* Decorations bottom */}
                        <circle cx="110" cy="345" r="4" fill="#fbbf24" opacity="0.8"/>
                        <circle cx="150" cy="350" r="3" fill="#a78bfa" opacity="0.8"/>
                        <circle cx="200" cy="342" r="4" fill="#34d399" opacity="0.8"/>
                        <circle cx="250" cy="348" r="3" fill="#fbbf24" opacity="0.8"/>
                        <circle cx="290" cy="344" r="4" fill="#f472b6" opacity="0.8"/>
                        <circle cx="130" cy="358" r="3" fill="#60a5fa" opacity="0.7"/>
                        <circle cx="170" cy="360" r="2.5" fill="#f472b6" opacity="0.7"/>
                        <circle cx="220" cy="356" r="3" fill="#a78bfa" opacity="0.7"/>
                        <circle cx="270" cy="360" r="2.5" fill="#34d399" opacity="0.7"/>

                        {/* Middle tier */}
                        <rect x="115" y="220" width="170" height="80" rx="10" fill="url(#cakeMid)"/>
                        <rect x="115" y="220" width="170" height="7" rx="3" fill="url(#icing)" opacity="0.9"/>
                        {/* Icing drips middle tier */}
                        <path d="M125,227 Q130,248 123,227" fill="white" opacity="0.7"/>
                        <path d="M165,227 Q170,252 163,227" fill="white" opacity="0.6"/>
                        <path d="M200,227 Q205,256 198,227" fill="white" opacity="0.7"/>
                        <path d="M240,227 Q245,246 238,227" fill="white" opacity="0.6"/>
                        <path d="M270,227 Q275,240 268,227" fill="white" opacity="0.7"/>
                        {/* Decorations middle */}
                        <circle cx="145" cy="265" r="3" fill="#fbbf24" opacity="0.8"/>
                        <circle cx="185" cy="260" r="3.5" fill="#f472b6" opacity="0.8"/>
                        <circle cx="225" cy="268" r="3" fill="#34d399" opacity="0.8"/>
                        <circle cx="260" cy="262" r="2.5" fill="#60a5fa" opacity="0.7"/>

                        {/* Top tier */}
                        <rect x="148" y="150" width="104" height="70" rx="8" fill="url(#cakeTop)"/>
                        <rect x="148" y="150" width="104" height="6" rx="3" fill="url(#icing)" opacity="0.9"/>
                        {/* Icing drips top tier */}
                        <path d="M158,156 Q163,172 156,156" fill="white" opacity="0.8"/>
                        <path d="M185,156 Q190,178 183,156" fill="white" opacity="0.7"/>
                        <path d="M215,156 Q220,174 213,156" fill="white" opacity="0.8"/>
                        <path d="M240,156 Q245,168 238,156" fill="white" opacity="0.7"/>
                        {/* Strawberry on top */}
                        <ellipse cx="200" cy="148" rx="8" ry="6" fill="#ef4444"/>
                        <path d="M196,148 Q200,140 204,148" fill="#22c55e" opacity="0.9"/>

                        {/* Candles */}
                        {candles.map((_, i) => {
                            const startX = 140 + (i * 120 / 7);
                            const candleColors = ["#f472b6", "#60a5fa", "#a78bfa", "#34d399", "#fbbf24", "#fb923c"];
                            const color = candleColors[i % candleColors.length];
                            const stripe = i % 2 === 0;

                            return (
                                <g key={i}>
                                    {/* Candle body */}
                                    <rect x={startX - 2.5} y={118} width="5" height="32" rx="2" fill={color}/>
                                    {stripe && <rect x={startX - 2.5} y={124} width="5" height="4" fill="white" opacity="0.4"/>}
                                    {stripe && <rect x={startX - 2.5} y={134} width="5" height="4" fill="white" opacity="0.4"/>}

                                    {/* Flame */}
                                    {!blown && (
                                        <g filter="url(#flameGlow)">
                                            <ellipse cx={startX} cy={112} rx="3.5" ry="7" fill="#fbbf24" opacity="0.9">
                                                <animate attributeName="ry" values="7;5;7" dur="0.8s" repeatCount="indefinite"/>
                                                <animate attributeName="rx" values="3.5;2.5;3.5" dur="0.6s" repeatCount="indefinite"/>
                                            </ellipse>
                                            <ellipse cx={startX} cy={111} rx="2" ry="4" fill="#fff7ed" opacity="0.8">
                                                <animate attributeName="ry" values="4;3;4" dur="0.5s" repeatCount="indefinite"/>
                                            </ellipse>
                                        </g>
                                    )}

                                    {/* Smoke when blown */}
                                    {blown && (
                                        <g>
                                            <circle cx={startX} cy={110} r="2" fill="#94a3b8" opacity="0.5">
                                                <animate attributeName="cy" values="110;80;50" dur="1.5s" fill="freeze"/>
                                                <animate attributeName="opacity" values="0.5;0.3;0" dur="1.5s" fill="freeze"/>
                                                <animate attributeName="r" values="2;4;6" dur="1.5s" fill="freeze"/>
                                            </circle>
                                        </g>
                                    )}
                                </g>
                            );
                        })}

                        {/* "18" text on cake */}
                        <text x="200" y="268" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif" opacity="0.6">18</text>
                    </svg>
                </div>

                {!blown ? (
                    <button
                        onClick={handleBlow}
                        className="mt-6 bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-sm shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:shadow-[0_0_50px_rgba(225,29,72,0.7)] hover:scale-105 transition-all duration-300 active:scale-95 border border-rose-400/30"
                    >
                        🕯️ اطفي شمع 🕯️
                    </button>
                ) : showWish ? (
                    <div className="mt-6 animate-fade-in">
                        <p className="text-lg font-bold text-rose-300 drop-shadow-lg mb-2">❤️</p>
                        <p className="text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
                            كل سنة وأنتِ طيبة يا أيات 🎂❤️<br/>
                            ربنا يخليكي ويحقق كل أمنياتك 🥺✨
                        </p>
                        <div className="mt-4 flex justify-center gap-1">
                            {["🎉","🎊","🥳","🎂","❤️"].map((e, i) => (
                                <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>{e}</span>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
