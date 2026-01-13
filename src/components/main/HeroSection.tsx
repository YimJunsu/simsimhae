/**
 * Premium Hero Section
 * - Emotional messaging, no tech terms
 * - Editorial aesthetic with generous white space
 */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-stone-50/50 to-white py-24 sm:py-32 md:py-40 overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 text-stone-900 tracking-tight leading-[1.1] animate-fade-in-up">
            Small moments,
            <br />
            <span className="text-stone-600">thoughtfully curated</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover personal insights, meal inspirations, and quiet delights—
            <br className="hidden sm:block" />
            all designed to make your day a little more interesting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="/fortune"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-all hover-lift"
            >
              Explore today
            </a>
            <a
              href="/about"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-stone-700 bg-transparent hover:bg-stone-50 border border-stone-300 rounded-full transition-all"
            >
              Learn more
            </a>
          </div>

          {/* Soft Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-1">Trusted by</div>
              <div className="font-serif text-2xl text-stone-700">Thousands</div>
            </div>
            <div className="w-px bg-stone-200"></div>
            <div>
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-1">Daily discoveries</div>
              <div className="font-serif text-2xl text-stone-700">Growing</div>
            </div>
            <div className="w-px bg-stone-200"></div>
            <div>
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-1">Experience</div>
              <div className="font-serif text-2xl text-stone-700">Refined</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
