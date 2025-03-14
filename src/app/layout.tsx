"use client";
import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white shadow-sm fixed w-full z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0 flex items-center"
                >
                  <a href="/" className="text-xl font-bold text-primary-600">
                    AI Chat Lab
                  </a>
                </motion.div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {[
                    { href: "/", text: "Home" },
                    { href: "/plans", text: "Plans" },
                    { href: "/faq", text: "FAQ" },
                    { href: "/settings", text: "Settings" },
                    { href: "/usage", text: "Usage" },
                    { href: "/admin", text: "Admin" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                <motion.a
                  href="/auth/login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
                >
                  Sign In
                </motion.a>
                <motion.a
                  href="/auth/register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
                >
                  Sign Up
                </motion.a>
              </div>
              <div className="flex items-center sm:hidden">
                <motion.button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                transition={{ duration: 0.2 }}
                className="sm:hidden"
              >
                <div className="pt-2 pb-3 space-y-1">
                  {[
                    { href: "/", text: "Home" },
                    { href: "/plans", text: "Plans" },
                    { href: "/faq", text: "FAQ" },
                    { href: "/settings", text: "Settings" },
                    { href: "/admin", text: "Admin" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.text}
                    </motion.a>
                  ))}
                  <div className="pt-4 pb-3 border-t border-gray-200">
                    <motion.a
                      href="/auth/login"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Sign In
                    </motion.a>
                    <motion.a
                      href="/auth/register"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Sign Up
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
        <div className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
