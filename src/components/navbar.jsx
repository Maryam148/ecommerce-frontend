import React, {useContext,useState} from "react";
import {NavLink , Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import profile_icon from "../assets/profile_icon.png"
import cart_icon from '../assets/cart_icon.png';
import search_icon from '../assets/search_icon.png';
import menu_icon from "../assets/menu_icon.png";
import { cartContext } from "../cartContext"; 

const Navbar=()=>{
    const [visible, setVisible] = useState(false);
    const {cart} = useContext(cartContext)

    
    return (
        <div className="flex justify-between mt-3  items-center">
            <Link to="/"><img  className="w-15 h-10" src={logo}/>
            </Link>
            <div className="gap-5  hidden md:flex text-sm text-gray-800 ">
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-800 hidden'/>
                </NavLink>
                <NavLink to='/shop' className='flex flex-col items-center gap-1'>
                <p>SHOP</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-800 hidden'/>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-800 hidden'/>
                </NavLink>
                
            </div>
            <div className="flex gap-5 items-center">
                <Link to="/search"><img  className="w-5 h-5" src={search_icon} /></Link>
                <Link to="/login"><img className="w-4 h-5" src={profile_icon} /></Link>
                <Link className="relative" to="/cart">
                    <img  className="w-5 h-5" src={cart_icon} />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center h-4 bg-black text-white rounded-full text-[10px]'>{cart.length} </p>
                </Link>

                
                <div className="relative md:hidden">
                    <Link><img onClick={() => setVisible(!visible)} className="h-4 w-5"  src={menu_icon}/></Link>
                    <div className={`absolute right-0 pt-4 z-50 ${visible ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded shadow-md">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/about">About</NavLink>
                        </div>
                    </div>
                </div>
                
            </div>      
        </div>
    )
        
}
export default Navbar