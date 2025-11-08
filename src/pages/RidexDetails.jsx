import React from "react";
import { ExternalLink } from "lucide-react";

const RidexDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        RIDEX – Smart Ride Sharing Platform
      </h1>

      {/* Links */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://ridex-ride-sharing.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ExternalLink size={18} /> Live
        </a>
        <a
          href="https://github.com/rubel6610/RideX-Frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ExternalLink size={18} /> Client Repo
        </a>
        <a
          href="https://github.com/rubel6610/ridex-backend"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ExternalLink size={18} /> Server Repo
        </a>
      </div>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          RIDEX is a smart ride-sharing platform that connects riders and
          passengers for real-time, safe, and convenient trips. It was
          collaboratively developed by a six-member team with a focus on modern
          UI, performance, and scalability.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Role-based dashboards for Admin, Rider, and Passenger</li>
          <li>Real-time ride tracking and history management</li>
          <li>Performance analytics and user activity visualization</li>
          <li>Secure payment gateway integration (SSLCommerz)</li>
          <li>Real-time communication via Socket.io</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <p className="text-gray-700">
          <strong>Frontend:</strong> Next.js, React, ShadCN, GSAP, TailwindCSS <br />
          <strong>Backend:</strong> Node.js, Express.js, MongoDB, Socket.io, JWT <br />
          <strong>Others:</strong> AI features, secure payment integration
        </p>
      </section>

      {/* Team Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Team Collaboration</h2>
        <p className="text-gray-700">
          This project was built by a team of six developers following Agile
          methodology. My role focused on frontend UI/UX and integration with
          the backend APIs.
        </p>
      </section>
    </div>
  );
};

export default RidexDetails;
