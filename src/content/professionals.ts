export type Professional = {
  name: string;
  role: string;
  registration: string;
  bio: string;
  isPlaceholder: boolean;
  image?: {
    src: string;
    alt: string;
  };
};

export const professionals: Professional[] = [];
