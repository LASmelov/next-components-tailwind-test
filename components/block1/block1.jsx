import React from 'react';
import Image from 'next/image'

import BackgroundImageBlock1 from '@/public/Image/backgoundImageBlock1.png'
import BackgroundImageBlock1Bottom from '@/public/Image/backgoundImageBlock1Bottom.png'

export default function block1() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '641px' }}>

    <Image
      src={BackgroundImageBlock1}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      quality={100}
    />

<div style={{ position: 'absolute', bottom: '-40px', width: '100%', height: '129px' }}>
<Image
      src={BackgroundImageBlock1Bottom}
      alt="Background Image"
     
      objectFit="cover"
      quality={100}

       width={1920} 
        height={47} 
    />

    </div>


      <div className='relative flex items-start justify-center flex-col w-[550px] top-[20%] left-[55%] gap-4'>

      <aside className='w-[120px] text-[26px] font-normal text-orange-500'>
      Good4Me
        </aside>
        <h1 className='text-[56px] font-semibold text-slate-900'>
        Apple Cider Vinegar
      </h1>
      <h5 className=' text-[29px] font-normal text-slate-600'>
      Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. 
      </h5>
      <button className='w-[140px] h-[47px] bg-orange-500 text-white'>
      Shop Now
      </button>
      </div>


   
  </div>

  )
}
