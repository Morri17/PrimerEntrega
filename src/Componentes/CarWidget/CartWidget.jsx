import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
        <>
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        <strong className='numerito'> 1 </strong>
        </>
    )
}

export default CartWidget