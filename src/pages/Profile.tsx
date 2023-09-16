import React, { MouseEvent, useState } from "react";
import Link from "../assets/logo.png";
import Avatar from "../components/Avatar";
import AccountForm from "../components/AccountForm";
import LynkList from "../components/LynkList";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
// import LynkData from '../components/LynkData'

type ActiveSection = "profile" | "lynks";
type UserData = {
  name : string,
  email : string,
  _id : string,
  message : string,
  verified : boolean
}

const Profile = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("profile");

  const getUserData = async() : Promise<UserData> => {
    try {
      const response : AxiosResponse = await axios.get("http://localhost:3003/user", {
        headers : {
          "Content-Type" : "application/json",
        },
        withCredentials: true,
      });
      const {status, data } = response;
      console.log(data)
      if(status!==200 || !data.user){
        const nullUser : UserData = {
          name : "",
          email : "",
          _id : "",
          message : data.message
        };
        return nullUser;
      }
      return data.user as UserData;
      
    } catch (error) {
      console.log(error);
      throw new Error("Data Fetching Failed")
    }
  }
  const {data, isLoading, isError} = useQuery<UserData>(
    {
      queryKey : ["user"],
      queryFn : getUserData,
      
    }
  )
  const handleSection = (e: MouseEvent<HTMLDivElement>) => {
    const label = e.currentTarget.attributes[1].value;

    if (label === 'profile-nav') {
      setActiveSection("profile");
    }
    else if (label === "lynks-nav") {
      setActiveSection("lynks");
    }
  }

  if(isLoading){
    return <div className="text-5xl">Loading...</div>
  }

  if(isError){
    return <div className="text-5xl">Error loading Data</div>
  }


  return (
    <main
      className={`h-[90%] relative bg-cyan-950/20 w-full px-5 md:px-10 py-10 flex justify-between gap-10 font-body overflow-hidden`}
    >

      {/* background blurs */}
      <img
        src={Link}
        id="background-image"
        className={`w-[40%] -left-40 -bottom-24`}
      />
      <img
        src={Link}
        id="background-image"
        className={`w-[40%] -right-40 -top-24`}
      />

      {/* left section */}
      <section
        className={`h-full flex-[0.25] flex flex-col justify-center items-center gap-4`}
      >
        <Avatar
          url={"https://avatars.githubusercontent.com/u/65801700?v=4"}
          borderClass={"border-red-400"}
        />
        <div className={` p-2 text-4xl mb-4 text-white/80 text-left cursor-pointer`} aria-label="profile-nav" onClick={handleSection}>
          {data.name}
        </div>
        <div
          className={`cursor-pointer font-heading p-2 text-xl text-white/80 text-left`} onClick={handleSection} aria-label="lynks-nav"
        >
          Lynks{" "}
        </div>
        <div className={`font-heading p-2 text-xl text-red-500 text-left cursor-pointer`}>
          Logout{" "}
        </div>
      </section>

      {/* // right section */}
      <section
        className={`h-full flex-1 border py-5 px-10 rounded-xl border-zinc-400 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-corner-red-400 scrollbar-track-gray-900`}
      >
        {/*  */}
        {activeSection === "profile" ? (
          <>
            <header className={`text-5xl mt-2 mb-12 font-hero text-center`}>
              Edit your Lynkit Account 🖊
            </header>
            <AccountForm
              user={data}
            />
          </>
        ) : (
          <>
            <LynkList />
          </>
        )}
      </section>
    </main>
  );
};

export default Profile;
