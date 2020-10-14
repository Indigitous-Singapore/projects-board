export interface InterfaceStateAuthenticationLogin {
  email: string|null;
  password: string|null;
}

export interface InterfaceLoginResponse {
  jwt: string|null;
  user: InterfaceUser;
}

export interface InterfaceLoginError {
  statusCode: number;
  error: string;
  data: InterfaceLoginErrorData[]
}
export interface InterfaceLoginErrorData {
  messages: InterfaceLoginErrorDataMessage[]
}
export interface InterfaceLoginErrorDataMessage {
  message: string;
  id: string;
}

export interface InterfaceStateSignup {
  firstName: string|null;
  lastName: string|null;
  email: string|null;
  password: string|null;
  passwordconfirm: string|null;
}

/**
 * Projects
 */
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

export interface InterfaceProjectPosition {
  title: string;
  commitment: string;
  skills?: string[];
  description: string;
  active: boolean;
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

  //  Open Positions
  openPositions: InterfaceProjectPosition[];

  //  Filters
  // fields?: InterfaceProjectField[] | null;
  // causes?: InterfaceProjectCause[] | null;
  fields?: string[] | null;
  causes?: string | null;
}

/**
 * User
 */
export interface InterfaceUser {
  id: number|null;
  jwt?: string|null;
  firstName: string|null;
  lastName: string|null;
  email: string|null;
  displayPictureUrl?: string|null;
}