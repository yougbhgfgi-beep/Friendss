import { useState, useEffect, useRef } from "react";
import { LOVE_START_DATE, PLAYLIST, LOVE_MESSAGES, RECEIVER_NAME, PASSWORD_DAY, PASSWORD_MONTH, PASSWORD_YEAR, LOGIN_ERROR, LOGIN_BUTTON, LOGIN_TITLE, LOGIN_HINT } from "./utils/constants";
import { playBeep } from "./utils/audio";
import Heart from "./components/icons/Heart";
import BackgroundHearts from "./components/background/BackgroundHearts";
import HeroSection from "./components/sections/HeroSection";
import TimelineSection from "./components/sections/TimelineSection";
import VideoSection from "./components/sections/VideoSection";
import WhySpecialSection from "./components/sections/WhySpecialSection";
import PoemSection from "./components/sections/PoemSection";
import PromiseSection from "./components/sections/PromiseSection";
import FriendshipMeter from "./components/ui/FriendshipMeter";
import TimeBox from "./components/ui/TimeBox";
import MemoryGame from "./components/ui/MemoryGame";
import MusicPlayer from "./components/ui/MusicPlayer";
import MiniMessages from "./components/modals/MiniMessages";
import EnvelopeMessage from "./components/modals/EnvelopeMessage";
import BotChat from "./components/modals/BotChat";
import FinalScene from "./components/modals/FinalScene";
import SecretPopup from "./components/modals/SecretPopup";

export default function LoveWebsite() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [passDay, setPassDay] = useState("");
    const [passMonth, setPassMonth] = useState("");
    const [passYear, setPassYear] = useState("");
    const [showLetter, setShowLetter] = useState(false);
    const [showSecret, setShowSecret] = useState(false);
    const [showFinalScene, setShowFinalScene] = useState(false);
    const [timeTogether, setTimeTogether] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeNotification, setActiveNotification] = useState(null);
    const [clickHearts, setClickHearts] = useState([]);
    const audioRef = useRef(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        if (isLogged && isPlaying && audioRef.current) {
            audioRef.current.play().catch(e => console.log(e));
        }
    }, [currentSongIndex]);
    
    const handleSongEnd = () => {
        setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
    };

    useEffect(() => {
        const handleClick = (e) => {
            const id = Date.now() + Math.random();
            setClickHearts(prev => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setClickHearts(prev => prev.filter(h => h.id !== id));
            }, 1000);
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 4500);
    }, []);

    useEffect(() => {
        if (isLogged && !isLoading) {
            const notifyInt = setInterval(() => {
                const randomMsg = LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];
                setActiveNotification(randomMsg);
                playBeep();
                setTimeout(() => setActiveNotification(null), 4000);
            }, 10000);
            return () => clearInterval(notifyInt);
        }
    }, [isLogged, isLoading]);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const birthDate = new Date("2007-08-29T00:00:00");
            let years = now.getFullYear() - birthDate.getFullYear();
            let months = now.getMonth() - birthDate.getMonth();
            let days = now.getDate() - birthDate.getDate();
            
            if (days < 0) {
                months--;
                const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += lastMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }
            
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            
            setTimeTogether({ years, months, days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleLogin = () => {
        if (passDay === PASSWORD_DAY && passMonth === PASSWORD_MONTH && passYear === PASSWORD_YEAR) {
            setIsLogged(true);
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play().catch(e => console.log("Audio play blocked", e));
                    setIsPlaying(true);
                }
                setShowLetter(true);
            }, 500);
        } else {
            alert(LOGIN_ERROR);
        }
    };

    const toggleAudio = () => {
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const handleVideoPlay = () => {
        if (audioRef.current && isPlaying) {
            audioRef.current.pause();
        }
    };

    const handleVideoPause = () => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play();
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white relative overflow-hidden z-50">
                <div className="absolute inset-0 flex justify-center items-center opacity-10">
                    <Heart size={200} fill="#f43f5e" className="animate-pulse-slow" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <div className="w-14 h-14 mb-4 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
                    <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-600 font-script">جارٍ تحضير المفاجأة...</h2>
                    <p className="text-sm text-slate-300 font-medium animate-pulse mt-2">أيام قليلة وتشوفي أحلى هدية 🎂❤️</p>
                    <p className="text-xs text-slate-400 mt-1">بنجهزلك المفاجأة يا قمر ثواني...</p>
                </div>
            </div>
        );
    }

    if (!isLogged) {
        return (
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="star absolute bg-white rounded-full" style={{
                        width: Math.random() * 3 + 'px', 
                        height: Math.random() * 3 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animationDelay: Math.random() * 3 + 's'
                    }}></div>
                ))}
                <video autoPlay muted loop playsInline className="video-bg">
                    <source src="./video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/90 backdrop-blur-sm"></div>

                <div className="relative z-10 chic-login-card p-6 rounded-3xl text-center text-white max-w-sm w-[90%] overflow-hidden group border-t border-l border-white/20">
                   <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-all duration-700"></div>
                   <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-700"></div>
                   
                    <div className="mb-6 flex justify-center scale-110">
                        <div className="bg-white/10 p-3 rounded-full animate-float shadow-[0_0_30px_rgba(251,113,133,0.4)]">
                            <Heart className="text-rose-400" size={35} fill="#f43f5e" />
                        </div>
                    </div>
                    
                    <h1 className="text-xl font-extrabold mb-2 font-sans tracking-tight text-white drop-shadow-2xl">{LOGIN_TITLE}</h1>
                    <p className="text-slate-300 mb-4 font-medium text-xs">{LOGIN_HINT}</p>
                    
                    <div className="flex gap-2 mb-5">
                        <div className="relative flex-1">
                            <input
                                type="password"
                                placeholder="يوم"
                                maxLength={2}
                                value={passDay}
                                onChange={(e) => setPassDay(e.target.value)}
                                className="fancy-input w-full p-3 rounded-2xl text-white placeholder-slate-400 text-center text-sm outline-none shadow-inner"
                            />
                        </div>
                        <div className="flex items-center text-slate-500 text-lg font-bold">/</div>
                        <div className="relative flex-1">
                            <input
                                type="password"
                                placeholder="شهر"
                                maxLength={2}
                                value={passMonth}
                                onChange={(e) => setPassMonth(e.target.value)}
                                className="fancy-input w-full p-3 rounded-2xl text-white placeholder-slate-400 text-center text-sm outline-none shadow-inner"
                            />
                        </div>
                        <div className="flex items-center text-slate-500 text-lg font-bold">/</div>
                        <div className="relative flex-1">
                            <input
                                type="password"
                                placeholder="سنة"
                                maxLength={4}
                                value={passYear}
                                onChange={(e) => setPassYear(e.target.value)}
                                className="fancy-input w-full p-3 rounded-2xl text-white placeholder-slate-400 text-center text-sm outline-none shadow-inner"
                            />
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleLogin} 
                        className="w-full bg-gradient-to-r from-rose-600 to-indigo-700 text-white font-bold py-3 rounded-2xl shadow-[0_10px_40px_rgba(225,29,72,0.4)] hover:shadow-[0_15px_60px_rgba(225,29,72,0.6)] hover:scale-[1.03] transition-all duration-300 text-sm border-t border-white/20 active:scale-95"
                    >
                        {LOGIN_BUTTON}
                    </button>
                    
                    <div className="mt-5 text-white/30 text-[10px] font-medium tracking-widest uppercase">Happy Birthday 🎂</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-slate-100 relative bg-slate-950 transition-colors duration-1000 overflow-hidden">
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0"></div>
            {[...Array(60)].map((_, i) => (
                 <div key={`star${i}`} className="star absolute bg-white/70 rounded-full z-0" style={{
                     width: Math.random() * 2 + 1 + 'px', 
                     height: Math.random() * 2 + 1 + 'px',
                     top: Math.random() * 100 + 'vh',
                     left: Math.random() * 100 + 'vw',
                     animationDelay: Math.random() * 3 + 's',
                     animationDuration: Math.random() * 4 + 2 + 's'
                 }}></div>
            ))}
            {[...Array(4)].map((_, i) => (
                 <div key={`shooting${i}`} className="shooting-star z-0" style={{
                     top: Math.random() * 40 + 'vh',
                     left: Math.random() * 40 + 60 + 'vw',
                     animationDelay: Math.random() * 10 + 's'
                 }}></div>
            ))}
            
            {clickHearts.map(h => (
                <div key={h.id} className="click-heart" style={{ left: h.x - 14, top: h.y - 14 }}>🎂</div>
            ))}

            <audio 
                ref={audioRef} 
                src={PLAYLIST[currentSongIndex]} 
                onEnded={handleSongEnd}
                loop
            />
            <BackgroundHearts />
            
            {activeNotification && (
                <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] w-[90%] notification-anim">
                    <div className="bg-slate-900/80 backdrop-blur-xl border border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.3)] text-rose-100 px-3 py-2 rounded-xl flex items-center justify-between gap-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                        <span className="bg-rose-500/20 p-1 rounded-full text-sm z-10">🔔</span>
                        <p className="font-bold text-xs text-center flex-1 z-10">{activeNotification}</p>
                        <Heart size={14} fill="#f43f5e" className="text-rose-500 animate-pulse z-10" />
                    </div>
                </div>
            )}
            
            {isLogged && (
                <MusicPlayer 
                    isPlaying={isPlaying} 
                    onToggle={toggleAudio}
                />
            )}

            {showSecret && <SecretPopup onClose={() => setShowSecret(false)} />}

            {showLetter && <EnvelopeMessage onClose={() => setShowLetter(false)} />}
            <MiniMessages />
            <BotChat />

            <HeroSection onSecretClick={() => setShowSecret(true)} />
            <TimelineSection />
            <VideoSection onVideoPlay={handleVideoPlay} onVideoPause={handleVideoPause} />
            <WhySpecialSection />
            <PoemSection />
            <PromiseSection />
            <MemoryGame />
            <FriendshipMeter />

            <section className="py-10 text-center px-4 relative z-10">
                <h2 className="text-lg font-bold mb-6 text-rose-300 drop-shadow-md">من يوم ما اتولدتِ وأنتِ نور عيني 🎂✨</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
                    <TimeBox label="سنين" value={timeTogether.years} />
                    <TimeBox label="شهور" value={timeTogether.months} />
                    <TimeBox label="أيام" value={timeTogether.days} />
                    <TimeBox label="ساعات" value={timeTogether.hours} />
                    <TimeBox label="دقائق" value={timeTogether.minutes} />
                    <TimeBox label="ثواني" value={timeTogether.seconds} />
                </div>
            </section>

            <footer className="py-10 text-center border-t border-slate-800/50 relative z-10">
                <p className="text-lg font-script text-rose-400 mb-6 px-4 italic drop-shadow-lg">Happy Birthday Ayat 🎂</p>
                <button onClick={() => setShowFinalScene(true)} className="glow-btn bg-gradient-to-br from-rose-600 via-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full text-sm font-bold hover:scale-110 transition-all shadow-[0_0_30px_rgba(225,29,72,0.6)] active:scale-95 border-2 border-rose-300/30 relative overflow-hidden group">
                   <span className="relative z-10">المفاجأة الأخيرة 🎁✨</span>
                </button>
            </footer>

            {showFinalScene && <FinalScene onClose={() => setShowFinalScene(false)} />}
        </div>
    );
}
