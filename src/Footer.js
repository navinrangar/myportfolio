import React from 'react';

/* <div className="">
<p className="text-xs sm:text-xl font-bold text-white flex  justify-center mt-8"> Made with 
<img src="https://cdn-icons-png.flaticon.com/512/35/35538.png" className="h-4 w-4 sm:mx-2 animate-bounce"/> <a href="https://www.codeyogi.io" target="_blank" rel="noreferrer"> at CodeYogi </a> </p></div>
</div>   */


function Footer(props){
    return(
<>
    <div className="flex sm:flex mx-1 justify-between bg-red-800 pt-1 sm:pt-5 pb-2 pl-0 sm:pl-16 pr-2 sm:pr-16">

    <div className="text-white text-xs sm:text-lg ml-2 mt-2 sm:mt-9">
    <p>© 2022 Navin Rangar</p>
</div>

<div className="flex ml-0 sm:ml-52">
<div className="mt-6">
<a href="https://www.twitter.com/navinrangar" target="_blank" rel="noreferrer"> <img class="h-5 sm:h-12 animate-bounce sm:mr-2 hover:animate-" src="https://cdn.icon-icons.com/icons2/838/PNG/512/circle-twitter_icon-icons.com_66835.png"/> </a>
</div>


<div className="mt-6">
<a href="https://www.linkedin.com/in/navin-singh-rangar/" target="_blank" rel="noreferrer"> <img class="h-5 sm:h-12 animate-bounce sm:mr-2 hover:animate-" src="https://cdn.icon-icons.com/icons2/642/PNG/512/linkedin_icon-icons.com_59208.png"/></a>
</div>


<div className="mt-6">
<a href="https://github.com/navinsinghrangar" target="_blank" rel="noreferrer"> <img class="h-5 sm:h-12 animate-bounce sm:mr-2 hover:animate-" src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" /> </a>
</div>
</div>


<div className="">
<p className="text-xs sm:text-xl  text-white sm:flex sm:flex-row flex-col justify-center mt-4"> With
<img src="https://cdn-icons-png.flaticon.com/512/35/35538.png" className="h-4 w-4 sm:mx-2 animate-bounce"/> <a href="https://www.codeyogi.io" target="_blank" rel="noreferrer"> from CodeYogi </a> </p></div>
</div>


</>
    )
}

export default Footer;

