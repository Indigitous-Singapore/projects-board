export interface InterfaceStateProjects {
  projects: InterfaceProject[]
}

export interface InterfaceProjectCause {
  id: number;
  title: string;
}

export interface InterfaceProjectField {
  id: number;
  title: string;
}

export interface InterfaceProjectUser {
  id: number;
  firstName: string;
  lastName: string;
  displayPictureUrl: string;
}

export interface InterfaceProject {
  id: number;
  title: string;
  caption: string;  //  Short description
  displayPictureUrl: string;

  //  Project
  aboutOurStory?: string | null;  //  HTML/markdown
  aboutWhatWeDo?: string | null;
  aboutCommitment?: string | null;

  //  Faqs
  faqs?: string | null;

  //  Metadata
  user: InterfaceProjectUser;

  //  Filters
  fields?: InterfaceProjectField[] | null;
  causes?: InterfaceProjectCause[] | null;
}