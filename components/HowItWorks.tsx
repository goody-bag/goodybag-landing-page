'use client';

import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '1',
      title: 'Choose Your Items',
      description: 'Browse our curated selection of gifts from trusted vendors. Filter by occasion, recipient, or budget to find the perfect items.',
      icon: '🛍️',
      gradient: 'from-pink-400 via-rose-400 to-red-400',
      bgGradient: 'from-pink-50 to-rose-50',
      iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
      visual: (
        <div className="relative w-full h-full">
          {/* AI-style illustration background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden">
            {/* Floating gift boxes */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-xl shadow-lg transform rotate-12 animate-float">
              <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-400 rounded-xl flex items-center justify-center text-3xl">🎁</div>
            </div>
            <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-xl shadow-lg transform -rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-400 rounded-xl flex items-center justify-center text-2xl">🎀</div>
            </div>
            <div className="absolute bottom-6 left-8 w-18 h-18 bg-white rounded-xl shadow-lg transform rotate-6 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-full h-full bg-gradient-to-br from-red-300 to-rose-400 rounded-xl flex items-center justify-center text-2xl">🎊</div>
            </div>
            
            {/* Main icon */}
            <div className="relative z-10 mt-8">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-6xl">🛍️</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-pink-300 rounded-full animate-rotate-slow"></div>
            <div className="absolute top-1/2 left-4 w-8 h-8 border-4 border-rose-300 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>
      ),
    },
    {
      number: '2',
      title: 'Customize Your Package',
      description: 'Add personal touches with custom messages, choose your packaging style, and select from beautiful wrapping options.',
      icon: '✨',
      gradient: 'from-blue-400 via-cyan-400 to-teal-400',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      visual: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden">
            {/* Sparkle effects */}
            <div className="absolute top-6 left-6 text-4xl animate-pulse">✨</div>
            <div className="absolute top-12 right-8 text-3xl animate-pulse" style={{ animationDelay: '0.3s' }}>⭐</div>
            <div className="absolute bottom-8 left-10 text-3xl animate-pulse" style={{ animationDelay: '0.6s' }}>💫</div>
            <div className="absolute bottom-12 right-6 text-4xl animate-pulse" style={{ animationDelay: '0.9s' }}>✨</div>
            
            {/* Customization card mockup */}
            <div className="relative z-10 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full max-w-xs">
              <div className="space-y-3">
                <div className="h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full w-4/5"></div>
                <div className="h-3 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full w-3/5"></div>
                <div className="mt-4 flex gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Main icon */}
            <div className="absolute top-4 right-4 z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">✨</span>
              </div>
            </div>
            
            {/* Animated circles */}
            <div className="absolute bottom-6 right-6 w-16 h-16 border-4 border-blue-300 rounded-full animate-rotate-slow"></div>
            <div className="absolute top-1/3 left-6 w-10 h-10 border-4 border-cyan-300 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>
      ),
    },
    {
      number: '3',
      title: 'Send to Recipients',
      description: 'Enter delivery details for one or multiple recipients. Track your gifts in real-time and get notified when they arrive.',
      icon: '🚀',
      gradient: 'from-green-400 via-emerald-400 to-teal-400',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
      visual: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden">
            {/* Delivery truck */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
              <div className="w-32 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-2xl flex items-center justify-center">
                <span className="text-4xl">🚚</span>
              </div>
            </div>
            
            {/* Location pins */}
            <div className="absolute top-4 left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-2xl">📍</span>
            </div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">📍</span>
            </div>
            
            {/* Tracking line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 rounded-full transform -translate-y-1/2">
              <div className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full -translate-y-1.5 animate-pulse"></div>
              <div className="absolute right-0 top-0 w-4 h-4 bg-green-500 rounded-full -translate-y-1.5 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            </div>
            
            {/* Main icon */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
            
            {/* Animated elements */}
            <div className="absolute top-1/4 right-6 w-12 h-12 border-4 border-green-300 rounded-full animate-rotate-slow"></div>
            <div className="absolute bottom-1/4 left-6 w-8 h-8 border-4 border-emerald-300 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <div className="inline-block mb-6">
            <span className="text-6xl animate-bounce">🎯</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
            How It Works
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-primary via-pink-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-dark font-medium">
            Sending the perfect gift is as easy as <span className="text-primary font-bold">1-2-3</span>
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-7xl mx-auto space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center transition-all duration-1000 ${
                visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative h-[400px] md:h-[500px]">
                  {step.visual}
                  {/* Floating step number badge */}
                  <div className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br ${step.gradient} text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 z-20 animate-pulse-glow`}>
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 w-full">
                <div className="space-y-6 animate-slide-up">
                  <div className="flex items-center gap-4">
                    <div className={`${step.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                      <span className="text-5xl">{step.icon}</span>
                    </div>
                    <div>
                      <div className={`text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text font-bold text-sm uppercase tracking-wider mb-2`}>
                        Step {step.number}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-secondary">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-dark leading-relaxed font-medium">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>Learn more</span>
                    <span className="text-2xl transform hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24 animate-scale-in">
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-12 md:p-16 shadow-2xl border-4 border-white/50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 text-6xl animate-float">🎁</div>
              <div className="absolute bottom-4 right-4 text-6xl animate-float" style={{ animationDelay: '1s' }}>🎀</div>
              <div className="absolute top-1/2 left-1/2 text-5xl animate-float" style={{ animationDelay: '2s' }}>✨</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl md:text-2xl text-gray-dark mb-10 font-medium">
                Join our waitlist to be among the first to experience GoodyBag when we launch
              </p>
              <button
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary via-pink-500 to-purple-500 hover:from-primary-dark hover:via-pink-600 hover:to-purple-600 text-white font-bold px-12 py-6 rounded-full text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl inline-flex items-center gap-3 animate-pulse-glow"
              >
                Join the Waitlist
                <span className="text-3xl animate-bounce">🎁</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
