import { Search } from "lucide-react";
import { Categories } from "../../misc";

const SectionOne = () => {
  return (
    <div className="relative w-full h-[calc(100vh-70px)]   overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsl(15, 98%, 50%) 0%,
              hsl(10, 98%, 55%) 33%,
              hsl(5, 98%, 60%) 66%,
              hsl(0, 100%, 50%) 100%
            )
          `,
          backgroundSize: "200% 200%",
          animation: "gradientFlow 12s ease infinite",
        }}
      >
        {/* Liquid wave animation */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: `
              linear-gradient(
                90deg,
                hsl(15, 98%, 50%) 0%,
                hsl(0, 100%, 50%) 50%,
                hsl(350, 100%, 40%) 100%
              )
            `,
            animation: "waveAnimation 8s linear infinite",
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23000000'/%3E%3C/svg%3E\")",
            maskSize: "1200px 120px",
            maskRepeat: "repeat-x",
            maskPosition: "bottom",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-sans text-5xl text-white font-semibold">
              Your Source for the Best Domain Names
            </h1>

            <span className="text-white text-xl font-sans text-center">
              Explore thousands of hand-picked, creative domain <br /> names
              available for sale with a premium domain name.
            </span>
          </div>
          <div className="relative w-full  px-4">
            <div className="relative flex items-center bg-white rounded-[200px] shadow-lg border border-gray-200 overflow-hidden">
              <Search className="absolute right-3 h-5 w-5 text-gray-400 " />

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search our collection for domain name"
                className="w-full py-4 pl-4 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg placeholder:text-gray-600 placeholder:font-sans placeholder:text-xl"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-center ">
            {Categories?.map((item: any, index: any) => (
              <div
                key={index}
                className="p-3 bg-white rounded-[100px] text-center text-[#000] font-sans cursor-pointer "
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
