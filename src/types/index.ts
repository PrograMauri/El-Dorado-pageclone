

export type Products = {
    id:number,
    name:string,
    image:string,
    marca:string,
    price:number,
    exclusivoOnline:boolean
    currency:'USD'| 'UYU',
    discountAmount:number,
}

export type CartItem = Products & { 
    quantity:number
}

