import React, { useState } from "react";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    bankAccount: "",
  });

  const [selectedPackage, setSelectedPackage] = useState({
    id: 1,
    name: "Bali Paradise Escape",
    duration: "7 Days / 6 Nights",
    price: 89999,
    travelers: 2,
    image: "/images/bali-package.jpg",
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bank");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsProcessing(false);
    alert("Payment Successful! Your adventure awaits! 🎉");
  };

  const travelPackages = [
    {
      id: 1,
      name: "Bali Paradise Escape",
      duration: "7 Days / 6 Nights",
      price: 89999,
      travelers: 2,
      image: "/images/bali-package.jpg",
    },
    {
      id: 2,
      name: "Swiss Alps Adventure",
      duration: "5 Days / 4 Nights",
      price: 125999,
      travelers: 2,
      image: "/images/swiss-package.jpg",
    },
    {
      id: 3,
      name: "Tokyo Cultural Journey",
      duration: "8 Days / 7 Nights",
      price: 149999,
      travelers: 2,
      image: "/images/tokyo-package.jpg",
    },
  ];

  const addOns = [
    { name: "Travel Insurance", price: 2999, selected: true },
    { name: "Airport Transfer", price: 1999, selected: false },
    { name: "Adventure Activities Pack", price: 8999, selected: false },
    { name: "Premium Dining Experience", price: 5999, selected: false },
  ];

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: "🏦",
      description: "Direct bank transfer",
    },
  ];

  const subtotal = selectedPackage.price;
  const tax = subtotal * 0.18; // 18% GST
  const insurance = addOns[0].selected ? addOns[0].price : 0;
  const total = subtotal + tax + insurance;

  const formatIndianRupees = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Complete Your Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Secure your spot for an unforgettable adventure. Your dream trip is
          just a payment away!
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Package Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Selected Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative h-48 bg-gradient-to-r from-[#E65F25] to-orange-400">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-[#E65F25] px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✈️ MOST POPULAR
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {selectedPackage.name}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#E65F25]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {selectedPackage.duration}
                </p>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#E65F25]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {selectedPackage.travelers} Travelers
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-black text-[#E65F25]">
                    {formatIndianRupees(selectedPackage.price)}
                  </span>
                  <span className="text-sm text-gray-500">per package</span>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-all duration-300">
                  Change Package
                </button>
              </div>
            </div>

            {/* Add-ons */}
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#E65F25] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  Choose Payment Method
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedPaymentMethod === method.id
                          ? "border-[#E65F25] bg-orange-50 shadow-md"
                          : "border-gray-200 hover:border-[#E65F25] hover:bg-orange-50"
                      }`}
                    >
                      <div className="text-2xl mb-2">{method.icon}</div>
                      <div className="text-sm font-semibold text-gray-900">
                        {method.name}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {method.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Bank Transfer Details */}
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#E65F25] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    Bank Transfer Details
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Bank Details for Transfer:
                      </h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <p>
                          <strong>Bank:</strong> Bank of Maharashtra
                        </p>
                        <p>
                          <strong>Account Name:</strong> Ghar Se Faraar Pvt Ltd
                        </p>
                        <p>
                          <strong>Account Number:</strong> 60545121417
                        </p>
                        <p>
                          <strong>IFSC:</strong> MAHB0001244
                        </p>
                        <p>
                          <strong>Branch:</strong> Dwarka Sector 19
                        </p>
                        <p>
                          <strong>Account Type:</strong> Current
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="w-12 h-8 bg-green-500 rounded flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xs">
                          SSL
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        Secure Connection
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-8 bg-[#E65F25] rounded flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xs">
                          PCI
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        PCI Compliant
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-8 bg-purple-500 rounded flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xs">
                          256
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">Encrypted</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xs">
                          RBI
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        RBI Approved
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                {/* <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 px-6 rounded-xl font-black text-lg transition-all duration-300 ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#E65F25] to-orange-500 hover:from-[#d4551f] hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  } text-white`}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Your Adventure...
                    </div>
                  ) : (
                    `Pay ${formatIndianRupees(total)}`
                  )}
                </button> */}

                <p className="text-center text-sm text-gray-500">
                  By completing this purchase, you agree to our Terms of Service
                  and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
