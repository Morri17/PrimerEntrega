import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
        <>
        <strong className='numerito'> 5 </strong>
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        </>
    )
}

export default CartWidget