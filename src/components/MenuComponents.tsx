import { useState } from "react"

export default function menu() {

const [imagen,setImagen] = useState('./public/img/menu.png')
const [isOpen,setIsOpen] = useState(false)


const toggleMenu = () =>{
  setIsOpen(prevState => !prevState)
}
const OnMouseEnter = () =>{
  setImagen('./public/img/menu-white.png')
}

const OnMouseLeave = () =>{
  setImagen('./public/img/menu.png')
}
  return (
    <>

     <div className='menu-items'
      onMouseEnter={OnMouseEnter}
      onMouseLeave={OnMouseLeave}
      onClick={toggleMenu}
     >
      <div className=" relative">
            <button className=' flex items-center relative'>
            <img
             src={imagen}
             className=' menu-img bg-red-100 p-1 rounded-full items-center'
            >
            </img>
            <p className=' ml-2  category  font-semibold opacity-70'>Categorías</p>
            </button>
            {isOpen ? 
      <div className={` barra-menu absolute`}>
        <ul>
          <li>
          <img src="./public/img/Seccion/bebidas.webp"></img>  <a href="#">Bebidas</a>
          </li>
          <li>
            <img src="./public/img/Seccion/comestibles.webp"></img> <a href="#">Comestibles</a>
          </li>
          <li>
            <img src="./public/img/Seccion/frescos.webp"></img><a href="#">Frescos</a>
          </li>
          <li>
            <img src="./public/img/Seccion/cuidado personal.webp"></img><a href="#">Cuidado Personal</a>
          </li>
          <li>
          <img src="./public/img/Seccion/ferreteria.webp"></img><a href="#">Ferretería</a>
          </li>
          <li>
          <img src="./public/img/Seccion/Hogar.webp"></img><a href="#">Hogar</a>
          </li>
          <li>
          <img src="./public/img/Seccion/Electro audio y tv.webp"></img><a href="#">Electro audio y tv</a>
          </li>
          <li>
          <img src="./public/img/Seccion/Limpieza.webp"></img><a href="#">Limpieza</a>
          </li>
          <li>
          <img src="./public/img/Seccion/Mascotas.webp"></img><a href="#">Mascotas</a>
          </li>
          <li>
          <img src="./public/img/Seccion/Temporada y festivods.webp"></img><a href="#">Temporadas y festivos</a>
          </li>
        </ul>
      </div>
      
        : ''}
      </div>
          </div>
    
    
    </>
  )
}
