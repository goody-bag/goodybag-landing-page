'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImages = [
    '/hero-celebration.jpg',
    '/hero-family.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-pink via-white to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-4 leading-tight animate-scale-in">
                GoodyBag
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-primary to-pink-500 rounded-full"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-secondary leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Gifting is <span className="text-primary animate-pulse">Love</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-dark max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              From surprise boxes to corporate gifting, GoodyBag lets you curate, customize, 
              and deliver gifts effortlessly. Join the waitlist for early access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={scrollToWaitlist}
                className="group bg-gradient-to-r from-primary to-pink-500 hover:from-primary-dark hover:to-pink-600 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 animate-pulse-glow"
              >
                Join the Waitlist
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <a
                href="#how-it-works"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                Learn More
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 transform hover:scale-110 transition-transform">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-sm font-medium text-secondary">Personalized Gifts</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 transform hover:scale-110 transition-transform">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-sm font-medium text-secondary">Trusted Vendors</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 transform hover:scale-110 transition-transform">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-sm font-medium text-secondary">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              {/* Image carousel */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt="GoodyBag celebration"
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                ))}
                
                {/* Text overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                    Gifting is Love
                  </h3>
                  <button
                    onClick={scrollToWaitlist}
                    className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-full text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
                  >
                    Start Here →
                  </button>
                </div>
              </div>
              
              {/* Carousel indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-primary w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
