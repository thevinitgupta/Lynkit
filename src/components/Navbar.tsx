import React from "react";
import Logo from "../assets/logo.png"
import {FaArrowTrendUp, FaGithub} from "react-icons/fa6"
import {BsPersonFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProfileData, getUserData } from "../utilities/user";

const Navbar : React.FC = () => {
  const {data, isError} = useQuery<ProfileData>(
    {
      queryKey : ["user"],
      queryFn : getUserData,
      notifyOnChangeProps : ['data', 'error'],
      staleTime : 30*60*1000
    }
  )
  return (
    <nav className={`w-full h-[10%] px-5 md:px-10 py-5 border-b-[1px] border-zinc-500 flex flex-row items-center justify-between gap-4 md:gap-20 navbar`}>
        <div className={`h-full flex-shrink-0 `}>
        <Link to='/' aria-label='Lynkit - URL Shortner' className={`flex items-center gap-2 h-full object-contain`}>
        <img src={Logo} className={`w-14 md:w-28 aspect-auto`} alt='logo'/>
        </Link>
        </div>
        <ul aria-label='menu' className={`flex flex-1 justify-center gap-8 md:gap-20 items-center font-heading text-md md:text-lg`}>
        <Link  to="/trending" className={``}>
                <span className={`hidden md:inline-block`}>Trending</span>
                <FaArrowTrendUp className={`inline-block md:hidden`}/>
              </Link>
              <Link  to="https://github.com/thevinitgupta" className={``}>
                <span className={`hidden md:inline-block`}>Code</span>
                <FaGithub className={`inline-block md:hidden`}/>
              </Link>
              <Link to={!data || isError ? "/auth" : "/Profile"} className={``}>
                <span className={`hidden md:inline-block`}>{!data || isError  ? "Login" : "Profile"}</span>
                <BsPersonFill className={`inline-block md:hidden`}/>
              </Link>
        </ul>
        <Link to="/create" className={`text-md md:text-xl text-zinc-950 py-2 px-4 rounded-full bg-white hover:bg-transparent transition-all cursor-pointer`} onMouseEnter={(e)=>{
          e.currentTarget.classList.add("gradient-text");
        }} onMouseLeave={(e)=>{
          e.currentTarget.classList.remove("gradient-text");
        }}>
            Create Lynk
        </Link>
      </nav>
  )
}

export default Navbar