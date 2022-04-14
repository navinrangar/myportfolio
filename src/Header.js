import React from "react";
import NavLink from './NavLink'

function Header(props){
    return( 
        <>
        
        <div className="w-screen h-32 flex flex-col pt-3 bg-yellow-400 sm:flex sm:flex-row sm:justify-between sm:pt-9 sm:pb-2 pl-1 sm:pl-9 pr-32 fixed">
     <img className="w-16 h-16 sm:w-24 sm:h-24 sm:pb-8 ml-28 sm:ml-9" src="https://cool-klepon-aae5cf.netlify.app/assets/logo.edc03ba5.webp" />
            <div className="flex space-x-2 mt-3 mr-1 ml-1 sm:space-x-10 sm:pt-2 sm:pr-12 pr-16 sm:pl-1">
                <NavLink href="#frontsection" className="text-sm sm:text-2xl"> Front </NavLink>
                <NavLink href="#aboutsection" className="text-sm sm:text-2xl"> About </NavLink>
                <NavLink href="#skillssection" className="text-sm sm:text-2xl"> Skills </NavLink>
                <NavLink href="#projectssection" className="text-sm sm:text-2xl"> Projects </NavLink>
                <NavLink href="#connectsection" className="text-sm sm:text-2xl"> Connect </NavLink>
            </div>
        </div>
        </>
    )
}

export default Header