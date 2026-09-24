export type Partner = {
  id: string;
  name: string;
  organization: string | null;
  category: string;
  logoUrl: string | null;
  logoAlt: string | null;
  description: string;
};

export type InquiryInput = {
  name: string;
  organization?: string;
  email: string;
  message: string;
};
