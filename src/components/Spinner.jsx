import React from 'react';
import {Triangle } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <Triangle  
        type='Rings'
        color='#fd6500'
        height={60} width={60}
        className='m-5'
    />
    <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner