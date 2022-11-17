import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
  let [products, setProducts] = useState(
    {
      id: "",
      pname: "",
      price: ""
    }
  )

  let navigate = useNavigate()

  let changeProducts = (e) => {
    console.log(e);
    let newproducts = { ...products }
    newproducts[e.target.id] = e.target.value
    setProducts(newproducts)
    // console.log(newproducts)
  }

  console.log(products);

  let saveProducts = () => {

    if (products.pname !== "" && products.price !== "" && products.id !== "") {
      axios.post("http://localhost:4000/products", products)
        .then((res) => {
          console.log(res);
        })
    }
  }

  let resetfields = () => {
    let getvalid = document.getElementById("id")
    let getvalpname = document.getElementById("pname")
    let getvalprice = document.getElementById("price")
    // let getval = document.querySelector("admip")
    if (getvalid.value != "") {
      getvalid.value = "";
    }
    if (getvalpname != "") {
      getvalpname.value = "";
    }
    if (getvalprice != "") {
      getvalprice.value = "";
    }
    // console.log(getval);
    console.log("clrscr")
  }

  return (
    <div id='superdiv'>
      {/* <h1>Admin</h1> */}
      <div>

        <h1>Add New Product</h1>
      </div>
      <div id='maindiv'>
        <div id='form'>
          <div>
            <input className='admip' type="number" id='id' placeholder=' Product Id' onChange={changeProducts} autoFocus required />
          </div>
          <div>
            <input className='admip' type="text" id='pname' placeholder=' Product Name' onChange={changeProducts} required />
          </div>
          <div>
            <input className='admip' type="number" id='price' placeholder=' Product Price' onChange={changeProducts} required />
          </div>
          <div>
            <button className='savenreset' onClick={saveProducts}>Save</button>
            <button className='savenreset' onClick={resetfields}>Reset</button> <br />
            <button id='view' onClick={() => (navigate('/pro'))}>View All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin