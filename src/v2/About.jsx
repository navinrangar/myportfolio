import React, { useEffect } from "react";
import Link from "./Link";

const About = (props) => {
  useEffect(() => {
    document.title = "Navin Rangar - About";
  }, []);

  return (
    <div className={props.className}>
      <h1 className="flex justify-center text-5xl font-medium">About</h1>
      <div className="mt-20 space-y-4">
        <p>
          <span>I am </span>
          <Link
            className="underline"
            title="Click to see image."
            href="https://0.gravatar.com/avatar/38a10e80dab69743c479bf282210431c1978a8a75c2e53e8f24ac7706196b576?size=2000"
          >
            Navin Singh Rangar<sup className="text-sm">[1]</sup>
          </Link>
          , a web developer, an amateur writer, and a technology lover in
          general, from Uttarakhand, India.
        </p>

        <p>
          I love playing with open source softwares and learning new
          technologies to make something useful, mostly for my own interest, and
          at times for the public interest as well.
        </p>
        <p>
          I have been doing professional software development for a company for
          over two years.
        </p>
        <p>
          <span>
            When not active in development, you can also find me editing
            <Link
              className="mx-2 underline"
              href={
                "https://en.wikipedia.org/wiki/Special:Contributions/Navin_Singh_Rangar"
              }
            >
              Wikipedia
            </Link>
            or writing for my blog
          </span>
          <Link className="ml-2 underline" href="https://dev.godlyguide.com">
            GodlyGuide<sup className="text-sm">[2]</sup>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
