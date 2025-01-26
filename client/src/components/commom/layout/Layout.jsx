import { Outlet, useNavigate } from "react-router-dom";
import userIcon from "../../../assets/user.png";
import { GiHamburgerMenu } from "react-icons/gi";
import RecruiterMenuOptions from "./RecruiterMenuOptions";
import AdminMenuOptions from "./AdminMenuOptions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../services/operations/authAPI";
const Layout = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);

  const logoutHandler = () => {
    dispatch(logout(navigate));
  };

  return (
    <div className="flex flex-col w-full ">
      <nav className="flex justify-between items-center px-8 py-2 h-full">
        {window.location.pathname.includes("/admin") ? (
          <AdminMenuOptions />
        ) : (
          <RecruiterMenuOptions />
        )}
        <div
          onClick={() => setDropdownVisible(!dropdownVisible)}
          onMouseLeave={() => setDropdownVisible(false)}
          className="flex items-center gap-2 cursor-pointer relative "
        >
          <p className=" font-medium">
            {user.accountType === "admin"
              ? "Admin"
              : `${user.firstName} ${user?.middleName} ${user?.lastName}`}
          </p>
          <div className="w-[2.5rem]">
            <img src={userIcon} alt="" />
          </div>
          <GiHamburgerMenu className="text-[1.1rem] text-offset-black" />
          {dropdownVisible && (
            <div
              className="absolute px-3 py-1 rounded-sm top-[100%] right-0 w-[7rem] flex items-center justify-center bg-offset-black text-white"
              onClick={logoutHandler}
            >
              <span>Logout</span>
            </div>
          )}
        </div>
      </nav>
      <div className="bg-[#f9f9f9] min-h-[90vh] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
