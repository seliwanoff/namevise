import { Search, ShoppingBagIcon, User } from "lucide-react";
import { Link } from "react-router-dom";

const HomePageHeader = () => {
  return (
    <div className="pt-[19px] pb-[21px] px-[20px] top-0 z-50 sticky bg-white border-b border-red-50 w-full">
      <div className="flex justify-between  items-center">
        <Link to={"/"}>
          <h3 className="font-sans font-semibold">Namevise</h3>
        </Link>

        <ul className="flex items-center gap-5  list-none text-gray-500 text-base font-normal leading-6 font-sans">
          <li>About us</li>
          <li>Privacy policy</li>
          <li>Refund policy</li>
          <li>Term & conditions</li>
          <li>Blog</li>
        </ul>

        <div className="flex gap-8 items-center text-gray-500">
          <span color="" className="cursor-pointer ">
            <Search size={24} />
          </span>
          <span color="">
            <ShoppingBagIcon size={24} />
          </span>
          <span color="">
            <User size={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
