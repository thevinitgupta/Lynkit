import React from 'react'

interface LynkCardProps {
    shortId : string;
    url : string;
    clickCount : number;
    index : number;
}
const LynkCard = ({shortId, url, clickCount, index} : LynkCardProps) => {

  return (
    <div className={`w-full h-min px-8 py-5 border rounded-md border-zinc-500`}>
        <header className={`font-heading text-2xl my-3 text-white/80`}><span className={`mr-3`}>{index+1}.</span>{shortId}</header>
        <p>{url}</p>
        <p>Clicks : {clickCount}</p>
    </div>
  )
}

export default LynkCard