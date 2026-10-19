import React from 'react';
import { TenseData, UserStats } from '../types';
import { InteractiveTimeline } from './InteractiveTimeline';
import { DynamicFormula } from './DynamicFormula';
import { 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Clock, 
  CheckCheck, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { speakSentence } from '../utils/speech';

interface Props {
  tense: TenseData;
  allTenses: TenseData[];
  onSelectTense: (tenseId: string) => void;
  onStartTenseQuiz: (tenseId: string) => void;
  userStats: UserStats;
  onMarkLessonComplete: (tenseId: string) => void;
}

export const TenseExplorer: React.FC<Props> = ({
  tense,
  allTenses,
  onSelectTense,
  onStartTenseQuiz,
  userStats,
  onMarkLessonComplete
}) => {
  const isCompleted = userStats.completedLessons.includes(tense.id);

  // Group color accents
  const getGroupBadgeColor = (group: string) => {
    switch (group) {
      case 'present':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      case 'past':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300 dark:border-amber-800';
      case 'future':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border-sky-300 dark:border-sky-800';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Tense Quick Switcher Ribbon */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-indigo-500" />
          Tenses:
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {allTenses.map(t => {
            const isSelected = t.id === tense.id;
            const completed = userStats.completedLessons.includes(t.id);
            return (
              <button
                key={t.id}
                onClick={() => onSelectTense(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/50'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {t.name.replace(' Tense', '')}
                {completed && <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Lesson Hero Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getGroupBadgeColor(tense.group)}`}>
                {tense.group} time
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 capitalize">
                {tense.aspect} aspect
              </span>
              {isCompleted && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Lesson Completed (+50 XP)
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {tense.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {tense.summary}
            </p>

            {/* Quick Tip Banner */}
            <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/80 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
              <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Key Takeaway: </strong>
                {tense.quickTip}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button
              onClick={() => onStartTenseQuiz(tense.id)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-md shadow-indigo-500/20 hover:from-indigo-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Practice Questions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {!isCompleted ? (
              <button
                onClick={() => onMarkLessonComplete(tense.id)}
                className="px-5 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold text-xs hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark as Understood (+50 XP)</span>
              </button>
            ) : (
              <div className="px-5 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs text-center font-medium">
                Lesson mastered
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Visual Timeline Section */}
      <InteractiveTimeline tense={tense} />

      {/* Dynamic Interactive Formula Builder */}
      <DynamicFormula tense={tense} />

      {/* Standard Structure & Formula Breakdown Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Standard Grammar Formulas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Positive Formula */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Affirmative (+)
            </span>
            <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 font-mono block">
              {tense.formula.positive}
            </code>
          </div>

          {/* Negative Formula */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">
              Negative (-)
            </span>
            <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 font-mono block">
              {tense.formula.negative}
            </code>
          </div>

          {/* Question Formula */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
              Question (?)
            </span>
            <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 font-mono block">
              {tense.formula.question}
            </code>
          </div>
        </div>

        {tense.formula.subjectNote && (
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
            * Note: {tense.formula.subjectNote}
          </p>
        )}
      </div>

      {/* When to Use Rules */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">When to Use This Tense</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tense.whenToUse.map((rule, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {rule.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                {rule.explanation}
              </p>

              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-indigo-900 dark:text-indigo-200 italic">
                  "{rule.example}"
                </p>
                <button
                  onClick={() => speakSentence(rule.example)}
                  title="Listen to pronunciation"
                  className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors shrink-0"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signal Words / Keywords */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Signal Words & Trigger Clues</h2>
          </div>
          <span className="text-xs text-slate-400">Time keywords that give away this tense</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tense.signalWords.map((word, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors cursor-default"
            >
              🏷️ {word}
            </span>
          ))}
        </div>
      </div>

      {/* Common Mistakes & Pitfalls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Common Mistakes & Pitfalls to Avoid</h2>
        </div>

        <div className="space-y-4">
          {tense.commonMistakes.map((mistake, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Incorrect */}
                <div className="p-3 rounded-lg bg-rose-50/80 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block">Incorrect</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-through decoration-rose-400">
                      {mistake.incorrect}
                    </p>
                  </div>
                </div>

                {/* Correct */}
                <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Correct</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {mistake.correct}
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 flex items-start gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Why:</strong> {mistake.explanation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spoken English & Pronunciation Tips */}
      <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 flex items-start gap-3">
        <Volume2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider mb-1">
            Native Spoken English Tip
          </h4>
          <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">
            {tense.spokenTip}
          </p>
        </div>
      </div>
    </div>
  );
};
