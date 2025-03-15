import React from 'react';

const Innovations = () => {
  return (
    <section id="innovations" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-blue-500 font-medium mb-2">Our Innovations</h3>
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Artificial Intelligence<br />
            and Machine Learning:<br />
            Transforming Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column - Predictive Analytics */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[100%]">
              <img
                src="https://img.freepik.com/premium-photo/woman-hands-laptop-with-hologram-analytics-chart-graph-marketing-statistics-office-female-analysis-checking-3d-digital-data-corporate-company-value-sales-computer_590464-131140.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430"
                alt="Predictive Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Predictive Analytics
              </div>
            </div>
          </div>

          {/* Right column - split into 3 sections */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-8 lg:-mt-44 mt-6">
            {/* Top section - Computer Vision */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[80%]">
              <img

                src='/innovation.png'
                alt="Computer Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Computer Vision
              </div>
            </div>

            {/* Bottom section - split into 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:-mt-24 mt-6">
              {/* Natural Language Processing */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169861.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430"
                  alt="Natural Language Processing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  NLP
                </div>
              </div>

              {/* Reinforcement Learning */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/premium-photo/technology-augmented-reality-big-data-people-concept-happy-young-man-with-virtual-headset-3d-glasses-looking-screens-projection_380164-167149.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430"
                  alt="Reinforcement Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Augmented Reality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations; 