import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/Reducers';


function Products() {
    const data = useLoaderData();
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [cartCategory, setCartCategory] = useState([]);
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const newCartCategory = new Set();
        newCartCategory.add("All Category")
        data.forEach((item) => {
            newCartCategory.add(item.category);
        });
        setCartCategory([...newCartCategory]);
        setDataList(data);
    }, [data]);



    function category_click(category, index) {
        console.log(index)
        if (!index == 0) {
            let filterData = data.filter((item) => item.category == category)
            setDataList(filterData);
        } else {
            setDataList(data);
        }
    }

    return (
        <div className='grid grid-cols-6'>

            {cartCategory ? <div className='col-span-1 text-center no-scroll '>
                <p className="font-bold text-xl bg-red-600 ">Category</p>
                {cartCategory.map((item, index) => (
                    <div key={index} className="uppercase cursor-pointer m-2 hover:bg-sky-100   key={index} ">
                        <button className="uppercase cursor-pointer  p-2" onClick={() => { category_click(item, index) }}> {item}</button>
                    </div>
                ))}
            </div> : null}

            <div className="bg-gray-100 p-4 max-w-7xl place-content-center m-auto col-span-4">
                <h1 className="text-3xl text-center font-bold mb-8">Our Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                    {dataList.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg
                         transition-shadow duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="h-40 bg-gray-300">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-full h-full object-scale-down"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                                </div>
                            </div>

                            <div className="p-4 grid grid-cols-2">

                                <p className="text-xl font-bold text-green-600 mt-2">₹ {item.price}</p>

                                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-800 transition duration-200"
                                    onClick={() => { dispatch(addToCart(item)) }}>
                                    Add to cart
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col-span-1'>
            </div>
        </div>
    );

}

export default Products;


export const githubInfoLoader = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
            throw new Error(`API ERROR: ${res.status} ${res.statusText}`);
        }
        const response = await res.json();
        if (!response.products) {
            throw new Error("Products not found in the response");
        }
        return response.products;
    } catch (error) {
        console.error("Error fetching products:", error.message);
        throw error;
    }
};


