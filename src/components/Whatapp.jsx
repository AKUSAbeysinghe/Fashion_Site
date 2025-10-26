import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Your WhatsApp number
  const message = "Hello! I have a question."; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200 transition-all z-50"
    >
      <FaWhatsapp size={28} color="black" />
    </a>
  );
}
