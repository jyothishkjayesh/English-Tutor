import React from 'react';
import { UserStats } from '../types';
import { Flame, Sparkles, Sun, Moon, Zap } from 'lucide-react';

interface Props {
  userStats: UserStats;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onStartQuickQuiz: () => void;
}

export const Header: React.FC<Props> = ({
  userStats,
  darkMode,
  onToggleDarkMode,
  onStartQuickQuiz
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-indigo-500/20">
            ⏳
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
                TenseCraft
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Master English Tenses with Confidence
            </p>
          </div>
        </div>

        {/* Stats & Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak pill */}
          <div 
            title={`${userStats.currentStreak} correct in a row!`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 text-xs font-bold"
          >
            <Flame className="w-4 h-4 fill-orange-500" />
            <span>{userStats.currentStreak}</span>
          </div>

          {/* XP pill */}
          <div 
            title="Total Experience Points"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900/60 text-xs font-bold"
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span>{userStats.xp} XP</span>
          </div>

          {/* Quick Quiz CTA */}
          <button
            onClick={onStartQuickQuiz}
            title="Launch quick quiz challenge"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Quick Quiz</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
