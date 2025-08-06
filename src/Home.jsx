import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to UniPlug</h1>
        <p className="text-lg md:text-xl mb-6">
          Your Campus Plug for Everything – Food, Fashion, Gadgets, Games & More
        </p>
        <div className="space-x-4">
          <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition">
            Shop Now
          </button>
          <button className="bg-purple-800 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition">
            Become a Vendor
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="font-bold text-xl mb-2">Browse & Shop</h3>
            <p>Explore food, fashion, gadgets and more right from your phone or laptop.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">📅</div>
            <h3 className="font-bold text-xl mb-2">Book Services</h3>
            <p>Book gaming, spa, salon, or hair sessions easily from verified vendors.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-xl mb-2">Get it Delivered</h3>
            <p>All items and services come to your doorstep. Fast, safe, and reliable.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Food 🍕",
            "Drinks 🧃",
            "Fashion 👕",
            "Gadgets 🎧",
            "Salon 💇",
            "Spa 🧖",
            "Gaming 🎮",
            "Essentials 📦",
          ].map((cat) => (
            <div
              key={cat}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-medium">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why UniPlug */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose UniPlug?</h2>
        <p className="max-w-xl mx-auto mb-10">
          We’re built for students. Fast delivery, student-friendly pricing,
          trusted vendors, and secure payment options – all tailored to campus life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Fast Delivery 🚀",
            "Student Prices 💸",
            "Trusted Vendors ✅",
            "Secure Payments 🔐",
          ].map((point) => (
            <div key={point} className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="font-semibold text-lg">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download App */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Download the UniPlug App</h2>
        <p className="mb-6">
          Get the full experience. Shop, book, and manage orders on the go.
        </p>
        <button className="bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold shadow hover:scale-105 transition">
          Download APK
        </button>
      </section>

      {/* Become a Vendor */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Become a Vendor</h2>
        <p className="mb-6">
          Sell your products or services to thousands of students on your campus.
        </p>
        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
          Register Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} UniPlug. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}
