/** returns a random item from an array */
function randomChoice(inputArray) {
  const length = inputArray.length;

  const randomIdx = Math.floor(Math.random() * length);

  return inputArray[randomIdx];
}

export default randomChoice;