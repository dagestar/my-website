export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  country: string;
  businessType: string;
  productNeeds: string;
  links1688?: string;
  createdAt: string;
  ip?: string | null;
  source?: string;
}

