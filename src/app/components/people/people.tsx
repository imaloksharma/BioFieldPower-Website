import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Dr. Amandeep Singh',
      position: 'Agriculture Officer',
      company: 'Biofield Power',
      testimonial: 'Biofield Power is revolutionizing agriculture with their innovative solutions.'
    },
    {
      name: 'Rajan Kaur',
      position: 'Farmer',
      company: '',
      testimonial: 'Their biomass supply chain app is a game-changer for us.'
    },
    {
      name: 'John Doe',
      position: 'Industry Partner',
      company: '',
      testimonial: 'Excited to see the impact of their Agri-PV system.'
    },
    {
      name: 'Jane Smith',
      position: 'Angel Investor',
      company: '',
      testimonial: 'Supporting sustainable development goals with innovative tech.'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-8">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="max-w-xs bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaQuoteLeft className="text-4xl text-green-700 mb-4" />
              <p className="text-lg italic text-gray-600 mb-4">&quot;{review.testimonial}&quot;</p>
              <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
              {review.position && <p className="text-sm text-gray-500">{review.position}</p>}
              {review.company && <p className="text-sm text-gray-500">{review.company}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
