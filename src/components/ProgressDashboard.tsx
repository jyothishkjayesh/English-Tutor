import React from 'react';
import { UserStats, TenseData, PracticeQuestion } from '../types';
import { 
  Trophy, 
  Flame, 
  Target, 
  BookCheck, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  AlertCircle,
  Award
} from 'lucide-react';

interface Props {
  userStats: UserStats;
  allTenses: TenseData[];
  allQuestions: PracticeQuestion[];
  onNavigateToQuizReview: () => void;
  onNavigateToLesson: (tenseId: string) => void;
  onResetStats: () => void;
}

export const ProgressDashboard: React.FC<Props> = ({
  userStats,
  allTenses,
  allQuestions,
  onNavigateToQuizReview,
  onNavigateToLesson,
  onResetStats
}) => {
  const accuracy = userStats.totalAnswered > 0
    ? Math.round((userStats.correctAnswers / userStats.totalAnswered) * 100)
    : 0;

  // Level determination
  const getLevel = (xp: number) => {
    if (xp >= 1000) return { title: 'Tense Virtuoso 👑', nextXp: 2000, level: 4 };
    if (xp >= 500) return { title: 'Grammar Adept ⚡', nextXp: 1000, level: 3 };
    if (xp >= 200) return { title: 'Time Explorer 🧭', nextXp: 500, level: 2 };
    return { title: 'Grammar Apprentice 🌱', nextXp: 200, level: 1 };
  };

  const levelInfo = getLevel(userStats.xp);
  const lessonsCompletedCount = userStats.completedLessons.length;
  const lessonsCompletionPercent = Math.round((lessonsCompletedCount / 12) * 100);

  // Group stats
  const presentTenses = allTenses.filter(t => t.group === 'present');
  const pastTenses = allTenses.filter(t => t.group === 'past');
  const futureTenses = allTenses.filter(t => t.group === 'future');

  const getGroupCompleted = (tenses: TenseData[]) => {
    const done = tenses.filter(t => userStats.completedLessons.includes(t.id)).length;
    return { done, total: tenses.length, percent: Math.round((done / tenses.length) * 100) };
  };

  const presentStats = getGroupCompleted(presentTenses);
  const pastStats = getGroupCompleted(pastTenses);
  const futureStats = getGroupCompleted(futureTenses);

  // Questions marked for review
  const wrongQuestions = allQuestions.filter(q => userStats.wrongQuestionIds.includes(q.id));

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner / Hero */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-indigo-200 border border-white/10">
                Level {levelInfo.level}
              </span>
              <span className="text-sm font-bold text-amber-300 flex items-center gap-1">
                <Award className="w-4 h-4" />
                {levelInfo.title}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Your English Tenses Mastery
            </h1>
            <p className="text-indigo-200 text-xs sm:text-sm max-w-xl">
              Track your grammar growth, active learning streaks, and review missed questions to achieve complete fluency.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 self-start md:self-auto">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-extrabold block">{userStats.xp}</span>
              <span className="text-[11px] font-semibold text-indigo-200 uppercase tracking-wider">Total XP</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-extrabold block text-amber-300 flex items-center justify-center gap-1">
                <Flame className="w-6 h-6 fill-amber-400" />
                {userStats.currentStreak}
              </span>
              <span className="text-[11px] font-semibold text-indigo-200 uppercase tracking-wider">Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
            <BookCheck className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-400 font-medium block mb-1">Lessons Mastered</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {lessonsCompletedCount}
            </span>
            <span className="text-xs text-slate-400">/ 12 tenses</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${lessonsCompletionPercent}%` }} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
            <Target className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-400 font-medium block mb-1">Overall Accuracy</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {accuracy}%
            </span>
            <span className="text-xs text-slate-400">({userStats.correctAnswers}/{userStats.totalAnswered})</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${accuracy}%` }} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
            <Flame className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-400 font-medium block mb-1">Best Streak</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {userStats.bestStreak}
            </span>
            <span className="text-xs text-slate-400">questions in a row</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, userStats.bestStreak * 10)}%` }} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-400 font-medium block mb-1">Total Questions Solved</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {userStats.totalAnswered}
            </span>
            <span className="text-xs text-slate-400">answered</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${Math.min(100, userStats.totalAnswered * 5)}%` }} />
          </div>
        </div>
      </div>

      {/* Group Progress Bars (Present / Past / Future) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Time Period Mastery Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Present */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-emerald-900 dark:text-emerald-200">Present Tenses</span>
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">{presentStats.done}/4</span>
            </div>
            <div className="w-full h-2 rounded-full bg-emerald-200/60 dark:bg-emerald-900/60 overflow-hidden mb-3">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${presentStats.percent}%` }} />
            </div>
            <div className="space-y-1">
              {presentTenses.map(t => (
                <div key={t.id} className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 dark:text-slate-300">{t.name.replace(' Tense', '')}</span>
                  <span className={userStats.completedLessons.includes(t.id) ? 'text-emerald-600 font-bold' : 'text-slate-400'}>
                    {userStats.completedLessons.includes(t.id) ? '✓ Done' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Past */}
          <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-amber-900 dark:text-amber-200">Past Tenses</span>
              <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">{pastStats.done}/4</span>
            </div>
            <div className="w-full h-2 rounded-full bg-amber-200/60 dark:bg-amber-900/60 overflow-hidden mb-3">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${pastStats.percent}%` }} />
            </div>
            <div className="space-y-1">
              {pastTenses.map(t => (
                <div key={t.id} className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 dark:text-slate-300">{t.name.replace(' Tense', '')}</span>
                  <span className={userStats.completedLessons.includes(t.id) ? 'text-amber-600 font-bold' : 'text-slate-400'}>
                    {userStats.completedLessons.includes(t.id) ? '✓ Done' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Future */}
          <div className="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-sky-900 dark:text-sky-200">Future Tenses</span>
              <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400">{futureStats.done}/4</span>
            </div>
            <div className="w-full h-2 rounded-full bg-sky-200/60 dark:bg-sky-900/60 overflow-hidden mb-3">
              <div className="h-full bg-sky-500 rounded-full" style={{ width: `${futureStats.percent}%` }} />
            </div>
            <div className="space-y-1">
              {futureTenses.map(t => (
                <div key={t.id} className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 dark:text-slate-300">{t.name.replace(' Tense', '')}</span>
                  <span className={userStats.completedLessons.includes(t.id) ? 'text-sky-600 font-bold' : 'text-slate-400'}>
                    {userStats.completedLessons.includes(t.id) ? '✓ Done' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Mistakes Notebook Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Review Missed Questions Notebook</h2>
              <p className="text-xs text-slate-500">Target your weaknesses by re-solving questions you missed</p>
            </div>
          </div>

          {wrongQuestions.length > 0 && (
            <button
              onClick={onNavigateToQuizReview}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Practice Missed ({wrongQuestions.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {wrongQuestions.length === 0 ? (
          <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-center">
            <p className="text-emerald-800 dark:text-emerald-300 font-medium text-sm">
              ✨ Great job! You have zero pending incorrect questions. You're on track for total tense fluency!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {wrongQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider block">
                    {allTenses.find(t => t.id === q.tenseId)?.name.replace(' Tense', '')}
                  </span>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {q.sentenceWithBlank || q.prompt}
                  </p>
                </div>
                <button
                  onClick={onNavigateToQuizReview}
                  className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline shrink-0 cursor-pointer"
                >
                  Retry Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reset progress safety button */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to reset your score, XP, and streak? This cannot be undone.')) {
              onResetStats();
            }
          }}
          className="text-xs text-rose-500 hover:text-rose-700 flex items-center gap-1 cursor-pointer font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Learning Progress</span>
        </button>
      </div>
    </div>
  );
};
