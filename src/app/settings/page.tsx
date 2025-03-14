"use client";
import React, { useState } from "react";
import Image from "next/image";

interface SettingsOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const settingsOptions: SettingsOption[] = [
  {
    id: "profile",
    title: "Profile Settings",
    description: "Update your personal information and profile picture",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Manage your notification preferences",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: "security",
    title: "Security",
    description: "Update your password and security settings",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Customize the look and feel of your interface",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: "billing",
    title: "Billing & Plans",
    description: "Manage your subscription and billing information",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "Control your privacy settings and data usage",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-white rounded-lg shadow">
              <nav className="space-y-1 p-4">
                {settingsOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveSection(option.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === option.id
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className={activeSection === option.id ? "text-primary-700" : "text-gray-400"}>
                      {option.icon}
                    </span>
                    {option.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow p-6">
                {activeSection === "profile" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                            alt="Profile"
                            width={96}
                            height={96}
                            className="object-cover"
                          />
                        </div>
                        <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-lg border border-gray-200">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium">Profile Picture</h3>
                        <p className="text-sm text-gray-500">Update your profile picture</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "notifications" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Receive email updates about your account</p>
                        </div>
                        <button
                          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            notificationsEnabled ? "bg-primary-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              notificationsEnabled ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Push Notifications</h3>
                          <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                        </div>
                        <button
                          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            notificationsEnabled ? "bg-primary-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              notificationsEnabled ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "appearance" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Appearance Settings</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Dark Mode</h3>
                          <p className="text-sm text-gray-500">Toggle dark mode on or off</p>
                        </div>
                        <button
                          onClick={() => setIsDarkMode(!isDarkMode)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            isDarkMode ? "bg-primary-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              isDarkMode ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="mt-6 flex justify-end">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 