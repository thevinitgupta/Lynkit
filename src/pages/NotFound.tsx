
import gif from "../assets/404.gif"
import Link from "../assets/logo.png"

const NotFound : React.FC= () => {
  return (
    <main className={`h-[90%] w-full px-5 md:px-10 py-5 flex justify-between font-body`}>
          <hgroup className={`w-full md:flex-[0.5] flex flex-col justify-center gap-8 text-left text-6xl relative z-1`}>
          <img src={Link} alt="background light" className={`bg-center md:hidden`} id="background-image"/>

            <h1 className={`text-6xl md:text-8xl gradient-text font-[600] font-logo`}>
            Are you Lost?
            </h1>
            <h2 className={`text-4xl md:text-6xl`}>
              Login to create Lynks
            </h2>
            {/* <h4 className={`text-xl md:text-3xl text-gray-600`}>Get ready for Short Lynks that can finally catch upto You ⚡</h4> */}
          </hgroup>
          <div className={`w-0 md:flex-[0.4] h-full grid place-items-center object-contain z-0`}>
            <img src={gif} alt="lightning" className={`aspect-square w-full`} />
          </div>
    </main>
  )
}

export default NotFound