import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeaderV1 from "./v1/Header";
import Intro from "./v1/Intro";
import AboutV1 from "./v1/About";
import SkillsV1 from "./v1/Skills";
import Projects from "./v1/Projects";
import ContactV1 from "./v1/Contact";
import FooterV1 from "./v1/Footer";

//v2 imports
import Home from "./v2/Home.jsx";
import Header from "./v2/Header.jsx";
import Footer from "./v2/Footer.jsx";
import About from "./v2/About.jsx";
import Work from "./v2/Work.jsx";
import { Routes } from "./constants/Routes.js";
import Education from "./v2/Education.jsx";
import Skills from "./v2/Skills.jsx";
import Contact from "./v2/Contact";
import Misc from "./v2/Misc.jsx";

const currentUrl = window.location.pathname;
const menuClassName = "text-2xl tracking-wider font-thin leading-10";

ReactDOM.render(
  <React.StrictMode>
    {currentUrl.includes("v1") && (
      <>
        <HeaderV1 />
        <Intro />
        <AboutV1 />
        <SkillsV1 />
        <Projects />
        <ContactV1 />
        <FooterV1 />
      </>
    )}

    {!currentUrl.includes("v1") && (
      <div className="py-[4%] px-[10%] lg:px-[15%] tracking-wider">
        <Header />
        {currentUrl === Routes.home && (
          <div className="my-24 px-7">
            <Home className={menuClassName} />
          </div>
        )}
        {currentUrl === Routes.about && (
          <div className="my-24 px-7">
            <About className={menuClassName} />
          </div>
        )}
        {currentUrl === Routes.skills && (
          <div className="my-24 px-7">
            <Skills className={menuClassName} />
          </div>
        )}
        {currentUrl === Routes.work && (
          <div className="my-24 px-7">
            <Work className={menuClassName} />
          </div>
        )}
        {currentUrl === Routes.education && (
          <div className="my-24 px-7">
            <Education className={menuClassName} />
          </div>
        )}
        {currentUrl === Routes.contact && (
          <div className="my-24 px-7">
            <Contact className={menuClassName} />
          </div>
        )}
        {currentUrl === Routes.misc && (
          <div className="my-24 px-7">
            <Misc className={menuClassName} />
          </div>
        )}

        {!Object.values(Routes)
          .slice(1)
          .some((r) => currentUrl.includes(r)) &&
          currentUrl !== Routes.home && (
            <div className="flex items-center justify-center">
              page not found!!
            </div>
          )}

        <Footer className="px-5 text-xl" />
      </div>
    )}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
