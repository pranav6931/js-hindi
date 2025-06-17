// flatMap()
// flatMap() is like a combo move of map() + flat(). Think of it as mapping each item, then flattening the result by one level.




const withMap = [1, 2, 3].map(n => [n * 2]);
// → [[2], [4], [6]] ❌ nested array

const withFlatMap = [1, 2, 3].flatMap(n => [n * 2]);
// → [2, 4, 6] ✅ flat array