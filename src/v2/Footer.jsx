import React from "react";
import Link from "./Link";

const Footer = (props) => {
  return (
    <div
      className={
        "flex flex-col md:flex-row justify-between items-center " +
        props.className
      }
    >
      <Link
        className="flex items-center cursor-pointer gap-x-2"
        title="Click to See this Site's Code on Github."
        href="https://github.com/navinrangar/myportfolio"
        target="_blank"
        rel="noreferrer"
      >
        <img src="./assets/cc.svg" alt="creative-commons" />
        <span className="text-lg hover:underline hover:underline-offset-8">
          creative-commons
        </span>
      </Link>
      <div className="space-x-3">
        <Link href="https://linkedin.com/in/navin-singh-rangar">LinkedIn</Link>
        <Link href="https://github.com/navinrangar">GitHub</Link>
      </div>
    </div>
  );
};

export default Footer;
