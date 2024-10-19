
export function formatCurrency(amount:number){
    return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(amount)
}


export function formatPrice(currency:'USD' | 'UYU',price:number){
    if(currency === 'USD'){
        return `US$ ${price.toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2})}`
    }else{
        return `$ ${price.toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2})}`
    }
}
export function formatPriceCart(currency:'USD' | 'UYU',price:number){
    const priceInUYU = price * 41.84
    if(currency === 'USD'){
        return `$ ${priceInUYU.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    } else if(currency === 'UYU'){
        return `$ ${price.toLocaleString(undefined,{minimumIntegerDigits:2,maximumFractionDigits:2})}`
    }
}
