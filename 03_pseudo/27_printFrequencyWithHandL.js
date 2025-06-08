function findTopFrequencies(arr) {
  // Step 1: Count frequency
  const freq = {}; // object to store frequency

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (freq[item] === undefined) {
      freq[item] = 1;
    } else {
      freq[item]++;
    }
  }

  // Step 2: Find max and second max frequency
  let max1 = 0, max2 = 0;
  let max1Elem = null, max2Elem = null;

  for (const key in freq) {
    const count = freq[key];

    if (count > max1) {
      max2 = max1;
      max2Elem = max1Elem;

      max1 = count;
      max1Elem = key;
    } else if (count > max2 && count < max1) {
      max2 = count;
      max2Elem = key;
    }
  }

  return {
    frequency: freq,
    highest: { element: Number(max1Elem), count: max1 },
    secondHighest: max2Elem ? { element: Number(max2Elem), count: max2 } : null
  };
}

const arr = [1, 2, 2, 3, 3, 3, 1, 2];

const result = findTopFrequencies(arr);
console.log(result);