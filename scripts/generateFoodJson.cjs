const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile(path.join(__dirname, '../etc/data/fooddata.xlsx'));
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// 카테고리 매핑 (음식 종류)
const categoryMapping = {
  '밥류': 'rice',
  '면 및 만두류': 'noodle',
  '국 및 탕류': 'soup',
  '찌개 및 전골류': 'stew',
  '구이류': 'grill',
  '볶음류': 'stirfry',
  '튀김류': 'fried',
  '찜류': 'steamed',
  '조림류': 'braised',
  '전·적 및 부침류': 'pancake',
  '죽 및 스프류': 'porridge',
  '나물·숙채류': 'namul',
  '생채·무침류': 'salad',
  '김치류': 'kimchi',
  '빵 및 과자류': 'bread',
  '음료 및 차류': 'drink',
  '유제품류 및 빙과류': 'dairy',
  '과일류': 'fruit',
  '곡류, 서류 제품': 'grain',
  '수·조·어·육류': 'meat',
  '두류, 견과 및 종실류': 'nuts',
  '채소, 해조류': 'vegetable',
  '장류, 양념류': 'sauce',
  '장아찌·절임류': 'pickle',
  '젓갈류': 'jeotgal',
};

// 식사 시간 매핑 (카테고리 기반)
const mealTimeMapping = {
  'rice': ['breakfast', 'lunch', 'dinner'],
  'noodle': ['lunch', 'dinner', 'latenight'],
  'soup': ['breakfast', 'lunch', 'dinner'],
  'stew': ['lunch', 'dinner', 'latenight'],
  'grill': ['lunch', 'dinner', 'latenight'],
  'stirfry': ['lunch', 'dinner'],
  'fried': ['lunch', 'dinner', 'snack', 'latenight'],
  'steamed': ['lunch', 'dinner'],
  'braised': ['lunch', 'dinner'],
  'pancake': ['snack', 'latenight', 'dinner'],
  'porridge': ['breakfast', 'snack'],
  'namul': ['lunch', 'dinner'],
  'salad': ['lunch', 'dinner', 'snack'],
  'kimchi': ['breakfast', 'lunch', 'dinner'],
  'bread': ['breakfast', 'snack'],
  'drink': ['breakfast', 'snack'],
  'dairy': ['breakfast', 'snack'],
  'fruit': ['breakfast', 'snack'],
  'grain': ['breakfast', 'snack'],
  'meat': ['lunch', 'dinner'],
  'nuts': ['snack'],
  'vegetable': ['lunch', 'dinner'],
  'sauce': [],
  'pickle': ['lunch', 'dinner'],
  'jeotgal': ['lunch', 'dinner'],
};

// 음식 이모지 매핑
const emojiMapping = {
  'rice': '🍚',
  'noodle': '🍜',
  'soup': '🍲',
  'stew': '🥘',
  'grill': '🥩',
  'stirfry': '🍳',
  'fried': '🍤',
  'steamed': '🫕',
  'braised': '🍖',
  'pancake': '🥞',
  'porridge': '🥣',
  'namul': '🥬',
  'salad': '🥗',
  'kimchi': '🥬',
  'bread': '🍞',
  'drink': '🥤',
  'dairy': '🧀',
  'fruit': '🍎',
  'grain': '🌾',
  'meat': '🥓',
  'nuts': '🥜',
  'vegetable': '🥕',
  'sauce': '🫙',
  'pickle': '🥒',
  'jeotgal': '🦐',
};

// 메인 카테고리 (식사용 음식만 필터링)
const mainCategories = ['rice', 'noodle', 'soup', 'stew', 'grill', 'stirfry', 'fried', 'steamed', 'braised', 'pancake', 'porridge'];

// 데이터 변환
const foods = [];
let id = 1;

data.slice(1).forEach(row => {
  const [normalizedName, name, category, calories, protein, fat, carbs, sugar, fiber, calcium] = row;

  if (!name || !category) return;

  const foodType = categoryMapping[category];
  if (!foodType) return;

  // 식사용 음식만 포함 (소스, 양념 등 제외)
  const mealTimes = mealTimeMapping[foodType] || [];
  if (mealTimes.length === 0) return;

  // 숫자 값 처리
  const parseNum = (val) => {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : Math.round(num * 10) / 10;
  };

  foods.push({
    id: `f${String(id++).padStart(5, '0')}`,
    name: name,
    normalizedName: normalizedName || name,
    emoji: emojiMapping[foodType] || '🍽️',
    category: category,
    foodType: foodType,
    mealTimes: mealTimes,
    nutrition: {
      calories: parseNum(calories),
      protein: parseNum(protein),
      fat: parseNum(fat),
      carbs: parseNum(carbs),
      sugar: parseNum(sugar),
      fiber: parseNum(fiber),
      calcium: parseNum(calcium),
    },
  });
});

// 결과 저장
const output = {
  generatedAt: new Date().toISOString(),
  totalCount: foods.length,
  categories: Object.entries(categoryMapping).map(([kr, en]) => ({
    id: en,
    nameKr: kr,
    emoji: emojiMapping[en],
    isMainCategory: mainCategories.includes(en),
  })),
  foods: foods,
};

const outputPath = path.join(__dirname, '../src/data/foodDatabase.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

console.log(`Generated ${foods.length} food items`);
console.log(`Saved to: ${outputPath}`);

// 카테고리별 통계
const stats = {};
foods.forEach(f => {
  stats[f.foodType] = (stats[f.foodType] || 0) + 1;
});
console.log('\nCategory stats:', stats);