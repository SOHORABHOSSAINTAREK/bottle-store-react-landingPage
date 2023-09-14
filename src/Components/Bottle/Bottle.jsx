import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, price, img } = bottle;
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h2>Price: {price}$</h2>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>

        </div>
    );
};

export default Bottle;