export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Diego Alvarez — Senior Software & AI Engineer',
    'meta.description':
      'Senior Software & AI Engineer. Sistemas de IA en producción, arquitecturas cloud-native y la disciplina de ingeniería que los lleva a producción.',

    'nav.home': 'INICIO',
    'nav.blog': 'BLOG',
    'nav.cv': 'CV',
    'nav.contact': 'CONTÁCTAME',
    'nav.menu': 'Abrir menú',
    'nav.lang': 'Switch to English',
    'nav.theme': 'Cambiar tema claro/oscuro',

    'hero.line1': 'EL',
    'hero.line2': 'INGENIERO',
    'hero.line3': 'QUE',
    'hero.line3accent': 'CONSTRUYE.',
    'hero.subtitle':
      'No dependo de un copiloto. Un arquitecto que entrega agentes, pipelines RAG y sistemas de QA automation a escala — desde Medellín.',
    'hero.cta.cv': 'VER CV',
    'hero.cta.blog': 'LEER BLOG',
    'hero.stat.toptal': 'Red Toptal',
    'hero.stat.years': 'Código en producción',
    'hero.stat.ai': 'En producción',
    'hero.scroll': 'SCROLL',

    'stats.years': 'AÑOS CONSTRUYENDO',
    'stats.ai': 'SISTEMAS DE IA ENTREGADOS',
    'stats.projects': 'PROYECTOS ENTREGADOS',
    'stats.satisfaction': 'SATISFACCIÓN DE CLIENTES',

    'services.label': 'CAPACIDADES',
    'services.title': 'Lo que construyo, de punta a punta.',
    'services.agents.title': 'Agentes de IA',
    'services.agents.desc': 'Sistemas multi-agente con CrewAI y Claude API para flujos autónomos.',
    'services.rag.title': 'Pipelines RAG',
    'services.rag.desc': 'Retrieval-augmented generation sobre tus datos de dominio, grado producción.',
    'services.qa.title': 'QA Automation',
    'services.qa.desc': 'Generación y ejecución de pruebas con IA usando Playwright a escala.',
    'services.cloud.title': 'Arquitectura Cloud',
    'services.cloud.desc': 'Infraestructura en AWS, Azure y GCP con CI/CD y Docker.',
    'services.fullstack.title': 'Apps Full-Stack',
    'services.fullstack.desc': 'React, Next.js, NestJS y FastAPI — type-safe de extremo a extremo.',
    'services.prompt.title': 'Prompt Engineering',
    'services.prompt.desc': 'Prompts estructurados y patrones de tool-use listos para producción.',

    'projects.label': 'PROYECTOS DESTACADOS',
    'projects.github': 'Código',
    'projects.demo': 'Demo',
    'projects.deprecated': 'Deprecado',

    'explore.cv.desc': 'Descarga mi hoja de vida, conecta en redes, mira mi experiencia.',
    'explore.cv.cta': 'Abrir CV →',
    'explore.blog.desc': 'Arquitectura, patrones de IA, opiniones de Node.js y building in public.',
    'explore.blog.cta': 'Leer artículos →',

    'cta.label': 'CONSTRUYAMOS',
    'cta.title.pre': '¿Tienes un sistema',
    'cta.title.accent': 'que necesita salir a producción?',
    'cta.desc':
      'Tomo proyectos selectos — agentes de IA, sistemas RAG, QA automation y apps full-stack.',
    'cta.button': 'HABLEMOS',
    'contact.subject': 'Hola Diego',
    'contact.body': 'Hola, te escribo desde tu portfolio.',
    'contact.aria': 'Enviar correo a Diego',

    'footer.tagline': 'Construyendo sistemas de IA en producción desde Medellín, Colombia.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Hecho con',
    'footer.top': 'Arriba',

    'cv.back': 'VOLVER AL INICIO',
    'cv.role': 'Senior Software & AI Engineer',
    'cv.chip.location': 'Medellín, CO',
    'cv.chip.remote': 'Disponible remoto',
    'cv.chip.toptal': 'Toptal Top 3%',
    'cv.chip.open': 'Abierto a ofertas',
    'cv.stats.years': 'AÑOS',
    'cv.stats.companies': 'EMPRESAS',
    'cv.stats.projects': 'PROYECTOS',
    'cv.stats.ai': 'SISTEMAS IA',
    'cv.download': 'DESCARGAR CV',
    'cv.updated': 'PDF · Actualizado junio 2026',
    'cv.experience': 'EXPERIENCIA',
    'cv.skills': 'SKILLS',
    'cv.certifications': 'CERTIFICACIONES',

    'blog.label': 'ESCRITURA',
    'blog.title': 'Escribo sobre lo que voy aprendiendo.',
    'blog.subtitle':
      'Arquitectura de software, sistemas, IA y tecnología en general. También me gustan los teclados mecánicos y los periféricos. Apuntes desde Medellín, construyendo cosas en producción.',
    'blog.featured': 'DESTACADO',
    'blog.read': 'LEER',
    'blog.empty': 'Más posts en camino — building in public.',
    'blog.follow': 'Sígueme',
    'blog.backToBlog': 'VOLVER AL BLOG',

    'notfound.title': 'Página no encontrada.',
    'notfound.desc': 'La ruta que buscas no existe o fue movida.',
    'notfound.cta': 'VOLVER AL INICIO',
  },
  en: {
    'meta.title': 'Diego Alvarez — Senior Software & AI Engineer',
    'meta.description':
      'Senior Software & AI Engineer. Production AI systems, cloud-native architectures, and the engineering discipline that ships them.',

    'nav.home': 'HOME',
    'nav.blog': 'BLOG',
    'nav.cv': 'CV',
    'nav.contact': 'CONTACT ME',
    'nav.menu': 'Toggle menu',
    'nav.lang': 'Cambiar a español',
    'nav.theme': 'Toggle dark/light mode',

    'hero.line1': 'THE',
    'hero.line2': 'ENGINEER',
    'hero.line3': 'WHO',
    'hero.line3accent': 'BUILDS.',
    'hero.subtitle':
      'Not a copilot dependent. An architect who ships agents, RAG pipelines, and QA automation systems at scale — from Medellín.',
    'hero.cta.cv': 'VIEW CV',
    'hero.cta.blog': 'READ BLOG',
    'hero.stat.toptal': 'Toptal Network',
    'hero.stat.years': 'Production code',
    'hero.stat.ai': 'Shipped in production',
    'hero.scroll': 'SCROLL',

    'stats.years': 'YEARS BUILDING',
    'stats.ai': 'AI SYSTEMS SHIPPED',
    'stats.projects': 'PROJECTS DELIVERED',
    'stats.satisfaction': 'CLIENT SATISFACTION',

    'services.label': 'CAPABILITIES',
    'services.title': 'What I build, end to end.',
    'services.agents.title': 'AI Agents',
    'services.agents.desc': 'Multi-agent systems with CrewAI and Claude API for autonomous workflows.',
    'services.rag.title': 'RAG Pipelines',
    'services.rag.desc': 'Retrieval-augmented generation over your domain data, production-grade.',
    'services.qa.title': 'QA Automation',
    'services.qa.desc': 'AI-powered test generation and execution with Playwright at scale.',
    'services.cloud.title': 'Cloud Architecture',
    'services.cloud.desc': 'AWS, Azure, and GCP infrastructure with CI/CD and Docker.',
    'services.fullstack.title': 'Full-Stack Apps',
    'services.fullstack.desc': 'React, Next.js, NestJS, and FastAPI — type-safe end to end.',
    'services.prompt.title': 'Prompt Engineering',
    'services.prompt.desc': 'Structured prompts and tool-use patterns that ship to production.',

    'projects.label': 'FEATURED PROJECTS',
    'projects.github': 'Code',
    'projects.demo': 'Demo',
    'projects.deprecated': 'Deprecated',

    'explore.cv.desc': 'Download my résumé, connect on socials, see my experience.',
    'explore.cv.cta': 'Open CV →',
    'explore.blog.desc': 'Architecture, AI patterns, Node.js opinions, and building in public.',
    'explore.blog.cta': 'Read articles →',

    'cta.label': "LET'S BUILD",
    'cta.title.pre': 'Have a system',
    'cta.title.accent': 'that needs shipping?',
    'cta.desc':
      'I take on select projects — AI agents, RAG systems, QA automation, and full-stack apps.',
    'cta.button': 'GET IN TOUCH',
    'contact.subject': 'Hi Diego',
    'contact.body': "Hi, I'm reaching out from your portfolio.",
    'contact.aria': 'Send Diego an email',

    'footer.tagline': 'Building production AI systems from Medellín, Colombia.',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with',
    'footer.top': 'Top',

    'cv.back': 'BACK TO HOME',
    'cv.role': 'Senior Software & AI Engineer',
    'cv.chip.location': 'Medellín, CO',
    'cv.chip.remote': 'Remote Available',
    'cv.chip.toptal': 'Toptal Top 3%',
    'cv.chip.open': 'Open to Offers',
    'cv.stats.years': 'YEARS',
    'cv.stats.companies': 'COMPANIES',
    'cv.stats.projects': 'PROJECTS',
    'cv.stats.ai': 'AI SYSTEMS',
    'cv.download': 'DOWNLOAD CV',
    'cv.updated': 'PDF · Updated June 2026',
    'cv.experience': 'EXPERIENCE',
    'cv.skills': 'SKILLS',
    'cv.certifications': 'CERTIFICATIONS',

    'blog.label': 'WRITING',
    'blog.title': "I write about what I'm learning.",
    'blog.subtitle':
      'Software architecture, systems, AI, and tech in general. I also enjoy mechanical keyboards and peripherals. Notes from Medellín, building things in production.',
    'blog.featured': 'FEATURED',
    'blog.read': 'READ',
    'blog.empty': 'More posts coming — building in public.',
    'blog.follow': 'Follow along',
    'blog.backToBlog': 'BACK TO BLOG',

    'notfound.title': 'Page not found.',
    'notfound.desc': "The route you're looking for doesn't exist or was moved.",
    'notfound.cta': 'BACK TO HOME',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
