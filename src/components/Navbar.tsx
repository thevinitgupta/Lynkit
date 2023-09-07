import React from "react";
import Logo from "../assets/logo.png"
import {FaArrowTrendUp, FaGithub} from "react-icons/fa6"
import {BsPersonFill} from "react-icons/bs"

const Navbar : React.FC = () => {
  return (
    <nav className={`w-full h-[10%] px-5 md:px-10 py-5 border-b-[1px] border-zinc-500 flex flex-row items-center justify-between gap-4 md:gap-20 navbar`}>
        <div className={`h-full flex-shrink-0 `}>
        <a href='/' aria-label='Lynkit - URL Shortner' className={`flex items-center gap-2 h-full object-contain`}>
        <img src={Logo} className={`w-14 md:w-28 aspect-auto`} alt='logo'/>
        </a>
        </div>
        <ul aria-label='menu' className={`flex flex-1 justify-center gap-8 md:gap-20 items-center font-heading text-md md:text-lg`}>
              <li className={``}>
                <span className={`hidden md:inline-block`}>Trending</span>
                <FaArrowTrendUp className={`inline-block md:hidden`}/>
              </li>
              <li className={``}>
                <span className={`hidden md:inline-block`}>Code</span>
                <FaGithub className={`inline-block md:hidden`}/>
              </li>
              <li className={``}>
                <span className={`hidden md:inline-block`}>Profile</span>
                <BsPersonFill className={`inline-block md:hidden`}/>
              </li>
        </ul>
        <div className={`text-md md:text-xl text-zinc-950 py-2 px-4 rounded-full bg-white hover:bg-transparent transition-all cursor-pointer`} onMouseEnter={(e)=>{
          e.currentTarget.classList.add("gradient-text");
        }} onMouseLeave={(e)=>{
          e.currentTarget.classList.remove("gradient-text");
        }}>
            Create Lynk
        </div>
      </nav>
  )
}

export default Navbar