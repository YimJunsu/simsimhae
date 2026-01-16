import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
  emoji: string;
  accentColor?: 'orange' | 'purple';
}

/**
 * 에디토리얼 스타일 기능 카드
 * - 매거진 스타일 타일과 은은한 인터랙션
 * - 이모지와 함께 트렌디한 느낌
 * - 여유로운 여백
 */
export default function FeatureCard({
  title,
  description,
  category,
  href,
  emoji,
  accentColor = 'orange'
}: FeatureCardProps) {
  const accentClasses = {
    orange: 'text-orange-600 border-orange-200/50 bg-orange-600',
    purple: 'text-purple-600 border-purple-200/50 bg-purple-600',
  };

  const accent = accentClasses[accentColor];

  return (
    <Link to={href} className="block h-full group">
      <article className="
        relative bg-white border border-stone-200/60
        rounded-2xl p-8 sm:p-12
        transition-all duration-300 cursor-pointer
        h-full flex flex-col
        hover:shadow-lg hover:shadow-stone-200/50
        hover:-translate-y-1
        hover-lift
        overflow-hidden
      ">
        {/* 이모지 */}
        <div className="text-6xl mb-6">{emoji}</div>

        {/* 카테고리 태그 */}
        <div className="mb-4">
          <span className={`text-xs uppercase tracking-widest font-medium ${accent.split(' ')[0]}`}>
            {category}
          </span>
        </div>

        {/* 제목 */}
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 text-stone-900 leading-tight">
          {title}
        </h3>

        {/* 설명 */}
        <p className="text-stone-600 mb-8 flex-grow leading-relaxed text-base">
          {description}
        </p>

        {/* CTA */}
        <div className="inline-flex items-center text-stone-900 font-medium text-sm group/button">
          <span className="mr-2">시작하기</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>

        {/* 장식 요소 */}
        <div className={`absolute bottom-0 left-0 h-1 w-0 ${accent.split(' ')[2]} group-hover:w-full transition-all duration-500 rounded-bl-2xl`}></div>
      </article>
    </Link>
  );
}