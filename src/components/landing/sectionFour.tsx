import { BlogList } from "../../misc";

const SectionFour = () => {
  return (
    <div className="flex justify-center items-center bg-[#f9f9f9]  pt-20 pb-10 flex-col gap-12 ">
      <div className="flex flex-col gap-5 ">
        <h3 className="font-sans text-2xl text-[#000] text-center font-bold">
          Did You Know?
        </h3>
        <span className="text-base font-sans text-center">
          Your purchase includes full rights to the domain name, transferred to
          you at a registrar of your choice. There are no <br /> recurring fees.
          You may also have and use the sample logo shown with the name.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-30 py-4">
        {BlogList?.map((blog: any, index: any) => (
          <div
            className="flex flex-col gap-4 p-6  rounded-lg   transition-shadow duration-300"
            key={index}
          >
            <h2 className="font-sans text-xl font-bold text-gray-800">
              {blog.title}
            </h2>
            <p className="font-sans text-base text-gray-600">{blog.content}</p>

            <div className="font-sans text-base text-gray-600 pt-4 inline-block">
              {blog.bottomText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
