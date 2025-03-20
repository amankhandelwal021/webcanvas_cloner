import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '@/utils/projects';

const Projects = () => {
  const projects = getFeaturedProjects(5);


  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-blue-500 font-medium mb-2">We Help to Enhance your Business</p>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Repository of Our Work</h2>
          </div>

          <div className="flex justify-end">
            <Link
              to="/projects"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              View More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''} rounded-lg overflow-hidden shadow-lg`}
            >
              <div className={`${project.bgColor} p-6 md:p-8 relative`}>
                {project.fullWidth ? (
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="mb-6 line-clamp-6 md:line-clamp-none">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies?.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies && project.technologies.length > 3 && (
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center hover:underline underline-offset-8"
                      >
                        View Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4 line-clamp-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies && project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <Link
                      to={project.slug}
                      className="inline-flex items-center hover:underline underline-offset-8 mb-6"
                    >
                      View Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg mt-4"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
