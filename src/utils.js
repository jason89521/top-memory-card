/**
 * @param {any[]} array
 */
export const shuffleArray = array => {
  const copy = [...array];
  const len = copy.length;
  for (let i = 0; i < len; i++) {
    const idxA = Math.floor(Math.random() * len);
    const idxB = Math.floor(Math.random() * len);
    const temp = copy[idxA];
    copy[idxA] = copy[idxB];
    copy[idxB] = temp;
  }
  return copy;
};
