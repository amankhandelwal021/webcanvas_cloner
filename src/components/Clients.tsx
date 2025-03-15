import React from 'react';

const Clients = () => {
  const clients = [
    { id: 1, name: "Paytm", logo: "/clients/client1.png" },
    { id: 2, name: "Nestle", logo: "/clients/client2.png" },
    { id: 3, name: "Reliance", logo: "/clients/client3.png" },
    { id: 4, name: "HSBC", logo: "/clients/client4.png" },
    { id: 5, name: "KPMG", logo: "/clients/client5.png" },
    { id: 6, name: "Metaval", logo: "/clients/client6.png" },
    { id: 7, name: "Volkswagen", logo: "/clients/client7.png" },
    { id: 8, name: "UnCruise", logo: "/clients/client8.png" },
    { id: 9, name: "Luminous", logo: "/clients/client9.png" },
    { id: 10, name: "Mental Healthy", logo: "/clients/client10.png" },
    { id: 11, name: "Packaged", logo: "/clients/client11.png" },
    { id: 12, name: "IBM", logo: "/clients/client12.png" },
  ];

  const technologies = [
    {
      id: 1,
      title: "Internet of Things",
      description: "Unfold the incredible abilities of the internet-of-things to transfer data without human intervention. A well-architected IoT ecosystem transforms the business."
    },
    {
      id: 2,
      title: "Augmented Reality",
      description: "Mingle technology and real-world with supreme Augmented reality solutions to increase the emotional interaction and appeal of your brand."
    },
    {
      id: 3,
      title: "Data Intelligence",
      description: "Analyze your business roadmap and possible outcomes more sophisticatedly using the power of data."
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      description: "Delivering AI-driven solutions to ensure smart interaction with your consumers through digital assets like chatbots, voice interfaces etc."
    },
    {
      id: 5,
      title: "Virtual Reality",
      description: "Create your own world of possibilities using our advanced VR solutions focusing on varying enterprise needs."
    },
    {
      id: 6,
      title: "Interactive Tech",
      description: "Step into a future where touch and holograms redefine interaction. Engage in unforgettable experiences that inspire."
    }
  ];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Innovating for Leading Brands
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We have worked with some of the leading brands in the world.
          </p>
        </div>


        {/* Client logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-28 max-w-full"
              />
            </div>
          ))}
        </div>

        {/* Technology capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {technologies.map((tech) => (
            <div key={tech.id} className="relative">
              <div className="h-1 w-full bg-gradient-to-r from-blue-800 to-red-500 absolute top-0 left-0"></div>
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 