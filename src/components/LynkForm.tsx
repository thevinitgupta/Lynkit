import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { TbSquareRoundedPlusFilled } from "react-icons/tb"
import { FiCopy } from "react-icons/fi"
import { useCreateLynk } from '../utilities/lynks';
import { AxiosResponse } from 'axios';


const LynkForm = () => {
  const [original, setOriginal] = useState<string>("");
  const [urlError, setUrlError] = useState<{ exists: Boolean, message: string }>({
    exists: false,
    message: "Wrong"
  });
  const [shortLynk, setShortLynk] = useState<string | null>(null);

  const { mutate, isError: lynkCreationError, isSuccess: lynkCreationSuccess, isLoading: creatingLynk } = useCreateLynk();

  const successHandler = (data : AxiosResponse) => {
    setShortLynk(data?.data?.data as string);
  }

  const handleLynk = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate(original, {
      onSuccess : successHandler
    });
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLynk!);
    const lynkText = shortLynk!;
    setShortLynk("Copied to clipboard ✅");
    setTimeout(()=> {
      setShortLynk(lynkText);
    },3000)
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "og") setOriginal(e.target.value);
  };


  if(creatingLynk) {
    return <section className={`group h-4/5 w-[95%] max-w-[40rem] mx-auto my-10 px-5 py-5 border border-zinc-600/30 rounded-xl overflow-hidden relative`}>
      <p className='font-2xl font-heading'>
        Creating Lynk...
        </p>
    </section>
  }

  else if(lynkCreationError){
    return <section className={`group h-4/5 w-[95%] max-w-[40rem] mx-auto my-10 px-5 py-5 border border-zinc-600/30 rounded-xl overflow-hidden relative`}>
      <p className='text-2xl font-heading text-red-500'>
        Error while creating Lynk.
        </p>
    </section>
  }

  if(lynkCreationSuccess){
    return <section className={`group h-4/5 w-[95%] max-w-[40rem] mx-auto my-10 px-5 py-5 border border-zinc-600/30 rounded-xl overflow-hidden flex flex-col justify-center gap-5`}>
      <p className='mt-10 text-center text-3xl font-heading'>
        Lynk Created Successfully
        </p>
        <div className='mx-auto w-4/5 border border-zinc-400/20 rounded-md p-4 flex justify-between items-center cursor-pointer' onClick={handleCopy}>
        <span className='font-xl font-hero mr-3 text-zinc-400'>{shortLynk}</span>
        <FiCopy/>
        </div>
    </section>
  }
  else 
  return (
    <section className={`group h-4/5 w-[95%] max-w-[40rem] mx-auto my-10 px-5 py-5 border border-zinc-600/30 rounded-xl overflow-hidden relative`}>
      <div
        className={`blur-op w-[60%] h-[200%] absolute top-[-30%] left-[-30%] rotate-45 group-hover:bg-gradient-to-br from-slate-600/30 to-slate-900/30 group-hover:animate-glass-shine fill-mode-forwards`}
      />
      <p className={`text-4xl my-2 text-center font-hero `}>
        Create your Lynk 🔗
      </p>
      <form className={`h-5/6 w-full`}>
        <div
          aria-label="original url"
          className={`w-full mt-4 mb-6 flex items-center justify-between text-xl gap-4 relative`}
        >
          {
            urlError.exists && <span className={`absolute bottom-4 right-0 bg-transparent rotate-45 font-heading text-sm text-red-500`}>{
              <TbSquareRoundedPlusFilled />
            }</span>
          }
          <label htmlFor="name" className="font-body text-xl md:text-2xl">
            Original URL
          </label>{" "}
          <input
            name="og"
            type="text"
            value={original}
            onChange={handleChange}
            className={`w-[70%] md:w-[60%] font-heading border-0 text-lg px-[2%] py-[1%] bg-transparent active: outline-none active: border-b border-white/30`}
          />
        </div>
        <button type='submit' onClick={handleLynk} className={`w-[80%] md:w-[30%] min-w-[200px] rounded-lg text-xl md:text-2xl my-5 mt-10 mx-[10%] md:mx-[35%] text-center font-body  text-black hover:text-white py-4 bg-white transition-all hover:bg-transparent`} onMouseEnter={(e) => {
          e.currentTarget.classList.add("gradient");
        }} onMouseLeave={(e) => {
          e.currentTarget.classList.remove("gradient");
        }}>Create</button>
      </form>
    </section>
  )
}

export default LynkForm