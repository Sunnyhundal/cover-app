import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hid
den"
          >
            <NavLink
              to="/"
              className="text-white px-3 py-2 text-xl font-medium"
            >
              Sunny Hundal
            </NavLink>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="text-white px-3 py-2 text-xl font-medium hover: rounded-md bg-gray-700"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-xl font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-xl font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
