import React from "react";
import NavLink from './NavLink'

function Header(props){
    return( 
        <>
        
        <div className="flex justify-between bg-yellow-800 pt-5 pb-2 pl-9 pr-10">
     <img className=" w-16 h-16 pb-4 " src="https://cool-klepon-aae5cf.netlify.app/assets/logo.edc03ba5.webp" />
            <div className="flex space-x-9 pt-2">
                <NavLink className="text-xl"> Home </NavLink>
                <NavLink className="text-xl"> Projects </NavLink>
                <NavLink className="text-xl"> Clients </NavLink>
                <NavLink className="text-xl"> About </NavLink>
                <NavLink className="text-xl"> Contact </NavLink>
            </div>
        </div>
        </>
    )
}

export default Header