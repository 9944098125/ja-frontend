import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcBusinessman, FcHome } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import logo from "../../Assets/logo.png";
import { toggleTheme } from "../../Redux/Actions/toggleTheme";
import { logout } from "../../Redux/Actions/login";
import useClickOutside from "../../Helpers/clickOutside";
import "./styles.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [activeToggle, setActiveToggle] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  function toggleTheming() {
    setActiveToggle(!activeToggle);
    dispatch(toggleTheme());
  }

  // to implement click outside function
  const userMenu = React.useRef();

  useClickOutside(userMenu, () => {
    setShowUserMenu(false);
  });

  const smallDevicesView = useMediaQuery({
    query: "(max-width:500px)",
  });
  function toggleUserMenu() {
    setShowUserMenu(!showUserMenu);
  }
  function logoutUser() {
    dispatch(logout());
    navigate("/login", { replace: true });
  }
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <React.Fragment>
      <div className={darkMode ? "nav_container_dark" : "nav_container_light"}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="menu_container">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div
              className={`${
                location.pathname === "/" ? "menu_item1 active1" : "menu_item1"
              }`}
            >
              <FcHome />
              <h4 className="menu_item_text">Home</h4>
            </div>
          </Link>

          <Link to="/jobs" style={{ textDecoration: "none", color: "inherit" }}>
            <div
              className={`${
                location.pathname === "/jobs"
                  ? "menu_item1 active1"
                  : "menu_item1"
              }`}
            >
              <FcBusinessman />
              <h4 className="menu_item_text">Jobs</h4>
            </div>
          </Link>

          <div id="modes_btn" className="menu_item" onClick={toggleTheming}>
            {activeToggle ? (
              <MdDarkMode style={{ cursor: "pointer" }} />
            ) : (
              <BsSun style={{ cursor: "pointer" }} />
            )}
          </div>
          <div
            style={{ backgroundColor: activeToggle ? "black" : "white" }}
            onClick={toggleTheming}
            className="mobile_modes_btn"
          >
            {activeToggle ? (
              <MdDarkMode color="white" />
            ) : (
              <BsSun color="black" />
            )}
          </div>
          {smallDevicesView && (
            <FaBars
              color={darkMode ? "white" : "black"}
              onClick={toggleUserMenu}
              style={{
                position: "absolute",
                right: "10px",
              }}
            />
          )}
          <div
            onClick={toggleUserMenu}
            className={
              location.pathname === "/profile"
                ? "active avatar_container"
                : "avatar_container"
            }
          >
            <img
              src={
                user
                  ? user.photo
                  : "https://www.w3schools.com/w3images/avatar6.png"
              }
              alt=""
              className="avatar"
            />
          </div>
          {showUserMenu && (
            <>
              <div
                ref={userMenu}
                style={{ backgroundColor: darkMode ? "white" : "#EDEADE" }}
                className="user_menu_container"
              >
                <Link
                  onClick={toggleUserMenu}
                  to="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3 className="user_menu_item">Profile</h3>
                </Link>
                <hr />
                <h3 className="user_menu_item">Settings</h3>
                <hr />
                <h3 onClick={logoutUser} className="user_menu_item">
                  Logout
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
