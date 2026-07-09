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
            window.location.href = "/teamV2/";
          },
        },{id: "nav-game-on",
          title: "Game on!",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/gameonseminars.info/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-with-60-attendees-our-workshop-systems-theory-of-optimization-learning-and-control-algorithms-was-the-largest-at-ecc-2025-in-thessaloniki-we-ll-make-the-recordings-available-soon-stay-tuned",
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
          section: "News",},{id: "projects-learn2play",
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
          window.open("https://github.com/belgioio# your GitHub user name", "_blank");
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
