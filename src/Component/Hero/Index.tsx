export default function HeroSection() {
    return (
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/solar-panel.jpg")' }}
      >
        <div className="absolute inset-0 bg-blue-300 bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-bold text-green-900">
            Empowering Renewable Energy
          </h1>
          <p className="mt-4 text-xl text-green-700">
            "Powering the Future Sustainably with Biomass Solutions"
          </p>
          <div className="mt-8 bg-white rounded-full p-4 shadow-lg">
            <p className="text-green-600 text-xl font-medium">80% Energy Saved</p>
          </div>
        </div>
      </section>
    );
  }
  