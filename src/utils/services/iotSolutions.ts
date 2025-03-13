
import { Wifi } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const iotSolutionsService: Service = {
  id: 'iot-solutions',
  title: 'IoT Solutions',
  description: 'Connect physical devices to digital systems for real-time monitoring, data collection, and automation of complex processes.',
  icon: createServiceIcon(Wifi),
  longDescription: 'Our Internet of Things (IoT) solutions connect your physical infrastructure with digital intelligence, enabling smart monitoring, predictive maintenance, and data-driven decision making. We design and implement comprehensive IoT ecosystems that transform operations across industries.',
  features: [
    'IoT device integration',
    'Sensor network development',
    'Real-time monitoring systems',
    'Edge computing solutions',
    'IoT data analytics',
    'Cloud-based IoT platforms'
  ],
  benefits: [
    'Improved operational efficiency',
    'Real-time visibility into operations',
    'Predictive maintenance capabilities',
    'Reduced operational costs',
    'Data-driven decision making',
    'Enhanced automation capabilities'
  ],
  technologies: [
    'Arduino', 'Raspberry Pi', 'ESP32',
    'MQTT', 'AWS IoT', 'Azure IoT',
    'Node-RED', 'InfluxDB', 'Grafana',
    'TensorFlow Lite', 'Edge Impulse', 'Bluetooth LE'
  ],
  caseStudies: [
    {
      title: 'Smart Manufacturing System',
      description: 'Implemented factory-wide IoT monitoring system resulting in 28% reduction in downtime and 15% increase in production efficiency.',
      image: 'https://images.unsplash.com/photo-1563770660941-10b02864e553?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Agricultural Monitoring Network',
      description: 'Developed IoT solution for crop monitoring that reduced water usage by 30% and increased yield by 22% through precision agriculture.',
      image: 'https://images.unsplash.com/photo-1586514966881-e40f1520be5c?q=80&w=2071&auto=format&fit=crop'
    }
  ]
};
