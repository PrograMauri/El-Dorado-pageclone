

export default function Input() {
  return (
    
      <div className=' input flex w-full relative px-5'>
          <input
           type='text'
           placeholder='¿Qué estás buscando?'
           className=' input-order border border-red-600 rounded-full w-full p-3 relative'
           
          
          >
          </input>
          <img src='./public/img/search.png' className='search absolute'></img>
          </div>  
    
  )
}
