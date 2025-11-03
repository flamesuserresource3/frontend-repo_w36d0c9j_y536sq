import { useState } from 'react';
import { Sparkles, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide text-zinc-900">Regeneratia Bali</p>
            <p className="text-xs text-zinc-600">Stem Cell & Aesthetic Clinic</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm shadow-sm hover:shadow md:active:scale-[.99] transition">
            <Phone className="h-4 w-4" /> Book Consult
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-md border border-zinc-200" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/50 bg-white/80">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-zinc-800">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm shadow-sm">
              <Phone className="h-4 w-4" /> Book Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
