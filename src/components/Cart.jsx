import React, { useEffect, useState } from 'react'

function Cart() {
    let [cart, setCart] = useState([])

    useEffect(() => {
        let c = localStorage.getItem("cart")
        c = JSON.parse(c)
        setCart(c)
        console.log(c);
        // console.log(c[0].price);
    }, [])

    console.log(cart)

    return (
        <div>
            <h1>Cart</h1>
            {cart?.map(({ id, pname, price }) => {
                return (
                    <div>
                        <div id='cmaindiv'>
                            <div id='csubdiv'>
                                <h4>Product Id: {id} </h4>
                                <h4>Product Name: {pname} </h4>
                                <h4>Product Price: ₹{price} </h4>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                )
            })}

        </div>

    )
}

export default Cart