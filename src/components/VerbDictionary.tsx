import React, { useState } from 'react';
import { IrregularVerb } from '../types';
import { Search, Volume2, BookA, Sparkles, Check, HelpCircle } from 'lucide-react';
import { speakSentence } from '../utils/speech';

interface Props {
  verbs: IrregularVerb[];
}

export const VerbDictionary: React.FC<Props> = ({ verbs }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterLetter, setFilterLetter] = useState<string>('all');

  // Filter verbs
  const filteredVerbs = verbs.filter(v => {
    const matchesSearch = 
      v.v1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.v2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.v3.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.meaning.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLetter = filterLetter === 'all' || v.v1.toLowerCase().startsWith(filterLetter.toLowerCase());

    return matchesSearch && matchesLetter;
  });

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookA className="w-5 h-5 text-indigo-500" />
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Irregular Verbs Conjugation Dictionary
            </h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Master the most common English irregular verbs across V1 (Infinitive), V2 (Past Simple), and V3 (Past Participle).
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search any verb or meaning..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Alphabet Quick Filter */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-1 overflow-x-auto">
        <button
          onClick={() => setFilterLetter('all')}
          className={`px-3 py-1 rounded-xl text-xs font-bold uppercase transition-all shrink-0 cursor-pointer ${
            filterLetter === 'all'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          All ({verbs.length})
        </button>
        {alphabet.map(letter => {
          const count = verbs.filter(v => v.v1.toLowerCase().startsWith(letter)).length;
          if (count === 0) return null;
          return (
            <button
              key={letter}
              onClick={() => setFilterLetter(letter)}
              className={`w-7 h-7 rounded-lg text-xs font-bold uppercase transition-all shrink-0 cursor-pointer flex items-center justify-center ${
                filterLetter === letter
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Verbs Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Base Form (V1)</th>
                <th className="py-3.5 px-4 text-amber-600 dark:text-amber-400">Past Simple (V2)</th>
                <th className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400">Past Participle (V3)</th>
                <th className="py-3.5 px-4">Meaning & Example Sentence</th>
                <th className="py-3.5 px-4 text-center">Audio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredVerbs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    No irregular verbs matched your search.
                  </td>
                </tr>
              ) : (
                filteredVerbs.map((v, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      {v.v1}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-amber-700 dark:text-amber-300 whitespace-nowrap">
                      {v.v2}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
                      {v.v3}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-500 dark:text-slate-400 text-xs mb-0.5">
                        {v.meaning}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 font-medium italic">
                        "{v.exampleSentence}"
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => speakSentence(`${v.v1}, ${v.v2}, ${v.v3}. ${v.exampleSentence}`)}
                        title="Listen to verb pronunciation"
                        className="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 rounded-xl transition-colors cursor-pointer inline-flex items-center justify-center"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
