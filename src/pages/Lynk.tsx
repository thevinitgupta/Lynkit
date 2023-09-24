import React from 'react';
import Link from "../assets/logo.png";
import LynkForm from '../components/LynkForm';

const Lynk : React.FC = () => {
  return (
    <main className={`h-[90%] relative bg-cyan-950/20 w-full px-5 md:px-10 py-10 flex flex-col sm:flex-row justify-between gap-10 font-body overflow-hidden`}>
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
      <LynkForm/>
    </main>
  )
}

export default Lynk