/**
 * 음식 추천 서비스 데이터
 * - etc/data/fooddata.xlsx 기반 데이터
 * - 영양 정보 포함 (칼로리, 단백질, 지방, 탄수화물 등)
 */

import foodDatabase from './foodDatabase.json';

export type MealTime = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'latenight';
export type FoodType =
  | 'rice' | 'noodle' | 'soup' | 'stew' | 'grill'
  | 'stirfry' | 'fried' | 'steamed' | 'braised' | 'pancake' | 'porridge';
export type Companion = 'alone' | 'friend' | 'lover' | 'family' | 'colleague';

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  calcium: number;
}

export interface FoodItem {
  id: string;
  name: string;
  normalizedName: string;
  emoji: string;
  category: string;
  foodType: FoodType;
  mealTimes: MealTime[];
  nutrition: Nutrition;
}

export const MEAL_TIME_LABELS: Record<MealTime, string> = {
  breakfast: '아침',
  lunch: '점심',
  dinner: '저녁',
  snack: '간식',
  latenight: '야식',
};

export const FOOD_TYPE_LABELS: Record<FoodType, string> = {
  rice: '밥류',
  noodle: '면/만두',
  soup: '국/탕',
  stew: '찌개/전골',
  grill: '구이',
  stirfry: '볶음',
  fried: '튀김',
  steamed: '찜',
  braised: '조림',
  pancake: '전/부침',
  porridge: '죽/스프',
};

export const FOOD_TYPE_EMOJI: Record<FoodType, string> = {
  rice: '🍚',
  noodle: '🍜',
  soup: '🍲',
  stew: '🥘',
  grill: '🥩',
  stirfry: '🍳',
  fried: '🍤',
  steamed: '🫕',
  braised: '🍖',
  pancake: '🥞',
  porridge: '🥣',
};

export const COMPANION_LABELS: Record<Companion, string> = {
  alone: '혼밥',
  friend: '친구랑',
  lover: '연인이랑',
  family: '가족이랑',
  colleague: '동료랑',
};

export const COMPANION_EMOJI: Record<Companion, string> = {
  alone: '🧑',
  friend: '👫',
  lover: '💑',
  family: '👨‍👩‍👧‍👦',
  colleague: '👔',
};

// 메인 카테고리만 필터링 (식사용 음식)
const mainFoodTypes: FoodType[] = [
  'rice', 'noodle', 'soup', 'stew', 'grill',
  'stirfry', 'fried', 'steamed', 'braised', 'pancake', 'porridge'
];

// 전체 음식 데이터 (메인 카테고리만)
export const allFoods: FoodItem[] = (foodDatabase.foods as FoodItem[]).filter(
  food => mainFoodTypes.includes(food.foodType as FoodType)
);

/**
 * 필터 조건에 맞는 음식 목록 반환
 */
export function filterFoods(
  mealTime?: MealTime,
  foodType?: FoodType | 'all',
  excludeIds?: string[]
): FoodItem[] {
  return allFoods.filter((food) => {
    // 식사 시간 필터
    const matchesMealTime = !mealTime || food.mealTimes.includes(mealTime);
    // 음식 종류 필터
    const matchesFoodType = !foodType || foodType === 'all' || food.foodType === foodType;
    // 제외할 ID 필터
    const notExcluded = !excludeIds || !excludeIds.includes(food.id);

    return matchesMealTime && matchesFoodType && notExcluded;
  });
}

/**
 * 유사한 이름의 음식 ID 목록 반환
 * - 같은 normalizedName을 가진 음식들
 * - 이름의 앞 3글자가 같은 음식들
 */
export function getSimilarFoodIds(food: FoodItem): string[] {
  const similarIds: string[] = [];
  const namePrefix = food.name.slice(0, 3);

  allFoods.forEach(f => {
    if (f.id === food.id) return;

    // 정규화된 이름이 같은 경우
    if (f.normalizedName === food.normalizedName) {
      similarIds.push(f.id);
      return;
    }

    // 이름 앞 3글자가 같은 경우
    if (f.name.slice(0, 3) === namePrefix) {
      similarIds.push(f.id);
    }
  });

  return similarIds;
}

/**
 * 랜덤 음식 선택
 */
export function getRandomFood(foods: FoodItem[]): FoodItem | null {
  if (foods.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * foods.length);
  return foods[randomIndex];
}

/**
 * 영양 정보 포맷팅
 */
export function formatNutrition(nutrition: Nutrition): string {
  return `${nutrition.calories}kcal | 단백질 ${nutrition.protein}g | 지방 ${nutrition.fat}g | 탄수화물 ${nutrition.carbs}g`;
}