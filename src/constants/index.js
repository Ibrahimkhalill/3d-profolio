import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mysql,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ugv,
  merinasoft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tranee Web Developer",
    company_name: "University of Global Village",
    icon: ugv,
    iconBg: "#E6DED5",
    date: "April 2022 -  June 2022",
    points: [
      "Developing and maintaining web applications using Python Django and other technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Software Developer",
    company_name: "Merinasoft",
    icon: merinasoft,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Designing, developing, and maintaining robust software solutions using React.js, Node.js, MySQL, and a range of modern technologies, ensuring scalability and performance.",
      "Collaborating with cross-functional teams, including designers, product managers, and developers, to create seamless and user-centric digital products that meet business objectives.",
      "Implementing responsive, mobile-first designs and ensuring cross-browser compatibility to provide a consistent user experience across different platforms and devices.",
      "Contributing to a culture of code excellence by actively participating in code reviews, providing constructive feedback, and advocating for best practices in software development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Room Booking System",
    description:
      "A web-based platform that allows users to search, book, and manage room reservations at hotels, providing a seamless and efficient experience for booking accommodations. It also includes features for payment processing, availability checks etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/Ibrahimkhalill/Apartment-Booking-Sytem-React-.git",
  },
  {
    name: "Online Shopping System",
    description:
      "A web application that allows users to browse and purchase products, track orders, and view personalized recommendations based on their preferences and browsing history. It also offers secure payment options and seamless integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Ibrahimkhalill/EcomerceFrontendReact.git",
  },
  {
    name: "LMS",
    description:
      "A user-friendly Learning Management System designed to create, manage, and deliver online courses. It provides tools for content creation, student tracking, and assessments, enhancing the online learning experience for both instructors and learners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Ibrahimkhalill/Learning-Management-System.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
