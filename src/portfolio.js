// Personal Portfolio Configuration File

// Global color changes can be made in _globalColor.scss

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
  title: "Hi all, I'm Ariff",
  subTitle: emoji(
    "Passionate Cloud DevOps Engineer | Now transitioning to Cloud DevOps, with a focus on CI/CD pipelines, cloud infrastructure (AWS/GCP/Azure), containerization (Docker/Kubernetes), and IaC (Terraform). Strong background in automation, monitoring, and optimizing deployments—bridging development and operations for seamless, high-performance systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/areppzubaidi",
  linkedin: "https://www.linkedin.com/in/nur-ariff-zubaidi-045785103/",
  gmail: "nurariffbinzubaidi@gmail.com",
  gitlab: "https://gitlab.com/areppzubaidi", // consider updating if wrong
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE CLOUD & DEVOPS ENGINEER EXPLORING AUTOMATION AND INFRASTRUCTURE AS CODE",
  skills: [
    emoji("⚡ Build and manage scalable cloud infrastructure using AWS, Azure, and Terraform"),
    emoji("⚡ Automate CI/CD pipelines with tools like GitHub Actions, Jenkins, and GitLab CI"),
    emoji("⚡ Containerization and orchestration using Docker and Kubernetes"),
  ],
  softwareSkills: [
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "kubernetes", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "jenkins", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "ansible", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
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
const techStack = {
  viewSkillBars: true,
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
      role: "L2 Engineer",
      company: "Access World",
      companylogo: require("./assets/images/aw.png"),
      date: "August 2023 – Present",
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

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Certifications & Achievements
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters, and some cool stuff that I have done!",
  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Earned foundational AWS certification, demonstrating understanding of cloud concepts, AWS services, and architecture best practices.",
      image: awsLogo,
      imageAlt: "AWS Logo",
      footerLink: [{ name: "View Certification", url: "https://www.credly.com/" }],
    },
    {
      title: "ITIL v4 Foundation Certified",
      subtitle:
        "Certified in ITIL v4 Foundation, demonstrating understanding of IT Service Management practices and principles.",
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
  subtitle: "Feel free to download my resume",
  display: true,
};

// Contact Info
const contactInfo = {
  title: "Contact",
  subtitle: "Want to work together or just say hi?",
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
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
};
