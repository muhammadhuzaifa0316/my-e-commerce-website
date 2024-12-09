import { Gi3dMeeple } from "react-icons/gi";
import { IoBodySharp} from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

export default function navbar() {
  return (
    <div className="h-auto sm-h1-2 md-h-16 lg-h-16 flex flex-col sm:flex-row">
      <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
        Home
      </header>

      {/* navigation*/}
      <div className="flex justify-between items-center  px-8 py-4">
        <h1 className="text-2x1 font-bold text-black px-2">
          {" "}
          <Gi3dMeeple />
          Furniro{" "}
        </h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="a" className="text-slate-600 hover:text-black-underline">
            Home
          </a>
          <a href="a" className="text-slate-600 hover:text-black">
            Shop
          </a>
          <a href="a" className="text-slate-600 hover:text-black">
            Blog
          </a>
          <a href="a" className="text-slate-600 hover:text-black">
            Contact
          </a>
        </nav>
        {/* search icon*/}

        <div className="flex items-center space-x-6">
          <IoBodySharp />
          <FaSearch />
          <FaRegHeart />
          <BsCart3 />
        </div>
      </div>
    </div>
  );
}
