import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/main/HeroSection';
import FeatureCard from '@/components/main/FeatureCard';
import './App.css';

/**
 * 메인 페이지
 * - 사이트 랜딩 페이지
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Feature Cards Section */}
        <section className="py-20 sm:py-28 px-6 lg:px-12 bg-stone-50/30">
          <div className="mx-auto max-w-[1400px]">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-4 text-stone-900">
                What we offer
              </h2>
              <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
                Thoughtful content designed to add meaning to your everyday moments
              </p>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Personal Insight"
                description="Discover patterns and meaning in your journey. A gentle exploration of who you are and where you're headed."
                category="Reflection"
                href="/fortune"
                accentColor="green"
              />

              <FeatureCard
                title="Meal Ideas"
                description="Thoughtful suggestions for what to eat today. Simple inspirations to make mealtime more enjoyable."
                category="Nourishment"
                href="/meals"
                accentColor="terracotta"
              />

              <FeatureCard
                title="Quick Bites"
                description="Delightful snack recommendations for any moment. Small treats that bring joy to your day."
                category="Indulgence"
                href="/snacks"
                accentColor="blue"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-20 sm:py-28 px-6 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">Thoughtful Design</h3>
                <p className="text-stone-600 leading-relaxed">Every detail carefully considered to create a calm, enjoyable experience</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">Human Touch</h3>
                <p className="text-stone-600 leading-relaxed">Content that feels personal, warm, and genuinely helpful</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">Always Free</h3>
                <p className="text-stone-600 leading-relaxed">No hidden costs, no premium tiers—just quality content for everyone</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
