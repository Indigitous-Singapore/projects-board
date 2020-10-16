/**
 * Generic interfaces
 */
export interface InterfaceImageSize {
  'ext': string;
  'url': string;
  'hash': string;
  'mime': string
  'name': string;
  'path': string|null;
  'size': number
  'width': number
  'height': number
}
export interface InterfaceImageSizes {
  [key: string]: InterfaceImageSize;
}
export interface InterfaceImage {
  id?: number;
  name?: string;
  alternativeText?: string|null;
  caption?: string|null;
  width?: number;
  height?: number;
  formats?: InterfaceImageSizes,
  'hash'?: string;
  'ext'?: string;
  'mime'?: string;
  'size'?: number;
  'url': string;
  'previewUrl'?: string|null;
  'provider'?: string;
  'provider_metadata'?: null;
  'created_at'?: string;
  'updated_at'?: string;
}

/**
 * Authentication
 */
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

export interface InterfaceProjectPosition {
  id: number;
  title: string;
  commitment: string;
  skills?: string;
  description: string;
  active: boolean;
}

export interface InterfaceProject {
  id: number;
  title: string;
  caption: string;  //  Short description
  displayPictureUrl: InterfaceImage;

  //  Project
  aboutOurStory?: string | null;  //  HTML/markdown
  aboutWhatWeDo?: string | null;
  aboutCommitment?: string | null;

  //  Faqs
  faqs?: string | null;

  //  Metadata
  user: InterfaceUser;

  //  Open Positions
  openPositions: InterfaceProjectPosition[];

  //  Filters
  fields?: string | null;
  causes?: string | null;

  //  Meta
  created_at: string;
  updated_at: string;
}

/**
 * User
 */
export interface InterfaceUser {
  id: number|null;
  username: string|null;
  jwt?: string|null;
  firstName: string|null;
  lastName: string|null;
  email: string|null;
  displayPictureUrl?: InterfaceImage|string|null;
  provider?: string;
  confirmed?: boolean|null;
  blocked?: boolean|null;
  role?: number|null;
  created_at: string|null;
  updated_at: string|null;
}