import { Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Bell } from 'lucide-react';

/**
 * AI 사주 풀이 서비스 페이지 (준비중)
 */
function SajuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-16">
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-[500px] text-center">
            {/* 아이콘 */}
            <div className="relative inline-block mb-8">
              <div className="text-8xl">🔮</div>
              <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                SOON
              </div>
            </div>

            {/* 타이틀 */}
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-stone-900 mb-6">
              AI 사주 풀이
            </h1>

            {/* 설명 */}
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              생년월일시를 입력하면 AI가 당신의 사주를 분석해 드립니다.
            </p>
            <p className="text-stone-500 mb-8">
              재물운, 애정운, 건강운까지 한눈에 확인하세요.
            </p>

            {/* 준비중 배지 */}
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-6 py-3 mb-12">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-purple-700 font-medium">서비스 준비중입니다</span>
            </div>

            {/* 예정 기능 */}
            <div className="bg-stone-50 rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-xl font-semibold text-stone-800 mb-6">
                준비 중인 기능
              </h2>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✨</span>
                  <div>
                    <p className="font-medium text-stone-800">AI 기반 사주 분석</p>
                    <p className="text-stone-500 text-sm">정확한 생년월일시로 운세를 분석합니다</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">💰</span>
                  <div>
                    <p className="font-medium text-stone-800">재물운 / 애정운 / 건강운</p>
                    <p className="text-stone-500 text-sm">다양한 운세 카테고리를 제공합니다</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">📅</span>
                  <div>
                    <p className="font-medium text-stone-800">오늘의 운세</p>
                    <p className="text-stone-500 text-sm">매일 새로운 운세를 확인하세요</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">💑</span>
                  <div>
                    <p className="font-medium text-stone-800">궁합 보기</p>
                    <p className="text-stone-500 text-sm">두 사람의 궁합을 확인해 보세요</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 알림 신청 (UI만) */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center justify-center gap-2 text-purple-700 mb-4">
                <Bell className="w-5 h-5" />
                <span className="font-medium">출시 알림 받기</span>
              </div>
              <p className="text-stone-500 text-sm mb-4">
                서비스 출시 시 알림을 받아보세요
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-purple-400 text-sm"
                  disabled
                />
                <button
                  className="px-6 py-3 bg-stone-300 text-stone-500 rounded-lg font-medium cursor-not-allowed"
                  disabled
                >
                  신청
                </button>
              </div>
              <p className="text-stone-400 text-xs mt-2">
                * 알림 기능은 준비 중입니다
              </p>
            </div>

            {/* 홈으로 돌아가기 */}
            <div className="mt-12">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-medium transition-colors"
              >
                ← 홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SajuPage;