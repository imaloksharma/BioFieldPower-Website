export default function OngoingProjects() {
  return (
    <div className="bg-white text-green-700 flex flex-col items-center px-4 pt-5 pb-8 md:py-3 relative">
      {/* Responsive heading - smaller on mobile */}
      <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-1">
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

      {/* Mobile View - Optimized */}
      <div className="w-full flex justify-center md:hidden mt-2 relative">
        <img
          src="/Group_90.svg" 
          className="w-[70%] h-auto"
          alt="Mobile Gears"
        />
        
        {/* Add rings for mobile view */}
        <svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
          {/* Adjust these positions based on your mobile layout */}
          <circle cx="117" cy="99" r="22" fill="none" stroke="#0A5D2C" strokeWidth="3" />
          <circle cx="164" cy="52" r="16" fill="none" stroke="#1E9D33" strokeWidth="3" />
          <circle cx="210" cy="74" r="11" fill="none" stroke="#5DD56A" strokeWidth="2" />
          <circle cx="181" cy="110" r="12" fill="none" stroke="#D1A215" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
