"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is AI Chat Lab?",
    answer:
      "AI Chat Lab is an advanced AI-powered chat platform that helps businesses and individuals automate conversations, analyze data, and improve customer engagement through natural language processing and machine learning technologies.",
    category: "General",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer three main pricing tiers: Basic, Professional, and Enterprise. Each plan is available with monthly or annual billing (save 20% with annual billing). You can start with a 14-day free trial to test all features before committing.",
    category: "Billing",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
    category: "Billing",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For Enterprise plans, we also support wire transfers and purchase orders.",
    category: "Billing",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take security seriously. We use industry-standard encryption, regular security audits, and comply with GDPR and other privacy regulations. Your data is encrypted both in transit and at rest.",
    category: "Security",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply sign up for a free trial, no credit card required. You'll have immediate access to all features for 14 days to test the platform.",
    category: "General",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans, with priority support for Professional and Enterprise plans. Enterprise customers also get access to phone support and a dedicated account manager.",
    category: "Support",
  },
  {
    question: "Can I customize the AI responses?",
    answer:
      "Yes, Professional and Enterprise plans include custom AI training capabilities. You can train the AI on your specific use cases, brand voice, and industry terminology.",
    category: "Features",
  },
  {
    question: "Do you offer API access?",
    answer:
      "Yes, Enterprise plans include full API access with comprehensive documentation. This allows you to integrate AI Chat Lab's capabilities into your existing systems and applications.",
    category: "Features",
  },
  {
    question: "What languages are supported?",
    answer:
      "AI Chat Lab supports over 50 languages for chat interactions. Custom training and advanced features are available in major languages, with more being added regularly.",
    category: "Features",
  },
];

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Find answers to common questions about AI Chat Lab
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="sm:w-48">
            <select
              value={selectedCategory || ""}
              onChange={(e) =>
                setSelectedCategory(e.target.value || null)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        expandedItems.includes(index) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <span className="mt-1 text-sm text-gray-500">
                  {faq.category}
                </span>
              </button>
              {expandedItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="prose prose-sm max-w-none text-gray-500">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-500">
              No results found for your search. Try different keywords or{" "}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
                className="text-primary-600 hover:text-primary-500"
              >
                view all questions
              </button>
              .
            </p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <h2 className="text-lg font-medium text-gray-900">
            Still have questions?
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Can't find what you're looking for? Contact our support team for help.
          </p>
          <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 