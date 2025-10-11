import profileImg from "./assets/profile-photo.jpg";
import studyHiveImg from "./assets/studyhive.png";
import superHeroAcademyImg from "./assets/superhero-academy.png";
import eigoParkImg from "./assets/eigo-park.png";

const portfolioContent = {
  // Personal Information
  personal: {
    name: "Rayz",
    lastName: "Arain",
    urlName: "Rayz-An-Exception",
    title: "Fullstack Web Developer",
    get description() {
      return `My name is ${this.name}. I'm passionate about programming and love building products from start to finish that create real impact through sustainable and scalable systems.`;
    },
    profileEmoji: "👤", // You can change this to any emoji or remove for an image
    profileIcon: profileImg, // Replace with your image path
  },

  // Navigation Menu
  navigation: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" },
  ],

  // Hero Section Buttons
  heroButtons: [
    { text: "View My Work", href: "#portfolio", type: "primary" },
    { text: "Get In Touch", href: "#contact", type: "secondary" },
  ],

  // About Section
  about: {
    title: "About Me",
    get intro() {
      return `My name is ${portfolioContent.personal.name}. I’m a web developer with over a year of experience building user-friendly, responsive websites and applications.`;
    },
    description:
      "I enjoy working with modern web technologies and pay close attention to responsive design, performance, and accessibility. I believe that thoughtful design, clean code, and collaborative problem-solving are key to creating products people love to use.",

    // Skills organized by category
    skills: [
      {
        category: "Web Development",
        technologies: [
          "Ruby on Rails",
          "React",
          "Vue.js",
          "Node.js",
          "Express.js",
          "Git",
          "PostgreSQL",
        ],
      },
      {
        category: "Programming Languages",
        technologies: [
          "Ruby",
          "Python",
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
        ],
      },
      {
        category: "Competencies",
        technologies: [
          "Responsive Design",
          "Prototyping",
          "Web Application Development",
          "Teaching",
          "Team Collaboration",
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "Portfolio",
    description:
      "A selection of my recent work showcasing various skills and technologies.",

    // Projects array - add/remove/edit projects here
    projects: [
      {
        title: "StudyHive",
        description:
          "Make learning easier by doing it with other people rather than alone.",
        icon: "💻",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://www.studyhive.org/",
        image: studyHiveImg,
      },
      {
        title: "Super Hero Academy",
        description:
          "A fictional marketplace app about people trying to learn Super Powers.",
        icon: "🦸‍♂️",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://super-hero-academy-1c8a93bbc04f.herokuapp.com/",
        image: superHeroAcademyImg,
      },
      {
        title: "Eigo-Park",
        description: "An app of educational games for elementary school kids.",
        icon: "📔",
        technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
        link: "https://eigo-park.netlify.app/",
        image: eigoParkImg,
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description:
      "Ready to start your next project? Let's discuss how we can work together.",

    // Contact Information
    info: [
      {
        type: "Email",
        value: "araingulraiz@gmail.com",
        icon: "📧",
      },
      // {
      //   type: "Phone",
      //   value: "+81 ( 90 ) 5426-8297",
      //   icon: "📱",
      // },
      {
        type: "Location",
        value: "Tokyo, Japan",
        icon: "📍",
      },
    ],
  },

  // Footer Section
  footer: {
    copyright: "© 2025 Rayz-An-Exception. All rights reserved.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/authorminator" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/rayz-arain/" },
    ],
  },
};

export default portfolioContent;
