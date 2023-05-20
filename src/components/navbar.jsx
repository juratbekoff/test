import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container w-full m-auto ">
      <nav className="flex flex-row justify-around px-0 py-[20px] w-full">
        <Link to={"/"}>
          <img
            src="/images/Logo.svg"
            className="h-[55px] m-0 p-0 cursor-pointer"
            alt="#"
          />
        </Link>
        <div className="flex flex-row gap-24 items-center text-[17px]">
          <a href="#" className="bg-[#D0D2D5] px-10 py-[5px] rounded-[16px]">
            Yillar
          </a>
          <a href="#" className="text-[#fff]">
            Asrlar
          </a>
          <a href="#" className="text-[#fff]">
            Atamalar
          </a>
        </div>

        <div
          className="rounded-[12px] h-[45px] flex self-center items-center px-9 cursor-pointer"
          style={{ border: "1px solid #C1C1C1" }}
        >
          <a href="#" className="text-[16px] text-[#FFFFFF] font-normal">
            Qollab quvvatlash
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
