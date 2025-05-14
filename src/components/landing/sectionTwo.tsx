import { BlogList } from "../../misc";

const SectionTwo = () => {
  return (
    <div className="flex justify-center items-center bg-[#f9f9f9]  pt-20 pb-10 flex-col gap-12 ">
      <div className="flex flex-col gap-5 ">
        <h3 className="font-sans text-xl text-[#000] text-center font-bold">
          The Smarter Way to Name Your Business
        </h3>
        <span className="text-base font-sans text-center">
          Has the search for a great, available business name got you down? We
          can help. With over 100,000 domains to choose <br></br> from, you can
          browse, get inspired, and find the unexpected yet perfect name for
          your company.
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

export default SectionTwo;
