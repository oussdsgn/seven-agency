export const CAL_URL = "https://cal.com/seven-agency-admin/15min";

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: "/img/s1.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/seven-agency/posts/?viewAsMember=true", icon: "/img/s2.svg" },
  { label: "X", href: "https://x.com/", icon: "/img/s3.svg" },
];

export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Q29J%2BH5V+Rue+Djilali+Bounnama+El+Biar";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  scope: string;
  industry: string;
  timeline: string;
  live?: string;
  cover: string;
  hero: string;
  challenge: { text: string; points: string[] };
  solution: string;
  gallery: string[];
  result: { text: string; points: string[] };
  quote: { text: string; name: string; role: string; avatar: string };
};

export const projectList: Project[] = [
  {
    slug: "amsgroupe",
    title: "AMS Groupe Website",
    summary: "Elevated the portfolio design to showcase craftsmanship with greater clarity, cohesion, and visual impact.",
    scope: "Brand Identity + Website",
    industry: "Human Resources",
    timeline: "6 Weeks",
    live: "https://www.amsgroupes.com/",
    cover: "/img/p-ams-groupe.jpg",
    hero: "/img/p-ams-groupe.jpg",
    challenge: {
      text: "As Atelier Nine scaled its digital presence, users struggled to navigate a scattered and outdated portfolio. Project pages lacked structure, visuals felt inconsistent, and the browsing experience failed to reflect the studio’s premium craftsmanship.",
      points: [
        "Disorganized project layouts reducing clarity",
        "Inconsistent visual hierarchy across pages",
        "Slow-loading media impacting engagement",
        "Weak storytelling flow limiting conversions",
      ],
    },
    solution:
      "We reworked the portfolio architecture with a clean, gallery-first approach and introduced consistent layout rules for all project pages. Visual hierarchy was refined, imagery was optimized, and a modular system was built to support ongoing project updates.",
    gallery: ["/img/ams-g1.png", "/img/ams-g2.png"],
    result: {
      text: "Atelier Nine now delivers a polished, immersive portfolio experience. Users spend more time exploring work, bounce rates dropped, and project inquiries increased significantly.",
      points: ["Increase in portfolio engagement", "Higher project inquiry submissions", "Faster visual browsing performance"],
    },
    quote: {
      text: "Everything finally feels aligned with our vision. The new portfolio elevated our brand and made showcasing our work effortless.",
      name: "Akli Ait Ahcene",
      role: "CEO, AMS GROUP",
      avatar: "/img/q-akli.jpeg",
    },
  },
  {
    slug: "nova-studio",
    title: "AMS Agency",
    summary: "Unified the brand and service experience to better express value, improve navigation, and strengthen conversions.",
    scope: "Website Design + Brand Refresh",
    industry: "Creative & Consulting",
    timeline: "5 Weeks",
    cover: "/img/p-ams-agency.jpg",
    hero: "/img/p-ams-agency.jpg",
    challenge: {
      text: "Nova Studio struggled with a fragmented brand presence that diluted their message. Their website lacked cohesion, navigation was unclear, and key services were buried under confusing layouts, leading to missed opportunities.",
      points: [
        "Disconnected visual identity across sections",
        "Poorly structured service pages",
        "Messaging unclear for new visitors",
        "Low conversion due to weak page flow",
      ],
    },
    solution:
      "We unified the studio’s brand system with consistent typography, spacing, and layout patterns. Services were reorganized into clear categories, supported by improved content structure and simplified user flows.",
    gallery: ["/img/agency-g1.png", "/img/g9.png"],
    result: {
      text: "Nova Studio now communicates its value more confidently, driving higher engagement and smoother user journeys across all service pages.",
      points: ["Increase in service-page conversions", "Stronger brand perception", "Improved navigation completion rates"],
    },
    quote: {
      text: "The redesign brought clarity we were missing for years. Clients now understand our value instantly, and engagement has never been better.",
      name: "Nihad Ahmed Bensoltane",
      role: "Head of AMS Agency",
      avatar: "/img/q-nihad.jpeg",
    },
  },
  {
    slug: "wesh-kayen-app",
    title: "Wesh Kayen App",
    summary: "A bold, dark app that helps people in Algiers find what's on tonight, this weekend and every day in between.",
    scope: "Branding, UI/UX,  App Development",
    industry: "Events & Culture",
    timeline: "Ongoing",
    cover: "/img/p-wesh.jpg",
    hero: "/img/p-wesh.jpg",
    challenge: {
      text: "Finding what's happening in Algiers is harder than it should be. Events live in Instagram posts, group chats and word of mouth, and no single place shows what's on near you, today, in your language.",
      points: [
        "Listings scattered across social posts and flyers",
        "No map view of what's happening nearby",
        "Arabic, French and English all in daily use",
        "Hard to tell which listings are real and current",
      ],
    },
    solution:
      "Wesh Kayen puts it all in one dark, high-contrast app with a bold orange accent. A weekend digest, category browsing, a calendar and a live map make it quick to decide what to do. Discovery Hubs cover the always-open spots, and the app is built for English, French and Arabic. Behind it, a web dashboard lets me add, edit and review events, and community or scraped listings are reviewed before they go live.",
    gallery: ["/img/wesh-g1.png", "/img/p-wesh.jpg"],
    result: {
      text: "Wesh Kayen is a working app with a real backend, built around a review step for every listing.",
      points: [
        "Android app with onboarding, weekend digest, browse, calendar, map, saved events and profile",
        "Google sign-in and saved events",
        "Admin dashboard for events, hubs, categories, cities and submissions, hosted on Firebase",
        "Next up: the Google Play release",
      ],
    },
    quote: {
      text: "I built Wesh Kayen so finding something to do in Algiers doesn't mean digging through Instagram posts and group chats. One app, real listings, in your language.",
      name: "Oussama Aba",
      role: "Founder & Designer",
      avatar: "/img/q-oussama.png",
    },
  },
  {
    slug: "haven-living",
    title: "La Cité Asiatique",
    summary: "Created a warm, lifestyle-driven digital presence that highlights interior quality, storytelling, and modern aesthetics.",
    scope: "Brand Direction + Web Design",
    industry: "Resturant & Catering",
    timeline: "7 Weeks",
    cover: "/img/p-lacite.jpg",
    hero: "/img/p-lacite.jpg",
    challenge: {
      text: "Haven Living wanted to showcase modern interior solutions, but their platform felt outdated and lacked warmth. Users had difficulty viewing collections, and the design didn’t reflect the sophistication of their physical spaces.",
      points: [
        "Inconsistent product presentation",
        "Weak imagery hierarchy reducing impact",
        "Limited storytelling around design philosophy",
        "Low discovery across categories",
      ],
    },
    solution:
      "We shifted the experience to a lifestyle-driven layout, emphasizing large visuals, clean modular grids, and emotional storytelling. Product collections were reorganized for easier browsing and better engagement.",
    gallery: ["/img/lacite-g1.png", "/img/g7.png"],
    result: {
      text: "Haven Living now delivers an inviting, premium browsing experience that mirrors the quality of its interiors, resulting in higher exploration and improved conversion paths.",
      points: ["Increase in collection page views", "Higher add-to-inquiry actions", "Improved time on site"],
    },
    quote: {
      text: "The experience feels warm, modern, and true to our identity. It completely transformed how clients explore our interiors.",
      name: "Mason Clark",
      role: "Chief Risk Officer",
      avatar: "/img/q-mason.jpg",
    },
  },
  {
    slug: "orion-fitness",
    title: "Twsel Express Logistics",
    summary: "Designed a motivating mobile experience with clearer progress tracking, smoother usability, and stronger daily engagement.",
    scope: "Brand Identity + Web UI",
    industry: "Logistics",
    timeline: "8 Weeks",
    live: "https://www.twselexpress.com",
    cover: "/img/p-twsel.jpg",
    hero: "/img/p-twsel.jpg",
    challenge: {
      text: "Orion Fitness aimed to create a motivating wellness experience, but users struggled with unclear data visuals, inconsistent screens, and limited mobile usability. Engagement dropped as goals became harder to track.",
      points: ["Confusing progress tracking", "Inconsistent workout UI patterns", "Weak mobile optimization", "Low motivation signals"],
    },
    solution:
      "We rebuilt the interface around clarity and momentum, using simplified data visuals, upgraded layouts, and micro-interactions that reinforce user progress. A modular design system was introduced to support new features.",
    gallery: ["/img/twsel-g1.png", "/img/twsel-g2.png", "/img/twsel-g3.png"],
    result: {
      text: "Engagement increased across key metrics as users found it easier to track habits and stay consistent. The refreshed mobile experience drove stronger retention and daily activity.",
      points: ["Higher daily active users", "Reduced onboarding drop-off", "Longer session durationsa"],
    },
    quote: {
      text: "The new interface motivates users daily. Tracking progress is clearer, faster, and far more engaging than before.",
      name: "Boudiaf Yassine",
      role: "Operations Head",
      avatar: "/img/q-boudiaf.png",
    },
  },
  {
    slug: "pixelforge-studio",
    title: "PixelForge Studio",
    summary: "Built a motion-first portfolio showcasing animation work with improved performance, clarity, and creative expression.",
    scope: "Brand Identity + Portfolio Website",
    industry: "Animation & Creative Production",
    timeline: "5 Weeks",
    cover: "/img/pf-hero.jpg",
    hero: "/img/pf-hero.jpg",
    challenge: {
      text: "PixelForge struggled to present its animation work digitally. Video reels were hard to browse, performance was slow, and the site lacked the playful energy that defines the brand.",
      points: ["Heavy media causing lag", "Confusing portfolio filters", "Weak expression of brand creativity", "Poor engagement on mobile"],
    },
    solution:
      "We introduced a dynamic, motion-first portfolio with faster media delivery, clearer navigation, and vibrant branding moments. Animations were used purposefully to reflect the studio’s creative personality.",
    gallery: ["/img/pf-g1.jpg", "/img/pf-g2.jpg"],
    result: {
      text: "PixelForge now has a lively digital identity that showcases its reels effortlessly, driving stronger client interest and higher viewing completion rates.",
      points: ["Increase in reel plays", "Better mobile performance", "Higher creative inquiry volume"],
    },
    quote: {
      text: "The design captures our creative energy perfectly. Reels load faster, look better, and attract more of the right clients.",
      name: "Michelle Gomez",
      role: "Marketing Lead",
      avatar: "/img/q-michelle.jpg",
    },
  },
  {
    slug: "summit-finance",
    title: "Summit Finance",
    summary: "Modernized the platform with streamlined dashboards, stronger trust signals, and simplified financial insight delivery.",
    scope: "Brand Direction + Web Platform",
    industry: "Finance & Consulting",
    timeline: "9 Weeks",
    cover: "/img/sf-hero.jpg",
    hero: "/img/sf-hero.jpg",
    challenge: {
      text: "Summit Finance needed a platform that felt secure, credible, and easy to understand. Their previous UI relied heavily on text, lacked structure, and overwhelmed users with information.",
      points: ["Dense content causing confusion", "Poor emphasis on trust signals", "Hard-to-read dashboards", "Weak hierarchy for key actions"],
    },
    solution:
      "We modernized the interface with simplified layouts, clearer typography, and stronger trust indicators. Dashboards were redesigned to highlight the most actionable insights and reduce cognitive load.",
    gallery: ["/img/sf-g1.jpg", "/img/sf-g2.jpg"],
    result: {
      text: "Users now navigate with confidence, and Summit Finance reports better engagement across tools and dashboards, boosting client trust.",
      points: ["Increase in dashboard usage", "Higher client onboarding completion", "Stronger perceived credibility"],
    },
    quote: {
      text: "The platform finally communicates trust and clarity. Clients navigate with confidence, and our workflows feel noticeably smoother.",
      name: "Liam Parker",
      role: "Operations Lead",
      avatar: "/img/q-liam.jpg",
    },
  },
  {
    slug: "harvest-organics",
    title: "Harvest Organics",
    summary: "Developed a nature-inspired brand system and packaging that strengthens shelf presence, authenticity, and consumer trust.",
    scope: "Packaging Design + Brand System",
    industry: "Food & Sustainable Goods",
    timeline: "6 Weeks",
    cover: "/img/ho-hero.jpg",
    hero: "/img/ho-hero.jpg",
    challenge: {
      text: "Harvest Organics wanted packaging and a brand system that communicated freshness and sustainability, but their visuals felt generic and failed to stand out on shelves or digital channels.",
      points: ["Weak brand differentiation", "Inconsistent product labeling", "Limited storytelling around sourcing", "Low shelf impact"],
    },
    solution:
      "We built a nature-inspired identity using warm tones, organic patterns, and clean typography. Packaging layouts were standardized, and storytelling elements were added to highlight quality and sustainability.",
    gallery: ["/img/ho-g1.jpg", "/img/ho-g2.jpg"],
    result: {
      text: "The refreshed brand gained stronger recognition both online and in retail environments, driving higher customer trust and improved sales performance.",
      points: ["Increase in product visibility", "Stronger customer recall", "Higher sales lift across key items"],
    },
    quote: {
      text: "The new brand tells our story instantly. Customers connect with us more, and the packaging stands out everywhere.",
      name: "Emily Ross",
      role: "HR Manager",
      avatar: "/img/q-emily.jpg",
    },
  },
];

export const getProject = (slug: string) => projectList.find((p) => p.slug === slug);

type Block = { h: string; p?: string; list?: string[] };

export type Post = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  author: string;
  avatar: string;
  img: string;
  body: Block[];
};

const perfBody: Block[] = [
  {
    h: "Introduction",
    p: "Performance is a core pillar of great user experience. In fast-paced digital environments, Framer gives designers and developers the tools to build stunning interfaces that load fast and respond instantly.",
  },
  {
    h: "Why performance matters",
    p: "Slow websites lose users within seconds. A high-performance Framer project creates smoother interactions, better SEO results, and stronger overall engagement.",
  },
  {
    h: "How to optimize performance in framer",
    list: [
      "Optimize Image Assets: Use WebP, intelligent cropping, and responsive sizing.",
      "Use Variants Strategically: Reduce unnecessary state complexity.",
      "Avoid Overloaded Animations: Keep transitions smooth and purposeful.",
      "Smart Component Structure: Reuse elements to reduce re-renders.",
      "Minimal Script Execution: Keep JS clean, efficient, and component-based.",
    ],
  },
  {
    h: "Tools framer provides",
    p: "Framer’s built-in performance panel, code overrides, and animation engine allow precise optimization without manual guesswork.",
  },
  {
    h: "Conclusion",
    p: "Framer makes it possible to build visually rich experiences that remain fast, efficient, and scalable. With the right techniques, performance becomes a natural part of your design workflow.",
  },
];

export const postList: Post[] = [
  {
    slug: "the-future-of-scalable-design-systems-in-2025",
    tag: "Design",
    title: "The future of scalable design systems in 2025",
    date: "Jan 2, 2026",
    author: "Sophia Reyes",
    avatar: "/img/a-sophia.jpg",
    img: "/img/bh2.jpg",
    body: [
      {
        h: "Introduction",
        p: "Design systems continue to evolve as product teams grow and digital experiences expand across platforms. In 2025, scalable systems must support rapid iteration, unified branding, and flexible structures that adapt to changing business needs.",
      },
      {
        h: "Why scalable systems matter",
        p: "Teams rely on consistent patterns to move quickly. A scalable design system reduces friction, lowers design debt, and ensures that every product touchpoint feels cohesive and intentional.",
      },
      {
        h: "How scalable design systems evolve",
        list: [
          "Token-Based Foundations: Centralized tokens make updates faster and easier.",
          "Adaptive Components: Variants support multiple layouts without duplication.",
          "Cross-Platform Alignment: Ensures consistency across web, mobile, and internal tools.",
          "Automated Standards: Built-in rules maintain accessibility and uniform spacing.",
          "Collaborative Workflows: Shared libraries help teams ship with clarity and confidence.",
        ],
      },
      {
        h: "Tools supporting system scaling",
        p: "Modern platforms now offer automated documentation, live component previews, and version-controlled libraries that help teams maintain stability as the system grows.",
      },
      {
        h: "Conclusion",
        p: "Scalable design systems in 2025 are flexible, modular, and designed for constant evolution. With strong foundations and smart tooling, teams can create experiences that remain consistent, intuitive, and ready for future expansion.",
      },
    ],
  },
  {
    slug: "why-storytelling-shapes-brand-success",
    tag: "Branding",
    title: "Why storytelling shapes brand success",
    date: "Dec 20, 2025",
    author: "Mason Clark",
    avatar: "/img/t3.jpg",
    img: "/img/bh1.jpg",
    body: [
      {
        h: "Introduction",
        p: "Storytelling has become a central force in shaping how people understand and remember brands. When used effectively, narrative design creates emotional resonance and transforms ordinary interactions into meaningful experiences.",
      },
      {
        h: "Why storytelling matters",
        p: "Strong stories help audiences connect with a brand’s purpose. They clarify value, build trust, and make complex ideas easier to understand — all while strengthening long-term loyalty.",
      },
      {
        h: "How storytelling drives brand success",
        list: [
          "Clear Brand Voice: A consistent tone builds familiarity and trust.",
          "Emotion-Led Messaging: Helps users relate to the mission and values.",
          "Structured Narratives: Guides users through product features and benefits.",
          "Visual Storytelling: Imagery and layout reinforce the message.",
          "Memorable Experiences: Strong narratives differentiate the brand from competitors.",
        ],
      },
      {
        h: "Tools that support storytelling",
        p: "Modern design platforms and content systems offer modular components, dynamic layouts, and animation tools that help brands communicate stories with clarity and impact.",
      },
      {
        h: "Conclusion",
        p: "Storytelling shapes perception, strengthens identity, and elevates every touchpoint. When brands use narrative design intentionally, they create richer experiences that drive engagement and long-term brand success.",
      },
    ],
  },
  {
    slug: "built-for-high-performance-in-framer",
    tag: "Development",
    title: "Built for High-Performance in Framer",
    date: "Dec 6, 2025",
    author: "Caleb Foster",
    avatar: "/img/t1.jpg",
    img: "/img/bh3.jpg",
    body: perfBody,
  },
  {
    slug: "creating-lightning-fast-websites-in-framer",
    tag: "Development",
    title: "Creating Lightning-Fast Websites in Framer",
    date: "Nov 3, 2025",
    author: "Emily Ross",
    avatar: "/img/a-emily.jpg",
    img: "/img/bh4.jpg",
    body: perfBody,
  },
  {
    slug: "predictive-analytics-seeing-tomorrow-today",
    tag: "Branding",
    title: "How stories shape digital experiences",
    date: "Oct 31, 2025",
    author: "Logan Hayes",
    avatar: "/img/a-logan.jpg",
    img: "/img/bh5.jpg",
    body: [
      {
        h: "Introduction",
        p: "Storytelling has always been central to human communication. In the digital world, narrative design transforms interfaces from functional screens into memorable experiences that connect emotionally with users.",
      },
      {
        h: "Why narrative matters in digital products",
        p: "Brands are no longer defined solely by visuals — they are shaped by the stories they tell. Narrative-driven experiences help users understand the why behind a product, increasing loyalty and trust.",
      },
      {
        h: "Key elements of narrative design",
        list: [
          "Brand Voice and Tone: Creates personality across every touchpoint.",
          "Emotional Anchors: Helps users form meaningful connections.",
          "Structured Information Flow: Tells a story with clarity and intention.",
          "Visual Storytelling: Uses imagery, animation, and layout to reinforce narrative.",
        ],
      },
      {
        h: "Applying narrative to UI/UX",
        p: "From onboarding flows to product tours, narrative design helps guide users through complex products in a way that feels intuitive and compelling.",
      },
      {
        h: "Conclusion",
        p: "Narrative design transforms digital products into experiences users want to return to. When brands tell stronger stories, they create deeper relationships.",
      },
    ],
  },
  {
    slug: "building-adaptive-ui-for-modern-teams",
    tag: "UI Systems",
    title: "Building Adaptive UI for Modern Teams",
    date: "Oct 14, 2025",
    author: "Emily Ross",
    avatar: "/img/a-emily.jpg",
    img: "/img/bh6.jpg",
    body: [
      {
        h: "Introduction",
        p: "As digital products grow more complex, design systems must evolve beyond static libraries. Modern teams need adaptive systems — living frameworks that adjust to new technologies, workflows, and multi-device experiences.",
      },
      {
        h: "Why adaptive design systems matter",
        p: "Traditional design systems often break under rapid iteration. Adaptive systems, however, are built with resilience and flexibility in mind. They empower designers and developers to maintain consistency while experimenting freely.",
      },
      {
        h: "Core principles of adaptive systems",
        list: [
          "Token-Driven Architecture: Ensures scalable typography, spacing, color, and components.",
          "Variant-Rich Components: Enables flexibility without sacrificing brand identity.",
          "Automation-First Workflows: Syncs design and code changes instantly.",
          "Cross-Platform Consistency: Guarantees unified UI across web, mobile, and internal tools.",
        ],
      },
      {
        h: "How teams benefit",
        p: "With adaptive systems, teams reduce design debt, accelerate build cycles, and ship polished interfaces at scale. The result? Stronger brand presence and faster product evolution.",
      },
      {
        h: "Conclusion",
        p: "Scalable design systems are no longer a luxury — they’re a necessity. Adaptive frameworks ensure your product evolves as quickly as your users’ expectations.",
      },
    ],
  },
];

export const getPost = (slug: string) => postList.find((p) => p.slug === slug);
