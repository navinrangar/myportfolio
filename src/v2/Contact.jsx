import React, { useEffect } from "react";
import Link from "./Link";

const About = (props) => {
  useEffect(() => {
    document.title = "Navin Rangar - Contact";
  }, []);

  return (
    <div className={props.className}>
      <h1 className="flex justify-center font-medium text-5xl">Contact</h1>
      <div className="space-y-4 mt-10 px-5">
        <span>To connect, kindly mail me at </span>
        <span className="bg-gray-200 text-xl px-1 text-black">
          <Link href="mailto:singhnavinrangar@gmail.com">
            singhnavinrangar@gmail.com
          </Link>
        </span>
        <span> or say "Hi" via</span>
        <Link
          className="mx-2 underline"
          href="https://linkedin.in/in/navin-singh-rangar"
        >
          LinkedIn.
        </Link>
      </div>
    </div>
  );
};

export default About;
