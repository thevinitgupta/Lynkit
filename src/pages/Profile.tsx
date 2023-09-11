import React from 'react'
import Link from "../assets/logo.png"
import Avatar from '../components/Avatar'
import AccountForm from '../components/AccountForm'
// import LynkData from '../components/LynkData'

const Profile = () => {
  return (
    <main className={`h-[90%] relative bg-cyan-950/20 w-full px-5 md:px-10 py-10 flex justify-between gap-10 font-body overflow-hidden`}>
        {/* background blurs */}
        <img src={Link} id="background-image" className={`w-[40%] -left-40 -bottom-24`}/>
        <img src={Link} id="background-image" className={`w-[40%] -right-40 -top-24`}/>

         {/* left section */}
        <section className={`h-full flex-[0.25] flex flex-col justify-center items-center gap-4`}>
        <Avatar url={'https://avatars.githubusercontent.com/u/65801700?v=4'} borderClass={'border-red-400'}/>
        <div className={` p-2 text-4xl mb-4 text-white/80 text-left`}>Vinit Gupta </div>
        <div className={`font-heading p-2 text-xl text-white/80 text-left`}>Lynks </div>
        <div className={`font-heading p-2 text-xl text-red-500 text-left`}>Logout </div>
        </section>

        {/* // right section */}
        <section className={`h-full flex-1 border py-5 px-10 rounded-xl border-zinc-400`}>
           {/* { 
           [
            {id : "sdg2354s", url : "http://hello.com", clicks : 40}, 
            {id : "sdg2354s", url : "http://hello.com", clicks : 40},
            {id : "sdg2354s", url : "http://hello.com", clicks : 40}
            ].map((lynkObj, index)=> <LynkData key={index+lynkObj.id} shortId={lynkObj.id} url={lynkObj.url} clickCount={lynkObj.clicks}/>)
            } */}
            <header className={`text-5xl mt-2 mb-12 font-hero text-center`}>Edit your Lynkit Account 🖊</header>
            <AccountForm name={'Vinit Gupta'} email={"thevinitgupta@gmail.com"} emailVerified={false}/>
        </section>
    </main>
  )
}

export default Profile