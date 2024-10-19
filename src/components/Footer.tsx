import { useMediaQuery } from "react-responsive"
import { useState } from "react"


export default function Footer() {

const [open, setOpen] = useState(false)
const [openN,setOpenN] = useState(false)
const [openL,setOpenL] = useState(false)
const [openM,setOpenM] = useState(false)
const [img,setImg] = useState(false)
const [imgDos,setDos] = useState(false)
const [imgTres,setTres] = useState(false)
const [imgCuatro,setCuatro] = useState(false)
const isOpenContact = () =>{
  setOpen(prevState => !prevState)
}
const isOpenNosotros = () =>{
  setOpenN(prevState => !prevState)
}

const isOpenLegal = () =>{
  setOpenL(prevState => !prevState)
}
const isOpenM = () =>{
  setOpenM(prevState => !prevState)
}

const isToggle = () =>{
  setImg(prevState => !prevState)
}
const isToggleDos = () =>{
  setDos(prevState => !prevState)
}
const isToggleTres = () =>{
  setTres(prevState => !prevState)
}
const isToggleCuatro = () =>{
  setCuatro(prevState => !prevState)
}


  const useMobile = useMediaQuery({query:'(max-width: 1024px)'})
  return (
  <>
            <div className=" footer-section mt-4 ">
                <div className=" footer flex items-center justify-between">
                    <div className=" flex items-center ">
                      <img src="./public/img/mail-icon.png" className=" mail-img"></img>
                      <div className=" ml-2 text-white font-bold">
                      <p className=" flex flex-col items-center"> ¡Suscribite a nuestro newsletter!</p>
                      <p>Recibí las ofertas y novedades en tu buzón.</p>
                      </div>
                    </div>
                    <div className=" footer-media">
                    <div>
                    <input type="text"
                    placeholder="Ingresa tu e-mail"
                    className=" input-f p-2"
                    />
                    </div>
                    <div>
                        <button className="button-suscribe px-12 py-1 rounded-full font-bold ml-1 font-p">Suscribirme</button>
                    </div>
                    </div>
                    <div className=" arrow-up">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></a>
              </div>
        </div>
        </div>
              {useMobile ? 
            
              <div className=" li-container">
                <ul>
                  <div className=" general-footer"
                  onClick={isToggle}
                  >
                  <div className=" flex justify-between p-5"
                  onClick={isOpenContact}
                  
                  >
                    <li className=" uppercase font-semibold">Contactanos</li>
                    {img ?  <p className=" text-3xl text-gray-900 font-medium less"
                  >-</p> :<p className=" text-3xl text-gray-900 font-medium more"
                  >+</p> }
                     
                   
                  </div>
                  {open ? <div className=" bg-gray-100 p-2">
                      <div>
                        <p className=" font-semibold">Atención telefónica</p>
                        <div className=" flex items-center font-semibold">
                            <img src="./public/img/whatsapp.png" className=" img-wpp" />
                            <p className=" ml-2">(+598) 9980 1990</p>
                        </div>
                        <div className=" flex items-center">
                            <img src="./public/img/call.png"  className=" img-wpp"/>
                            <p className=" ml-2 font-semibold">0800 1990</p>
                        </div>
                        <a className=" font-semibold">Formulario de contacto</a>

                        
                        <div className=" py-4 ">
                        <p className=" font-semibold">Horarios</p>
                        <div className=" flex">
                        <img src="./public/img/schedule.png" className=" img-clock"></img> 
                        <p className=" font-semibold text-xs ml-1">Lunes a Sábado de 8 a 18hs <br />Domingo de 8 a 16hs</p>
                        </div>
                    </div>
                    <div className=" flex flex-col">
                    <a href="#">Sucursales</a>

                    <a href="#">Proveedores</a>

                    <a href="#">Funcionarios</a>
                    </div>
                      </div>
                    </div> : '' }
                    </div>
                    <div className="general-footer"
                    onClick={isToggleDos}
                    >
                  <div className=" flex justify-between p-5"
                  onClick={isOpenNosotros}
                  >
                    <li className=" uppercase font-semibold">Nosotros</li>  {imgDos ?  <p className=" text-3xl text-gray-900 font-medium less"
                  >-</p> :<p className=" text-3xl text-gray-900 font-medium more"
                  >+</p> }
                    </div>
                    {openN ? <div className=" bg-gray-100 p-2">
                      <div className=" openN">
                    <div className=" flex flex-col">
                    <a className=" font-semibold">Nuestra empresa</a>
                    <a href="#">Trabaja con nosotros</a>

                    <a href="#">Iniciativa social</a>

                    <a href="#">Preguntas frecuentes</a>
                    <a href="#">Tarjetas el dorado</a>

                    <a href="#" className=" underline text-blue-600 "><p className=" text-blue-600 ticket">Ver mi ticket aquí</p></a>
                    </div>
                      </div>
                    </div> : '' }
                  </div>
                 
                   
                    <div className="general-footer"
                    onClick={isToggleTres}
                    >
                  <div className=" flex justify-between p-5"
                  onClick={isOpenLegal}
                  >
                     <li className=" uppercase font-semibold">Legal</li> {imgTres?  <p className=" text-3xl text-gray-900 font-medium less"
                  >-</p> :<p className=" text-3xl text-gray-900 font-medium more"
                  >+</p> }
                    </div>
                    {openL ? <div className=" bg-gray-100 p-5">
                      <div className=" openL">
                          <a href="#"><p>Términos y condiciones</p></a>
                      </div>
                    </div> : '' }
                
                  </div>

                  
                  <div className="general-footer"
                  onClick={isToggleCuatro}
                  >
                  <div className=" flex justify-between p-5"
                  onClick={isOpenM}
                  >
                     <li className=" uppercase font-semibold">Medios de pago</li> {imgCuatro ?  <p className=" text-3xl text-gray-900 font-medium less"
                  >-</p> :<p className=" text-3xl text-gray-900 font-medium more"
                  >+</p> }
                    </div>
                    {openM ? <div className=" bg-gray-100 p-5">
                      <div className=" openL">
                      <div className=" flex items-center">
                    <img src="./public/img/cards/mastercard.png" className=" appstore"></img>
                    <img src="./public/img/cards/visa.png" className=" appstore ml-3"></img>
                      </div>
                      </div>
                    </div> : '' }
                
                  </div>
                
                  
                </ul>
              
              </div>
              
              : <div className=" footer-section-end mt-8">
                <div className=" flex justify-evenly items-center">
                    <div className=" flex-section flex flex-col flex-section-1">
                      <h1 className=" uppercase font-bold text-xs pb-4 ">Contáctanos</h1>
                      <p>Venta telefónica</p>
                      <div className=" flex items-center">
                      <img src="./public/img/whatsapp.png" className=" img-wpp"></img><a href="#"><p>(+598) 9980 1990</p></a> 
                      </div>      
                      <div className=" flex items-center">
                          <img src="./public/img/call.png" className=" img-wpp"></img> <a href="#" className=" underline"><p >0800 1990</p></a>
                      </div>
                    <a href="#"><p>Consultas y sugerencias</p></a>
                    <div className=" py-4 ">
                        <p>Horarios</p>
                        <div className=" flex">
                        <img src="./public/img/schedule.png" className=" img-clock"></img> 
                        <p className=" font-semibold text-xs ml-1">Lunes a Sábado de 8 a 18hs <br />Domingo de 8 a 16hs</p>
                        </div>
                    </div>

                    <a href="#"><p>Sucursales</p></a>

                    <a href="#"><p>Proveedores</p></a>

                    <a href="#"><p>Funcionarios</p></a>
                    </div>

                    <div className=" flex flex-col flex-section-2">
                    <h1 className=" uppercase font-semibold pb-4">Nosotros</h1>
                    <a href="#"><p>Nuestra Empresa</p></a>
                    <a href="#"><p>Trabaja con nosotros</p></a>
                    <a href="#"><p>Iniciativa social</p></a>
                    <a href="#"><p>Preguntas frecuentes</p></a>
                    <a href="#"><p>Tarjeta el dorado</p></a>
                      <div className=" pt-8">
                        <a href="#" className=" underline text-blue-600 ticket">Ver mi ticket aquí</a>
                        <p>Seguinos en:</p>
                        <div className=" flex p-1 i-site">
                        <a href="https://wa.me/1234567890" target="_blank">
                                <i className="fab fa-whatsapp"></i>
                          </a>
                          <a href="https://facebook.com/yourprofile" target="_blank">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href="https://instagram.com/yourprofile" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <a href="#"><p>Activá tu cuenta pro</p></a>
                      </div>
                    </div>

                    <div className=" flex flex-col flex-section-3">
                      <h1 className=" uppercase font-semibold">Legal</h1>

                      <p>Términos y condiciones</p>
                    </div>

                    <div className=" flex flex-col flex-section-4">
                      <h1 className=" uppercase font-semibold">Medios de pago</h1>
                  <div className=" flex items-center">
                    <img src="./public/img/cards/mastercard.png"></img>
                    <img src="./public/img/cards/visa.png"></img>
                      </div>
                      <p>Descarga gratis la app:</p>
                      <div className=" flex items-center">
                     <a href="#"><img src="./public/img/cards/playstore.png"></img></a> 
                      <a href="#"><img src="./public/img/cards/appstore.png" className="appstore"></img></a>
                      </div>   
                    </div>
                </div>
        </div> }
       <div className=" w-full p-5 bg-gray-100 mt-10">
        <div className="footer-down ">
            <p className=" text-center text-xs">Hecho con ❤️ por ©Mauricio Teliz. Todos los derechos reservados.</p>
        </div>
            
       </div>
  </>
  )
}
