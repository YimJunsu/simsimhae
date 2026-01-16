import { Link } from 'react-router-dom';

/**
 * 프리미엄 히어로 섹션
 * - 감성적인 메시지, 기술 용어 배제
 * - 여유로운 여백의 에디토리얼 미학
 */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-stone-50/50 to-white py-24 sm:py-32 md:py-40 overflow-hidden">
      {/* 은은한 배경 텍스처 */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* 헤드라인 */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 text-stone-900 tracking-tight leading-[1.1] animate-fade-in-up">
            심심할 때,
            <br />
            <span className="text-stone-600">심심해</span>
          </h1>

          {/* 서브 헤드라인 */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            뭐 먹을지 모르겠을 때, 그냥 심심할 때.
            <br className="hidden sm:block" />
            가볍게 한 번 돌려봐.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link
              to="/food"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-all hover-lift"
            >
              메뉴 추천 받기
            </Link>
            <Link
              to="/saju"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-stone-700 bg-transparent hover:bg-stone-50 border border-stone-300 rounded-full transition-all"
            >
              사주 보러 가기
            </Link>
          </div>

          {/* 특징 */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-1">메뉴</div>
              <div className="font-serif text-2xl text-stone-700">500+</div>
            </div>
            <div className="w-px bg-stone-200"></div>
            <div>
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-1">추첨</div>
              <div className="font-serif text-2xl text-stone-700">슬롯 방식</div>
            </div>
            <div className="w-px bg-stone-200"></div>
            <div>
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-1">공유</div>
              <div className="font-serif text-2xl text-stone-700">원클릭</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}