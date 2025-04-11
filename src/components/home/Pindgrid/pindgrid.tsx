import Image from "next/image";
import Link from "next/link";

const PindGrid = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full px-2 py-4 sm:px-4 sm:py-6 md:px-12 md:py-8 bg-white">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Right Side Image - Show above text in mobile */}
        <div className="order-1 md:order-2 w-full md:w-3/5 flex justify-center mb-4 md:mb-0">
  <img
    src="/Pindgrid.svg"
    className="w-[90%] md:w-[90%] h-auto"
    alt="Pindgrid"
  />
</div>


        {/* Left Side - Text and Button */}
        <div className="order-2 md:order-1 md:w-2/5 text-center md:text-start p-4 md:p-10">
          <p className="text-green-700 italic text-xl md:text-4xl font-semibold leading-tight">
            "From <span className="font-bold">farm</span> to fuel,<br />
            the <span className="font-bold">biofuel supply<br />
            chain</span> powers a<br />
            greener tomorrow."
          </p>
          <div className="mt-6">
  <Link href="/contact">
    <button className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 text-sm md:text-base">
      Contact
    </button>
  </Link>
</div>

        </div>
      </div>

      {/* Bottom Image - Same position always */}
      <div className="w-full flex justify-center">
        <img
          src="/Pindgrid_lower.svg"
          className="w-9/10 md:w-9/10 h-auto"
          alt="Pindgrid Lower"
        />
      </div>
    </section>
  );
};

export default PindGrid;
