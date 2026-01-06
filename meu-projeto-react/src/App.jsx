import { useState } from "react";
import { motion } from "framer-motion";
import { CButton } from '@coreui/react';
import './assets/scss/style.scss';

export default function QualitysinLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "modulos", label: "Módulos" },
    { id: "ia", label: "Inteligência Artificial" },
    { id: "teste", label: "Teste Grátis" },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-content">
          <span className="logo">Qualitysin</span>

          <div className="links desktop-only">
            {sections.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`}>
                {sec.label}
              </a>
            ))}
          </div>

          <button className="menu-btn mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {sections.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} onClick={() => setMenuOpen(false)}>
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>A Plataforma Completa de Conformidade</h1>

          <p>
            Gestão eficiente, automações inteligentes e tudo o que sua empresa precisa para atender normas como ISO 9001, 14001, 45001 e OEA.
          </p>

          <CButton color="primary">Começar Agora</CButton>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <h2>Sobre o Qualitysin</h2>
          <p>
            O Qualitysin nasceu da necessidade das empresas de se adequarem às normas e certificações com mais eficiência e menos burocracia.
            Desenvolvido para otimizar processos, garantir conformidade e aprimorar a gestão documental, o sistema evoluiu para uma plataforma
            completa que atende diferentes setores e normas como ISO 9001, 14001, 45001 e OEA. Com uma interface intuitiva e funcionalidades
            personalizáveis, tornou-se um aliado essencial para empresas que buscam excelência e competitividade global.
          </p>
        </motion.div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="section modules">
        <h2>Módulos da Plataforma</h2>

        <div className="cards">
          {[
            "Gestão Documental",
            "Não Conformidades",
            "Riscos e Oportunidades",
            "Licenças e Certificações",
            "Indicadores",
            "Auditorias",
          ].map((mod, index) => (
            <motion.div
              key={mod}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{mod}</h3>
              <p>Explore processos avançados e recursos completos para sua gestão de conformidade.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTELIGÊNCIA ARTIFICIAL */}
      <section id="ia" className="section">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2>Inteligência Artificial no Qualitysin</h2>
          <p>
            A IA do Qualitysin foi desenvolvida para automatizar análises e auxiliar sua equipe com classificações inteligentes, triagem de dados
            e tomadas de decisão mais rápidas. Ela reduz o tempo gasto com tarefas operacionais, aumenta a produtividade e garante mais precisão
            na gestão dos processos.
          </p>
        </motion.div>
      </section>

      {/* TESTE GRÁTIS */}
      <section id="teste" className="section test-section">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Faça o Teste Grátis</h2>
          <p>
            Descubra como o Qualitysin pode transformar a conformidade e a gestão da sua empresa.
          </p>
          <CButton color="primary">Testar Gratuitamente</CButton>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Qualitysin. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
