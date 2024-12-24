import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full">
            <div className="relative overflow-hidden
             text-black rounded-lg sm:mx-16 mx-4 sm:py-16 py-8 bg-gradient-to-r grid sm:grid-cols-2 lg:mx-10">

                <div className="inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 mx-auto" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>

                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-12 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-red">
                            Download Now
                            <span className="hidden sm:block text-2xl mt-2 text-black opacity-80">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-8 py-4 font-medium bg-orange-700 rounded-lg hover:opacity-80 transition-all duration-300"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download Now
                        </Link>
                    </div>
                </div>


            </div>

            <div className="sm:mt-24 mt-16 px-4 sm:px-16 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                    A New Era of Innovation
                </h2>

            </div>

            <div className="grid sm:grid-cols-2  gap-12 px-4 sm:px-16 mt-12">

                <div className="flex justify-center sm:justify-end items-center sm:text-right">
                    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione voluptatem, impedit, in exercitationem nesciunt porro odio excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex justify-center sm:justify-right">
                    <img
                        className="w-3/6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                        src="https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image2"
                    />
                </div>
            </div>
            <div className="mt-20"></div>
        </div>
    );
}
