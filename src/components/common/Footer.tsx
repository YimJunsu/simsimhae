import { Link } from 'react-router-dom';

/**
 * 프리미엄 미니멀 푸터 컴포넌트
 * - 깔끔한 에디토리얼 미학
 * - 은은한 브랜딩
 */
export default function Footer() {
  return (
    <footer className="border-t border-stone-200/50 bg-stone-50/30 mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* 브랜드 */}
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-semibold text-stone-900 mb-4 block">
              SIMSIMHAE
            </span>
            <p className="text-stone-600 text-sm leading-relaxed max-w-md">
              심심할 때 찾는 재미있는 콘텐츠—
              <br />
              음식 추천부터 AI 사주 풀이까지, 일상에 재미를 더합니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="font-medium text-stone-900 mb-4 text-sm uppercase tracking-wider">서비스</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/food" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">
                  음식 추천
                </Link>
              </li>
              <li>
                <Link to="/saju" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">
                  AI 사주 풀이
                </Link>
              </li>
            </ul>
          </div>

          {/* 정보 */}
          <div>
            <h3 className="font-medium text-stone-900 mb-4 text-sm uppercase tracking-wider">정보</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 섹션 */}
        <div className="pt-8 border-t border-stone-200/50">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-500 text-sm">
              © 2026 simsimhae. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}