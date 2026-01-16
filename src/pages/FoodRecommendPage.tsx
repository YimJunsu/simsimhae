import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {
  type MealTime,
  type FoodType,
  type Companion,
  type FoodItem,
  MEAL_TIME_LABELS,
  FOOD_TYPE_LABELS,
  FOOD_TYPE_EMOJI,
  COMPANION_LABELS,
  COMPANION_EMOJI,
  filterFoods,
  getRandomFood,
} from '@/data/foodData';

type Step = 'mealTime' | 'companion' | 'foodType' | 'spinning';

/**
 * 음식 추천 선택 페이지
 * - 식사 시간, 누구랑 먹을지, 음식 종류 선택
 * - 추첨 애니메이션 후 결과 페이지로 이동
 */
function FoodRecommendPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('mealTime');
  const [selectedMealTime, setSelectedMealTime] = useState<MealTime | null>(null);
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(null);
  const [selectedFoodType, setSelectedFoodType] = useState<FoodType | 'all' | null>(null);
  const [spinningFood, setSpinningFood] = useState<FoodItem | null>(null);

  // 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 랜덤 추첨 애니메이션
  const startSpinning = useCallback(() => {
    if (!selectedMealTime || !selectedCompanion || !selectedFoodType) return;

    setStep('spinning');
    const foods = filterFoods(selectedMealTime, selectedFoodType);

    if (foods.length === 0) {
      // 음식이 없으면 결과 페이지로 이동 (null 결과)
      navigate('/food/result', {
        state: {
          result: null,
          mealTime: selectedMealTime,
          companion: selectedCompanion,
          foodType: selectedFoodType,
        },
        replace: true,
      });
      return;
    }

    let spinCount = 0;
    const maxSpins = 20;
    const spinInterval = setInterval(() => {
      const randomFood = getRandomFood(foods);
      setSpinningFood(randomFood);
      spinCount++;

      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        const finalFood = getRandomFood(foods);

        // 결과 페이지로 이동
        navigate('/food/result', {
          state: {
            result: finalFood,
            mealTime: selectedMealTime,
            companion: selectedCompanion,
            foodType: selectedFoodType,
          },
          replace: true,
        });
      }
    }, 100);
  }, [selectedMealTime, selectedCompanion, selectedFoodType, navigate]);

  // 선택 완료 후 자동으로 추첨 시작
  useEffect(() => {
    if (selectedMealTime && selectedCompanion && selectedFoodType && step === 'foodType') {
      const timer = setTimeout(() => {
        startSpinning();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedMealTime, selectedCompanion, selectedFoodType, step, startSpinning]);

  // 선택 버튼 컴포넌트
  const SelectButton = ({
    label,
    emoji,
    selected,
    onClick,
  }: {
    label: string;
    emoji?: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`
        px-4 py-4 rounded-xl text-base font-medium transition-all duration-300
        flex flex-col items-center gap-2
        ${
          selected
            ? 'bg-stone-800 text-white shadow-lg scale-105'
            : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:shadow-md hover:-translate-y-1'
        }
      `}
    >
      {emoji && <span className="text-2xl">{emoji}</span>}
      <span>{label}</span>
    </button>
  );

  // 현재 단계에 따른 진행 상태
  const getStepProgress = (targetStep: string, index: number) => {
    const steps = ['mealTime', 'companion', 'foodType'];
    const currentIndex = steps.indexOf(step);
    const targetIndex = steps.indexOf(targetStep);

    if (step === 'spinning') return 'completed';
    if (currentIndex > targetIndex) return 'completed';
    if (currentIndex === targetIndex) return 'current';
    return 'pending';
  };

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
                오늘 뭐 먹지?
              </h1>
              <p className="text-stone-600 text-lg">
                상황에 맞는 음식을 추천해 드릴게요
              </p>
            </div>
          </div>

          {/* 진행 표시 */}
          {step !== 'spinning' && (
            <div className="px-6 py-8">
              <div className="mx-auto max-w-[600px]">
                <div className="flex items-center justify-center gap-2 mb-8">
                  {['mealTime', 'companion', 'foodType'].map((s, i) => {
                    const progress = getStepProgress(s, i);
                    return (
                      <div key={s} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                            progress === 'current'
                              ? 'bg-orange-500 text-white'
                              : progress === 'completed'
                              ? 'bg-stone-800 text-white'
                              : 'bg-stone-200 text-stone-500'
                          }`}
                        >
                          {i + 1}
                        </div>
                        {i < 2 && (
                          <div
                            className={`w-12 h-0.5 mx-1 ${
                              progress === 'completed' ? 'bg-stone-800' : 'bg-stone-200'
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 콘텐츠 영역 */}
          <div className="flex-grow px-6 pb-20">
            <div className="mx-auto max-w-[900px]">
              {/* Step 1: 식사 시간 선택 */}
              {step === 'mealTime' && (
                <div className="animate-fade-in-up">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 text-center mb-8">
                    언제 드실 건가요?
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                    {(Object.keys(MEAL_TIME_LABELS) as MealTime[]).map((time) => (
                      <SelectButton
                        key={time}
                        label={MEAL_TIME_LABELS[time]}
                        emoji={time === 'breakfast' ? '🌅' : time === 'lunch' ? '☀️' : time === 'dinner' ? '🌙' : time === 'snack' ? '🍪' : '🌃'}
                        selected={selectedMealTime === time}
                        onClick={() => {
                          setSelectedMealTime(time);
                          setStep('companion');
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: 누구랑 먹을지 선택 */}
              {step === 'companion' && (
                <div className="animate-fade-in-up">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 text-center mb-8">
                    누구랑 드실 건가요?
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                    {(Object.keys(COMPANION_LABELS) as Companion[]).map((companion) => (
                      <SelectButton
                        key={companion}
                        label={COMPANION_LABELS[companion]}
                        emoji={COMPANION_EMOJI[companion]}
                        selected={selectedCompanion === companion}
                        onClick={() => {
                          setSelectedCompanion(companion);
                          setStep('foodType');
                        }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setStep('mealTime');
                      setSelectedCompanion(null);
                    }}
                    className="mt-8 text-stone-500 hover:text-stone-700 text-sm flex items-center justify-center mx-auto"
                  >
                    ← 이전 단계로
                  </button>
                </div>
              )}

              {/* Step 3: 음식 종류 선택 */}
              {step === 'foodType' && (
                <div className="animate-fade-in-up">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 text-center mb-8">
                    어떤 종류의 음식을 원하세요?
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <SelectButton
                      label="전체"
                      emoji="🍽️"
                      selected={selectedFoodType === 'all'}
                      onClick={() => {
                        setSelectedFoodType('all');
                      }}
                    />
                    {(Object.keys(FOOD_TYPE_LABELS) as FoodType[]).map((type) => (
                      <SelectButton
                        key={type}
                        label={FOOD_TYPE_LABELS[type]}
                        emoji={FOOD_TYPE_EMOJI[type]}
                        selected={selectedFoodType === type}
                        onClick={() => {
                          setSelectedFoodType(type);
                        }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setStep('companion');
                      setSelectedFoodType(null);
                    }}
                    className="mt-8 text-stone-500 hover:text-stone-700 text-sm flex items-center justify-center mx-auto"
                  >
                    ← 이전 단계로
                  </button>
                </div>
              )}

              {/* 추첨 애니메이션 */}
              {step === 'spinning' && (
                <div className="text-center animate-fade-in-up">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mb-8">
                    추천 메뉴를 고르는 중...
                  </h2>
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-12 shadow-lg">
                    <div className="text-8xl mb-4 animate-bounce">
                      {spinningFood?.emoji || '🍽️'}
                    </div>
                    <div className="text-2xl font-medium text-stone-700 animate-pulse">
                      {spinningFood?.name || '음식 선택 중...'}
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 홈으로 돌아가기 */}
          {step !== 'spinning' && (
            <div className="text-center pb-8">
              <Link
                to="/"
                className="text-stone-500 hover:text-stone-700 text-sm transition-colors"
              >
                ← 홈으로 돌아가기
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FoodRecommendPage;
