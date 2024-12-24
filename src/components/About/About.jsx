import React from 'react'

export default function About() {
    return (
        <div className="bg-gray-50 font-sans antialiased">
            {/* Header Section */}
            <header className="bg-blue-600 text-white p-6">
                <nav className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="text-2xl font-bold">My App</div>
                    <div className="space-x-4">
                        <a href="#features" className="hover:text-blue-200">Features</a>
                        <a href="#about" className="hover:text-blue-200">About</a>
                        <a href="#contact" className="hover:text-blue-200">Contact</a>
                    </div>
                </nav>
            </header>

            <section className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 h-screen text-center text-white">
                <div className="space-y-4">
                    <h1 className="text-5xl font-semibold">Welcome to My App</h1>
                    <p className="text-lg">A powerful tool to boost your productivity</p>
                    <button className="px-6 py-2 mt-4 bg-yellow-500 text-gray-800 rounded-md
                     hover:bg-yellow-400 transition">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-8">Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Feature 1</h3>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Feature 2</h3>
                            <p className="mt-2 text-gray-600">Phasellus vel ante eu neque facilisis tincidunt.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Feature 3</h3>
                            <p className="mt-2 text-gray-600">Curabitur ac libero at felis cursus bibendum.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Feature 1</h3>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-8">About Us</h2>
                    <p className="text-lg text-gray-700">
                        We are a team of passionate developers dedicated to creating
                        software solutions that help individuals and businesses succeed.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
                    <p className="mb-6 text-lg">Sign up today and boost your productivity!</p>
                    <button className="px-6 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-400 transition">
                        Sign Up
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="text-center">
                    <p>&copy; 2024 My App. All rights reserved.</p>
                </div>
            </footer>
        </div>

    );
}