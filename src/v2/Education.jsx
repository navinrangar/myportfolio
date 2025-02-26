import React from "react";
import Link from "./Link";
import { Routes } from "../constants/Routes";
import CustomButton from "./CustomButton";

const Education = (props) => {
  const projClassName = "font-medium opacity-90 whitespace-pre-wrap";
  React.useEffect(() => {
    document.title = "Navin Rangar - Education";
  }, []);
  return (
    <div className={"flex flex-col " + props.className}>
      <h1 className="flex justify-center font-medium text-5xl">Education</h1>
      {!props.intro && (
        <>
          <div className="space-y-4 mt-20">
            <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4">
              A little about School:
            </h2>
            <li>
              School was a kind of a fun place, and I really miss it. I used to
              be a Science Student, who hated Maths, however somehow liked (and
              like) History, Geography and Technology in General.
            </li>
          </div>
        </>
      )}

      <div className="space-y-6 mt-20">
        <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4">
          College/University:
        </h2>
        <li>
          <Link
            className={projClassName}
            title="Institution: Govt. Polytechnic Dehradun, Uttarakhand, India"
          >
            Diploma in Computer Engineering (2018-21)<sup>[1]</sup>
          </Link>
          : A 3-year Diploma course in Computer Sc. and Engg. It was during
          Pandemic, So, essentially my college was Internet.
        </li>
        <li>
          <Link
            className={projClassName}
            title="Institution: Uttarakhand Open University"
          >
            Bachelor of Commerce (2019-22)<sup>[2]</sup>:
          </Link>
          : To be honest, I enrolled in this course just to get me a degree, but
          I learned so much about financial managment that I ended up making{" "}
          <Link
            href={
              process.env.REACT_APP_BASE_URL +
              Routes.work +
              "#personal-projects"
            }
          >
            an app to manage my expenses!
          </Link>
        </li>
      </div>

      <div className="space-y-4 mt-20">
        <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4">
          Certifications:
        </h2>
        <li>
          <Link
            className={projClassName}
            href="https://codeyogi.io"
            title="They help people learn web development and make their career in IT."
          >
            CodeYogi Web Development Training (2021-22)<sup>[3]</sup>
          </Link>
          : After College, I learned Modern Web Application Development with
          React.js and Node.js here.
        </li>
      </div>
      {props.intro && (
        <CustomButton
          className="mt-5 self-center"
          href={process.env.REACT_APP_BASE_URL + Routes.education}
        >
          See All Education
        </CustomButton>
      )}
      {!props.intro && (
        <div className="space-y-4 mt-20">
          <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4">
            Volunteering:
          </h2>
          <li>
            <Link className={projClassName} title="Motto: Not Me, but You.">
              National Service Scheme (2016-18)
            </Link>
            : This was social volunteering program combined community service
            with fun, involving high team-spirited youth in camps located in
            remote areas. While in school, during spring, we visited villages in
            Himalayas to conduct social surveys and enjoy recreational
            activities.
          </li>
          <li>
            <Link
              className={projClassName}
              href={
                process.env.REACT_APP_BASE_URL +
                Routes.work +
                "#opensource-projects"
              }
            >
              Open-Source Contributions
            </Link>
            : I strongly believe in giving back to society in any way possible.
            When I see the number of softwares that I use daily, either directly
            or indirectly, the importance of open-source deeply impacts my soul.
            Whensoever possible, I try to give my hand to the projects i love
            and can help, either by contributing my time or finance. Some
            Projects that I really like are- Internet Archives, Wikipedia,
            Wordpress.
          </li>
        </div>
      )}
    </div>
  );
};

export default Education;
