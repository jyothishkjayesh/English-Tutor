import { UserStats } from '../types';

const STORAGE_KEY = 'tensecraft_user_stats';

const DEFAULT_STATS: UserStats = {
  totalAnswered: 0,
  correctAnswers: 0,
  currentStreak: 0,
  bestStreak: 0,
  xp: 0,
  completedLessons: [],
  masteredTenses: [],
  wrongQuestionIds: []
};

export const getStoredStats = (): UserStats => {
  if (typeof window === 'undefined') return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Failed to parse stats from localStorage', e);
    return DEFAULT_STATS;
  }
};

export const saveStoredStats = (stats: UserStats): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save stats to localStorage', e);
  }
};

export const recordAnswer = (
  questionId: string,
  tenseId: string,
  isCorrect: boolean,
  prevStats: UserStats
): UserStats => {
  const newTotal = prevStats.totalAnswered + 1;
  const newCorrect = prevStats.correctAnswers + (isCorrect ? 1 : 0);
  const newStreak = isCorrect ? prevStats.currentStreak + 1 : 0;
  const newBestStreak = Math.max(prevStats.bestStreak, newStreak);
  const xpGained = isCorrect ? 15 : 2;
  const newXp = prevStats.xp + xpGained;

  // Manage wrong questions list
  let updatedWrong = [...prevStats.wrongQuestionIds];
  if (!isCorrect) {
    if (!updatedWrong.includes(questionId)) {
      updatedWrong.push(questionId);
    }
  } else {
    // If answered correctly, remove from review list
    updatedWrong = updatedWrong.filter(id => id !== questionId);
  }

  // Check tense mastery: If user has at least 5 correct answers and high streak or completes quiz
  const updatedStats: UserStats = {
    ...prevStats,
    totalAnswered: newTotal,
    correctAnswers: newCorrect,
    currentStreak: newStreak,
    bestStreak: newBestStreak,
    xp: newXp,
    wrongQuestionIds: updatedWrong
  };

  saveStoredStats(updatedStats);
  return updatedStats;
};

export const markLessonComplete = (tenseId: string, prevStats: UserStats): UserStats => {
  if (prevStats.completedLessons.includes(tenseId)) return prevStats;
  const updatedStats: UserStats = {
    ...prevStats,
    completedLessons: [...prevStats.completedLessons, tenseId],
    xp: prevStats.xp + 50 // bonus for completing a lesson!
  };
  saveStoredStats(updatedStats);
  return updatedStats;
};

export const resetProgress = (): UserStats => {
  saveStoredStats(DEFAULT_STATS);
  return DEFAULT_STATS;
};
