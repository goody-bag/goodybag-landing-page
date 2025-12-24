export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-accent-pink/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                About GoodyBag
              </h2>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-dark leading-relaxed font-medium">
              From surprise boxes to corporate gifting, GoodyBag lets you
              curate, customize, and deliver gifts effortlessly.
            </p>

            <p className="text-base md:text-lg text-gray-medium leading-relaxed">
              We believe that{" "}
              <span className="text-primary font-semibold">
                every gift tells a story
              </span>
              . Whether you're celebrating a birthday, expressing gratitude, or
              building stronger business relationships, GoodyBag makes it easy
              to create memorable moments that truly matter.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold text-secondary">
                  Personal Touch
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold text-secondary">
                  Fast & Easy
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-2xl">💝</span>
                <span className="font-semibold text-secondary">
                  Trusted Quality
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Personalized
                </h3>
                <p className="text-sm text-gray-dark">
                  Curate unique gift experiences
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Smart Packaging
                </h3>
                <p className="text-sm text-gray-dark">Beautiful presentation</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Fast Delivery
                </h3>
                <p className="text-sm text-gray-dark">Track every step</p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Trusted Network
                </h3>
                <p className="text-sm text-gray-dark">Quality vendors</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
