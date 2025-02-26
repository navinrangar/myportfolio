import React from "react";
import Link from "./Link";
import { Routes } from "../constants/Routes";
import CustomButton from "./CustomButton";

const Work = (props) => {
  const projClassName = "font-medium opacity-90 whitespace-pre-wrap";
  React.useEffect(() => {
    document.title = "Navin Rangar - Work";
  }, []);
  return (
    <div className={props.className}>
      <h1 className="flex justify-center font-medium text-5xl">Work</h1>
      <div className="flex flex-col gap-y-4 mt-20">
        <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4">
          Corporate Works:
        </h2>
        <li>
          <Link className={projClassName}>Data Management System</Link>: Our
          team implemented a complex system for a renowned corporation to manage
          their internal proceedings and to generate reports.
        </li>
        <li>
          <Link className={projClassName}>Automated Report Integration</Link>:
          For a client, I automated the flow of CRUDing PowerBi reports inside
          their application with the help of Graph APIs in Azure.
        </li>
        {props.intro && (
          <CustomButton
            className="mt-5 self-center"
            href={process.env.REACT_APP_BASE_URL + Routes.work}
          >
            See All Works
          </CustomButton>
        )}
      </div>
      {!props.intro && (
        <>
          <div className="space-y-4 mt-20">
            <h2
              id="opensource-projects"
              className="font-semibold text-2xl mb-8 underline underline-offset-4"
            >
              Open-Source Contributions:
            </h2>
            <li>
              <Link
                className={projClassName}
                href="https://profiles.wordpress.org/navinrangar"
              >
                WordPress
              </Link>
              : A regular contributor to Core Codebase and Translation.
            </li>
            <li>
              <Link
                className={projClassName}
                href="https://en.wikipedia.org/wiki/Special:Contributions/Navin_Singh_Rangar"
              >
                WikiMedia
              </Link>
              : I love to update, add pictures and translate. Mosting for Sports
              & places.
            </li>
          </div>
          <div className="space-y-4 mt-20">
            <h2
              className="font-semibold text-2xl mb-8 underline underline-offset-4"
              id="personal-projects"
            >
              Personal Tools:
            </h2>
            <li>
              <Link
                className={projClassName}
                href="https://probe-stemm-dev.netlify.app"
              >
                ProbeSTEM
              </Link>
              : A Student-Faculty Portal for academic interaction - (in
              development phase, as of september 2024).
            </li>
            <li>
              <Link className={projClassName}>TaskManger</Link>: An app to
              manage my daily tasks and to see productivity insights.
            </li>
            <li>
              <Link className={projClassName}>ExpenseTracker</Link>: An app to
              manage my expenses and to see financial insights.
            </li>
          </div>
          <div className="space-y-4 mt-20">
            <h2
              className="font-semibold text-2xl mb-8 underline underline-offset-4"
              id="personal-projects"
            >
              Other Works:
            </h2>
            <li>
              <Link className={projClassName} href="https://godlyguide.com">
                GodlyGuide
              </Link>
              : A blog on Spirituality. https://dev.godlyguide.com about
              Programming.
            </li>
            <li>
              <Link className={projClassName} href="https://skn.godlyguide.com">
                SochokuchnayaGG
              </Link>
              : A blog around General Technology. https://skn.godlyguide.com
            </li>
            <li>
              <Link
                className={projClassName}
                href="https://www.youtube.com/@sochokuchnaya"
              >
                SochokuchnayaYT
              </Link>
              : In leisure, I like making videos on youtube.
            </li>
            <li>
              <Link className={projClassName}>Freelance Writing:</Link>: In
              past, I worked as a freelance writer and SEO for 3 years.
            </li>
          </div>
        </>
      )}
    </div>
  );
};

export default Work;
