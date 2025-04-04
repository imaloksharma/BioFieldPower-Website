import Image from "next/image";

const PindGrid = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full px-4 md:px-12 md:py-8 bg-white">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Left Side - Text and Button */}
        <div className="md:w-1/2 text-left">
          <p className="text-green-700 text-xl md:text-4xl font-semibold leading-tight">
            "From <span className="font-bold">farm</span> to fuel,<br />
            the <span className="font-bold">biofuel supply<br />
            chain</span> powers a<br />
            greener tomorrow."
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700">
            Connect Us
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/Pindgrid.svg"
            className="w-[90%] md:w-[80%] h-auto"
            alt="Pindgrid"
          />
        </div>
      </div>

      {/* Bottom Image - Keeping this as in the original code */}
      <div className="w-full flex justify-center">
        <img
          src="/Pindgrid_lower.svg"
          className="w-full md:w-full h-auto"
          alt="Pindgrid Lower"
        />
      </div>
    </section>
  );
};

export default PindGrid;