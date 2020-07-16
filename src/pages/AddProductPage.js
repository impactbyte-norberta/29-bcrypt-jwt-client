import React, { useState } from 'react';

function AddProductPage() {
    const [cartData, setCartData] = useState({
        name: '',
        price: 0,
    });

    function handleChange(event) {
        setCartData({
            ...cartData,

            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user')}`,
            },
            body: JSON.stringify(cartData),
        };

        const response = await fetch(
            `http://localhost:5000/api/products`,
            options
        );
        const result = await response.json();

        alert(result.message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                id='product'
                placeholder='Nama produk'
                onChange={handleChange}
                value={cartData.name}
            />
            <input
                type='text'
                name='price'
                id='price'
                onChange={handleChange}
                value={cartData.quantity}
            />

            <input type='submit' value='Checkout' />
        </form>
    );
}

export default AddProductPage;
