import React, { useEffect, useRef, useState } from 'react'

function Header() {
    const headerRef = useRef();
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
               headerRef.current.style.background = "#0c1524";
               headerRef.current.style.padding = "20px";
            }
            else{
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "60px";
            }
        })
    });
    const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  return (
    <header 
    ref={headerRef}
    className="pt-[60px] fixed top-[0] left-[0] w-screen z-50 transition-all duration-200"
    >
        <div className="container pr-[100px] pl-[100px] mx-auto  flex justify-between items-center gap-[30px] sm:gap-0  flex-col  sm:flex-row">
      <a href="/"> 
      <img src="/src/assets/logo.svg" alt="logo-img" />
      </a>
      <ul className='flex items-center gap-[50px]'>
       {links.map((link)=>(
        <li key={link}>
            <a href={`/${link.toLowerCase()}`} className="text-white opacity-[0.9] hover:opacity-[0.5] hover:underline hover:opacity duration-200">{link}</a>
        </li>
       ))}
      </ul>
      </div>
    </header>
  )
}

export default Header