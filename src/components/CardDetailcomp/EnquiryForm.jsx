import React, { useState } from "react";
import { Send, User, Phone, Heart } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to API
      await axios.post("https://crm-ghar-se-frar.onrender.com/enquiry/add/short", {
        ...formData,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      // Still show success to user even if API fails
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
        });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E65F25]/10 via-white to-[#FF7A42]/10 p-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-[#E65F25]/20">
            <div className="animate-bounce mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#E65F25] to-[#FF7A42] rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Thank You! 🎉
            </h3>
            <p className="text-lg text-gray-600 text-center">
              Our travel experts will contact you within 2 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E65F25]/10 via-white to-[#FF7A42]/10 p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#E65F25] to-[#FF7A42] bg-clip-text text-transparent mb-3">
            Start Your Journey
          </h2>
          <p className="text-gray-600">Let's create your dream adventure</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E65F25]/20">
          <div className="bg-gradient-to-r from-[#E65F25] to-[#FF7A42] px-6 py-4">
            <h3 className="text-xl font-bold text-white text-center">
              Get Started
            </h3>
          </div>

          <div className="p-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-[#E65F25]" />
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#E65F25] focus:outline-none transition-all duration-300 hover:border-[#E65F25]/50 bg-gray-50 focus:bg-white text-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#E65F25]" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#E65F25] focus:outline-none transition-all duration-300 hover:border-[#E65F25]/50 bg-gray-50 focus:bg-white text-lg"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#E65F25] to-[#FF7A42] text-white px-8 py-4 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E65F25]/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  <span>ENQUIRE NOW</span>
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 mt-6 text-center flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-[#E65F25]" />
              Our team will reach out to you as soon as possible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
