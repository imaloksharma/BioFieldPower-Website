import React from 'react';

const blogsData = [
  {
    title: 'Agri-PV Systems',
    description: 'The Future of Sustainable Farming and Renewable Energy',
    image: '/Img/Agri-PV.png',
    link: '/blogs/agri-pv-systems',
  },
  {
    title: 'Government Policies',
    description: 'Supporting Agri-PV Systems in India.',
    image: '/Img/gov.png',
    link: '/blogs/government-policies',
  },
  {
    title: 'Lessons from the Field',
    description: 'A Case Study of Agri-PV Systems in Punjab',
    image: '/Img/Bio.png',
    link: '/blogs/lessons-from-field',
  },
  {
    title: 'The Benefits of Biomass',
    description: 'A Sustainable Energy Source',
    image: '/Img/logo.png',
    link: '/blogs/benefits-of-biomass',
  },
];

const Blogs = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-green-800 text-left px-8">Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mt-6">
        {blogsData.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="inline-block bg-green-600 text-white text-sm font-medium py-2 px-6 rounded-md hover:bg-green-700 transition-transform duration-300 transform group-hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
