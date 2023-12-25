import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen'>
      <div className="absolute  top-[5%] w-full py-10 flex justify-center text-zinc-100 font-semibold text-xl">Documents.</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-200 text-[12vw] tracking-tighter leading-none">Docs</h1>
      <h2 className="absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-200 text-lg tracking-tighter leading-none">@Azhar Shaikh</h2>
    </div>
  )
}

export default Background