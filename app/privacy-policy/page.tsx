import type { Metadata } from "next";
import {
  Shield,
  Mail,
  Globe,
  User,
  Lock,
  Eye,
  Trash2,
  Cookie,
  Baby,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - GoodyBag",
  description:
    "GoodyBag's Privacy Policy explains how we collect, use, disclose, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-secondary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and protect your personal information.
            </p>
            <div className="mt-4 text-sm text-gray-600">
              <strong>Effective Date:</strong> January 2025
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-primary mr-3" />
                1. Introduction
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to GoodyBag ("GoodyBag," "we," "our," or "us"). Your
                  privacy is important to us. This Privacy Policy explains how we
                  collect, use, disclose, and protect your personal information
                  when you use our mobile application, website, and related
                  services (collectively, the "Platform").
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using GoodyBag, you agree to the terms of this Privacy
                  Policy. If you do not agree, please do not use our services.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-6 flex items-center">
                <Eye className="h-6 w-6 text-primary mr-3" />
                2. Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-xl text-secondary mb-3">
                    a. Personal Information:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Delivery address</li>
                    <li>
                      Payment information (handled securely via our
                      third-party processors)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-xl text-secondary mb-3">
                    b. Usage and Device Information:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address</li>
                    <li>Device type and model</li>
                    <li>App version, OS version</li>
                    <li>Location data (for delivery purposes)</li>
                    <li>
                      Log and activity data (how you interact with the app)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-xl text-secondary mb-3">
                    c. Transactional Information:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Items ordered, prices, order history, and payment
                      confirmation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-xl text-secondary mb-3">
                    d. Optional Information:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Feedback, reviews, and communication with our support
                      team
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <User className="h-6 w-6 text-primary mr-3" />
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Process and deliver your orders efficiently</li>
                <li>
                  Communicate with you about orders, promotions, or updates
                </li>
                <li>Improve app performance and user experience</li>
                <li>Detect and prevent fraud or unauthorized access</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            {/* Sharing of Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <Globe className="h-6 w-6 text-primary mr-3" />
                4. Sharing of Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>We do not sell or rent user data.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information only with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Delivery agents and vendors to fulfill your orders
                </li>
                <li>Payment partners to process secure transactions</li>
                <li>
                  Service providers (IT, analytics, cloud storage) under
                  confidentiality agreements
                </li>
                <li>
                  Law enforcement if required by law or to protect our legal
                  rights
                </li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <Trash2 className="h-6 w-6 text-primary mr-3" />
                5. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain user information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Fulfill the purposes outlined in this policy</li>
                <li>
                  Comply with legal obligations (e.g., tax or accounting laws)
                </li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                When no longer needed, your data will be securely deleted or
                anonymized.
              </p>
            </div>

            {/* Security */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <Lock className="h-6 w-6 text-primary mr-3" />
                6. Security of Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use encryption, firewalls, and secure servers to protect
                your data from unauthorized access or misuse. However, no
                online platform is 100% secure, and we cannot guarantee
                absolute protection.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <User className="h-6 w-6 text-primary mr-3" />
                7. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Request a copy of your data (data portability)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can exercise these rights by contacting us at:{" "}
                <a
                  href="mailto:admin@goodybag.africa"
                  className="text-primary hover:underline"
                >
                  admin@goodybag.africa
                </a>
              </p>
              <div className="mt-4">
                <Link
                  href="/data-deletion"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Request Data Deletion
                </Link>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <Cookie className="h-6 w-6 text-primary mr-3" />
                8. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance app
                performance, store preferences, and analyze usage patterns.
                You may disable cookies in your browser or app settings,
                though some features may not function properly.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <Baby className="h-6 w-6 text-primary mr-3" />
                9. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to children under 16. We do not
                knowingly collect information from minors. If we discover that
                a child's data has been collected, it will be deleted
                immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-primary mr-3" />
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. Updates will
                be posted with a revised "Effective Date." Continued use of
                the app means you accept any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-semibold text-2xl text-secondary mb-4 flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or complaints about this
                Privacy Policy, please contact us:
              </p>
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>GoodyBag</strong>
                  </p>
                  <p>Lagos, Nigeria</p>
                  <p>
                    <a
                      href="mailto:admin@goodybag.africa"
                      className="text-primary hover:underline"
                    >
                      admin@goodybag.africa
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://goodybag.africa"
                      className="text-primary hover:underline"
                    >
                      goodybag.africa
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

