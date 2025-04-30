
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
  }

  let isPortuguese = true;

  function toggleLanguage() {
    const heroTitle = document.querySelector('#hero .hero-title');
    const heroParagraph = document.querySelector('#hero p');
    const aboutTitle = document.querySelector('#sobre h2');
    const aboutParagraph = document.querySelector('#sobre p');

    if (isPortuguese) {
      heroTitle.textContent = "Hello, I'm Joaquim";
      heroParagraph.textContent = "Front-end Developer | UI/UX Designer | Freelancer";
      aboutTitle.textContent = "About Me";
      aboutParagraph.innerHTML = `My name is Joaquim Barbosa Guedes, I am currently 17 years old, a computer science student at Ulbra São Lucas and a high school student at Augusto Meyer School. I started getting interested in programming at 16 years old, when I started a course. Since then, I have learned about <strong>Back-End</strong>, <strong>Front-End</strong> and a lot about <strong>Java</strong>!<br><br>
      I've always been a fan of games and, since I was a kid, I was curious about how they worked. That sparked in me the desire to learn programming and I continue learning everything about it.`;
    } else {
      heroTitle.textContent = "Olá, eu sou o Joaquim";
      heroParagraph.textContent = "Desenvolvedor Front-end | UI/UX Designer | Freelancer";
      aboutTitle.textContent = "Sobre mim";
      aboutParagraph.innerHTML = `Meu nome é Joaquim Barbosa Guedes, tenho atualmente 17 anos, sou um estudante de informática do Colégio Ulbra São Lucas e estudante do ensino médio no colégio Augusto Meyer. Comecei a me interessar por programação aos 16 anos, quando iniciei o curso. Desde então, aprendi sobre <strong>Back-End</strong>, <strong>Front-End</strong> e muito sobre <strong>Java</strong>!<br><br>
      Sempre fui fã de jogos e, desde pequeno, tinha curiosidade para aprender sobre como eles funcionavam. Foi isso que despertou em mim a vontade de aprender a programar e sigo aprendendo sobre tudo que envolve programação.`;
    
    
    }

    isPortuguese = !isPortuguese;
  }

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  const translations = {
    pt: {
      "hero-title": "Olá, eu sou o Joaquim",
      "hero-subtitle": "Desenvolvedor Front-end | UI/UX Designer | Freelancer",
      "btn-projects": "Ver Projetos",
      "sobre-titulo": "Sobre mim",
      "sobre-texto": `Meu nome é Joaquim Barbosa Guedes, tenho atualmente 17 anos, sou um estudante de informática do Colégio Ulbra São Lucas e estudante do ensino médio no colégio Augusto Meyer. Comecei a me interessar por programação aos 16 anos, quando iniciei o curso. Desde então, aprendi sobre <strong>Back-End</strong>, <strong>Front-End</strong> e muito sobre <strong>Java</strong>!<br><br>Sempre fui fã de jogos e, desde pequeno, tinha curiosidade para aprender sobre como eles funcionavam. Foi isso que despertou em mim a vontade de aprender a programar e sigo aprendendo sobre tudo que envolve programação.`,
      "habilidades-titulo": "Minhas Habilidades",
      "projetos-titulo": "Confira meus projetos:",
      "contato-titulo": "Contato",
      "footer": "© 2025 Joaquim Guedes. Todos os direitos reservados.",
      "inicio": "Início",
      "habilidades": "Habilidades",
      "contato": "Contato",
      "modo-escuro": "Modo Escuro",
      "trocar-idioma": "Trocar Idioma"
    },
    en: {
      "hero-title": "Hello, I am Joaquim",
      "hero-subtitle": "Front-end Developer | UI/UX Designer | Freelancer",
      "btn-projects": "See Projects",
      "sobre-titulo": "About Me",
      "sobre-texto": `My name is Joaquim Barbosa Guedes, I am currently 17 years old, a computer science student at Colégio Ulbra São Lucas and a high school student at Colégio Augusto Meyer. I became interested in programming at 16 when I started the course. Since then, I have learned about <strong>Back-End</strong>, <strong>Front-End</strong>, and a lot about <strong>Java</strong>!<br><br>I have always been a fan of games, and since childhood, I was curious to learn how they worked. This sparked my desire to learn programming, and I continue learning everything about it.`,
      "habilidades-titulo": "My Skills",
      "projetos-titulo": "Check out my projects:",
      "contato-titulo": "Contact",
      "footer": "© 2025 Joaquim Guedes. All rights reserved.",
      "inicio": "Home",
      "habilidades": "Skills",
      "contato": "Contact",
      "modo-escuro": "Dark Mode",
      "trocar-idioma": "Change Language"
    }
  };
  
  let currentLanguage = 'pt';
  
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    applyTranslations();
  }
  
  function applyTranslations() {
    document.querySelector('.hero-title').innerHTML = translations[currentLanguage]["hero-title"];
    document.querySelector('#hero p').innerHTML = translations[currentLanguage]["hero-subtitle"];
    document.querySelector('.btn').innerHTML = translations[currentLanguage]["btn-projects"];
    document.querySelector('#sobre h2').innerHTML = translations[currentLanguage]["sobre-titulo"];
    document.querySelector('#sobre p').innerHTML = translations[currentLanguage]["sobre-texto"];
    document.querySelector('#habilidades h2').innerHTML = translations[currentLanguage]["habilidades-titulo"];
    document.querySelector('#projetos h2').innerHTML = translations[currentLanguage]["projetos-titulo"];
    document.querySelector('#contato').previousElementSibling.querySelector('h2').innerHTML = translations[currentLanguage]["contato-titulo"];
    document.querySelector('footer p').innerHTML = translations[currentLanguage]["footer"];
    
    const links = document.querySelectorAll('nav ul li a');
    links[0].innerHTML = translations[currentLanguage]["inicio"];
    links[1].innerHTML = translations[currentLanguage]["contato"];
    links[2].innerHTML = translations[currentLanguage]["habilidades"];
  
    const buttons = document.querySelectorAll('.buttons button');
    buttons[0].innerHTML = translations[currentLanguage]["modo-escuro"];
    buttons[1].innerHTML = translations[currentLanguage]["trocar-idioma"];
  }
  