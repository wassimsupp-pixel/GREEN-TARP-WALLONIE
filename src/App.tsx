/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Recycle, 
  Mail, 
  Phone, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Globe,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const ProductCard = ({ title, description, badge, icon: Icon, delay = 0 }: { 
  title: string; 
  description: string; 
  badge: string; 
  icon: any;
  delay?: number;
}) => (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-[40px] p-8 shadow-sm border border-gtw-olive/5 hover:shadow-md transition-all group flex flex-col h-full"
  >
    <div className="h-12 w-12 bg-gtw-light rounded-2xl mb-6 flex items-center justify-center">
      <Icon className="w-6 h-6 text-gtw-green" />
    </div>
    
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[10px] font-bold text-gtw-olive uppercase tracking-[0.2em]">
        {badge}
      </span>
    </div>

    <h3 className="text-2xl font-display font-semibold text-gtw-ink mb-3 group-hover:text-gtw-green transition-colors">
      {title}
    </h3>
    <p className="text-sm text-gtw-ink/60 leading-relaxed mb-6 flex-grow">
      {description}
    </p>

    <div className="pt-4 border-t border-gtw-light flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
      <span className="text-gtw-ink/40">Série Limitée</span>
      <a 
        href="#contact" 
        className="text-gtw-green flex items-center gap-1 hover:opacity-70 transition-opacity"
      >
        Détails →
      </a>
    </div>
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 border-b border-gtw-ink/10 py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gtw-green rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-gtw-light rotate-45" />
          </div>
          <div className="text-xl font-sans font-bold text-gtw-ink tracking-tighter uppercase">
            Green Tarp <span className="font-light opacity-60">Wallonie</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gtw-ink">
          <a href="#home" className="hover:opacity-50 transition-opacity">La Solution</a>
          <a href="#services" className="hover:opacity-50 transition-opacity">Réalisations</a>
          <a 
            href="#contact" 
            className="bg-gtw-green text-white px-8 py-3 rounded-full hover:bg-[#16422d] transition-all"
          >
            Demander un devis
          </a>
        </div>

        <button 
          className="md:hidden text-gtw-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-xl"
        >
          <div className="flex flex-col space-y-6 text-sm font-bold uppercase tracking-widest text-center">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Notre Solution</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gtw-green">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-16 px-12">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gtw-green/20 text-[10px] font-bold uppercase tracking-[0.2em] text-gtw-green"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-display font-normal text-gtw-ink leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const email = "green.tarp@compta.be";
  const phone = "+32 495 48 75 65";

  return (
    <div className="min-h-screen bg-gtw-light text-gtw-ink selection:bg-gtw-green/10 selection:text-gtw-green font-sans">
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="relative pt-48 pb-16 px-12 text-center overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gtw-green/20 text-[10px] font-bold uppercase tracking-[0.2em] text-gtw-green">
              Économie Circulaire & Solidaire
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-normal text-gtw-ink leading-[1.1] mb-8">
              Transformez vos bâches usagées<br/>
              en <span className="italic text-gtw-olive">accessoires d'exception.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gtw-ink/60 font-normal mb-12 leading-relaxed max-w-2xl mx-auto">
              Une revalorisation 100% locale en Wallonie qui allie impact environnemental <br/>
              positif et insertion socio-professionnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-gtw-green text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#16422d] transition-all"
              >
                Demander un devis
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center bg-transparent text-gtw-ink border border-gtw-ink/10 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gtw-ink/5 transition-all"
              >
                Découvrir
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats/Badges Row */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100">
          {[
            { label: "Production", value: "100% Belge" },
            { label: "Impact", value: "Zéro Déchet" },
            { label: "Soutien", value: "Emploi Social" },
            { label: "Qualité", value: "Premium" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-lg font-display font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <main id="services" className="py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Sacs de Voyage" 
              description="Conçus pour vos chauffeurs à partir de vos propres bâches de transport. Robustes, uniques et identitaires."
              badge="Collection Durable"
              icon={Briefcase}
              delay={0.1}
            />
            <ProductCard 
              title="Goodies RSE" 
              description="Pochettes, porte-clés et accessoires de bureau. Parfait pour vos cadeaux d'affaires et l'image de marque."
              badge="Sur Mesure"
              icon={ShieldCheck}
              delay={0.2}
            />
            <ProductCard 
              title="Service Façon" 
              description="Sous-traitance circulaire via nos ateliers ETA partenaires. Gardez le contrôle sur votre matière première."
              badge="Impact Social"
              icon={Globe}
              delay={0.3}
            />
          </div>
        </div>
      </main>

      {/* Values Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
                Pourquoi choisir Green Tarp Wallonie ?
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    title: "Solidité Industrielle", 
                    desc: "Nous utilisons des bâches de camion haute résistance, garantissant une longévité exceptionnelle.",
                    icon: ShieldCheck
                  },
                  { 
                    title: "Engagement Social", 
                    desc: "Chaque produit est assemblé dans des ateliers de travail adapté en Wallonie.",
                    icon: Recycle
                  },
                  { 
                    title: "Unique par essence", 
                    desc: "La patine de chaque bâche rend votre accessoire absolument unique au monde.",
                    icon: ArrowRight
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gtw-green/5 rounded-2xl flex items-center justify-center text-gtw-green">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gtw-green rounded-[4rem] rotate-3 overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/industrial-fabric/1000/1000" 
                  alt="Tarp recycling" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 border-4 border-dashed border-gtw-green/30 rounded-[4rem] -rotate-3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-12 bg-gtw-ink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-normal text-gtw-light mb-8">
            Réduisons ensemble <br/> votre empreinte carbone.
          </h2>
          <p className="text-gtw-light/50 text-lg mb-12">
            Transformez vos déchets en opportunités de communication responsable.
          </p>
          <a 
            href={`mailto:${email}`}
            className="inline-flex items-center bg-gtw-green text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#16422d] transition-all"
          >
            Lancer un projet
          </a>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gtw-ink pt-20 pb-16 px-12 text-gtw-light overflow-hidden relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Email</p>
                <p className="text-sm font-medium">{email}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Téléphone</p>
                <p className="text-sm font-medium">{phone}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Ateliers</p>
                <p className="text-sm font-medium">Namur & Charleroi, BE</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="inline-block px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em]">
                🇧🇪 Handcrafted in Wallonia
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
            <div className="text-xs font-medium">
              © {new Date().getFullYear()} Green Tarp Wallonie.
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <span>Économie Circulaire</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>Wallonie Durable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

