import ProductCard from "../components/productCard"
import products from '../products.json'
import sort from '../assets/sort.png'
import {Link} from "react-router-dom"
import filter from '../assets/filter.png'
import { useState } from "react"

function item(product){
    return (
        <ProductCard 
            key = {product.id}
            name= {product.name}
            image= {product.image}
            price= {product.price}
            id={product.id}
            />
    )
}

const featuredProducts = products.filter((product => product.bestseller === true))


const Shop = () => {
    const [category,setCategory] = useState("All")
    const [subCats,setSubCats] = useState([])
    const [sortOp, setSortOp] = useState("")


    const FilteredProducts = products.filter((product) => {
        const categoryMatch = category === "All" || category === product.category;
        const subCatMatch = subCats.length === 0 || subCats.includes(product.subCategory);
        return categoryMatch && subCatMatch
        })

    const handleSubCat = (subCat) => {
        setSubCats((arr) => 
            arr.includes(subCat)? arr.filter(t => t !== subCat) : [...arr, subCat]
        )
    }

    const SortedProducts = [...FilteredProducts].sort((a,b) => {
        switch (sortOp){
            case "price-high":
                return b.price - a.price;
            case "price-low":
                return a.price - b.price;
            case "date-recent":
                return b.date - a.date;
            case "date-old":
                return a.date - b.date;
            default:
                return 0;
        }
    })


    



    return (
        <div className="m-5">
            
            <div className="flex justify-center py-5 mb-4">
                <p className="text-[20px] sm:text-[30px] prata-regular items-center text-gray-800">PRODUCTS</p>
            </div>
            
            <div className="flex flex-row justify-between  text-gray-800 mx-4">
                <div className="md:hidden group relative">
                    <Link><img src={filter} className="w-5 h-5"/></Link>
                    <div className='group-hover:block hidden absolute dropdown-menu left-0'> 
                    <div className='flex flex-col gap-2  py-3 px-5 bg-white shadow-xl text-gray-500 rounded '>
                        {["All", "Men", "Women", "Kids"].map(cat => (
                                <a key={cat} onClick={() => setCategory(cat)} className='cursor-pointer hover:text-black'>{cat}</a>
                            ))}
                    </div>
                    </div>
                </div>
                <ul className=" hidden md:flex justify-center flex-row gap-15 mb-4">
                {["All", "Men", "Women", "Kids"].map(cat => (
                        <li key={cat}>
                            <a onClick={() => setCategory(cat)} className="cursor-pointer">{cat}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex  gap-4 md:flex-row">
                    <label className="">
                    <input type="checkbox" onChange={() => handleSubCat("Topwear")} checked={subCats.includes("Topwear")}/> Top
                    </label>
                    <label>
                    <input type="checkbox" onChange={() => handleSubCat("Bottomwear")} checked={subCats.includes("Bottomwear")}/> Bottom
                    </label>
                    <label>
                    <input type="checkbox" onChange={() => handleSubCat("Winterwear")} checked={subCats.includes("Winterwear")}/> Winter
                    </label>
                </div>

                <div className="group relative">
                    <Link><img src={sort} className="w-5 h-5"/></Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0'> 
                    <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-white shadow-xl text-gray-500 rounded '>
                        <a  onClick={() => setSortOp("alpha")} className='cursor-pointer hover:text-black'>Alphabatically</a>
                        <a  onClick={() => setSortOp("price-high")} className='cursor-pointer hover:text-black'>Price,high-low</a>
                        <a  onClick={() => setSortOp("price-low")} className='cursor-pointer hover:text-black'>Price, low-high</a>
                        <a  onClick={() => setSortOp("date-recent")} className='cursor-pointer hover:text-black'>Date, new-old</a>
                        <a  onClick={() => setSortOp("date-old")} className='cursor-pointer hover:text-black'>Date, old-new</a>
                    </div>
                    </div>
                </div>
            </div> 
                  
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 p-4">
                {SortedProducts.map(item)}
            </div>
        </div>
        
    )
}
export default Shop
export {featuredProducts, item};