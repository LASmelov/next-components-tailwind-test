import React from 'react'
import Image from 'next/image'
import Card from './components-block1/card'

import cardimg1 from '@/public/Image/cardimg1.png'
import cardimg2 from '@/public/Image/cardimg2.png'
import cardimg3 from '@/public/Image/cardimg3.png'
import cardimg4 from '@/public/Image/cardimg4.png'


export default function block2() {
  return (
    <section className='flex justify-center items-center flex-col  mt-10'>
        <div className='flex justify-center items-center flex-col w-[759px] gap-3'>
<h2 className=' text-[46px] font-normal text-slite-900'>
GOOD4ME DEAL
</h2>

<hr className='w-[127px] h-[4px] bg-orange-500'></hr>



<h5 className='text-[18px] font-normal text-slite-700'>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</h5>
</div>

<div className='flex justify-center flex-row flex-wrap m-7'>
        <Card 
          text="MULTI-VITAMIN: EVERYDAY WELLNESS" 
          imageSrc={cardimg1}
          imageWidth={312} 
          imageHeight={320} 
        />

<Card 
          text="FULL RANGE VALUE PACK (SAVE 33%)" 
          imageSrc={cardimg2}
          imageWidth={395} 
          imageHeight={408} 
        />

<Card 
          text="VITAMIN C: IMMUNITY SUPPORT " 
          imageSrc={cardimg3}
          imageWidth={312} 
          imageHeight={320} 
        />

<Card 
          text="IRON: ENERGY SUPPORT" 
          imageSrc={cardimg4}
          imageWidth={395} 
          imageHeight={408} 
        />
</div>
    </section>
  )
}
