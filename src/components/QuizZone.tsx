import React, { useState, useEffect } from 'react';
import { PracticeQuestion, TenseData, UserStats } from '../types';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Flame, 
  Trophy, 
  Volume2, 
  BookOpen, 
  Filter, 
  Sparkles,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { speakSentence } from '../utils/speech';

interface Props {
  questions: PracticeQuestion[];
  allTenses: TenseData[];
  initialTenseId?: string;
  userStats: UserStats;
  onRecordAnswer: (questionId: string, tenseId: string, isCorrect: boolean) => void;
  onNavigateToLesson: (tenseId: string) => void;
}

export const QuizZone: React.FC<Props> = ({
  questions,
  allTenses,
  initialTenseId,
  userStats,
  onRecordAnswer,
  onNavigateToLesson
}) => {
  const [selectedTenseFilter, setSelectedTenseFilter] = useState<string>(initialTenseId || 'all');
  const [reviewModeOnly, setReviewModeOnly] = useState<boolean>(false);
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [currentSessionStreak, setCurrentSessionStreak] = useState<number>(0);

  // Sync if initialTenseId changes from outside
  useEffect(() => {
    if (initialTenseId) {
      setSelectedTenseFilter(initialTenseId);
      setReviewModeOnly(false);
      resetQuiz(initialTenseId, false, difficultyFilter);
    }
  }, [initialTenseId]);

  // Filter question pool
  const getFilteredQuestions = (tenseFilter: string, reviewOnly: boolean, diffFilter: string) => {
    let pool = [...questions];

    if (reviewOnly) {
      pool = pool.filter(q => userStats.wrongQuestionIds.includes(q.id));
    } else if (tenseFilter !== 'all') {
      pool = pool.filter(q => q.tenseId === tenseFilter);
    }

    if (diffFilter !== 'all') {
      pool = pool.filter(q => q.difficulty === diffFilter);
    }

    return pool;
  };

  const filteredQuestions = getFilteredQuestions(selectedTenseFilter, reviewModeOnly, difficultyFilter);
  const currentQuestion: PracticeQuestion | undefined = filteredQuestions[activeQuestionIndex];

  const resetQuiz = (tFilter = selectedTenseFilter, revOnly = reviewModeOnly, diff = difficultyFilter) => {
    setActiveQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setIsQuizCompleted(false);
    setCurrentSessionStreak(0);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsAnswerSubmitted(true);

    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      setCurrentSessionStreak(prev => prev + 1);
    } else {
      setCurrentSessionStreak(0);
    }

    onRecordAnswer(currentQuestion.id, currentQuestion.tenseId, isCorrect);
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex + 1 < filteredQuestions.length) {
      setActiveQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      // Trigger confetti if high score
      const finalScore = quizScore + (selectedAnswer === currentQuestion?.correctAnswer ? 0 : 0);
      const ratio = finalScore / filteredQuestions.length;
      if (ratio >= 0.7) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleHearCompletedSentence = () => {
    if (!currentQuestion) return;
    if (currentQuestion.sentenceWithBlank) {
      const completed = currentQuestion.sentenceWithBlank.replace(
        '______',
        currentQuestion.correctAnswer
      );
      speakSentence(completed);
    } else {
      speakSentence(currentQuestion.prompt);
    }
  };

  // If there are no questions in this filter
  if (filteredQuestions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center max-w-xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Questions Match Filter</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {reviewModeOnly 
            ? "Congratulations! Your 'Review Mistakes' notebook is currently empty. You haven't missed any questions or have resolved them all!"
            : "No practice questions found for this specific combination of tense and difficulty."}
        </p>
        <button
          onClick={() => {
            setReviewModeOnly(false);
            setSelectedTenseFilter('all');
            setDifficultyFilter('all');
            resetQuiz('all', false, 'all');
          }}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Reset Filters & Practice All
        </button>
      </div>
    );
  }

  // Quiz Completed Screen
  if (isQuizCompleted) {
    const accuracy = Math.round((quizScore / filteredQuestions.length) * 100);
    const passed = accuracy >= 70;

    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md text-center max-w-xl mx-auto animate-fadeIn">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${
          passed 
            ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400' 
            : 'bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400'
        }`}>
          {passed ? <Trophy className="w-10 h-10 animate-bounce" /> : <RotateCcw className="w-10 h-10" />}
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 block mb-1">
          Quiz Completed
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          {passed ? 'Outstanding Mastery! 🎉' : 'Keep Practicing! 💪'}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {passed 
            ? 'You demonstrated a solid understanding of English tense rules and structures.'
            : 'Review the explanations for missed questions to solidify your grammar intuition.'}
        </p>

        {/* Score Ring / Stats Box */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-8">
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">Score</span>
            <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {quizScore} / {filteredQuestions.length}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">Accuracy</span>
            <span className={`text-xl font-extrabold ${passed ? 'text-emerald-500' : 'text-amber-500'}`}>
              {accuracy}%
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">XP Earned</span>
            <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400">
              +{quizScore * 15} XP
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => resetQuiz()}
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>

          {userStats.wrongQuestionIds.length > 0 && (
            <button
              onClick={() => {
                setReviewModeOnly(true);
                resetQuiz(selectedTenseFilter, true, difficultyFilter);
              }}
              className="px-6 py-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 font-bold text-sm hover:bg-amber-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Review Missed ({userStats.wrongQuestionIds.length})</span>
            </button>
          )}

          {selectedTenseFilter !== 'all' && (
            <button
              onClick={() => onNavigateToLesson(selectedTenseFilter)}
              className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Back to Lesson
            </button>
          )}
        </div>
      </div>
    );
  }

  const currentTenseObj = allTenses.find(t => t.id === currentQuestion.tenseId);

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
      {/* Quiz Controls & Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-indigo-500" />
            Filter:
          </span>

          {/* Tense Dropdown */}
          <select
            value={reviewModeOnly ? 'review' : selectedTenseFilter}
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'review') {
                setReviewModeOnly(true);
                resetQuiz(selectedTenseFilter, true, difficultyFilter);
              } else {
                setReviewModeOnly(false);
                setSelectedTenseFilter(val);
                resetQuiz(val, false, difficultyFilter);
              }
            }}
            className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl px-3 py-2 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">🌟 All 12 Tenses (Comprehensive)</option>
            {userStats.wrongQuestionIds.length > 0 && (
              <option value="review">⚠️ Review Missed ({userStats.wrongQuestionIds.length})</option>
            )}
            <optgroup label="Present Tenses">
              <option value="present-simple">Simple Present</option>
              <option value="present-continuous">Present Continuous</option>
              <option value="present-perfect">Present Perfect</option>
              <option value="present-perfect-continuous">Present Perfect Continuous</option>
            </optgroup>
            <optgroup label="Past Tenses">
              <option value="past-simple">Simple Past</option>
              <option value="past-continuous">Past Continuous</option>
              <option value="past-perfect">Past Perfect</option>
              <option value="past-perfect-continuous">Past Perfect Continuous</option>
            </optgroup>
            <optgroup label="Future Tenses">
              <option value="future-simple">Simple Future</option>
              <option value="future-continuous">Future Continuous</option>
              <option value="future-perfect">Future Perfect</option>
              <option value="future-perfect-continuous">Future Perfect Continuous</option>
            </optgroup>
          </select>

          {/* Difficulty Dropdown */}
          <select
            value={difficultyFilter}
            onChange={(e) => {
              const val = e.target.value;
              setDifficultyFilter(val);
              resetQuiz(selectedTenseFilter, reviewModeOnly, val);
            }}
            className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl px-3 py-2 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">🟢 Beginner</option>
            <option value="intermediate">🟡 Intermediate</option>
            <option value="advanced">🔴 Advanced</option>
          </select>
        </div>

        {/* Live Session Streak & Score */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 text-xs font-bold">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span>{currentSessionStreak} streak</span>
          </div>

          <div className="text-xs font-bold text-slate-600 dark:text-slate-300">
            Score: <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">{quizScore}</span>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold">
              Question {activeQuestionIndex + 1} of {filteredQuestions.length}
            </span>
            <span className="font-semibold uppercase tracking-wider text-indigo-500">
              {currentTenseObj?.name.replace(' Tense', '')}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
              style={{ width: `${((activeQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Prompt */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
              currentQuestion.difficulty === 'beginner' 
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                : currentQuestion.difficulty === 'intermediate'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
            }`}>
              {currentQuestion.difficulty}
            </span>
            {currentQuestion.type === 'identify_tense' && (
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                Identify Tense
              </span>
            )}
            {currentQuestion.type === 'spot_error' && (
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                Spot the Error
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {currentQuestion.prompt}
          </h3>

          {/* Sentence Container */}
          {currentQuestion.sentenceWithBlank && (
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-between gap-3">
              <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100">
                {currentQuestion.sentenceWithBlank}
              </p>
              <button
                onClick={() => speakSentence(currentQuestion.sentenceWithBlank || '')}
                title="Listen to sentence"
                className="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded-xl transition-colors shrink-0"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;

            let optionStyle = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-600 text-slate-800 dark:text-slate-200';

            if (isAnswerSubmitted) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-400/50';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-400/50';
              } else {
                optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
              }
            } else if (isSelected) {
              optionStyle = 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/40';
            }

            return (
              <button
                key={idx}
                disabled={isAnswerSubmitted}
                onClick={() => handleSelectOption(option)}
                className={`w-full p-4 rounded-2xl border text-left font-medium text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                    isSelected 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isAnswerSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button: Check Answer or Next Question */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {isAnswerSubmitted 
              ? (selectedAnswer === currentQuestion.correctAnswer ? '🎉 Correct answer!' : '❌ Incorrect')
              : 'Select one option above to submit'}
          </div>

          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                selectedAnswer 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer shadow-md shadow-indigo-500/20' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm hover:from-indigo-700 hover:to-violet-700 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-500/20"
            >
              <span>{activeQuestionIndex + 1 < filteredQuestions.length ? 'Next Question' : 'View Results'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Detailed Explanation Drawer (shown after submission) */}
        {isAnswerSubmitted && (
          <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Explanation & Rule Insight</span>
              </div>
              <button
                onClick={handleHearCompletedSentence}
                className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen to Full Sentence</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQuestion.explanation}
            </p>

            {currentQuestion.signalWordDetected && (
              <div className="text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-900/40">
                <span className="font-bold">Trigger Clue:</span> {currentQuestion.signalWordDetected}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Rule: {currentQuestion.ruleReference || currentTenseObj?.name}
              </span>
              <button
                onClick={() => onNavigateToLesson(currentQuestion.tenseId)}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open {currentTenseObj?.name.replace(' Tense', '')} Lesson</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
