import CartItem from '../components/cartitem.jsx'
import { useContext } from 'react';
import { cartContext } from '../cartContext.jsx';


function C_item(product){
    return (
        <CartItem
            key = {product.id}
            size= {product.size}
            name= {product.name}
            image= {product.image}
            quantity= {product.quantity}
            price= {product.price}
            id={product.id}
            />
    )
}
const Cart = () => {
    const {cart, total} = useContext(cartContext)
    return (
        <div className="overflow-x-auto mb-5">
        <p className='bg-gray-200 font-semibold text-[22px] text-center py-1 mb-3'>SHOPPING CART</p>

        <div className='hidden md:grid md:grid-cols-[3fr_1fr_1fr_1fr] gap-6 w-max min-w-full px-4'>
            <p className='font-semibold'>PRODUCTS</p>
            <p className='font-semibold'>PRICE</p>
            <p className='font-semibold'>QUANTITY</p>
            <p className='font-semibold'>TOTAL</p>
        </div>

        <hr className='hidden md:block my-2' />

        <div className="flex flex-col  gap-4 px-2 md:px-4">
            {cart.map(C_item)}
        </div>
        <div className='flex mt-5 flex-col'>
            <p className='flex justify-center text-[18px]'>Shipping: $10</p>
            <div className='flex text-2xl justify-center gap-5 '>
                <p>Total:</p>
                <p>${total + 10}</p>
            </div>
            <div className='flex justify-center mt-2'><button className='bg-black p-1 rounded-sm w-50 text-center text-white'>Checkout</button></div>
            
        </div>
        </div>
        
    )
}
export default Cart