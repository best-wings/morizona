import RossmannOne from "../../assets/portfolio/rossmann-1.webp";
import RossmannTwo from "../../assets/portfolio/rossmann-2.webp";
import RossmannThree from "../../assets/portfolio/rossmann-3.webp";
import RossmannFour from "../../assets/portfolio/rossmann-4.webp";
import YescapaOne from "../../assets/portfolio/yescapa-1.webp";
import YescapaTwo from "../../assets/portfolio/yescapa-2.webp";
import YescapaThree from "../../assets/portfolio/yescapa-3.webp";
import YescapaFour from "../../assets/portfolio/yescapa-4.webp";
import MorizonOne from "../../assets/portfolio/morizon-1.webp";
import MorizonTwo from "../../assets/portfolio/morizon-2.webp";
import MorizonThree from "../../assets/portfolio/morizon-3.webp";
import MorizonFour from "../../assets/portfolio/morizon-4.webp";
import LibrusOne from "../../assets/portfolio/librus-1.webp";
import LibrusTwo from "../../assets/portfolio/librus-2.webp";
import LibrusThree from "../../assets/portfolio/librus-3.webp";
import LibrusFour from "../../assets/portfolio/librus-4.webp";
import JakOne from "../../assets/portfolio/jak-1.webp";
import JakTwo from "../../assets/portfolio/jak-2.webp";
import JakThree from "../../assets/portfolio/jak-3.webp";
import JakFour from "../../assets/portfolio/jak-4.webp";
import DietOne from "../../assets/portfolio/diet-1.webp";
import DietTwo from "../../assets/portfolio/diet-2.webp";
import DietThree from "../../assets/portfolio/diet-3.webp";
import DietFour from "../../assets/portfolio/diet-4.webp";
export const ProjectData = [
  {
    appStore: "https://apps.apple.com/us/app/rossmann/id1034309353",
    playStore:
      "https://play.google.com/store/apps/details?id=de.rossmann.app.android&hl=de&pli=1",
    title: "Rossmann (Shopping App)",
    img: [RossmannOne, RossmannTwo, RossmannThree, RossmannFour],
    desc: "Refactored app by updated UI using Swift and Kotlin. Cooperated with cross functional teams to improve the performance by using XCTest, Espresso and Junit. Tested against a user base of 10M+ with 20K+ active daily users.",
    skills: ["Swift", "Kotlin", "XCText", "Espresso", "Junit", "Stripe"],
  },
  {
    appStore: "https://apps.apple.com/us/app/yescapa/id1043554869",
    playStore:
      "https://play.google.com/store/apps/details?id=com.yescapa&hl=en",
    title: "Yescapa (RV Rental Service App)",
    img: [YescapaOne, YescapaTwo, YescapaThree, YescapaFour],
    desc: "Implemented a nearby feature using the Google Map API to enhance user interaction. Integrated chat features by utilizing Salesforce Chat SDK and MessageKit. Enhanced app security for payment and user information management by applying OWASP best practices.",
    skills: [
      "React Native",
      "Expo",
      "Google Map API",
      "GraphQL",
      "Prisma ORM",
      "ChatSDK",
      "AWS",
      "OWASP",
    ],
  },
  {
    appStore:
      "https://apps.apple.com/pl/app/nieruchomo%C5%9Bci-morizon-pl/id531102542?l=pl",
    playStore:
      "https://play.google.com/store/apps/details?id=pl.morizon.client&hl=en&gl=US",
    title: "Morizon (Real Estate App)",
    img: [MorizonOne, MorizonTwo, MorizonThree, MorizonFour],
    desc: "Enhanced user experience with map functionality by utilizing the Mapbox API. Designed and built clean, intuitive user interfaces. Implemented real-time notifications using Google Firebase.",
    skills: ["React Native", "Mapbox API", "Firebase", "GraphQL"],
  },
  {
    appStore: "https://apps.apple.com/pl/app/librus/id1122457592?l=pl",
    playStore:
      "https://play.google.com/store/apps/details?id=pl.librus.synergiaDru2&hl=en&gl=US",
    title: "Librus (Education App)",
    img: [LibrusOne, LibrusTwo, LibrusThree, LibrusFour],
    desc: "Improved student-parent communication by integrating a user-friendly messaging system. Designed intuitive and engaging user interfaces to facilitate seamless interactions. Implemented real-time updates and notifications using AWS Amplify, ensuring parents stay informed about their child's progress and important school events.",
    skills: ["React Native", "Expo", "AWS Amplify", "MobX", "Detox", "Applum"],
  },
  {
    appStore: "https://apps.apple.com/pl/app/librus/id1122457592?l=pl",
    playStore:
      "https://play.google.com/store/apps/details?id=pl.librus.synergiaDru2&hl=en&gl=US",
    title: "Jakdojade (Public Transport)",
    img: [JakOne, JakTwo, JakThree, JakFour],
    desc: "Developed a crucial application for public transport passengers in Polish cities. Enabled users to effortlessly check timetables and purchase tickets through a user-friendly interface. Implemented real-time updates and notifications to keep passengers informed about schedule changes and service alerts, enhancing their overall commuting experience.",
    skills: ["React Native", "Firebase", "Charles Proxy", "Jest", "Espresso"],
  },
  {
    appStore:
      "https://apps.apple.com/de/app/bediet-ewa-chodakowska/id1531831765",
    playStore:
      "https://play.google.com/store/apps/details?id=pl.bediet.app&hl=en&gl=US",
    title: "Chodakowskiej (Health & Fitness App)",
    img: [DietOne, DietTwo, DietThree, DietFour],
    desc: "Developed a crucial application for public transport passengers in Polish cities. Enabled users to effortlessly check timetables and purchase tickets through a user-friendly interface. Implemented real-time updates and notifications to keep passengers informed about schedule changes and service alerts, enhancing their overall commuting experience.",
    skills: ["Swift", "Java", "SQLite", "Espresso"],
  },
];
