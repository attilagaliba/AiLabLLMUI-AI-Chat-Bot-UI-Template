"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvc: string;
}

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  const billing = searchParams.get("billing");

  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") || "";
    }

    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 5);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Handle successful payment
      console.log("Payment successful");
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Get plan details based on planId
  const getPlanDetails = () => {
    // This would typically come from your plans database
    const plans = {
      basic: {
        name: "Basic Plan",
        price: billing === "yearly" ? 7.2 : 9, // 20% discount for yearly
      },
      pro: {
        name: "Professional Plan",
        price: billing === "yearly" ? 23.2 : 29,
      },
      enterprise: {
        name: "Enterprise Plan",
        price: billing === "yearly" ? 79.2 : 99,
      },
    };

    return plans[planId as keyof typeof plans] || plans.basic;
  };

  const plan = getPlanDetails();
  const isYearly = billing === "yearly";
  const subtotal = plan.price;
  const discount = isYearly ? (subtotal * 0.2) : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Complete your purchase
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              You're just one step away from accessing all features
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-white shadow-sm rounded-lg">
              {/* Order Summary */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {isYearly ? "Annual billing" : "Monthly billing"}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${subtotal.toFixed(2)}/mo
                    </p>
                  </div>
                  {isYearly && (
                    <div className="flex justify-between text-sm">
                      <p className="text-green-600">Annual discount (20%)</p>
                      <p className="text-green-600">-${discount.toFixed(2)}/mo</p>
                    </div>
                  )}
                  <div className="pt-4 flex justify-between border-t border-gray-200">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">
                      ${total.toFixed(2)}/mo
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit} className="px-6 py-4 space-y-6">
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cardName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiry date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="saveCard"
                    name="saveCard"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="saveCard"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Save card for future payments
                  </label>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      isProcessing ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      `Pay $${total.toFixed(2)}/mo`
                    )}
                  </button>
                </div>
              </form>

              {/* Security Notice */}
              <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">
                    Payments are secure and encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 