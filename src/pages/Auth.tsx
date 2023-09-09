import { useState } from "react";
import Link from "../assets/logo.png";
import Metal from "../assets/metal.png";
import Glasscard from "../components/Glasscard";
import Login from "../components/Login";
import Signup from "../components/Signup";
const Auth = () => {
  const [authComponent, setAuthComponent] = useState(<Login />);
  const [isLogin, setIsLogin] = useState(true);
  const toggleComponent = () => {
    if (isLogin) {
      setAuthComponent(<Signup/> );
    } else {
      setAuthComponent(<Login />);
    }
    setIsLogin((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <main
      className={`h-[90%] w-full px-5 md:px-10 py-5 flex justify-center items-center font-body relative object-contain overflow-hidden`}
    >
      <img
        src={Metal}
        className={`hidden md:inline-block absolute z-0 top-[0px] right-10 w-[40%] rotate-[-25deg]`}
      />
      <img
        src={Metal}
        className={`absolute z-0 bottom-[-100px] md:bottom-[-40px] left-20 w-[60%] md:w-[30%] min-w-[340px] rotate-z-85`}
      />
      <img
        src={Link}
        className={`absolute bottom-[-50px] left-[-90px] h-[40%] blur-bg`}
      />
      <img src={Link} className={`absolute right-[-90px] h-[40%] blur-bg`} />
      <Glasscard
        children={
          <>
            {authComponent}
            {isLogin ? (
              <p className={`text-center font-heading text-white/90`}>
                Don't have an account? <span onClick={toggleComponent} className="gradient-text cursor-pointer">Sign Up</span>
              </p>
            ) : (
              <p className={`text-center font-heading text-white/90`}>
                Already have an account? <span onClick={toggleComponent} className="gradient-text cursor-pointer">Login</span>
              </p>
            )}
          </>
        }
      />
    </main>
  );
};

export default Auth;
