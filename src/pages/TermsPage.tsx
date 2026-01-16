import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

/**
 * 이용약관 페이지
 * - 메인페이지와 어울리는 에디토리얼 스타일
 * - stone 색상 팔레트, 미니멀한 디자인
 */

interface Section {
    id: string;
    title: string;
}

const sections: Section[] = [
    { id: 'general', title: '총칙' },
    { id: 'service', title: '서비스 이용' },
    { id: 'obligations', title: '의무사항' },
    { id: 'disclaimer', title: '면책사항' },
    { id: 'intellectual', title: '지적재산권' },
    { id: 'others', title: '기타' },
];

function TermsPage() {
    const [activeSection, setActiveSection] = useState('general');

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
                            Terms of Service
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-900 mb-6 tracking-tight">
                            이용약관
                        </h1>
                        <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            SIMSIMHAE 서비스를 이용해 주셔서 감사합니다.
                            원활한 서비스 이용을 위해 아래 약관을 확인해 주세요.
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
                                            to="/privacy"
                                            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm transition-colors group"
                                        >
                                            개인정보처리방침
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
                                    {/* 섹션 1: 총칙 */}
                                    <section id="general" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">01</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                제1조 (목적)
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            본 약관은 <strong className="text-stone-900">SIMSIMHAE</strong>(이하 "회사")가 제공하는
                                            모든 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을
                                            규정함을 목적으로 합니다.
                                        </p>

                                        <div className="bg-stone-50/50 border border-stone-200/60 rounded-2xl p-6">
                                            <h4 className="font-medium text-stone-900 mb-4">용어 정의</h4>
                                            <ul className="space-y-4 text-sm">
                                                <li className="flex gap-4">
                                                    <span className="font-medium text-stone-900 min-w-[60px]">서비스</span>
                                                    <span className="text-stone-600">회사가 제공하는 음식 추천, AI 사주 풀이 등 모든 콘텐츠 서비스</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="font-medium text-stone-900 min-w-[60px]">이용자</span>
                                                    <span className="text-stone-600">본 약관에 따라 회사가 제공하는 서비스를 이용하는 자</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="font-medium text-stone-900 min-w-[60px]">콘텐츠</span>
                                                    <span className="text-stone-600">서비스를 통해 제공되는 음식 추천 결과, 운세 풀이 결과 등의 정보</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* 섹션 2: 서비스 이용 */}
                                    <section id="service" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">02</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                제2조 (서비스 이용)
                                            </h2>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-white border border-stone-200/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all">
                                                <div className="text-4xl mb-4">🍽️</div>
                                                <span className="text-xs uppercase tracking-widest font-medium text-orange-600">먹거리</span>
                                                <h4 className="font-serif text-xl font-semibold text-stone-900 mt-2 mb-3">음식 추천</h4>
                                                <p className="text-sm text-stone-600 leading-relaxed">
                                                    상황에 맞는 음식을 랜덤으로 추천받을 수 있는 서비스입니다.
                                                    칼로리 정보와 함께 결과를 확인하고 공유할 수 있습니다.
                                                </p>
                                            </div>
                                            <div className="bg-white border border-stone-200/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all">
                                                <div className="text-4xl mb-4">🔮</div>
                                                <span className="text-xs uppercase tracking-widest font-medium text-purple-600">운세</span>
                                                <h4 className="font-serif text-xl font-semibold text-stone-900 mt-2 mb-3">AI 사주 풀이</h4>
                                                <p className="text-sm text-stone-600 leading-relaxed">
                                                    생년월일시를 입력하면 AI가 분석하는 사주팔자를 확인할 수 있습니다.
                                                    재물운, 애정운, 건강운 등을 제공합니다.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-stone-900 text-white rounded-2xl p-6 mb-8">
                                            <h4 className="font-medium mb-2">무료 서비스</h4>
                                            <p className="text-stone-300">
                                                모든 서비스는 별도의 회원가입 없이 무료로 이용하실 수 있습니다.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-medium text-stone-900 mb-3">서비스 이용 시간</h4>
                                            <p className="text-stone-600 text-sm leading-relaxed">
                                                서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 시스템 점검 등
                                                회사가 필요한 경우 서비스를 일시 중단할 수 있으며, 이 경우 사전에 공지합니다.
                                            </p>
                                        </div>
                                    </section>

                                    {/* 섹션 3: 의무사항 */}
                                    <section id="obligations" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">03</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                제3조 (이용자의 의무)
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            이용자는 서비스 이용 시 다음 각 호의 행위를 하여서는 안 됩니다.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { title: '불법 행위', desc: '타인의 권리를 침해하거나 법령에 위반되는 행위' },
                                                { title: '서비스 방해', desc: '서비스의 정상적인 운영을 방해하는 행위' },
                                                { title: '보안 침해', desc: '시스템에 대한 무단 접근 또는 해킹 시도' },
                                                { title: '무단 복제', desc: '서비스 내 콘텐츠의 무단 복제 및 배포' },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-5 bg-stone-50/50 border border-stone-200/60 rounded-2xl">
                                                    <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-stone-900 text-sm mb-1">{item.title}</h4>
                                                        <p className="text-xs text-stone-500">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="mt-6 text-sm text-stone-500 bg-stone-50/50 border border-stone-200/60 rounded-xl p-4">
                                            위 사항을 위반할 경우, 회사는 해당 이용자의 서비스 이용을 제한하거나
                                            법적 조치를 취할 수 있습니다.
                                        </p>
                                    </section>

                                    {/* 섹션 4: 면책사항 */}
                                    <section id="disclaimer" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">04</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                제4조 (면책사항)
                                            </h2>
                                        </div>

                                        <div className="bg-stone-900 text-white rounded-2xl p-6 mb-8">
                                            <h4 className="font-medium mb-2">오락 목적의 서비스</h4>
                                            <p className="text-stone-300 leading-relaxed">
                                                본 서비스에서 제공하는 모든 콘텐츠(음식 추천, 사주 풀이 등)는
                                                <strong className="text-white"> 오락 및 참고 목적</strong>으로만 제공되며, 전문적인 조언으로 간주되어서는 안 됩니다.
                                            </p>
                                        </div>

                                        <ul className="space-y-4">
                                            {[
                                                '서비스에서 제공하는 운세, 사주 풀이 등의 결과는 재미 요소로만 활용해 주세요.',
                                                '음식 추천 결과를 이용한 식이, 건강 관련 결정은 전문가와 상담하시기 바랍니다.',
                                                '서비스 이용으로 인해 발생하는 직·간접적 손해에 대해 회사는 책임을 지지 않습니다.',
                                                '천재지변, 전쟁, 기타 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.',
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-4 text-stone-600 text-sm">
                                                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center flex-shrink-0 text-xs font-medium">
                                                        {index + 1}
                                                    </span>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* 섹션 5: 지적재산권 */}
                                    <section id="intellectual" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">05</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                제5조 (지적재산권)
                                            </h2>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed mb-8">
                                            서비스 내 모든 콘텐츠, 디자인, 로고, 상표, 소프트웨어 등에 대한 지적재산권은
                                            회사에 귀속됩니다.
                                        </p>

                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {[
                                                { title: '저작권', desc: '콘텐츠 저작권' },
                                                { title: '상표권', desc: '브랜드·로고' },
                                                { title: '소프트웨어', desc: '서비스 SW' },
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

                                        <p className="text-sm text-stone-500">
                                            이용자는 회사의 사전 서면 동의 없이 서비스 내 콘텐츠를 복제, 배포, 전송,
                                            출판, 방송 기타 방법으로 이용하거나 제3자에게 이용하게 할 수 없습니다.
                                        </p>
                                    </section>

                                    {/* 섹션 6: 기타 */}
                                    <section id="others" className="scroll-mt-24">
                                        <div className="border-b border-stone-200 pb-4 mb-8">
                                            <span className="text-xs uppercase tracking-widest font-medium text-stone-400">06</span>
                                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-2">
                                                제6조 (기타)
                                            </h2>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            <div className="p-6 bg-stone-50/50 border border-stone-200/60 rounded-2xl">
                                                <h4 className="font-medium text-stone-900 mb-3">약관의 변경</h4>
                                                <p className="text-sm text-stone-600 leading-relaxed">
                                                    회사는 필요한 경우 약관을 변경할 수 있으며, 변경 시 7일 전 공지합니다.
                                                </p>
                                            </div>
                                            <div className="p-6 bg-stone-50/50 border border-stone-200/60 rounded-2xl">
                                                <h4 className="font-medium text-stone-900 mb-3">분쟁 해결</h4>
                                                <p className="text-sm text-stone-600 leading-relaxed">
                                                    서비스 관련 분쟁은 대한민국 법률에 따르며, 관할법원은 회사 소재지 법원으로 합니다.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-stone-900 text-white rounded-2xl p-8">
                                            <h4 className="font-medium mb-6">문의처</h4>
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

                                    {/* 동의 안내 */}
                                    <div className="p-8 bg-stone-50/50 border border-stone-200/60 rounded-2xl">
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">서비스 이용 시 약관 동의</h3>
                                                <p className="text-stone-600 text-sm leading-relaxed">
                                                    SIMSIMHAE 서비스를 이용하시면 본 이용약관 및{' '}
                                                    <Link to="/privacy" className="text-stone-900 font-medium hover:underline">
                                                        개인정보처리방침
                                                    </Link>
                                                    에 동의하신 것으로 간주됩니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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

export default TermsPage;
