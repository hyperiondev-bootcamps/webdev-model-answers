
const textSequence = [
  { word: "React", query: [0.90, 0.10, 0.05, 0.00], key: [0.85, 0.15, 0.00, 0.05], value: [100, 5, 0, 0] },
  { word: "Manages", query: [0.20, 0.80, 0.10, 0.10], key: [0.15, 0.75, 0.20, 0.00], value: [10, 50, 10, 0] },
  { word: "State", query: [0.85, 0.30, 0.00, 0.40], key: [0.90, 0.20, 0.10, 0.30], value: [0, 10, 80, 5] }
];

const focusTokenIndex = 2; // Token: "State"
const focusToken = textSequence[focusTokenIndex];

function computeDotProduct(array1, array2) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i] * array2[i];
  }
  return sum;
}

// Calculate the attention weights map
const attentionReport = textSequence.map(token => {
  const rawAttention = computeDotProduct(focusToken.query, token.key);
  const scaledAttention = rawAttention / 2; // Vector dimension scale factor square root
  
  return {
    word: token.word,
    rawScore: rawAttention,
    scaledScore: scaledAttention
  };
});

// Output reports for validation checks
console.log("Self-Attention Analysis Report:");
attentionReport.forEach(item => {
  console.log(`Word: "${item.word}" | Raw: ${item.rawScore.toFixed(4)} | Scaled: ${item.scaledScore.toFixed(4)}`);
});

/* Expected Verification Output:
- Word: "React" | Raw: 0.7875 | Scaled: 0.3938
- Word: "Manages" | Raw: 0.3525 | Scaled: 0.1763
- Word: "State" | Raw: 0.9450 | Scaled: 0.4725
*/
