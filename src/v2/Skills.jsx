import React from "react";
import Link from "./Link";
import ProgressBar from "./ProgressBar";
import { Routes } from "../constants/Routes";
import CustomButton from "./CustomButton";

const Skills = (props) => {
  React.useEffect(() => {
    document.title = "Navin Rangar - Skills";
  }, []);
  const projClassName = "font-medium opacity-90 text-center sm:text-left";
  const liClassName = "flex flex-col sm:flex-row justify-between";
  return (
    <div className={"flex flex-col gap-y-8 " + props.className}>
      <div className="space-x-6">
        <h1 className="flex justify-center font-medium text-5xl">Skills</h1>
        <div className="space-y-8 mt-20">
          <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4 text-center">
            Front-End Skills:
          </h2>
          <li className={liClassName}>
            <Link className={projClassName}>
              HTML<sup>5</sup>:
            </Link>
            <ProgressBar filled={90} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>
              CSS<sup>3</sup>/Tailwind:
            </Link>
            <ProgressBar filled={60} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>JavaScript:</Link>
            <ProgressBar filled={70} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>
              React<sup>js</sup>:
            </Link>
            <ProgressBar filled={70} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>Redux, MobX, ReactQuery</Link>
            <ProgressBar filled={90} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>@mui/tailwindui</Link>
            <ProgressBar filled={70} />
          </li>
        </div>
        <div className="space-y-8 mt-20">
          <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4 text-center">
            Back-End Skills:
          </h2>
          <li className={liClassName}>
            <Link className={projClassName}>
              Node<sup>js</sup>:
            </Link>
            <ProgressBar filled={70} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>
              Express<sup>js</sup>:
            </Link>
            <ProgressBar filled={50} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>
              Adonis<sup>js</sup>:
            </Link>
            <ProgressBar filled={80} />
          </li>
          <li className={liClassName}>
            <Link className={projClassName}>
              MySQL/PostgreSQL<sup>db</sup>:
            </Link>
            <ProgressBar filled={70} />
          </li>
        </div>
        {!props.intro && (
          <>
            <div className="space-y-8 mt-20">
              <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4 text-center">
                Programming Languages and Concepts (Familiarity %):
              </h2>
              <li className={liClassName}>
                <Link className={projClassName}>OOPs</Link>
                <ProgressBar filled={50} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>
                  C/C++<sub className="text-sm">InCollege</sub>
                </Link>
                <ProgressBar filled={40} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>
                  C#/Java/.NET<sub className="text-sm">InCollege</sub>
                </Link>
                <ProgressBar filled={40} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>PHP</Link>
                <ProgressBar filled={40} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>DSA:</Link>
                <ProgressBar filled={40} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>
                  Software Engineering<sup></sup>:
                </Link>
                <ProgressBar filled={60} />
              </li>
            </div>
            <div className="space-y-8 mt-20">
              <h2 className="font-semibold text-2xl mb-8 underline underline-offset-4 whitespace-nowrap text-center">
                Hobbies (Interest %):
              </h2>
              <li className={liClassName}>
                <Link className={projClassName}>
                  Sports
                  <sup className="text-sm">⚽🏏</sup>
                </Link>
                <ProgressBar filled={99} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>Reading/Writing</Link>
                <ProgressBar filled={79} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>Editing Wikipedia</Link>
                <ProgressBar filled={85} />
              </li>
              <li className={liClassName}>
                <Link className={projClassName}>Listening Spirituality</Link>
                <ProgressBar filled={100} />
              </li>
            </div>
          </>
        )}
        <span className="flex text-sm mt-10 text-center ">
          * All the percentage data are rough estimates.
        </span>
      </div>
      {props.intro && (
        <CustomButton
          className="self-center"
          href={process.env.REACT_APP_BASE_URL + Routes.skills}
        >
          See All Skills
        </CustomButton>
      )}
    </div>
  );
};

export default Skills;
