
import { supabase } from '../utils/supabase';
import { ServiceType, Project, CaseStudy, TeamMember, Testimonial } from '../types';

// Fetch all services
export async function getServices(): Promise<ServiceType[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*');
  
  if (error) {
    console.error('Error fetching services:', error);
    return [];
  }
  
  return data || [];
}

// Fetch a single service by ID
export async function getServiceById(id: string): Promise<ServiceType | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching service with id ${id}:`, error);
    return null;
  }
  
  return data;
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*');
  
  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
  
  return data || [];
}

// Fetch a single project by ID
export async function getProjectById(id: number): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching project with id ${id}:`, error);
    return null;
  }
  
  return data;
}

// Fetch projects by category
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category);
  
  if (error) {
    console.error(`Error fetching projects with category ${category}:`, error);
    return [];
  }
  
  return data || [];
}

// Fetch all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*');
  
  if (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
  
  return data || [];
}

// Fetch a single case study by ID
export async function getCaseStudyById(id: number): Promise<CaseStudy | null> {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching case study with id ${id}:`, error);
    return null;
  }
  
  return data;
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from('team_members')
    .select('*');
  
  if (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
  
  return data || [];
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*');
  
  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
  
  return data || [];
}
