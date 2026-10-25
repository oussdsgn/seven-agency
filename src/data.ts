export const clients = [
  { src: "/img/c-innovea.png", alt: "Innovea", w: 96 },
  { src: "/img/c-ams.png", alt: "AMS Groupe", w: 64 },
  { src: "/img/c-twsel.png", alt: "Twsel Express", w: 88 },
  { src: "/img/c-inpha.png", alt: "INPHA-MédiS", w: 40 },
];

export const showcaseTop = ["g1.png", "g2.png", "g3.png", "g4.jpg", "g5.jpg", "g6.jpg"];
export const showcaseBottom = ["g7.png", "g8.png", "g9.png", "g10.jpg", "g11.jpg", "g12.jpg"];

export const compare = {
  others: [
    "Slow, unclear timelines",
    "Extra charges for changes",
    "No clear process",
    "Designs break in dev",
    "Complex, hard builds",
  ],
  us: [
    "Clear weekly updates",
    "Transparent pricing",
    "Documented workflow",
    "Design–dev alignment",
    "Clean, scalable builds",
  ],
};

export const strategySlides = [
  { title: "Strategy that matters", text: "Thoughtful direction aligned with real business goals." },
  { title: "Design with intent", text: "Every pixel crafted to communicate and convert." },
  { title: "Built to scale", text: "Clean, flexible systems that grow with your brand." },
];

const sharedDesc =
  "We build fast, scalable, and fully responsive websites that perform beautifully — whether it’s a simple portfolio or a full digital platform";

export const services = [
  {
    title: "Branding & Identity",
    icon: "/img/sv-branding.gif",
    desc: "From concept to prototype, we create user-centered interfaces that balance beauty with performance, ensuring every interaction feels effortless.",
    tags: ["Identity", "Positioning", "Voice"],
  },
  {
    title: "UI/UX Design",
    icon: "/img/sv-uiux.gif",
    desc: "Crafting intuitive, user-centered interfaces that blend clarity, beauty, and effortless interaction.",
    tags: ["Web", "Product", "App"],
  },
  { title: "Web Development", icon: "/img/sv-web.gif", desc: sharedDesc, tags: ["Framer", "Full Stack", "Figma"] },
  {
    title: "Digiral Marketing",
    icon: "/img/sv-marketing.png",
    desc: sharedDesc,
    tags: ["Social Media", "Community Management", "Ads"],
  },
  {
    title: "Consulting",
    icon: "/img/sv-branding.gif",
    desc: sharedDesc,
    tags: ["Social Media", "Community Management", "Ads"],
  },
];

export const projects = [
  {
    title: "La Cité Asiatique",
    industry: "Resturant & Catering",
    scope: "Brand Direction + Web Design",
    desc: "Created a warm, lifestyle-driven digital presence that highlights interior quality, storytelling, and modern aesthetics.",
    img: "/img/p-lacite.jpg",
  },
  {
    title: "Twsel Express Logistics",
    industry: "Logistics",
    scope: "Brand Identity + Web UI",
    desc: "Designed a motivating mobile experience with clearer progress tracking, smoother usability, and stronger daily engagement.",
    img: "/img/p-twsel.jpg",
  },
  {
    title: "AMS Groupe Website",
    industry: "Human Resources",
    scope: "Brand Identity + Website",
    desc: "Elevated the portfolio design to showcase craftsmanship with greater clarity, cohesion, and visual impact.",
    img: "/img/p-ams-groupe.jpg",
  },
  {
    title: "AMS Agency",
    industry: "Creative & Consulting",
    scope: "Website Design + Brand Refresh",
    desc: "Unified the brand and service experience to better express value, improve navigation, and strengthen conversions.",
    img: "/img/p-ams-agency.jpg",
  },
];

export const steps = [
  {
    title: "Strategy",
    desc: "We define direction, structure, and positioning to support every design decision.",
    tags: ["Brand Strategy", "Messaging", "Roadmap"],
  },
  {
    title: "Design",
    desc: "We craft intuitive interfaces and cohesive visuals that elevate the user experience.",
    tags: ["UI Design", "UX Design", "Visual System"],
  },
  {
    // Not readable on the live site (scroll-only) — placeholder copy in the same voice.
    title: "Development",
    desc: "We turn designs into fast, responsive, and scalable products built to perform.",
    tags: ["Framer", "Front-end", "CMS"],
  },
  {
    title: "Implementation",
    desc: "We integrate solutions smoothly into workflows to ensure efficiency and adoption.",
    tags: ["Setup", "Configuration", "Automation"],
  },
  {
    title: "Optimization",
    desc: "We refine, test, and enhance your product to drive ongoing growth and impact.",
    tags: ["Testing", "Continuous Improvement"],
  },
];

export const plans = {
  starter: {
    name: "Starter",
    price: "$699",
    desc: "Perfect for startups and small teams launching their first project.",
    features: ["1 Landing Page Design", "Basic Brand Guidelines", "Mobile Responsive Layout", "2 Revisions", "Delivery in 7 days"],
    cta: "Get started now",
  },
  growth: {
    name: "Growth",
    price: "$1499",
    desc: "Best for growing brands looking to scale their digital presence.",
    features: [
      "Multi-page Website Design",
      "Brand Strategy Session",
      "Web Animations & Interactions",
      "4 Revisions",
      "Delivery in 14 days",
    ],
    cta: "Start your project",
  },
};

export const testimonials = [
  {
    quote: "Their process was smooth, collaborative, and incredibly intuitive — the final result reflects our identity perfectly.",
    name: "Jackson Carter",
    role: "Founder",
    img: "/img/t1.jpg",
  },
  {
    quote: "From concept to execution, they understood our goals and crafted a digital experience that feels uniquely ours.",
    name: "Olivia Bennett",
    role: "Manager",
    img: "/img/t2.jpg",
  },
  {
    quote: "They made everything simple and efficient, turning our brand vision into a polished product that elevates our online presence.",
    name: "Noah Brooks",
    role: "CEO",
    img: "/img/t3.jpg",
  },
  {
    quote: "Working with this team was effortless that they understood our brand vision & turned it into a digital experience that truly represents who we are.",
    name: "Olivia Carter",
    role: "Brand Director",
    img: "/img/t4.jpg",
  },
  {
    quote: "They translated our ideas into a clean, modern digital presence that feels exactly right for our brand.",
    name: "Ethan Miller",
    role: "Director",
    img: "/img/av1.jpg",
  },
  {
    quote: "The team instantly grasped what we needed and delivered a seamless experience that exceeded every expectation.",
    name: "Sophia Reyes",
    role: "Data Science Consultant",
    img: "/img/av2.jpg",
  },
];

export const posts = [
  { tag: "Branding", title: "Why storytelling shapes brand success", date: "Dec 20, 2025", author: "Mason Clark", img: "/img/b1.jpg" },
  { tag: "Design", title: "The future of scalable design systems in 2025", date: "Jan 2, 2026", img: "/img/b2.jpg" },
  { tag: "Development", title: "Built for High-Performance in Framer", date: "Dec 6, 2025", img: "/img/b3.jpg" },
];

export const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take 2–4 weeks depending on scope, number of revisions, and communication speed." },
  {
    q: "Do you work with startups or only large brands?",
    a: "We work with both — from early-stage startups to established global brands. The process adapts to your needs.",
  },
  {
    q: "What’s included in your design packages?",
    a: "Each package includes strategy, wireframes, high-fidelity design, responsive layouts, and all final assets ready for development.",
  },
  {
    q: "Do you provide development services too?",
    a: "Yes. We offer full Framer development so your design turns into a fast, polished, and fully responsive website.",
  },
  {
    q: "How do we start a project?",
    a: "Just share your project details through the contact form. We’ll follow up with timelines, pricing, and next steps.",
  },
  {
    q: "Can you help with ongoing updates after launch?",
    a: "Yes, We offer monthly support and on-demand updates to keep your website fresh, optimized, and performing well.",
  },
];

export const contact = {
  phone: "+213 (0) 777 58 59 66",
  email: "seven.agency.admin@gmail.com",
  address: "Q29J+H5V, Rue Djilali Bounnama, El Biar",
};
