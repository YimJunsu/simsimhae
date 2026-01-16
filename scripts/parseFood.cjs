const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile(path.join(__dirname, '../etc/data/fooddata.xlsx'));
const sheetNames = workbook.SheetNames;
console.log('Sheet names:', sheetNames);

// 첫 번째 시트 데이터 확인
const sheet = workbook.Sheets[sheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// 카테고리(식품대분류명) 목록 확인
const categories = new Set();
data.slice(1).forEach(row => {
  if (row[2]) categories.add(row[2]);
});
console.log('\nCategories (식품대분류명):');
console.log([...categories].sort());
console.log('\nTotal categories:', categories.size);