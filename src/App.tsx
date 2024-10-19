import './App.css'
import MenuComponents from './components/MenuComponents'
import ImageGallery from 'react-image-gallery'
import banner from '../public/img/banner.webp'
import bannerLimpieza from '../public/img/banner2.webp'
import bannerElectro from '../public/img/banner3.webp'
import bannerOfertas from '../public/img/banner4.webp'
import bannerOfertasEspeciales from '../public/img/banner5.webp'
import "react-image-gallery/styles/css/image-gallery.css";
import OfertasExplosivas from './components/OfertasExplosivas'
import {useMediaQuery} from 'react-responsive'
import Input from './components/Input'
import Footer from './components/Footer'
import {  useState } from 'react'
import Cart from './components/Cart'
import { useCart } from './hooks/useCart'




function App() {
 
const{addToCart,data,cart,isEmpty,deleteFromCart,increaseQuantity,decreaseQuantity,active} = useCart()



  const images = [
    {
      original: banner
    },{
      original:bannerLimpieza
    },{
      original:bannerElectro
    },{
      original:bannerOfertasEspeciales
    },{
      original:bannerOfertas
    }
  ];
  const useMobile = useMediaQuery({query:'(max-width: 757px)'})

const [open,setOpen] = useState(true)

const isOpen = () =>{
  setOpen(prevState => !prevState)
}
const isClose = () =>{
  setOpen(!open)
  console.log('Cerrando...')
}
  return (
    <>
    

   
    <div className=' bg-red-600 w-full'>
      <h1  className=' text-center text-white py-2 text-xl font-mo montserrat'>Exclusivo Online: <span className=' text-yellow-400'>20% off -By: Mauricio Teliz</span></h1>
    </div>
    {
      <div className='  mt-3 header  w-full '>
      <div className=" m-auto max-w-6xl max-header justify-between flex items-center">
       
        <img src='./public/img/dorado.png' className='logo object-contain'>
        </img>
        
          
         <MenuComponents
         />

        <div className='input-mq flex w-2/4 relative'>
          <input
           type='text'
           placeholder='¿Qué estás buscando?'
           className=' input-mq input-order border border-red-600 rounded-full w-full p-3 relative'
           
          
          >
          </input>
          <img src='./public/img/search.png' className='search absolute input-mq'></img>
          </div>  
  
        <div 
        onClick={isOpen}
        >
          <img src='./public/img/Red-Cart.png' className=' cursor-pointer cart'>
          </img>
          </div>
          <div>
            {open ? '': 

            <div className="overlay">
            { cart.length === 0 ? <div className="cart-section">
        <div
        onClick={isClose}
        >
         <img src="./public/img/arrow-right.png" className=" arrow-right cursor-pointer"></img>
        </div>
        <div className=" cart-title flex items-center ">
            <div className=" flex items-center justify-center cart-items">
                <img src="./public/img/white-cart.png" className=" cart"></img>  <p className=" ml-3 text-white font-semibold">Carrito</p>
            </div>
        </div>
        <div>
              
        {isEmpty ? (
          <div className='section-empty'>
<img className=' img-class' src='./public/img/empty-minicart___f0de759ff2fce21f2fe135a464d99490.svg'></img>
<p className='cart-p font-bold'>El carrito está vacío.</p>

<button
onClick={isClose}
className=' button-absoulte'
>Elegir productos</button>
          </div>
          

) : (
  <div>
    <div className=' cart-width'>
      <p className='p-2 mt-3 font-semibold text-center text-slate-600'>Selecciona Cantidades</p>
      <Cart
        cart={cart}
        deleteFromCart={deleteFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity} 
      />
    </div>
    
  </div>
)}
  
        </div>
        
    </div> :  
    <div className="cart-section-some">
      <div className=' h-full relative'>

     
        <div
        onClick={isClose}
        >
         <img src="./public/img/arrow-right.png" className=" arrow-right cursor-pointer"></img>
        </div>
        <div className=" cart-title flex items-center relative">
            <div className=" flex items-center justify-center cart-items">
                <img src="./public/img/white-cart.png" className=" cart"></img>  <p className=" ml-3 text-white font-semibold">Carrito</p>
            </div>
        </div>
        <div>
 
        {isEmpty ? (
        <div className=' section-center'>
        
          <div className='section-empty'>
<img src='./public/img/empty-minicart___f0de759ff2fce21f2fe135a464d99490.svg'></img>
<p className=' font-bold'>El carrito está vacío.</p>
<button
onClick={isClose}
className=' button-absoulte'
>Elegir productos</button>
          </div>
          </div>

) : (
  <div>
    <div>
      <p className='p-2 mt-3 font-semibold text-center text-slate-600'>Selecciona Cantidades</p>
      <Cart
        cart={cart}
        deleteFromCart={deleteFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity} 
      />
    </div>
    
  </div>
)}
  
        </div>
        
    </div>
    </div>
    } 
    </div> 
    
    }
   
    </div>

        </div>
        {useMobile ?  <Input 
        
        /> : ''}
    </div>
}
    <div className="Carrousel-Component mb-20">
      <ImageGallery 
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={2000}
        
      />
    </div>
      <OfertasExplosivas
  addToCart={addToCart}
  data={data}
  active={active}
/>
    


<Footer

/>

    </>
  )
}

export default App
