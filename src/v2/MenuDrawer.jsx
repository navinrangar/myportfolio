import Link from "./Link";
import { Routes } from "../constants/Routes";

const MenuDrawer = (props) => {
  //absolute top-20 bg-gray-500

  return (
    <ul className="absolute left-0 z-50 flex flex-col items-center w-full py-3 text-2xl bg-gray-400 top-20 gap-y-6">
      <li>
        <Link
          className={props.isActiveTab(Routes.about)}
          href={process.env.REACT_APP_BASE_URL + Routes.about}
          self
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={props.isActiveTab(Routes.skills)}
          href={process.env.REACT_APP_BASE_URL + Routes.skills}
          self
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className={props.isActiveTab(Routes.work)}
          href={process.env.REACT_APP_BASE_URL + Routes.work}
          self
        >
          Work
        </Link>
      </li>
      <li>
        <Link
          className={props.isActiveTab(Routes.education)}
          href={process.env.REACT_APP_BASE_URL + Routes.education}
          self
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          className={props.isActiveTab(Routes.contact)}
          href={process.env.REACT_APP_BASE_URL + Routes.contact}
          self
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className={props.isActiveTab(Routes.misc)}
          href={process.env.REACT_APP_BASE_URL + Routes.misc}
          self
        >
          Misc
        </Link>
      </li>
    </ul>
  );
};

export default MenuDrawer;
