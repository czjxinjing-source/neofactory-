import { engineeringDrawingLegacyQuestions } from "./engineeringDrawingQuestions";
import { manufacturingProcessQuestions } from "./manufacturingProcessQuestions";
import { mechanicalBasicsQuestions } from "./mechanicalBasicsQuestions";
import { cncMachiningQuestions } from "./cncMachiningQuestions";
import { toleranceDetectionQuestions } from "./toleranceDetectionQuestions";
import { electricalControlQuestions } from "./electricalControlQuestions";
import { sensorDetectionQuestions } from "./sensorDetectionQuestions";
import { intelligentLineQuestions } from "./intelligentLineQuestions";

export type QuestionAnalysis = {
  correctReason: string;
  wrongReasons: Record<string, string>;
  learningPoint: string;
  commonMistake: string;
};

export type MistakeTeaching = Record<
  string,
  {
    whyThisOptionLooksRight: string;
    whyItIsActuallyWrong: string;
    howToAvoid: string;
  }
>;

export type Question = {
  id: string;
  levelId: string;
  text: string;
  category?: string;
  question?: string;
  promptCode?: string;
  answer?: string | string[];
  acceptableAnswers?: string[];
  image?: string | null;
  imageDescription?: string;
  knowledgePoint?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageFocus?: string;
  relatedDrawingFeature?: string;
  type?: string;
  difficulty?: "easy" | "medium" | "medium_hard" | "hard";
  area?: string;
  module?: string;
  moduleName?: string;
  knowledgePoints?: string[];
  tags?: string[];
  drawingId?: string;
  isMultiple?: boolean;
  fillAnswers?: string[];
  answerText?: string;
  options: string[];
  answerIndex: number | number[];
  explanation: string;
  analysis?: QuestionAnalysis;
  mistakeTeaching?: MistakeTeaching;
};

export const questions: Question[] = [
  ...mechanicalBasicsQuestions,
  ...manufacturingProcessQuestions,
  ...cncMachiningQuestions,
  ...toleranceDetectionQuestions,
  ...electricalControlQuestions,
  ...sensorDetectionQuestions,
  ...intelligentLineQuestions,
  ...engineeringDrawingLegacyQuestions,
];
