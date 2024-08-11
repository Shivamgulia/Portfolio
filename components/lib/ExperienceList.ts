// Fil Images
import Fil1 from "@/assets/images/websites/Fil1.jpg";
import Fil2 from "@/assets/images/websites/Fil2.jpg";
import Fil3 from "@/assets/images/websites/Fil3.jpg";
import Fil4 from "@/assets/images/websites/Fil4.jpg";

// AVo Images
import Avo1 from "@/assets/images/websites/Avo1.png";
import Avo2 from "@/assets/images/websites/Avo2.png";
import Avo3 from "@/assets/images/websites/Avo3.png";
import Avo4 from "@/assets/images/websites/Avo4.png";
import Avo5 from "@/assets/images/websites/Avo5.png";
import Avo6 from "@/assets/images/websites/Avo6.png";

// Admin Images
import Admin1 from "@/assets/images/websites/Admin1.png";
import Admin2 from "@/assets/images/websites/Admin2.png";
import Admin3 from "@/assets/images/websites/Admin3.png";
import Admin4 from "@/assets/images/websites/Admin4.png";
import Admin5 from "@/assets/images/websites/Admin5.png";

export const experienceList = [
  {
    name: "Fidelity International",
    title: "AI Intern",
    description: [
      {
        head: "Technology:",
        list: false,
        desc: "Generative AI, Vector Stores, React JS, Python, Flask",
      },
      {
        head: "Achievements:",
        list: false,
        desc: "Collaborated in the creation of a web application leveraging JavaScript, React JS, and Python with Flask for API development. Successfully delivered a project that integrates generative AI, providing valuable insights into its applications, intricacies, and real-world implementation.",
      },
      {
        head: "Web Application:",
        list: false,
        desc: "Harnesses the power of a large language model to answer questions based on diverse sources such as documents, websites, and text, which could answer question accurately up to 88%.",
      },
    ],
    images: [Fil1, Fil2, Fil3, Fil4],
    links: [
      {
        heading: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/shivam-gulia-44a773202/",
      },
    ],
  },
  {
    name: "AVO (Avoid Verbal Order)",
    title: "Freelance Sea Drivez",
    description: [
      {
        head: "Technology:",
        list: false,
        desc: "Next JS, React JS, JavaScript, MySQL, Ubuntu",
      },
      {
        head: "Achievements:",
        list: true,
        desc: [
          "Engineered a web application utilizing JavaScript, Next JS, and MySQL for seamless API and front-end development.",
          "Implemented JSON Web Token for back-end authentication Next-Auth for front-end authentication.",
          "Deployed the web application on a Ubuntu Virtual Private Server and serve the application by configured the Nginx.",
        ],
      },
      {
        head: "Web Application:",
        list: false,
        desc: "A project that keeps track of issues occurring throughout the ships assigning them to the concerned departments maintaining it for 4 ships.",
      },
    ],
    images: [Avo1, Avo2, Avo3, Avo4, Avo5, Avo6],
    links: [
      {
        heading: "AVO Website",
        link: "https://avo.seadrivezconnect.co.in/",
      },
    ],
  },
  {
    name: "Admin Portal",
    title: "Freelance Sea Drivez",
    description: [
      {
        head: "Technology:",
        list: false,
        desc: "Next JS, React JS, JavaScript, MySQL, Ubuntu, Nginx",
      },
      {
        head: "Achievements:",
        list: true,
        desc: [
          "Constructed an application for the management to visualize the feedback from the customers.",
          "Created a secure application with role based authentication for admin and user for multiple ships. – Designed a MySQL Database structure to store and retrieve feedback data.",
          "Presented Graphs for better understanding the feedback.",
          "Hosted the app on a VPS running Ubuntu and employed Nginx to serve the application.",
        ],
      },
      {
        head: "Web Application:",
        list: false,
        desc: "A project that helps to visualize and understand the feedback from the customer for 4 cruise ships. ",
      },
    ],
    images: [Admin1, Admin2, Admin3, Admin4, Admin5],
    links: [
      {
        heading: "Admin Panel Website",
        link: "https://admin.seadrivezconnect.co.in/",
      },
    ],
  },
];

const desc = `Fidelity International AI Intern
Gurugram
June 2023 - August 2023
◦ Technology: Generative AI, Vector Stores, React JS, Python, Flask
◦ Achievements: Collaborated in the creation of a web application leveraging JavaScript, React JS, and Python
with Flask for API development. Successfully delivered a project that integrates generative AI, providing valuable
insights into its applications, intricacies, and real-world implementation.
◦ Web Application: Harnesses the power of a large language model to answer questions based on diverse sources such as
documents, websites, and text, which could answer question accurately up to 88%.



• Freelance Sea Drivez AVO (Avoid Verbal Order) January 2024 - March 2024
◦ Technology: Next JS, React JS, JavaScript, MySQL, Ubuntu
◦ Achievements: – Engineered a web application utilizing JavaScript, Next JS, and MySQL for seamless API and
front-end development.
– Implemented JSON Web Token for back-end authentication Next-Auth for front-end authentication.
– Deployed the web application on a Ubuntu Virtual Private Server and serve the application by configured the Nginx.
◦ Web Application: A project that keeps track of issues occurring throughout the ships assigning them to the concerned departments maintaining it for 4 ships.


• Freelance Sea Drivez Admin Portal April 2024 - June 2024
◦ Technology: Next JS, React JS, JavaScript, MySQL, Ubuntu, Nginx
◦ Achievements: – Constructed an application for the management to visualize the feedback from the customers.
– Created a secure application with role based authentication for admin and user for multiple ships. – Designed a MySQL Database structure to store and retrieve feedback data.
– Presented Graphs for better understanding the feedback.
– Hosted the app on a VPS running Ubuntu and employed Nginx to serve the application.
◦ Web Application: A project that helps to visualize and understand the feedback from the customer for 4 cruise ships.`;
