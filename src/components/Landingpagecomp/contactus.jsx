import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Send,
  Sparkles,
  CheckCircle,
  X,
} from "lucide-react";
import axios from "axios"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [focusedField, setFocusedField] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.mobile) {
      alert(
        "Please fill in all required fields (First Name, Email, and Mobile)"
      );
      return;
    }

    setLoading(true);

    try {
      const {data} = await axios.post("http://localhost:8000/contact/add", {
       
       ...formData,
      });

     

      if (data.success) {
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
        });

        // Show success modal
        setShowSuccessModal(true);

        // Auto close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Success Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setShowSuccessModal(false)}
      />

      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-2xl border-2 border-orange-200 rounded-3xl shadow-2xl p-8 max-w-md w-full transform animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setShowSuccessModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center">
          <h3
            className="text-2xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "Inter" }}
          >
            Thank You!
          </h3>
          <p
            className="text-gray-600 mb-2 leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            Your message has been received successfully.
          </p>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter" }}>
            We'll get back to you within 24 hours.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-3000 ease-linear"
            style={{ width: showSuccessModal ? "0%" : "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: "url('/gallery/Contact_bgimg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-blue-900/20 to-sky-800/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Side - Enhanced Glass Form */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/25 via-white/15 to-white/10 border-2 border-white/40 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] p-10 hover:from-white/30 hover:via-white/20 hover:to-white/15 transition-all duration-700 hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.02] h-full flex flex-col justify-center">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-sm opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-sm opacity-60"></div>

                {/* Header */}
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-orange-400 mr-2 animate-pulse" />
                    <h2
                      className="text-5xl font-bold text-white tracking-tight"
                      style={{ fontFamily: "Inter", fontWeight: "bold" }}
                    >
                      Contact Us
                    </h2>
                    <Sparkles className="w-6 h-6 text-orange-400 ml-2 animate-pulse" />
                  </div>
                  <p
                    className="text-white/95 text-base leading-relaxed font-medium"
                    style={{ fontFamily: "Inter", fontWeight: "500" }}
                  >
                    Let's plan your dream journey, we'll respond within 24 hours
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-7">
                  {/* First Name */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors duration-300">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField("")}
                      placeholder="First Name *"
                      className={`w-full pl-12 pr-4 py-5 bg-white/15 backdrop-blur-sm border-2 ${
                        focusedField === "firstName"
                          ? "border-orange-400/60 bg-white/25"
                          : "border-white/40"
                      } rounded-2xl text-white placeholder-white/80 focus:outline-none focus:ring-4 focus:ring-orange-400/20 transition-all duration-500 hover:bg-white/20 hover:border-white/60 font-medium`}
                      style={{ fontFamily: "Inter", fontWeight: "500" }}
                      disabled={loading}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors duration-300">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Last Name"
                      className={`w-full pl-12 pr-4 py-5 bg-white/15 backdrop-blur-sm border-2 ${
                        focusedField === "lastName"
                          ? "border-orange-400/60 bg-white/25"
                          : "border-white/40"
                      } rounded-2xl text-white placeholder-white/80 focus:outline-none focus:ring-4 focus:ring-orange-400/20 transition-all duration-500 hover:bg-white/20 hover:border-white/60 font-medium`}
                      style={{ fontFamily: "Inter", fontWeight: "500" }}
                      disabled={loading}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Email Address *"
                      className={`w-full pl-12 pr-4 py-5 bg-white/15 backdrop-blur-sm border-2 ${
                        focusedField === "email"
                          ? "border-orange-400/60 bg-white/25"
                          : "border-white/40"
                      } rounded-2xl text-white placeholder-white/80 focus:outline-none focus:ring-4 focus:ring-orange-400/20 transition-all duration-500 hover:bg-white/20 hover:border-white/60 font-medium`}
                      style={{ fontFamily: "Inter", fontWeight: "500" }}
                      disabled={loading}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("mobile")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Mobile Number *"
                      className={`w-full pl-12 pr-4 py-5 bg-white/15 backdrop-blur-sm border-2 ${
                        focusedField === "mobile"
                          ? "border-orange-400/60 bg-white/25"
                          : "border-white/40"
                      } rounded-2xl text-white placeholder-white/80 focus:outline-none focus:ring-4 focus:ring-orange-400/20 transition-all duration-500 hover:bg-white/20 hover:border-white/60 font-medium`}
                      style={{ fontFamily: "Inter", fontWeight: "500" }}
                      disabled={loading}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className={`group w-full relative py-5 px-8 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300/50 transform overflow-hidden cursor-pointer ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:-translate-y-2"
                      }`}
                      style={{
                        backgroundColor: "#E65F25",
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        boxShadow: loading
                          ? "0 8px 25px rgba(230, 95, 37, 0.3)"
                          : "0 15px 40px rgba(230, 95, 37, 0.4)",
                      }}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="text-lg">Submitting...</span>
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative flex items-center justify-center space-x-3">
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <span className="text-lg">Submit</span>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                          </div>
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image with floating + pulsing effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-full flex justify-end h-full">
              <div className="w-full max-w-4xl h-full flex items-center">
                <img
                  src="/gallery/Contact_rightsideimg.png"
                  alt="Contact illustration"
                  className="w-full h-full object-contain transform drop-shadow-2xl ml-auto animate-float-scale"
                  style={{
                    filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.3))",
                    maxWidth: "1500px",
                  }}
                />
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-300/20 rounded-3xl blur-3xl transform scale-125 opacity-60 group-hover:opacity-90 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-3xl blur-2xl transform scale-110 opacity-40 group-hover:opacity-70 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal />}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-scale {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-float-scale {
          animation: float-scale 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
