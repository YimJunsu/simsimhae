import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

/**
 * 500 서버 에러 페이지
 * - NotFound와 유사한 프리미엄 스타일
 * - 차분하고 안심되는 느낌
 */
export default function ServerError() {
  const error = useRouteError();

  // 에러 메시지 추출
  const getErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      return error.statusText;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return '알 수 없는 오류';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* 추상적 시각 요소 - 깨진 느낌 */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* 미니멀 일러스트 - 흩어진 원들 */}
              <div className="w-24 h-24 rounded-full bg-red-100 absolute top-0 left-0 animate-pulse"></div>
              <div className="w-20 h-20 rounded-full bg-orange-100 absolute top-12 left-16"></div>
              <div className="w-28 h-28 rounded-full bg-amber-100/60 absolute top-2 left-24"></div>
              <div className="w-16 h-16 rounded-full bg-red-200/40 absolute top-16 left-8"></div>
              <div className="w-32 h-32"></div> {/* 여백 */}
            </div>
          </div>

          {/* 에러 코드 */}
          <div className="text-8xl sm:text-9xl font-serif font-bold text-stone-200 mb-4">
            500
          </div>

          {/* 에러 메시지 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-stone-900">
            잠시 쉬어가는 중
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 mb-4 leading-relaxed max-w-lg mx-auto">
            서버가 잠깐 숨을 고르고 있어요.
            <br className="hidden sm:block" />
            곧 다시 만날 수 있을 거예요.
          </p>

          {/* 에러 상세 (개발 환경에서만 표시하거나 축소) */}
          <p className="text-sm text-stone-400 mb-12">
            {getErrorMessage()}
          </p>

          {/* 액션 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-all hover-lift"
            >
              다시 시도하기
            </button>
            <a
              href="/"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-stone-700 bg-transparent hover:bg-stone-50 border border-stone-300 rounded-full transition-all"
            >
              홈으로 돌아가기
            </a>
          </div>

          {/* 안내 메시지 */}
          <div className="pt-8 border-t border-stone-200/50 max-w-md mx-auto">
            <p className="text-sm text-stone-500 mb-4">문제가 계속된다면:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                메인으로
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
