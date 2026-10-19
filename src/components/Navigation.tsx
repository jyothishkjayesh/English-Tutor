import React from 'react';
import { BookOpen, Trophy, Table, BookA, Target, AlertCircle } from 'lucide-react';

export type NavTab = 'learn' | 'quiz' | 'matrix' | 'verbs' | 'progress';

interface Props {
  activeTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
  wrongCount: number;
}

export const Navigation: React.FC<Props> = ({
  activeTab,
  onChangeTab,
  wrongCount
}) => {
  const tabs = [
    { id: 'learn' as NavTab, label: 'Lessons & Explorer', icon: BookOpen },
    { id: 'quiz' as NavTab, label: 'Practice & Quizzes', icon: Target, badge: wrongCount > 0 ? `${wrongCount} review` : null },
    { id: 'matrix' as NavTab, label: '12-Tense Matrix', icon: Table },
    { id: 'verbs' as NavTab, label: 'Irregular Verbs', icon: BookA },
    { id: 'progress' as NavTab, label: 'My Progress', icon: Trophy }
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2.5">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onChangeTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
