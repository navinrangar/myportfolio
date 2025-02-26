import React from 'react'

function NavLink(props){
    return(
<a href={props.href} className= {"font-semibold " + props.className }> {props.children} </a>
    )
}

export default NavLink