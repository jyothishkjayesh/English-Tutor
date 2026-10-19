export type TenseGroup = 'present' | 'past' | 'future';
export type TenseAspect = 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';

export interface TenseFormula {
  positive: string;
  negative: string;
  question: string;
  subjectNote?: string;
}

export interface UsageRule {
  title: string;
  explanation: string;
  example: string;
  counterExample?: string;
}

export interface MistakeItem {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface ConjugationSample {
  verb: string; // e.g. "play" or "write"
  positive: string;
  negative: string;
  question: string;
}

export interface TenseData {
  id: string;
  name: string;
  group: TenseGroup;
  aspect: TenseAspect;
  summary: string;
  timelineDescription: string;
  timelineGraphicType: 'single_point' | 'continuous_now' | 'past_continuous' | 'future_continuous' | 'past_to_now' | 'past_before_past' | 'duration_to_present' | 'duration_in_past' | 'duration_in_future' | 'completed_before_future';
  formula: TenseFormula;
  whenToUse: UsageRule[];
  signalWords: string[];
  commonMistakes: MistakeItem[];
  regularSample: ConjugationSample;
  irregularSample: ConjugationSample;
  spokenTip: string;
  quickTip: string;
}

export type QuestionType = 'mcq' | 'fill_in_the_blank' | 'identify_tense' | 'spot_error';
export type QuestionDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface PracticeQuestion {
  id: string;
  tenseId: string;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  prompt: string;
  sentenceWithBlank?: string; // e.g., "She ______ (work) at Google for three years before she moved to Apple."
  baseVerb?: string; // e.g., "work"
  options: string[]; // Options for MCQ or error spot
  correctAnswer: string;
  explanation: string;
  signalWordDetected?: string;
  ruleReference?: string;
}

export interface UserStats {
  totalAnswered: number;
  correctAnswers: number;
  currentStreak: number;
  bestStreak: number;
  xp: number;
  completedLessons: string[]; // tenseIds
  masteredTenses: string[]; // tenseIds with >= 80% accuracy
  wrongQuestionIds: string[]; // for review notebook
}

export interface IrregularVerb {
  v1: string; // Base / Infinitive
  v2: string; // Past Simple
  v3: string; // Past Participle
  meaning: string;
  exampleSentence: string;
}
