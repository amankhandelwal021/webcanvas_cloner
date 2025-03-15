import { Project } from './types';
import { webProjects } from './webProjects';
import { mobileProjects } from './mobileProjects';
import { brandingProjects } from './brandingProjects';
import { aiProjects } from './aiProjects';

// Combine all projects from different categories
const allProjects: Project[] = [
  ...webProjects,
  ...mobileProjects,
  ...brandingProjects,
  ...aiProjects
];

/**
 * Get all projects or filter by category
 * @param category Optional category to filter projects
 * @returns Array of projects, filtered by category if specified
 */
export const getProjects = (category?: string): Project[] => {
  if (!category) return allProjects;
  return allProjects.filter(project => project.category === category);
};

/**
 * Get a specific project by its slug
 * @param slug The project slug to find
 * @returns The project object or undefined if not found
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};

/**
 * Get a specific project by its ID
 * @param id The project ID to find
 * @returns The project object or undefined if not found
 */
export const getProjectById = (id: number): Project | undefined => {
  return allProjects.find(project => project.id === id);
}; 