export type Testimonial = {
  quote: string;
  authorLabel: string;
  source?: string;
  isApproved: boolean;
};

export const testimonials: Testimonial[] = [];
