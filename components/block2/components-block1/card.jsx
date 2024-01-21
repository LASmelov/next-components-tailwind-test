import React from 'react';
import Image from 'next/image'

export default function Card(props) {
  return (
    <div className='flex justify-center items-center flex-col'>
    <button className="flex justify-center items-center m-4 gap-3 text-[13px] text-slate-950 font-normal w-[397px] h-[410px] bg-slate-400 ">
      
      <Image 
        src={props.imageSrc}
        alt="card img"
        width={props.imageWidth} 
        height={props.imageHeight} 
      />
      </button>
      {props.text}
    </div>
  );
}
