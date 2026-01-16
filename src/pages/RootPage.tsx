import { useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/main/HeroSection';
import FeatureCard from '@/components/main/FeatureCard';
import '@/App.css';

/**
 * 메인 페이지
 * - 사이트 랜딩 페이지
 */
function RootPage() {
  // 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* 히어로 섹션 */}
        <HeroSection />

        {/* 기능 카드 섹션 */}
        <section className="py-20 sm:py-28 px-6 lg:px-12 bg-stone-50/30">
          <div className="mx-auto max-w-[1200px]">
            {/* 섹션 헤더 */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-4 text-stone-900">
                제공하는 서비스
              </h2>
              <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
                심심할 때 즐기는 재미있는 콘텐츠
              </p>
            </div>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title="음식 추천"
                description="오늘 뭐 먹지? 고민될 때! 상황에 맞는 음식을 랜덤으로 추천해 드립니다. 칼로리 정보와 함께 결과를 공유해 보세요."
                category="먹거리"
                emoji="🍽️"
                href="/food"
                accentColor="orange"
              />

              <FeatureCard
                title="AI 사주 풀이"
                description="생년월일시로 알아보는 나의 사주팔자. AI가 분석하는 재물운, 애정운, 건강운까지 한눈에 확인하세요."
                category="운세"
                emoji="🔮"
                href="/saju"
                accentColor="purple"
              />
            </div>
          </div>
        </section>

        {/* 가치 섹션 */}
        <section className="bg-white py-20 sm:py-28 px-6 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">재미있는 경험</h3>
                <p className="text-stone-600 leading-relaxed">랜덤 추첨 애니메이션과 함께 즐거운 결과를 확인하세요</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">쉬운 공유</h3>
                <p className="text-stone-600 leading-relaxed">결과를 친구들과 간편하게 공유할 수 있어요</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">완전 무료</h3>
                <p className="text-stone-600 leading-relaxed">모든 기능을 무료로 이용하실 수 있습니다</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RootPage;