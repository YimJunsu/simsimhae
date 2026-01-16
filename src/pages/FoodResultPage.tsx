import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {
  type MealTime,
  type FoodType,
  type Companion,
  type FoodItem,
  MEAL_TIME_LABELS,
  FOOD_TYPE_LABELS,
  COMPANION_LABELS,
  COMPANION_EMOJI,
  filterFoods,
  getRandomFood,
  getSimilarFoodIds,
} from '@/data/foodData';
import { Copy, Check, RotateCcw, Share2 } from 'lucide-react';

interface LocationState {
  result: FoodItem | null;
  mealTime: MealTime;
  companion: Companion;
  foodType: FoodType | 'all';
}

/**
 * 음식 추천 결과 페이지
 * - 추천 결과 표시
 * - 직접 접근 시 /food로 리다이렉트
 */
function FoodResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  const [result, setResult] = useState<FoodItem | null>(state?.result || null);
  const [copied, setCopied] = useState(false);
  const [excludedIds, setExcludedIds] = useState<string[]>(() => {
    if (state?.result) {
      const similarIds = getSimilarFoodIds(state.result);
      return [state.result.id, ...similarIds];
    }
    return [];
  });
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinningFood, setSpinningFood] = useState<FoodItem | null>(null);

  // 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 직접 접근 시 /food로 리다이렉트
  useEffect(() => {
    if (!state) {
      navigate('/food', { replace: true });
    }
  }, [state, navigate]);

  // 다시 추천받기 (유사 음식 제외, 애니메이션 포함)
  const retryRecommend = useCallback(() => {
    if (!state?.mealTime || !state?.foodType) return;

    setIsSpinning(true);
    const foods = filterFoods(state.mealTime, state.foodType, excludedIds);

    if (foods.length === 0) {
      // 제외할 음식이 없으면 전체에서 다시 시도
      const allFilteredFoods = filterFoods(state.mealTime, state.foodType);
      if (allFilteredFoods.length > 0) {
        setExcludedIds([]);

        let spinCount = 0;
        const maxSpins = 15;
        const spinInterval = setInterval(() => {
          const randomFood = getRandomFood(allFilteredFoods);
          setSpinningFood(randomFood);
          spinCount++;

          if (spinCount >= maxSpins) {
            clearInterval(spinInterval);
            const finalFood = getRandomFood(allFilteredFoods);
            setResult(finalFood);
            if (finalFood) {
              const similarIds = getSimilarFoodIds(finalFood);
              setExcludedIds([finalFood.id, ...similarIds]);
            }
            setIsSpinning(false);
            setSpinningFood(null);
          }
        }, 80);
        return;
      }
      setIsSpinning(false);
      return;
    }

    let spinCount = 0;
    const maxSpins = 15;
    const spinInterval = setInterval(() => {
      const randomFood = getRandomFood(foods);
      setSpinningFood(randomFood);
      spinCount++;

      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        const finalFood = getRandomFood(foods);
        setResult(finalFood);
        if (finalFood) {
          const similarIds = getSimilarFoodIds(finalFood);
          setExcludedIds(prev => [...prev, finalFood.id, ...similarIds]);
        }
        setIsSpinning(false);
        setSpinningFood(null);
      }
    }, 80);
  }, [state, excludedIds]);

  // 링크 복사
  const copyLink = async () => {
    const url = window.location.origin + '/food';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('링크 복사에 실패했습니다.');
    }
  };

  // 공유하기
  const shareResult = async () => {
    if (!result || !state) return;

    const companionText = state.companion ? COMPANION_LABELS[state.companion] : '';
    const shareData = {
      title: '심심해 - 음식 추천',
      text: `오늘의 추천 메뉴: ${result.name} ${result.emoji}\n${companionText} ${MEAL_TIME_LABELS[state.mealTime]}으로 딱!\n칼로리: ${result.nutrition.calories}kcal`,
      url: window.location.origin + '/food',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  // state가 없으면 렌더링하지 않음 (리다이렉트 중)
  if (!state) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-16">
        <div className="min-h-[calc(100vh-64px)] flex flex-col">
          {/* 헤더 영역 */}
          <div className="bg-gradient-to-b from-orange-50 to-white py-12 px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="text-6xl mb-4">🍽️</div>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-stone-900 mb-4">
                오늘의 추천 메뉴
              </h1>
              <p className="text-stone-600 text-lg">
                이 메뉴 어떠세요?
              </p>
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="flex-grow px-6 py-12">
            <div className="mx-auto max-w-[900px]">
              {/* 스피닝 애니메이션 */}
              {isSpinning && (
                <div className="text-center animate-fade-in-up">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-12 shadow-lg">
                    <div className="text-8xl mb-4 animate-bounce">
                      {spinningFood?.emoji || '🍽️'}
                    </div>
                    <div className="text-2xl font-medium text-stone-700 animate-pulse">
                      {spinningFood?.name || '다시 고르는 중...'}
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* 결과 화면 */}
              {!isSpinning && (
                <div className="animate-fade-in-up">
                  {result ? (
                    <>
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 sm:p-12 shadow-lg border border-orange-100">
                        {/* 이모지 */}
                        <div className="text-8xl sm:text-9xl text-center mb-6">
                          {result.emoji}
                        </div>

                        {/* 음식명 */}
                        <h3 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 text-center mb-2">
                          {result.name}
                        </h3>

                        {/* 카테고리 */}
                        <p className="text-stone-500 text-center text-sm mb-6">
                          {result.category}
                        </p>

                        {/* 영양 정보 */}
                        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                          <h4 className="text-sm font-semibold text-stone-600 mb-4 text-center">영양 정보 (1인분 기준)</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-orange-600">{result.nutrition.calories}</div>
                              <div className="text-xs text-stone-500">칼로리 (kcal)</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{result.nutrition.protein}</div>
                              <div className="text-xs text-stone-500">단백질 (g)</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-600">{result.nutrition.fat}</div>
                              <div className="text-xs text-stone-500">지방 (g)</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">{result.nutrition.carbs}</div>
                              <div className="text-xs text-stone-500">탄수화물 (g)</div>
                            </div>
                          </div>
                          {/* 추가 영양 정보 */}
                          <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-stone-700">{result.nutrition.sugar}</div>
                              <div className="text-xs text-stone-500">당류 (g)</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-stone-700">{result.nutrition.fiber}</div>
                              <div className="text-xs text-stone-500">식이섬유 (g)</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-stone-700">{result.nutrition.calcium}</div>
                              <div className="text-xs text-stone-500">칼슘 (mg)</div>
                            </div>
                          </div>
                        </div>

                        {/* 태그/배지 */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                          {/* 누구랑 배지 */}
                          {state.companion && (
                            <span className="bg-pink-100 px-4 py-2 rounded-full text-sm text-pink-700 border border-pink-200 font-medium flex items-center gap-1.5">
                              <span>{COMPANION_EMOJI[state.companion]}</span>
                              {COMPANION_LABELS[state.companion]}
                            </span>
                          )}
                          {/* 식사 시간 배지 */}
                          {state.mealTime && (
                            <span className="bg-amber-100 px-4 py-2 rounded-full text-sm text-amber-700 border border-amber-200 font-medium">
                              {MEAL_TIME_LABELS[state.mealTime]}
                            </span>
                          )}
                          {/* 음식 종류 배지 */}
                          <span className="bg-white px-4 py-2 rounded-full text-sm text-stone-600 border border-stone-200">
                            {FOOD_TYPE_LABELS[result.foodType as FoodType]}
                          </span>
                        </div>

                        {/* 액션 버튼 */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button
                            onClick={shareResult}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-colors"
                          >
                            <Share2 className="w-5 h-5" />
                            공유하기
                          </button>
                          <button
                            onClick={copyLink}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-stone-700 rounded-full font-medium border border-stone-300 hover:border-stone-400 transition-colors"
                          >
                            {copied ? (
                              <>
                                <Check className="w-5 h-5 text-green-600" />
                                복사됨!
                              </>
                            ) : (
                              <>
                                <Copy className="w-5 h-5" />
                                링크 복사
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* 다시 하기 버튼들 */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                          onClick={retryRecommend}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 text-orange-700 rounded-full font-medium hover:bg-orange-200 transition-colors"
                        >
                          <RotateCcw className="w-5 h-5" />
                          다른 메뉴 추천받기
                        </button>
                        <Link
                          to="/food"
                          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 font-medium transition-colors"
                        >
                          처음부터 다시하기
                        </Link>
                      </div>

                      {excludedIds.length > 1 && (
                        <p className="text-center text-stone-400 text-sm mt-4">
                          * 이전에 추천된 유사 메뉴는 제외됩니다
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="text-6xl mb-6">😢</div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
                        조건에 맞는 음식이 없어요
                      </h2>
                      <p className="text-stone-600 mb-8">
                        다른 조건으로 다시 시도해 보세요
                      </p>
                      <Link
                        to="/food"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-colors"
                      >
                        <RotateCcw className="w-5 h-5" />
                        다시 시작하기
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 홈으로 돌아가기 */}
          <div className="text-center pb-8">
            <Link
              to="/"
              className="text-stone-500 hover:text-stone-700 text-sm transition-colors"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FoodResultPage;
