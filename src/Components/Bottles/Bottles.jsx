import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('Bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    // load cart from local storage 
    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart()
            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => id === bottle.id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            // console.log('Saved cart', savedCart);
            setCart(savedCart);
        }

    }, [bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }
    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLS(id);
    }

    return (
        <div>
            <h1>Available  Bottles:
                {bottles.length}</h1>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;