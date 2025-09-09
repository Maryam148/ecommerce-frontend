import { useState,useEffect, createContext, useContext } from "react";
import { AuthContext } from "./authContext";

export const cartContext = createContext()

export const CartProvider = ({children}) => {

    const { currentUser, updateCart } = useContext(AuthContext)
    const [cart, setCart] = useState([])

    useEffect(() => {
      if (currentUser) {
        setCart(currentUser.cart || [])
      } else {
        setCart([])
      }
    }, [currentUser]);

    useEffect(() => {
    if (currentUser) {
        const isSameCart = JSON.stringify(currentUser.cart) === JSON.stringify(cart);
        if (!isSameCart) {
          updateCart(cart);
        }
      }
    }, [cart]);

    
    const inc = (id) => {
        setCart((prev) => prev.map(item => 
          item.id === id? {...item, quantity: item.quantity + 1} : item
        ));
    };

    const dec = (id) => {       
        setCart((prev) => prev.map(item => 
          item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
        ));
        
    };

    const addToCart = (product) => {
        setCart((prev) => {
          const existing = prev.find((item) => item.id === product.id)
          if (existing) {
            return prev.map((item) => 
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
          
          } else {
            return [...prev, {...product, quantity: 1}]
          }
        })
    }

    const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
    }

    const total = cart.reduce((sum, item) => 
      sum + item.price * item.quantity, 0)

    return (
    <cartContext.Provider value={{cart, addToCart, removeFromCart, total, inc,dec}}>
      {children}
    </cartContext.Provider>
  )}
