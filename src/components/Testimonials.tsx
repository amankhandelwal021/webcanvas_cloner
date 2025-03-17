import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Code Horizon has been an exceptional partner in creating Pharmatop, delivering a secure, intuitive platform that streamlines enrolling, paying, and engaging with medical courses. Their commitment to quality has been invaluable in providing resources for healthcare professionals.",
      name: "Vesna Marijanović Jukić",
      position: "CEO at PharmaTop",
      image: "https://img.freepik.com/free-photo/brunette-businesswoman-showing-her-tablet_23-2148142790.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430&semt=ais_hybrid" // Update with the correct path
    },
    {
      id: 2,
      text: "Code Horizon brought our ArcX vision to life by integrating Smart Ring technology and creating AI-powered playlists tailored to users' moods and activities. Their innovation exceeded expectations, delivering an app that empowers fitness goals. We're thrilled with the collaboration!",
      name: "Paul Blair",
      position: "CEO at ArcX",
      image: "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430&semt=ais_hybrid" // Update with the correct path
    },
    {
      id: 3,
      text: "Working with Code Horizon on Hollywood Hair was fantastic. They understood our vision for AI-driven beauty and executed it flawlessly. From ideation to launch, their expertise ensured a smooth, personalized user experience, making Hollywood Hair a standout in the beauty industry!",
      name: "Klaudia Duszyńska",
      position: "CEO at Hollywood Hair",
      image: "https://img.freepik.com/free-photo/medium-shaot-woman-standing-office-with-her-hands-folded_1098-20025.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430&semt=ais_hybrid " // Update with the correct path
    },
    {
      id: 4,
      text: "Code Horizon's expertise in creating a seamless, user-friendly platform for our AI-powered music app was outstanding. Their dedication to quality and user experience made the project a success!",
      name: "Linda Ball",
      position: "CEO at Upcycled Medical",
      image: "https://img.freepik.com/free-photo/high-angle-beautiful-business-female_23-2148411859.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430&semt=ais_hybrid" // Update with the correct path
    },
    {
      id: 5,
      text: "Code Horizon's expertise in creating a seamless, user-friendly platform for our AI-powered music app was outstanding. Their dedication to quality and user experience made the project a success!",
      name: "Shashidhar Thora",
      position: "CEO at Coredata Inc",
      image: "https://img.freepik.com/premium-photo/handsome-businessman-formal-suit-wearing-glasses_786444-411.jpg?uid=R47973407&ga=GA1.1.1009564255.1740590430&semt=ais_hybrid" // Update with the correct path
    }

  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Don't take our word for it. Trust our customers.
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Unveiling the Transformative Experiences of Our Valued Customers.
          </p>
        </div>

        <div className="flex flex-row gap-8 w-full overflow-scroll container-snap">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 w-[350px]">{testimonial.text}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 