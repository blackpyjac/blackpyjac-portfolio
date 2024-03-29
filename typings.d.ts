interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }
  
  interface Image {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }
  
  interface File {
    _type: "file";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }
  
  export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    backgroundInformation: string;
    role: string;
    locale: Locale;
  }
  export interface PersonalInfo extends SanityBody {
    _type: "personalInfo";
    address: string;
    email: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    iconPage: File;
    iconPageUrl: string;
  }
  export interface Locale extends SanityBody {
    _type: "locale";
    name: string;
    code: string;
  }
  export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
  }
  
  export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
  }
  
  export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
  }
  