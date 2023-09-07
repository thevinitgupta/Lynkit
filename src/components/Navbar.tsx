import React from "react";
import Logo from "../assets/logo.png"

const Navbar : React.FC = () => {
  return (
    <nav className={`w-full h-[10%] px-10 py-5 border-b-[1px] border-zinc-500 flex flex-row items-center justify-between gap-4 md:gap-20 navbar`}>
        <div className={`h-full flex-shrink-0 `}>
        <a href='/' aria-label='Lynkit - URL Shortner' className={`flex items-center gap-2 h-full object-contain`}>
        <img src={Logo} className={` w-28 aspect-auto`} alt='logo'/>
        </a>
        </div>
        <ul aria-label='menu' className={`flex flex-1 justify-center sm:gap-8 md:gap-20 items-center font-heading text-md md:text-lg`}>
              <li className={``}>Shorten</li>
              <li className={``}>Trending</li>
              <li className={``}>Profile</li>
        </ul>
        <div className={`text-xl text-zinc-950 py-2 px-4 rounded-full bg-white hover:bg-transparent transition-all cursor-pointer`} onMouseEnter={(e)=>{
            e.target.classList.add("gradient-text");
        }} onMouseLeave={(e)=>{
          e.target.classList.remove("gradient-text");
        }}>
            Create Lynk
        </div>
      </nav>
  )
}

export default Navbar