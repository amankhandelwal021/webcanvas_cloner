import React from 'react';

const FooterInfo = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo and Tagline */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <a href="#home" className="text-4xl font-display font-bold tracking-tight mb-6 inline-block">
                design<span className="text-blue-500">owe</span>
              </a>
              <span className="bg-blue-500 h-20 w-0.5 mx-5"></span>
              <div>
                <h3 className="text-xl font-bold">Building Digital</h3>
                <p className="text-lg">Excellence</p>
              </div>
            </div>
          </div>

          {/* Development Center */}
          <div className="col-span-1">
            <div className="flex items-center mb-3">
              {/* <span className="inline-block w-6 h-4 bg-orange-500 mr-2 rounded-sm"></span> */}
              <h3 className="text-lg font-bold uppercase">Development Center</h3>
            </div>
            <address className="not-italic mb-2">
              44/7, U-Block, DLF Phase 3, Cyber City, Gurgaon, Haryana, India
            </address>
            <a href="tel:+919261638242" className="text-white hover:underline block">+91 9261638242</a>
          </div>

          {/* USA Branch Office */}
          <div className="col-span-1">
            <div className="flex items-center mb-3">
              {/* <span className="inline-block w-6 h-4 bg-blue-700 mr-2 rounded-sm"></span> */}
              <h3 className="text-lg font-bold uppercase">USA Branch Office</h3>
            </div>
            <address className="not-italic mb-2">
              1111 Lexington Ave,<br />
              Flower Mound, Texas 75028
            </address>
            <a href="tel:+19402795920" className="text-white hover:underline block">+1 (940) 279 9520</a>
          </div>

          {/* Netherlands Office */}
          <div className="col-span-1">
            <div className="flex items-center mb-3">
              {/* <span className="inline-block w-6 h-4 bg-blue-500 mr-2 rounded-sm"></span> */}
              <h3 className="text-lg font-bold uppercase">Netherlands Office</h3>
            </div>
            <address className="not-italic mb-2">
              Rooversbroekdijk 27,<br />
              2161 LM, Lisse, The Netherlands
            </address>
            <a href="tel:+31648481696" className="text-white hover:underline block">+31-648481696</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterInfo; 