"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  billing: "monthly" | "yearly";
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    billing: "monthly",
    description: "Perfect for individuals and small projects",
    features: [
      { name: "Up to 100 chats per month", included: true },
      { name: "Basic AI features", included: true },
      { name: "Email support", included: true },
      { name: "Export chat history", included: false },
      { name: "Custom AI training", included: false },
      { name: "API access", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    id: "pro",
    name: "Professional",
    price: 29,
    billing: "monthly",
    description: "Ideal for professionals and growing teams",
    features: [
      { name: "Up to 1000 chats per month", included: true },
      { name: "Advanced AI features", included: true },
      { name: "Priority email support", included: true },
      { name: "Export chat history", included: true },
      { name: "Custom AI training", included: true },
      { name: "API access", included: false },
      { name: "Priority support", included: false },
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    billing: "monthly",
    description: "For large organizations with custom needs",
    features: [
      { name: "Unlimited chats", included: true },
      { name: "All AI features", included: true },
      { name: "24/7 support", included: true },
      { name: "Export chat history", included: true },
      { name: "Custom AI training", included: true },
      { name: "API access", included: true },
      { name: "Priority support", included: true },
    ],
  },
];

const PlansPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const getAnnualPrice = (monthlyPrice: number) => {
    const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount for annual billing
    return Math.round(annualPrice / 12);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose your plan
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Select the perfect plan for your needs. All plans include our core AI features.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative bg-white rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className={`${
                billingCycle === "monthly"
                  ? "relative w-1/2 bg-primary-100 border-primary-200 shadow-sm text-primary-600"
                  : "ml-0.5 relative w-1/2 border border-transparent text-gray-700"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`${
                billingCycle === "yearly"
                  ? "relative w-1/2 bg-primary-100 border-primary-200 shadow-sm text-primary-600"
                  : "ml-0.5 relative w-1/2 border border-transparent text-gray-700"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setBillingCycle("yearly")}
            >
              Annual billing
              <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg shadow-sm divide-y divide-gray-200 ${
                plan.highlighted
                  ? "border-2 border-primary-500 relative"
                  : "border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 -mt-3 mr-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    Popular
                  </span>
                </div>
              )}
              <div className="p-6 bg-white rounded-t-lg">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {plan.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${billingCycle === "monthly" ? plan.price : getAnnualPrice(plan.price)}
                  </span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <Link
                  href={`/payment?plan=${plan.id}&billing=${billingCycle}`}
                  className={`mt-8 block w-full bg-primary-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-700 ${
                    plan.highlighted ? "hover:bg-primary-700" : "hover:bg-primary-700"
                  }`}
                >
                  Get started
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6 bg-white rounded-b-lg">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                      {feature.included ? (
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Can I switch plans later?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                What payment methods do you accept?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Is there a free trial?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Yes, all plans come with a 14-day free trial. No credit card required.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PlansPage; 