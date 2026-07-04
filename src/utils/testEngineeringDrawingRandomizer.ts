import { engineeringDrawingImages } from "../data/engineeringDrawingImages";
import { questions } from "../data/questions";
import { generatePracticeSet } from "./engineeringDrawingRandomizer";

export function testEngineeringDrawingRandomizer(rounds = 20, count = 12) {
  const drawingUse: Record<string, number> = {};
  const usedQuestions = new Set<string>();
  const roundResults: string[] = [];
  const warnings: string[] = [];
  const drawingPartTypeById = Object.fromEntries(engineeringDrawingImages.map((item) => [item.id, item.partType]));

  for (let round = 1; round <= rounds; round += 1) {
    const result = generatePracticeSet({
      questions,
      count,
      filters: { drawingPartTypeById },
    });
    for (const question of result.questions) {
      usedQuestions.add(question.id);
      if (question.drawingId) drawingUse[question.drawingId] = (drawingUse[question.drawingId] ?? 0) + 1;
    }
    const hasDuplicateQuestion = result.stats.uniqueQuestionCount !== result.stats.total;
    const maxDrawingRepeat = Math.max(0, ...Object.values(result.stats.drawingUsage));
    const hasAdjacentSameDrawing = result.questions.some((question, index) => index > 0 && question.drawingId && question.drawingId === result.questions[index - 1].drawingId);
    const pass =
      !hasDuplicateQuestion &&
      result.stats.uniqueDrawingCount >= 8 &&
      maxDrawingRepeat <= 2 &&
      !hasAdjacentSameDrawing &&
      result.stats.noImageQuestionCount <= 3;

    roundResults.push(
      `Round ${round}: ${pass ? "PASS" : "FAIL"}, uniqueDrawings=${result.stats.uniqueDrawingCount}, maxDrawingRepeat=${maxDrawingRepeat}`,
    );
    warnings.push(...result.warnings);
  }

  return {
    title: "Engineering Drawing Randomizer Test",
    totalRounds: rounds,
    questionsPerRound: count,
    totalSampledQuestions: rounds * count,
    uniqueQuestionsUsed: usedQuestions.size,
    totalQuestions: questions.filter((question) => question.levelId.startsWith("drawing-")).length,
    uniqueDrawingsUsed: Object.keys(drawingUse).length,
    totalDrawings: engineeringDrawingImages.length,
    roundResults,
    drawingUse,
    warnings,
  };
}
