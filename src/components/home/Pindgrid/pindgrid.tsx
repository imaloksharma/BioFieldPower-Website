import { motion } from "framer-motion";
import Image from "next/image";

const PindGrid = () => {
  return (
    <section className="relative flex justify-between items-center w-full h-[100vh] px-12 bg-white">
      {/* Left Semicircle with App Mockup */}
      <div className="absolute left-10 top-0 h-[80vh] w-[30%] bg-green-900 rounded-r-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-40 lg:w-48 shadow-lg"
        >
          <Image
            src="/app-mockup.png"
            alt="App Mockup"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
      </div>

      {/* Flow Diagram (Farmer → Mover → Industry) */}
      <div className="flex flex-col justify-center items-center w-2/3 space-y-8 relative">
        <div className="absolute top-[-320px] right-10 flex flex-col items-center">
          <Image src="/industry-icon.png" alt="Industry" width={300} height={300} />
          <span className="text-lg font-bold mt-2">3. Industry</span>
        </div>
        <div className="absolute top-[-170px] right-[-350px] flex flex-col items-center">
          <Image src="/mover-icon.png" alt="Mover" width={300} height={300} />
          <span className="text-lg font-bold mt-2">2. Mover</span>
        </div>
        <div className="absolute top-[20px] right-2 flex flex-col items-center">
          <Image src="/farmer-icon.png" alt="Farmer" width={350} height={350} />
          <span className="text-lg font-bold mt-2">1. Farmer</span>
        </div>

        {/* Arrows */}
        <div className="absolute top-[-270px] right-[-200px]">
          <Image src="/3arrow.png" alt="Mover to Industry" width={150} height={100} />
        </div>
        <div className="absolute top-[40px] right-[-150px]">
          <Image src="/2arrow.png" alt="Farmer to Mover" width={150} height={100} />
        </div>
        <div className="absolute top-[-180px] left-[470px]">
          <Image src="/1arrow.png" alt="Industry to Farmer" width={50} height={50} />
        </div>
      </div>

      {/* Updated Title Section with Vertical Line */}
      <div className="absolute bottom-10 left-12 flex items-center space-x-4">
        <div className="h-20 w-1 bg-gray-400"></div>
        <div>
          <h2 className="text-3xl font-bold text-green-700">PindGrid™</h2>
          <p className="text-xl text-gray-600">Biomass Supply chain</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 right-12 flex flex-col items-center space-y-3">
        <div className="relative flex items-center justify-between w-80">
          {/* Progress bar */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-green-500 transform -translate-y-1/2"></div>

          {/* Dots */}
          <div className="relative flex justify-between w-full">
            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg flex items-center justify-center"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg flex items-center justify-center"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg flex items-center justify-center"></div>
          </div>
        </div>

        {/* Labels aligned properly below dots */}
        <div className="flex justify-between w-full text-md font-semibold px-2 mt-1 text-center">
          <span className="w-1/3 text-left -ml-4">Farmer</span>
          <span className="w-1/3 text-center">Mover</span>
          <span className="w-1/3 text-right -mr-7">Industry</span>
        </div>
      </div>
    </section>
  );
};

export default PindGrid;