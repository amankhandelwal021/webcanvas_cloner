
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
  caseStudies?: {
    title: string;
    description: string;
    slug?: string
    image?: string;
  }[];
  technologies?: string[];
}

export const createServiceIcon = (Icon: React.ComponentType<any>): ReactNode => {
  return Icon ? <Icon size={24} /> : null;
};
