import { BiInfoCircle, BiUser } from "react-icons/bi";

const SectionOne = () => {
  return (
    <section className="my-14">
      <div className="container mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-deplaoy="300"
          className="font-bold text-2xl text-center my-8"
        >
          Lorem ipsum dolor sit.
        </h2>
        <div
          data-aos="fade-up"
          data-aos-deplaoy="350"
          className="flex flex-col items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row lg:justify-center"
        >
          <div className="flex flex-col items-center space-y-5 py-4 px-2 rounded-xl border-[1px] border-[#f1006c] border-solid shadow-lg hover:bg-gradient-to-r from-[#b936f5] to-[#f1006c] hover:text-white cursor-pointer">
            <BiUser className="w-8 h-8" />
            <h2 className="font-semibold text-[18px]">Lorem, ipsum dolor</h2>
            <p className="max-w-[350px] mx-auto text-center font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              perspiciatis.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5 py-4 px-2 rounded-xl border-[1px] border-[#f1006c] border-solid shadow-lg hover:bg-gradient-to-r from-[#b936f5] to-[#f1006c] hover:text-white cursor-pointer">
            <BiInfoCircle className="w-8 h-8" />
            <h2 className="font-semibold text-[18px]">Lorem, ipsum dolor</h2>
            <p className="max-w-[350px] mx-auto text-center font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              perspiciatis.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5 py-4 px-2 rounded-xl border-[1px] border-[#f1006c] border-solid shadow-lg hover:bg-gradient-to-r from-[#b936f5] to-[#f1006c] hover:text-white cursor-pointer">
            <BiUser className="w-8 h-8" />
            <h2 className="font-semibold text-[18px]">Lorem, ipsum dolor</h2>
            <p className="max-w-[350px] mx-auto text-center font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              perspiciatis.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-deplaoy="400"
          className="flex flex-col items-center space-y-4 mt-10"
        >
          <button className="btn text-[#fff]">
            Lorem ipsum dolor sit amet consectetur.
          </button>
          <button className="btn text-[#fff]">Lorem ipsum.</button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
