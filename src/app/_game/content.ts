// All content lives here. Edit this file to update the site.

export const PROFILE = {
  name: "Ritika Kapoor",
  nameJa: "カプール　リティカ",
  tagline: "You only live once :)",
  location: "Setagaya-ku, Tokyo, Japan",
  email: "ritika3401@gmail.com",
  linkedin: "https://www.linkedin.com/in/ritika-kapoor-71b757210",
  instagram: "https://www.instagram.com/awesome_mysteriously",
  portrait: "/photos/portrait.jpg",
};

export const ABOUT = {
  intro: [
    "Hi! I'm Ritika — a software developer based in Tokyo.",
    "I was born in Baroda, Gujarat, and grew up as an army kid — packing up and starting over in a new city every few years. That upbringing either makes you shy or curious; I ended up curious, with a soft spot for finding my footing in new places.",
    "Engineering took me to New Horizon College of Engineering, a small college in Bangalore, for Electrical & Electronics. From there I landed a direct placement into a Japanese firm in Tokyo — the journey wasn't easy, but it was full of learning.",
    "Studying EEE didn't stop me from falling in love with software. I started as an absolute non-coder and grew into the role on the job — picking up Rails, Laravel, Svelte, React/Next.js, PHP, and WordPress as the codebase asked for them.",
    "The Japanese workplace taught me discipline, attention to detail, and workflow craftsmanship. I like small tools, clear specs, and building things that actually make it into someone's day.",
  ],
  languages: [
    { name: "English", note: "Fluent" },
    { name: "Hindi", note: "Fluent" },
    { name: "Japanese", note: "N4 · daily working" },
  ],
};

export const CLUBS = {
  now: [
    {
      name: "個人開発 Club",
      note: "Solo-dev / side-project club at the office (Tokyo)",
    },
  ],
  school: [
    { name: "U-Create", note: "EEE research club at NHCE" },
    { name: "Media Club", note: "Poster design, event registrations" },
    { name: "Rocket Club", note: "Drone & Arduino Cansat builds" },
  ],
};

export type TimelineEntry = {
  year: string;
  title: string;
  place?: string;
  detail?: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2017",
    title: "10th Grade",
    place: "Army Public School, Binnaguri (West Bengal)",
    detail: "CGPA 9.0 · Best Athlete in School 2017–18",
  },
  {
    year: "2019",
    title: "12th Grade — PCM",
    place: "Army Public School, Bangalore",
    detail: "85%",
  },
  {
    year: "2019 – 2023",
    title: "B.E. Electrical & Electronics Engineering",
    place: "New Horizon College of Engineering, Bangalore",
    detail:
      "CGPA 9.02. Took on microprocessors + embedded C alongside the core hardware curriculum. U-Create research-club member.",
  },
  {
    year: "Internship · dates TBC",
    title: "Intern @ Bharat Electronics Limited (BEL)",
    detail:
      "BEL is a public-sector unit under India's Ministry of Defence that manufactures defence electronics. Radio-communications rotation on the electronics & electricals side — early exposure to hardware in a real-world defence-industry setting.",
  },
  {
    year: "Mar – May 2023",
    title: "Intern @ Hindustan Aeronautics Limited (HAL)",
    detail:
      "Deep-dive into Advanced Light Helicopter (ALH) systems. Mostly manuals-and-mentors work exploring how the electrical and mechanical subsystems interplay. Sharpened research, technical reading, and problem-solving skills; got exposure to how the aerospace industry actually operates.",
  },
  {
    year: "2023 – present",
    title: "Software Developer, In-House Product Team",
    place: "Tokyo, Japan",
    detail:
      "Direct placement out of college. Shipping features and updates on schedule under Engineering Directors. Learned Rails, Laravel, Svelte, React/Next.js, PHP, WordPress on the job. Won the 2025 company-wide hackathon with a multidisciplinary team.",
  },
];

export type Skill = { name: string; level: 1 | 2 | 3 | 4 };

export const SKILLS = {
  tech: [
    { name: "Rails", level: 2 },
    { name: "Laravel", level: 1 },
    { name: "PHP", level: 1 },
    { name: "Svelte", level: 1 },
    { name: "React / Next.js", level: 2 },
    { name: "WordPress", level: 2 },
    { name: "AWS", level: 1 },
    { name: "Python (ML basics)", level: 1 },
    { name: "Proteus", level: 2 },
    { name: "Tinkercad", level: 2 },
    { name: "Embedded C", level: 1 },
  ] as Skill[],
  certifications: [
    "AWS Certified Solutions Architect – Associate (SAA)",
    "JLPT N4 / NAT-TEST Certified",
    "Certificate in Artificial Intelligence · Smartknower (2-month)",
  ],
};

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  href?: string;
  repo?: string;
  category: "work" | "college";
};

export const PROJECTS: Project[] = [
  {
    category: "work",
    title: "2025 Company Hackathon — 1st place",
    blurb:
      "Designed and presented an award-winning prototype with a cross-discipline team. Won the company-wide hackathon judged across all engineers.",
    tech: ["Team collab", "Prototyping", "Pitch"],
  },
  {
    category: "work",
    title: "In-house product features (Rails / Laravel / Svelte)",
    blurb:
      "Ongoing feature work and updates for internal Japanese-market products. Learned each framework's codebase from spec → shipped code, worked within tight documentation and review cycles.",
    tech: ["Rails", "Laravel", "Svelte", "PHP", "WordPress"],
  },
  {
    category: "college",
    title: "Arduino Cansat — IoT Weather Station",
    blurb:
      "Rocket-launched soda-can weather station. BMP + DHT sensors transmitted temperature, pressure, and humidity every 2 seconds to a ground receiver over Arduino radio; parachute-controlled free-fall from 100 m.",
    tech: ["Arduino", "Proteus", "IoT sensors"],
  },
  {
    category: "college",
    title: "Smart-Glass Multimeter",
    blurb:
      "Arduino multimeter that beamed live readings to a pair of spectacles over HC-05 Bluetooth — hands-free measurements for tight-space electrical work.",
    tech: ["Arduino", "HC-05 Bluetooth", "Embedded"],
  },
  {
    category: "college",
    title: "Autonomous Obstacle-Avoiding Bot",
    blurb:
      "Ultrasonic-sensor bot that navigates forward while dodging obstacles. Built with Arduino Uno + motor driver, simulated in Tinkercad. Also finished 2nd at the STEMX robotics workshop competition.",
    tech: ["Arduino Uno", "Ultrasonic", "Tinkercad"],
  },
  {
    category: "college",
    title: "Heat Detection & Fire Alarm Simulation",
    blurb:
      "Breadboard circuit using capacitors, resistors, diodes, transistors and a transformer that trips a buzzer alarm when temperature crosses a threshold.",
    tech: ["Analog", "Sensors", "Buzzer"],
  },
  {
    category: "college",
    title: "Four-Wheel RC Recon Vehicle",
    blurb:
      "Remote-controlled bot with a wireless mini camera streaming to any screen. Built for places humans can't easily reach — a hands-on lesson in wireless transmission and motor control.",
    tech: ["RC", "Wireless video", "Motors"],
  },
  {
    category: "college",
    title: "Electricity Demand Prediction (ML)",
    blurb:
      "End-to-end ML workflow — data exploration → model selection → training → forecasting regional power demand from a public dataset.",
    tech: ["Python", "ML", "Regression"],
  },
];

export type Highlight = { year: string; text: string };

export const HIGHLIGHTS: Highlight[] = [
  { year: "2025", text: "🏆 Winner — Company-wide hackathon" },
  { year: "2024–25", text: "Taught English at community camps in Japan" },
  { year: "2022", text: "AI certificate · Smartknower (2 months)" },
  { year: "2021", text: "🏆 Winner — Debate Competition (NHCE)" },
  { year: "2021", text: "MUN Security Council participant (NHCE)" },
  { year: "2020", text: "🥈 2nd place — STEMX robotics workshop competition" },
  { year: "2020", text: "Youth For Seva volunteer during Covid" },
  { year: "2017–18", text: "🏆 Best Athlete in School" },
];

export const HOBBIES: string[] = [
  "Photography",
  "Reading (fiction)",
  "Guitar & flute",
  "Basketball",
  "Horse riding",
  "Adventure & travel",
  "Biking",
  "Anime & K-drama",
];

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  // CSS object-position — override the default "center" when the subject
  // sits above (or below) the middle of the frame.
  focus?: string;
};

export const PHOTOS: Photo[] = [
  {
    src: "/photos/photographer.jpg",
    alt: "Ritika with a camera on a boat",
    caption: "Bird-watching",
    focus: "center 20%",
  },
  { src: "/photos/butterfly.jpg", alt: "Yellow butterfly and white flowers", caption: "Butterfly" },
  { src: "/photos/dragonfly.jpg", alt: "Dragonfly on a green stem", caption: "Dragonfly", focus: "center 20%" },
  { src: "/photos/barbet.jpg", alt: "Blue-throated barbet on a branch", caption: "Blue-throated barbet" },
  { src: "/photos/starling.jpg", alt: "Chestnut-tailed starling in foliage", caption: "Chestnut-tailed starling" },
  { src: "/photos/macaque.jpg", alt: "Macaque perched on a fence", caption: "Curious macaque" },
  { src: "/photos/squirrel.jpg", alt: "Squirrel silhouette in a tree", caption: "Squirrel silhouette" },
  { src: "/photos/foliage.jpg", alt: "Bug on leaves against a bokeh background", caption: "Tiny visitor" },
  {
    src: "/photos/climbing.jpg",
    alt: "Ritika rock climbing with a helmet",
    caption: "Rappelling",
    focus: "center 25%",
  },
];
