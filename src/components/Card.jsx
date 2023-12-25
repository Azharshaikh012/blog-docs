import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

export const Card = ({ data, reference }) => {
  return (
    <motion.di drag dragConstraints={reference} whileDrag={{scale:1.2}} className="flex-shrink-0 relative w-48 h-60 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
    <FaFileAlt/>
    <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>
    <div className="footer  absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center mb-3 py-3 px-6 text-white">
      <h4 className="">{data.fileSize}</h4>
      <div className="">
            {data.close ? <IoIosCloseCircleOutline /> : <MdDownloadForOffline />}
        
      </div>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
      <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
    </div>

          )}

    </div>

    </motion.di>
  )
}
