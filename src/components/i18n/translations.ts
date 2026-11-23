export type Language = "pt" | "en";

export const translations = {
  pt: {
    navigation: {
      terminal: "Terminal",
      projects: "Projetos",
      experience: "Experiência",
      ariaLabel: "Escolher seção do portfólio",
    },

    hero: {
      greeting: "Olá, eu sou",
      role: "Engenheiro de Software",
      description:
        "Sou um desenvolvedor full-stack focado em construir aplicações web modernas, escaláveis e de fácil manutenção — especialmente no universo SaaS e de comunicação em tempo real. Sou apaixonado por resolver problemas reais por meio de arquitetura limpa, design cuidadoso e engenharia confiável.",
    },

    projects: {
      title: "Projetos em destaque",
      subtitle: "Trabalhos selecionados",
      openProject: "Abrir projeto",
      aura: {
        description:
          "Uma plataforma de impacto social desenvolvida para conectar mulheres a redes de apoio e serviços públicos essenciais.",
      },
      rag: {
        description:
          "Sistema local de recuperação de informações com embeddings, busca vetorial e reranking integrado a LLMs.",
      },
      exatitech: {
        description:
          "Plataforma de preparação para o ENEM, com foco nos conteúdos mais recorrentes da prova e estratégias de estudo para aumentar a nota em poucas semanas. Mais de 200 alunos já melhoraram seus resultados com o método.",
      },
    },

    experience: {
      title: "Experiência profissional",
      subtitle: "Minha trajetória profissional em engenharia de software",

      flowbit: {
        role: "Engenheiro de Software Pleno",
        description:
          "Desenvolvimento de aplicações escaláveis e sistemas de comunicação em tempo real.",
        highlights: [
          "Desenvolvimento de sistemas em tempo real com Node.js, TypeScript, Express, Socket.IO e Prisma.",
          "Redução de 45% no tempo de carregamento inicial e aproximadamente 30% nas requisições à API.",
          "Implementação de rastreamento de presença com 98% de precisão na sincronização.",
          "Desenvolvimento de sistema de notificações com FCM, entregando mais de 12 mil notificações por mês com menos de 1% de falhas.",
        ],
      },

      sintese: {
        role: "Engenheiro de Software Júnior",
        description:
          "Desenvolvimento de aplicações web, fluxos de automação e pipelines de CI/CD.",
        highlights: [
          "Automação da geração de relatórios, reduzindo o trabalho manual em 70%.",
          "Implementação de autenticação e autorização utilizando NestJS.",
          "Redução do tempo de deploy de 15 para 10 minutos utilizando GitHub Actions e AWS.",
          "Aumento de 20% na frequência de releases.",
        ],
      },

      center: {
        role: "Estagiário de Engenharia de Software",
        description:
          "Contribuição para melhorias em e-commerce e integrações de pagamento.",
        highlights: [
          "Melhoria na navegação e descoberta de produtos, aumentando a velocidade de navegação em 20%.",
          "Melhoria na confiabilidade dos pagamentos com Stripe, reduzindo erros de pagamento em 15%.",
        ],
      },
    },

    terminal: {
      welcome: "Bem-vindo ao Terminal do portfólio de Felipe!",
      help: "Digite 'help' para ver os comandos disponíveis.",
      placeholder: "Digite 'help' para começar...",
      inputLabel: "Digite um comando no terminal",
      outputLabel: "Saída do terminal",
      online: "ONLINE",
      commandNotFound: "Comando não encontrado: {command}. Digite 'help'.",

      commands: {
        help: {
          description: "Lista os comandos disponíveis",
          title: "Comandos disponíveis:",
          tip: "Dica: use as setas ↑ e ↓ para navegar pelo histórico.",
        },

        about: {
          description: "Saiba mais sobre mim",
          title: "Sobre mim",
          lines: [
            "Olá! Sou Felipe Lino, Engenheiro de Software.",
            "Desenvolvedor full-stack com experiência na construção de aplicações escaláveis, sistemas em tempo real e soluções eficientes.",
            "Atuo principalmente com desenvolvimento backend, frontend, integração de serviços, automação e aplicações orientadas a dados.",
            "Tenho interesse especial em Engenharia de Software e Inteligência Artificial aplicada.",
          ],
        },

        projects: {
          description: "Explore meus projetos",
          title: "Projetos",
          lines: [
            "AURA — Plataforma de impacto social que conecta mulheres a redes de apoio e serviços públicos.",
            "Exatitech — Plataforma de preparação para o ENEM, com foco nos conteúdos mais recorrentes da prova e estratégias de estudo.",
            "Local RAG Engine — Sistema local de RAG com embeddings, busca vetorial, reranking e modelos de linguagem executados localmente.",
          ],
        },

        experience: {
          description: "Veja minha experiência profissional",
          title: "Experiência profissional",
          lines: [
            "FlowBit Tech — Engenheiro de Software Pleno (Jan 2025 – Atual)",
            "Desenvolvimento de aplicações full-stack com Node.js, TypeScript, React e sistemas em tempo real.",
            "Implementação de APIs REST, integração com bancos de dados, testes automatizados e serviços de notificação.",
            "Otimização que reduziu o carregamento inicial em 45% e alcançou mais de 12 mil notificações mensais, com menos de 1% de falhas.",
            "Síntese BI — Engenheiro de Software Júnior (Ago 2023 – Dez 2024)",
            "Automação de processos e integração de pipelines utilizando GitHub Actions e AWS.",
            "Redução de 70% em processos manuais e de 15 para 10 minutos no tempo de execução de pipelines.",
            "Aumento de 20% na frequência de releases, com 96% de confiabilidade.",
            "Center Cartuchos — Estagiário de Engenharia de Software (Nov 2021 – Fev 2022)",
          ],
        },

        contact: {
          description: "Entre em contato",
          title: "Contato",
          email: "E-mail:",
          phone: "Telefone:",
          linkedin: "LinkedIn:",
          github: "GitHub:",
          cta: "Fique à vontade para entrar em contato!",
        },

        stack: {
          description: "Exibe minhas tecnologias",
          title: "Stack tecnológica",
          frontend: "Frontend:",
          backend: "Backend:",
          database: "Banco de dados:",
          tools: "Ferramentas e infraestrutura:",
        },
      },

      commandOutput: {
        help: [
          { text: "Comandos disponíveis:", color: "cyan" },
          { text: "help — Lista os comandos disponíveis" },
          { text: "about — Saiba mais sobre mim" },
          { text: "projects — Explore meus projetos" },
          { text: "experience — Veja minha experiência profissional" },
          { text: "contact — Entre em contato" },
          { text: "stack — Exibe minhas tecnologias" },
          { text: "clear — Limpa o terminal" },
          {
            text: "Dica: use as setas ↑ e ↓ para navegar pelo histórico.",
            color: "muted",
          },
        ],

        about: [
          { text: "Sobre mim", color: "cyan" },
          { text: "Olá! Sou Felipe Lino, Engenheiro de Software." },
          {
            text: "Desenvolvedor full-stack com experiência na construção de aplicações escaláveis, sistemas em tempo real e soluções eficientes.",
          },
          {
            text: "Atuo principalmente com desenvolvimento backend, frontend, integração de serviços, automação e aplicações orientadas a dados.",
          },
          {
            text: "Tenho interesse especial em Engenharia de Software e Inteligência Artificial aplicada.",
          },
        ],

        projects: [
          { text: "Projetos", color: "cyan" },
          {
            text: "AURA — Plataforma de impacto social que conecta mulheres a redes de apoio e serviços públicos.",
          },
          {
            text: "Exatitech — Plataforma de preparação para o ENEM, com foco nos conteúdos mais recorrentes da prova e estratégias de estudo.",
          },
          {
            text: "Local RAG Engine — Sistema local de RAG com embeddings, busca vetorial, reranking e modelos de linguagem executados localmente.",
          },
        ],

        experience: [
          { text: "Experiência profissional", color: "cyan" },
          {
            text: "FlowBit Tech — Engenheiro de Software Pleno (Jan 2025 – Atual)",
            color: "green",
          },
          {
            text: "Desenvolvimento full-stack com Node.js, TypeScript, React e sistemas em tempo real.",
          },
          {
            text: "APIs REST, bancos de dados, testes automatizados e serviços de notificação.",
          },
          {
            text: "45% menos tempo de carregamento inicial; mais de 12 mil notificações mensais, com menos de 1% de falhas.",
          },
          {
            text: "Síntese BI — Engenheiro de Software Júnior (Ago 2023 – Dez 2024)",
            color: "green",
          },
          {
            text: "Automação de processos e pipelines com GitHub Actions e AWS.",
          },
          {
            text: "70% menos processos manuais; pipelines reduzidos de 15 para 10 minutos.",
          },
          {
            text: "20% mais releases e 96% de confiabilidade.",
          },
          {
            text: "Center Cartuchos — Estagiário de Engenharia de Software (Nov 2021 – Fev 2022)",
            color: "green",
          },
        ],

        contact: [
          { text: "Contato", color: "cyan" },
          { text: "E-mail: felipegadelha2004@gmail.com", color: "green" },
          { text: "Telefone: +55 88 99204-8450", color: "green" },
          {
            text: "LinkedIn: linkedin.com/in/felipe-lino-developer",
            color: "green",
          },
          { text: "GitHub: github.com/felipe-gl18", color: "green" },
          { text: "Fique à vontade para entrar em contato!" },
        ],

        stack: [
          { text: "Stack tecnológica", color: "cyan" },
          {
            text: "Frontend: React, TypeScript, JavaScript, Tailwind CSS",
            color: "green",
          },
          {
            text: "Backend: Node.js, NestJS, Express, Socket.IO",
            color: "green",
          },
          {
            text: "Banco de dados: PostgreSQL, Prisma, Firebase",
            color: "green",
          },
          {
            text: "Testes: Jest, Supertest",
            color: "green",
          },
          {
            text: "Ferramentas e infraestrutura: Git, Docker, AWS, GitHub Actions, Ollama",
            color: "green",
          },
          {
            text: "IA: RAG, embeddings, busca vetorial, reranking e LLMs locais",
            color: "green",
          },
        ],
      },
    },
  },

  en: {
    navigation: {
      terminal: "Terminal",
      projects: "Projects",
      experience: "Experience",
      ariaLabel: "Choose portfolio section",
    },

    hero: {
      greeting: "Hello, I'm",
      role: "Software Engineer",
      description:
        "I'm a full-stack developer focused on building modern, scalable, and maintainable web applications — especially in the SaaS and real-time communication space. I'm passionate about solving real problems through clean architecture, thoughtful design, and reliable engineering.",
    },

    projects: {
      title: "Featured Projects",
      subtitle: "Selected work",
      openProject: "Open project",
      aura: {
        description:
          "A social-impact platform designed to connect women to support networks and essential public services.",
      },
      rag: {
        description:
          "A local retrieval system combining embeddings, vector search, and reranking with LLMs.",
      },
      exatitech: {
        description:
          "An ENEM preparation platform focused on the most frequently tested subjects, with targeted study strategies to help students improve their scores in just a few weeks. Over 200 students have already improved their results using this method.",
      },
    },

    experience: {
      title: "Work Experience",
      subtitle: "My professional journey in software engineering",

      flowbit: {
        role: "Mid Software Engineer",
        description:
          "Building scalable applications and real-time communication systems.",
        highlights: [
          "Developed real-time systems with Node.js, TypeScript, Express, Socket.IO, and Prisma.",
          "Reduced initial load time by 45% and API requests by approximately 30%.",
          "Implemented presence tracking with 98% synchronization accuracy.",
          "Built an FCM notification system delivering 12,000+ notifications per month with less than 1% failure.",
        ],
      },

      sintese: {
        role: "Junior Software Engineer",
        description:
          "Developed web applications, automation workflows, and CI/CD pipelines.",
        highlights: [
          "Automated report generation, reducing manual effort by 70%.",
          "Implemented authentication and authorization using NestJS.",
          "Reduced deployment time from 15 to 10 minutes using GitHub Actions and AWS.",
          "Increased release frequency by 20%.",
        ],
      },

      center: {
        role: "Software Engineer Intern",
        description:
          "Contributed to e-commerce improvements and payment integrations.",
        highlights: [
          "Improved navigation and product discovery, increasing navigation speed by 20%.",
          "Improved Stripe payment reliability, reducing payment errors by 15%.",
        ],
      },
    },

    terminal: {
      welcome: "Welcome to Felipe's Portfolio Terminal.",
      help: "Type 'help' to see the available commands.",
      placeholder: "Type 'help' to get started...",
      inputLabel: "Enter terminal command",
      outputLabel: "Terminal output",
      online: "ONLINE",
      commandNotFound: "Command not found: {command}. Type 'help'.",

      commands: {
        help: {
          description: "List available commands",
          title: "Available commands:",
          tip: "Tip: use the ↑ and ↓ arrow keys to navigate command history.",
        },

        about: {
          description: "Learn about me",
          title: "About me",
          lines: [
            "Hi! I'm Felipe Lino, a Software Engineer.",
            "Full-stack developer experienced in building scalable applications, real-time systems, and efficient solutions.",
            "I mainly work with backend and frontend development, service integration, automation, and data-driven applications.",
            "I'm particularly interested in Software Engineering and Applied Artificial Intelligence.",
          ],
        },

        projects: {
          description: "Explore my projects",
          title: "Projects",
          lines: [
            "AURA — A social-impact platform connecting women to support networks and public services.",
            "Exatitech — An ENEM preparation platform focused on frequently tested subjects and targeted study strategies.",
            "Local RAG Engine — A local RAG system combining embeddings, vector search, reranking, and locally hosted language models.",
          ],
        },

        experience: {
          description: "View my work experience",
          title: "Work Experience",
          lines: [
            "FlowBit Tech — Mid Software Engineer (Jan 2025 – Present)",
            "Full-stack application development using Node.js, TypeScript, React, and real-time systems.",
            "REST APIs, database integrations, automated testing, and notification services.",
            "Reduced initial load time by 45% and supported over 12,000 monthly notifications with less than 1% failure rate.",
            "Síntese BI — Junior Software Engineer (Aug 2023 – Dec 2024)",
            "Process automation and pipeline integration using GitHub Actions and AWS.",
            "Reduced manual processes by 70% and pipeline execution time from 15 to 10 minutes.",
            "Increased release frequency by 20%, achieving 96% reliability.",
            "Center Cartuchos — Software Engineer Intern (Nov 2021 – Feb 2022)",
          ],
        },

        contact: {
          description: "Get in touch",
          title: "Contact",
          email: "Email:",
          phone: "Phone:",
          linkedin: "LinkedIn:",
          github: "GitHub:",
          cta: "Feel free to get in touch!",
        },

        stack: {
          description: "Display my technology stack",
          title: "Technology Stack",
          frontend: "Frontend:",
          backend: "Backend:",
          database: "Database:",
          tools: "Tools and infrastructure:",
        },
      },

      commandOutput: {
        help: [
          { text: "Available commands:", color: "cyan" },
          { text: "help — List available commands" },
          { text: "about — Learn about me" },
          { text: "projects — Explore my projects" },
          { text: "experience — View my work experience" },
          { text: "contact — Get in touch" },
          { text: "stack — Display my technology stack" },
          { text: "clear — Clear the terminal" },
          {
            text: "Tip: use the ↑ and ↓ arrow keys to navigate command history.",
            color: "muted",
          },
        ],

        about: [
          { text: "About me", color: "cyan" },
          { text: "Hi! I'm Felipe Lino, a Software Engineer." },
          {
            text: "Full-stack developer experienced in building scalable applications, real-time systems, and efficient solutions.",
          },
          {
            text: "I mainly work with backend and frontend development, service integration, automation, and data-driven applications.",
          },
          {
            text: "I'm particularly interested in Software Engineering and Applied Artificial Intelligence.",
          },
        ],

        projects: [
          { text: "Projects", color: "cyan" },
          {
            text: "AURA — A social-impact platform connecting women to support networks and public services.",
          },
          {
            text: "Exatitech — An ENEM preparation platform focused on frequently tested subjects and targeted study strategies.",
          },
          {
            text: "Local RAG Engine — A local RAG system combining embeddings, vector search, reranking, and locally hosted language models.",
          },
        ],

        experience: [
          { text: "Work Experience", color: "cyan" },
          {
            text: "FlowBit Tech — Mid Software Engineer (Jan 2025 – Present)",
            color: "green",
          },
          {
            text: "Full-stack development with Node.js, TypeScript, React, and real-time systems.",
          },
          {
            text: "REST APIs, database integrations, automated testing, and notification services.",
          },
          {
            text: "45% faster initial load; over 12,000 monthly notifications with less than 1% failure rate.",
          },
          {
            text: "Síntese BI — Junior Software Engineer (Aug 2023 – Dec 2024)",
            color: "green",
          },
          {
            text: "Process automation and pipeline integration using GitHub Actions and AWS.",
          },
          {
            text: "70% fewer manual processes; pipeline execution reduced from 15 to 10 minutes.",
          },
          {
            text: "20% more releases and 96% reliability.",
          },
          {
            text: "Center Cartuchos — Software Engineer Intern (Nov 2021 – Feb 2022)",
            color: "green",
          },
        ],

        contact: [
          { text: "Contact", color: "cyan" },
          { text: "Email: felipegadelha2004@gmail.com", color: "green" },
          { text: "Phone: +55 88 99204-8450", color: "green" },
          {
            text: "LinkedIn: linkedin.com/in/felipe-lino-developer",
            color: "green",
          },
          { text: "GitHub: github.com/felipe-gl18", color: "green" },
          { text: "Feel free to get in touch!" },
        ],

        stack: [
          { text: "Technology Stack", color: "cyan" },
          {
            text: "Frontend: React, TypeScript, JavaScript, Tailwind CSS",
            color: "green",
          },
          {
            text: "Backend: Node.js, NestJS, Express, Socket.IO",
            color: "green",
          },
          {
            text: "Database: PostgreSQL, Prisma, Firebase",
            color: "green",
          },
          {
            text: "Testing: Jest, Supertest",
            color: "green",
          },
          {
            text: "Tools and infrastructure: Git, Docker, AWS, GitHub Actions, Ollama",
            color: "green",
          },
          {
            text: "AI: RAG, embeddings, vector search, reranking, and local LLMs",
            color: "green",
          },
        ],
      },
    },
  },
} as const;
