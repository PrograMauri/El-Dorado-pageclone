import { Products} from "../types";

const calcularDescuento = (initialPrice : number,discountPercentage : number ) => {
  const discountAmount = initialPrice *(discountPercentage / 100)
  return initialPrice - discountAmount
}


export const products: Products[] = [
 //Productos Generales 
  { id: 1, name: 'Jamon Sarubbi Cocido Delizia Kg', image: './public/img/productos/Jamon.webp', marca: 'Sarubbi', currency: 'UYU', price: 460.00, exclusivoOnline: false, discountAmount: 0 },
  { id: 2, name: 'Harina Cololo Pasta 0000 1Kg .', image: './public/img/productos/Harina.webp', marca: 'Cololo', currency: 'UYU', price: 64.90, exclusivoOnline: false, discountAmount: 0 },
  { id: 3, name: 'Toalla De Cocina El Dorado Clasica 2 Rollos 100 Paños', image: './public/img/productos/Toalla de cocina.webp', marca: 'El Dorado', currency: 'UYU', price: 73.00, exclusivoOnline: false, discountAmount: 0 },
  { id: 4, name: 'Pan Bauducco Molde Blanco 400Gr', image: './public/img/productos/Pan Bauducco.webp', marca: 'Bauducco', currency: 'UYU', price: 99.90, exclusivoOnline: false, discountAmount: 0 },
  { id: 5, name: 'Dulce De Leche Conaprole Manjar 1Kg .', image: './public/img/productos/Dulce de leche.webp', marca: 'Conaprole', currency: 'UYU', price: 186.00, exclusivoOnline: false, discountAmount: 0 },
  { id: 6, name: 'Cafe Bracafe Sticks 14Un 1.8Gr', image: './public/img/productos/cafe.webp', marca: 'Bracafe', currency: 'UYU', price: 69.00, exclusivoOnline: false, discountAmount: 0 },
  { id: 7, name: 'Fideos Cololo Espinaca Nido 500Gr .', image: './public/img/productos/fideos colocolo.webp', marca: 'Cololo', currency: 'UYU', price: 73.00, exclusivoOnline: false, discountAmount: 0 },
  { id: 8, name: 'Suavizante Suprema Celeste 2 Lts', image: './public/img/productos/suavizante suprema.webp', marca: 'Suprema', currency: 'UYU', price: 99.90, exclusivoOnline: false, discountAmount: 0 },
  { id: 9, name: 'Suavizante Suprema Rosa 2Lts', image: './public/img/productos/suavizante.webp', marca: 'Suprema', currency: 'UYU', price: 99.90, exclusivoOnline: false, discountAmount: 0 },
  { id: 10, name: 'Limpiador Fabuloso Antibacterial Lavanda 2Lt', image: './public/img/productos/fabuloso.webp', marca: 'Fabuloso', currency: 'UYU', price: 196.23, exclusivoOnline: false, discountAmount: 0 },
  
  // Productos de Desayuno
  { id: 11, name: 'Galleta Arcor Rellena Frutilla 120Gr', image: './public/img/productos/Galleta-arcor-rellena.webp', marca: 'Arcor', price: 34.90, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(34.90, 20) },
  { id: 12, name: 'Galleta Arcor Serranitas 315Gr', image: './public/img/productos/Galleta arcor serranitas.webp', marca: 'Arcor', price: 109.90, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(109.90, 20) },
  { id: 13, name: 'Galleta Blue Patna Arroz Con Sal 150Gr', image: './public/img/productos/Galleta blue patna arroz.webp', marca: 'Blue Patna', price: 83.00, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(83.00, 20) },
  { id: 14, name: 'Galleta La Celestina Finita 315Gr', image: './public/img/productos/galleta la celestina.webp', marca: 'La Celestina', price: 137.00, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(137.00, 20) },
  { id: 15, name: 'Dulce De Leche Los Nietitos Pote 1Kg', image: './public/img/productos/dulce de leche.webp', marca: 'Los nietitos', price: 213.00, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(213.00, 20) },
  { id: 16, name: 'Galleta Chocolate Bridge El Trigal 140 Grs', image: './public/img/productos/galleta chocolate bridge.webp', marca: 'El trigal', price: 119.90, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(119.90, 20) },
  { id: 17, name: 'Galleta El Trigal Pannina 320 Grs', image: './public/img/productos/galleta el trigal pannina.webp', marca: 'El trigal', price: 109.60, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(109.60, 20) },
  { id: 18, name: 'Galleta Famosa Solar 195 g', image: './public/img/productos/galleta famosa solar.webp', marca: 'Famosa', price: 97.00, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(97.00, 20) },
  { id: 19, name: 'Galleta 9 De Oro Agridulce 420 g', image: './public/img/productos/galleta 9 de oro.webp', marca: '9 De oro', price: 99.00, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(99.00, 20) },
  { id: 20, name: 'Galleta Arcor Surtida Diversion 400 g', image: './public/img/productos/galleta arcor surtida diversion.webp', marca: 'Arcor', price: 123.00, currency: 'UYU', exclusivoOnline: true, discountAmount: calcularDescuento(123.00, 20) },

  // Productos de Feria
  { id: 21, name: 'Papa Rosada Kg', image: './public/img/productos/papas.webp', marca: 'Otras Marcas', price: 99.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 22, name: 'Zanahoria Kg', image: './public/img/productos/zanahoria.webp', marca: 'Otras Marcas', price: 69.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 23, name: 'Naranja Kg', image: './public/img/productos/naranja.webp', marca: 'Otras Marcas', price: 68.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 24, name: 'Limon Kg 2839', image: './public/img/productos/limon.webp', marca: 'Otras Marcas', price: 48.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 25, name: 'JAMON OTTONELLO YORK COCIDO KG', image: './public/img/productos/jamon.webp', marca: 'OTTONELLO', price: 450.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 26, name: 'Puerro Un. 2378s', image: './public/img/productos/puerro.webp', marca: 'Otras Marcas', price: 16.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 27, name: 'Lechuga Crespa Un 2855.', image: './public/img/productos/lechuga crespa.webp', marca: 'Otras Marcas', price: 35.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 28, name: 'Lechuga Un. 2379.', image: './public/img/productos/lechuga.webp', marca: 'Otras Marcas', price: 35.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 29, name: 'Remolacha Un 2375', image: './public/img/productos/remolacha.webp', marca: 'Otras Marcas', price: 25.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 30, name: 'Queso Parmalat Sandwichero Kg', image: './public/img/productos/queso parmalat.webp', marca: 'Parmalat ', price: 525.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 31, name: 'Fiambre De Cerdo E/Amarilla Kg (1629809)', image: './public/img/productos/fiambre de cerdo.webp', marca: 'Otras Marcas', price: 277.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 32, name: 'Salame Sureña Milan Grande Kg', image: './public/img/productos/salame sureña.webp', marca: 'Sureña', price: 503.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 33, name: 'Queso Cattivelli De Cerdo Kg .', image: './public/img/productos/queso cativelli.webp', marca: 'Cattivelli', price: 359.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 34, name: 'QUESO CENTENARIO BARRA MUZZARELLA KG', image: './public/img/productos/queso centenario.webp', marca: 'Centenario', price: 461.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },
  { id: 35, name: 'Bondiola Cattivelli Kg', image: './public/img/productos/bondiola cativelli.webp', marca: 'Cattivelli', price: 1000.00, currency: 'UYU', exclusivoOnline: false, discountAmount: 0 },

  // Productos Electrónicos
  { id: 36, name: 'Televisor Grenno Gr-K504K 50"4K', image: './public/img/productos/televisor.webp', marca: 'Grenno', price: 429.00, currency: 'USD', exclusivoOnline: false, discountAmount: 0 },
  { id: 37, name: 'Lavarropas Grenno Gr-Lcf6K10 Carga Frontal 6 Kg 1000 RPM', image: './public/img/productos/lavarropas-grenno.webp', marca: 'Grenno', price: 319.00, currency: 'USD', exclusivoOnline: false, discountAmount: 0 },
  { id: 38, name: 'Televisor Grenno Gr-K654K 65" 4K', image: './public/img/productos/televisor-4k.webp', marca: 'Grenno', price: 749.00, currency: 'USD', exclusivoOnline: false, discountAmount: 0 },
  { id: 39, name: 'CELULAR XIAOMI REDMI A3X NEGRO 6,7" 4GB 128GB OCTA CORE', image: './public/img/productos/xiaomi redmi a3x.webp', marca: 'Xiaomi', price: 145.00, currency: 'USD', exclusivoOnline: true, discountAmount: 0 },
  { id: 40, name: 'CELULAR XIAOMI REDMI 13C NEGRO 6,74" 8GB 256GB 50+2MP 8MP OC', image: './public/img/productos/xiaomi redmi 13c.webp', marca: 'Xiaomi', price: 209.00, currency: 'USD', exclusivoOnline: true, discountAmount: 0 },
  { id: 41, name: 'PARLANTE NDR NDR-810 8X2 6000W MSAA0074', image: './public/img/productos/parlante ndr.webp', marca: 'Ndr', price: 199.00, currency: 'USD', exclusivoOnline: true, discountAmount: 0 },
  { id: 42, name: 'SMART TV GRENNO GR-R40SMART 40" FHD', image: './public/img/productos/smart tv grenno.webp', marca: 'Grenno', price: 249.00, currency: 'USD', exclusivoOnline: true, discountAmount: 0 },
  { id: 43, name: 'Microondas Digital Grenno 20 L', image: './public/img/productos/microondas digital.webp', marca: 'Grenno', price: 109.00, currency: 'USD', exclusivoOnline: true, discountAmount: 0 },
  { id: 44, name: 'Mixer Grenno Bsw-230 Con Accesorios', image: './public/img/productos/mixer grenno.webp', marca: 'Grenno', price: 39.00, currency: 'USD', exclusivoOnline: false, discountAmount: 0 },
  { id: 45, name: 'COCINA GRENNO LORENZA NEGRA 4HORNALLAS A GAS', image: './public/img/productos/cocina grenno.webp', marca: 'Grenno', price: 259.00, currency: 'USD', exclusivoOnline: false, discountAmount: 0 },
];

  export const categoryFood = [{
    id:1,
    name:'Desayuno y Merienda',
    image:'./public/img/Categories/desayuno.webp'
  },{
    id:2,
    name:'Asadito para disfrutar',
    image:'./public/img/Categories/asadito.webp'
  },{
    id:3,
    name:'Picadito entre amigos',
    image:'./public/img/Categories/picadito.webp'
  },{
    id:4,
    name:'Noche de hamburguesas',
    image:'./public/img/Categories/noche de hamburguesas.webp'
  },{
    id:5,
    name:'Show de Pasta',
    image:'./public/img/Categories/pasta.webp'
  },{
    id:6,
    name:'Cenas rápidas',
    image:'./public/img/Categories/cenas.webp'
  },{
    id:7,
    name:'Tienda Saludable 🌿',
    image:'./public/img/Categories/tienda.webp'
  },{
    id:8,
    name:'Sin glúten',
    image:'./public/img/Categories/gluten.webp'
  },{
    id:9,
    name:'Probalos en la freidora',
    image:'./public/img/Categories/probalosenlafreidora.webp'
  },{
    id:10,
    name:'Mundo Bebé',
    image:'./public/img/Categories/mundobebe.webp'
  },{
    id:12,
    name:'Hora de limpiar',
    image:'./public/img/Categories/hora de limpiar.webp'
  },{
    id:13,
    name:'Al cole con todo🎒',
    image:'./public/img/Categories/alcole.webp'
  },{
    id:14,
    name:'Para llevar en la mochi 🍪',
    image:'./public/img/Categories/para llevar en la mochi.webp'
  },]