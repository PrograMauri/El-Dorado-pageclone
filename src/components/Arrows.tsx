


export const NextArrow = (e: { onClick: any }) =>{
    const {onClick} = e
    return(
        <>
            <div className=' arrow next' onClick={onClick}>
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M8 5v14l11-7z" />
</svg>
            </div>
        </>
    )
}

export const PrevArrow = (e: { onClick: any }) =>{
    const {onClick} = e
    return(
        <>
            <div className=' arrow prev' onClick={onClick}>
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M16 5l-11 7 11 7V5z" />
</svg>
            </div>
        </>
    )
}

export const NextArrowC = (e: { onClick: any }) =>{
  const {onClick} = e
  return(
      <>
          <div className=' nextC' onClick={onClick}>
          <svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="currentColor"
>
<path d="M8 5v14l11-7z" />
</svg>
          </div>
      </>
  )
}

export const PrevArrowC = (e: { onClick: any }) =>{
  const {onClick} = e
  return(
      <>
          <div className=' prevC' onClick={onClick}>
          <svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="currentColor"
>
<path d="M16 5l-11 7 11 7V5z" />
</svg>
          </div>
      </>
  )
}