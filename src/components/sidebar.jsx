import { Link } from "react-router-dom";

const Sidebar = ({ ...data }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row flex-col ml-3 p-0 w-full">
        <Link to={`/year/${data.id}`}>
          <h1 className="text-[#fff] text-[16px] font-normal pb-[4px] px-2">
            {data.year} - yil
          </h1>
          <hr className="w-[96%] m-0 p-0" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
