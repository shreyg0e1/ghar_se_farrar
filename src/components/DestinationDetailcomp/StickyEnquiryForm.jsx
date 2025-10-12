import React, { useState } from "react";
import axios from "axios";
import { Phone, Calendar, Users, X, CheckCircle, Sparkles } from "lucide-react";

export default function StickyEnquiryForm({
  formConfig,
  isMobile = false,
  onClose,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travellerCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Default data structure (can be replaced with props)
  const defaultFormConfig = {
    title: "Leh Ladakh Adventure",
    currentPrice: "₹23,999",
    originalPrice: "₹29,999",
    savings: "₹6,000",
    countryCode: "+91",
  };

  const config = formConfig 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      // Prepare data for API submission
      const submissionData = {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.phone,
        date: formData.travelDate,
        traveller: parseInt(formData.travellerCount) || 1,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      };

      // Send data to API
      const response = await axios.post(
        "https://crm-ghar-se-frar.onrender.com/enquiry/add/full",
       {...submissionData}
        
      );

      console.log("API Response:", response.data);

      // Show success modal
      setShowSuccessModal(true);

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        travelDate: "",
        travellerCount: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      let errorMessage = "An error occurred. Please try again.";

      if (error.response) {
        errorMessage =
          error.response.data.message || "Submission failed. Please try again.";
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. Please try again.";
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    // Close mobile form if open
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`
        ${isMobile ? "w-full h-auto" : "sticky top-[100px]"}
        bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 
        transition-all duration-300 hover:shadow-xl hover:border-[#E65F25]/20 font-inter
        ${isMobile ? "max-h-[85vh] overflow-y-auto" : ""}
      `}
      >
        {/* Mobile Header with Close Button */}
        {isMobile && (
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Book This Trip</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 active:scale-95"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        {/* Header - Responsive */}
        <div className={`${isMobile ? "mb-3" : "mb-4"}`}>
          

          {/* Price Section - Responsive */}
          <div
            className={`flex items-baseline space-x-2 ${
              isMobile ? "mb-1" : "mb-2"
            }`}
          >
            <span
              className={`font-bold text-gray-900 ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              {config.currentPrice}
            </span>
            <span
              className={`text-gray-400 line-through ${
                isMobile ? "text-sm" : "text-base"
              }`}
            >
              {config.originalPrice}
            </span>
          </div>

          {/* Savings Badge - Responsive */}
          <div className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
            SAVE INR {config.savings}
          </div>
        </div>

        {/* Form - Responsive Spacing */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-2 sm:space-y-3 ${isMobile ? "pb-2" : ""}`}
        >
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] transition-all duration-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] transition-all duration-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Phone Number - Responsive */}
          <div className="flex space-x-2">
            <select className="p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] bg-white transition-all duration-200 min-w-[80px]">
              <option>{config.countryCode}</option>
              <option>+1</option>
              <option>+44</option>
              <option>+61</option>
              <option>+65</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] transition-all duration-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Travel Date and Traveller Count - Responsive */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <input
                type="date"
                name="travelDate"
                placeholder="Travel Date"
                value={formData.travelDate}
                onChange={handleInputChange}
                className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] transition-all duration-200 placeholder-gray-500 pr-8"
                required
              />
              <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <input
                type="number"
                name="travellerCount"
                placeholder="Travellers"
                min="1"
                max="20"
                value={formData.travellerCount}
                onChange={handleInputChange}
                className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] transition-all duration-200 placeholder-gray-500 pr-8"
                required
              />
              <Users className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Message - Responsive */}
          <div>
            <textarea
              name="message"
              placeholder="Any special requirements or questions?"
              rows={isMobile ? "2" : "2"}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65F25] focus:border-[#E65F25] transition-all duration-200 placeholder-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button - Responsive */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#E65F25] hover:bg-[#FF6F35] text-white py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#E65F25]/30 cursor-pointer active:scale-[0.98] ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              "Send Enquiry"
            )}
          </button>

          {/* Alternative Contact Options - Mobile Only */}
          {isMobile && (
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center mb-3">
                Or contact us directly
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 active:scale-95"
                  onClick={() =>
                    window.open("https://wa.me/919876543210", "_blank")
                  }
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 active:scale-95"
                  onClick={() =>
                    window.open("https://wa.me/919876543210", "_blank")
                  }
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Trust Indicators - Responsive */}
        {!isMobile && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-xs text-gray-500 flex-wrap gap-1">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Fast Response</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-[#E65F25] rounded-full"></div>
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeSuccessModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl transform animate-scale-in">
            {/* Close Button */}
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Enquiry Submitted!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thank you for your interest! Our travel
                experts will contact you within 24 hours to discuss your perfect
                trip. ✨
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 mb-6 border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                What's Next?
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personal consultation within 24 hours</li>
                <li>• Customized itinerary options</li>
                <li>• Best available pricing</li>
                <li>• All your questions answered</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={closeSuccessModal}
                className="flex-1 bg-gradient-to-r from-[#E65F25] to-[#FF7A42] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Continue Exploring
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Need immediate assistance?{" "}
                <a
                  href="tel:+919876543210"
                  className="text-[#E65F25] font-semibold hover:underline"
                >
                  Call +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
