export interface ApiResponse {
  message: string;
  success: boolean;
}

export interface NewsletterResponse extends ApiResponse {
  data?: {
    email: string;
  };
}