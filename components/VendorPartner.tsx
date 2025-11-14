export default function VendorPartner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Partner With GoodyBag
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Join our growing network of trusted vendors and product creators.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you're a local artisan, boutique shop, or established brand, 
                GoodyBag connects you with customers looking for meaningful gifts. 
                Expand your reach and be part of something special.
              </p>

              {/* Benefits */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Targeted Audience</h3>
                    <p className="text-gray-400">Reach customers actively looking for quality gifts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Grow Your Business</h3>
                    <p className="text-gray-400">Increase visibility and sales through our platform</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Trusted Partnership</h3>
                    <p className="text-gray-400">Be part of a curated network of quality vendors</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
                  Become a Partner
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Vendor cards */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl mb-4 flex items-center justify-center text-3xl">
                      🎨
                    </div>
                    <h4 className="text-white font-bold mb-2">Local Artisans</h4>
                    <p className="text-gray-400 text-sm">Handcrafted goods</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all mt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl mb-4 flex items-center justify-center text-3xl">
                      🌿
                    </div>
                    <h4 className="text-white font-bold mb-2">Eco Brands</h4>
                    <p className="text-gray-400 text-sm">Sustainable products</p>
                  </div>
                </div>

                <div className="space-y-4 pt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl mb-4 flex items-center justify-center text-3xl">
                      🏪
                    </div>
                    <h4 className="text-white font-bold mb-2">Boutiques</h4>
                    <p className="text-gray-400 text-sm">Curated collections</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl mb-4 flex items-center justify-center text-3xl">
                      ⭐
                    </div>
                    <h4 className="text-white font-bold mb-2">Premium Brands</h4>
                    <p className="text-gray-400 text-sm">Quality products</p>
                  </div>
                </div>
              </div>

              {/* Stats badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-8 py-4 rounded-full shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-xs opacity-90">Partners & Growing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

