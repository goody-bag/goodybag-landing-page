"use client";

export default function Features() {
  const features = [
    {
      icon: "🎨",
      title: "Personalized Gifting",
      description:
        "Create custom gift packages tailored to your recipient's preferences, interests, and occasions. Every gift tells your unique story.",
      color: "from-pink-50 to-rose-50",
      iconBg: "bg-pink-100",
    },
    {
      icon: "📦",
      title: "Smart Packaging Logic",
      description:
        "Intelligent selection of bags, boxes, and wraps based on your items. Beautiful presentation that makes unboxing an experience.",
      color: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: "🤝",
      title: "Trusted Vendor Network",
      description:
        "Carefully curated partners offering quality products from local artisans to premium brands. Only the best for your gifts.",
      color: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-100",
    },
    {
      icon: "📍",
      title: "Seamless Delivery Tracking",
      description:
        "Real-time updates from packaging to doorstep. Know exactly when your thoughtful gift will arrive and delight your recipient.",
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why Choose GoodyBag?
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-medium">
            Everything you need to create unforgettable gifting experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border-2 border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`${feature.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 transform hover:rotate-12`}
                >
                  <span className="text-4xl animate-pulse">{feature.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-medium leading-relaxed text-lg grow">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-medium mb-6 text-lg">
            Ready to experience the future of gifting?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary-dark hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-glow"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
