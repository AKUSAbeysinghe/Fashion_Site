

import React from 'react';
import HeroImage from '../assets/Background/About.jpeg';
import BackgroundImage from '../assets/Background/Flower.jpeg';

const Hero = () => {
  const COMPANY = {
    name: "Aurora Fashion Co.",
    website: "https://www.example.com",
    email: "privacy@example.com",
    address: "123 Fashion Ave, Suite 45, Colombo, Sri Lanka",
    supportEmail: "support@example.com",
    lastUpdated: "2025-08-01",
  };

  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* White content wrapper */}
      <div className="w-[Full] mx-auto bg-white shadow-xl p-8 md:p-12 lg:p-16 flex flex-col items-center">
        
        {/* Privacy Policy Content */}
        <main className="w-full">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Last updated: {COMPANY.lastUpdated}
            </p>
          </header>

          <section className="prose max-w-none prose-headings:scroll-mt-24 text-gray-700">
            <p>
              This Privacy Policy explains how {COMPANY.name} (“we”, “us”, “our”) collects, uses, discloses, and safeguards your information when you visit {COMPANY.website}, use our services, or interact with us online or in-store. By using our website, you agree to the practices described here.
            </p>
          </section>

          {/* Quick Links */}
          <nav className="mt-6 mb-10">
            <ul className="grid gap-2 text-sm md:grid-cols-2 text-gray-700">
              {[ 
                ["Information We Collect", "info-we-collect"],
                ["How We Use Your Information", "how-we-use"],
                ["Payments & Security", "payments-security"],
                ["Cookies & Tracking", "cookies"],
                ["Marketing & Communications", "marketing"],
                ["Analytics & Advertising", "analytics-ads"],
                ["Sharing Your Information", "sharing"],
                ["Data Retention", "retention"],
                ["Your Rights (GDPR/CCPA)", "your-rights"],
                ["International Transfers", "transfers"],
                ["Children’s Privacy", "children"],
                ["Third-Party Links", "third-party"],
                ["Changes to This Policy", "changes"],
                ["Contact Us", "contact"],
              ].map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} className="underline decoration-gray-300 hover:decoration-gray-700">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Example Section */}
          <section id="info-we-collect" className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li><span className="font-medium">Account & Profile:</span> name, email, password (hashed), phone, shipping/billing addresses.</li>
              <li><span className="font-medium">Order Details:</span> products purchased, size, preferences, gift messages, order history.</li>
              <li><span className="font-medium">Payment Info:</span> processed securely by our payment processors; we do not store full card numbers.</li>
            </ul>
          </section>

          {/* ... Add more sections as needed ... */}

        </main>
      </div>
    </div>
  );
};

export default Hero;
