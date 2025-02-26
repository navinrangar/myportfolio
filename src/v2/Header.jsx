import React from "react";
import Link from "./Link";
import { Routes } from "../constants/Routes";
import { withScreenXY } from "../hooks/withScreenXY";
import MenuDrawer from "./MenuDrawer";
import CustomButton from "./CustomButton";

const Header = (props) => {
  const [menu, setMenu] = React.useState(false);
  const { width } = props.screenXY;
  const isSmallScreen = width < 800;

  const isActiveTab = (pathname) => {
    return window.location.pathname === pathname
      ? "underline underline-offset-8 "
      : null;
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  // console.log("screenWidth", width);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[40px]">
        <Link
          className={
            "py-4 px-8 hover:underline-offset-[15px] "
            // + " border-2 rounded-full  shadow-2xl shadow-indigo-500"
          }
          href={process.env.REACT_APP_BASE_URL}
          self
        >
          Navin<sup className="text-xl">v2</sup>
        </Link>
      </h1>
      {isSmallScreen && (
        <div className="flex items-center justify-center gap-x-3">
          <CustomButton
            openNewTab
            href="https://docs.google.com/document/d/1lUab7T9KCeXDeMrSilEYzuP3Xi3Ti5EuEyyQTsSfudk/edit?usp=sharing"
          >
            Resume
          </CustomButton>
          <img
            src="../../assets/menu.svg"
            alt="Menu"
            width="30"
            height="30"
            className="mr-4"
            onClick={handleMenu}
          />
        </div>
      )}
      {isSmallScreen ? (
        menu ? (
          <MenuDrawer isActiveTab={isActiveTab} />
        ) : null
      ) : (
        <div className="flex items-center justify-between gap-x-4">
          <ul className="flex flex-col text-2xl sm:flex-row gap-x-8">
            <li>
              <Link
                className={isActiveTab(Routes.about)}
                href={process.env.REACT_APP_BASE_URL + Routes.about}
                self
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={isActiveTab(Routes.skills)}
                href={process.env.REACT_APP_BASE_URL + Routes.skills}
                self
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={isActiveTab(Routes.work)}
                href={process.env.REACT_APP_BASE_URL + Routes.work}
                self
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className={isActiveTab(Routes.education)}
                href={process.env.REACT_APP_BASE_URL + Routes.education}
                self
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className={isActiveTab(Routes.contact)}
                href={process.env.REACT_APP_BASE_URL + Routes.contact}
                self
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={isActiveTab(Routes.misc)}
                href={process.env.REACT_APP_BASE_URL + Routes.misc}
                self
              >
                Misc
              </Link>
            </li>
          </ul>
          <CustomButton
            openNewTab
            href="https://docs.google.com/document/d/1lUab7T9KCeXDeMrSilEYzuP3Xi3Ti5EuEyyQTsSfudk/edit?usp=sharing"
          >
            Resume
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default withScreenXY(Header);
