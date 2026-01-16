/**
 * 404 에러 페이지
 * - 프리미엄 스타일
 * - 차분하고 안심되는 느낌
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* 추상적 시각 요소 */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-stone-100 absolute top-0 left-0"></div>
              <div className="w-32 h-32 rounded-full bg-stone-200/60 absolute top-4 left-8"></div>
              <div className="w-32 h-32 rounded-full bg-stone-300/40 absolute top-8 left-16"></div>
              <div className="w-32 h-32"></div>
            </div>
          </div>

          {/* 에러 메시지 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-stone-900">
            생각에 잠긴 사이
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 mb-12 leading-relaxed max-w-lg mx-auto">
            이 페이지는 다른 길을 택했네요.
            <br className="hidden sm:block" />
            익숙한 곳으로 돌아가볼까요.
          </p>

          {/* 액션 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-all"
            >
              홈으로 돌아가기
            </a>
            <a
              href="/food"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-stone-700 bg-transparent hover:bg-stone-50 border border-stone-300 rounded-full transition-all"
            >
              음식 추천 받기
            </a>
          </div>

          {/* 도움이 될 링크들 */}
          <div className="pt-8 border-t border-stone-200/50 max-w-md mx-auto">
            <p className="text-sm text-stone-500 mb-4">이곳을 둘러보세요:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                메인
              </a>
              <span className="text-stone-300">·</span>
              <a
                href="/food"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                음식 추천
              </a>
              <span className="text-stone-300">·</span>
              <a
                href="/saju"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                사주 풀이
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
