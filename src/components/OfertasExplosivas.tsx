
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow,NextArrowC,PrevArrow, PrevArrowC} from './Arrows'
import {products,categoryFood} from '../data/db'
import { formatPrice} from '../helpers';
import { Products } from '../types';
import { useMediaQuery } from 'react-responsive';



type cartProps = {
addToCart: (item:Products) => void
data:Products[],
active: boolean | (() => void)
}
export default function OfertasExplosivas({addToCart,active} : cartProps) {



  //definimos el state inicial del carrito y le agregamos su type
  
const categories = {
  generales: products.filter(item => item.id <= 10),
  desayuno: products.filter(item => item.id >= 11 && item.id <= 20),
  feria:products.filter(item => item.id >= 21 && item.id <= 35),
  electro:products.filter(item => item.id >= 36 && item.id <= 45)
}

  


      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 5,  // Muestra 5 productos
        slidesToScroll: 5,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 3,
              slidesToScroll:3,
            },
          },{
            breakpoint: 436,
            settings: {
              slidesToShow: 2,
              slidesToScroll:2,
          },}
        ],
      };
      const settingsCategory = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 5,  // Muestra 5 productos
        slidesToScroll: 5,
        nextArrowC: <NextArrowC onClick={undefined} />,
        prevArrowC: <PrevArrowC onClick={undefined} />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 3,
              slidesToScroll:3,
            },
          },{
            breakpoint: 436,
            settings: {
              slidesToShow: 2,
              slidesToScroll:2,
          },}
        ],
      };
      const useMobile = useMediaQuery({query:'(max-width: 604px)'})

  return (
 
    <>
    <div>
      
  {active && <p className='notificacion text-white font-semibold text-sm '>Item agregado al carrito</p>}

    <div className=' m-auto  m-carrousel'>
      <p className=" text-red-700 font-bold uppercase">Super Ofertas Explosivas 💥</p>
      {useMobile ? 
      <div>
        <div className="flex-ofertas items-center flex justify-between">
      <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Tu surtido al mejor precio</h1> 
</div>
<a href="#" className=' text-red-800 font-bold'>Ver todo ⮞</a> 
      </div>
      :
<div className="flex-ofertas items-center flex justify-between">
      <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Tu surtido al mejor precio</h1> 
      <a href="#" className=' text-red-800 font-bold  float-right'>Ver todo ⮞</a>
</div> }
     
<div className=' productos-slider'>
      <Slider 
      arrows={true}
      {...settings}>
        {categories.generales.map(product  => (
          <div className='productos mt-4' key={product.id}>
            <div className="producto producto-exclusivo cursor-pointer">
            
            
           
            <img src={product.image} alt={product.name} className='' style={{ width: '100%' }} />
            <p className=' uppercase text-gray-300 font-bold marca'>{product.marca}</p>
            <p className=' productname font-semibold'>{product.name}</p>
            </div>
            <div className=' price mt-6 border-t flex items-center'>
                <p className=' font-bold p-2 flex items-center '>{` ${formatPrice(product.currency,product.price)}`}</p>
                <div className=' product-exclusivo '>
              </div>
              
            </div>
            <div className=' flex justify-center text-center pt-2 items-center '>
            <button className=' text-white boton hover:bg-red-500 p-2 font-bold w-5/6  mb-2 rounded-full items-center '
            onClick={() => addToCart(product)}
            ><a>Agregar</a> </button>
            </div>
            
          </div>
        
        ))}
      </Slider>
    </div>
<img src='./public/img/banner3.webp' className=' w-full mt-10 img-banner'></img>
<p className=" text-red-700 font-bold uppercase mt-10">Ofertas Exclusivo Online 📢</p>
{ useMobile ? 
  <div>
<div className="flex-ofertas items-center flex justify-between">
<h1 className=" text-gray-700 font-sans font-bold text-2xl ">Aprovechá hasta 20% Off en Desayunos!</h1> 
</div>
<a href="#" className=' text-red-800 font-bold'>Ver todo ⮞</a>
</div> 


:
<div className="flex-ofertas items-center flex justify-between">
      <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Aprovechá hasta 20% Off en Desayunos!</h1> <a href="#" className=' text-red-800 font-bold  float-right'>Ver todo ⮞</a>
</div>
}
<div className=' productos-slider'>
      <Slider 
      arrows={true}
      {...settings}>
        {categories.desayuno.map(product => (
          <div className='productos mt-4' key={product.id}>
            <div className="producto producto-exclusivo cursor-pointer">
            <img src={product.image} alt={product.name} className='' style={{ width: '100%' }} />
            {product.discountAmount && (
              <p className=' off font-bold text-red-600  border-red-600 border text-center w-24 text-xs m-4'>20% OFF</p>
            )}
            <p className=' uppercase text-gray-300 font-bold marca'>{product.marca}</p>
            
            <p className=' productname font-semibold'>{product.name}</p>

           
            </div>
             {product.discountAmount && (
            <><div className=' price mt-6 border-t flex items-center justify-between '>

                <><p className=' font-bold p-2 flex items-center line-through text-xs off-text '>{`${formatPrice(product.currency, product.price)}`}</p><div className=' product-exclusivo '>
                  {product.exclusivoOnline && (
                    <img src='./public/img/exclusivoOnline.png' className=' exclusivo flex items-center float-end'></img>
                  )}
                </div>

                </>
              </div>
              <div>
                <p className=' font-bold pl-2 text-lg'>{`${formatPrice(product.currency,product.discountAmount)}`}</p>
              </div>
              </>
            )}
            <div className=' flex justify-center text-center pt-2 items-center '>
            <button className=' text-white boton hover:bg-red-500 p-2 font-bold w-5/6  mb-2 rounded-full items-center 
            
            '
            onClick={() => addToCart(product)}
            ><a>Agregar</a></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <img src='./public/img/banner.webp' className=' w-full mt-10 img-banner'></img>
    <p className=" text-red-700 font-bold mt-10 uppercase">Feria de Verduleria y Fiambrería</p>
    {useMobile ?
    <div>
 <div className="flex-ofertas items-center flex justify-between">
      <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Martes y Miércoles de Feria 🛒</h1> 
</div> 
<a href="#" className=' text-red-800 font-bold'>Ver todo ⮞</a>
    </div>
   :  
   <div className="flex-ofertas items-center flex justify-between">
      <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Martes y Miércoles de Feria 🛒</h1> 
      <a href="#" className=' text-red-800 font-bold  float-right'>Ver todo ⮞</a>
</div> 
   }

<div className=' productos-slider'>
      <Slider 
      arrows={true}
      {...settings}>
        {categories.feria.map(product => (
          <div className='productos mt-4' key={product.id}>
            <div className="producto producto-exclusivo cursor-pointer">
            
            
           
            <img src={product.image} alt={product.name} className='' style={{ width: '100%' }} />
            <p className=' uppercase text-gray-300 font-bold marca'>{product.marca}</p>
            <p className=' productname font-semibold'>{product.name}</p>
            </div>
            <div className=' price mt-6 border-t flex items-center'>
                <p className=' font-bold p-2 flex items-center '>{` ${formatPrice(product.currency,product.price)}`}</p>
                <div className=' product-exclusivo '>
              </div>
                
            </div>
            <div className=' flex justify-center text-center pt-2 items-center '>
            <button className=' text-white boton hover:bg-red-500 p-2 font-bold w-5/6  mb-2 rounded-full items-center '
            onClick={() => addToCart(product)}
            ><a>Agregar</a></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    
    <div className=' m-auto max-w-3xl m-carrousel'>
    <Slider 
      arrows={true}

      {...settingsCategory}>
        {categoryFood.map(product => (
            <div className=' food-section'>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} className=' flex justify-center category-food rounded-full border categoryfood border-gray-300 ' />
            <p className=' productname mt-4 font-semibold text-center'>{product.name}</p>
            </div>
        ))}
      </Slider>
      </div>

     
    
    </div>
    <div className=' producto-gray-bg'>
    <div className=' productos-slider producto-gray'>
    <p className=" text-red-700 font-bold uppercase mt-10">Los electro más vendidos del mes</p>
    {useMobile ?
    
    <div>
      <div className="flex-ofertas items-center flex justify-between">
      <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Los elegidos de electro</h1> 
</div>
<a href="#" className=' text-red-800 font-bold '>Ver todo ⮞</a>
    </div>:
    <div className="flex-ofertas items-center flex justify-between">
    <h1 className=" text-gray-700 font-sans font-bold text-2xl ">Los elegidos de electro</h1> 
    <a href="#" className=' text-red-800 font-bold  float-right'>Ver todo ⮞</a>
</div>
    }

      <Slider 
      arrows={true}

      {...settings}>
        {categories.electro.map(product => (
          <div className='productos mt-4 bg-white' key={product.id}>
            <div className="producto producto-exclusivo cursor-pointer bg-white">
            
            
           
            <img src={product.image} alt={product.name} className='' style={{ width: '100%' }} />
            <p className=' uppercase text-gray-300 font-bold marca'>{product.marca}</p>
            <p className=' productname font-semibold'>{product.name}</p>
            </div>
            <div className=' price mt-6 border-t flex items-center justify-between'>
                <p className=' font-bold p-2 flex items-center '>{`${formatPrice(product.currency, product.price)}`}</p>
                <div className=' product-exclusivo '>
              {product.exclusivoOnline && (
                <img src='./public/img/exclusivoOnline.png' className=' exclusivo flex items-center'></img>
              )}
              </div>
                
            </div>
            <div className=' flex justify-center text-center pt-2 items-center '>
            <button className=' text-white boton hover:bg-red-500 p-2 font-bold w-5/6  mb-2 rounded-full items-center '
            
            onClick={() => addToCart(product)}><a>Agregar</a></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    <div className=' banner-verano mt-5'>
        <img src='./public/img/trabajo-verano.webp' className=' verano'></img>
    </div>
    </div>
   </>
   
  )
}
