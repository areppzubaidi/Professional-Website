/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nur Ariff",
  title: "Hi all, I'm Ariff",
  subTitle: emoji(
    "Passionate Cloud DevOps Engineer|Now transitioning to Cloud DevOps, with a focus on CI/CD pipelines, cloud infrastructure (AWS/GCP/Azure), containerization (Docker/Kubernetes), and IaC (Terraform). Strong background in automation, monitoring, and optimizing deployments—bridging development and operations for seamless, high-performance systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/areppzubaidi",
  linkedin: "https://www.linkedin.com/in/nur-ariff-zubaidi-045785103/",
  gmail: "nurariffbinzubaidi@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  medium: "https://medium.com/@areppzubaidi",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE CLOUD & DEVOPS ENGINEER EXPLORING AUTOMATION AND INFRASTRUCTURE AS CODE",
  skills: [
      emoji("⚡ Build and manage scalable cloud infrastructure using AWS, Azure, and Terraform"),
      emoji("⚡ Automate CI/CD pipelines with tools like GitHub Actions, Jenkins, and GitLab CI"),
      emoji("⚡ Containerization and orchestration using Docker and Kubernetes")
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "kubernetes",
    fontAwesomeClassname: "fas fa-network-wired" // Kubernetes doesn't have a FontAwesome icon, using alternative
  },
  {
    skillName: "jenkins",
    fontAwesomeClassname: "fas fa-cogs" // Jenkins also has no official FA icon
  },
  {
    skillName: "ansible",
    fontAwesomeClassname: "fas fa-terminal" // No FA icon for Ansible, this is a generic replacement
  },
  {
    skillName: "terraform",
    fontAwesomeClassname: "fas fa-code-branch" // No FA icon, using a related symbol
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt"
  }
]
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universiti Tenaga Nasional",
      logo: require("./assets/images/uniten.png"),
      subHeader: "Bachelor in Information System",
      duration: "June 2011 - August 2015",
      
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Linux",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Networking",
      progressPercentage: "60%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "60%"
    },
    {
      Stack: "Automation",
      progressPercentage: "60%"
    },
    {
      Stack: "Containerization",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "L2 Engineer",
      company: "Access World",
      companylogo: require("./assets/images/aw.png"), // Updated logo path
      date: "April 2022 – Present",
      desc: "Handling Level 2 support, network troubleshooting, and system administration tasks for internal teams and external clients."
    },
    {
      role: "IT Executive",
      company: "FPSO Ventures Sdn Bhd",
      companylogo: require("./assets/images/fpso.png"), // Updated logo path
      date: "August 2020 – April 2022",
      desc: "Managed IT infrastructure, implemented security protocols, and ensured business continuity for offshore systems."
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"), // Updated logo path
      date: "March 2018 – July 2020",
      desc: "Provided support for enterprise systems, deployed patches, and maintained server health for multiple clients."
    },
    {
      role: "Field Engineer",
      company: "NTT Data Services",
      companylogo: require("./assets/images/ntt.png"), // Updated logo path
      date: "January 2017 – February 2018",
      desc: "Handled on-site troubleshooting, system setup, and client-side configurations for enterprise IT environments."
    },
    {
      role: "IT Helpdesk",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/hpe.png"), // Updated logo path
      date: "June 2015 – December 2016",
      desc: "Resolved user tickets, performed basic troubleshooting, and maintained IT support logs."
    }
  ]
};




/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters, and some cool stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Earned foundational AWS certification, demonstrating understanding of cloud concepts, AWS services, and architecture best practices.",
      image: null, // Replace with: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/" // Replace with your actual certification link
        }
      ]
    },
    {
      title: "ITIL v4 Foundation Certified",
      subtitle: "Certified in ITIL v4 Foundation, demonstrating understanding of IT Service Management practices and principles.",
      image: null, // Replace with: require("./assets/images/itilLogo.png"),
      imageAlt: "ITIL Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/" // Replace with your actual certification link
        }
      ]
    },
    {
      title: "MBOT Graduate Technologist",
      subtitle: "Registered as a Graduate Technologist under the Malaysia Board of Technologists (MBOT).",
      image: null, // Replace with: require("./assets/images/mbotLogo.png"),
      imageAlt: "MBOT Logo",
      footerLink: [
        {
          name: "MBOT Official Site",
          url: "https://www.mbot.org.my/"
        }
      ]
    }
  ],
  display: true
};


// Blogs Section



// Talks Sections



// Podcast Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+60108976406",
  email_address: "nurariffbinzubaidi@gmail.com",
  openForOpportunities: "Yes"
};



// Twitter Section


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection
};
