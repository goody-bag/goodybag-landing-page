"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3
              className="text-5xl font-bold mb-4"
              style={{ lineHeight: "1.5" }}
            >
              GoodyBag
            </h3>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Gifting made personal, beautiful, and stress-free. Join us in
              creating unforgettable moments through thoughtful gifting.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Join Waitlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact & Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:admin@goodybag.africa"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span>📧</span>
                  <span>admin@goodybag.africa</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/data-deletion"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Data Deletion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} GoodyBag. All rights reserved. Made with ❤️ for
              gifting.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <span>Back to top</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
