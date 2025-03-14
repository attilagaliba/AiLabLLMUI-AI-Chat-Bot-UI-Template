"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// Sample data
const monthlyData = [
  { name: "January", messages: 2400, users: 400 },
  { name: "February", messages: 1398, users: 300 },
  { name: "March", messages: 9800, users: 600 },
  { name: "April", messages: 3908, users: 500 },
  { name: "May", messages: 4800, users: 700 },
  { name: "June", messages: 3800, users: 550 },
];

const dailyUsage = [
  { hour: "00:00", activeUsers: 200 },
  { hour: "04:00", activeUsers: 150 },
  { hour: "08:00", activeUsers: 450 },
  { hour: "12:00", activeUsers: 850 },
  { hour: "16:00", activeUsers: 750 },
  { hour: "20:00", activeUsers: 500 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const chartVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const UsagePage = () => {
  const [timeRange, setTimeRange] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900">Usage Statistics</h1>
          <p className="mt-2 text-sm text-gray-500">
            Platform usage metrics and analytics data
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {[
            {
              title: "Total Users",
              value: "3,897",
              increase: "12%",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ),
            },
            {
              title: "Total Messages",
              value: "26,104",
              increase: "18%",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              ),
            },
            {
              title: "Average Response Time",
              value: "1.2s",
              increase: "24%",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {card.title}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {card.value}
                        </div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <svg
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Increase</span>
                          {card.increase}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </motion.div>

        {/* Charts */}
        <div className="space-y-8">
          {/* Messages and Users Chart */}
          <motion.div
            variants={chartVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Messages and Users Statistics
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="messages" fill="#8b5cf6" />
                  <Bar dataKey="users" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Daily Active Users Chart */}
          <motion.div
            variants={chartVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Daily Active Users
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyUsage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="activeUsers"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UsagePage; 