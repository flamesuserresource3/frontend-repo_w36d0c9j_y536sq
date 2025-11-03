import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 bg-[radial-gradient(ellipse_at_top_left,rgba(245,211,164,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(254,215,170,0.35),transparent_50%)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-amber-100/80 bg-white/80 backdrop-blur shadow-xl">
          <div className="grid lg:grid-cols-3">
            <div className="p-10 lg:col-span-2">
              <p className="text-sm uppercase tracking-widest text-amber-700/80">Begin with a private consultation</p>
              <h3 className="mt-2 text-3xl font-semibold text-zinc-900">Your personalized regeneration plan</h3>
              <p className="mt-3 text-zinc-600 max-w-xl">Share your goals and medical background. Our clinical team will design a bespoke program and guide your next steps.</p>
              <form className="mt-8 grid sm:grid-cols-2 gap-4">
                <input className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Full name" />
                <input type="email" className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Email address" />
                <input className="sm:col-span-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="What are your goals?" />
                <button type="button" className="sm:col-span-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-white font-medium shadow hover:shadow-md active:scale-[.99] transition">
                  Request Consultation
                </button>
              </form>
            </div>
            <div className="p-10 bg-gradient-to-b from-amber-50/70 to-white border-t lg:border-t-0 lg:border-l border-amber-100/80">
              <h4 className="font-medium text-zinc-900">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-700" /> +62 (0) 361 000 000</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-700" /> concierge@regeneratia.bali</li>
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-amber-700 mt-0.5" /> Jl. Seaside No. 8, Sanur, Bali</li>
              </ul>
              <div className="mt-8">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-amber-100/80">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
                    alt="Bali coastline near clinic"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 text-center text-xs text-zinc-500 border-t border-amber-100/80 bg-white/60">
            © {new Date().getFullYear()} Regeneratia Bali — All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
