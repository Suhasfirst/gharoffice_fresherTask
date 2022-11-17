import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdmProducts() {
    let [data, setData] = useState([])

    let [products, setProducts] = useState(
        {
            id: '',
            pname: "",
            price: ""
        }
    )

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((res) => {
                return res = res.json()
            })
            .then((res1) => {
                // res1 = res1.json()
                setData(res1)
                // console.log(res1)
            })
    }, [])

    console.log(data);


    let url = "http://localhost:4000/products"

    let handleDelete = (p) => {
        console.log(p.target.id)
        axios.delete(`${url}/${p.target.id}`)
            .then((res1) => {
                // res1 = res1.json()
                setData(res1)
                // console.log(res1)
            })
    }


    let changeProduct = (e) => {
        let newproducts = { ...products }
        newproducts[e.target.id] = e.target.value
        setProducts(newproducts)
    }

    console.log(products);

    let updateProducts = (d) => {
        axios.put(`${url}/${d.target.id}`, products)
            .then((res) => console.log(res))
    }

    return (
        <div>
            <div id='tablediv'>

                <div>
                    <h1>Product List for Admin</h1>
                </div>
                <div>
                    <table border="1px" >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Change Product Name</th>
                                <th>Change Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            {data.map(({ id, pname, price }) => {
                                return (

                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{pname}</td>
                                        <td>₹{price}</td>
                                        <td><input className='prodips' id="pname" type="text" onChange={changeProduct} required /><br />  </td>
                                        <td><input className='prodips' id="price" type="number" onChange={changeProduct} required /></td>

                                        <td> <button id={id} onClick={updateProducts}>Update</button> <button style={{ backgroundColor: "coral" }} id={id} onClick={handleDelete} >Delete</button> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdmProducts