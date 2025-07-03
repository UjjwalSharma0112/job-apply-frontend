export interface ResumeFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber_prefix: string;
  phonenumber_number: string;
  location: string;
  preferredDesignation: string;
  resume: File | null;
}

export interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: {
    prefix: string;
    number: string;
  };
  location: string;
  preferredDesignation: string;
}

export interface SubmissionResponse {
  accessToken: string;
  message?: string;
}