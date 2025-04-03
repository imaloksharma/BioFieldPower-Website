export default function OngoingProjects() {
  return (
    <div className="bg-white text-green-700 min-h-screen flex flex-col items-center p-4 py-10 relative">
      {/* Responsive heading - smaller on mobile */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-10">Ongoing Project</h1>

      {/* Desktop View - SVG Visible Only on PC */}
      <div className="w-full max-w-4xl flex justify-right relative right-[-90px] py-48 hidden md:flex">
        <img
          src="/Group 90.svg" 
          className="w-full h-full object-contain"
          alt="All gears"
        />
        
        {/* Text Overlays */}
        <img 
          src="/agri-pv.jpg" 
          className="absolute w-[300px] h-[80px] left-[-120px] top-[250px]"
          alt="Text 1"
        />
        <img 
          src="/Pindgrid-Pilot.jpg" 
          className="absolute w-[250px] h-[90px] left-[200px] top-[90px]"
          alt="Text 2"
        />
        <img 
          src="/Biomass-to-innovation.jpg" 
          className="absolute w-[250px] h-[120px] left-[655px] top-[280px]"
          alt="Text 3"
        />

        {/* Straight Lines with Dots - Agri-PV Pilot (Left) */}
        <div className="absolute w-[60px] border-t-2 border-green-700 left-[20px] top-[380px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-600 rounded-full left-[80px] top-[376px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[10px] top-[376px]"></div>

        {/* Straight Lines with Dots - PindGrid Pilot (Top) */}
        <div className="absolute w-[50px] border-t-2 border-green-700 left-[240px] top-[210px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-600 rounded-full left-[235px] top-[206px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[285px] top-[206px]"></div>

        {/* Straight Lines with Dots - Biomass-to-Power Innovation (Right) */}
        <div className="absolute w-[50px] border-t-2 border-green-700 left-[650px] top-[420px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[640px] top-[416px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[690px] top-[416px]"></div>
      </div>

      {/* Mobile View - Hide Everything and Show Only SVG */}
      <div className="w-full flex justify-center md:hidden">
        <img
          src="/Group_90.svg" 
          className="w-[80%] h-auto"
          alt="Mobile Gears"
        />
      </div>
    </div>
  );
}
