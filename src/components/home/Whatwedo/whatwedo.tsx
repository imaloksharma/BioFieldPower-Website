export default function OurSolutions() {
  return (
    <section className="bg-green-50 py-12 relative">
      <div className="container mx-auto px-4">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-600">Our Solutions</h1>
        </div>

        {/* Solutions Container */}
        <div className="flex flex-col md:flex-row justify-center items-center py-4 gap-16 mb-16">
          {/* Biomass Supply Chain */}
          <div className="text-center">
            <div className="flex justify-center mb-4 mr-12">
              <img 
                src="/Group 97.svg" 
                alt="Biomass Supply Chain Icon" 
                className="w-full h-45"
              />
            </div>
          </div>
        </div>

        {/* Progress Bar with 2 dots */}
        <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto mt-6 mb-16 max-md:mb-8">
          <div className="h-1 bg-green-600 w-[700px] rounded-full absolute left-[20px] top-[-10px] transform -translate-y-1/2 max-md:w-[190px] max-md:left-[100px]"></div>
          <div className="relative flex w-[200px] mx-auto">
            <div className="absolute left-[-270px] bottom-[3px] w-4 h-4 bg-green-600 rounded-full shadow-lg max-md:left-0"></div>
            <div className="absolute left-[430px] w-4 h-4 bottom-[3px] bg-green-600 rounded-full shadow-lg max-md:left-auto max-md:right-0"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Illustrations */}
      <div className="absolute bottom-0 right-0 max-md:left-0 max-md:overflow-x-hidden">
        <div className="flex items-end max-md:justify-between">
          <img src="/Wind Mill.svg" alt="Windmill Illustration" className="h-20 relative left-[190px] max-md:h-12 max-md:left-[160px]" />
          
          <img src="/Bale.svg" alt="Bale Illustration" className="h-8 relative bottom-[20px] left-[400px] max-md:h-6 max-md:left-[320px] max-md:relative max-md:mx-1" />
          <img src="/Bale.svg" alt="Bale Illustration" className="h-8 relative left-[326px] max-md:h-6 max-md:left-[260px] max-md:relative max-md:mx-1" />
          <img src="/Bale.svg" alt="Bale Illustration" className="h-8 relative left-[318px] max-md:h-6 max-md:left-[240px] max-md:relative max-md:mx-1" />
          <img src="/Illustration.svg" alt="Landscape Illustration" className="h-14 relative left-[0px] max-md:h-10 max-md:left-0" />
          <img src="/Wind Mill.svg" alt="Windmill Illustration" className="h-20 relative left-[-20px] max-md:h-18 " />
        </div>
      </div>
    </section>
  );
}
