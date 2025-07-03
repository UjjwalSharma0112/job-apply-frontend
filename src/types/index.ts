export interface ResumeFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber_prefix: number;
  phonenumber_number: number;
  location: string;
  preferredDesignation: string;
  resume: File | null;
}

export interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: {
    prefix: number;
    number: number;
  };
  location: string;
  preferredDesignation: string;
}

export interface SubmissionResponse {
  accessToken: string;
  message?: string;
}