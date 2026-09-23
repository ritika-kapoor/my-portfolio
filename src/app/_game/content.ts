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
  // A second, livelier photo shown only in the About panel (not the small
  // avatar slots, since her face is mostly hidden by hair/arm mid-jump).
  aboutPhoto: "/photos/about-jump.jpg",
};

export const ABOUT = {
  intro: [
    "Hi! I'm Ritika, a software developer based in Tokyo.",
    "I was born in Baroda, Gujarat, and grew up as an army kid, packing up and starting over in a new city every few years. That upbringing either makes you shy or curious; I ended up curious, with a soft spot for finding my footing in new places.",
    "Engineering took me to New Horizon College of Engineering in Bangalore, for Electrical & Electronics. From there I landed a direct placement into a Japanese firm in Tokyo. The journey wasn't easy, but it was full of learning.",
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
      "Direct placement out of college. Turns requirements into flow diagrams and UI wireframes (Cacoo, Figma) so the team agrees on what to build before development starts. Then builds and updates features across Rails, Laravel, Svelte, React/Next.js, PHP, and WordPress, all learned on the job. Won the 2024 company-wide hackathon with a multidisciplinary team.",
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
  // Optional photos of the actual build/event, shown as small tiles on the card.
  // A tile with `video` set plays that clip; `src` is then its poster frame.
  images?: { src: string; alt: string; video?: string }[];
};

export const PROJECTS: Project[] = [
  {
    category: "work",
    title: "2024 Company Hackathon: 1st place",
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
      "Rocket-launched soda-can weather station, built with the college Rocket Club. BMP + DHT sensors transmitted temperature, pressure, and humidity every 2 seconds to a ground receiver over Arduino radio; parachute-controlled free-fall from 100 m.",
    tech: ["Arduino", "Proteus", "IoT sensors"],
    images: [
      { src: "/projects/rocket-club.jpg", alt: "The model rocket on its launch stand, moments before launch" },
      { src: "/projects/cansat-receiver.jpg", alt: "The Arduino ground-receiver rig, picking up telemetry from the can" },
    ],
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
      "Ultrasonic-sensor bot that navigates forward while dodging obstacles. Built with Arduino Uno + motor driver, simulated in Tinkercad.",
    tech: ["Arduino Uno", "Ultrasonic", "Tinkercad"],
    images: [
      { src: "/projects/obstacle-bot-build.jpg", alt: "Ritika wiring the ultrasonic sensor and Arduino Uno onto the bot's chassis" },
    ],
  },
  {
    category: "college",
    title: "Heat Detection & Fire Alarm Simulation",
    blurb:
      "Breadboard circuit using capacitors, resistors, diodes, transistors and a transformer that trips a buzzer alarm when temperature crosses a threshold.",
    tech: ["Analog", "Sensors", "Buzzer"],
    images: [
      { src: "/projects/alarm.jpg", alt: "The finished breadboard circuit with buzzer, transformer and status LEDs" },
    ],
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
  {
    category: "college",
    title: "STEMX Robotics Workshop: 2nd place",
    blurb:
      "Team build-and-compete workshop: assembled and programmed a Lego Mindstorms robot against the clock with a small team, placing 2nd overall.",
    tech: ["Lego Mindstorms", "Teamwork", "Robotics"],
    images: [
      { src: "/projects/stemx.jpg", alt: "Ritika and a teammate assembling a Lego Mindstorms robot at the STEMX workshop" },
    ],
  },
  {
    category: "college",
    title: "Robotics & Automation Elective: Pick-and-Place",
    blurb:
      "Coursework from the Robotics & Automation elective: programmed a robot arm to pick up and place small parts, an early hands-on introduction to industrial robot control.",
    tech: ["Robotics", "Automation", "Programming"],
    images: [
      { src: "/projects/pick-and-place-poster.jpg", alt: "A small robot arm picking up parts during a Robotics & Automation class exercise", video: "/projects/pick-and-place.mp4" },
    ],
  },
  {
    category: "college",
    title: "Industrial Visit: FANUC Robotics",
    blurb:
      "College industrial visit to FANUC, seeing an industrial robot arm up close and interacting with it in operation, hands-on exposure to industrial automation alongside the BEL and HAL internships.",
    tech: ["Industrial robotics", "FANUC"],
    images: [
      { src: "/projects/fanuc.jpg", alt: "Ritika and a classmate interacting with a FANUC industrial robot arm" },
      { src: "/projects/fanuc-visit-poster.jpg", alt: "Video of the FANUC robot arm in operation during the visit", video: "/projects/fanuc-visit.mp4" },
    ],
  },
];

export const HACKATHON = {
  title: "Team Lakers: digital wedding invitation platform",
  subtitle: "2024 company-wide hackathon · 1st place",
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
  images: [
    {
      src: "/hackathon/award-announcement.jpg",
      alt: "Team Lakers on stage as the IBJ Hackathon 2024 1st-place team is announced",
      caption: "1st place announcement",
      width: 1600,
      height: 1200,
    },
    {
      src: "/hackathon/team-with-mentors.jpg",
      alt: "Ritika presenting with two teammates during the hackathon",
      caption: "Presenting to the room",
      width: 1600,
      height: 1200,
    },
    {
      src: "/hackathon/aws-architecture.png",
      alt: "AWS architecture diagram: GitHub and HCP Terraform provision a VPC with a load balancer, app servers and database, plus CloudFront, Lambda and S3 for image optimization.",
      caption: "Infrastructure diagram: Terraform-managed AWS setup",
      width: 1331,
      height: 964,
    },
  ],
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
  { year: "2024", text: "🏆 Winner: Company-wide hackathon (IBJ Inc.)" },
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
  "Reading",
  "Music",
  "Basketball",
  "Horse riding",
  "Activities",
  "Travel",
  "Volunteering",
  "Biking",
  "Anime & K-drama",
];

export type Photo = {
  src: string;
  alt: string;
  // Which hobby's gallery this photo belongs to. Must match a name in HOBBIES.
  // To give another hobby a gallery, add photos here with its name.
  // Files live in public/photos/<folder>/ : photography, reading, music,
  // basketball, horse-riding, activities, travel, volunteering, biking,
  // anime-kdrama.
  hobby: string;
  caption?: string;
  // CSS object-position, override the default "center" when the subject
  // sits above (or below) the middle of the frame.
  focus?: string;
  // Zoom in on the frame. 1 = no zoom (default); 1.3 = 30% closer in.
  // Crops in around whatever `focus` is pointing at, so set focus first,
  // then add zoom if the subject is still too small/far away.
  zoom?: number;
  // Present for a video item: src above is the poster/thumbnail image,
  // video is the clip itself (muted, looped, plays on tap).
  video?: string;
};

export const PHOTOS: Photo[] = [
  // ---- Photography ----
  {
    src: "/photos/photography/photographer.jpg",
    hobby: "Photography",
    alt: "Ritika with a camera on a boat",
    caption: "Bird-watching",
    focus: "center 20%",
  },
  { src: "/photos/photography/butterfly.jpg", hobby: "Photography", alt: "Yellow butterfly and white flowers", caption: "Butterfly" },
  { src: "/photos/photography/dragonfly.jpg", hobby: "Photography", alt: "Dragonfly on a green stem", caption: "Dragonfly", focus: "center 20%" },
  { src: "/photos/photography/barbet.jpg", hobby: "Photography", alt: "Blue-throated barbet on a branch", caption: "Blue-throated barbet" },
  { src: "/photos/photography/starling.jpg", hobby: "Photography", alt: "Chestnut-tailed starling in foliage", caption: "Chestnut-tailed starling" },
  { src: "/photos/photography/macaque.jpg", hobby: "Photography", alt: "Macaque perched on a fence", caption: "Curious macaque" },
  { src: "/photos/photography/squirrel.jpg", hobby: "Photography", alt: "Squirrel silhouette in a tree", caption: "Squirrel silhouette" },
  { src: "/photos/photography/foliage.jpg", hobby: "Photography", alt: "Bug on leaves against a bokeh background", caption: "Tiny visitor" },
  { src: "/photos/photography/moon.jpg", hobby: "Photography", alt: "Silhouette of a branch against a full moon", caption: "Full moon" },
  { src: "/photos/photography/rabbit.jpg", hobby: "Photography", alt: "Rabbit with tall ears in the grass", caption: "Rabbit" },

  // ---- Activities ----
  {
    src: "/photos/activities/climbing.jpg",
    hobby: "Activities",
    alt: "Ritika rock climbing with a helmet",
    caption: "Rappelling",
    focus: "center 25%",
  },
  { src: "/photos/activities/samurai-armor.jpg", hobby: "Activities", alt: "Ritika posing in a life-size samurai armor cutout at Atami Castle", caption: "Samurai armor photo-op" },
  { src: "/photos/activities/kendo-experience.jpg", hobby: "Activities", alt: "Ritika in kendo attire swinging a sword in a dojo", caption: "Kendo experience" },
  { src: "/photos/activities/snowboarding.jpg", hobby: "Activities", alt: "Ritika holding a snowboard at a ski resort", caption: "Snowboarding" },
  { src: "/photos/activities/bodyboarding-1.jpg", hobby: "Activities", alt: "Ritika with a group at an outdoor adventure park", caption: "Adventure park day" },
  { src: "/photos/travel/autumn-lake-2.jpg", hobby: "Travel", alt: "Ritika by a lake in autumn, giving a peace sign", caption: "Autumn foliage" },
  { src: "/photos/activities/bodyboarding-3.jpg", hobby: "Activities", alt: "Ritika bodyboarding at dusk", caption: "Bodyboarding at dusk" },
  { src: "/photos/activities/surfboarding.jpg", hobby: "Activities", alt: "Ritika holding a surfboard on the beach", caption: "Surfing" },
  { src: "/photos/activities/snorkeling.jpg", hobby: "Activities", alt: "Ritika bodyboarding in the waves, smiling", caption: "Bodyboarding" },
  { src: "/photos/travel/aquarium-whale-shark-2.jpg", hobby: "Travel", alt: "Silhouette of Ritika watching a whale shark at an aquarium", caption: "Whale shark, Okinawa aquarium" },
  { src: "/photos/travel/okinawa-beach.jpg", hobby: "Travel", alt: "Ritika jumping on a beach with a bridge in the background", caption: "Okinawa" },
  { src: "/photos/activities/casino-night.jpg", hobby: "Activities", alt: "Poker chips and cards on a casino table", caption: "Casino night" },
  { src: "/photos/activities/adventure-park-1.jpg", hobby: "Activities", alt: "Ritika scuba diving, kneeling on a coral reef", caption: "Scuba diving", focus: "center 20%" },
  { src: "/photos/activities/adventure-park-2.jpg", hobby: "Activities", alt: "Close-up of Ritika snorkeling underwater with a dive mask", caption: "First Dive" },
  {
    src: "/photos/activities/bouldering-poster.jpg",
    hobby: "Activities",
    alt: "Ritika bouldering on a climbing wall",
    caption: "Bouldering",
    focus: "center 20%",
    video: "/photos/activities/bouldering.mp4",
  },
  {
    src: "/photos/activities/adventure-clip-poster.jpg",
    hobby: "Activities",
    alt: "A gravity go-kart running down a race track",
    caption: "Go-kart",
    video: "/photos/activities/adventure-clip.mp4",
  },
  {
    src: "/photos/activities/meta-glasses-poster.jpg",
    hobby: "Activities",
    alt: "Ritika trying AR glasses in an office",
    caption: "Trying AR glasses",
    video: "/photos/activities/meta-glasses.mp4",
    focus: "center 20%"
  },

  // ---- Travel ----
  { src: "/photos/travel/mt-tsukuba.jpg", hobby: "Travel", alt: "Ritika at the Mt. Tsukuba summit sign", caption: "Mt. Tsukuba" },
  { src: "/photos/travel/izu.jpg", hobby: "Travel", alt: "Ritika at a sea cave arch in Izu at sunset", caption: "Izu coastline" },
  { src: "/photos/travel/nara-deer-park.jpg", hobby: "Travel", alt: "Ritika with a deer in Nara Park", caption: "Nara deer park" },
  { src: "/photos/activities/forest-hike-2.jpg", hobby: "Activities", alt: "Ritika walking down a forest staircase on a hike", caption: "Forest hike" },
  { src: "/photos/travel/aquarium-whale-shark.jpg", hobby: "Travel", alt: "Ritika standing before a fern-covered cave shrine", caption: "Cave shrine" },
  { src: "/photos/travel/okinawa-bridge.jpg", hobby: "Travel", alt: "Ritika at a misty mountain viewpoint with a wooden fence", caption: "Mountain viewpoint" },
  { src: "/photos/travel/squirrel-village.jpg", hobby: "Travel", alt: "Ritika reaching toward a squirrel exhibit at Squirrel Village", caption: "Squirrel Village" },
  { src: "/photos/travel/suzuka-circuit.jpg", hobby: "Travel", alt: "Ritika at the grandstand of Suzuka Circuit", caption: "Suzuka Circuit" },
  { src: "/photos/travel/india-stepwell.jpg", hobby: "Travel", alt: "Ritika standing before a fern-covered cave shrine", caption: "Cave shrine, India" },
  { src: "/photos/travel/india-museum.jpg", hobby: "Travel", alt: "Ritika examining illustrated manuscripts in a small museum", caption: "Museum visit, India" },
  { src: "/photos/travel/lake-garden.jpg", hobby: "Travel", alt: "Ritika by a lily pond in a Japanese garden", caption: "Garden pond" },
  { src: "/photos/travel/zoo-monkey.jpg", hobby: "Travel", alt: "Ritika reaching out to a small monkey at the zoo", caption: "Zoo visit" },

  // ---- Basketball ----
  { src: "/photos/basketball/team-photo.jpg", hobby: "Basketball", alt: "Ritika and three teammates in green basketball jerseys on a rooftop court", caption: "School basketball team" },
  { src: "/photos/basketball/court-side.jpg", hobby: "Basketball", alt: "Ritika with an arm around a teammate, back turned to the camera", caption: "Friends off the court", focus: "center 30%" },

  // ---- Biking ----
  { src: "/photos/biking/motorcycle.jpg", hobby: "Biking", alt: "Ritika on a motorcycle wearing a helmet", caption: "Motorcycle ride", focus: "center 20%" },
  { src: "/photos/biking/atv-ride.jpg", hobby: "Biking", alt: "Ritika riding an ATV in off-road gear", caption: "ATV off-roading", focus: "center 20%" },
  { src: "/photos/biking/royal-enfield.jpg", hobby: "Biking", alt: "Ritika on a Royal Enfield motorcycle on a mountain road", caption: "Royal Enfield tour",focus: "center0%", zoom: 1.5 },

  // ---- Horse riding ----
  { src: "/photos/horse-riding/arena.jpg", hobby: "Horse riding", alt: "Ritika riding a horse over a jump in an arena", caption: "Show-jumping practice" },
  {
    src: "/photos/horse-riding/canter-poster.jpg",
    hobby: "Horse riding",
    alt: "Ritika cantering a horse around a jumping course",
    caption: "Cantering",
    video: "/photos/horse-riding/canter.mp4",
  },

  // ---- Music ----
  { src: "/photos/music/electric-guitar.jpg", hobby: "Music", alt: "Ritika playing an electric guitar", caption: "Playing guitar" },
  { src: "/photos/music/license-plate-guitar.jpg", hobby: "Music", alt: "Ritika holding a novelty guitar made of license plates", caption: "Novelty guitar, Old Tucson" },
  {
    src: "/photos/music/flute-poster.jpg",
    hobby: "Music",
    alt: "Ritika playing the flute",
    caption: "Playing flute",
    video: "/photos/music/flute.mp4",
  },

  // ---- Volunteering ----
  { src: "/photos/volunteering/english-class.jpg", hobby: "Volunteering", alt: "Ritika teaching an English grammar lesson on a chalkboard", caption: "Teaching English" },
  { src: "/photos/volunteering/physics-class.jpg", hobby: "Volunteering", alt: "Ritika teaching a physics lesson on light and reflection", caption: "Teaching physics" },
  { src: "/photos/volunteering/wall-mural.jpg", hobby: "Volunteering", alt: "Ritika painting a conserve-water mural on a wall with other volunteers", caption: "Water-conservation mural" },
  { src: "/photos/volunteering/classroom-group.jpg", hobby: "Volunteering", alt: "Ritika with a group of students in a classroom", caption: "With the class" },
  { src: "/photos/volunteering/kids-classroom.jpg", hobby: "Volunteering", alt: "Ritika teaching younger children seated on the floor", caption: "Teaching younger kids" },
  { src: "/photos/volunteering/campus-drive.jpg", hobby: "Volunteering", alt: "Ritika and friends with painted faces during a campus awareness drive", caption: "Campus awareness drive" },
  { src: "/photos/volunteering/rural-school-visit.jpg", hobby: "Volunteering", alt: "Ritika sitting at a desk in a rural schoolhouse", caption: "Rural school visit" },
];

// A shelf of what a hobby is about, shown as small cover-art thumbnails
// rather than personal photos: these are official book covers / anime key
// art, not Ritika's own photography, so they're kept visually distinct from
// the PHOTOS galleries above (smaller, labeled by title, credited as cover
// art) instead of mixed in as if she took them.
export type Cover = { hobby: string; src: string; title: string };

export const COVERS: Cover[] = [
  // ---- Reading ----
  { hobby: "Reading", src: "/covers/harry-potter.jpg", title: "Harry Potter" },
  { hobby: "Reading", src: "/covers/the-hunger-games-book.jpg", title: "The Hunger Games" },
  { hobby: "Reading", src: "/covers/twilight-book.jpg", title: "Twilight" },
  { hobby: "Reading", src: "/covers/divergent-series.jpg", title: "Divergent" },
  { hobby: "Reading", src: "/covers/the-fault-in-our-stars-book.jpg", title: "The Fault in Our Stars" },
  { hobby: "Reading", src: "/covers/looking-for-alaska-book.jpg", title: "Looking for Alaska" },
  { hobby: "Reading", src: "/covers/the-perks-of-being-a-wallflower-book.jpg", title: "The Perks of Being a Wallflower" },
  { hobby: "Reading", src: "/covers/kite-runner-book.jpg", title: "The Kite Runner" },
  { hobby: "Reading", src: "/covers/life-of-pi-book.jpg", title: "Life of Pi" },
  { hobby: "Reading", src: "/covers/angels-and-demons-by-dan-brown.jpg", title: "Angels & Demons" },
  { hobby: "Reading", src: "/covers/ikigai-book.jpg", title: "Ikigai" },
  { hobby: "Reading", src: "/covers/the-immortals-of-meluha-book.jpg", title: "The Immortals of Meluha" },
  { hobby: "Reading", src: "/covers/mahashweta-by-sudha-murty.jpg", title: "Mahashweta" },
  { hobby: "Reading", src: "/covers/chetan-bahagt-two-states.jpg", title: "2 States" },
  { hobby: "Reading", src: "/covers/ronald-dahlbooks.jpg", title: "Roald Dahl" },
  { hobby: "Reading", src: "/covers/sidney-sheldon.jpg", title: "Sidney Sheldon" },
  // ---- Anime & K-drama ----
  { hobby: "Anime & K-drama", src: "/covers/demon-slayer.jpg", title: "Demon Slayer" },
  { hobby: "Anime & K-drama", src: "/covers/hunterxhunter.jpg", title: "Hunter x Hunter" },
  { hobby: "Anime & K-drama", src: "/covers/fullmetal-alchemist.jpg", title: "Fullmetal Alchemist" },
  { hobby: "Anime & K-drama", src: "/covers/haikyuu-anime.jpg", title: "Haikyu!!" },
  { hobby: "Anime & K-drama", src: "/covers/solo-leveling.jpg", title: "Solo Leveling" },
  { hobby: "Anime & K-drama", src: "/covers/kuroko-no-basket.jpg", title: "Kuroko's Basketball" },
  { hobby: "Anime & K-drama", src: "/covers/your-name-anime.jpg", title: "Your Name" },
];
