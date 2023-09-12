import React from 'react'

interface LynkCardProps {
    shortId : string;
    url : string;
    clickCount : number;
}
const LynkCard = ({shortId, url, clickCount} : LynkCardProps) => {

  return (
    <div className={`w-full h-min px-8 py-5 border rounded-md border-zinc-500 card`} 
>
        <div className='content h-full w-full'>
        <header className={`font-heading text-2xl my-3 text-white/80`}><span className={`text-white`}>Short : </span>{shortId}</header>
        <p className={`my-4`}><span className={`text-white text-xl `}>Original :</span> {url}</p>
        <p className={`my-4`}><span className='text-xl text-white'>Clicks :</span> {clickCount}</p>
        </div>
        
    </div>
  )
}

export default LynkCard