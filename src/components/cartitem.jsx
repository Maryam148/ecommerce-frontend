import bin_icon from '../assets/bin_icon.png';
import { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../cartContext';
const CartItem = (props) => {
   

    const {removeFromCart, inc, dec} = useContext(cartContext)
    const handleDel = (e) => {
        e.preventDefault() // prevents <Link> from navigating
        removeFromCart(props.id)
    };

    
    
    return (
        <div className='text-gray-800 '>
        <div className='flex items-center gap-4 flex-row'>
        <img className='h-30 md:h-20 md:w-18' src={props.image[0]} alt={props.name} />
        <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] w-full gap-2'>
        <div className='flex flex-col gap-1 md:gap-2'><p className=' text-bold'>{props.name}</p>        
        <p className='text-sm font-medium'>Size: ${props.size}</p>
        <button onClick={handleDel} className=' cursor-pointer'><img className=" w-4 h-4" src={bin_icon}/></button>
        </div>
        
        <div>
            <p>${props.price}</p>
        </div>
        <div className='flex gap-2 flex-row'>
            <button  onClick={() => dec(props.id)} className='h-5 w-5 bg-gray-900 rounded-full text-white px-1'>-</button>
            <p>{props.quantity}</p>
            <button onClick={() => inc(props.id)} className=' h-5 w-5 bg-gray-900 rounded-full text-white px-1'>+</button>
            
        </div>
        <div className='hidden md:block'> 
            ${props.quantity* props.price}
        </div>
        </div>
        </div>

        </div>
    )
}

export default CartItem