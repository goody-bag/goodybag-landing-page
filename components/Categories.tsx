'use client';

export default function Categories() {
  const categories = [
    {
      icon: '🎂',
      title: 'Birthday',
      description: 'Make their special day unforgettable',
      color: 'from-pink-100 to-rose-100',
      iconBg: 'bg-pink-200',
    },
    {
      icon: '💍',
      title: 'Wedding',
      description: 'Celebrate love with perfect gifts',
      color: 'from-purple-100 to-pink-100',
      iconBg: 'bg-purple-200',
    },
    {
      icon: '🍼',
      title: 'Baby Shower',
      description: 'Welcome the little one with joy',
      color: 'from-blue-100 to-cyan-100',
      iconBg: 'bg-blue-200',
    },
    {
      icon: '🎓',
      title: 'Graduation',
      description: 'Congratulate their achievement',
      color: 'from-yellow-100 to-orange-100',
      iconBg: 'bg-yellow-200',
    },
    {
      icon: '💝',
      title: "Valentine's Day",
      description: 'Express your love beautifully',
      color: 'from-red-100 to-pink-100',
      iconBg: 'bg-red-200',
    },
    {
      icon: '🎄',
      title: 'Holiday Gifts',
      description: 'Spread holiday cheer',
      color: 'from-green-100 to-emerald-100',
      iconBg: 'bg-green-200',
    },
    {
      icon: '💼',
      title: 'Corporate Gifts',
      description: 'Build stronger business relationships',
      color: 'from-gray-100 to-slate-100',
      iconBg: 'bg-gray-300',
    },
    {
      icon: '🌟',
      title: 'Just Because',
      description: 'Surprise someone special',
      color: 'from-yellow-100 to-amber-100',
      iconBg: 'bg-yellow-300',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Gift for Every Occasion
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-medium">
            From birthdays to corporate events, find the perfect gift for any moment
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center text-center`}>
                {/* Icon */}
                <div className={`${category.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-dark">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg group"
          >
            <span>View all categories</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}


