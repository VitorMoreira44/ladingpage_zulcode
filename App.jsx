<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ZulCode - Aprenda Programação</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@800&family=Poppins:wght@400;600;700;800&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      /* --- Reset / Base --- */\n      * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n      html,\n      body {\n        height: 100%;\n      }\n      body {\n        font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,\n          Helvetica, Arial;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: #e6edf3; /* Cor principal de texto mais clara para fundo escuro */\n        background: #0b0f15;\n        line-height: 1.4;\n      }\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n      img {\n        display: block;\n        max-width: 100%;\n        height: auto;\n      }\n\n      /* --- Layout & Containers --- */\n      .zulcode-container {\n        max-width: 1120px;\n        margin: 0 auto;\n        padding: 0 20px;\n      }\n      main.min-h-screen {\n        min-height: 100vh;\n      }\n\n      /* --- Cabeçalho (Header) --- */\n      .zulcode-cabecalho {\n        position: sticky;\n        top: 0;\n        z-index: 60;\n        background: #0b0f15;\n        border-bottom: 1px solid #0d1133;\n        backdrop-filter: blur(4px);\n        color: #1183ff; /* Cor da marca */\n        font-family: "Rubik", sans-serif;\n        font-size: 28px;\n        font-style: normal;\n      }\n      .cabecalho-interno {\n        height: 64px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .botao-principal {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        border: 0;\n        cursor: pointer;\n        border-radius: 12px;\n        padding: 0.6rem 1.25rem;\n        font-weight: 800;\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n        background: #1183ff;\n        color: #fff;\n      }\n      .botao-principal:hover {\n        background: #0a488c;\n      }\n\n      /* --- Hero --- */\n      .zulcode-hero {\n        padding: 88px 0 48px;\n      }\n      @media (min-width: 900px) {\n        .zulcode-hero {\n          padding: 120px 0 56px;\n        }\n        .hero-grid {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          gap: 48px;\n          align-items: center;\n        }\n      }\n      .hero-titulo {\n        font-size: 28px;\n        font-weight: 800;\n        color: #e6edf3;\n        margin-bottom: 18px;\n        text-align: center;\n      }\n      @media (min-width: 900px) {\n        .hero-titulo {\n          font-size: 48px;\n          text-align: left;\n        }\n      }\n      .hero-subtitulo {\n        color: #d7dadf;\n        margin-bottom: 18px;\n        font-size: 16px;\n        text-align: center;\n      }\n      @media (min-width: 900px) {\n        .hero-subtitulo {\n          text-align: left;\n        }\n      }\n      .hero-ilustracao {\n        display: flex;\n        justify-content: center;\n        margin-bottom: 18px;\n      }\n      .botoes-acao {\n        display: flex;\n        gap: 12px;\n        justify-content: center;\n        flex-wrap: wrap;\n        margin-top: 12px;\n      }\n      @media (min-width: 900px) {\n        .botoes-acao {\n          justify-content: flex-start;\n        }\n      }\n      .link-fantasma {\n        color: #1cb0f6;\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 13px;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      /* --- Linguagens (Tech Stack) --- */\n      .linguagem-item {\n        display: flex;\n        gap: 12px;\n        align-items: center;\n        color: white;\n        white-space: nowrap;\n        font-weight: 700;\n        cursor: pointer;\n        padding: 6px 8px;\n        transition: background 0.12s;\n      }\n      .linguagem-item:hover {\n        background: #1e2633;\n        border-radius: 8px;\n      }\n      .linguagem-item img {\n        width: 32px;\n        height: 32px;\n        object-fit: contain;\n      }\n\n      /* --- Seção de Aprendizado (Code Demo) --- */\n      .secao-aprendizado {\n        background: #192b45; /* Azul escuro para a seção */\n        padding: 56px 0;\n        color: white;\n      }\n      .aprendizado-grid {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 28px;\n        align-items: center;\n      }\n      @media (min-width: 900px) {\n        .aprendizado-grid {\n          grid-template-columns: 1fr 1fr;\n        }\n      }\n      .aprendizado-titulo {\n        font-size: 32px;\n        font-weight: 800;\n        margin-bottom: 18px;\n      }\n      .aprendizado-texto {\n        font-size: 16px;\n        color: #d7dadf;\n      }\n\n      /* --- Card / Code Demo --- */\n      .card-codigo {\n        background: #1e293b;\n        border-radius: 14px;\n        box-shadow: 0 16px 36px rgba(2, 6, 23, 0.25);\n        overflow: hidden;\n        max-width: 720px;\n        width: 100%;\n        color: #fff;\n      }\n      .card-codigo-topo {\n        background: #2d3748;\n        padding: 12px;\n        display: flex;\n        gap: 8px;\n        align-items: center;\n      }\n      .bolinha {\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n      }\n      .bolinha.red {\n        background: #ef4444;\n      }\n      .bolinha.yellow {\n        background: #f59e0b;\n      }\n      .bolinha.green {\n        background: #10b981;\n      }\n      .card-codigo-corpo {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n      }\n      .card-codigo-esquerda {\n        padding: 20px;\n      }\n      .esqueleto {\n        height: 12px;\n        background: #374151;\n        border-radius: 8px;\n        margin-bottom: 12px;\n      }\n      .esqueleto.grande {\n        height: 64px;\n        background: #1f2937;\n      }\n      .card-codigo-direita {\n        background: #0b1220;\n        padding: 24px;\n        position: relative;\n        min-height: 220px;\n      }\n      .botao-executar {\n        position: absolute;\n        right: 18px;\n        bottom: 18px;\n        background: #4181c7;\n        color: #fff;\n        border-radius: 8px;\n        padding: 8px 12px;\n        border: 0;\n        font-weight: 700;\n        cursor: pointer;\n      }\n\n      /* --- Seções de Recursos (Feature) --- */\n      .zulcode-recurso {\n        padding: 56px 0;\n      }\n      .recurso-interno {\n        display: block;\n        gap: 24px;\n      }\n      @media (min-width: 900px) {\n        .recurso-interno {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          gap: 48px;\n          align-items: center;\n        }\n      }\n      .titulo-recurso {\n        font-size: 32px;\n        font-weight: 800;\n      }\n\n      /* --- Final CTA --- */\n      .cta-final {\n        background: linear-gradient(180deg, #0b0f15 0%, #1183ff 100%);\n        padding: 64px 0;\n        text-align: center;\n        color: white;\n      }\n      .cta-final h2 {\n        color: white;\n      }\n      .cta-final .botao-principal {\n        background: white;\n        color: #1183ff;\n      }\n      .cta-final .botao-principal:hover {\n        background: #f3f4f6;\n        color: #1183ff;\n      }\n\n      /* --- Rodapé (Footer) --- */\n      .zulcode-rodape {\n        background: #0d1133;\n        color: #fff;\n        padding: 48px 0;\n      }\n      .rodape-grade {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 20px;\n      }\n      @media (min-width: 900px) {\n        .rodape-grade {\n          grid-template-columns: repeat(4, 1fr);\n        }\n      }\n      .zulcode-rodape h3 {\n        font-weight: 800;\n        margin-bottom: 10px;\n      }\n      .zulcode-rodape a {\n        color: rgba(255, 255, 255, 0.95);\n      }\n\n      /* --- Utilities --- */\n      .texto-centralizado {\n        text-align: center;\n      }\n      .cor-destaque {\n        color: #28a745; /* Verde para destaque positivo */\n      }\n      .texto-suave {\n        color: #d7dadf;\n      }\n      .centralizar-vertical {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ',
    }}
  />
  <main className="min-h-screen">
    <header className="zulcode-cabecalho" aria-label="Cabeçalho principal">
      <div className="zulcode-container">
        <div className="cabecalho-interno">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <b>
              ZulCode<b></b>
            </b>
          </div>
          <b>
            <b>
              <div>
                <button
                  className="botao-principal"
                  onclick="scrollToSection('hero')"
                >
                  Comece a Codar
                </button>
              </div>
            </b>
          </b>
        </div>
        <b>
          <b></b>
        </b>
      </div>
      <b>
        <b></b>
      </b>
    </header>
    <b>
      <b>
        <section id="hero" className="zulcode-hero zulcode-container">
          <div className="hero-grid">
            <div className="hero-ilustracao">
              <img
                src="zulcode.png"
                alt="Ilustração de Desenvolvimento de Software"
                style={{ maxWidth: 420 }}
              />
            </div>
            <div>
              <h1 className="hero-titulo">
                O jeito prático, divertido e eficaz de aprender{" "}
                <b>Programação</b>!
              </h1>
              <p className="hero-subtitulo">
                Aprenda a codar com lições rápidas e interativas — ganhe pontos,
                avance níveis e pratique lógica, sintaxe e resolução de
                problemas.
              </p>
              <div className="botoes-acao">
                <button
                  className="botao-principal"
                  onclick="scrollToSection('cta-final')"
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
        <section style={{ padding: "20px 0", background: "#070a0e" }}>
          <div className="zulcode-container">
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                overflowX: "auto",
                padding: "6px 10px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/4064110058.svg"
                  alt="Python Logo"
                />
                <span>Python</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/701384711.svg"
                  alt="HTML Logo"
                />
                <span>HTML</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/75776152.svg"
                  alt="JavaScript Logo"
                />
                <span>JavaScript</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/1099217744.svg"
                  alt="Java Logo"
                />
                <span>Java</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/1580506204.svg"
                  alt="C++ Logo"
                />
                <span>C++</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/337484412.svg"
                  alt="SQL Logo"
                />
                <span>SQL</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/3767164794.svg"
                  alt="C Logo"
                />
                <span>C</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/2127960631.svg"
                  alt="CSS Logo"
                />
                <span>CSS</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/2414291000.svg"
                  alt="C# Logo"
                />
                <span>C#</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/3686881082.svg"
                  alt="PHP Logo"
                />
                <span>PHP</span>
              </div>
              <div className="linguagem-item">
                <img
                  src="https://ext.same-assets.com/1956114952/1675983535.svg"
                  alt="Dart Logo"
                />
                <span>Dart</span>
              </div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                title="próximo"
              >
                <img
                  src="https://ext.same-assets.com/1956114952/962924999.svg"
                  alt="próximo"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </section>
        <section className="secao-aprendizado">
          <div className="zulcode-container">
            <div className="aprendizado-grid">
              <div>
                <h2 className="aprendizado-titulo">
                  Aprenda <b>Codando</b>
                </h2>
                <p className="aprendizado-texto">
                  Desenvolva em qualquer lugar, a qualquer momento, sem
                  necessidade de configuração. Nossa plataforma integrada
                  suporta cada passo da sua jornada de programação.
                </p>
              </div>
              <div className="centralizar-vertical">
                <div className="card-codigo" aria-hidden="false">
                  <div className="card-codigo-topo">
                    <div
                      style={{ display: "flex", gap: 8, alignItems: "center" }}
                    >
                      <div className="bolinha red" />
                      <div className="bolinha yellow" />
                      <div className="bolinha green" />
                    </div>
                  </div>
                  <div className="card-codigo-corpo">
                    <div className="card-codigo-esquerda">
                      <div className="esqueleto" style={{ width: "75%" }} />
                      <div className="esqueleto" style={{ width: "50%" }} />
                      <div className="esqueleto" style={{ width: "83%" }} />
                      <div className="esqueleto grande" />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: 18,
                        }}
                      >
                        <div style={{ width: 16, height: 16 }} />
                        <span style={{ fontWeight: 700, fontSize: 14 }} />
                      </div>
                      <div className="esqueleto" style={{ width: "80%" }} />
                      <div className="esqueleto" style={{ width: "66%" }} />
                      <div className="esqueleto" style={{ width: "75%" }} />
                    </div>
                    <div className="card-codigo-direita">
                      <div
                        style={{ position: "absolute", bottom: 16, right: 16 }}
                      >
                        <button className="botao-executar">▶ </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="zulcode-recurso zulcode-container">
          <div className="recurso-interno">
            <div className="texto-centralizado">
              <h2
                className="cor-destaque titulo-recurso"
                style={{ color: "#1183ff" }}
              >
                <b>Grátis</b>. Prático.
                <br />
                Eficaz.
              </h2>
              <p
                className="texto-suave"
                style={{ maxWidth: 720, margin: "12px auto", fontSize: 17 }}
              >
                Aprender com a <b>ZulCode</b> é divertido e
                <a
                  href="#"
                  style={{ color: "#1cb0f6", fontWeight: 800, marginLeft: 6 }}
                >
                  pesquisas comprovam que funciona
                </a>
                . Com lições curtinhas, você ganha XP e desbloqueia módulos
                enquanto aprende a programar de verdade.
              </p>
            </div>
            <div className="centralizar-vertical" style={{ marginTop: 12 }}>
              <img
                src="zulcode.png"
                alt="Aprender com ZulCode"
                style={{ maxWidth: 420, width: "100%" }}
              />
            </div>
          </div>
        </section>
        <section className="zulcode-recurso" style={{ background: "#0d1133" }}>
          <div className="zulcode-container recurso-interno">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 20,
                alignItems: "center",
              }}
            >
              <div style={{ order: 2 }}>
                <img
                  src="zulcode.png"
                  alt="Desenvolvimento Ágil"
                  style={{ maxWidth: 420, margin: "0 auto", display: "block" }}
                />
              </div>
              <div style={{ order: 1, textAlign: "center" }}>
                <h2
                  className="cor-destaque titulo-recurso"
                  style={{ color: "#1183ff" }}
                >
                  Baseado em <b>Metodologias Ágeis</b>
                </h2>
                <p
                  className="texto-suave"
                  style={{ maxWidth: 620, margin: "10px auto", fontSize: 17 }}
                >
                  Combinamos práticas de desenvolvimento de software com
                  conteúdo cativante para criar cursos que ensinam lógica,
                  sintaxe e arquitetura de código.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="zulcode-recurso zulcode-container">
          <div
            className="recurso-interno"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2 className="titulo-recurso" style={{ color: "#1183ff" }}>
                Mantenha a <b>Motivação</b> com Gamificação
              </h2>
              <p
                className="texto-suave"
                style={{ maxWidth: 640, margin: "12px auto", fontSize: 17 }}
              >
                Crie o hábito diário de codar com recursos gamificados, rankings
                e desafios de programação constantes.
              </p>
            </div>
            <div className="centralizar-vertical">
              <img
                src="zulcode.png"
                alt="Gamificação na Programação"
                style={{ maxWidth: 420, width: "100%" }}
              />
            </div>
          </div>
        </section>
        <section className="zulcode-recurso" style={{ background: "#0d1133" }}>
          <div className="zulcode-container recurso-interno">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 20,
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="zulcode.png"
                  alt="Aprendizado Personalizado em Código"
                  style={{ maxWidth: 420, margin: "0 auto", display: "block" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <h2 className="titulo-recurso" style={{ color: "#1183ff" }}>
                  <b>Aprendizado</b> feito sob medida para você
                </h2>
                <p
                  className="texto-suave"
                  style={{ maxWidth: 640, margin: "12px auto", fontSize: 17 }}
                >
                  Lições personalizadas que combinam IA e conhecimento de
                  software para ensinar no seu ritmo e nível de experiência.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="zulcode-recurso zulcode-container">
          <div className="texto-centralizado">
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#e6edf3" }}>
              <b>Code</b> onde e quando quiser
            </h2>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 12,
              }}
            >
              <a href="#" className="botao-loja-app">
                <div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>Baixe na</div>
                  <div style={{ fontWeight: 800 }}>App Store</div>
                </div>
              </a>
              <a href="#" className="botao-loja-app">
                <div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    DISPONÍVEL NO
                  </div>
                  <div style={{ fontWeight: 800 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          .botao-loja-app {\n            display: inline-block;\n            border: 2px solid #374151; /* Adaptado para o tema escuro */\n            border-radius: 12px;\n            padding: 10px 18px;\n            color: #e6edf3;\n            transition: border-color 0.3s;\n          }\n          .botao-loja-app:hover {\n            border-color: #1183ff;\n          }\n        ",
            }}
          />
          <div className="centralizar-vertical">
            <img
              src="https://ext.same-assets.com/72681254/2934165504.svg"
              alt="Mobile App"
              style={{ maxWidth: 720, width: "100%" }}
            />
          </div>
        </section>
        <section id="cta-final" className="cta-final">
          <div className="zulcode-container texto-centralizado">
            <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 18 }}>
              Comece a <b>Codar</b> <br />
              com a ZulCode
            </h2>
            <div style={{ marginBottom: 18 }}>
              <button
                className="botao-principal"
                onclick="alert('Iniciar fluxo de inscrição (simulação).')"
              >
                Comece agora
              </button>
            </div>
            <div
              style={{
                display: "flex",
                gap: 18,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://ext.same-assets.com/1956114952/701384711.svg"
                alt="HTML Icon"
                width={80}
                height={80}
              />
              <img
                src="https://ext.same-assets.com/1956114952/2127960631.svg"
                alt="CSS Icon"
                width={80}
                height={80}
              />
              <img
                src="https://ext.same-assets.com/1956114952/75776152.svg"
                alt="JavaScript Icon"
                width={80}
                height={80}
              />
            </div>
          </div>
        </section>
        <footer className="zulcode-rodape">
          <div className="zulcode-container">
            <div className="rodape-grade">
              <div>
                <h3>ZulCode</h3>
                <ul
                  style={{ listStyle: "none", marginTop: 8, lineHeight: "1.9" }}
                >
                  <li>
                    <a href="#">Cursos</a>
                  </li>
                  <li>
                    <a href="#">Missão</a>
                  </li>
                  <li>
                    <a href="#">Método de Ensino</a>
                  </li>
                  <li>
                    <a href="#">Certificação</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Comunidade</h3>
                <ul
                  style={{ listStyle: "none", marginTop: 8, lineHeight: "1.9" }}
                >
                  <li>
                    <a href="#">Blog ZulCode</a>
                  </li>
                  <li>
                    <a href="#">Suporte</a>
                  </li>
                  <li>
                    <a href="#">Central de Ajuda</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Aplicativos</h3>
                <ul
                  style={{ listStyle: "none", marginTop: 8, lineHeight: "1.9" }}
                >
                  <li>
                    <a href="#">ZulCode para Android</a>
                  </li>
                  <li>
                    <a href="#">ZulCode para iOS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Redes sociais</h3>
                <ul
                  style={{ listStyle: "none", marginTop: 8, lineHeight: "1.9" }}
                >
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">TikTok</a>
                  </li>
                  <li>
                    <a href="#">YouTube</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                marginTop: 28,
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                paddingTop: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  alignItems: "center",
                  fontSize: 13,
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                <span>Idioma do site:</span>
                <a href="#">Português</a>
                <span>•</span> <a href="#">English</a>
                <span>•</span> <a href="#">Español</a>
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 13,
                  color: "rgba(255, 255, 255, 0.85)",
                }}
              >
                © 2025 ZulCode. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      </b>
    </b>
  </main>
  <b>
    <b></b>
  </b>
</>;
