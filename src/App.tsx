import React, { useState, useEffect } from 'react';
import { ALL_TENSES } from './data/tensesData';
import { PRACTICE_QUESTIONS } from './data/allQuestions';
import { IRREGULAR_VERBS } from './data/irregularVerbsData';
import { getStoredStats, recordAnswer, markLessonComplete, resetProgress } from './utils/storage';
import { UserStats } from './types';
import { Header } from './components/Header';
import { Navigation, NavTab } from './components/Navigation';
import { TenseExplorer } from './components/TenseExplorer';
import { QuizZone } from './components/QuizZone';
import { CheatSheetMatrix } from './components/CheatSheetMatrix';
import { VerbDictionary } from './components/VerbDictionary';
import { ProgressDashboard } from './components/ProgressDashboard';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('learn');
  const [selectedTenseId, setSelectedTenseId] = useState<string>('present-simple');
  const [quizFilterTenseId, setQuizFilterTenseId] = useState<string | undefined>(undefined);
  const [userStats, setUserStats] = useState<UserStats>(getStoredStats());
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('tensecraft_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tensecraft_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tensecraft_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleRecordAnswer = (questionId: string, tenseId: string, isCorrect: boolean) => {
    const updated = recordAnswer(questionId, tenseId, isCorrect, userStats);
    setUserStats(updated);
  };

  const handleMarkLessonComplete = (tenseId: string) => {
    const updated = markLessonComplete(tenseId, userStats);
    setUserStats(updated);
  };

  const handleResetStats = () => {
    const reset = resetProgress();
    setUserStats(reset);
  };

  const handleStartTenseQuiz = (tenseId: string) => {
    setQuizFilterTenseId(tenseId);
    setActiveTab('quiz');
  };

  const handleStartQuickQuiz = () => {
    setQuizFilterTenseId('all');
    setActiveTab('quiz');
  };

  const handleNavigateToLesson = (tenseId: string) => {
    setSelectedTenseId(tenseId);
    setActiveTab('learn');
  };

  const currentTense = ALL_TENSES.find(t => t.id === selectedTenseId) || ALL_TENSES[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Application Header */}
      <Header
        userStats={userStats}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onStartQuickQuiz={handleStartQuickQuiz}
      />

      {/* Main Tab Navigation */}
      <Navigation
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        wrongCount={userStats.wrongQuestionIds.length}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'learn' && (
          <TenseExplorer
            tense={currentTense}
            allTenses={ALL_TENSES}
            onSelectTense={setSelectedTenseId}
            onStartTenseQuiz={handleStartTenseQuiz}
            userStats={userStats}
            onMarkLessonComplete={handleMarkLessonComplete}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizZone
            questions={PRACTICE_QUESTIONS}
            allTenses={ALL_TENSES}
            initialTenseId={quizFilterTenseId}
            userStats={userStats}
            onRecordAnswer={handleRecordAnswer}
            onNavigateToLesson={handleNavigateToLesson}
          />
        )}

        {activeTab === 'matrix' && (
          <CheatSheetMatrix
            allTenses={ALL_TENSES}
            onSelectTense={handleNavigateToLesson}
            onPracticeTense={handleStartTenseQuiz}
          />
        )}

        {activeTab === 'verbs' && (
          <VerbDictionary verbs={IRREGULAR_VERBS} />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            userStats={userStats}
            allTenses={ALL_TENSES}
            allQuestions={PRACTICE_QUESTIONS}
            onNavigateToQuizReview={() => {
              setQuizFilterTenseId('all');
              setActiveTab('quiz');
            }}
            onNavigateToLesson={handleNavigateToLesson}
            onResetStats={handleResetStats}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">TenseCraft</span>
            <span>—</span>
            <span>Comprehensive Interactive English Tenses Tutor & Question Bank</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>All 12 Tenses Covered</span>
            <span>•</span>
            <span>Speech Audio Powered</span>
            <span>•</span>
            <span>Progress Saved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
