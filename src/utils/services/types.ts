
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
    image?: string;
  }[];
  technologies?: string[];
}

export const createServiceIcon = (Icon: React.ComponentType<any>): ReactNode => {
  return <Icon size={24} />;
};
