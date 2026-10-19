import React, { useState } from 'react';
import { TenseData } from '../types';
import { Volume2, Sparkles, Check, HelpCircle, XCircle } from 'lucide-react';
import { speakSentence } from '../utils/speech';

interface Props {
  tense: TenseData;
}

type Pronoun = 'I' | 'You' | 'He / She / It' | 'We' | 'They';

export const DynamicFormula: React.FC<Props> = ({ tense }) => {
  const [selectedPronoun, setSelectedPronoun] = useState<Pronoun>('He / She / It');
  const [activeVerb, setActiveVerb] = useState<'work' | 'play' | 'write'>('work');

  const pronouns: Pronoun[] = ['I', 'You', 'He / She / It', 'We', 'They'];

  // Dynamic sentence generation based on tense & pronoun
  const generateDynamicConjugation = (tenseId: string, pronoun: Pronoun, verb: 'work' | 'play' | 'write') => {
    const isThirdPersonSingular = pronoun === 'He / She / It';
    const subj = pronoun === 'He / She / It' ? 'She' : pronoun;

    switch (tenseId) {
      // 1. Present Simple
      case 'present-simple': {
        const vPos = isThirdPersonSingular
          ? verb === 'write' ? 'writes' : verb === 'play' ? 'plays' : 'works'
          : verb;
        const auxNeg = isThirdPersonSingular ? "doesn't" : "don't";
        const auxQ = isThirdPersonSingular ? 'Does' : 'Do';
        return {
          pos: `${subj} ${vPos} diligently every day.`,
          neg: `${subj} ${auxNeg} ${verb} on weekends.`,
          q: `${auxQ} ${subj.toLowerCase()} ${verb} here often?`,
          ruleTag: isThirdPersonSingular ? 'Notice 3rd Person "-s/-es" ending!' : 'Base verb form with no ending.'
        };
      }

      // 2. Present Continuous
      case 'present-continuous': {
        const beAux = pronoun === 'I' ? 'am' : isThirdPersonSingular ? 'is' : 'are';
        const beAuxNeg = pronoun === 'I' ? "am not" : isThirdPersonSingular ? "isn't" : "aren't";
        const vIng = verb === 'write' ? 'writing' : `${verb}ing`;
        return {
          pos: `${subj} ${beAux} ${vIng} on the project right now.`,
          neg: `${subj} ${beAuxNeg} ${vIng} at the moment.`,
          q: `${beAux.charAt(0).toUpperCase() + beAux.slice(1)} ${subj.toLowerCase()} ${vIng} today?`,
          ruleTag: `Subject takes "${beAux}" + verb-ing.`
        };
      }

      // 3. Present Perfect
      case 'present-perfect': {
        const haveAux = isThirdPersonSingular ? 'has' : 'have';
        const haveNeg = isThirdPersonSingular ? "hasn't" : "haven't";
        const v3 = verb === 'write' ? 'written' : verb === 'play' ? 'played' : 'worked';
        return {
          pos: `${subj} ${haveAux} ${v3} here for three years.`,
          neg: `${subj} ${haveNeg} ${v3} the final draft yet.`,
          q: `${haveAux.charAt(0).toUpperCase() + haveAux.slice(1)} ${subj.toLowerCase()} ${v3} with them before?`,
          ruleTag: `Uses "${haveAux}" + Past Participle (V3: ${v3}).`
        };
      }

      // 4. Present Perfect Continuous
      case 'present-perfect-continuous': {
        const haveAux = isThirdPersonSingular ? 'has been' : 'have been';
        const haveNeg = isThirdPersonSingular ? "hasn't been" : "haven't been";
        const vIng = verb === 'write' ? 'writing' : `${verb}ing`;
        return {
          pos: `${subj} ${haveAux} ${vIng} non-stop since morning.`,
          neg: `${subj} ${haveNeg} ${vIng} for very long.`,
          q: `${isThirdPersonSingular ? 'Has' : 'Have'} ${subj.toLowerCase()} been ${vIng} all day?`,
          ruleTag: `Uses "${haveAux}" + verb-ing.`
        };
      }

      // 5. Past Simple
      case 'past-simple': {
        const v2 = verb === 'write' ? 'wrote' : verb === 'play' ? 'played' : 'worked';
        return {
          pos: `${subj} ${v2} late yesterday evening.`,
          neg: `${subj} didn't ${verb} yesterday.`,
          q: `Did ${subj.toLowerCase()} ${verb} yesterday?`,
          ruleTag: `Positive uses V2 (${v2}). Negative & question return to base "${verb}" because "did" handles past tense!`
        };
      }

      // 6. Past Continuous
      case 'past-continuous': {
        const wasWere = (pronoun === 'I' || isThirdPersonSingular) ? 'was' : 'were';
        const wasWereNeg = (pronoun === 'I' || isThirdPersonSingular) ? "wasn't" : "weren't";
        const vIng = verb === 'write' ? 'writing' : `${verb}ing`;
        return {
          pos: `${subj} ${wasWere} ${vIng} when the power went out.`,
          neg: `${subj} ${wasWereNeg} ${vIng} at 9 PM last night.`,
          q: `${wasWere.charAt(0).toUpperCase() + wasWere.slice(1)} ${subj.toLowerCase()} ${vIng} during the storm?`,
          ruleTag: `Uses "${wasWere}" + verb-ing.`
        };
      }

      // 7. Past Perfect
      case 'past-perfect': {
        const v3 = verb === 'write' ? 'written' : verb === 'play' ? 'played' : 'worked';
        return {
          pos: `${subj} had already ${v3} before the supervisor arrived.`,
          neg: `${subj} hadn't ${v3} before noon.`,
          q: `Had ${subj.toLowerCase()} ${v3} prior to the deadline?`,
          ruleTag: `Universal across all subjects: "had" + V3 (${v3}).`
        };
      }

      // 8. Past Perfect Continuous
      case 'past-perfect-continuous': {
        const vIng = verb === 'write' ? 'writing' : `${verb}ing`;
        return {
          pos: `${subj} had been ${vIng} for five hours before resting.`,
          neg: `${subj} hadn't been ${vIng} when we checked in.`,
          q: `Had ${subj.toLowerCase()} been ${vIng} long before the bell rang?`,
          ruleTag: `Universal: "had been" + verb-ing.`
        };
      }

      // 9. Future Simple
      case 'future-simple': {
        return {
          pos: `${subj} will ${verb} on the project tomorrow.`,
          neg: `${subj} won't ${verb} this upcoming weekend.`,
          q: `Will ${subj.toLowerCase()} ${verb} with us tomorrow?`,
          ruleTag: `Modal "will" + bare base verb "${verb}". Contraction: "won't".`
        };
      }

      // 10. Future Continuous
      case 'future-continuous': {
        const vIng = verb === 'write' ? 'writing' : `${verb}ing`;
        return {
          pos: `${subj} will be ${vIng} at 3:00 PM tomorrow.`,
          neg: `${subj} won't be ${vIng} during lunch hours.`,
          q: `Will ${subj.toLowerCase()} be ${vIng} at that hour?`,
          ruleTag: `Formula: "will be" + verb-ing.`
        };
      }

      // 11. Future Perfect
      case 'future-perfect': {
        const v3 = verb === 'write' ? 'written' : verb === 'play' ? 'played' : 'worked';
        return {
          pos: `${subj} will have ${v3} everything by Friday afternoon.`,
          neg: `${subj} won't have ${v3} the entire chapter by then.`,
          q: `Will ${subj.toLowerCase()} have ${v3} by midnight?`,
          ruleTag: `Formula: "will have" + V3 (${v3}). Never "will has"!`
        };
      }

      // 12. Future Perfect Continuous
      case 'future-perfect-continuous': {
        const vIng = verb === 'write' ? 'writing' : `${verb}ing`;
        return {
          pos: `${subj} will have been ${vIng} for six hours by 6 PM.`,
          neg: `${subj} won't have been ${vIng} that entire time.`,
          q: `Will ${subj.toLowerCase()} have been ${vIng} for a long time by then?`,
          ruleTag: `Formula: "will have been" + verb-ing.`
        };
      }

      default:
        return {
          pos: `${subj} ${verb}.`,
          neg: `${subj} doesn't ${verb}.`,
          q: `Does ${subj} ${verb}?`,
          ruleTag: ''
        };
    }
  };

  const dynamic = generateDynamicConjugation(tense.id, selectedPronoun, activeVerb);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Interactive Formula & Conjugator</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Switch pronouns to see how auxiliary verbs and endings change</p>
          </div>
        </div>

        {/* Verb switcher */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-xs">
          <span className="text-slate-400 px-1 font-medium">Verb:</span>
          {(['work', 'play', 'write'] as const).map(v => (
            <button
              key={v}
              onClick={() => setActiveVerb(v)}
              className={`px-2.5 py-1 rounded-md font-medium capitalize transition-all ${
                activeVerb === v
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {v} {v === 'write' && <span className="text-[10px] text-amber-500">(irregular)</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Pronoun Selector Pills */}
      <div className="mb-6">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
          Select Subject Pronoun:
        </label>
        <div className="flex flex-wrap gap-2">
          {pronouns.map(p => {
            const isSelected = selectedPronoun === p;
            return (
              <button
                key={p}
                onClick={() => setSelectedPronoun(p)}
                className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 ring-2 ring-indigo-400/50'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Sentences Cards (+, -, ?) */}
      <div className="space-y-3">
        {/* Affirmative (+) */}
        <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                Affirmative (+)
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{dynamic.pos}</p>
            </div>
          </div>
          <button
            onClick={() => speakSentence(dynamic.pos)}
            title="Listen to pronunciation"
            className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-lg transition-colors shrink-0"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Negative (-) */}
        <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-800/50 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center justify-center shrink-0 mt-0.5">
              <XCircle className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider block">
                Negative (-)
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{dynamic.neg}</p>
            </div>
          </div>
          <button
            onClick={() => speakSentence(dynamic.neg)}
            title="Listen to pronunciation"
            className="p-2 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-lg transition-colors shrink-0"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Question (?) */}
        <div className="p-3.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-800/50 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider block">
                Interrogative (?)
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{dynamic.q}</p>
            </div>
          </div>
          <button
            onClick={() => speakSentence(dynamic.q)}
            title="Listen to pronunciation"
            className="p-2 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/40 rounded-lg transition-colors shrink-0"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dynamic Rule Insight */}
      {dynamic.ruleTag && (
        <div className="mt-4 px-3.5 py-2.5 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/60 text-xs text-indigo-700 dark:text-indigo-300 font-medium flex items-center gap-2">
          <span className="font-bold">🎯 Tip:</span>
          <span>{dynamic.ruleTag}</span>
        </div>
      )}
    </div>
  );
};
