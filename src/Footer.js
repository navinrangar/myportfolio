import React from 'react';


function Footer(props){
    return(
<>
        <div className="flex shadow-inner justify-between bg-red-800 pt-5 pb-2 pl-16 pr-16">


        <div className="text-white mt-9">
    <p>© 2022 Navin Rangar</p>
</div>

<div className="flex ml-52">
<div className="mt-6">
<a href="https://www.twitter.com/navinrangar" target="_blank"> <img class="h-12 animate-bounce mr-2 hover:animate-" src="https://cdn.icon-icons.com/icons2/838/PNG/512/circle-twitter_icon-icons.com_66835.png"/> </a>
</div>


<div className="mt-6">
<a href="https://www.linkedin.com/in/navin-singh-rangar/" target="_blank"> <img class="h-12 animate-bounce mr-2 hover:animate-" src="https://cdn.icon-icons.com/icons2/642/PNG/512/linkedin_icon-icons.com_59208.png"/></a>
</div>


<div className="mt-6">
<a href="https://github.com/navinsinghrangar" target="_blank"> <img class="h-12 animate-bounce mr-2 hover:animate-" src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" /> </a>
</div>
</div>


<div >
<p className="text-xl font-bold text-white flex items-center justify-center mt-8"> Made with 
<img src="https://cdn-icons-png.flaticon.com/512/35/35538.png" className="h-4 w-4 mx-2 animate-bounce"/> <a href="https://www.codeyogi.io" target="_blank"> at CodeYogi </a> </p></div>
</div>


</>
    )
}

export default Footer;

