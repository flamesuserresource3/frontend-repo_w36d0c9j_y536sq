import { Shield, Star, Sparkles } from 'lucide-react';

export default function Approach() {
  return (
    <section id="approach" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-gradient-to-tr from-zinc-50 to-white">
            <img
              src="https://images.unsplash.com/photo-1556228578-5ea7c6d7f8f0?q=80&w=1600&auto=format&fit=crop"
              alt="Serene treatment room"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm uppercase tracking-widest text-amber-700/80">Our Approach</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">Boutique medicine with scientific rigor</h2>
          <p className="mt-4 text-zinc-600">
            At Regeneratia Bali, we blend gold‑standard clinical protocols with a tranquil island setting. Your journey is guided by physicians and crafted to deliver subtle yet transformative results.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-zinc-900">Safety first</p>
                <p className="text-sm text-zinc-600">Evidence‑based care within a licensed medical facility.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                <Star className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-zinc-900">Exquisite comfort</p>
                <p className="text-sm text-zinc-600">Private suites, mindful hospitality, and serene spaces.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-zinc-900">Refined outcomes</p>
                <p className="text-sm text-zinc-600">Natural aesthetics that age gracefully with you.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
