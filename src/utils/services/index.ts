
import { Service } from './types';
import { webDevelopmentService } from './webDevelopment';
import { uiUxDesignService } from './uiUxDesign';
import { digitalMarketingService } from './digitalMarketing';
import { analyticsInsightsService } from './analyticsInsights';
import { cloudSolutionsService } from './cloudSolutions';
import { ecommerceSolutionsService } from './ecommerceSolutions';
import { cybersecurityService } from './cybersecurity';
import { mobileAppDevelopmentService } from './mobileAppDevelopment';
import { customSoftwareDevelopmentService } from './customSoftwareDevelopment';
import { aiMlSolutionsService } from './aiMlSolutions';

// Combine all services into a single array
export const services: Service[] = [
  webDevelopmentService,
  uiUxDesignService,
  digitalMarketingService,
  analyticsInsightsService,
  cloudSolutionsService,
  ecommerceSolutionsService,
  cybersecurityService,
  mobileAppDevelopmentService,
  customSoftwareDevelopmentService,
  aiMlSolutionsService
];

// Utility functions
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getFeaturedServices = (count: number = 4): Service[] => {
  return services.slice(0, count);
};

// Export all individual services
export {
  webDevelopmentService,
  uiUxDesignService,
  digitalMarketingService,
  analyticsInsightsService,
  cloudSolutionsService,
  ecommerceSolutionsService,
  cybersecurityService,
  mobileAppDevelopmentService,
  customSoftwareDevelopmentService,
  aiMlSolutionsService
};

// Re-export the types
export * from './types';
