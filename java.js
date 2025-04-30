function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
  }
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  let currentLanguage = 'pt';

const translations = {
  pt: {
    "hero-title": "Olá, eu sou o Joaquim",
    "hero-subtitle": "Desenvolvedor Front-end | UI/UX Designer | Freelancer",
    "btn-projects": "Ver Projetos",
    "sobre-titulo": "Sobre mim",
    "sobre-texto": `Meu nome é Joaquim Barbosa Guedes, tenho atualmente 17 anos, sou um estudante de informática do Colégio Ulbra São Lucas e estudante do ensino médio no colégio Augusto Meyer. Comecei a me interessar por programação aos 16 anos, quando iniciei o curso. Desde então, aprendi sobre <strong>Back-End</strong>, <strong>Front-End</strong> e muito sobre <strong>Java</strong>!<br><br>Sempre fui fã de jogos e, desde pequeno, tinha curiosidade para aprender sobre como eles funcionavam. Foi isso que despertou em mim a vontade de aprender a programar e sigo aprendendo sobre tudo que envolve programação.`,
    "habilidades-titulo": "Minhas Habilidades",
    "projetos-titulo": "Confira meus projetos",
    "contato-titulo": "Contato",
    "footer": "© 2025 Joaquim Guedes. Todos os direitos reservados.",
    "inicio": "Início",
    "contato": "Contato",
    "habilidades": "Habilidades",
    "modo-escuro": "Modo Escuro",
    "trocar-idioma": "Trocar Idioma",
    "html-desc": "HTML é a linguagem de marcação usada para estruturar páginas da web. Ele define títulos, parágrafos, links, imagens e muito mais.",
    "css-desc": "CSS é a linguagem de estilos usada para definir o visual das páginas, como cores, fontes, tamanhos e layout responsivo.",
    "javascript-desc": "JavaScript é uma linguagem de programação que permite criar interatividade nas páginas web, como animações, botões funcionais e formulários dinâmicos.",
    "java-desc": "Java é uma linguagem de programação robusta e amplamente usada para desenvolver aplicativos desktop, Android e sistemas back-end.",
    "git-desc": "Git é um sistema de controle de versões, e o GitHub é uma plataforma onde você armazena e compartilha seus projetos com outras pessoas.",
    "uiux-desc": "UI (Interface) e UX (Experiência do Usuário) são áreas que cuidam da aparência e da facilidade de uso de aplicativos e sites.",



  },
  en: {
    "hero-title": "Hello, I am Joaquim",
    "hero-subtitle": "Front-end Developer | UI/UX Designer | Freelancer",
    "btn-projects": "See Projects",
    "sobre-titulo": "About Me",
    "sobre-texto": `My name is Joaquim Barbosa Guedes, I am currently 17 years old, a computer science student at Colégio Ulbra São Lucas and a high school student at Colégio Augusto Meyer. I became interested in programming at 16 when I started the course. Since then, I have learned about <strong>Back-End</strong>, <strong>Front-End</strong>, and a lot about <strong>Java</strong>!<br><br>I have always been a fan of games, and since childhood, I was curious to learn how they worked. This sparked my desire to learn programming, and I continue learning everything about it.`,
    "habilidades-titulo": "My Skills",
    "projetos-titulo": "Check out my projects",
    "contato-titulo": "Contact",
    "footer": "© 2025 Joaquim Guedes. All rights reserved.",
    "inicio": "Home",
    "contato": "Contact",
    "habilidades": "Skills",
    "modo-escuro": "Dark Mode",
    "trocar-idioma": "Change Language",
    "html-desc": "HTML is the markup language used to structure web pages. It defines headings, paragraphs, links, images, and more.",
    "css-desc": "CSS is the styling language used to define how web pages look, including colors, fonts, sizes, and responsive layout.",
    "js-desc": "JavaScript is a programming language that enables interactivity on web pages, like animations, buttons, and dynamic forms.",
    "java-desc": "Java is a robust programming language widely used to develop desktop applications, Android apps, and back-end systems.",
    "git-desc": "Git is a version control system, and GitHub is a platform where you store and share your projects with others.",
    "uiux-desc": "UI (Interface) and UX (User Experience) focus on the look and usability of apps and websites.",

  }
};

function toggleLanguage() {
  currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  applyTranslations();
}

function applyTranslations() {
  // HERO
  document.querySelector('.hero-title').innerHTML = translations[currentLanguage]["hero-title"];
  document.querySelector('#hero p').innerHTML = translations[currentLanguage]["hero-subtitle"];
  document.querySelector('.btn').innerHTML = translations[currentLanguage]["btn-projects"];

  // SOBRE
  document.querySelector('#sobre h2').innerHTML = translations[currentLanguage]["sobre-titulo"];
  document.querySelector('#sobre p').innerHTML = translations[currentLanguage]["sobre-texto"];

  // HABILIDADES e PROJETOS
  document.querySelector('#habilidades h2').innerHTML = translations[currentLanguage]["habilidades-titulo"];
  document.querySelector('#projetos h2').innerHTML = translations[currentLanguage]["projetos-titulo"];

  // CONTATO
  document.querySelector('#contato-titulo').innerHTML = translations[currentLanguage]["contato-titulo"];

  // FOOTER
  document.querySelector('footer p').innerHTML = translations[currentLanguage]["footer"];

  // NAV
  const links = document.querySelectorAll('nav ul li a');
  links[0].innerHTML = translations[currentLanguage]["inicio"];
  links[1].innerHTML = translations[currentLanguage]["contato"];
  links[2].innerHTML = translations[currentLanguage]["habilidades"];

  // BOTÕES
  const buttons = document.querySelectorAll('.buttons button');
  buttons[0].innerHTML = translations[currentLanguage]["modo-escuro"];
  buttons[1].innerHTML = translations[currentLanguage]["trocar-idioma"];
}


