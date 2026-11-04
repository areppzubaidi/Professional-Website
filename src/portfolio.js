// Personal Portfolio Configuration File
//
// Global colours live in _globalColor.scss.
//
// CONTENT RULE FOR THIS FILE: no adjectives that cannot be demonstrated. The previous version opened
// with "Passionate Cloud DevOps Engineer ... bridging development and operations for seamless,
// high-performance systems", which is a sentence any candidate can write and therefore distinguishes
// nobody. Every line below points at something that exists and can be inspected.

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Certification Logos
import awsLogo from "./assets/images/awss.png";
import itilLogo from "./assets/images/nttdata.png";
import mbotLogo from "./assets/images/mbot.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Greeting Section
const greeting = {
  username: "Nur Ariff",
  title: "Hi, I'm Ariff",
  subTitle: emoji(
    "DevOps engineer in Malaysia. I run a self-built Kubernetes platform at home — 22 Argo CD applications, " +
      "single sign-on across three systems, secrets sealed in git, and a disaster recovery procedure I have " +
      "actually tested. I learn by breaking things on purpose, then writing down what broke. 🛠️"
  ),
  // DISABLED 2026-11-04. Two separate problems were hiding here:
  //   1. this Drive URL is dead -- all three URL forms return 404, the same response an invalid id gets
  //   2. the Greeting component never used this value anyway; it does require("./resume.pdf"), and that
  //      file is the TEMPLATE's placeholder -- opening it shows a page that reads "Sample resume…"
  // A button that hands a recruiter a placeholder is worse than no button, so it is hidden.
  //
  // TO RE-ENABLE: put your real one-page PDF at src/containers/greeting/resume.pdf, then set the line
  // below to any truthy value (e.g. "resume.pdf") and resumeSection.display back to true.
  resumeLink: null,
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/areppzubaidi",
  linkedin: "https://www.linkedin.com/in/nur-ariff-zubaidi-045785103/",
  gmail: "nurariffbinzubaidi@gmail.com",
  gitlab: "https://gitlab.com/areppzubaidi",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I spend my days on",
  subTitle: "PLATFORM ENGINEERING, MOSTLY BY BUILDING ONE AND THEN FIXING WHAT IT BREAKS",
  skills: [
    emoji("⚡ Building and operating a K3s platform: GitOps with Argo CD, Helm, backups that restore"),
    emoji("⚡ Making deployments safe: CI gates, admission policy, image scanning, sealed secrets"),
    emoji("⚡ Writing it down — runbooks, ADRs, and a service catalogue nobody asked me to write"),
  ],
  softwareSkills: [
    { skillName: "kubernetes", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "ansible", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "jenkins", fontAwesomeClassname: "fas fa-cogs" },
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universiti Tenaga Nasional",
      logo: require("./assets/images/uniten.png"),
      subHeader: "Bachelor in Information System",
      duration: "June 2011 - August 2015",
    },
  ],
};

// Tech Stack Experience
//
// viewSkillBars is OFF on purpose. A self-assessed "Linux 60%" bar tells a reader nothing (60% of
// what, measured how?) and it invites the one question it cannot answer. The projects section below
// shows the same thing with evidence instead.
const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Linux", progressPercentage: "60%" },
    { Stack: "Cloud", progressPercentage: "70%" },
    { Stack: "Networking", progressPercentage: "60%" },
    { Stack: "CI/CD", progressPercentage: "60%" },
    { Stack: "Automation", progressPercentage: "60%" },
    { Stack: "Containerization", progressPercentage: "60%" },
  ],
  displayCodersrank: false,
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "ARRK Engineering",
      companylogo: require("./assets/images/arrk.png"),
      date: "August 2026 – Present",
      desc: "DevOps engineer on the BMW DSA project, responsible for two applications — CSSL and INIS — covering their deployment pipelines, release support and day-to-day operations.",
    },
    {
      role: "L2 Engineer",
      company: "Access World",
      companylogo: require("./assets/images/aw.png"),
      date: "August 2023 – August 2026",
      desc: "Handling Level 2 support, network troubleshooting, and system administration tasks for internal teams and external clients.",
    },
    {
      role: "IT Executive",
      company: "FPSO Ventures Sdn Bhd",
      companylogo: require("./assets/images/fpso.png"),
      date: "July 2022 – July 2023",
      desc: "Managed IT infrastructure, implemented security protocols, and ensured business continuity for offshore systems.",
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "March 2018 – July 2020",
      desc: "Provided support for enterprise systems, deployed patches, and maintained server health for multiple clients.",
    },
    {
      role: "Field Engineer",
      company: "NTT Data Services",
      companylogo: require("./assets/images/ntt.png"),
      date: "November 2017 – February 2018",
      desc: "Handled on-site troubleshooting, system setup, and client-side configurations for enterprise IT environments.",
    },
    {
      role: "IT Helpdesk",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/hpe.png"),
      date: "October 2015 – June 2016",
      desc: "Resolved user tickets, performed basic troubleshooting, and maintained IT support logs.",
    },
  ],
};

// Projects Section
//
// This was the missing half of the site: a skills list with no work behind it. Each entry states what
// the thing is, what was hard about it, and what can be inspected — no tool-name parades.
const bigProjects = {
  title: "Things I have built and operated",
  subtitle: "A homelab platform, three applications on it, and the operational habits that keep them up",
  projects: [
    {
      projectName: "Homelab platform — a miniature production environment",
      projectDesc:
        "A three-node K3s cluster on Proxmox, run as GitOps: 22 Argo CD applications reconcile from a " +
        "single repository, and nothing is deployed by hand. Identity is centralised in Keycloak with " +
        "group-to-role mapping across Argo CD, Grafana and Headlamp. Credentials are sealed in git, so a " +
        "rebuild restores its own secrets. Admission policy (Kyverno) refuses privileged containers at the " +
        "API server. Backups are dumped nightly, and the restore has been rehearsed rather than assumed. " +
        "Documented as 12 architecture decision records and a service catalogue that states what is NOT " +
        "covered as clearly as what is.",
      footerLink: [
        { name: "Architecture notes", url: "https://github.com/areppzubaidi" },
      ],
    },
    {
      projectName: "Kita — a family app, run like production",
      projectDesc:
        "A household planning and health-recording application used daily by my own family: 42 screens, " +
        "44 database migrations, three permission roles, and a rule that a child account sees no health " +
        "data at all. Deployed through staging to production behind a CI gate that refuses to build unless " +
        "the commit is green. Migrations are additive and never edited once applied, so a rollback of the " +
        "application never leaves the schema broken.",
      footerLink: [
        { name: "Feature inventory", url: "https://github.com/areppzubaidi" },
      ],
    },
    {
      projectName: "Job-assistant — full-stack app with real deployment discipline",
      projectDesc:
        "FastAPI and Next.js on Postgres, built as a second application on the same platform rails so the " +
        "deployment pattern could be proven twice. Four CI gates (tests, types, lint, build) before an " +
        "image is published; images tagged by commit SHA so what runs is traceable to what was reviewed; " +
        "staging proven with smoke assertions before production is touched. Includes an async LLM pipeline " +
        "for extracting job requirements and generating interview preparation material.",
      footerLink: [
        { name: "Repository", url: "https://github.com/areppzubaidi/job-assistant" },
      ],
    },
    {
      projectName: "Alert pipeline — Prometheus → Kafka → tickets",
      projectDesc:
        "Alerts used to be delivered by a single webhook, which meant a receiver outage silently lost " +
        "them. Now Alertmanager publishes to a Kafka topic and a consumer files a ticket, so an outage " +
        "delays alerts instead of dropping them, and consumer lag becomes a visible backlog signal. " +
        "Verified end to end — including watching a real alert go from pending, to firing, to a ticket " +
        "with the alert's fingerprint in the subject.",
      footerLink: [
        { name: "Design notes", url: "https://github.com/areppzubaidi" },
      ],
    },
  ],
  display: true,
};


// Highlight strip
//
// Four numbers, each of which a reader can verify against the platform itself. No invented metrics:
// no "10x faster", no "99.99% uptime" -- the lab has no measured uptime and claiming one would be
// the first thing a technical interviewer dismantles.
const highlights = {
  display: true,
  stats: [
    { value: "22", label: "applications", caption: "reconciled from one git repo" },
    { value: "19", label: "services", caption: "inventoried, with what is NOT covered" },
    { value: "3", label: "systems", caption: "behind one login" },
    { value: "12", label: "decisions", caption: "written down, with what was rejected" },
  ],
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Certifications & Achievements
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Formal credentials — the projects above are where the practice lives",
  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Foundational AWS certification: cloud concepts, core services, and architecture best practices.",
      image: awsLogo,
      imageAlt: "AWS Logo",
      // TODO(ariff): replace with your own Credly badge URL. This currently points at Credly's
      // homepage, which verifies nothing.
      footerLink: [{ name: "View Certification", url: "https://www.credly.com/" }],
    },
    {
      title: "ITIL v4 Foundation Certified",
      subtitle:
        "IT service management practices and principles — the vocabulary incident and change management run on.",
      image: itilLogo,
      imageAlt: "ITIL Logo",
      footerLink: [{ name: "View Certification", url: "https://www.credly.com/" }],
    },
    {
      title: "MBOT Graduate Technologist",
      subtitle:
        "Registered as a Graduate Technologist under the Malaysia Board of Technologists (MBOT).",
      image: mbotLogo,
      imageAlt: "MBOT Logo",
      footerLink: [{ name: "MBOT Official Site", url: "https://www.mbot.org.my/" }],
    },
  ],
  display: true,
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "One page, or ask me for the long version",
  // hidden for the same reason as greeting.resumeLink: the bundled PDF is the template's placeholder
  display: false,
};

// Contact Info
const contactInfo = {
  title: "Jom borak.",
  subtitle: "Happy to talk about platform work, or about what broke in my lab this week",
  number: "+6010-9876406",
  email_address: "nurariffbinzubaidi@gmail.com",
  openForOpportunities: "Yes",
  display: true,
};

// Illustration config
const illustration = {
  animated: true,
};

// Hireable Toggle
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  highlights,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
};
