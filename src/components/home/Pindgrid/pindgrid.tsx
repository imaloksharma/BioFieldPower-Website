
import Image from "next/image";

const PindGrid = () => {
  return (
    <section className="relative flex flex-col justify-between items-center w-full px-4  md:px-12 md:py-4 bg-white">
      <div className="w-full flex justify-center mb-4 md:mb-8">
        <Image
          src="/Pindgrid.svg"
          className="w-[100%]  md:w-[100%] h-auto"
          alt="Pindgrid"
        />
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/Pindgrid_lower.svg"
          className="w-[100%]  md:w-[100%] h-auto"
          alt="Pindgrid Lower"
        />
      </div>
    </section>
  );
};

export default PindGrid;
