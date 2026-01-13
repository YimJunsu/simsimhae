import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
  accentColor?: 'green' | 'terracotta' | 'blue';
}

/**
 * Editorial-style Feature Card
 * - Magazine-like tiles with subtle interactions
 * - No bright colors or emojis
 * - Generous white space
 */
export default function FeatureCard({
  title,
  description,
  category,
  href,
  accentColor = 'green'
}: FeatureCardProps) {
  const accentClasses = {
    green: 'text-emerald-700 border-emerald-200/50',
    terracotta: 'text-amber-800 border-amber-200/50',
    blue: 'text-sky-800 border-sky-200/50',
  };

  const accent = accentClasses[accentColor];

  return (
    <a href={href} className="block h-full group">
      <article className="
        relative bg-white border border-stone-200/60
        rounded-2xl p-8 sm:p-12
        transition-all duration-300 cursor-pointer
        h-full flex flex-col
        hover:shadow-lg hover:shadow-stone-200/50
        hover:-translate-y-1
        hover-lift
      ">
        {/* Category Tag */}
        <div className="mb-6">
          <span className={`text-xs uppercase tracking-widest font-medium ${accent}`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 text-stone-900 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-stone-600 mb-8 flex-grow leading-relaxed text-base">
          {description}
        </p>

        {/* CTA */}
        <div className="inline-flex items-center text-stone-900 font-medium text-sm group/button">
          <span className="mr-2">Discover</span>
          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-2 transition-transform duration-300" />
        </div>

        {/* Decorative Element */}
        <div className={`absolute bottom-0 left-0 h-1 w-0 ${accent.replace('text-', 'bg-').replace('border-', 'bg-')} group-hover:w-full transition-all duration-500 rounded-bl-2xl`}></div>
      </article>
    </a>
  );
}
