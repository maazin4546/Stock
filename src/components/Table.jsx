'use client'
import React, { useState } from 'react'
import { FaEdit, FaTrash, FaShoppingCart } from 'react-icons/fa';

const Table = ({ productList, deleteProduct, handleUpdate }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item._id === product._id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    return (
        <div>
            {/* Product Table */}
            <table className="min-w-full rounded-lg bg-gray-200 border border-gray-700">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Name</th>
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Quantity</th>
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Price</th>
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.length > 0 ? (
                        productList.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-300">
                                <td className="py-2 px-4 border-b border-gray-700 text-center">{product.name}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-center">{product.quantity}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-center">{product.price}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-center">
                                    <button className="text-blue-500 hover:text-blue-700 mx-1">
                                        <FaEdit onClick={() => handleUpdate(product._id, product.name, product.quantity, product.price)} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700 mx-1">
                                        <FaTrash onClick={() => deleteProduct(product._id)} />
                                    </button>
                                    <button className="text-green-500 hover:text-green-700 mx-1" onClick={() => addToCart(product)}>
                                        <FaShoppingCart onClick={() => addToCart(product.name)} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-2 px-4 text-center text-gray-400">No products found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Cart Table */}
            <h2 className="mt-8 text-2xl font-semibold text-white">Cart</h2>
            <table className="min-w-full rounded-lg bg-gray-200 border border-gray-700 mt-4">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Name</th>
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Quantity</th>
                        <th className="py-2 px-4 border-b border-gray-700 text-center">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-300">
                                <td className="py-2 px-4 border-b border-gray-700 text-center">{item.name}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-center">{item.quantity}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-center">{item.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="py-2 px-4 text-center text-gray-400">Cart is empty</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default Table