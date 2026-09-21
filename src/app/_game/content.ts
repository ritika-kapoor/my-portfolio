// All content lives here. Edit this file to update the site.

export const PROFILE = {
  name: "Ritika Kapoor",
  role: "Full Stack Web Developer",
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
    "Hi! I'm Ritika, a software developer based in Tokyo.",
    "I was born in Baroda, Gujarat, and grew up as an army kid, packing up and starting over in a new city every few years. That upbringing either makes you shy or curious; I ended up curious, with a soft spot for finding my footing in new places.",
    "Engineering took me to New Horizon College of Engineering, a small college in Bangalore, for Electrical & Electronics. From there I landed a direct placement into a Japanese firm in Tokyo. The journey wasn't easy, but it was full of learning.",
    "Studying EEE didn't stop me from falling in love with software. I started as an absolute non-coder and grew into the role on the job, picking up Rails, Laravel, Svelte, React/Next.js, PHP, and WordPress as the codebase asked for them.",
    "The Japanese workplace taught me discipline, attention to detail, and workflow craftsmanship. I like small tools, clear specs, and building things that actually make it into someone's day.",
  ],
  languages: [
    { name: "English", note: "Fluent" },
    { name: "Hindi", note: "Fluent" },
    { name: "Japanese", note: "Daily working proficiency" },
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
    title: "12th Grade (PCM)",
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
    year: "Jan – Feb 2023",
    title: "Intern @ Bharat Electronics Limited (BEL)",
    detail:
      "BEL is a public-sector unit under India's Ministry of Defence that manufactures defence electronics. Radio-communications rotation on the electronics & electricals side. Early exposure to hardware in a real-world defence-industry setting.",
  },
  {
    year: "Mar – May 2023",
    title: "Intern @ Hindustan Aeronautics Limited (HAL)",
    detail:
      "Deep-dive into Advanced Light Helicopter (ALH) systems. Mostly manuals-and-mentors work exploring how the electrical and mechanical subsystems interplay. Sharpened research, technical reading, and problem-solving skills; got exposure to how the aerospace industry actually operates.",
  },
  {
    year: "2023 – present",
    title: "Full Stack Web Developer",
    place: "IBJ Inc., Tokyo, Japan",
    detail:
      "Direct placement out of college. Turns requirements into flow diagrams and UI wireframes (Cacoo, Figma) so the team agrees on what to build before development starts. Then builds and updates features across Rails, Laravel, Svelte, React/Next.js, PHP, and WordPress, all learned on the job. Won the 2025 company-wide hackathon with a multidisciplinary team.",
  },
];

export type Skill = { name: string; level: 1 | 2 | 3 | 4 };

export const SKILLS = {
  tech: [
    { name: "Ruby", level: 2 },
    { name: "Rails", level: 2 },
    { name: "SQL / PostgreSQL", level: 2 },
    { name: "JavaScript", level: 2 },
    { name: "React / Next.js", level: 2 },
    { name: "Laravel", level: 1 },
    { name: "PHP", level: 1 },
    { name: "Svelte", level: 1 },
    { name: "WordPress", level: 2 },
    { name: "AWS", level: 2 },
    { name: "Docker", level: 1 },
    { name: "Git", level: 2 },
    { name: "Figma", level: 2 },
    { name: "Python (ML basics)", level: 1 },
    { name: "Proteus", level: 2 },
    { name: "Tinkercad", level: 2 },
    { name: "Embedded C", level: 1 },
  ] as Skill[],
  certifications: [
    "AWS Certified Solutions Architect – Associate (SAA) · Jun 2026",
    "Certificate in Artificial Intelligence · Smartknower (Jul–Aug 2021)",
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
    title: "2025 Company Hackathon: 1st place",
    blurb:
      "Built a full-stack digital invitation platform with a cross-discipline team (Team Lakers) and won the company-wide hackathon. Details below.",
    tech: ["Svelte", "Rust", "Flutter", "AWS", "Terraform", "Figma"],
  },
  {
    category: "work",
    title: "In-house product features (Rails / Laravel / Svelte)",
    blurb:
      "Requirements mapped out as flow diagrams and wireframes first, then built into ongoing features and updates for internal Japanese-market products. Learned each framework's codebase along the way, working within tight documentation and review cycles.",
    tech: ["Rails", "Laravel", "Svelte", "PHP", "WordPress"],
  },
  {
    category: "college",
    title: "Arduino Cansat: IoT Weather Station",
    blurb:
      "Rocket-launched soda-can weather station. BMP + DHT sensors transmitted temperature, pressure, and humidity every 2 seconds to a ground receiver over Arduino radio; parachute-controlled free-fall from 100 m.",
    tech: ["Arduino", "Proteus", "IoT sensors"],
  },
  {
    category: "college",
    title: "Smart-Glass Multimeter",
    blurb:
      "Arduino multimeter that beamed live readings to a pair of spectacles over HC-05 Bluetooth for hands-free measurements in tight-space electrical work.",
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
      "Remote-controlled bot with a wireless mini camera streaming to any screen. Built for places humans can't easily reach. A hands-on lesson in wireless transmission and motor control.",
    tech: ["RC", "Wireless video", "Motors"],
  },
  {
    category: "college",
    title: "Electricity Demand Prediction (ML)",
    blurb:
      "End-to-end ML workflow: data exploration → model selection → training → forecasting regional power demand from a public dataset.",
    tech: ["Python", "ML", "Regression"],
  },
];

export const HACKATHON = {
  title: "Team Lakers: digital wedding invitation platform",
  subtitle: "2025 company-wide hackathon · 1st place",
  sections: [
    {
      label: "What it was",
      body: "A company-wide hackathon where cross-discipline teams built and presented a working product. Team Lakers took first place with an end-to-end digital wedding invitation platform: a mobile admin app for creating invitations, a fast guest-facing web page, a Rust API and AWS infrastructure managed as code. The team name and logo came from a teammate's love of Kobe Bryant, blended with the IBJ heart.",
    },
    {
      label: "Problem it solved",
      body: "Couples needed a simple way to create an invitation and collect RSVPs, and guests needed a page that loads instantly on any phone. The platform lets a host pick a template (fonts, colors, layout) in the app, and guests open a customized invitation, browse the gallery, and RSVP online.",
    },
    {
      label: "What we built",
      items: [
        "Guest web page (Svelte): template-driven invitation with Date & Venue, Our Story, Gallery and RSVP sections, styled dynamically from API data.",
        "Admin app (Flutter, iOS and Android): event-creation screens modeled on familiar event apps, shared with testers through Firebase App Distribution.",
        "Backend (Rust): onion-architecture API serving invitation content, benchmarked against a Go server.",
        "Infrastructure (AWS + Terraform): a VPC with a load balancer routing /api and /rsvp to the app servers, a managed database in a private subnet, and an image-optimization layer, all defined as code with a CI/CD pipeline.",
        "Design (Figma): logo, three invitation templates, components and a clickable prototype.",
      ],
    },
    {
      label: "How it works",
      items: [
        "Frontend fetches the invitation from the API, stores it in a Svelte store, and switches between Template 1, 2 and 3 with conditional rendering.",
        "Fonts and colors are applied dynamically per template, so one component set covers every look.",
        "Terraform CI/CD: opening a pull request runs terraform plan to show the diff, merging to main runs terraform apply.",
        "Image URLs are normalized (parameter order and case) so equivalent requests share one cache entry. Images are resized from query parameters once, then served from cache.",
      ],
    },
    {
      label: "Learnings",
      body: "Svelte compiles work ahead of time and skips the virtual DOM, so the invitation page stayed light. In the team's benchmark it loaded about 3x faster than the Google top page. On the backend, Rust broke more between versions than Go did and the Go server benchmarked faster, so the team concluded Rust is not the best fit for web APIs even though it still shines for low-level work.",
    },
  ] as { label: string; body?: string; items?: string[] }[],
  image: {
    src: "/hackathon/aws-architecture.png",
    alt: "AWS architecture diagram: GitHub and HCP Terraform provision a VPC with a load balancer, app servers and database, plus CloudFront, Lambda and S3 for image optimization.",
    caption: "Infrastructure diagram: Terraform-managed AWS setup",
    width: 1331,
    height: 964,
  },
  tech: [
    "Svelte",
    "Rust",
    "Flutter",
    "BLoC",
    "Firebase",
    "AWS",
    "Terraform",
    "Figma",
  ],
};

export type Highlight = { year: string; text: string };

export const HIGHLIGHTS: Highlight[] = [
  { year: "2026", text: "☑️ AWS Certified Solutions Architect – Associate" },
  { year: "2025", text: "🏆 Winner: Company-wide hackathon (IBJ Inc.)" },
  { year: "2024–25", text: "Taught English at community camps in Japan" },
  { year: "2023–present", text: "Co-organizer: Community Meetups for Indians in Tokyo" },
  { year: "2023", text: "Event Coordinator: Japan Day (NHCE × Zenken)" },
  { year: "2021", text: "🏆 Winner: Debate Competition (NHCE)" },
  { year: "2021", text: "AI certificate · Smartknower (Jul–Aug 2021)" },
  { year: "2021", text: "Honourable Mention: MUN Security Council (NHCE)" },
  { year: "2020", text: "🥈 2nd place: STEMX robotics workshop competition" },
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
  // Which hobby's gallery this photo belongs to. Must match a name in HOBBIES.
  // To give another hobby a gallery, add photos here with its name.
  hobby: string;
  caption?: string;
  // CSS object-position, override the default "center" when the subject
  // sits above (or below) the middle of the frame.
  focus?: string;
};

export const PHOTOS: Photo[] = [
  {
    src: "/photos/photographer.jpg",
    hobby: "Photography",
    alt: "Ritika with a camera on a boat",
    caption: "Bird-watching",
    focus: "center 20%",
  },
  { src: "/photos/butterfly.jpg", hobby: "Photography", alt: "Yellow butterfly and white flowers", caption: "Butterfly" },
  { src: "/photos/dragonfly.jpg", hobby: "Photography", alt: "Dragonfly on a green stem", caption: "Dragonfly", focus: "center 20%" },
  { src: "/photos/barbet.jpg", hobby: "Photography", alt: "Blue-throated barbet on a branch", caption: "Blue-throated barbet" },
  { src: "/photos/starling.jpg", hobby: "Photography", alt: "Chestnut-tailed starling in foliage", caption: "Chestnut-tailed starling" },
  { src: "/photos/macaque.jpg", hobby: "Photography", alt: "Macaque perched on a fence", caption: "Curious macaque" },
  { src: "/photos/squirrel.jpg", hobby: "Photography", alt: "Squirrel silhouette in a tree", caption: "Squirrel silhouette" },
  { src: "/photos/foliage.jpg", hobby: "Photography", alt: "Bug on leaves against a bokeh background", caption: "Tiny visitor" },
  {
    src: "/photos/climbing.jpg",
    hobby: "Adventure & travel",
    alt: "Ritika rock climbing with a helmet",
    caption: "Rappelling",
    focus: "center 25%",
  },
];
