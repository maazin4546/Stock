import React from 'react'

const Form = ({ product, setProduct, handleproduct }) => {
    return (
        <div>
            <form className="max-w-md mx-auto bg-gray-300 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={product.name}
                        name='name'
                        placeholder='Enter what product you want to add'
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        value={product.quantity}
                        name='quantity'
                        placeholder='How much quantity'
                        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                        className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="price">Price</label>
                    <input
                        type="number"
                        value={product.price}
                        name='price'
                        placeholder='Price of product'
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button onClick={handleproduct} type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form