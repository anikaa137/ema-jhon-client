import React from 'react';
// import fakeData from '../../fakeData'

const Inventory = () => {
    const handleAllProduct = () => {
        const product = {}
        fetch('https://pure-brook-50832.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(product)
        })
        // console.log("add")

    }

    return (
        <div>
            <form action="">
               <p><span>Name</span><input type="text"/></p>
               <p><span>Price;</span><input type="text"/></p>
               <p><span>Quantity</span><input type="text"/></p>
               <p><span>Product Image</span><input type="file"/></p>
            <button onClick={handleAllProduct}>Add ALl Product</button>
            </form>
        </div>
    );
};

export default Inventory;