
import { Smartphone } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const mobileAppDevelopmentService: Service = {
  id: 'mobile-app-development',
  title: 'Mobile App Development',
  description: 'Native and cross-platform mobile applications that engage users with intuitive experiences and powerful functionality.',
  icon: createServiceIcon(Smartphone),
  longDescription: 'Mobile apps provide direct access to your customers\' most personal device. Our mobile development team creates intuitive, high-performance applications that engage users, solve real problems, and represent your brand beautifully across all mobile platforms. We develop apps that are not only visually appealing but also technically robust with the latest technologies and frameworks.',
  features: [
    'iOS and Android development',
    'Cross-platform solutions',
    'Progressive Web Apps',
    'Mobile UI/UX design',
    'App Store optimization',
    'Mobile analytics implementation',
    'Offline functionality',
    'AR/VR integration',
    'Wearable device integration',
    'Payment gateway integration'
  ],
  benefits: [
    'Enhanced customer engagement',
    'New revenue channels',
    'Improved brand presence',
    'Personalized user experiences',
    'Offline functionality',
    'Competitive advantage',
    'Real-time analytics',
    'Improved customer retention',
    'Seamless multi-device experiences'
  ],
  technologies: [
    'React Native', 'Flutter', 'Swift',
    'Kotlin', 'SwiftUI', 'Jetpack Compose',
    'Firebase', 'Realm', 'SQLite',
    'Push Notifications', 'In-App Purchases',
    'ARKit/ARCore', 'Core ML/TensorFlow Lite',
    'GraphQL', 'Apple Watch/WearOS',
    'Capacitor', 'Expo', 'App Clips/Instant Apps'
  ],
  caseStudies: [
    {
      title: 'Retail Loyalty App',
      description: 'Developed mobile app with personalized recommendations increasing store visits by 40% and average purchase value by 25%.',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Field Service Application',
      description: 'Created mobile solution for field technicians reducing paperwork by 90% and increasing daily service capacity by 35%.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Health & Wellness Platform',
      description: 'Built comprehensive health tracking app with wearable integration that achieved 250,000 downloads and 68% retention rate.',
      image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2072&auto=format&fit=crop'
    }
  ]
};
