import Heart from "../icons/Heart";
import { GIVER_NAME } from "../../utils/constants";

export default function PromiseSection() {
    return (
        <section className="py-10 relative z-10 bg-slate-900/40 backdrop-blur-sm">
            <div className="max-w-lg mx-auto px-4 text-center">
                <div className="bg-slate-900/60 p-5 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-rose-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
                    <div className="mb-3 text-rose-500 animate-bounce">
                        <Heart size={35} fill="currentColor" className="mx-auto" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-rose-300 drop-shadow-md">وعد من {GIVER_NAME} 💍</h2>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        "بوعدك يا أيات إني هفضل صاحبتك للأبد.. بوعدك إني هفضل أحبك أكتر من اليوم اللي قبله، وأكون دايماً جنبك في عز تعبك وفرحك.. لأنك مش بس صاحبتي، أنتي كل عيلتي وكل دنيتي."
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-700/50 font-script text-lg text-rose-400">
                        Best Friends Forever 🎂
                    </div>
                </div>
            </div>
        </section>
    );
}
