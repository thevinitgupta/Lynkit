import React from 'react'

interface GlasscardProps {
  children : React.JSX.Element
}
const Glasscard : React.FC<GlasscardProps> = ({children} : GlasscardProps) => {
  return (
    <div className={`z-2 h-[80%] w-[85%] max-w-3xl md:max-w-xl min-w-[340px] bg-white/5 border-[1px] border-zinc-700 rounded-md backdrop-filter backdrop-blur-lg`}>
      {children}
    </div>
  )
}

export default Glasscard