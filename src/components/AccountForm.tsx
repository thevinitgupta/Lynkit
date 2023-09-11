import React, { ChangeEvent } from "react";
import { useState } from "react";

interface AccountFormProps {
  name: string;
  email: string;
  emailVerified: boolean;
}

const AccountForm = (props: AccountFormProps) => {
  const [name, setName] = useState(props.name);
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(!props.emailVerified);
  const handleVerification = () => {
    setVerify(!verify);
  };
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "changePassword") {
      setPassword(e.target.value);
    }
    handleVerification();
  };
  return (
    <form className={`w-full`}>
      <div
        aria-label="update name"
        className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <label htmlFor="name" className="font-body text-xl md:text-2xl">
          Change Name{" "}
        </label>{" "}
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleUpdate}
          className={`w-[70%] md:w-[60%]  border-0 text-lg px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
        />
      </div>
      <div
        aria-label="change password"
        className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <label
          htmlFor="changePassword"
          className="font-body text-xl md:text-2xl"
        >
          Update Password{" "}
        </label>{" "}
        <input
          type="password"
          value={password}
          name="changePassword"
          onChange={handleUpdate}
          className={`w-[70%] md:w-[60%]  border-0 text-lg px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
        />
      </div>
      <div
        aria-label="verify email"
        className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <span className="font-body flex-[0.4] text-xl md:text-2xl">
          Email Verification{" "}
        </span>
        <div className={`flex-1 flex justify-end items-center gap-4`}>
          {props.email}
          <div
            className={`cursor-pointer text-gray-100 px-4 py-2 font-heading border-2 rounded-lg ${
              verify ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {verify ? "Verify 🚨" : "Verified ✅"}{" "}
          </div>
        </div>
      </div>
      <div
        aria-label="change profile picture"
        className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4`}
      >
        <span className="font-body flex-[0.4] text-xl md:text-2xl">
          Profile Picture{" "}
        </span>
        <div className={`flex-1 flex flex-col md:flex-row justify-end items-center gap-4 text-lg`}>
          <input
            className="block w-[50%] text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            accept=".png, .jpg"
          />
          <p
            className="mt-1 text-xs font-heading text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 600x600px).
          </p>
        </div>
      </div>
      <button type="submit" className={`w-[80%] md:w-[30%] min-w-[200px] rounded-lg text-xl md:text-2xl my-5 mt-10 mx-[10%] md:mx-[35%] text-center font-body  text-black hover:text-white py-4 bg-white transition hover:bg-transparent`} onMouseEnter={(e)=>{
          e.currentTarget.classList.add("gradient");
        }} onMouseLeave={(e)=>{
          e.currentTarget.classList.remove("gradient");
        }}>Save Changes</button>
    </form>
  );
};

export default AccountForm;
