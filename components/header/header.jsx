import React from 'react';
import Image from 'next/image'
import Button from './components-header/button';
import Logo from '@/public/Image/Logo_-_Good4Me_140x 1.png'
import Loupe from "@/public/Image/loupe.png"
import Cart from '@/public/Image/cart.png'

export default function Header() {
  return (
    <div className="h-[100px] flex justify-around items-center">
      <div>
      <Image
        src={Logo}
        alt="My Image"
        width={198} 
        height={47} 
      />
      </div>

      <div>
        <Button text="HOME" />
        <Button text="SHOP" />
        <Button text="FAQ'S" />
        <Button text="STOCKISTS" />
        <Button text="WHOLESALE" />
        <Button text="CONTACT" />
      </div>

      <div className="header__icons">

        <button className="p-2">
        <Image
        src={Loupe}
        alt="My Image"
        width={22} 
        height={22} 
      /> 
      </button>
        
      <button className="p-2">
        <Image
        src={Cart}
        alt="My Image"
        width={17} 
        height={24} 
      /> 
      </button>
      </div>
    </div>
  );
}
