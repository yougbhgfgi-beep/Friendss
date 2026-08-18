import Heart from "../icons/Heart";
import { POEM_LINES } from "../../utils/constants";

export default function PoemSection() {
    return (
        <section className="py-10 relative z-10 bg-slate-900/60 backdrop-blur-md border-y border-rose-900/40 mt-4">
            <div className="max-w-lg mx-auto px-4 text-center">
                <Heart size={30} fill="#f43f5e" className="text-rose-500 mx-auto mb-4 animate-pulse drop-shadow-[0_0_15px_rgba(225,29,72,0.8)]" />
                <h2 className="text-lg font-script text-rose-300 mb-4 leading-loose drop-shadow-md">
                    {POEM_LINES.map((line, i) => (
                        <span key={i}>{line}<br/></span>
                    ))}
                </h2>
                <p className="text-sm text-slate-400 font-medium mt-3">- كلمات من القلوب لصاحبتها -</p>
            </div>
        </section>
    );
}
