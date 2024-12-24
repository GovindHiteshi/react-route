import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/Reducers';
import { useRazorpay } from "react-razorpay";

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const { error, isLoading, Razorpay } = useRazorpay();

    const num = cartItems.reduce((total, item) => total + item.price, 0);
    const totalAmount = Math.round(num * 100) / 100

    useEffect(() => {
        console.log(error);
    })

    const handleRemove = (id) => {
        dispatch(removeItem({ id }));
    };

    const handlePayment = () => {
        const options = {
            key: "rzp_test_00",
            amount: totalAmount * 100,
            currency: "INR",
            name: "FOOD TECH",
            description: "FOOD",
            order_id: "order_9ASSXWu170AAAAgUtm",
            handler: (response) => {
                console.log(response);
                alert("Payment Successful!");
            },
            prefill: {
                name: "GOVIND",
                email: "GOVIND.doe@example.com",
                contact: "85858585858",
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    return (
        <div className="bg-gray-100 p-4 max-w-7xl place-content-center m-auto">
            <h1 className="text-3xl text-center font-bold mb-8">My Cart</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg
                         transition-shadow duration-300 h-100  flex flex-col justify-between"
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
                                <p className="text-sm text-gray-600 ">{item.description}</p>
                            </div>
                        </div>

                        <div className="p-4 grid grid-cols-2">

                            <p className="text-xl font-bold text-green-600 mt-2">₹ {item.price}</p>

                            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-900 transition duration-200"
                                onClick={() => { handleRemove(item.id) }}>
                                Remove
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
                <div className=" bg-white rounded-lg shadow-md p-5">
                    <p className="text-lg font-semibold text-gray-800">Total Amount: ₹ {totalAmount}</p>
                </div>

                <div className=" p-4 bg-white rounded-lg shadow-md">
                    <button
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 transition duration-200"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
