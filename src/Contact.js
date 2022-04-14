import React from "react";
import Button from './Button';

function Contact(props){

    return(
        <div className="pt-16 pl-1 sm:pl-96 pb-11 bg-white">
            <a name="connectsection"> </a>
       <h3 className="text-3xl font-bold underline mb-11"> Keep in Touch </h3>

    <div className="flex flex-col space-y-3"> 
           <input type="text" placeholder="Your Name" className=" w-52 sm:w-96 h-8 p-2 border border-black border-solid"/>
           <input type="email" placeholder="Best Email" className="w-52 sm:w-96  h-8 p-2 border border-black border-solid"/>
           <input type="text" placeholder="Speak Your Thoughts.." className="w-52 sm:w-96 h-56 p-2 mt-3 border border-black border-solid"/>
    </div>
        <div className="mt-3">
    <Button theme='blue' className="p-5"> Send Message </Button>
    </div>
       </div>
       
        
    )

}

export default Contact

