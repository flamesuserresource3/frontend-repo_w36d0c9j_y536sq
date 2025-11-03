import { FlaskConical, Leaf, Shield, Sparkles, CheckCircle } from 'lucide-react';

const treatments = [
  {
    icon: FlaskConical,
    title: 'Autologous Stem Cell Therapy',
    desc: 'Personalized cellular rejuvenation using your own stem cells for natural, lasting results.',
  },
  {
    icon: Shield,
    title: 'Immune & Longevity Programs',
    desc: 'Clinically designed protocols to restore vitality, resilience, and metabolic balance.',
  },
  {
    icon: Sparkles,
    title: 'Aesthetic Regeneration',
    desc: 'Advanced skin resurfacing, bio-fillers, and regenerative facials with a luminous finish.',
  },
  {
    icon: Leaf,
    title: 'Holistic Detox & Recovery',
    desc: 'Nutraceuticals, IV therapy, and restorative care guided by comprehensive diagnostics.',
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-amber-700/80">Our Treatments</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">Regenerative medicine, elegantly delivered</h2>
          <p className="mt-3 text-zinc-600">Every program begins with comprehensive diagnostics and is crafted to your unique biology.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                <CheckCircle className="h-4 w-4 text-amber-600" /> Medical oversight
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
