import Image from "next/image";
import logo from "../../public/assets/logo.webp";

const Navbar = () => {
  return (
    <header className=" w-screen relative z-50">
      <div className="navbar bg-[#F2EEE9] justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#F2EEE9]"
            >
              <li>
                <a className="text-[#37392E]" href="#about-us">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a className="text-[#37392E]" href="#our-products">
                  Productos
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[100px] h-[50px]">
            <Image src={logo} alt="logo" width={70} height={50} />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a className="text-[#37392E]" href="#about-us">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a className="text-[#37392E]" href="#our-products">
                Productos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
