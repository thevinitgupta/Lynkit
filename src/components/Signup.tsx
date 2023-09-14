import React from "react";

interface ToastType {
  message : string, 
  type : 'success' | 'warn'
}

interface SignupProps {
  toastHandler : ({message, type} : ToastType) => void
}

const Signup = ({toastHandler} : SignupProps) => {
  console.log(toastHandler);
  return (
    <form
      className={`h-[95%] w-full px-[5%] text-white font-heading flex flex-col justify-center items-center gap-2`}
    >
      <h1 className={`text-3xl md:text-5xl font-body`}>
        Become a <span className="gradient-text">Lynker</span>
      </h1>
      <p className={` text-sm opacity-80`}>Create account and Lynks</p>
      <div
        aria-label="name"
        className={`w-full mt-8 mb-4 flex items-center justify-between text-xl gap-2`}
      >
        <label htmlFor="name" className="font-body text-xl md:text-2xl">
          Name
        </label>
        <input
          className={`w-[70%] md:w-[60%] border-0 text-base px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          type="text"
          placeholder="Enter your name"
          name="name"
        />
      </div>
      <div
        aria-label="email"
        className={`w-full mb-4 flex items-center justify-between text-xl gap-2`}
      >
        <label htmlFor="email" className="font-body text-xl md:text-2xl">
          Email{" "}
        </label>{" "}
        <input
          className={`w-[70%] md:w-[60%] border-0 text-base px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          type="email"
          placeholder="Enter your email"
          name="email"
        />
      </div>
      <div
        aria-label="password"
        className={`w-full mb-4 flex items-center justify-between text-xl gap-4`}
      >
        <label htmlFor="password" className="font-body text-xl md:text-2xl">
          Password{" "}
        </label>{" "}
        <input
          className={`w-[70%] md:w-[60%]  border-0 text-base px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          type="password"
          placeholder="Enter your password"
          name="password"
        />
      </div>
      <div
        aria-label="confirm-password"
        className={`w-full mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <label
          htmlFor="confirm-password"
          className="font-body text-xl md:text-2xl"
        >
          Confirm
        </label>
        <input
          className={`w-[70%] md:w-[60%]  border-0 text-base px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          type="password"
          placeholder="Enter the password again"
          name="confirm-password"
        />
      </div>
      <button
        type="submit"
        className={`w-[80%] md:w-[50%] mb-2 rounded-lg text-xl md:text-2xl text-center font-body  text-black hover:text-white py-4 bg-white transition hover:bg-transparent`}
        onMouseEnter={(e) => {
          e.currentTarget.classList.add("gradient");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.remove("gradient");
        }}
      >
        Signup
      </button>
    </form>
  );
};

export default Signup;
