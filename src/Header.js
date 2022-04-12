import React from "react";
import NavLink from './NavLink'

function Header(props){
    return( 
        <>
        
        <div className="flex items-center justify-between bg-red-800 pt-5 pb-2 pl-9 pr-10 sm: pl-1 pr-1 flex-col">
     <img className=" w-16 h-16 pb-4 sm: w-12 h-12" src="https://cool-klepon-aae5cf.netlify.app/assets/logo.edc03ba5.webp" />
            <div className="flex space-x-9 pt-2 sm: space-x-2 pr-2">
                <NavLink className="text-xl sm:text-sm"> Front </NavLink>
                <NavLink className="text-xl sm:text-sm"> Projects </NavLink>
                <NavLink className="text-xl sm:text-sm"> Clients </NavLink>
                <NavLink className="text-xl sm:text-sm"> About </NavLink>
                <NavLink className="text-xl sm:text-sm"> Contact </NavLink>
            </div>
        </div>
        </>
    )
}

export default Header