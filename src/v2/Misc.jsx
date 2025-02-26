import React, { useEffect } from "react";
import Link from "./Link";

const Misc = (props) => {
  useEffect(() => {
    document.title = "Navin Rangar - Miscellaneous";
    // var date = document.lastModified;
    document.getElementById("last_updated").innerHTML =
      "February 25, 2025. (V2 published in September 2024).";
  }, []);

  return (
    <div className={"gap-y-4 " + props.className}>
      <h1 className="flex justify-center text-5xl font-medium">
        Miscellaneous
      </h1>
      <p className="mt-8 text-center">
        The site was last updated on <span id="last_updated"></span>
      </p>
      <p className="mt-8 text-center">
        <span> See </span>
        <Link
          className="underline"
          title="Click to see image."
          href="https://stackoverflow.com/users/12674966/navinrangar"
        >
          Stackoverflow<sup className="text-sm">[1]</sup>
        </Link>
        <span> and </span>
        <Link
          className="underline"
          title="Click to see image."
          href="https://leetcode.com/u/navinrangar"
        >
          Leetcode<sup className="text-sm">[2]</sup>.
        </Link>
      </p>
    </div>
  );
};

export default Misc;
