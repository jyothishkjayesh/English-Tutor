import React from 'react';
import { TenseData } from '../types';

interface Props {
  tense: TenseData;
}

export const InteractiveTimeline: React.FC<Props> = ({ tense }) => {
  const { timelineGraphicType, timelineDescription, name } = tense;

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-lg border border-slate-800">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Time Continuum Diagram</span>
        </div>
        <span className="text-xs text-slate-400">{name}</span>
      </div>

      {/* SVG Timeline Canvas */}
      <div className="relative w-full h-36 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center justify-center overflow-hidden px-4">
        <svg viewBox="0 0 600 130" className="w-full h-full max-w-xl">
          <defs>
            <linearGradient id="timeLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="activeHighlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Time Axis Line */}
          <line x1="40" y1="65" x2="560" y2="65" stroke="url(#timeLineGrad)" strokeWidth="3" strokeDasharray="none" />
          
          {/* Arrow at the end of timeline */}
          <polygon points="560,60 575,65 560,70" fill="#06b6d4" />

          {/* Axis Labels & Markers */}
          {/* PAST */}
          <line x1="120" y1="55" x2="120" y2="75" stroke="#94a3b8" strokeWidth="2" />
          <text x="120" y="42" fill="#94a3b8" fontSize="12" fontWeight="700" textAnchor="middle">PAST</text>

          {/* NOW (PRESENT) */}
          <line x1="300" y1="45" x2="300" y2="85" stroke="#10b981" strokeWidth="3" strokeDasharray="3 3" />
          <rect x="272" y="22" width="56" height="20" rx="4" fill="#065f46" />
          <text x="300" y="36" fill="#6ee7b7" fontSize="11" fontWeight="800" textAnchor="middle">NOW</text>

          {/* FUTURE */}
          <line x1="480" y1="55" x2="480" y2="75" stroke="#94a3b8" strokeWidth="2" />
          <text x="480" y="42" fill="#94a3b8" fontSize="12" fontWeight="700" textAnchor="middle">FUTURE</text>

          {/* ----------------- DYNAMIC GRAPHIC BY TENSE TYPE ----------------- */}
          
          {/* 1. Single Point in Past */}
          {timelineGraphicType === 'single_point' && tense.group === 'past' && (
            <g filter="url(#glow)">
              <circle cx="150" cy="65" r="9" fill="#f43f5e" stroke="#fff" strokeWidth="2" />
              <text x="150" y="98" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle">Completed action</text>
              <line x1="150" y1="65" x2="150" y2="85" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
            </g>
          )}

          {/* 2. Single Point / Habits in Present */}
          {timelineGraphicType === 'single_point' && tense.group === 'present' && (
            <g filter="url(#glow)">
              <circle cx="210" cy="65" r="5" fill="#38bdf8" />
              <circle cx="300" cy="65" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
              <circle cx="390" cy="65" r="5" fill="#38bdf8" />
              <text x="300" y="105" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="middle">Repeated habits / Universal facts</text>
            </g>
          )}

          {/* 3. Single Point in Future */}
          {timelineGraphicType === 'single_point' && tense.group === 'future' && (
            <g filter="url(#glow)">
              <circle cx="450" cy="65" r="9" fill="#a855f7" stroke="#fff" strokeWidth="2" />
              <text x="450" y="98" fill="#d8b4fe" fontSize="11" fontWeight="bold" textAnchor="middle">Future action / Decision</text>
            </g>
          )}

          {/* 4. Continuous Now (Present Continuous) */}
          {timelineGraphicType === 'continuous_now' && (
            <g filter="url(#glow)">
              <rect x="250" y="55" width="100" height="20" rx="10" fill="url(#activeHighlightGrad)" opacity="0.85" />
              <circle cx="300" cy="65" r="6" fill="#fff" />
              <text x="300" y="102" fill="#fcd34d" fontSize="11" fontWeight="bold" textAnchor="middle">Happening right now</text>
            </g>
          )}

          {/* 5. Past Continuous (with interruption) */}
          {timelineGraphicType === 'past_continuous' && (
            <g filter="url(#glow)">
              <rect x="90" y="56" width="120" height="18" rx="8" fill="#fbbf24" opacity="0.85" />
              <line x1="170" y1="50" x2="170" y2="80" stroke="#ef4444" strokeWidth="3" />
              <polygon points="170,45 165,55 175,55" fill="#ef4444" />
              <text x="130" y="100" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle">Ongoing past activity</text>
              <text x="180" y="32" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="start">⚡ Interruption (Past Simple)</text>
            </g>
          )}

          {/* 6. Past Before Past (Past Perfect) */}
          {timelineGraphicType === 'past_before_past' && (
            <g filter="url(#glow)">
              {/* Event 1 */}
              <circle cx="100" cy="65" r="8" fill="#ec4899" stroke="#fff" strokeWidth="2" />
              <text x="100" y="98" fill="#fbcfe8" fontSize="10" fontWeight="bold" textAnchor="middle">1st: Past Perfect</text>
              
              {/* Arrow from Event 1 to Event 2 */}
              <path d="M 115 55 Q 155 40 190 55" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Event 2 */}
              <circle cx="200" cy="65" r="7" fill="#64748b" stroke="#fff" strokeWidth="1.5" />
              <text x="200" y="98" fill="#cbd5e1" fontSize="10" fontWeight="bold" textAnchor="middle">2nd: Past Simple</text>
            </g>
          )}

          {/* 7. Past to Now (Present Perfect) */}
          {timelineGraphicType === 'past_to_now' && (
            <g filter="url(#glow)">
              <circle cx="160" cy="65" r="7" fill="#8b5cf6" />
              {/* Curved connection arrow to NOW */}
              <path d="M 165 58 Q 230 25 295 58" fill="none" stroke="#8b5cf6" strokeWidth="3" />
              <polygon points="295,58 285,52 288,62" fill="#8b5cf6" />
              <circle cx="300" cy="65" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
              <text x="230" y="24" fill="#c4b5fd" fontSize="11" fontWeight="bold" textAnchor="middle">Past action with result NOW</text>
              <text x="230" y="102" fill="#ddd6fe" fontSize="10" textAnchor="middle">Experience / Just happened</text>
            </g>
          )}

          {/* 8. Duration to Present (Present Perfect Continuous) */}
          {timelineGraphicType === 'duration_to_present' && (
            <g filter="url(#glow)">
              <line x1="140" y1="65" x2="295" y2="65" stroke="#10b981" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
              <polygon points="298,60 310,65 298,70" fill="#10b981" />
              <circle cx="140" cy="65" r="5" fill="#fff" />
              <text x="215" y="98" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">Continuous duration from past into NOW</text>
            </g>
          )}

          {/* 9. Duration in Past (Past Perfect Continuous) */}
          {timelineGraphicType === 'duration_in_past' && (
            <g filter="url(#glow)">
              <line x1="70" y1="65" x2="190" y2="65" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
              <circle cx="205" cy="65" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              <text x="130" y="98" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">Duration ongoing until a past moment</text>
            </g>
          )}

          {/* 10. Future Continuous */}
          {timelineGraphicType === 'future_continuous' && (
            <g filter="url(#glow)">
              <rect x="420" y="55" width="90" height="20" rx="10" fill="#06b6d4" opacity="0.85" />
              <text x="465" y="100" fill="#67e8f9" fontSize="10" fontWeight="bold" textAnchor="middle">In progress at future time</text>
            </g>
          )}

          {/* 11. Completed before future (Future Perfect) */}
          {timelineGraphicType === 'completed_before_future' && (
            <g filter="url(#glow)">
              <line x1="490" y1="48" x2="490" y2="82" stroke="#e11d48" strokeWidth="2.5" />
              <text x="490" y="40" fill="#fb7185" fontSize="10" fontWeight="bold" textAnchor="middle">Deadline</text>
              
              <circle cx="410" cy="65" r="7" fill="#38bdf8" />
              <path d="M 418 60 Q 450 45 480 62" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="485,65 475,60 478,68" fill="#38bdf8" />
              <text x="410" y="98" fill="#bae6fd" fontSize="10" fontWeight="bold" textAnchor="middle">Finished before deadline</text>
            </g>
          )}

          {/* 12. Duration in Future (Future Perfect Continuous) */}
          {timelineGraphicType === 'duration_in_future' && (
            <g filter="url(#glow)">
              <line x1="330" y1="65" x2="480" y2="65" stroke="#8b5cf6" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
              <line x1="490" y1="48" x2="490" y2="82" stroke="#ec4899" strokeWidth="2.5" />
              <text x="490" y="40" fill="#f472b6" fontSize="10" fontWeight="bold" textAnchor="middle">Milestone</text>
              <text x="405" y="98" fill="#c4b5fd" fontSize="10" fontWeight="bold" textAnchor="middle">Accumulated duration by milestone</text>
            </g>
          )}
        </svg>
      </div>

      {/* Description caption */}
      <p className="mt-3 text-xs md:text-sm text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50 flex items-start gap-2">
        <span className="text-emerald-400 font-bold shrink-0">💡 Concept:</span>
        <span>{timelineDescription}</span>
      </p>
    </div>
  );
};
