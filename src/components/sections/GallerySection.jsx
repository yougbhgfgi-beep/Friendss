import { useState } from "react";
import { GALLERY_IMAGES } from "../../utils/constants";

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-24 relative z-10 bg-slate-900/30 border-y border-slate-800/50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-rose-300 drop-shadow-md">صورنا الحلوة 📸</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div 
                            key={i} 
                            onClick={() => setSelectedImage(img.src)}
                            className="group cursor-pointer rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-slate-800 hover:border-rose-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img 
                                    src={img.src} 
                                    alt={img.caption}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="bg-slate-900/80 p-3">
                                <p className="text-rose-300 text-sm font-medium">{img.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-rose-400 transition-colors z-50"
                        onClick={() => setSelectedImage(null)}
                    >×</button>
                    <img 
                        src={selectedImage} 
                        alt="expanded" 
                        className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border-4 border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
