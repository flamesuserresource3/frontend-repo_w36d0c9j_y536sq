import { ArrowRight, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-amber-300/40 to-amber-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-rose-300/30 to-amber-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-700/80 bg-amber-50 border border-amber-100 rounded-full px-3 py-1">
            <Star className="h-3 w-3" /> Regenerative Luxury
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-zinc-900">
            Regeneratia Bali — where science meets timeless beauty
          </h1>
          <p className="mt-5 text-lg text-zinc-600 max-w-xl">
            A sanctuary for advanced stem cell therapies and aesthetic medicine. Discover elegant, evidence‑based treatments tailored to your biology.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow hover:shadow-md active:scale-[.99] transition">
              Begin Your Journey <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#treatments" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/80 border border-zinc-200 text-zinc-800 hover:bg-white">
              Explore Treatments
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-zinc-600">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-amber-600" /> Medical-grade protocols</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-600" /> Boutique experience</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-gradient-to-br from-zinc-50 to-white">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury clinic interior"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/60 rounded-2xl px-4 py-3 shadow-md">
            <p className="text-xs text-zinc-600">Bali, Indonesia</p>
            <p className="text-sm font-medium text-zinc-900">Private Waterfront Pavilion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
