import React from 'react'

interface LynkDataProps {
    shortId : string;
    url : string;
    clickCount : number;
}
const LynkData = ({shortId, url, clickCount} : LynkDataProps) => {

  return (
    <div className={`w-full px-8 py-5 border-none border-b-2 border-zinc-500`}>
        <h1>{shortId}</h1>
        <p>{url}</p>
        <p>Clicks : {clickCount}</p>
    </div>
  )
}

export default LynkData