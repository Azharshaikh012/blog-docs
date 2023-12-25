import React, { useRef } from 'react';
import { Card } from './Card';

const ForGround = () => {
  const ref = useRef(null)
  const data =[
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "0.9MB", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor:"blue"}},
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "0.4MB", close: true, tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" } },
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "2MB", close: false, tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" } },
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "2MB", close: false, tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" } },
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "2MB", close: false, tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" } },
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "0.9MB", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
    { desc: " Lorem ipsum dolor sit, villa occurred consectetur.!", fileSize: "0.9MB", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
  ]
  return (
    <div ref={ref} className="w-full h-full fixed z-[3] top-0 left-0 gap-10 flex flex-wrap">
    {data.map((item, index)=>(
   <Card data={item} reference={ref}/>

    ))}

    </div>
  )
}

export default ForGround