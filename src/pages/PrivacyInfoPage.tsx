import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

/**
 * 개인정보처리방침 페이지
 * - 메인페이지와 어울리는 에디토리얼 스타일
 * - stone 색상 팔레트, 미니멀한 디자인
 */

interface Section {
    id: string;
    title: string;
}

const sections: Section[] = [
    { id: 'purpose', title: '처리 목적' },
    { id: 'collection', title: '수집 및 파기' },
    { id: 'auto-collect', title: '자동 수집 정보' },
    { id: 'rights', title: '이용자 권리' },
    { id: 'contact', title: '문의처' },
];

function PrivacyInfoPage() {
    const [activeSection, setActiveSection] = useState('purpose');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-grow pt-16">
                {/* 히어로 섹션 */}
                <section className="relative bg-stone-50/30 py-20 sm:py-28 px-6 lg:px-12">
                    <div className="mx-auto max-w-[1200px] text-center">
                        <span className="text-xs uppercase tracking-widest font-medium text-stone-500 mb-4 block">
                            Privacy Policy
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-900 mb-6 tracking-tight">
                            개인정보처리방침
                        </h1>
                        <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            SIMSIMHAE는 이용자의 개인정보를 소중히 여기며,
                            투명하고 안전한 정보 처리를 약속합니다.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-stone-500">
                            <span>시행일: 2026. 01. 14</span>
                            <span className="w-1 h-1 rounded-full bg-stone-300" />
                            <span>버전 1.0</span>
                        </div>
                    </div>
                </section>

                {/* 컨텐츠 영역 */}
                <section className="py-20 px-6 lg:px-12">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* 목차 사이드바 */}
                            <aside className="lg:w-56 flex-shrink-0">
                                <div className="lg:sticky lg:top-24">
                                    <nav>
                                        <h3 className="text-xs uppercase tracking-widest font-medium text-stone-400 mb-6">
                                            목차
                                        </h3>
                                        <ul className="space-y-1">
                                            {sections.map((section, index) => (
                                                <li key={section.id}>
                                                    <button
                                                        onClick={() => scrollToSection(section.id)}
                                                        className={`w-full flex items-center gap-4 py-3 text-left text-sm transition-colors ${
                                                            activeSection === section.id
                                                                ? 'text-stone-900 font-medium'
                                                                : 'text-stone-500 hover:text-stone-700'
                                                        }`}
                                                    >
                                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                                                            activeSection === section.id
                                                                ? 'bg-stone-900 text-white'
                                                                : 'bg-stone-100 text-stone-500'
                                                        }`}>
                                                            {index + 1}
                                                        </span>
                                                        {section.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>

                                    {/* 관련 링크 */}
                                    <div className="mt-12 pt-8 border-t border-stone-200">
                                        <h4 className="text-xs uppercase tracking-widest font-medium text-stone-400 mb-4">
                                            관련 문서
                                        </h4>
                                        <Link
                                            to="/terms"
                                            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm transition-colors group"
                                        >
                                            이용약관
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </aside>

                            {/* 본문 */}
                            <div className="flex-1 min-w-0">
                                <div className="space-y-16">
                                    {/* 섹션 1: 처리 목적 */}
                                    <section id="purpose" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">01</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                개인정보의 처리 목적
                                            </h2>
                                        </div>
                                        <div className="prose prose-stone max-w-none">
                                            <p className="text-stone-700 leading-relaxed text-base">
                                                <strong className="text-stone-900">SIMSIMHAE</strong>는 이용자에게 최적화된 콘텐츠(음식 추천, 운세 풀이 등)를 제공하기 위해
                                                최소한의 정보를 활용하며, 수집된 정보는 서비스 제공 목적 이외의 용도로는 사용되지 않습니다.
                                            </p>
                                        </div>
                                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="bg-white border border-stone-200/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all">
                                                <div className="text-4xl mb-4">🍽️</div>
                                                <h4 className="font-serif text-lg font-semibold text-stone-900 mb-2">음식 추천</h4>
                                                <p className="text-sm text-stone-600">맞춤형 음식 추천 서비스 제공</p>
                                            </div>
                                            <div className="bg-white border border-stone-200/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all">
                                                <div className="text-4xl mb-4">🔮</div>
                                                <h4 className="font-serif text-lg font-semibold text-stone-900 mb-2">AI 사주 풀이</h4>
                                                <p className="text-sm text-stone-600">개인화된 운세 분석 서비스 제공</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 섹션 2: 수집 및 파기 */}
                                    <section id="collection" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">02</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                개인정보의 수집 및 파기
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            회사는 이용자가 특정 콘텐츠 서비스를 이용하기 위해 직접 입력하는 정보에 대해 아래와 같은 방침을 준수합니다.
                                        </p>

                                        <div className="space-y-4">
                                            <div className="bg-stone-50/50 border border-stone-200/60 rounded-2xl p-6">
                                                <h4 className="font-medium text-stone-900 mb-2">수집 항목</h4>
                                                <p className="text-stone-600 text-sm">
                                                    이름, 생년월일, 태어난 시간, 성별 등 서비스 이용에 필요한 입력 정보
                                                </p>
                                            </div>

                                            <div className="bg-stone-900 text-white rounded-2xl p-6">
                                                <h4 className="font-medium mb-2">보유 및 이용기간</h4>
                                                <p className="text-xl font-serif">
                                                    서비스 결과 도출 즉시 파기
                                                </p>
                                            </div>

                                            <div className="bg-stone-50/50 border border-stone-200/60 rounded-2xl p-6">
                                                <h4 className="font-medium text-stone-900 mb-2">파기 방법</h4>
                                                <p className="text-stone-600 text-sm">
                                                    입력하신 정보는 결과 확인 후 서버에 별도로 기록되거나 저장되지 않으며,
                                                    브라우저 종료 또는 페이지 이동 시 시스템에서 완전히 휘발됩니다.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 섹션 3: 자동 수집 정보 */}
                                    <section id="auto-collect" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">03</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                자동 수집되는 개인정보
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {['접속 IP 정보', '쿠키', '방문 기록', '서비스 이용 기록'].map((item) => (
                                                <span
                                                    key={item}
                                                    className="inline-flex items-center px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    {/* 섹션 4: 이용자 권리 */}
                                    <section id="rights" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">04</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                이용자의 권리와 행사 방법
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            이용자는 언제든지 다음과 같은 개인정보 보호 관련 권리를 행사할 수 있습니다.
                                        </p>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                            {[
                                                { title: '열람권', desc: '처리 현황 열람' },
                                                { title: '정정권', desc: '오류 정정 요청' },
                                                { title: '삭제권', desc: '삭제 요청' },
                                                { title: '처리정지권', desc: '처리 정지 요청' },
                                            ].map((item, index) => (
                                                <div key={index} className="text-center p-6 bg-stone-50/50 border border-stone-200/60 rounded-2xl">
                                                    <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                                                        {index + 1}
                                                    </div>
                                                    <h4 className="font-semibold text-stone-900 text-sm mb-1">{item.title}</h4>
                                                    <p className="text-xs text-stone-500">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-6 text-sm text-stone-500">
                                            * 단, 본 서비스는 입력 정보를 저장하지 않으므로 별도의 삭제 요청이 불필요합니다.
                                        </p>
                                    </section>

                                    {/* 섹션 5: 문의처 */}
                                    <section id="contact" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">05</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                개인정보 보호책임자
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            서비스 이용 중 발생하는 개인정보 보호 관련 문의사항은 아래로 연락해 주세요.
                                        </p>
                                        <div className="bg-stone-900 text-white rounded-2xl p-8">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <span className="text-xs uppercase tracking-widest text-stone-400">담당 부서</span>
                                                    <p className="font-serif text-xl mt-2">SIMSIMHAE 운영팀</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs uppercase tracking-widest text-stone-400">이메일</span>
                                                    <p className="mt-2">
                                                        <a href="mailto:yimjunsu@gmail.com" className="font-serif text-xl hover:underline">
                                                            yimjunsu@gmail.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default PrivacyInfoPage;
