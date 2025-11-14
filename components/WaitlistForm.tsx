"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "individual",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        userType: "individual",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="py-20 bg-gradient-to-br from-primary via-pink-400 to-purple-500 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="bg-white rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-8xl mb-6 animate-bounce">🎉</div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                You're on the list!
              </h2>
              <p className="text-xl text-gray-dark mb-8">
                You're officially on the GoodyBag waitlist! We'll notify you
                once we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary-dark hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Another Person
                </button>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-br from-primary via-pink-400 to-purple-500 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Floating gift icons */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">
        🎁
      </div>
      <div
        className="absolute bottom-20 right-10 text-6xl animate-float opacity-20"
        style={{ animationDelay: "1.5s" }}
      >
        🎀
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-5xl animate-float opacity-20"
        style={{ animationDelay: "2.5s" }}
      >
        🎊
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 text-white animate-slide-up">
            <div className="inline-block mb-4">
              <span className="text-6xl animate-bounce">🎁</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Join the Waitlist
            </h2>
            <p className="text-xl md:text-2xl opacity-95 font-medium">
              Be among the first to experience GoodyBag when we launch on
              December 1st!
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-yellow-300">
              <span className="text-2xl animate-pulse">✨</span>
              <span className="font-semibold">Early Access Benefits</span>
              <span className="text-2xl animate-pulse">✨</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in border-4 border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <label
                  htmlFor="fullName"
                  className="block text-secondary font-bold mb-3 text-lg flex items-center gap-2"
                >
                  <span className="text-primary text-xl">👤</span>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 border-3 rounded-xl text-lg focus:outline-none focus:ring-4 transition-all transform hover:scale-[1.02] ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-300 focus:border-red-500"
                      : "border-gray-300 focus:border-primary focus:ring-primary/30"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-2 font-semibold animate-slide-up">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <label
                  htmlFor="email"
                  className="block text-secondary font-bold mb-3 text-lg flex items-center gap-2"
                >
                  <span className="text-primary text-xl">📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 border-3 rounded-xl text-lg focus:outline-none focus:ring-4 transition-all transform hover:scale-[1.02] ${
                    errors.email
                      ? "border-red-500 focus:ring-red-300 focus:border-red-500"
                      : "border-gray-300 focus:border-primary focus:ring-primary/30"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 font-semibold animate-slide-up">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* User Type */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <label
                  htmlFor="userType"
                  className="block text-secondary font-bold mb-3 text-lg flex items-center gap-2"
                >
                  <span className="text-primary text-xl">🏢</span>
                  Are you signing up as
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/30 transition-all transform hover:scale-[1.02] appearance-none bg-white cursor-pointer font-semibold"
                >
                  <option value="individual">👤 Individual</option>
                  <option value="business">🏢 Business</option>
                </select>
              </div>

              {/* Submit Button */}
              <div
                className="pt-4 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary via-pink-500 to-purple-500 hover:from-primary-dark hover:via-pink-600 hover:to-purple-600 text-white font-bold py-6 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 animate-pulse-glow relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <span className="text-2xl animate-bounce">🎁</span>
                      <div className="absolute inset-0 animate-shimmer"></div>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy note */}
              <p className="text-sm text-gray-medium text-center pt-2">
                🔒 We respect your privacy. Your information will only be used
                to notify you about GoodyBag's launch.
              </p>
            </form>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mt-12 text-center text-white animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm font-semibold opacity-95">
                People Waiting
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-pink-100 bg-clip-text text-transparent">
                Dec 1
              </div>
              <div className="text-sm font-semibold opacity-95">
                Launch Date
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 transform hover:scale-110 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm font-semibold opacity-95">
                Vendor Partners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
