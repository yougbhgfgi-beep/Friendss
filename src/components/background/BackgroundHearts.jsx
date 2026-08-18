import { useState, useEffect } from "react";
import Heart from "../icons/Heart";

export default function BackgroundHearts() {
    const [hearts, setHearts] = useState([]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random();
            const left = Math.random() * 100;
            const size = Math.random() * (30 - 15) + 15;
            const duration = Math.random() * (20 - 10) + 10;
            
            setHearts(prev => [...prev, { id, left, size, duration }]);
            
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== id));
            }, duration * 1000);
        }, 1500);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[45]">
            {hearts.map(h => (
                <div 
                    key={h.id} 
                    className="absolute bottom-[-50px] animate-drift"
                    style={{ 
                        left: `${h.left}%`, 
                        animationDuration: `${h.duration}s` 
                    }}
                >
                    <Heart size={h.size} fill="#fb7185" className="opacity-40" />
                </div>
            ))}
        </div>
    );
}
