// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import LSTM from "./images/5.png";
import ConfMatrix from "./images/Confusion Matrix.png";
import MostPopularBrands from "./images/Most Popular Brands.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
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
  "As a Business Informatics senior at GUC, I thrive on unraveling insights from data through analytics, mining, and machine learning. My passion lies in applying these tools to uncover  hidden knowledge, combining theory with real-world applications in business or even foorball.";

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
    id: 3,
    skill: <Icon icon="simple-icons:sap" width="80" height="80"/>,
    name: "SAP ERP",
  },
  {
    id: 4,
    skill: <Icon icon="ph:file-sql" width="80" height="80" />,
    name: "SQL",
  },
  // {
  //   id: 5,
  //   skill: <Icon icon="mdi:react" className="display-4" />,
  //   name: "React",
  // },
  // {
  //   id: 6,
  //   skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
  //   name: "Styled Components",
  // },
  // {
  //   id: 7,
  //   skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
  //   name: "Redux",
  // },
  // {
  //   id: 8,
  //   skill: <Icon icon="bi:git" className="display-4" />,
  //   name: "Git",
  // },
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
export const filteredProjects = ["AI-LSTM-Project","DM-Classification","DM-LinearReg"];

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
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
