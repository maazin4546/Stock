'use client'
import React, { useEffect, useState } from 'react'
import Form from './Form'
import Table from './Table'

const Home = () => {

    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: ""
    })

    const [productList, setProductList] = useState([])



    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/api/getProduct')
                const data = await response.json();
                setProductList(data)

            } catch (error) {
                return NextResponse.json({ error: "failed to send products" })
            }
        }
        fetchProduct()
    }, [])

    const handleproduct = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            console.log("Product added successfully");

        } catch (error) {
            return NextResponse.json({ error: "failed to send products" })
        }
    }


    const deleteProduct = async (productId) => {
        try {
            const response = await fetch('/api/deleteproduct', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: productId }),
            });

            const data = await response.json();
            console.log("Product deleted successfully:", data);

        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleUpdate = async (id, name, quantity, price) => {
        try {
            const payload = { id, name, quantity, price };

            const response = await fetch('/api/updateprodut', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Product updated successfully!');
                console.log('Updated Product:', data.product);
            } else {
                alert(`Error: ${data.error}`);
                console.error('Update Error:', data.error);
            }
        } catch (error) {
            console.error('Network Error:', error);
            alert('Failed to update product. Please try again later.');
        }
    };


    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold text-center mb-6 text-white">Add New Stocks</h1>

                <Form product={product} setProduct={setProduct} handleproduct={handleproduct} />

                <div className='mt-10'>
                    <h1 className="text-2xl font-semibold text-center mb-6 text-white">Your Current Stock</h1>

                    <Table productList={productList} deleteProduct={deleteProduct} handleUpdate={handleUpdate} />
                </div>

            </div>
        </>
    )
}

export default Home