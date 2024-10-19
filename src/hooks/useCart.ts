import { useEffect, useMemo, useState } from "react"
import { products } from "../data/db"
import { CartItem, Products } from "../types"


const MAX_ITEMS = 10

export const useCart = () =>{

   const initialCart = ()=>{
      const localStorageCart = localStorage.getItem('cart')
      return localStorageCart ? JSON.parse(localStorageCart) : []

   }
const [data] = useState<Products[]>(products)
const [cart, setCart] = useState<CartItem[]>(initialCart);
const [active,setActive] = useState(false)

useEffect(() =>{
   localStorage.setItem('cart',JSON.stringify(cart))
},[cart])



const addToCart = (item : Products) =>{
   const itemExist = cart.findIndex(product => product.id === item.id);
 console.log(cart)
   
   console.log("Índice del artículo existente:", itemExist);
   if(itemExist !== -1){ //Producto en el carrito
      if(cart[itemExist].quantity >= MAX_ITEMS) return
      const newCart = [...cart]
      newCart[itemExist].quantity ++
      
      setCart(newCart)
   } else{
      const newItem = {...item, quantity: 1}
      setCart([...cart, newItem])
   }
   setActive(true)

 
};

const isEmpty = useMemo(() => cart.length === 0,[cart])

const deleteFromCart = (id: Products['id']) =>{
   setCart(prevCart => prevCart.filter(product => product.id !== id))
}

const increaseQuantity = (id:Products['id']) =>{
   const itemExist = cart.findIndex(product => product.id === id)

  //verificamos si el producto existe en el carrito
  if(itemExist !== -1){ //Si existe
  if(cart[itemExist].quantity < MAX_ITEMS){
      const newItem = [...cart]
      newItem[itemExist].quantity++
      setCart(newItem)
  }
  }
}

const decreaseQuantity = (id: Products['id']) =>{
const itemExist = cart.findIndex(product => product.id === id)

if(itemExist !== -1){
   //existe en el carrito
   if(cart[itemExist].quantity >= 1){
      const newItem = [...cart]
      newItem[itemExist].quantity--
      setCart(newItem)
   }
}
}


   
   useEffect(() => {
      // Comparar la longitud actual con la anterior
      if (active) {
          // Solo se activa si se agregó un item
          setActive(true);
   
          const timer = setTimeout(() => {
              setActive(false);
          }, 3000);
   
         return () => clearTimeout(timer) 
      }
   
      // Actualiza el estado de la longitud anterior al final
      
   }, [cart]); // Dependencia en 'cart'





return{
   addToCart,
   data,
   cart,
   isEmpty,
   deleteFromCart,
   increaseQuantity,
   decreaseQuantity,
   active
}
}