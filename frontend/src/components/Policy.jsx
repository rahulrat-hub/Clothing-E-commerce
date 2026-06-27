import React from "react";

function Policy() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">

      {/* HERO SECTION */}
      <div className="relative h-[40vh] w-full mb-16">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="policy-banner"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Style. Our Promise.
          </h1>
          <p className="mt-3 text-sm md:text-base">
            Simple, transparent policies designed around you.
          </p>
        </div>
      </div>

      {/* SHIPPING */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Shipping Policy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-5 rounded-xl hover:shadow-md transition">
            <p className="font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500 mt-2">
              On orders above ₹999
            </p>
          </div>

          <div className="border p-5 rounded-xl hover:shadow-md transition">
            <p className="font-medium">Delivery Time</p>
            <p className="text-sm text-gray-500 mt-2">
              3–7 business days
            </p>
          </div>

          <div className="border p-5 rounded-xl hover:shadow-md transition">
            <p className="font-medium">Order Tracking</p>
            <p className="text-sm text-gray-500 mt-2">
              Real-time tracking available
            </p>
          </div>
        </div>
      </section>

      {/* RETURNS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Return & Exchange
        </h2>

        <div className="border p-6 rounded-xl hover:shadow-md transition">
          <p className="mb-2">7-day easy return & exchange available.</p>
          <p className="mb-2">
            Refunds are processed within 3–5 working days.
          </p>
          <p className="text-gray-500 text-sm">
            Didn’t match your vibe? We’ve got you covered.
          </p>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Payment Policy
        </h2>

        <div className="flex flex-wrap gap-4">
          {["UPI", "Debit Card", "Credit Card", "Cash on Delivery"].map(
            (item, i) => (
              <div
                key={i}
                className="border px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>
      </section>

      {/* PRIVACY */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Privacy Policy
        </h2>

        <div className="border p-6 rounded-xl hover:shadow-md transition">
          <p>Your data is safe and secure with us.</p>
          <p className="mt-2 text-gray-500 text-sm">
            We never share your personal information with third parties.
          </p>
        </div>
      </section>

      {/* SIZE GUIDE */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Size & Fit Guide
        </h2>

        <div className="border p-6 rounded-xl hover:shadow-md transition">
          <p>Find your perfect fit with our size guide.</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View Size Chart
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          FAQs
        </h2>

        <div className="space-y-4">
          <details className="border p-4 rounded-lg cursor-pointer">
            <summary className="font-medium">
              How do I track my order?
            </summary>
            <p className="text-sm text-gray-500 mt-2">
              You will receive a tracking link after your order is shipped.
            </p>
          </details>

          <details className="border p-4 rounded-lg cursor-pointer">
            <summary className="font-medium">
              Can I cancel my order?
            </summary>
            <p className="text-sm text-gray-500 mt-2">
              Yes, you can cancel before the order is shipped.
            </p>
          </details>

          <details className="border p-4 rounded-lg cursor-pointer">
            <summary className="font-medium">
              What if I receive a damaged product?
            </summary>
            <p className="text-sm text-gray-500 mt-2">
              Contact support within 24 hours for replacement.
            </p>
          </details>
        </div>
      </section>

    </div>
  );
}

export default Policy;

