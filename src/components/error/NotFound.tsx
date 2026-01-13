/**
 * Premium 404 Error Page
 * - Calm, reassuring, slightly witty
 * - No technical jargon
 * - Feels intentional, not like a failure
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* Abstract Visual Element */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* Soft circles creating a minimal illustration */}
              <div className="w-32 h-32 rounded-full bg-stone-100 absolute top-0 left-0"></div>
              <div className="w-32 h-32 rounded-full bg-stone-200/60 absolute top-4 left-8"></div>
              <div className="w-32 h-32 rounded-full bg-stone-300/40 absolute top-8 left-16"></div>
              <div className="w-32 h-32"></div> {/* Spacing */}
            </div>
          </div>

          {/* Error Message */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 text-stone-900">
            Lost in thought
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 mb-12 leading-relaxed max-w-lg mx-auto">
            This page took a different path.
            <br className="hidden sm:block" />
            Let's head back to familiar ground.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-all hover-lift"
            >
              Back to home
            </a>
            <a
              href="/fortune"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-stone-700 bg-transparent hover:bg-stone-50 border border-stone-300 rounded-full transition-all"
            >
              Discover something new
            </a>
          </div>

          {/* Optional helpful links */}
          <div className="pt-8 border-t border-stone-200/50 max-w-md mx-auto">
            <p className="text-sm text-stone-500 mb-4">Or explore these:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/meals"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                Meal Ideas
              </a>
              <span className="text-stone-300">·</span>
              <a
                href="/snacks"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                Quick Bites
              </a>
              <span className="text-stone-300">·</span>
              <a
                href="/about"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}