import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import React from 'react';
import Image from 'next/image';
import CarImage from '@/public/hero.png';
import IconImage from '@/public/steering-wheel.svg'

interface CarCardProps {
  car: CarProps
}

export default function CarCard({car}:CarCardProps) {
  const { 
    city_mpg, 
    drive,
    make,
    model,
    transmission,
    year
  } = car;
  const carRent = calculateCarRent(city_mpg,year);
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>{make} {model}</h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='slef-start text-[14px] font-semibold'>
          $
        </span>
        <span className='slef-end text-[14px] font-semibold'>
          /day
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={CarImage} alt={make} fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='@/public/steering-wheel.svg' alt='Stering Wheel' width={20} height={20}/>
            <p className='text-[14px] '>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
