"use client"
import React from 'react'

const TicketForm = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-primary text-white dark:text-black text-center font-bold uppercase">
        Buy A Ticket
      </div>
      <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Re-Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reemail"
            type="reemail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Select a date"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Number of Tickets
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ticketCount"
            type="number"
            min="1"
            max="5"
            placeholder="Enter number (max 5)"
            required
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-start space-x-2">
            <input
              type="checkbox"
              required
              className="mt-1 form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700">
              I accept all <strong>terms and conditions</strong>,{" "}
              <strong>privacy & policy</strong>,{" "}
              <strong>refund and return policy</strong>.
            </span>
          </label>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-chart-3 text-black font-semibold py-2 px-4 rounded hover:bg-pimary focus:outline-none focus:shadow-outline"
            type="submit">
            Book Ticket
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default TicketForm