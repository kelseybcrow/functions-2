const mixedNumbers = [6, 3, 1, 7, 5, 2, 6, 8, 9, 4, 2, 7, 9, 3, 1, 8, 4, 3];

const evenNumbers = mixedNumbers.filter(function (element, index, array) {
  console.log(element, index);
  return element % 2 === 0;
});
