// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "People",
          description: "I am privileged to work with an outstanding research team! We&#39;re rapidly growing in size, with everyone either formally co-advised or integrated through various collaborations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-game-on",
          title: "Game on!",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/gameonseminars.info/";
          },
        },{id: "news-with-60-attendees-our-workshop-systems-theory-of-optimization-learning-and-control-algorithms-was-the-largest-at-ecc-2025-in-thessaloniki",
          title: 'With 60 attendees, our workshop Systems Theory of Optimization, Learning, and Control Algorithms...',
          description: "",
          section: "News",},{id: "news-i-ve-finally-launched-my-website-this-website",
          title: 'I’ve finally launched my website! This website ✨',
          description: "",
          section: "News",},{id: "news-new-cdc-preprint-online-we-study-voltage-support-in-transmission-grids-using-game-theory",
          title: '📄 New CDC preprint online! We study voltage support in transmission grids using...',
          description: "",
          section: "News",},{id: "news-attending-the-swiss-clock-summit-in-engelberg-come-chat-about-research-or-open-positions-in-my-team",
          title: '🇨🇭 Attending the Swiss Clock Summit in Engelberg. Come chat about research or...',
          description: "",
          section: "News",},{id: "news-new-phd-opening-in-my-team-check-out-the-call-here",
          title: '👩‍🎓 New PhD opening in my team! Check out the call here.',
          description: "",
          section: "News",},{id: "news-panos-was-awarded-the-ieee-css-swiss-chapter-young-author-award-2025-for-our-big-hype",
          title: '🏆Panos was awarded the IEEE CSS Swiss Chapter Young Author Award 2025 for...',
          description: "",
          section: "News",},{id: "news-jonas-won-the-best-poster-award-at-the-swiss-clock-summit-2025-the-first-award-for-the-maestro-project",
          title: '🥇 Jonas won the Best Poster Award at the Swiss CLOCK Summit 2025,...',
          description: "",
          section: "News",},{id: "news-postdoc-opportunity-digital-futures-sponsors-up-to-ten-postdoc-fellowshiup-in-technologies-for-digital-transformation-more-information-here",
          title: '🔑 Postdoc opportunity! Digital Futures sponsors up to ten postdoc fellowshiup in technologies...',
          description: "",
          section: "News",},{id: "news-awarded-a-swedish-research-council-vr-starting-grant-4-8m-sek-for-autonomous-peer-to-peer-energy-trading-scalability-robustness-and-fairness",
          title: '💰 Awarded a Swedish Research Council (VR) Starting Grant (4.8M SEK) for “Autonomous...',
          description: "",
          section: "News",},{id: "news-new-phd-opening-in-autonomous-decentralized-energy-market-official-call-here",
          title: '🎓 New PhD opening in “Autonomous Decentralized Energy Market” 🤖💱⚡ Official call here....',
          description: "",
          section: "News",},{id: "news-new-paper-release-we-present-the-explicit-game-theoretic-lqr",
          title: '📄 New paper release! We present “The explicit game-theoretic LQR”.',
          description: "",
          section: "News",},{id: "news-new-preprint-online-learning-to-accelerate-km-fixed-point-iterations-with-guarantees",
          title: '📄 New preprint online! Learning to accelerate KM fixed-point iterations with guarantees.',
          description: "",
          section: "News",},{id: "news-awarded-a-nordforsk-research-network-grant-2m-nok-for-the-nordic-network-of-living-labs-with-dtu-uio-and-nmbu",
          title: '💰 Awarded a NordForsk Research Network Grant (2M NOK) for the Nordic Network...',
          description: "",
          section: "News",},{id: "news-️-i-ve-been-elected-working-group-chair-for-optimization-and-game-theory-for-the-ieee-css-technical-committee-on-network-systems",
          title: '🗳️ I’ve been elected Working Group Chair for Optimization and Game Theory for...',
          description: "",
          section: "News",},{id: "news-awarded-a-digital-futures-flagship-grant-7m-sek-with-dimos-and-ivan-for-the-project-håg-human-in-the-loop-autonomy-via-hybrid-games",
          title: '💰 Awarded a Digital Futures Flagship Grant (7M SEK) with Dimos and Ivan...',
          description: "",
          section: "News",},{id: "news-awarded-the-göran-gustafsson-prize-3-75m-sek-for-engineering-physics-at-kth",
          title: '🏆 Awarded the Göran Gustafsson Prize (3.75M SEK) for Engineering Physics at KTH....',
          description: "",
          section: "News",},{id: "news-our-workshop-systems-theory-of-optimization-learning-and-control-algorithms-is-accepted-at-ecc-2026-register",
          title: '👥 Our workshop “Systems Theory of Optimization, Learning, and Control Algorithms” is accepted...',
          description: "",
          section: "News",},{id: "news-new-preprint-online-introducing-dr-daqp-the-fastest-open-source-solver-for-avis",
          title: '📄 New preprint online! Introducing DR-DAQP, the fastest open source solver for AVIs...',
          description: "",
          section: "News",},{id: "news-invited-talk-online-feedback-optimization-of-complex-multi-agent-systems-at-the-dcsc-seminar-series-in-tu-delft-the-netherlands",
          title: '🎤 Invited talk “Online feedback optimization of complex multi-agent systems” at the DCSC...',
          description: "",
          section: "News",},{id: "news-with-48-participants-our-workshop-on-systems-theory-of-algorithms-was-the-largest-at-ecc-2026-slides-here",
          title: '🌋 With 48 participants, our workshop on Systems Theory of Algorithms was the...',
          description: "",
          section: "News",},{id: "news-presented-our-work-on-incentive-based-control-big-hype-maestro-at-the-ifac-26-workshop-from-optimization-to-autonomy-in-busan",
          title: '🇰🇷 Presented our work on incentive-based control (BIG Hype, MAESTRO) at the IFAC’26...',
          description: "",
          section: "News",},{id: "news-new-postdoc-opportunity-learn-more-and-apply-here",
          title: '🌟 New postdoc opportunity! Learn more and apply here.',
          description: "",
          section: "News",},{id: "news-new-phd-opportunity-learn-more-and-apply-here",
          title: '🌟 New phd opportunity! Learn more and apply here 🐠 🤖',
          description: "",
          section: "News",},{id: "news-another-preprint-by-andrea-martin-the-price-of-distributional-robustness-in-linear-quadratic-control",
          title: '📄 Another preprint by Andrea Martin: The Price of Distributional Robustness in Linear...',
          description: "",
          section: "News",},{id: "news-new-preprint-by-andrea-martin-and-filippo-fabiani-finite-sample-guarantees-for-data-driven-operator-splitting-methods-via-martingale-inequalities",
          title: '📄 New preprint by Andrea Martin and Filippo Fabiani: Finite-sample guarantees for data-driven...',
          description: "",
          section: "News",},{id: "people-andrea-martin",
          title: 'Andrea Martin',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/andrea-martin/";
            },},{id: "people-daniel-tihanyi",
          title: 'Daniel Tihanyi',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/daniel-tihanyi/";
            },},{id: "people-emilio-benenati",
          title: 'Emilio Benenati',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/emilio-benenati/";
            },},{id: "people-joas-kahlert",
          title: 'Joas Kahlert',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/joas-kahlert/";
            },},{id: "people-jonas-matt",
          title: 'Jonas Matt',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jonas-matt/";
            },},{id: "people-liquan-lin",
          title: 'Liquan Lin',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/liquan-lin/";
            },},{id: "people-lisa-innocenti-uccini",
          title: 'Lisa Innocenti Uccini',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/lisa-innocenti-uccini/";
            },},{id: "people-manqi-xu",
          title: 'Manqi Xu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/manqi-xu/";
            },},{id: "people-tommaso-zaccherini",
          title: 'Tommaso Zaccherini',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/tommaso-zaccherini/";
            },},{id: "people-yue-han",
          title: 'Yue Han',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yue-han/";
            },},{id: "projects-learn2play",
          title: 'Learn2play',
          description: "Learning to optimize for real-time control and coordination in multi-agent systems  | Digital Futures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/L2O/";
            },},{id: "projects-nordic-noll",
          title: 'Nordic NoLL',
          description: "The Nordic Network of Live-in Labs  | NordForsk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NLsquared/";
            },},{id: "projects-håg",
          title: 'HÅG',
          description: "Human-in-the-loop Autonomy via hybrid Games | Digital Futures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hag/";
            },},{id: "projects-maestro",
          title: 'MAESTRO',
          description: "Multi-Agent Systems in Transmission Grid Real-time Operation | Swiss Federal Office of Energy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/maestro/";
            },},{id: "projects-twin-ship",
          title: 'Twin-Ship',
          description: "Digital Twin-based Risk-informed Decision Support for Green Shipping | Digital Futures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/twin-ship/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%75%62%65%6C@%6B%74%68.%73%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zero-lab-kth", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/giuseppe-belgioioso-495843108", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8892-1466", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ck0wft8AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=56692853600", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kth.se/profile/giubel", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
