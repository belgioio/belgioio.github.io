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
        },{id: "news-with-60-attendees-our-workshop-systems-theory-of-optimization-learning-and-control-algorithms-was-the-largest-at-ecc-2025-in-thessaloniki-we-ll-make-the-recordings-available-soon-stay-tuned",
          title: 'With 60 attendees, our workshop Systems Theory of Optimization, Learning, and Control Algorithms...',
          description: "",
          section: "News",},{id: "news-i-ve-finally-launched-my-website-this-website",
          title: 'I’ve finally launched my website! This website ✨',
          description: "",
          section: "News",},{id: "news-new-cdc-preprint-online-we-study-voltage-support-in-transmission-grids-using-game-theory",
          title: '📄 New CDC preprint online! We study voltage support in transmission grids using...',
          description: "",
          section: "News",},{id: "news-i-m-attending-the-swiss-clock-summit-in-the-beautiful-engelberg-catch-me-around-the-workshop-for-a-chat-about-research-or-upcoming-job-opportunities-in-my-team",
          title: 'I’m attending the Swiss Clock Summit in the beautiful Engelberg 🇨🇭 Catch me...',
          description: "",
          section: "News",},{id: "news-new-phd-opening-in-my-team-check-out-the-call-here",
          title: '👩‍🎓 New PhD opening in my team! Check out the call here.',
          description: "",
          section: "News",},{id: "news-panos-was-awarded-the-ieee-css-swiss-chapter-young-author-award-2025-for-our-big-hype",
          title: '🏆Panos was awarded the IEEE CSS Swiss Chapter Young Author Award 2025 for...',
          description: "",
          section: "News",},{id: "news-jonas-won-the-best-poster-award-at-the-swiss-clock-summit-2025-by-land-slide-vote-25-of-the-attendees-this-is-the-first-award-on-the-shelf-of-the-maestro-project",
          title: '🥇Jonas won the Best Poster Award at the Swiss CLOCK Summit 2025 by...',
          description: "",
          section: "News",},{id: "news-postdoc-opportunity-digital-futures-sponsors-up-to-ten-postdoc-fellowshiup-in-technologies-for-digital-transformation-more-information-here",
          title: '🔑 Postdoc opportunity! Digital Futures sponsors up to ten postdoc fellowshiup in technologies...',
          description: "",
          section: "News",},{id: "news-awarded-a-starting-grant-4-8m-sek-from-the-swedish-research-council-vr-for-the-project-autonomous-peer-to-peer-energy-trading-scalability-robustness-and-fairness",
          title: '💰 Awarded a Starting Grant (4.8M SEK) from the Swedish Research Council (VR)...',
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
          section: "News",},{id: "news-awarded-the-research-network-grant-from-nordforsk-2m-nok-to-create-the-first-nordic-network-of-living-labs-along-with-partners-from-dtu-uio-and-nmbu",
          title: '💰 Awarded the Research Network Grant from NordForsk (2M NOK) to create the...',
          description: "",
          section: "News",},{id: "news-️-i-ve-been-elected-working-group-chair-for-optimization-and-game-theory-for-the-ieee-css-technical-committee-on-network-systems",
          title: '🗳️ I’ve been elected Working Group Chair for Optimization and Game Theory for...',
          description: "",
          section: "News",},{id: "news-awarded-a-digital-futures-flagship-grant-7m-sek-together-with-dimos-and-ivan-for-the-collaborative-project-håg-human-in-the-loop-autonomy-via-hybrid-games",
          title: '💰 Awarded a Digital Futures Flagship Grant (7M SEK) together with Dimos and...',
          description: "",
          section: "News",},{id: "news-awarded-the-göran-gustafsson-prize-3-75m-sek-for-engineering-physics-at-kth",
          title: '🏆 Awarded the Göran Gustafsson Prize (3.75M SEK) for Engineering Physics at KTH....',
          description: "",
          section: "News",},{id: "news-our-workshop-systems-theory-of-optimization-learning-and-control-algorithms-has-been-accepted-at-ecc-2026-in-reykjavík-register-here",
          title: '👥 Our workshop “Systems Theory of Optimization, Learning, and Control Algorithms” has been...',
          description: "",
          section: "News",},{id: "news-new-preprint-online-introducing-dr-daqp-the-fastest-open-source-solver-for-avis",
          title: '📄 New preprint online! Introducing DR-DAQP, the fastest open source solver for AVIs...',
          description: "",
          section: "News",},{id: "news-invited-talk-online-feedback-optimization-of-complex-multi-agent-systems-at-the-dcsc-seminar-series-in-tu-delft-the-netherlands",
          title: '🎤 Invited talk “Online feedback optimization of complex multi-agent systems” at the DCSC...',
          description: "",
          section: "News",},{id: "news-with-48-registered-participants-our-workshop-systems-theory-of-optimization-learning-and-control-algorithms-was-the-largest-at-ecc-2026-check-out-the-slides-here",
          title: '🌋 With 48 registered participants, our workshop “Systems Theory of Optimization, Learning, and...',
          description: "",
          section: "News",},{id: "news-presented-our-latest-works-on-incentive-based-control-big-hype-maestro-at-the-ifac-26-workshop-from-optimization-to-autonomy-trends-and-open-problems-in-algorithm-based-control-in-busan-south-korea",
          title: '🇰🇷 Presented our latest works on Incentive-Based Control (BIG Hype, MAESTRO) at the...',
          description: "",
          section: "News",},{id: "news-new-postdoc-opportunity-learn-more-and-apply-here",
          title: '🌟 New postdoc opportunity! Learn more and apply here.',
          description: "",
          section: "News",},{id: "news-new-phd-opportunity-learn-more-and-apply-here",
          title: '🌟 New phd opportunity! Learn more and apply here 🐠 🤖',
          description: "",
          section: "News",},{id: "news-another-new-preprint-by-andrea-martin-with-filippo-fabiani-finite-sample-guarantees-for-data-driven-operator-splitting-methods-via-martingale-inequalities-with-the-first-a-priori-certificates-for-data-driven-davis-yin-splitting-whose-statistical-error-vanishes-as-the-sample-size-grows",
          title: '📄 Another new preprint by Andrea Martin, with Filippo Fabiani: Finite-sample guarantees for...',
          description: "",
          section: "News",},{id: "news-new-preprint-by-andrea-martin-the-price-of-distributional-robustness-in-linear-quadratic-control-how-many-samples-does-a-wasserstein-distributionally-robust-lq-controller-need-to-stay-within-a-given-tolerance-of-the-oracle-controller",
          title: '📄 New preprint by Andrea Martin! The Price of Distributional Robustness in Linear...',
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
            },},{id: "people-jinyu-han",
          title: 'Jinyu Han',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jinyu-han/";
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
            },},{id: "people-theresa-johansson",
          title: 'Theresa Johansson',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/theresa-johansson/";
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
          window.open("https://github.com/belgioio", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/giuseppe-belgioioso-495843108", "_blank");
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
