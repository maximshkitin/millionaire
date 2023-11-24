export const getNextScore = (
  levels: { level: number; score: number }[],
  currentLevel: number,
): number | undefined => {
  const nextLevel = levels[currentLevel] // avoiding '+1' because levels start counting from '1' but arrays do from '0'

  if (nextLevel) {
    return nextLevel.score
  }
  return undefined
}
