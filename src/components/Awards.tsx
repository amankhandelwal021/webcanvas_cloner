import React from 'react';

// Assuming you have placed the images in the public directory
const Awards = () => {
  const awards = [
    {
      id: 1,
      icon: "/awards/award1.png", // Update with the correct path
      title: "Awarded as the most promising mobile apps company of the Year",
      description: "We have been recognised as a market leader globally, post a rigorous evaluation of factors presence & client experience."
    },
    {
      id: 2,
      icon: "/awards/award2.png", // Update with the correct path
      title: "ISO 9001:2015 certified by the International Organisation for Standardisation",
      description: "We are ISO certified for high performance business excellence, significantly low costs and optimized business operations."
    },
    {
      id: 3,
      icon: "/awards/award3.png", // Update with the correct path
      title: "Certified Mobile App Development Company",
      description: "App Futura has verified and listed as a Certified Mobile App development agency serving global clients since 2014."
    },
    {
      id: 4,
      icon: "/awards/award4.png", // Update with the correct path
      title: "Categorised under the Top Web Development agencies by Selected Firms",
      description: "Selected Firms have featured us in the Top Web Development companies along with an exclusive CEO Interview of our company."
    },
    {
      id: 5,
      icon: "/awards/award5.png", // Update with the correct path
      title: "Categorised under the Top Web & Mobile App development agencies Globally",
      description: "We have been listed under the global leads of Web & Mobile app development by Top Developers considering our delivery standards."
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Awards
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Awards & Recognition
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We are proud to have received numerous awards and recognitions for our work in the software development industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                  <img src={award.icon} alt={award.title} className="max-w-full max-h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 