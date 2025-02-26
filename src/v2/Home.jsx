import React, { useState } from "react";
import Skills from "./Skills";
import Work from "./Work";
import Education from "./Education";
import Contact from "./Contact";
import CustomTab from "./CustomTab";

const Home = (props) => {
  const [tabs, setTabs] = useState({
    skills: false,
    work: false,
    education: false,
    contact: false,
  });

  const handleTabChange = (tabName) => {
    let updatedTabs = {};
    Object.keys(tabs).forEach((tab) => {
      if (tab === tabName) {
        updatedTabs = { ...updatedTabs, [tab]: !tabs[tab] };
      } else {
        updatedTabs = { ...updatedTabs, [tab]: false };
      }
    });
    return updatedTabs;
  };

  return (
    <div className={props.className}>
      <p>
        Navin is a<span className="font-serif"> full-stack developer</span> who
        enjoys coding as a hobby and a profession. With expertise in ReactJs,
        AdonisJs and PostgreSQL, he is experienced in building simple
        applications as well as complex systems using these technologies.
        {/* <Link
          self
          className="ml-2"
          href={process.env.REACT_APP_BASE_URL + Routes.about}
        >
          Read more...
        </Link> */}
      </p>
      <CustomTab
        className="mt-10"
        onClick={() => setTabs(handleTabChange("skills"))}
      >
        Skills
      </CustomTab>
      {tabs.skills && <Skills intro className="mt-14" />}
      <CustomTab
        className={tabs.skills && "mt-10"}
        onClick={() => setTabs(handleTabChange("work"))}
      >
        Work
      </CustomTab>
      {tabs.work && <Work intro className="mt-14" />}
      <CustomTab
        className={tabs.work && "mt-10"}
        onClick={() => setTabs(handleTabChange("education"))}
      >
        Education
      </CustomTab>
      {tabs.education && <Education intro className="mt-14" />}
      <CustomTab onClick={() => setTabs(handleTabChange("contact"))}>
        Contact
      </CustomTab>
      {tabs.contact && <Contact intro className="mt-14" />}
    </div>
  );
};

export default Home;
