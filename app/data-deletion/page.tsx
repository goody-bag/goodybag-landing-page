"use client";

import {
  Trash2,
  Mail,
  Smartphone,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  User,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

export default function DataDeletion() {
  const handleEmailDeletion = () => {
    const subject = "Request for Account Deletion";
    const body = `Dear GoodyBag Team,

I would like to request the deletion of my GoodyBag account and all associated personal information.

Please find my account details below:
- Registered Name: [Your Full Name]
- Phone Number: [Your Phone Number]
- Email Address: [Your Email Address]

I understand that:
- All associated personal data, including profile, contact details, and order history, will be permanently removed within 7-10 business days
- Data required by law (e.g., invoices or transaction records) will be retained and anonymized
- My profile and login access will be disabled
- This action is irreversible

Thank you for your assistance.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:admin@goodybag.africa?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Trash2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-secondary mb-4">
              User Data Deletion Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you wish to delete your GoodyBag account or any personal
              information associated with it, you can do so through the
              following methods.
            </p>
            <div className="mt-6">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <FileText className="h-4 w-4 mr-2" />
                View Privacy Policy
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* In-App Deletion */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-6 flex items-center">
                <Smartphone className="h-6 w-6 text-primary mr-3" />
                1. In-App Deletion
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        <strong>Steps to delete your account:</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Open the GoodyBag App</li>
                  <li>Go to Settings → Account → Delete My Account</li>
                  <li>Confirm your deletion request</li>
                </ol>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Once confirmed, all associated personal data,
                        including profile, contact details, and order history,
                        will be permanently removed within{" "}
                        <strong>7 business days</strong>, except data required
                        by law (e.g., invoices or transaction records).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Request */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-6 flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                2. Email Request
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Alternatively, you can send an email request to:{" "}
                  <a
                    href="mailto:admin@goodybag.africa"
                    className="text-primary hover:underline font-medium"
                  >
                    admin@goodybag.africa
                  </a>
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Subject:</strong> Request for Account Deletion
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Please include your registered name, phone number, and email
                  address.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        Our team will verify your identity and confirm
                        deletion within <strong>7–10 business days</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleEmailDeletion}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Deletion Request Email
                  </button>
                </div>
              </div>
            </div>

            {/* What Happens After Deletion */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-6 flex items-center">
                <Shield className="h-6 w-6 text-primary mr-3" />
                3. What Happens After Deletion
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Trash2 className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">
                          <strong>
                            Your profile and login access will be disabled.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Trash2 className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">
                          <strong>
                            Your past orders and personal data will be
                            permanently erased from our servers.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>
                            Data retained for legal or regulatory purposes
                          </strong>{" "}
                          (such as proof of payment) will be stored securely
                          and anonymized.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <User className="h-6 w-6 text-primary mr-3" />
                4. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any privacy or data-related issues, contact us at:
              </p>
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-2 text-gray-700">
                  <p>
                    <a
                      href="mailto:admin@goodybag.africa"
                      className="text-primary hover:underline font-medium"
                    >
                      admin@goodybag.africa
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    You can also use the contact us URL on the website for
                    user deletion requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-red-800 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                Important Notice
              </h2>
              <div className="space-y-3 text-red-700">
                <p>
                  <strong>
                    Account deletion is permanent and cannot be undone.
                  </strong>{" "}
                  Please ensure you have downloaded any important information
                  before proceeding with account deletion.
                </p>
                <p>
                  If you have any active orders or pending transactions,
                  please complete them before requesting account deletion.
                </p>
                <p>
                  For any questions or concerns about the deletion process,
                  please contact our support team before proceeding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

