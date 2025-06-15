// src/components/CardLink.jsx
import React from "react";
import { Link } from "react-router-dom";

function CardLink({ to, icon: Icon, title, description }) {
  return (
    <Link
      to={to}
      className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 border border-blue-200 w-full min-h-[160px] flex flex-col justify-between"
    >
      <h3 className="flex items-center text-teal-600 text-xl font-semibold mb-2">
        <Icon className="mr-2 h-5 w-5" />
        {title}
      </h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </Link>
  );
}

export default CardLink;