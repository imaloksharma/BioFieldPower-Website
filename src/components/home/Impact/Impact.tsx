// import { Lock, Users, Leaf } from "lucide-react";

// const Impact = () => {
//   const impactData = [
//     { value: "10,000+", label: "Tons Biomass Processed", icon: <Lock size={20} /> },
//     { value: "300+", label: "Farmers Empowered", icon: <Users size={20} /> },
//     { value: "50,000", label: "Tons CO2 Offset Potential", icon: <Lock size={20} /> },
//     { value: "1MW", label: "Renewable Energy in Pipeline", icon: <Leaf size={20} /> },
//   ];

//   return (
//     <section className="relative text-center py-4 md:py-8 bg-white">
//       {/* Content Container */}
//       <div className="relative z-10">
//         <h2 className="text-3xl md:text-5xl font-semibold text-green-700 mb-12 md:mb-24">
//           Impact Metrics
//         </h2>

//         {/* Grid Layout */}
//         <div className="relative grid grid-cols-2 gap-10 md:gap-20 max-w-5xl mx-auto px-4 md:px-0 justify-items-center">

//           {/* Vertical & Horizontal Gradient Lines */}
//           <div className="absolute inset-0 flex justify-center items-center">
//             <div className="w-3/4 h-1 md:h-1 bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
//           </div>
//           <div className="absolute inset-0 flex justify-center">
//             <div className="w-1 h-full md:h-full bg-gradient-to-t from-transparent via-green-800 to-transparent"></div>
//           </div>

//           {impactData.map((item, index) => (
//             <div key={index} className="flex flex-col items-center space-y-2">
//               <h3 className="text-2xl md:text-5xl font-semibold text-green-700">{item.value}</h3>
//               <div className="flex items-center space-x-2 text-gray-700 text-xs md:text-xl">
//                 {item.icon} <p>{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* World Map Background */}
//       <div className="flex justify-center -mt-20 md:-mt-40">
//         <div
//           className="h-40 w-full opacity-20 md:h-80 md:max-w-4xl md:opacity-30 bg-center bg-cover bg-no-repeat"
//           style={{ backgroundImage: "url('/worldmap.png')" }}
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default Impact;


// app/impact/page.tsx or pages/impact.tsx
// import Image from 'next/image'

// export default function Impact() {
//   const imageFilenames = ['img11.svg', 'img12.svg', 'img13.svg', 'img14.svg']

//   return (
//     <div className="mb-4"> 
//     <div className="container mx-auto px-2 py-4 max-h-[700px] rounded-md">
//       <div className="bg-green-800 flex flex-col md:flex-row p-16 text-white rounded-lg">
//         {/* Left Side */}
//         <div className="md:w-2/3 flex flex-col justify-between space-y-6 p-8">
//           <h1 className="text-5xl font-semibold">Impact Metrics</h1>
//           <button className="w-max bg-white text-green-800 px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:opacity-90">
//             Learn More
//             <span className="text-green-800">↗</span>
//           </button>
//         </div>

//         {/* Right Side (scrollable) */}
//         <div className="md:w-1/3 max-h-[560px] overflow-y-auto mt-10 md:mt-0 space-y-10 pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
//           {imageFilenames.map((filename, index) => (
//             <div
//               key={filename}
//               className="bg-white rounded-xl p-6 shadow-md flex items-center gap-8"
//             >
//               <div className="flex-1">
//                 <Image
//                   src={`/${filename}`}
//                   alt={`Metric ${index + 1}`}
//                   width={150}
//                   height={80}
//                   className="rounded-md object-contain w-full h-auto"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }


import Image from 'next/image'

export default function Impact() {
  const imageFilenames = ['img11.svg', 'img12.svg', 'img13.svg', 'img14.svg']

  return (
    <div className="mb-4">
      <div className="container mx-auto px-2 py-4 max-h-[700px] rounded-md">
        <div className="bg-green-800 flex flex-col md:flex-row p-6 sm:p-10 md:p-16 text-white rounded-lg">
          
          {/* Left Side */}
          <div className="md:w-2/3 flex flex-col justify-center md:justify-between items-center md:items-start space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center md:text-left">
                Impact Metrics
              </h1>
              <button className="w-max bg-white text-green-800 px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:opacity-90 text-sm sm:text-base">
                Learn More
                <span className="text-green-800">↗</span>
              </button>
            </div>


          {/* Right Side (scrollable) */}
          <div className="md:w-1/3 max-h-[400px] sm:max-h-[500px] p-4 sm:p-0 md:max-h-[560px] overflow-y-auto mt-6 md:mt-0 space-y-6 sm:space-y-8 md:space-y-10 pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            {imageFilenames.map((filename, index) => (
              <div
                key={filename}
                className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md flex items-center gap-4 sm:gap-6 md:gap-8 w-12/13 sm:w-10/12 md:w-auto"
                >
                <div>
                <Image
                  src={`/${filename}`}
                  alt={`Metric ${index + 1}`}
                  width={180}
                  height={80}
                  className="rounded-md object-contain md:w-full md:h-auto "
                />

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
