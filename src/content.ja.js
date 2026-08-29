import profileImg from "./assets/profile-photo.jpg";
import studyHiveImg from "./assets/studyhive.png";
import superHeroAcademyImg from "./assets/superhero-academy.png";
import eigoParkImg from "./assets/eigo-park.png";
import itoRainbowImg from "./assets/ito-rainbow.png";
import foodyFortuneImg from "./assets/foody-fortune.png";

const portfolioContentJa = {
  personal: {
    name: "Rayz",
    lastName: "Arain",
    urlName: "Rayz-An-Exception",
    title: "フルスタックWeb開発者",
    get description() {
      return `${this.name}です。プログラミングが好きで、アイデアから完成まで一貫してプロダクトを作ることにやりがいを感じています。持続可能で拡張性のあるシステムを通じて、実際に価値を生み出せるプロダクト開発を目指しています。`;
    },
    profileEmoji: "👤",
    profileIcon: profileImg,
  },

  navigation: [
    { text: "ホーム", href: "#home" },
    { text: "自己紹介", href: "#about" },
    { text: "制作実績", href: "#projects" },
    { text: "お問い合わせ", href: "#contact" },
  ],

  heroButtons: [
    { text: "制作実績を見る", href: "#projects", type: "primary" },
    { text: "お問い合わせ", href: "#contact", type: "secondary" },
  ],

  about: {
    title: "自己紹介",
    get intro() {
      return `${portfolioContentJa.personal.name}です。1年以上にわたり、ユーザーにとって使いやすく、レスポンシブなWebサイトやWebアプリケーションの開発に取り組んでいます。`;
    },
    description:
      "モダンなWeb技術を使った開発が好きで、レスポンシブデザイン、パフォーマンス、アクセシビリティを意識しています。考え抜かれたデザイン、読みやすいコード、そしてチームでの問題解決が、使いたくなるプロダクトを作るために重要だと考えています。",

    skills: [
      {
        category: "Web開発ツール",
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
        category: "プログラミング言語",
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
        category: "その他のスキル",
        technologies: [
          { name: "レスポンシブデザイン" },
          { name: "プロトタイピング" },
          { name: "Webアプリケーション開発" },
          { name: "教育・指導" },
          { name: "チーム開発" },
        ],
      },
    ],
  },

  portfolio: {
    title: "制作実績",
    description:
      "これまでに制作したWebアプリケーションの一部をご紹介します。使用した技術や担当した役割もあわせて掲載しています。",

    projects: [
      {
        title: "StudyHive",
        description:
          "一人ではなく、他の人と一緒に学習することで、勉強を続けやすくするためのWebアプリです。",
        more_description:
          "チームプロジェクト - チームデザイナーおよび開発メンバーとして参加",
        icon: "💻",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://studeehive-56b6d3f6e62c.herokuapp.com/",
        github: "https://github.com/authorminator/StudeeHive",
        image: studyHiveImg,
      },
      {
        title: "Super Hero Academy",
        description:
          "スーパーパワーを学びたい人向けの架空のマーケットプレイスをテーマにしたWebアプリです。",
        more_description:
          "チームプロジェクト - プロジェクトマネージャーおよび開発メンバーとして参加",
        icon: "🦸‍♂️",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://my-superhero-academy-b4d3b19d6c27.herokuapp.com/",
        github: "https://github.com/authorminator/SuperHeroAcademy-App",
        image: superHeroAcademyImg,
      },
      {
        title: "Eigo-Park",
        description:
          "小学生向けの英語学習ゲームをまとめた教育用Webアプリです。",
        more_description: "個人プロジェクト",
        icon: "📔",
        technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
        link: "https://eigo-park.netlify.app/",
        github: "https://github.com/authorminator/eigo-park",
        image: eigoParkImg,
      },
      {
        title: "Ito-Rainbow Game",
        description:
          "Arclightの「ito レインボー」に着想を得た、複数人で遊べるWebゲームです。",
        more_description: "個人プロジェクト",
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
          "食べ物のアイテムをクリックして壊し、その中からモチベーションを高めるメッセージを見つけるミニゲームです。",
        more_description: "個人プロジェクト",
        icon: "📔",
        technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
        link: "https://foodyfortune.netlify.app/",
        github: "https://github.com/authorminator/foodyfortune",
        image: foodyFortuneImg,
      },
    ],
  },

  contact: {
    title: "お問い合わせ",
    description:
      "Web開発に関するご相談やお仕事のご依頼などがありましたら、お気軽にご連絡ください。",
    info: [
      {
        type: "メール",
        value: "araingulraiz@gmail.com",
        icon: "📧",
      },
      {
        type: "所在地",
        value: "東京、日本",
        icon: "📍",
      },
    ],
  },

  footer: {
    copyright: "© 2026 Rayz-An-Exception. All rights reserved.",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/authorminator",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rayz-arain/",
      },
    ],
  },
};

export default portfolioContentJa;
