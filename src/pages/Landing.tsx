import React from 'react'

import Light from "../assets/light.png"
import Link from "../assets/logo.png"
const Landing : React.FC = () => {
  return (
    <main className={`h-[90%] w-full px-5 md:px-10 py-5 flex justify-between font-body`}>
          <hgroup className={`w-full md:flex-[0.5] flex flex-col justify-center gap-8 text-left text-6xl relative z-1`}>
          <img src={Link} alt="background light" className={`md:hidden`} id="background-image"/>

            <h1 className={`text-6xl md:text-8xl gradient-text font-[600] font-logo`}>
              Lynkit
            </h1>
            <h2 className={`text-4xl md:text-6xl`}>
              Blazing Fast URL Shortening
            </h2>
            <h4 className={`text-xl md:text-3xl text-gray-600`}>Get ready for Short Lynks that can finally catch upto You ⚡</h4>
          </hgroup>
          <div className={`w-0 md:flex-[0.4] flex items-center justify-center object-contain relative z-0`}>
            <img src={Light} alt="lightning" className={`aspect-square w-full `} />
            <img src={Link} alt="background light" className={``} id="background-image"/>
          </div>
    </main>
  )
}

export default Landing