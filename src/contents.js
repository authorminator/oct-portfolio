import profileImg from "./assets/profile-photo.jpg";
import studyHiveImg from "./assets/studyhive.png";
import superHeroAcademyImg from "./assets/superhero-academy.png";
import eigoParkImg from "./assets/eigo-park.png";
import itoRainbowImg from "./assets/ito-rainbow.png";
import foodyFortuneImg from "./assets/foody-fortune.png";

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
        category: "Web Development Tools",
        technologies: [
          {
            name: "Ruby on Rails",
            icon: "devicon-rails-plain colored",
          },
          {
            name: "React",
            icon: "devicon-react-original colored",
          },
          {
            name: "Vue.js",
            icon: "devicon-vuejs-plain colored",
          },
          {
            name: "Git",
            icon: "devicon-git-plain colored",
          },
          {
            name: "PostgreSQL",
            icon: "devicon-postgresql-plain colored",
          },
        ],
      },

      {
        category: "Programming Languages",
        technologies: [
          {
            name: "Ruby",
            icon: "devicon-ruby-plain colored",
          },
          {
            name: "Python",
            icon: "devicon-python-plain colored",
          },
          {
            name: "JavaScript",
            icon: "devicon-javascript-plain colored",
          },
          {
            name: "TypeScript",
            icon: "devicon-typescript-plain colored",
          },
        ],
      },

      {
        category: "Competencies",
        technologies: [
          { name: "Responsive Design" },
          { name: "Prototyping" },
          { name: "Web Application Development" },
          { name: "Teaching" },
          { name: "Team Collaboration" },
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
        more_description:
          "Team Project - I was the Team Designer and one of the Developers",
        icon: "💻",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://studeehive-56b6d3f6e62c.herokuapp.com/",
        github: "https://github.com/authorminator/StudeeHive",
        image: studyHiveImg,
      },
      {
        title: "Super Hero Academy",
        description:
          "A fictional marketplace app about people trying to learn Super Powers.",
        more_description:
          "Team Project - I was the Project Manager and one of the Developers",
        icon: "🦸‍♂️",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://my-superhero-academy-b4d3b19d6c27.herokuapp.com/",
        github: "https://github.com/authorminator/SuperHeroAcademy-App",
        image: superHeroAcademyImg,
      },
      {
        title: "Eigo-Park",
        description: "An app of educational games for elementary school kids.",
        more_description: "Solo Project",
        icon: "📔",
        technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
        link: "https://eigo-park.netlify.app/",
        github: "https://github.com/authorminator/eigo-park",
        image: eigoParkImg,
      },
      {
        title: "Ito-Rainbow Game",
        description:
          "A multiplayer web game inspired by Ito Rainbow by Arclight.",
        more_description: "Solo Project",
        icon: "📔",
        technologies: [
          "Ruby on Rails",
          "PostgreSQL",
          "Stimulus js",
          "Sortable.js",
          "Render.com",
        ],
        link: "https://ito-rainbow-app.onrender.com/",
        github: "https://github.com/authorminator/ito-rainbow-app",
        image: itoRainbowImg,
      },
      {
        title: "Foody-Fortune Game",
        description:
          "A click-based minigame about destroying food items and finding motivational quotes inside them.",
        more_description: "Solo Project",
        icon: "📔",
        technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
        link: "https://foodyfortune.netlify.app/",
        github: "https://github.com/authorminator/foodyfortune",
        image: foodyFortuneImg,
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
    copyright: "© 2026 Rayz-An-Exception. All rights reserved.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/authorminator" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/rayz-arain/" },
    ],
  },
};

export default portfolioContent;
