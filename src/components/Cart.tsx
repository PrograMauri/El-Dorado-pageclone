
import { formatPrice } from "../helpers";
import { CartItem } from "../types";
import { Products } from "../types";
import { useMemo } from "react";
type CartProps = {
  cart: CartItem[],
  deleteFromCart: (id: Products["id"]) => void,
  increaseQuantity: (id: Products["id"]) => void,
  decreaseQuantity: (id: Products["id"]) => void
};

const exchangeRates = {
  USD: 41.76,
  UYU: 1
}


function convertToUYU(amount: number, currency: 'USD' | 'UYU') {
  return amount * exchangeRates[currency]; // Convertir a UYU
}


export default function Cart({ cart, deleteFromCart, increaseQuantity, decreaseQuantity }: CartProps) {
  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => {
      const priceInUYU = convertToUYU(item.price, item.currency); // Convertimos todo a UYU
      return total + (priceInUYU * item.quantity);
    }, 0);
  }, [cart]);

  return (
    <>
      {/* Mapeamos los productos del carrito */}
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <div className="cart-center">
            <div className="m-2 mt-12 contain">
              <img
                src="./public/img/trash.png"
                className="trash float-right"
                onClick={() => deleteFromCart(product.id)}
              />
              <p className='uppercase text-gray-300 font-bold marca'>{product.marca}</p>
              <p className='productname font-semibold'>{product.name}</p>
              <div className="flex items-center">
                <img src={product.image} className="img-cart" alt={product.name} />
                <div className="quantity-cart flex items-center ml-4 justify-between w-full">
                  <button className="less-button" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => increaseQuantity(product.id)} className="more-cart">+</button>
                </div>
              </div>
              <div className="float-end font-semibold mr-4">
                {product.discountAmount ? (
                  <div>
                    <p className="font-bold p-2 flex items-center line-through text-xs off-text">
                      {formatPrice(product.currency, product.price)}
                    </p>
                    <p>{formatPrice(product.currency, product.discountAmount)}</p>
                  </div>
                ) : (
                  <p>{formatPrice(product.currency, product.price)}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Sección del total y botón de finalizar compra, fuera del map para que no se duplique */}
      {cart.length > 0 && (
        <div className="cart-finalizar">
          <div className="mx-auto container-b cart-index-end">
            <div className="flex justify-between mt-2 items-center total-section">
              <p className="font-bold text-lg">Total:</p>
              <p className="font-bold text-lg">$ {totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</p>
            </div>
            <button className="text-white font-bold finalizar w-full">Finalizar compra</button>
          </div>
        </div>
      )}
    </>
  );
}
