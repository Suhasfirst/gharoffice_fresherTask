import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

function Customer() {
    let [searchip, setSearchip] = useState("")

    let [cprod, setCprod] = useState([])


    let navigate = useNavigate()


    // useEffect(()=>{
    //     localStorage.setItem('cart', JSON.stringify(cart))
    // },[cart])

    let url = "http://localhost:4000/products"


    let changeCart = (p) => {
        fetch(`${url}/${p.target.id}`)
            .then((res) => {
                return res.json()
                console.log(res.json())
            })
            .then((data) => {
                console.log(data)
                // localStorage.setItem('cart', JSON.stringify([data]))
                // let cart = localStorage.getItem('cart')
                // cart=JSON.parse(cart)
                // console.log(cart);
                // console.log(cart.length) 
                // cart.push(cart)

                var a = []
                a = JSON.parse(localStorage.getItem('cart'))
                a.push(data)
                localStorage.setItem('cart', JSON.stringify(a))

            })
    }

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((res) => { return res.json() })
            .then((res) => {
                console.log(res)
                setCprod(res)
            })
    }, [])

    // console.log(cprod);

    function saveinput(e) {
        setSearchip(e.target.value)
    }

    // console.log(searchip)

    let filterprods = cprod.filter((product) => {
        return product.pname.toLowerCase().includes(searchip.toLowerCase())
    })

    // console.log(filterprods)


    return (
        <div>
            <div id='csearch'>
                <input type="text" placeholder='Search products here...' onChange={saveinput} />
            </div>
            <button id='cartbtn' onClick={() => { navigate('/cart') }}>Cart</button>


            {filterprods.length ? filterprods.map(({ id, pname, price }) => {

                return (
                    <div id='csuperdiv'>
                        <div id='cmaindiv'>

                            <div id='csubdiv'>
                                <h4>Product Id: {id} </h4>
                                <h4>Product Name: {pname} </h4>
                                <h4>Product Price: ₹{price} </h4>
                                <div>

                                    <button id={id} onClick={changeCart} >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : <h1>Out of Stock</h1>}
        </div>
    )
}

export default Customer