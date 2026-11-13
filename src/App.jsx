import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Bike,
  ShieldCheck,
  Gauge,
  Info,
} from 'lucide-react'
import './App.css'

const motorcycles = [
  {
    name: 'Sportster S',
    category: 'SPORT',
    description: 'Visual agressivo, motor Revolution Max 1250T e uma proposta esportiva para a estrada.',
    image: 'https://www.harley-davidson.com/ctfasset/5vy1mse9fkav/1rid9kWGw78cVvzXpnGGim/b672e6ddf9992b3e1880ad3fc15583f1/2026-sportster-s-riding-ls-2.jpg',
    link: 'https://www.harley-davidson.com/br/pt/motorcycles/sportster-s.html',
    number: '01',
  },
  {
    name: 'Fat Boy',
    category: 'CRUISER',
    description: 'Silhueta robusta, pneus largos e o visual clássico que tornou a Fat Boy inconfundível.',
    image: 'https://images.ctfassets.net/5vy1mse9fkav/38TxLBTEB4LECGAlkRZcD1/27db5985f35bd8ba31c2b454442b33c1/2025-fat-boy-gallery-2.jpg',
    link: 'https://www.harley-davidson.com/br/pt/motorcycles/fat-boy.html',
    number: '02',
  },
  {
    name: 'Street Glide',
    category: 'GRAND AMERICAN TOURING',
    description: 'Conforto para longas distâncias, carenagem Batwing e tecnologia para viajar mais longe.',
    image: 'https://www.harley-davidson.com/ctfasset/5vy1mse9fkav/2OqWJm3aDuf3vaugwMx839/c5ce4997d9f05474f8cb891d65409f84/2026-street-glide-riding-ls-1.jpg',
    link: 'https://www.harley-davidson.com/br/pt/motorcycles/street-glide.html',
    number: '03',
  },
]

const technicalSpecs = [
  {
    name: 'Sportster S',
    category: 'Performance Cruiser',
    engine: 'Revolution Max™ 1250T',
    displacement: '1.252 cm³',
    power: '119 cv (89 kW) @ 7.250 rpm',
    torque: '118 Nm @ 6.750 rpm',
    seatHeight: '765 mm',
    weight: '228 kg',
    description: 'A Sportster S 2026 reinventa o estilo clássico com motor refrigerado a líquido, pneu dianteiro largo e uma proposta moderna e precisa. Ágil, potente e feita para ir mais longe.',
  },
  {
    name: 'Fat Boy',
    category: 'Custom Cruiser',
    engine: 'Milwaukee-Eight™ 117 Customizado',
    displacement: '1.923 cm³',
    power: '106 cv (79 kW) @ 5.020 rpm',
    torque: '169 Nm @ 3.500 rpm',
    seatHeight: '675 mm',
    weight: '315 kg',
    description: 'Presença imponente, rodas Lakester icônicas e pneus largos. A Fat Boy 2026 é ousada por design — uma lenda americana que faz de cada chegada um acontecimento.',
  },
  {
    name: 'Street Glide',
    category: 'Grand American Touring',
    engine: 'Milwaukee-Eight™ 117',
    displacement: '1.923 cm³',
    power: '107 cv (80 kW) @ 5.020 rpm',
    torque: '177 Nm @ 3.500 rpm',
    seatHeight: '715 mm',
    weight: '368 kg',
    description: 'Conforto e tecnologia para longas distâncias. Carenagem Batwing redesenhada, tela Skyline™ OS e o desempenho confiável do Milwaukee-Eight 117.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="header">
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <span className="brand-mark">H</span>
          <span className="brand-name">HARLEY<span>DAVIDSON</span></span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>INÍCIO</a>
          <a href="#modelos" onClick={closeMenu}>MOTOCICLETAS</a>
          <a href="#fichas-tecnicas" onClick={closeMenu}>FICHAS TÉCNICAS</a>
          <a href="#historia" onClick={closeMenu}>HISTÓRIA</a>
          <a href="#galeria" onClick={closeMenu}>GALERIA</a>
        </nav>
        <a href="#modelos" className="header-button">EXPLORAR MODELOS <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div className="hero-label" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span /> LIBERDADE SOBRE DUAS RODAS
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            NASCIDA PARA<br /><span>IR ALÉM.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
            Mais que motocicletas. Uma história de liberdade, personalidade e paixão pela estrada.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <a href="#modelos" className="button-primary">CONHEÇA AS MOTOS <ArrowRight size={18} /></a>
            <a href="#historia" className="button-secondary">CONHEÇA A HISTÓRIA</a>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span>EST. 1903 — MILWAUKEE, USA</span>
          <a href="#modelos">ROLE PARA EXPLORAR <ChevronDown size={16} /></a>
          <span className="hero-index">01 / 05</span>
        </div>
      </section>

      <section className="intro-section">
        <motion.div className="intro-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">UMA MARCA. UMA HISTÓRIA.</span>
          <h2>NÃO É APENAS UMA MOTO.<br /><span>É UM ESTILO DE VIDA.</span></h2>
        </motion.div>
        <motion.div className="intro-description" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>Desde 1903, a Harley-Davidson constrói uma trajetória marcada pela inovação, pelo espírito de liberdade e pela paixão por motocicletas.</p>
          <a href="#historia" className="text-link">DESCUBRA NOSSA HISTÓRIA <ArrowUpRight size={17} /></a>
        </motion.div>
      </section>

      <section className="models-section" id="modelos">
        <div className="section-top">
          <div>
            <span className="section-label">EXPLORE O UNIVERSO HARLEY</span>
            <h2>MODELOS EM <span>DESTAQUE.</span></h2>
          </div>
          <span className="section-count">01 — 03</span>
        </div>
        <div className="motorcycle-grid">
          {motorcycles.map((bike, index) => (
            <motion.article
              className="motorcycle-card"
              key={bike.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bike-image">
                <img src={bike.image} alt={`Motocicleta ${bike.name}`} loading="lazy" />
                <span className="bike-number">{bike.number}</span>
                <span className="bike-category">{bike.category}</span>
              </div>
              <div className="bike-info">
                <div>
                  <h3>{bike.name}</h3>
                  <p>{bike.description}</p>
                </div>
                <a href={bike.link} target="_blank" rel="noreferrer" aria-label={`Ver detalhes oficiais da ${bike.name}`}>
                  <ArrowUpRight size={21} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="catalog-note">Modelos apresentados como destaques. Informações técnicas detalhadas na seção a seguir.</p>
      </section>

      <section className="specs-section" id="fichas-tecnicas">
        <div className="section-top">
          <div>
            <span className="section-label">DADOS OFICIAIS</span>
            <h2>FICHAS <span>TÉCNICAS.</span></h2>
          </div>
          <Info size={24} className="specs-icon" />
        </div>
        <div className="specs-grid">
          {technicalSpecs.map((bike, index) => (
            <motion.article
              className="specs-card"
              key={bike.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="specs-card-header">
                <span className="specs-category">{bike.category}</span>
                <h3>{bike.name}</h3>
              </div>
              <p className="specs-short-desc">{bike.description}</p>
              <div className="specs-data">
                <div className="spec-row"><span className="spec-label">Motor</span><span className="spec-value">{bike.engine}</span></div>
                <div className="spec-row"><span className="spec-label">Cilindrada</span><span className="spec-value">{bike.displacement}</span></div>
                <div className="spec-row"><span className="spec-label">Potência</span><span className="spec-value">{bike.power}</span></div>
                <div className="spec-row"><span className="spec-label">Torque</span><span className="spec-value">{bike.torque}</span></div>
                <div className="spec-row"><span className="spec-label">Altura do assento</span><span className="spec-value">{bike.seatHeight}</span></div>
                <div className="spec-row"><span className="spec-label">Peso (ordem de marcha)</span><span className="spec-value">{bike.weight}</span></div>
              </div>
              <a href={motorcycles[index].link} target="_blank" rel="noreferrer" className="specs-link">
                Ver página oficial <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
        <p className="specs-note">Ⓡ Especificações técnicas baseadas nos dados oficiais da Harley-Davidson Brasil — modelos 2026. Sujeito a alterações sem aviso prévio.</p>
      </section>

      <section className="heritage-section" id="historia">
        <div className="heritage-image">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85"
            alt="Motocicleta em uma estrada"
            loading="lazy"
          />
          <span className="heritage-image-caption">A ESTRADA FAZ PARTE DA HISTÓRIA.</span>
        </div>
        <motion.div className="heritage-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">DESDE 1903</span>
          <h2>MAIS DE UM SÉCULO DE <span>LIBERDADE.</span></h2>
          <p>Fundada em Milwaukee, nos Estados Unidos, a Harley-Davidson transformou sua paixão por motocicletas em uma das marcas mais reconhecidas da história do motociclismo.</p>
          <p>Sua trajetória é construída por gerações de motociclistas, modelos marcantes e uma identidade que ultrapassa as estradas.</p>
          <a href="#galeria" className="button-primary">EXPLORE A GALERIA <ArrowRight size={18} /></a>
        </motion.div>
      </section>

      <section className="values-section">
        <motion.div className="values-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">O QUE DEFINE A MARCA</span>
          <h2>FEITA PARA <span>MARCAR.</span></h2>
        </motion.div>
        <div className="values-grid">
          <div className="value-card"><Bike size={30} /><h3>PERSONALIDADE</h3><p>Design marcante e uma identidade reconhecida mundialmente.</p></div>
          <div className="value-card"><ShieldCheck size={30} /><h3>TRADIÇÃO</h3><p>Uma história que atravessa gerações de motociclistas.</p></div>
          <div className="value-card"><Gauge size={30} /><h3>DESEMPENHO</h3><p>Engenharia e tecnologia aplicadas ao universo das motocicletas.</p></div>
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="section-top">
          <div>
            <span className="section-label">IMAGENS QUE INSPIRAM</span>
            <h2>ESPÍRITO DE <span>ESTRADA.</span></h2>
          </div>
          <Bike size={24} className="gallery-icon" />
        </div>
        <div className="gallery-grid">
          <motion.div className="gallery-item gallery-large" whileHover={{ scale: 1.02 }}>
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85" alt="Motocicleta em destaque" loading="lazy" />
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.02 }}>
            <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85" alt="Detalhes de motocicleta" loading="lazy" />
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.02 }}>
            <img src="https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=900&q=85" alt="Motocicleta na estrada" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="closing-section">
        <span className="section-label">THE ROAD IS YOURS</span>
        <h2>A LIBERDADE NÃO TEM <span>DESTINO.</span></h2>
        <a href="#inicio" className="button-primary">VOLTAR AO INÍCIO <ArrowUpRight size={18} /></a>
      </section>

      <footer className="footer">
        <a href="#inicio" className="brand footer-brand">
          <span className="brand-mark">H</span>
          <span className="brand-name">HARLEY<span>DAVIDSON</span></span>
        </a>
        <p>Projeto independente, desenvolvido para fins informativos e educacionais. Não possui vínculo oficial com a Harley-Davidson.</p>
        <span className="footer-copy">© {new Date().getFullYear()} — PROJETO INDEPENDENTE</span>
      </footer>
    </main>
  )
}

export default App
