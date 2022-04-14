import React from 'react';

function Skills(props){
    return(
        <div className="pt-14 pb-4">
<a name="skillssection"> </a>
<h2 className="font-bold text-3xl text-center m-8 underline"> His Skills </h2>
        <div className="flex mx-48 my-12 space-x-6 ">
       <div className=" px-24 py-6 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <img class="w-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="HTML icon"/>
        <p class="px-6 py-2">HTML</p>
        </div>

        <div className=" px-24 py-6 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <img class="w-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/888/888847.png" alt="CSS icon"/>
        <p class="px-7 py-2">CSS</p>
        </div>



        <div className=" px-20 py-6 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <img class="w-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Js icon"/>
        <p class="px-6 py-2">JavaScript</p>
        </div>

        </div>


<div className="flex mx-48 my-12 space-x-6">

<div className=" px-24 py-6 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <img class="w-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="React icon"/>
        <p class="px-4 py-2">React.js</p>
        </div>


        <div className="px-24 py-6 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <img class="w-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node icon"/>
        <p class="px-4 py-2">Node.js</p>
        </div>


        <div className=" px-20 py-6 shadow shadow-[#040c16] hover:scale-110 duration-500">
        <img class="w-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/1506/1506761.png" alt="Tailwind icon"/>
        <p class="px-9 py-2">Tailwind</p>
        </div>
</div>

</div>
    )
}

export default Skills;