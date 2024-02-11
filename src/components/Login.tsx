import { ChangeEvent, MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utilities/authentication";
import { LoginApiResponse } from "../types/global";

interface ToastType {
  message : string, 
  type : 'success' | 'warn'
}

interface LoginProps {
  toastHandler : ({message, type} : ToastType) => void
}

const Login = ({toastHandler} : LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response : LoginApiResponse = await loginUser(email,password);
    if (response.status === 201 && response.token!==null) {
      const toastData : ToastType = {
        message : "Login Successful",
        type : 'success'
      }

    localStorage.setItem('lynkit-user', response?.token);
     toastHandler(toastData);
      console.log(response.data);
      setTimeout(()=>{
        navigate("/profile");
      },4000)
  }else {
    const toastData : ToastType = {
      message : "Login Unsuccesful",
      type : "warn"
    }
    toastHandler(toastData);
  }
}
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (

    <form
      className={`h-[95%] w-full px-[5%] text-white font-heading flex flex-col justify-center items-center gap-2`}
    >
      
      <h1 className={`text-3xl md:text-5xl font-body`}>Welcome back, <span className="gradient-text">Lynker</span></h1>
      <p className={` text-sm opacity-80`}>Login to get your Lynks</p>
      <div
        aria-label="email"
        className={`w-full mt-14 mb-4 flex items-center justify-between text-xl gap-2`}
      >
        <label htmlFor="email" className="font-body text-xl md:text-2xl">
          Email{" "}
        </label>{" "}
        <input
          className={`w-[70%] md:w-[60%] border-0 text-base px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleUpdate}
        />
      </div>
      <div
        aria-label="password"
        className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <label htmlFor="password" className="font-body text-xl md:text-2xl">
          Password{" "}
        </label>{" "}
        <input
          className={`w-[70%] md:w-[60%]  border-0 text-base px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={handleUpdate}
        />
      </div>
      <div
        className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <div className="h-full flex items-center">
          <input
            id="session-checkbox"
            type="checkbox"
            value=""
            className={`w-4 h-4bg-white rounded-md`}
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-xs sm:text-sm  text-gray-300 font-base"
          >
            Keep me signed in
          </label>
        </div>
        <Link to="/auth/forgot-password" className={`text-xs sm:text-sm gradient-text`}>Forgot Password</Link>
      </div>
      <button type="submit" className={`w-[80%] md:w-[50%] rounded-lg text-xl md:text-2xl text-center font-body  text-black hover:text-white py-4 bg-white transition hover:bg-transparent`} onMouseEnter={(e) => {
        e.currentTarget.classList.add("gradient");
      }} onMouseLeave={(e) => {
        e.currentTarget.classList.remove("gradient");
      }} onClick={handleLogin} >Login</button>
    </form>
  );
};

export default Login;
