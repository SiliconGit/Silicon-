import React from 'react'
import { PORTFOLIO_TEXT } from '../constants'
import '../styles/effects.css'
import Image from 'next/image'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import web6 from '../assets/web6.png'

const FifthPage = () => {
  return (
    <section>
            <div className='text-center py-10'>
          <h3 className='text-3xl py-1 monsterrat text-teal-600'>Portfolio</h3>
          <p className='text-md py-2 leading-8 quicksand text-gray-800'>{PORTFOLIO_TEXT}</p>
        </div>

         <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/2 rounded-xl '>
            <Image src={web1} alt='WebImages' className='rounded-lg object-cover imgShadow2' width={'100'} height={'100'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1  rounded-xl '>
          <Image src={web2} alt='WebImages' className='rounded-lg object-cover imgShadow2' width={'100'} height={'100'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1 rounded-xl '>
          <Image src={web3} alt='WebImages' className='rounded-lg object-cover imgShadow2' width={'100'} height={'100'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1 rounded-xl '>
          <Image src={web4} alt='WebImages' className='rounded-lg object-cover imgShadow2' width={'100'} height={'100'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1 rounded-xl '>
          <Image src={web5} alt='WebImages' className='rounded-lg object-cover imgShadow2' width={'100'} height={'100'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1 rounded-xl '>
          <Image src={web6} alt='WebImages' className='rounded-lg object-cover imgShadow2' width={'100'} height={'100'} layout='responsive'/>
          </div>
         </div>
         
    </section>
  )
}

export default FifthPage