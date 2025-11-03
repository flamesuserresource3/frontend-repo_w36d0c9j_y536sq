import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
