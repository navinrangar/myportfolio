import React from "react";

function About(props) {
  return (
    <div className="p-1 pt-2 pb-4 text-xl bg-gray-200 text-ellipsis sm:p-24 ">
      <a name="aboutsection"> </a>
      <div>
        <h2 className="m-6 text-3xl font-bold underline pl-9 sm:pl-0 sm:text-center">
          {" "}
          About Navin{" "}
        </h2>

        <div className="flex pb-16 ml-1 mr-1 text-center text-yellow-700 sm:space-x-4 sm:ml-4">
          <p>
            {" "}
            For over a decade, I have studied and inscribed the sacred runes and
            performed the arcane rituals that breathe life into the realm of the
            internet. The web can sometimes be indistinguishable from magic, but
            I have the knowledge and patience required to make just about
            anything.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
