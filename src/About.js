import React from "react";
import Button from "./Button";

function About(props) {
    return(
        <div className=" p-24 pb-4 items-center text-xl bg-[url('https://img.freepik.com/free-photo/dreamy-surreal-sky-clouds-as-abstract-nature-background-spiritual-design-religion-concept_360074-1997.jpg?w=1380')]">

            <div>
            <h2 className="font-bold text-3xl text-center m-6 underline"> About Navin </h2>

            <div className="flex text-yellow-700 justify-center space-x-4 ml-4 pb-16">
            <p> For over a decade, I have studied and inscribed the sacred runes and performed the arcane rituals that breathe life into the realm of the internet.

The web can sometimes be indistinguishable from magic, but I have the knowledge and patience required to make just about anything. </p>
            </div>
            </div>


        </div>
    )
}


export default About