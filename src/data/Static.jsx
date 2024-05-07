import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import symfony from "../assets/langues/symfony.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import spring from "../assets/langues/spring.png";
import flutter from "../assets/langues/flutter.png";
import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import php from "../assets/langues/php.png";
import java from "../assets/langues/java.png";
import typescript from "../assets/langues/typescript.png";
import angularmaterial from "../assets/langues/angularmaterial.png";
import sql from "../assets/langues/sql.png"

// Array of work objects
export const works = [
  {
    title: "Event Management App",
    imgUrl:
      "https://techpoint.africa/wp-content/uploads/2023/06/Techpoint_1.png",
    tech: ["Angular", "Angular Material", "Bootstrap"],
    workUrl:
      "https://www.lectie.com/",
    duration: "400",
  },

  {
    title: "Portcall Management Website",
    imgUrl:"https://www.logomoose.com/wp-content/uploads/2013/10/500X247-46.jpg",
    tech: ["Angular","Angular Material"],
    workUrl:
      "https://www.behance.net/gallery/155476041/UI-Design-Photography-Portfolio-Website",
    duration: "500",
  },
  {
    title: "Zvolv Component Creation",
    imgUrl:
      "https://www.zvolv.com/assets/images/product-screens/reporting.png",
    tech: ["React JS","Tailwind CSS"],
    workUrl: "https://github.com/LaithMahdi/portfolio_maker",
    duration: "600",
  },
  {
    title: "Custom Component Creation",
    imgUrl:
      "https://global.discourse-cdn.com/business7/uploads/builder/original/2X/a/aca2594e756768803ce3a518692e3db2346b060b.png",
    tech: ["Angular","React JS","Tailwind CSS"],
    workUrl:
      "https://www.behance.net/gallery/150189805/MAKLTI-Food-Delivery-App",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "May 2021 - August 2021",
    company: "SigmaLabs",
    position: "Blockchain Developer",
    description:
      "I succesfully learned Blockchain Technology .Also learned Solidity(Ethereum) and TEAL(Algorand) programming language, Motoko(Internet Computer) programming language",
  },
  {
    date: "October 2021 - October 2023",
    company: "Hakuna Matata Solutions",
    position: "Software Engineer",
    description:
      "I have expertise in creating visually captivating and user-friendly websites for restaurants. Additionally, I possess skills in managing automated tests to ensure optimal functionality and performance.",
  }
];


// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: typescript,
    title: "TypeScript",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 6,
    src: angular,
    title: "Angular",
    style: "shadow-rose-500",
  },
  {
    id:7,
    src:angularmaterial,
    title:"Angular Material",
    style: "shadow-yellow-600"
  },
  {
    id: 8,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
  id: 9,
  src: bootstrap,
  title: "Bootstrap",
  style: "shadow-violet-500",
},
  {
    id: 10,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 11,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },
  {
    id: 12,
    src: sql,
    title: "SQL",
    style: "shadow-sky-300",
  }
];
