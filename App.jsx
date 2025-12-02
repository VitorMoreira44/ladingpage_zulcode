import React, { useEffect } from "react";

function App() {
  // Função para scroll suave
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: top, behavior: "smooth" });
  };

  // Função para clique nas linguagens
  const handleLanguageClick = (e) => {
    const item = e.currentTarget;
    const originalBg = item.style.background;
    item.style.background = "#1e2633";
    setTimeout(() => {
      item.style.background = originalBg || "";
    }, 500);
  };

  // Função para inscrição
  const handleStartSubscription = () => {
    alert("Iniciar fluxo de inscrição ZulCode (simulação).");
  };

  // Efeitos de animação
  useEffect(() => {
    // Animação de fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Animações dos skeletons
    const skeletons = document.querySelectorAll(".esqueleto");
    skeletons.forEach((skeleton, index) => {
      skeleton.style.animationDelay = `${index * 0.1}s`;
    });

    return () => observer.disconnect();
  }, []);

  // Dados das linguagens
  const languages = [
    {
      name: "Python",
      logo: "https://ext.same-assets.com/1956114952/4064110058.svg",
    },
    {
      name: "HTML",
      logo: "https://ext.same-assets.com/1956114952/701384711.svg",
    },
    {
      name: "JavaScript",
      logo: "https://ext.same-assets.com/1956114952/75776152.svg",
    },
    {
      name: "Java",
      logo: "https://ext.same-assets.com/1956114952/1099217744.svg",
    },
    {
      name: "C++",
      logo: "https://ext.same-assets.com/1956114952/1580506204.svg",
    },
    {
      name: "SQL",
      logo: "https://ext.same-assets.com/1956114952/337484412.svg",
    },
    {
      name: "C",
      logo: "https://ext.same-assets.com/1956114952/3767164794.svg",
    },
    {
      name: "CSS",
      logo: "https://ext.same-assets.com/1956114952/2127960631.svg",
    },
    {
      name: "C#",
      logo: "https://ext.same-assets.com/1956114952/2414291000.svg",
    },
    {
      name: "PHP",
      logo: "https://ext.same-assets.com/1956114952/3686881082.svg",
    },
    {
      name: "Dart",
      logo: "https://ext.same-assets.com/1956114952/1675983535.svg",
    },
  ];

  // Dados do rodapé
  const footerSections = [
    {
      title: "ZulCode",
      links: ["Cursos", "Missão", "Método de Ensino", "Certificação"],
    },
    {
      title: "Comunidade",
      links: ["Blog ZulCode", "Suporte", "Central de Ajuda"],
    },
    {
      title: "Aplicativos",
      links: ["ZulCode para Android", "ZulCode para iOS"],
    },
    { title: "Redes sociais", links: ["Instagram", "TikTok", "YouTube"] },
  ];

  return (
    <>
      <style jsx global>{`
        /* --- Reset / Base --- */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          height: 100%;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        body {
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #e6edf3;
          background: #0b0f15;
          line-height: 1.4;
          font-size: 14px;
        }

        @media (min-width: 768px) {
          body {
            font-size: 16px;
          }
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #1183ff;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        button {
          font-family: inherit;
          cursor: pointer;
          outline: none;
        }

        b {
          font-weight: 800;
        }

        /* --- Layout & Containers --- */
        .zulcode-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 16px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .zulcode-container {
            padding: 0 20px;
          }
        }

        main.min-h-screen {
          min-height: 100vh;
        }

        /* --- Cabeçalho (Header) --- */
        .zulcode-cabecalho {
          position: sticky;
          top: 0;
          z-index: 60;
          background: rgba(11, 15, 21, 0.95);
          border-bottom: 1px solid #0d1133;
          backdrop-filter: blur(4px);
          color: #1183ff;
          font-family: "Rubik", sans-serif;
          font-size: 20px;
          font-weight: 800;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .zulcode-cabecalho {
            font-size: 28px;
          }
        }

        .cabecalho-interno {
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .cabecalho-interno {
            height: 64px;
          }
        }

        .botao-principal {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          background: #1183ff;
          color: #fff;
          transition: all 0.3s ease;
          font-size: 12px;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .botao-principal {
            border-radius: 12px;
            padding: 0.6rem 1.25rem;
            font-size: 14px;
          }
        }

        .botao-principal:hover {
          background: #0a488c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(17, 131, 255, 0.3);
        }

        /* --- Hero --- */
        .zulcode-hero {
          padding: 40px 0 32px;
        }

        @media (min-width: 768px) {
          .zulcode-hero {
            padding: 88px 0 48px;
          }
        }

        @media (min-width: 1024px) {
          .zulcode-hero {
            padding: 120px 0 56px;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
        }

        .hero-titulo {
          font-size: 24px;
          font-weight: 800;
          color: #e6edf3;
          margin-bottom: 16px;
          text-align: center;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .hero-titulo {
            font-size: 32px;
          }
        }

        @media (min-width: 1024px) {
          .hero-titulo {
            font-size: 48px;
            text-align: left;
          }
        }

        .hero-subtitulo {
          color: #d7dadf;
          margin-bottom: 16px;
          font-size: 14px;
          text-align: center;
          line-height: 1.5;
          padding: 0 8px;
        }

        @media (min-width: 768px) {
          .hero-subtitulo {
            font-size: 16px;
            line-height: 1.6;
            padding: 0;
          }
        }

        @media (min-width: 1024px) {
          .hero-subtitulo {
            text-align: left;
            font-size: 18px;
          }
        }

        .hero-ilustracao {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }

        .botoes-acao {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 12px;
          padding: 0 8px;
        }

        @media (min-width: 768px) {
          .botoes-acao {
            gap: 12px;
            padding: 0;
          }
        }

        @media (min-width: 1024px) {
          .botoes-acao {
            justify-content: flex-start;
          }
        }

        .link-fantasma {
          color: #1cb0f6;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          transition: color 0.3s;
        }

        .link-fantasma:hover {
          color: #0a488c;
        }

        /* --- Linguagens --- */
        .languages-scroll {
          display: flex;
          gap: 8px;
          align-items: center;
          overflow-x: auto;
          padding: 6px 10px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        @media (min-width: 768px) {
          .languages-scroll {
            gap: 12px;
          }
        }

        .languages-scroll::-webkit-scrollbar {
          display: none;
        }

        .linguagem-item {
          display: flex;
          gap: 8px;
          align-items: center;
          color: white;
          white-space: nowrap;
          font-weight: 700;
          cursor: pointer;
          padding: 4px 6px;
          transition: all 0.3s;
          border-radius: 6px;
          flex-shrink: 0;
          font-size: 12px;
        }

        @media (min-width: 768px) {
          .linguagem-item {
            gap: 12px;
            padding: 6px 8px;
            border-radius: 8px;
            font-size: 14px;
          }
        }

        .linguagem-item:hover {
          background: #1e2633;
          transform: translateY(-2px);
        }

        .linguagem-item img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .linguagem-item img {
            width: 32px;
            height: 32px;
          }
        }

        /* --- Seção de Aprendizado --- */
        .secao-aprendizado {
          background: #192b45;
          padding: 40px 0;
          color: white;
        }

        @media (min-width: 768px) {
          .secao-aprendizado {
            padding: 56px 0;
          }
        }

        .aprendizado-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
        }

        @media (min-width: 768px) {
          .aprendizado-grid {
            gap: 28px;
          }
        }

        @media (min-width: 1024px) {
          .aprendizado-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .aprendizado-titulo {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 16px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .aprendizado-titulo {
            font-size: 28px;
          }
        }

        @media (min-width: 1024px) {
          .aprendizado-titulo {
            font-size: 32px;
            text-align: left;
          }
        }

        .aprendizado-texto {
          font-size: 14px;
          color: #d7dadf;
          line-height: 1.6;
          text-align: center;
          padding: 0 8px;
        }

        @media (min-width: 768px) {
          .aprendizado-texto {
            font-size: 16px;
            padding: 0;
          }
        }

        @media (min-width: 1024px) {
          .aprendizado-texto {
            text-align: left;
          }
        }

        /* --- Card de Código --- */
        .card-codigo {
          background: #1e293b;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(2, 6, 23, 0.25);
          overflow: hidden;
          max-width: 100%;
          width: 100%;
          color: #fff;
          transition: transform 0.3s;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .card-codigo {
            border-radius: 14px;
            box-shadow: 0 16px 36px rgba(2, 6, 23, 0.25);
            max-width: 720px;
          }
        }

        .card-codigo:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.35);
        }

        .card-codigo-topo {
          background: #2d3748;
          padding: 12px;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .bolinha {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .bolinha.red {
          background: #ef4444;
        }

        .bolinha.yellow {
          background: #f59e0b;
        }

        .bolinha.green {
          background: #10b981;
        }

        .card-codigo-corpo {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .card-codigo-corpo {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card-codigo-esquerda {
          padding: 16px;
        }

        @media (min-width: 768px) {
          .card-codigo-esquerda {
            padding: 20px;
          }
        }

        .esqueleto {
          height: 12px;
          background: #374151;
          border-radius: 8px;
          margin-bottom: 12px;
          animation: pulse 1.5s infinite;
          opacity: 0.7;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
        }

        .esqueleto.grande {
          height: 64px;
          background: #1f2937;
        }

        .card-codigo-direita {
          background: #0b1220;
          padding: 20px;
          position: relative;
          min-height: 180px;
        }

        @media (min-width: 768px) {
          .card-codigo-direita {
            padding: 24px;
            min-height: 220px;
          }
        }

        .botao-executar {
          position: absolute;
          right: 18px;
          bottom: 18px;
          background: #4181c7;
          color: #fff;
          border-radius: 8px;
          padding: 8px 16px;
          border: 0;
          font-weight: 700;
          transition: all 0.3s;
          font-size: 14px;
        }

        .botao-executar:hover {
          background: #2d5f9a;
          transform: scale(1.05);
        }

        /* --- Seções de Recursos --- */
        .zulcode-recurso {
          padding: 40px 0;
        }

        @media (min-width: 768px) {
          .zulcode-recurso {
            padding: 56px 0;
          }
        }

        .recurso-interno {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .recurso-interno {
            gap: 24px;
          }
        }

        @media (min-width: 1024px) {
          .recurso-interno {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
        }

        .titulo-recurso {
          font-size: 24px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .titulo-recurso {
            font-size: 28px;
          }
        }

        @media (min-width: 1024px) {
          .titulo-recurso {
            font-size: 40px;
            text-align: left;
          }
        }

        /* --- CTA Final --- */
        .cta-final {
          background: linear-gradient(180deg, #0b0f15 0%, #1183ff 100%);
          padding: 48px 0;
          text-align: center;
          color: white;
        }

        @media (min-width: 768px) {
          .cta-final {
            padding: 64px 0;
          }
        }

        .cta-final h2 {
          color: white;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 18px;
          padding: 0 16px;
        }

        @media (min-width: 768px) {
          .cta-final h2 {
            font-size: 30px;
            padding: 0;
          }
        }

        .cta-final .botao-principal {
          background: white;
          color: #1183ff;
        }

        .cta-final .botao-principal:hover {
          background: #f3f4f6;
          color: #1183ff;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }

        /* --- Rodapé --- */
        .zulcode-rodape {
          background: #0d1133;
          color: #fff;
          padding: 32px 0;
        }

        @media (min-width: 768px) {
          .zulcode-rodape {
            padding: 48px 0;
          }
        }

        .rodape-grade {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (min-width: 768px) {
          .rodape-grade {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .zulcode-rodape h3 {
          font-weight: 800;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .zulcode-rodape a {
          color: rgba(255, 255, 255, 0.95);
          transition: color 0.3s;
          display: inline-block;
        }

        .zulcode-rodape a:hover {
          color: #1183ff;
          transform: translateX(4px);
        }

        .zulcode-rodape ul {
          list-style: none;
          margin-top: 8px;
          line-height: 1.9;
        }

        .zulcode-rodape li {
          margin-bottom: 4px;
        }

        /* --- Utilidades --- */
        .texto-centralizado {
          text-align: center;
        }

        .texto-suave {
          color: #d7dadf;
          line-height: 1.6;
        }

        .centralizar-vertical {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* --- Botões App Store --- */
        .botao-loja-app {
          display: inline-block;
          border: 2px solid #374151;
          border-radius: 8px;
          padding: 8px 12px;
          color: #e6edf3;
          transition: all 0.3s;
          min-width: 120px;
          font-size: 12px;
        }

        @media (min-width: 768px) {
          .botao-loja-app {
            border-radius: 12px;
            padding: 10px 18px;
            min-width: 140px;
            font-size: 14px;
          }
        }

        .botao-loja-app:hover {
          border-color: #1183ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(17, 131, 255, 0.2);
        }

        /* --- Animações --- */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Melhorias para telas muito pequenas --- */
        @media (max-width: 374px) {
          .hero-titulo {
            font-size: 20px;
          }

          .hero-subtitulo {
            font-size: 13px;
          }

          .botao-principal {
            padding: 0.4rem 0.8rem;
            font-size: 11px;
          }

          .linguagem-item {
            font-size: 10px;
            padding: 3px 4px;
          }

          .linguagem-item img {
            width: 20px;
            height: 20px;
          }
        }

        /* --- Orientação paisagem --- */
        @media (max-height: 600px) and (orientation: landscape) {
          .zulcode-hero {
            padding: 60px 0 32px;
          }

          .hero-titulo {
            font-size: 20px;
            margin-bottom: 12px;
          }

          .hero-subtitulo {
            font-size: 13px;
            margin-bottom: 12px;
          }

          .botoes-acao {
            margin-top: 8px;
          }
        }

        /* --- Classes utilitárias para Mobile --- */
        @media (max-width: 767px) {
          .mobile-text-center {
            text-align: center !important;
          }

          .mobile-px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .mobile-full-width {
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>

      <main className="min-h-screen">
        {/* Header */}
        <header
          className="zulcode-cabecalho fade-in"
          aria-label="Cabeçalho principal"
        >
          <div className="zulcode-container">
            <div className="cabecalho-interno">
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <b
                  style={{
                    color: "#1183ff",
                    fontSize: "clamp(20px, 5vw, 28px)",
                  }}
                >
                  ZulCode
                </b>
              </div>
              <div>
                <button
                  className="botao-principal"
                  onClick={() => scrollToSection("hero")}
                  aria-label="Comece a codar"
                >
                  Comece a Codar
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="zulcode-hero zulcode-container fade-in">
          <div className="hero-grid">
            <div className="hero-ilustracao">
              <img
                src="zulcode.png"
                alt="Ilustração de Desenvolvimento de Software"
                style={{
                  maxWidth: "min(420px, 100%)",
                  width: "100%",
                  borderRadius: "12px",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/420x280/0d1133/1183ff?text=ZulCode";
                }}
              />
            </div>

            <div className="mobile-text-center">
              <h1 className="hero-titulo">
                O jeito prático, divertido e eficaz de aprender{" "}
                <b style={{ color: "#1183ff" }}>Programação</b>!
              </h1>
              <p className="hero-subtitulo mobile-px-4">
                Aprenda a codar com lições rápidas e interativas — ganhe pontos,
                avance níveis e pratique lógica, sintaxe e resolução de
                problemas.
              </p>

              <div className="botoes-acao">
                <button
                  className="botao-principal mobile-full-width"
                  onClick={() => scrollToSection("cta-final")}
                >
                  Comece a Codar
                </button>
                <a
                  href="#"
                  className="link-fantasma"
                  aria-label="Já tenho uma conta"
                >
                  Já tenho uma conta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section
          style={{ padding: "20px 0", background: "#070a0e" }}
          className="fade-in"
        >
          <div className="zulcode-container">
            <div className="languages-scroll">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="linguagem-item"
                  onClick={handleLanguageClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleLanguageClick(e)}
                >
                  <img
                    src={lang.logo}
                    alt={`${lang.name} Logo`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/32/0d1133/ffffff?text=${lang.name.charAt(
                        0
                      )}`;
                    }}
                  />
                  <span>{lang.name}</span>
                </div>
              ))}

              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  minWidth: "40px",
                  padding: "8px",
                  flexShrink: 0,
                }}
                title="próximo"
                aria-label="Próximo"
                onClick={() => {
                  const container = document.querySelector(".languages-scroll");
                  container.scrollBy({ left: 200, behavior: "smooth" });
                }}
              >
                <img
                  src="https://ext.same-assets.com/1956114952/962924999.svg"
                  alt="próximo"
                  width="24"
                  height="24"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Learning Section */}
        <section className="secao-aprendizado fade-in">
          <div className="zulcode-container">
            <div className="aprendizado-grid">
              <div className="mobile-text-center">
                <h2 className="aprendizado-titulo">
                  Aprenda <b style={{ color: "#1183ff" }}>Codando</b>
                </h2>
                <p className="aprendizado-texto">
                  Desenvolva em qualquer lugar, a qualquer momento, sem
                  necessidade de configuração. Nossa plataforma integrada
                  suporta cada passo da sua jornada de programação.
                </p>
              </div>

              <div className="centralizar-vertical">
                <div className="card-codigo">
                  <div className="card-codigo-topo">
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <div className="bolinha red"></div>
                      <div className="bolinha yellow"></div>
                      <div className="bolinha green"></div>
                    </div>
                  </div>

                  <div className="card-codigo-corpo">
                    <div className="card-codigo-esquerda">
                      <div className="esqueleto" style={{ width: "75%" }}></div>
                      <div className="esqueleto" style={{ width: "50%" }}></div>
                      <div className="esqueleto" style={{ width: "83%" }}></div>
                      <div className="esqueleto grande"></div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "18px",
                        }}
                      >
                        <div style={{ width: "16px", height: "16px" }}></div>
                      </div>

                      <div className="esqueleto" style={{ width: "80%" }}></div>
                      <div className="esqueleto" style={{ width: "66%" }}></div>
                      <div className="esqueleto" style={{ width: "75%" }}></div>
                    </div>

                    <div className="card-codigo-direita">
                      <div
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          right: "16px",
                        }}
                      >
                        <button
                          className="botao-executar"
                          onClick={() => alert("Executando código...")}
                        >
                          ▶ Executar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Sections */}
        {/* Feature 1 */}
        <section className="zulcode-recurso zulcode-container fade-in">
          <div className="recurso-interno">
            <div className="texto-centralizado mobile-text-center">
              <h2 className="titulo-recurso" style={{ color: "#1183ff" }}>
                <b>Grátis</b>. Prático.
                <br />
                Eficaz.
              </h2>
              <p
                className="texto-suave mobile-px-4"
                style={{
                  maxWidth: "720px",
                  margin: "12px auto",
                  fontSize: "17px",
                }}
              >
                Aprender com a <b>ZulCode</b> é divertido e
                <a
                  href="#"
                  style={{
                    color: "#1cb0f6",
                    fontWeight: "800",
                    marginLeft: "6px",
                  }}
                >
                  pesquisas comprovam que funciona
                </a>
                . Com lições curtinhas, você ganha XP e desbloqueia módulos
                enquanto aprende a programar de verdade.
              </p>
            </div>

            <div className="centralizar-vertical" style={{ marginTop: "12px" }}>
              <img
                src="zulcode.png"
                alt="Aprender com ZulCode"
                style={{
                  maxWidth: "min(420px, 100%)",
                  width: "100%",
                  borderRadius: "12px",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/420x280/0d1133/1183ff?text=ZulCode";
                }}
              />
            </div>
          </div>
        </section>

        {/* Feature 2 */}
        <section
          className="zulcode-recurso fade-in"
          style={{ background: "#0d1133" }}
        >
          <div className="zulcode-container recurso-interno">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div style={{ order: 2 }}>
                <img
                  src="zulcode.png"
                  alt="Desenvolvimento Ágil"
                  style={{
                    maxWidth: "min(420px, 100%)",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/420x280/192b45/ffffff?text=Metodologias+Ágeis";
                  }}
                />
              </div>
              <div
                style={{ order: 1, textAlign: "center" }}
                className="mobile-text-center"
              >
                <h2 className="titulo-recurso" style={{ color: "#1183ff" }}>
                  Baseado em <b>Metodologias Ágeis</b>
                </h2>
                <p
                  className="texto-suave mobile-px-4"
                  style={{
                    maxWidth: "620px",
                    margin: "10px auto",
                    fontSize: "17px",
                  }}
                >
                  Combinamos práticas de desenvolvimento de software com
                  conteúdo cativante para criar cursos que ensinam lógica,
                  sintaxe e arquitetura de código.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3 */}
        <section className="zulcode-recurso zulcode-container fade-in">
          <div
            className="recurso-interno"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }} className="mobile-text-center">
              <h2 className="titulo-recurso" style={{ color: "#1183ff" }}>
                Mantenha a <b>Motivação</b> com Gamificação
              </h2>
              <p
                className="texto-suave mobile-px-4"
                style={{
                  maxWidth: "640px",
                  margin: "12px auto",
                  fontSize: "17px",
                }}
              >
                Crie o hábito diário de codar com recursos gamificados, rankings
                e desafios de programação constantes.
              </p>
            </div>

            <div className="centralizar-vertical">
              <img
                src="zulcode.png"
                alt="Gamificação na Programação"
                style={{
                  maxWidth: "min(420px, 100%)",
                  width: "100%",
                  borderRadius: "12px",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/420x280/192b45/ffffff?text=Gamificação";
                }}
              />
            </div>
          </div>
        </section>

        {/* Feature 4 */}
        <section
          className="zulcode-recurso fade-in"
          style={{ background: "#0d1133" }}
        >
          <div className="zulcode-container recurso-interno">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="zulcode.png"
                  alt="Aprendizado Personalizado em Código"
                  style={{
                    maxWidth: "min(420px, 100%)",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/420x280/192b45/ffffff?text=Aprendizado+Personalizado";
                  }}
                />
              </div>
              <div
                style={{ textAlign: "center" }}
                className="mobile-text-center"
              >
                <h2 className="titulo-recurso" style={{ color: "#1183ff" }}>
                  <b>Aprendizado</b> feito sob medida para você
                </h2>
                <p
                  className="texto-suave mobile-px-4"
                  style={{
                    maxWidth: "640px",
                    margin: "12px auto",
                    fontSize: "17px",
                  }}
                >
                  Lições personalizadas que combinam IA e conhecimento de
                  software para ensinar no seu ritmo e nível de experiência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Section */}
        <section className="zulcode-recurso zulcode-container fade-in">
          <div className="texto-centralizado mobile-text-center">
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "800",
                color: "#e6edf3",
                marginBottom: "20px",
              }}
            >
              <b>Code</b> onde e quando quiser
            </h2>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "12px",
                marginBottom: "40px",
              }}
            >
              <a
                href="#"
                className="botao-loja-app"
                aria-label="Baixar na App Store"
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>
                    Baixe na
                  </div>
                  <div style={{ fontWeight: "800" }}>App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="botao-loja-app"
                aria-label="Disponível no Google Play"
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>
                    DISPONÍVEL NO
                  </div>
                  <div style={{ fontWeight: "800" }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="centralizar-vertical">
            <img
              src="https://ext.same-assets.com/72681254/2934165504.svg"
              alt="Mobile App"
              style={{ maxWidth: "min(720px, 100%)", width: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/720x400/0d1133/1183ff?text=Mobile+App";
              }}
            />
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta-final" className="cta-final fade-in">
          <div className="zulcode-container texto-centralizado">
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "800",
                marginBottom: "18px",
              }}
            >
              Comece a <b>Codar</b> <br />
              com a ZulCode
            </h2>
            <div style={{ marginBottom: "18px" }}>
              <button
                className="botao-principal mobile-full-width"
                onClick={handleStartSubscription}
                style={{ maxWidth: "300px" }}
              >
                Comece agora
              </button>
            </div>
            <div
              style={{
                display: "flex",
                gap: "18px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://ext.same-assets.com/1956114952/701384711.svg"
                alt="HTML Icon"
                width="80"
                height="80"
              />
              <img
                src="https://ext.same-assets.com/1956114952/2127960631.svg"
                alt="CSS Icon"
                width="80"
                height="80"
              />
              <img
                src="https://ext.same-assets.com/1956114952/75776152.svg"
                alt="JavaScript Icon"
                width="80"
                height="80"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="zulcode-rodape fade-in">
          <div className="zulcode-container">
            <div className="rodape-grade">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "28px",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                paddingTop: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignItems: "center",
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.9)",
                  justifyContent: "center",
                }}
              >
                <span>Idioma do site:</span>
                {["Português", "English", "Español"].map((lang, index, arr) => (
                  <React.Fragment key={lang}>
                    <a href="#">{lang}</a>
                    {index < arr.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>

              <div
                style={{
                  marginTop: "12px",
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.85)",
                  textAlign: "center",
                }}
              >
                © 2025 ZulCode. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
