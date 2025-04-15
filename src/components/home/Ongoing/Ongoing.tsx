export default function OngoingProjects() {
  return (
    <div className="bg-white text-green-700 flex flex-col items-center px-0 pt-0 pb-0 md:px-4 md:py-3 relative">
      {/* Heading visible only on desktop */}
      <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-1 hidden md:block">
        Ongoing Project
      </h1>
      
      {/* Desktop View - SVG Visible Only on PC */}
      <div className="w-full max-w-4xl flex justify-right relative right-[-90px] py-48 hidden md:flex">
        {/* Base SVG with gears */}
        <img
          src="/Group 90.svg" 
          className="w-full h-full object-contain"
          alt="All gears"
        />
        
        {/* Add rings as SVG circles with appropriate positioning */}
        <svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
          {/* Dark green ring (for gear 01) - Larger gear on the left */}
          <circle cx="164" cy="510" r="80" fill="none" stroke="#0A5D2C" strokeWidth="8" />
          
          {/* Medium green ring (for gear 02) - Medium gear at the top */}
          <circle cx="356" cy="310" r="60" fill="none" stroke="#1E9D33" strokeWidth="8" />
          
          {/* Light green ring (for gear 03) - Small light green gear */}
          <circle cx="545" cy="403" r="40" fill="none" stroke="#5DD56A" strokeWidth="6" />
          
          {/* Gold/yellow ring (for small gear) - Small gold gear at bottom */}
          <circle cx="426" cy="552" r="46" fill="none" stroke="#D1A215" strokeWidth="6" />
        </svg>
        
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

        {/* Straight Lines with Dots */}
        <div className="absolute w-[60px] border-t-2 border-green-700 left-[20px] top-[380px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-600 rounded-full left-[80px] top-[376px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[10px] top-[376px]"></div>

        <div className="absolute w-[50px] border-t-2 border-green-700 left-[240px] top-[210px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-600 rounded-full left-[235px] top-[206px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[285px] top-[206px]"></div>

        <div className="absolute w-[50px] border-t-2 border-green-700 left-[650px] top-[420px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[640px] top-[416px]"></div>
        <div className="absolute w-[10px] h-[10px] bg-green-700 rounded-full left-[690px] top-[416px]"></div>
      </div>

      {/* Mobile View - Just show ongoing_mobile.png */}
      <div className="w-full flex justify-end overflow-hidden md:hidden">
        <img
          src="/ongoing_mobile.jpg" 
          className="w-[100%] h-auto object-contain"
          alt="Ongoing Projects Mobile"
        />
      </div>
    </div>
  );
}