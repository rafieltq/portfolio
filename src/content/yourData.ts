// Social Icon
import githubIcon from "../images/github.svg";
// import instagramIcon from "./images/instagram.svg";
import twitterIcon from "../images/twitter.png";

// Work images
import mutusImage from '../images/mutus.png';
import bohiosImage from '../images/bohios.png';
import moreProjectsImage from '../images/more-projects.png';
import taVivoImage from '../images/taVivo.png';
import cowofiImage from '../images/cowofi.png';
import laCasitaDeCharo from '../images/la-casita-de-charo.png';
import adpImage from '../images/adp.jpg';
import rentsImage from '../images/rents.png';
import domicountImage from '../images/domicount.png';
import planificationImage from '../images/planificacionia.png';
import arsoftware from "../images/arsoftware.png";
import sdm from '../images/sdm.png';

// skills images
import python from "../images/python.png"
import jsIcon from "../images/js.png"
import nodejsLogo from "../images/nodejs.png"
import dockerIcon from "../images/docker.svg"
import vueIcon from "../images/vue.png"
import reactIcon from "../images/react.png"
import phpIcon from "../images/php.png"


interface Project {
  title: string;
  para: string;
  imageSrc: any;
  url: string;
}

interface Skill {
  img: any;
  para: string;
  name: string;
}

interface Social {
  img: any;
  url: string;
}

interface YourData {
  name: string;
  headerTagline: string[];
  headerParagraph: string;
  contactEmail: string;
  projects: Project[];
  projectsParticipations: Project[];
  aboutParaOne: string;
  aboutParaTwo: string;
  aboutParaThree: string;
  aboutImage: string;
  skills: Skill[];
  promotionHeading: string;
  promotionPara: string;
  contactSubHeading: string;
  social: Social[];
  sponsors: any[];
}

const yourData: YourData = {
  // Header Details ---------------------
  name: "Rafiel",
  headerTagline: [
    "Innovative Solutions,",
    "Creative Designs,",
    "Exceptional Experiences",
  ],
  headerParagraph: "Planing, design, development, quality assurance.",
  contactEmail: "taverasrafiel@gmail.com",
  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Santo Domingo Motors - Digital Sell Forms and CRM MVP",
      para: "Through an event sponsored by ITLA and SDM, i guided a team and we developed a digital form to sell cars and a CRM to manage the filling procces of client information to get a vehicle.",
      imageSrc: sdm,
      url: "https://www.linkedin.com/posts/rafieltq_hackathonwinners-softwareinnovation-teamsynergy-activity-7136047391438168064-f6rG?utm_source=social_share_send&utm_medium=member_desktop_web",
    },
    {
      title: "ADP - Professors data management system",
      para: "Data management system for the Dominican Professors Assoication on the 07-06 district, San Francisco de Macorís, Dominican Republic.",
      imageSrc: adpImage,
      url: "https://adpsanfrancisco.com.do",
    },
    {
      title: "Rent Management System",
      para: "System to manage properties for rent, contracts, tenants, payments and notifications.",
      imageSrc: rentsImage,
      url: "https://bydpropertiesllc.com",
    },
    {
      title: "Domicount - Computer Vision powered dominoes match history app",
      para: "Domino match history registry with the capability of counting the points of the dominoes in the table from a photo.",
      imageSrc: domicountImage,
      url: "https://domicount.netlify.app/#/",
    },
    {
      title: "Planification Generator for Professors",
      para: "System to generate the planification for the professors, AI powered to generate planifications based on the topics and subjects.",
      imageSrc: planificationImage,
      url: "https://moodlequizgenerator.netlify.app/#/auth/login",
    },
    {
      title: "AR SOFTWARE",
      para: "Landing page for offering software services as freelancers, currently working with ODOO CRM, POS and accounting modules with the community edition.",
      imageSrc: arsoftware,
      url: "https://ar.taveras.com.do"
    },
    {
      title: "More",
      para: "Explore all my open source projects.",
      imageSrc: moreProjectsImage,
      url: "https://github.com/rafieltq",
    }
  ],

  projectsParticipations: [
    {
      title: "MUTUS",
      para: "All in one Fitness FREE App.",
      imageSrc: mutusImage,
      url: "https://mutus.app",
    },
    {
      title: "Ta vivo",
      para: "Check if your service is down before your customers. Get notification via Discord, Email, Slack, Telegram or WhatsApp.",
      imageSrc: taVivoImage,
      url: "https://landing.tavivo.do",
    },
    {
      title: "Cowofi",
      para: "Find perfect working space near you!",
      imageSrc: cowofiImage,
      url: "https://cowofi.netlify.app",
    },
    {
      title: "Bohios",
      para: "For real estate agencies, agents & individuals looking to promote, sell or rent their properties.",
      imageSrc: bohiosImage,
      url: "https://bohio-landing.netlify.app",
    },
    {
      title: 'La Casita de Charo',
      para: 'Villas landing page located in the city of Constanza, Dominican Republic.',
      imageSrc: laCasitaDeCharo,
      url: 'https://lacasitadecharo.com'
    }
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne: "Rafiel is a web developer and data scientist, with experience in the development of web applications, mobile applications, and data analysis.",
  aboutParaTwo: "He Specialize in JavaScript and have professional experience working with PHP, Python, Node JS, Docker, React and VUE.",
  aboutParaThree: "He also have experience working with IoT devices and data engineering.",
  aboutImage: "https://pbs.twimg.com/profile_images/1888618549008072704/AA4HoQWT_400x400.jpg",

  // End About Section ---------------------

  // Skills Section ---------------
  skills: [
    {
      img: python,
      para: "Experience in data analysis with pandas and matplotLib, data visualization and data pipeline devlopment with airflow.",
      name: "python"
    },
    {
      img: jsIcon,
      para: "Extensive knowledge in the foundations of the language and different frameworks.",
      name: "Javascript"
    },
    {
      img: nodejsLogo,
      para: "Experience in creating restful APIs using Node Js, Express, Sequelize among other server-side tools.",
      name: "NodeJs"
    },
    {
      img: dockerIcon,
      para: "Extensive professional experience with Docker, traefik and more.",
      name: "Docker"
    },
    {
      img: vueIcon,
      para: "Experience with Vue building multi-purpose web applications and mobile APPs, Vuex, Vue router, Quasar Framework and much more.",
      name: "Vue"
    },
    {
      img: reactIcon,
      para: "Professional experience working with React, redux, NextJS, and many more tools of the react ecosystem.",
      name: "React"
    },
    {
      img: phpIcon,
      para: 'Proffesional experience working with PHP POO with Symfony PHP',
      name: "PHP"
    }
  ],

  // End Skills Section --------------------------

  // Promotion Section --------------------------
  promotionHeading: "My recent activity on the internet",
  promotionPara: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  // Contact Section --------------
  contactSubHeading: "Let's create your next project together!",
  social: [
    { img: githubIcon, url: "https://github.com/rafieltq" },
    { img: twitterIcon, url: "https://twitter.com/rafiel_tq" }
    // { img: instagramIcon, url: "https://www.instagram.com/rafiel_tq/" },
  ],

  // End Contact Section ---------------
  sponsors: []
};

export default yourData;
