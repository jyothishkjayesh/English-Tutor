import React, { useState } from 'react';
import { TenseData, TenseAspect, TenseGroup } from '../types';
import { Table, ArrowRight, Volume2, Sparkles } from 'lucide-react';
import { speakSentence } from '../utils/speech';

interface Props {
  allTenses: TenseData[];
  onSelectTense: (tenseId: string) => void;
  onPracticeTense: (tenseId: string) => void;
}

export const CheatSheetMatrix: React.FC<Props> = ({
  allTenses,
  onSelectTense,
  onPracticeTense
}) => {
  const [selectedExampleVerb, setSelectedExampleVerb] = useState<'write' | 'play' | 'study'>('write');

  const aspects: { key: TenseAspect; title: string; desc: string }[] = [
    { key: 'simple', title: 'Simple', desc: 'Facts, single events, regular habits' },
    { key: 'continuous', title: 'Continuous', desc: 'Ongoing actions in progress' },
    { key: 'perfect', title: 'Perfect', desc: 'Completed before a reference point' },
    { key: 'perfect-continuous', title: 'Perfect Continuous', desc: 'Ongoing duration leading up to a time' }
  ];

  const groups: { key: TenseGroup; title: string; color: string }[] = [
    { key: 'past', title: 'Past', color: 'text-amber-600 dark:text-amber-400' },
    { key: 'present', title: 'Present', color: 'text-emerald-600 dark:text-emerald-400' },
    { key: 'future', title: 'Future', color: 'text-sky-600 dark:text-sky-400' }
  ];

  // Helper to get conjugated sentence for matrix cell
  const getMatrixSentence = (group: TenseGroup, aspect: TenseAspect, verb: 'write' | 'play' | 'study') => {
    if (verb === 'write') {
      if (group === 'past' && aspect === 'simple') return 'She wrote an essay yesterday.';
      if (group === 'past' && aspect === 'continuous') return 'She was writing when the bell rang.';
      if (group === 'past' && aspect === 'perfect') return 'She had written it before noon.';
      if (group === 'past' && aspect === 'perfect-continuous') return 'She had been writing for 3 hours.';

      if (group === 'present' && aspect === 'simple') return 'She writes poems every morning.';
      if (group === 'present' && aspect === 'continuous') return 'She is writing a letter right now.';
      if (group === 'present' && aspect === 'perfect') return 'She has written three novels.';
      if (group === 'present' && aspect === 'perfect-continuous') return 'She has been writing all day.';

      if (group === 'future' && aspect === 'simple') return 'She will write the report tomorrow.';
      if (group === 'future' && aspect === 'continuous') return 'She will be writing at 10 AM.';
      if (group === 'future' && aspect === 'perfect') return 'She will have written it by Friday.';
      if (group === 'future' && aspect === 'perfect-continuous') return 'She will have been writing for years.';
    } else if (verb === 'play') {
      if (group === 'past' && aspect === 'simple') return 'They played soccer yesterday.';
      if (group === 'past' && aspect === 'continuous') return 'They were playing when it rained.';
      if (group === 'past' && aspect === 'perfect') return 'They had played before lunch.';
      if (group === 'past' && aspect === 'perfect-continuous') return 'They had been playing for an hour.';

      if (group === 'present' && aspect === 'simple') return 'They play chess every Sunday.';
      if (group === 'present' && aspect === 'continuous') return 'They are playing right now.';
      if (group === 'present' && aspect === 'perfect') return 'They have played in tournaments.';
      if (group === 'present' && aspect === 'perfect-continuous') return 'They have been playing since morning.';

      if (group === 'future' && aspect === 'simple') return 'They will play tomorrow.';
      if (group === 'future' && aspect === 'continuous') return 'They will be playing at 4 PM.';
      if (group === 'future' && aspect === 'perfect') return 'They will have played by dusk.';
      if (group === 'future' && aspect === 'perfect-continuous') return 'They will have been playing for 2 hours.';
    } else {
      if (group === 'past' && aspect === 'simple') return 'He studied French in college.';
      if (group === 'past' && aspect === 'continuous') return 'He was studying at midnight.';
      if (group === 'past' && aspect === 'perfect') return 'He had studied before the test.';
      if (group === 'past' && aspect === 'perfect-continuous') return 'He had been studying all evening.';

      if (group === 'present' && aspect === 'simple') return 'He studies biology every day.';
      if (group === 'present' && aspect === 'continuous') return 'He is studying right now.';
      if (group === 'present' && aspect === 'perfect') return 'He has studied hard this term.';
      if (group === 'present' && aspect === 'perfect-continuous') return 'He has been studying for exams.';

      if (group === 'future' && aspect === 'simple') return 'He will study abroad next year.';
      if (group === 'future' && aspect === 'continuous') return 'He will be studying at 2 PM.';
      if (group === 'future' && aspect === 'perfect') return 'He will have studied all units by May.';
      if (group === 'future' && aspect === 'perfect-continuous') return 'He will have been studying for 4 years.';
    }
    return '';
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Table className="w-5 h-5 text-indigo-500" />
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              The 12-Tense Comparison Matrix
            </h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Compare all 12 tenses at a single glance. Notice the patterns across Past, Present, and Future.
          </p>
        </div>

        {/* Verb switcher for comparative study */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl self-start md:self-auto">
          <span className="text-xs font-semibold text-slate-500 px-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Compare Verb:
          </span>
          {(['write', 'play', 'study'] as const).map(v => (
            <button
              key={v}
              onClick={() => setSelectedExampleVerb(v)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                selectedExampleVerb === v
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* 3x4 Grid Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map(g => (
          <div key={g.key} className="space-y-4">
            {/* Column Header */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
              <h3 className={`text-lg font-extrabold uppercase tracking-wider ${g.color}`}>
                {g.title} Tenses
              </h3>
            </div>

            {/* Aspects in this column */}
            <div className="space-y-4">
              {aspects.map(a => {
                const tenseObj = allTenses.find(t => t.group === g.key && t.aspect === a.key);
                if (!tenseObj) return null;
                const sentence = getMatrixSentence(g.key, a.key, selectedExampleVerb);

                return (
                  <div
                    key={a.key}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {a.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {tenseObj.group}
                        </span>
                      </div>

                      <h4 
                        onClick={() => onSelectTense(tenseObj.id)}
                        className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        {tenseObj.name.replace(' Tense', '')}
                      </h4>

                      {/* Formula Capsule */}
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 mb-3">
                        <span className="text-[10px] font-bold text-indigo-500 block uppercase">Formula:</span>
                        <code className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200 block truncate">
                          {tenseObj.formula.positive}
                        </code>
                      </div>

                      {/* Comparative Example */}
                      <div className="p-2.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between gap-2 mb-4">
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 italic">
                          "{sentence}"
                        </p>
                        <button
                          onClick={() => speakSentence(sentence)}
                          title="Listen to pronunciation"
                          className="p-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 rounded-md shrink-0"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Quick Action Links */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <button
                        onClick={() => onSelectTense(tenseObj.id)}
                        className="font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Lesson</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onPracticeTense(tenseObj.id)}
                        className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                      >
                        Practice
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
