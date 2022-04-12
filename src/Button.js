import React from "react";

function Button (props){

  let themeClass=" bg-yellow-300 text-black border border-double border-2 border-yellow-600 font-mono p-2 ";

  if(props.theme=== 'blue'){
    themeClass="bg-blue-500 shadow-gray-400 text-black border-black w-auto h-auto p-2";
  }


  return(
    <button onClick={props.onClick} className={"border border-solid " + themeClass + props.className}> {props.children} </button>
    
  );
}

export default Button;