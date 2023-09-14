import { useState } from "react";
import Link from "../assets/logo.png";
import Metal from "../assets/metal.png";
import Glasscard from "../components/Glasscard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastType {
  message : string, 
  type : 'success' | 'warn'
}

const showToast = ({
  message,
  type,
} : ToastType) => {
  if(type==='success'){
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}
else if(type==='warn'){
  toast.warn(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}
}

const Auth = () => {
  const [authComponent, setAuthComponent] = useState(<Login toastHandler={showToast} />);
  const [isLogin, setIsLogin] = useState(true);
  const toggleComponent = () => {
    if (isLogin) {
      setAuthComponent(<Signup toastHandler={showToast} /> );
    } else {
      setAuthComponent(<Login toastHandler={showToast} />);
    }
    setIsLogin((prevValue) => {
      return !prevValue;
    });
  };


  return (
    <main
      className={`h-[90%] w-full px-5 md:px-10 py-5 flex justify-center items-center font-body relative object-contain overflow-hidden`}
    >
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
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
