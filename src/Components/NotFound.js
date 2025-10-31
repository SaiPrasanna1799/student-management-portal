import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-4">404 — Page not found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">Go Home</Link>
      </div>
    </div>
  );
}
