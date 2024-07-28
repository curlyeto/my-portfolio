/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ertugrul Sahin",
  description:
    "As a dedicated professional, I am committed to developing comprehensive solutions that build sustainable and scalable social and technical systems, aiming to deliver significant impact.",
  og: {
    title: "Ertugrul Sahin Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ertugrul Sahin",
  logo_name: "AshutoshHathidara",
  nickname: "",
  subTitle:
    "As a dedicated professional, I am committed to developing comprehensive solutions that build sustainable and scalable social and technical systems, aiming to deliver significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/curlyeto?tab=repositories",
  githubProfile: "https://github.com/curlyeto",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/curlyeto",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ertugrul-sahin-502911155/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ertugrul.sahin.dev@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/ertugrulsahin___?igsh=ODYxb2JrNDM2OTVh&utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Application Development",
      fileName: "MobileAppDevImg",
      iconName: "mobileAppDevelopment.svg",
      skills: [
        "⚡ Developing multi-platform mobile applications using Flutter, enhancing UX/UI across Android and iOS devices.",
        "⚡ Integrating Firebase for push notifications and detailed analytics, enhancing user engagement and app performance monitoring.",
        "⚡ Implementing Google Maps in mobile apps for advanced geolocation features and custom interactive maps.",
        "⚡ Designing and consuming RESTful APIs to connect mobile applications with cloud services and external data sources.",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos:android-icon",
          style: {
            color: "#34A853",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "logos:ios",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "Google Maps",
          fontAwesomeClassname: "logos:google-maps",
        },
        {
          skillName: "RESTful API",
          fontAwesomeClassname: "vscode-icons:file-type-rest",
        },
        // {
        //   skillName:"Apple Pay",
        //   fontAwesomeClassname:"fontisto:apple-pay",
        //   style:{
        //     background:'#FFFFFF',
        //     color:'#000000'
        //   }
        // },
        // {
        //   skillName:"Google Pay",
        //   fontAwesomeClassname:"logos:google-pay"
        // },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos:dart",
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
        },
      ],
    },
    {
      title: "Web Application Development",
      fileName: "WebAppDevImg",
      iconName: "mobileAppDevelopmentNew.svg",
      skills: [
        "⚡ Building user-friendly websites that look great and function seamlessly on both computers and mobile devices with tools like Laravel, Django, Angular, and Vue.",
        "⚡ Designing web pages that adjust smoothly to any screen, ensuring optimal viewing experiences.",
        "⚡ Developing core systems for websites with Laravel and Django to maintain speed, security, and user capacity.",
        "⚡ Managing data effectively using MySQL for quick and easy information access.",
      ],
      softwareSkills: [
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Cambrian College of Applied Arts & Technology",
      subtitle: "Grad Certificate: Mobile App Development",
      logo_path: "cambrian.png",
      alt_name: "Cambrian College",
      duration: "2023 - 2023",
      descriptions: [
        "⚡ Earned a Grad Certificate in Mobile App Development, focusing on Android (Kotlin), iOS (Swift), and web applications using C# .NET frameworks.",
        "⚡ Studied key subjects like AI Coding Techniques, Software Project Management, Backend and Frontend Technologies.",
        "⚡ Gained expertise in MultiPlatform Development, Cloud Services, Data Management, and User Interface Design.",
        "⚡ Maintained a high academic standard with a GPA of 3.6/4.",
      ],
      website_link: "https://cambriancollege.ca/",
    },
    {
      title: "Toronto School of Management",
      subtitle: "Certificate: Business Essential",
      logo_path: "tsom.png",
      alt_name: "Toronto School of Management",
      duration: "2022 - 2022",
      descriptions: [
        "⚡ Earned a Certificate in Business Essentials, focusing on enhancing business communication skills, financial management, organizational behavior, and marketing principles.",
        "⚡ Studied key subjects like Business Communications to improve interpersonal and presentation skills, and Managing Financial Resources for effective financial decision-making.",
      ],
      website_link: "https://www.torontosom.ca/",
    },
    {
      title: "Beykent University",
      subtitle: "Bachelor’s Degree: Computer Engineering",
      logo_path: "beykent.png",
      alt_name: "Beykent University",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ Graduated with a Bachelor’s in Computer Engineering, covering core subjects like Advanced Database Applications, Software Engineering, and Computer Networks.",
        "⚡ Delved into specialized topics such as Cyber Security, Big Data, and Mobile App Safety, preparing for advanced technological roles.",
        "⚡ Developed strong analytical and practical skills through courses in System Analysis, Numerical Analysis, and Logic Circuits.",
        "⚡ Applied theoretical knowledge in a practical setting during an internship focused on mobile application development (Android).",
      ],
      website_link: "https://www.beykent.edu.tr/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced in mobile and web application development, with a knack for integrating IoT devices. My work extends from dynamic startups to established firms.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Centre For Smart Mining (Cambrian College)",
          company_url: "https://research.cambriancollege.ca/",
          logo_path: "cambrian.png",
          duration: "March 2023 - Present",
          location: "Sudbury, ON, CANADA",
          description:
            "I spearhead software development initiatives across Android, iOS, web, and IoT platforms. My role includes leading coding projects from conception through deployment, modernizing codebases, performing extensive field testing, and ensuring optimal functionality and user engagement across all platforms.",
          color: "#000000",
        },
        {
          title: "Mobile Developer",
          company: "Coflow Enterprise Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "coflow.jpg",
          duration: "June 2021 - Jan 2022",
          location: "Istanbul, Turkey ",
          description:
            "I integrated APIs from various third-party providers into mobile applications, significantly enhancing functionality and user experience. My responsibilities included debugging and improving existing app components, developing cross-platform solutions for Android and iOS, and collaborating with multidisciplinary teams to ensure cohesive, high-quality deliverables. I actively contributed to the enhancement of development processes and workflows, sharing insights and best practices to foster continuous improvement.",
          color: "#0879bf",
        },
        {
          title: "Mobile Developer ",
          company: "Cobim GmbH",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "company.png",
          duration: "Sep 2020 - June 2021",
          location: "Mannheim, Germany",
          description:
            "I spearheaded the development of a mobile ordering application tailored for store clients, enhancing their ability to efficiently manage product orders. My role encompassed using diverse technologies to drive software improvements, collaborating closely with the QA team to ensure optimal app functionality, and overseeing the software development lifecycle. Additionally, I developed an Admin Panel and RESTful API, significantly improving backend management and communication systems.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Mobile Developer Intern",
          company: "Mobillium",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "mobillium.svg",
          duration: "June 2019 - Aug 2019",
          location: "Istanbul, Turkey ",
          description:
            " I honed my skills in Kotlin and Android development, integrating Google Maps and Firebase to enhance app functionalities. This role deepened my practical understanding of mobile app technologies",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Speaker of Getting started with Flutter event",
          company: "GDG (Google Developer Group) Cambrian College ",
          company_url:
            "https://gdg.community.dev/events/details/google-gdg-sudbury-presents-getting-started-with-flutter/",
          logo_path: "google_logo.png",
          duration: "March 2023 - March 2023",
          location: "Sudbury, ON, CANADA",
          description:
            "Demonstrating Flutter animations and discussing state management libraries to provide a foundational understanding of key Flutter techniques.",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects highlight expertise in mobile and web development, focusing on enhancing user experience and security. I specialize in building robust applications that integrate sophisticated technologies to improve functionality and user engagement.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "GitHub Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "recipe-web-application",
      name: "Recipe Web Application",
      createdAt: "2023-08-18T00:00:00Z",
      description: "Reicipe Web Application",
      url: "https://github.com/curlyeto/RecipeWebApplication",
    },
    {
      id: "cambrian-course-select-app",
      name: "Cambrian Course Select App",
      createdAt: "2023-08-10T00:00:00Z",
      description:
        "Students can select their course and remove course build with MAUI framework",
      url: "https://github.com/curlyeto/AppliedActivity5",
    },
    {
      id: "space-news",
      name: "Space News",
      createdAt: "2023-06-18T00:00:00Z",
      description: "Flutter mobile application Laravel backend application",
      url: "https://github.com/curlyeto/cloud-computing-group-project",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ertugrul.jpg",
    description:
      "I am available across various social media platforms and strive to respond to all messages within 24 hours. Whether you need assistance with mobile and web applications or custom scripts for data extraction and automation, I'm here to help. Connect with me today to discuss your project!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Greater Sudbury, ON, Canada",
    locality: "Greater Sudbury",
    country: "Canada",
    region: "ON",
    postalCode: "P3A 2T8",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/xWMWUHycjTDyQ3Zf6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
