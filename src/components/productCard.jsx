import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../cartContext';

const ProductCard = (props) => {
    const { addToCart } = useContext(cartContext);
    

    const handleAdd = (e) => {
        e.preventDefault() // prevents <Link> from navigating
        addToCart(props)
    };

    

    return( 
        <Link to={`/shop/${props.id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={props.image[0]} alt={props.name} />
        </div>
        <p className='pt-3 pb-1 text-sm'>{props.name}</p>
        <div className='flex items-center flex-row justify-between '>
            <p className='text-sm font-medium'>${props.price}</p>
            <button onClick={handleAdd} className=' cursor-pointer items-center hover:bg-black hover:text-white rounded-3xl bg-gray-100 px-2'>+</button>
        </div>
        </Link>
    )
}

export default ProductCard