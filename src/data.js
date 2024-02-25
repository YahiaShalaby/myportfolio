// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import LSTM from "./images/5.png";
import ConfMatrix from "./images/Confusion Matrix.png";
import MostPopularBrands from "./images/Most Popular Brands.png";
import MarkovModel from "./images/markov model.PNG";
import db from "./images/db.png";
import se from "./images/shalabanky-low-resolution-logo-color-on-transparent-background.png";
import marvel from "./images/mrvl.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/abstract-smooth-dark-blue-with-black-vignette-studio-well-use-as-background-business-report-digital-website-template-backdrop.jpg";
import HeroDark from "./images/dark-blue-paint-with-shade.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "YahiaShalaby";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As a Business Informatics senior at GUC, I thrive on unraveling insights from data through analytics, mining, and machine learning. My passion lies in applying these tools to uncover  hidden knowledge, combining theory with real-world applications in business or even foorball!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="simple-icons:python"  width="80" height="80"className="display-4" />,
    name: "Python (Intermediate lvl)",
  },
  {
    id: 2,
    skill: <Icon icon="bxl:java" width="80" height="80" />,
    name: "Java (Intermediate lvl)",
  },
  {
    id: 4,
    skill: <Icon icon="ph:file-sql" width="80" height="80" />,
    name: "SQL (Intermediate lvl)",
  },
  {
    id: 5,
    skill: <Icon icon="devicon-plain:csharp" width="80" height="80" />,
    name: "C# (Beginner lvl)",
  },
  {
    id: 6,
    skill: <Icon icon="icomoon-free:html-five" width="80" height="80" />,
    name: "HTML5 (Beginner lvl)",
  },
  {
    id: 7,
    skill: <Icon icon="ic:outline-css" width="80" height="80" />,
    name: "CSS (Beginner lvl)",
  },
  {
    id: 8,
    skill: <Icon icon="nonicons:javascript-16" width="80" height="80" />,
    name: "JS (Beginner lvl)",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:dart" width="80" height="80" />,
    name: "Dart (Beginner lvl)",
  },
  {
    id: 11,
    skill: <Icon icon="bxl:flutter" width="80" height="80" />,
    name: "Flutter (Beginner lvl)",
  },
  {
    id: 3,
    skill: <Icon icon="simple-icons:sap" width="80" height="80"/>,
    name: "SAP ERP & ABAP",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" width="96" height="96" className="display-4" />,
    name: "GitHub",
  },  
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
// export const filteredProjects = ["example-1", "example-2", "example-3"];
export const filteredProjects = ["AI-LSTM-Project","DM-Classification","DM-LinearReg","AI-MarkovModel-Project","DB-Enigine","SE-Project","Marvel-Ultimate-War-Game"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "AI-LSTM-Project",
    image: LSTM,
  },
  {
    name: "DM-Classification",
    image: ConfMatrix,
  },
  {
    name: "DM-LinearReg",
    image: MostPopularBrands,
  },
  {
    name: "AI-MarkovModel-Project",
    image: MarkovModel,
  },
  {
    name: "DB-Enigine",
    image: db,
  },
  {
    name: "SE-Project",
    image: se,
  },
  {
    name: "Marvel-Ultimate-War-Game",
    image: marvel,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
