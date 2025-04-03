import { Lock, Users, Leaf } from "lucide-react";

const Impact = () => {
  const impactData = [
    { value: "10,000+", label: "Tons Biomass Processed", icon: <Lock size={20} /> },
    { value: "300+", label: "Farmers Empowered", icon: <Users size={20} /> },
    { value: "50,000", label: "Tons CO2 Offset Potential", icon: <Lock size={20} /> },
    { value: "1MW", label: "Renewable Energy in Pipeline", icon: <Leaf size={20} /> },
  ];

  return (
    <section className="relative text-center py-4 md:py-8 bg-white">
      {/* Content Container */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold text-green-700 mb-12 md:mb-24">
          Impact Metrics
        </h2>

        {/* Grid Layout */}
        <div className="relative grid grid-cols-2 gap-10 md:gap-20 max-w-5xl mx-auto px-4 md:px-0 justify-items-center">

          {/* Vertical & Horizontal Gradient Lines */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-3/4 h-1 md:h-1 bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 h-full md:h-full bg-gradient-to-t from-transparent via-green-800 to-transparent"></div>
          </div>

          {impactData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl md:text-5xl font-semibold text-green-700">{item.value}</h3>
              <div className="flex items-center space-x-2 text-gray-700 text-xs md:text-xl">
                {item.icon} <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* World Map Background */}
      <div className="flex justify-center -mt-20 md:-mt-40">
        <div
          className="h-40 w-full opacity-20 md:h-80 md:max-w-4xl md:opacity-30 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/worldmap.png')" }}
        ></div>
      </div>
    </section>
  );
};

export default Impact;
