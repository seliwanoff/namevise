import { PremiumDomains } from "../../misc";

const SectionThree = () => {
  return (
    <div className="flex justify-center items-center bg-[#EAEAEA]  pt-20 pb-20 flex-col gap-12 ">
      <div className="flex flex-col gap-3 ">
        <h3 className="font-sans text-xl text-[#000] text-center font-bold">
          Browse domain of any type
        </h3>
        <span className="text-base font-sans text-center">
          Find the perfect domain for your industry, sector or style.
        </span>
      </div>
      <div className="flex  flex-wrap items-center gap-5 justify-center px-25 ">
        {PremiumDomains?.map((item: any, index: any) => (
          <div
            key={index}
            className="p-3 bg-white rounded-[100px] text-center text-[#000] font-sans cursor-pointer min-w-[150px] "
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
