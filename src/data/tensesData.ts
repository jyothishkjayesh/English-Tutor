import { TenseData } from '../types';

export const ALL_TENSES: TenseData[] = [
  // -------------------------------------------------------------
  // 1. SIMPLE PRESENT
  // -------------------------------------------------------------
  {
    id: 'present-simple',
    name: 'Simple Present Tense',
    group: 'present',
    aspect: 'simple',
    summary: 'Used for habits, daily routines, scientific facts, universal truths, and scheduled timetables.',
    timelineDescription: 'Expresses permanent states, general facts, or repeated actions happening regularly across past, present, and future.',
    timelineGraphicType: 'single_point',
    formula: {
      positive: 'Subject + V1 (base form) / V1 + s/es (for he/she/it)',
      negative: 'Subject + do not (don\'t) / does not (doesn\'t) + V1',
      question: 'Do / Does + Subject + V1?',
      subjectNote: 'Add -s or -es only for 3rd person singular (he, she, it). For I, you, we, they, use base verb.'
    },
    whenToUse: [
      {
        title: 'Habits and Repeated Actions',
        explanation: 'Things you do regularly or on a recurring basis.',
        example: 'Sophia drinks green tea every morning before work.'
      },
      {
        title: 'Universal Truths & Scientific Facts',
        explanation: 'Things that are universally true regardless of time.',
        example: 'Water boils at 100 degrees Celsius.'
      },
      {
        title: 'Permanent States & Feelings',
        explanation: 'Preferences, feelings, and unchanging conditions.',
        example: 'They live in London and speak three languages fluently.'
      },
      {
        title: 'Fixed Schedules & Timetables',
        explanation: 'Public schedules, plane flights, and train departures even if in the near future.',
        example: 'Our flight to Tokyo departs at 9:30 AM tomorrow.'
      }
    ],
    signalWords: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day', 'every week', 'on Mondays', 'seldom', 'hardly ever'],
    commonMistakes: [
      {
        incorrect: 'He don\'t like spicy food.',
        correct: 'He doesn\'t like spicy food.',
        explanation: 'With third-person singular (he, she, it), always use "does / doesn\'t", never "do / don\'t".'
      },
      {
        incorrect: 'She teach English at university.',
        correct: 'She teaches English at university.',
        explanation: 'Verbs ending in -ch, -sh, -ss, -x, or -o take "-es" in 3rd person singular.'
      },
      {
        incorrect: 'I am knowing the answer.',
        correct: 'I know the answer.',
        explanation: '"Know" is a stative verb describing a mental state; it is rarely used in continuous tenses.'
      }
    ],
    regularSample: {
      verb: 'play',
      positive: 'He plays tennis on Sundays.',
      negative: 'He does not play tennis on Sundays.',
      question: 'Does he play tennis on Sundays?'
    },
    irregularSample: {
      verb: 'go',
      positive: 'She goes to the library every afternoon.',
      negative: 'She does not go to the library.',
      question: 'Does she go to the library?'
    },
    spokenTip: 'In casual conversation, "do not" becomes "don\'t" and "does not" becomes "doesn\'t".',
    quickTip: 'Remember: He/She/It needs an "S" on the verb! Think: "Third person gets the S."'
  },

  // -------------------------------------------------------------
  // 2. PRESENT CONTINUOUS
  // -------------------------------------------------------------
  {
    id: 'present-continuous',
    name: 'Present Continuous Tense',
    group: 'present',
    aspect: 'continuous',
    summary: 'Used for actions happening right now at this exact moment, temporary situations, or definite future arrangements.',
    timelineDescription: 'Action is currently in progress around now and has not yet finished.',
    timelineGraphicType: 'continuous_now',
    formula: {
      positive: 'Subject + am / is / are + Verb-ing',
      negative: 'Subject + am / is / are + not + Verb-ing',
      question: 'Am / Is / Are + Subject + Verb-ing?',
      subjectNote: 'I -> am; He/She/It -> is; You/We/They -> are'
    },
    whenToUse: [
      {
        title: 'Actions Happening Right Now',
        explanation: 'Occurring at the exact moment of speaking.',
        example: 'Please be quiet, the baby is sleeping in the bedroom.'
      },
      {
        title: 'Temporary Situations',
        explanation: 'Situations that are true now but not necessarily permanent.',
        example: 'I am staying with my brother this week until my apartment is ready.'
      },
      {
        title: 'Changing & Developing Trends',
        explanation: 'Gradual changes or evolving situations.',
        example: 'Global temperatures are rising every decade.'
      },
      {
        title: 'Definite Planned Future Arrangements',
        explanation: 'Plans with a specific time and person already scheduled.',
        example: 'We are meeting the marketing director at 3 PM today.'
      }
    ],
    signalWords: ['now', 'right now', 'at the moment', 'currently', 'these days', 'look!', 'listen!', 'at present', 'this week'],
    commonMistakes: [
      {
        incorrect: 'I am wanting a cup of coffee.',
        correct: 'I want a cup of coffee.',
        explanation: 'Stative verbs of desire (want, need, prefer) are not used in continuous forms.'
      },
      {
        incorrect: 'They is working on the new presentation.',
        correct: 'They are working on the new presentation.',
        explanation: 'Use "are" with plural subjects (they, we, you).'
      }
    ],
    regularSample: {
      verb: 'study',
      positive: 'She is studying for her medical board exams.',
      negative: 'She is not studying right now.',
      question: 'Is she studying for her exams?'
    },
    irregularSample: {
      verb: 'write',
      positive: 'They are writing a comprehensive research report.',
      negative: 'They are not writing any reports today.',
      question: 'Are they writing the report?'
    },
    spokenTip: 'Native speakers frequently blend: "I\'m", "You\'re", "He\'s", "She\'s", "We\'re", "They\'re".',
    quickTip: 'Always combine the correct form of "be" (am/is/are) + "-ing". Never forget the "be" verb!'
  },

  // -------------------------------------------------------------
  // 3. PRESENT PERFECT
  // -------------------------------------------------------------
  {
    id: 'present-perfect',
    name: 'Present Perfect Tense',
    group: 'present',
    aspect: 'perfect',
    summary: 'Connects the past to the present: life experiences, past actions with present consequences, or uncompleted time periods.',
    timelineDescription: 'An action occurred at an unspecified time in the past, but its result or impact matters right now in the present.',
    timelineGraphicType: 'past_to_now',
    formula: {
      positive: 'Subject + have / has + Past Participle (V3)',
      negative: 'Subject + have / has + not (haven\'t / hasn\'t) + Past Participle (V3)',
      question: 'Have / Has + Subject + Past Participle (V3)?',
      subjectNote: 'Has: he/she/it; Have: I/you/we/they. Must use V3 (done, eaten, seen, worked).'
    },
    whenToUse: [
      {
        title: 'Life Experience (At Any Time)',
        explanation: 'Actions that have happened at some point in someone\'s lifetime without stating when.',
        example: 'Maya has visited over twenty different countries.'
      },
      {
        title: 'Past Action with a Present Result',
        explanation: 'The action happened in the past, but the outcome is felt right now.',
        example: 'I have lost my house keys, so I can\'t unlock the front door.'
      },
      {
        title: 'Action in an Unfinished Time Period',
        explanation: 'Time periods that are still ongoing (today, this week, this year).',
        example: 'He has drank three cups of coffee this morning (and it is still morning).'
      },
      {
        title: 'Recent News or Just-Completed Events',
        explanation: 'Events that just happened moments ago.',
        example: 'The plane has just landed safely on runway two.'
      }
    ],
    signalWords: ['already', 'yet', 'just', 'ever', 'never', 'so far', 'recently', 'lately', 'since', 'for', 'up to now'],
    commonMistakes: [
      {
        incorrect: 'I have seen that movie yesterday.',
        correct: 'I saw that movie yesterday.',
        explanation: 'Never use the Present Perfect with specific past time indicators (yesterday, last night, in 2018, two days ago). Use Simple Past instead.'
      },
      {
        incorrect: 'She has lived here since five years.',
        correct: 'She has lived here for five years.',
        explanation: 'Use "for" with periods/duration (5 years, 2 hours). Use "since" with specific starting points (since 2019, since Monday).'
      }
    ],
    regularSample: {
      verb: 'finish',
      positive: 'We have finished our quarterly audit.',
      negative: 'We haven\'t finished the audit yet.',
      question: 'Have you finished the audit?'
    },
    irregularSample: {
      verb: 'see',
      positive: 'He has seen the northern lights in Norway.',
      negative: 'He has not seen the northern lights.',
      question: 'Has he ever seen the northern lights?'
    },
    spokenTip: 'Contracted as "I\'ve", "He\'s" (caution: sounds like "he is"), "They\'ve". Note: "He\'s gone" = "He has gone".',
    quickTip: 'If there is a specific date or time in the past ("yesterday", "in 1999"), do NOT use Present Perfect!'
  },

  // -------------------------------------------------------------
  // 4. PRESENT PERFECT CONTINUOUS
  // -------------------------------------------------------------
  {
    id: 'present-perfect-continuous',
    name: 'Present Perfect Continuous Tense',
    group: 'present',
    aspect: 'perfect-continuous',
    summary: 'Emphasizes the duration of an activity that started in the past and is still continuing right now, or just ended with visible evidence.',
    timelineDescription: 'An ongoing stream of action starting in the past, running continuously up to the present moment.',
    timelineGraphicType: 'duration_to_present',
    formula: {
      positive: 'Subject + have / has + been + Verb-ing',
      negative: 'Subject + have / has + not + been + Verb-ing',
      question: 'Have / Has + Subject + been + Verb-ing?',
      subjectNote: 'Has been: he/she/it; Have been: I/you/we/they.'
    },
    whenToUse: [
      {
        title: 'Duration from Past into the Present',
        explanation: 'Focusing on how long an activity has been underway.',
        example: 'Dr. Carter has been working on this cancer cure for twelve years.'
      },
      {
        title: 'Action Just Stopped with Present Evidence',
        explanation: 'The action recently halted, but its physical effects are visible.',
        example: 'The ground is wet because it has been raining all afternoon.'
      },
      {
        title: 'Repeated Continuous Habits Recently',
        explanation: 'New ongoing habits developed lately.',
        example: 'I have been waking up early and running 5 km every day this month.'
      }
    ],
    signalWords: ['for', 'since', 'all day', 'all week', 'how long...?', 'lately', 'recently'],
    commonMistakes: [
      {
        incorrect: 'I am studying here for three years.',
        correct: 'I have been studying here for three years.',
        explanation: 'Do not use Present Continuous for actions that started in the past and continue into the present. Use Present Perfect Continuous.'
      },
      {
        incorrect: 'She has been knowing him since childhood.',
        correct: 'She has known him since childhood.',
        explanation: 'Stative verbs like "know", "believe", "own" cannot take continuous forms; use Present Perfect instead.'
      }
    ],
    regularSample: {
      verb: 'rain',
      positive: 'It has been raining non-stop since dawn.',
      negative: 'It has not been raining today.',
      question: 'Has it been raining outside?'
    },
    irregularSample: {
      verb: 'drive',
      positive: 'He has been driving for six hours straight.',
      negative: 'He hasn\'t been driving long.',
      question: 'How long has he been driving?'
    },
    spokenTip: '"Have been" is often pronounced swiftly as /hæv bɪn/ or /əv bɪn/.',
    quickTip: 'Ask yourself: Is the duration important? If emphasizing "how long" something has been going on, use this tense!'
  },

  // -------------------------------------------------------------
  // 5. SIMPLE PAST
  // -------------------------------------------------------------
  {
    id: 'past-simple',
    name: 'Simple Past Tense',
    group: 'past',
    aspect: 'simple',
    summary: 'Used for actions that happened and were completely finished at a definite, specific time in the past.',
    timelineDescription: 'A single point or completed event in the past, completely disconnected from the present.',
    timelineGraphicType: 'single_point',
    formula: {
      positive: 'Subject + V2 (Past form of verb)',
      negative: 'Subject + did not (didn\'t) + V1 (base form)',
      question: 'Did + Subject + V1 (base form)?',
      subjectNote: 'In negative and question forms, the auxiliary "did" takes the past tense, so the main verb returns to V1 (base form)!'
    },
    whenToUse: [
      {
        title: 'Completed Past Action with Specific Time',
        explanation: 'Actions that finished at an identified time.',
        example: 'Thomas Edison invented the practical electric incandescent light bulb in 1879.'
      },
      {
        title: 'Series of Completed Actions in a Story',
        explanation: 'Chronological events that took place one after another.',
        example: 'He opened the door, turned on the lights, and dropped his backpack on the sofa.'
      },
      {
        title: 'Past Habits and Ancient Routines',
        explanation: 'Habits that no longer happen today.',
        example: 'When we were children, we rode our bicycles across the entire neighborhood.'
      }
    ],
    signalWords: ['yesterday', 'last night', 'last week', 'last year', 'in 2010', 'two days ago', 'when I was...', 'then', 'in the past'],
    commonMistakes: [
      {
        incorrect: 'Did you went to the supermarket?',
        correct: 'Did you go to the supermarket?',
        explanation: 'After "did" or "didn\'t", always use the base form (V1), NEVER the past tense (went -> go).'
      },
      {
        incorrect: 'She didn\'t called me yesterday.',
        correct: 'She didn\'t call me yesterday.',
        explanation: '"Didn\'t" already carries the past tense. Do not add "-ed" to the main verb.'
      }
    ],
    regularSample: {
      verb: 'watch',
      positive: 'They watched the documentary last evening.',
      negative: 'They didn\'t watch the documentary.',
      question: 'Did they watch the documentary?'
    },
    irregularSample: {
      verb: 'buy',
      positive: 'She bought a new laptop two days ago.',
      negative: 'She didn\'t buy a new laptop.',
      question: 'Did she buy a new laptop?'
    },
    spokenTip: 'Pronounce "-ed" correctly: /t/ after voiceless sounds (watched), /d/ after voiced (played), /ɪd/ after t or d (wanted, needed).',
    quickTip: 'Gold Rule: "Did" steals the past tense! Whenever "did" appears, the main verb stays in its simple base form.'
  },

  // -------------------------------------------------------------
  // 6. PAST CONTINUOUS
  // -------------------------------------------------------------
  {
    id: 'past-continuous',
    name: 'Past Continuous Tense',
    group: 'past',
    aspect: 'continuous',
    summary: 'Used for actions that were ongoing at a specific moment in the past, or when an ongoing past action was interrupted by another event.',
    timelineDescription: 'An action was in progress over a past duration when another instantaneous past event occurred.',
    timelineGraphicType: 'past_continuous',
    formula: {
      positive: 'Subject + was / were + Verb-ing',
      negative: 'Subject + was / were + not (wasn\'t / weren\'t) + Verb-ing',
      question: 'Was / Were + Subject + Verb-ing?',
      subjectNote: 'Was: I / he / she / it; Were: you / we / they.'
    },
    whenToUse: [
      {
        title: 'Action in Progress at a Specific Past Moment',
        explanation: 'What someone was actively doing at a precise time.',
        example: 'At 8:00 PM yesterday, I was studying organic chemistry in my room.'
      },
      {
        title: 'Interrupted Past Action',
        explanation: 'A longer ongoing action was interrupted by a shorter action (usually introduced by "when").',
        example: 'He was cooking dinner when the fire alarm suddenly went off.'
      },
      {
        title: 'Two Parallel Past Actions Happening Simultaneously',
        explanation: 'Two actions occurring at the exact same time (often linked with "while").',
        example: 'While Lucas was reading, Emma was practicing the piano.'
      }
    ],
    signalWords: ['at 8 PM yesterday', 'while', 'when', 'as', 'all night', 'during that time'],
    commonMistakes: [
      {
        incorrect: 'I was walk in the park when it started raining.',
        correct: 'I was walking in the park when it started raining.',
        explanation: 'Past continuous requires the -ing participle with "was/were".'
      },
      {
        incorrect: 'When the phone rang, I cooked.',
        correct: 'When the phone rang, I was cooking.',
        explanation: 'The background continuous activity needs "was cooking", while the interrupting event is in Simple Past ("rang").'
      }
    ],
    regularSample: {
      verb: 'cook',
      positive: 'She was cooking dinner when guests arrived.',
      negative: 'She wasn\'t cooking at that hour.',
      question: 'Was she cooking dinner?'
    },
    irregularSample: {
      verb: 'sleep',
      positive: 'They were sleeping when the thunderstorm hit.',
      negative: 'They were not sleeping peacefully.',
      question: 'Were they sleeping at midnight?'
    },
    spokenTip: 'Watch out: "wasn\'t" sounds like /wɒznt/, "weren\'t" sounds like /wɜːnt/.',
    quickTip: 'Formula pattern: "While + Past Continuous (was/were -ing), Simple Past (interruption) happened."'
  },

  // -------------------------------------------------------------
  // 7. PAST PERFECT
  // -------------------------------------------------------------
  {
    id: 'past-perfect',
    name: 'Past Perfect Tense',
    group: 'past',
    aspect: 'perfect',
    summary: 'The "past before the past." Used to clarify which of two past actions happened first.',
    timelineDescription: 'An action completed before another past event or before a specific moment in the past.',
    timelineGraphicType: 'past_before_past',
    formula: {
      positive: 'Subject + had + Past Participle (V3)',
      negative: 'Subject + had not (hadn\'t) + Past Participle (V3)',
      question: 'Had + Subject + Past Participle (V3)?',
      subjectNote: '"Had" is used for ALL subjects (I, you, he, she, it, we, they).'
    },
    whenToUse: [
      {
        title: 'Action Completed Before Another Past Action',
        explanation: 'Clarifies sequence when two things occurred in the past.',
        example: 'When the firefighters arrived, the neighbors had already extinguished the flames.'
      },
      {
        title: 'State or Condition Prior to a Past Time',
        explanation: 'Something that was true before a certain historical deadline.',
        example: 'By 1920, many European nations had granted voting rights to women.'
      },
      {
        title: 'Third Conditional (Unreal Past Situations)',
        explanation: 'Hypothetical past scenarios.',
        example: 'If I had studied harder, I would have passed the bar exam.'
      }
    ],
    signalWords: ['before', 'after', 'already', 'by the time', 'just', 'never', 'until that day', 'as soon as'],
    commonMistakes: [
      {
        incorrect: 'When I reached the station, the train left.',
        correct: 'When I reached the station, the train had left.',
        explanation: 'Because the train left before you arrived, the earlier action must use Past Perfect ("had left").'
      },
      {
        incorrect: 'She had ate breakfast before heading out.',
        correct: 'She had eaten breakfast before heading out.',
        explanation: 'Always use the Past Participle V3 ("eaten"), never the past simple V2 ("ate").'
      }
    ],
    regularSample: {
      verb: 'lock',
      positive: 'He realized he had locked his keys inside.',
      negative: 'He had not locked the back door.',
      question: 'Had he locked the door before leaving?'
    },
    irregularSample: {
      verb: 'leave',
      positive: 'The train had left by the time we reached the platform.',
      negative: 'The train hadn\'t left yet.',
      question: 'Had the train left already?'
    },
    spokenTip: 'Contracted as "I\'d", "He\'d", "We\'d". Don\'t confuse "I\'d" (I had) with "I\'d" (I would). Check the verb: "had + V3" vs "would + V1".',
    quickTip: 'Think of Past Perfect as Time Travel to "Event 1", while Simple Past is "Event 2".'
  },

  // -------------------------------------------------------------
  // 8. PAST PERFECT CONTINUOUS
  // -------------------------------------------------------------
  {
    id: 'past-perfect-continuous',
    name: 'Past Perfect Continuous Tense',
    group: 'past',
    aspect: 'perfect-continuous',
    summary: 'Emphasizes the ongoing duration of an action that was in progress up until another moment or event in the past.',
    timelineDescription: 'A continuous action was taking place over a period in the past until another past event interrupted or followed it.',
    timelineGraphicType: 'duration_in_past',
    formula: {
      positive: 'Subject + had + been + Verb-ing',
      negative: 'Subject + had not (hadn\'t) + been + Verb-ing',
      question: 'Had + Subject + been + Verb-ing?',
      subjectNote: '"Had been" is universal across all personal pronouns.'
    },
    whenToUse: [
      {
        title: 'Duration of an Action Leading Up to a Past Point',
        explanation: 'Emphasizing how long an ongoing process took before another past milestone.',
        example: 'They had been hiking for seven hours before they finally discovered the summit cabin.'
      },
      {
        title: 'Cause of a Past Result or Condition',
        explanation: 'Explaining why someone or something looked or felt a certain way in the past.',
        example: 'His eyes were red and weary because he had been staring at code all night.'
      }
    ],
    signalWords: ['for hours', 'since morning', 'before', 'all day', 'how long... had'],
    commonMistakes: [
      {
        incorrect: 'She was waiting for two hours before the bus arrived.',
        correct: 'She had been waiting for two hours before the bus arrived.',
        explanation: 'When mentioning duration up to a past event ("for two hours before..."), use Past Perfect Continuous.'
      }
    ],
    regularSample: {
      verb: 'wait',
      positive: 'We had been waiting in line for two hours before gates opened.',
      negative: 'We hadn\'t been waiting very long.',
      question: 'Had you been waiting long before the concert started?'
    },
    irregularSample: {
      verb: 'run',
      positive: 'He was exhausted because he had been running a marathon.',
      negative: 'He hadn\'t been running outside.',
      question: 'Had he been running in the rain?'
    },
    spokenTip: '"Had been" flows smoothly as /hæd bɪn/ with slight reduction on "had".',
    quickTip: 'Look for: Duration ("for 3 hours") + Past Event ("before she called").'
  },

  // -------------------------------------------------------------
  // 9. SIMPLE FUTURE
  // -------------------------------------------------------------
  {
    id: 'future-simple',
    name: 'Simple Future Tense',
    group: 'future',
    aspect: 'simple',
    summary: 'Used for spontaneous decisions, predictions without present evidence, promises, and future facts.',
    timelineDescription: 'An action that will take place at a point in the future.',
    timelineGraphicType: 'single_point',
    formula: {
      positive: 'Subject + will + V1 (base form)',
      negative: 'Subject + will not (won\'t) + V1 (base form)',
      question: 'Will + Subject + V1 (base form)?',
      subjectNote: 'Can also be expressed with "be going to + V1" for intentions and plans made prior to speaking.'
    },
    whenToUse: [
      {
        title: 'Instant / Spontaneous Decisions',
        explanation: 'Decisions made right now at the moment of speaking.',
        example: 'The phone is ringing. I will answer it!'
      },
      {
        title: 'Predictions Based on Opinion',
        explanation: 'Forecasting what you think or believe will occur.',
        example: 'Scientists believe artificial intelligence will revolutionize medicine by 2035.'
      },
      {
        title: 'Promises, Offers, and Refusals',
        explanation: 'Making commitments or agreements to someone.',
        example: 'I promise I will never reveal your secret to anyone.'
      },
      {
        title: 'Future Facts',
        explanation: 'Unavoidable truths about tomorrow.',
        example: 'The sun will rise at 6:12 AM tomorrow morning.'
      }
    ],
    signalWords: ['tomorrow', 'next week', 'next month', 'in the future', 'probably', 'perhaps', 'I think', 'I promise', 'soon'],
    commonMistakes: [
      {
        incorrect: 'I will go to call you as soon as I will arrive.',
        correct: 'I will call you as soon as I arrive.',
        explanation: 'In time clauses (after when, as soon as, before, until, if), use Simple Present, never "will".'
      },
      {
        incorrect: 'I won\'t to accept this offer.',
        correct: 'I won\'t accept this offer.',
        explanation: 'Modal "will" is followed directly by the bare infinitive (no "to").'
      }
    ],
    regularSample: {
      verb: 'help',
      positive: 'I will help you carry those heavy boxes.',
      negative: 'I will not (won\'t) abandon this mission.',
      question: 'Will you help me with this project?'
    },
    irregularSample: {
      verb: 'make',
      positive: 'We will make a decision before Friday.',
      negative: 'We won\'t make any hasty commitments.',
      question: 'Will you make the announcement tomorrow?'
    },
    spokenTip: 'Negative contraction "won\'t" rhymes with "don\'t" /woʊnt/. Be careful not to confuse with "want" /wɒnt/.',
    quickTip: '"Will" = instant decision or prediction. "Going to" = plan already decided or visible evidence.'
  },

  // -------------------------------------------------------------
  // 10. FUTURE CONTINUOUS
  // -------------------------------------------------------------
  {
    id: 'future-continuous',
    name: 'Future Continuous Tense',
    group: 'future',
    aspect: 'continuous',
    summary: 'Used for actions that will be actively in progress at a specific time in the future.',
    timelineDescription: 'An action ongoing over a future interval or at a designated future instant.',
    timelineGraphicType: 'future_continuous',
    formula: {
      positive: 'Subject + will be + Verb-ing',
      negative: 'Subject + will not be (won\'t be) + Verb-ing',
      question: 'Will + Subject + be + Verb-ing?',
      subjectNote: '"Will be" remains unchanged across all subject pronouns.'
    },
    whenToUse: [
      {
        title: 'Action in Progress at a Future Point',
        explanation: 'What you will actively be in the middle of doing at a specific future hour.',
        example: 'This time tomorrow, I will be flying over the Pacific Ocean on my way to Sydney.'
      },
      {
        title: 'Polite Inquiries About Someone\'s Schedule',
        explanation: 'Asking about future plans without exerting pressure.',
        example: 'Will you be using the printer this afternoon, or may I borrow it?'
      },
      {
        title: 'Events Expected in the Normal Course of Things',
        explanation: 'Routine future occurrences that happen naturally.',
        example: 'I will be seeing Professor Williams at tomorrow\'s faculty seminar anyway.'
      }
    ],
    signalWords: ['this time tomorrow', 'at 10 AM on Monday', 'in five years', 'during the weekend'],
    commonMistakes: [
      {
        incorrect: 'At 3 PM tomorrow, I will work.',
        correct: 'At 3 PM tomorrow, I will be working.',
        explanation: 'To indicate that an action is ongoing at that specific moment in the future, use the Future Continuous.'
      }
    ],
    regularSample: {
      verb: 'travel',
      positive: 'They will be traveling across Europe next month.',
      negative: 'They won\'t be traveling during the rainy season.',
      question: 'Will you be traveling alone?'
    },
    irregularSample: {
      verb: 'sleep',
      positive: 'Please do not call at midnight; I will be sleeping.',
      negative: 'I won\'t be sleeping at that hour.',
      question: 'Will you be sleeping when I call?'
    },
    spokenTip: '"I\'ll be working" rolls quickly off the tongue. Make sure the "be" is distinct.',
    quickTip: 'Think: "If you photograph me at that future moment, what will I be doing?"'
  },

  // -------------------------------------------------------------
  // 11. FUTURE PERFECT
  // -------------------------------------------------------------
  {
    id: 'future-perfect',
    name: 'Future Perfect Tense',
    group: 'future',
    aspect: 'perfect',
    summary: 'Used for actions that will be completed before a designated deadline or milestone in the future.',
    timelineDescription: 'Looking back from a future point in time at an action completed prior to that deadline.',
    timelineGraphicType: 'completed_before_future',
    formula: {
      positive: 'Subject + will have + Past Participle (V3)',
      negative: 'Subject + will not have (won\'t have) + Past Participle (V3)',
      question: 'Will + Subject + have + Past Participle (V3)?',
      subjectNote: 'Always "will have" (never "will has"), followed by V3.'
    },
    whenToUse: [
      {
        title: 'Completion Before a Future Deadline',
        explanation: 'Accomplishing a goal before a certain time or event in the future.',
        example: 'By the time you wake up tomorrow, I will have finished writing the entire manuscript.'
      },
      {
        title: 'Looking Back From Future Perspective',
        explanation: 'Projecting forward and viewing an event as having already concluded.',
        example: 'By 2030, our solar installation will have generated over 50,000 kilowatt-hours of clean power.'
      }
    ],
    signalWords: ['by tomorrow', 'by next week', 'by the year 2030', 'by the time...', 'in two months\' time', 'before'],
    commonMistakes: [
      {
        incorrect: 'By next December, she will has graduated.',
        correct: 'By next December, she will have graduated.',
        explanation: 'Modal verbs like "will" are always followed by the base infinitive "have", never "has".'
      },
      {
        incorrect: 'By 5 PM, I will finish the task.',
        correct: 'By 5 PM, I will have finished the task.',
        explanation: 'The preposition "by" sets a deadline, requiring the Future Perfect ("will have finished").'
      }
    ],
    regularSample: {
      verb: 'graduate',
      positive: 'By next June, she will have graduated with honors.',
      negative: 'She won\'t have graduated by then.',
      question: 'Will she have graduated before July?'
    },
    irregularSample: {
      verb: 'write',
      positive: 'By midnight, the author will have written ten chapters.',
      negative: 'He won\'t have written the conclusion yet.',
      question: 'Will they have written the final agreement by Friday?'
    },
    spokenTip: 'Often contracted as "will\'ve" /wɪləv/ or "won\'t\'ve".',
    quickTip: 'Key keyword alert: Whenever you see "By + future time/event", reach for Future Perfect ("will have + V3")!'
  },

  // -------------------------------------------------------------
  // 12. FUTURE PERFECT CONTINUOUS
  // -------------------------------------------------------------
  {
    id: 'future-perfect-continuous',
    name: 'Future Perfect Continuous Tense',
    group: 'future',
    aspect: 'perfect-continuous',
    summary: 'Emphasizes the continuous duration of an action up to a specific milestone in the future.',
    timelineDescription: 'Continuous progress leading right up to a designated future benchmark.',
    timelineGraphicType: 'duration_in_future',
    formula: {
      positive: 'Subject + will have been + Verb-ing',
      negative: 'Subject + will not have been (won\'t have been) + Verb-ing',
      question: 'Will + Subject + have been + Verb-ing?',
      subjectNote: '"Will have been" is identical for all subjects.'
    },
    whenToUse: [
      {
        title: 'Duration Leading Up to a Future Milestone',
        explanation: 'Stating how long an ongoing effort will have accumulated by a certain date.',
        example: 'In November, Professor Jenkins will have been teaching astrophysics at MIT for exactly forty years.'
      },
      {
        title: 'Projected Ongoing Activity with Future Benchmark',
        explanation: 'Anticipating exhaustion or state caused by continuous future work.',
        example: 'When she arrives home, she will have been traveling for over thirty hours straight.'
      }
    ],
    signalWords: ['for... by next...', 'by next year... for 10 years', 'by the time...', 'all day long by then'],
    commonMistakes: [
      {
        incorrect: 'Next year, they will be living here for twenty years.',
        correct: 'Next year, they will have been living here for twenty years.',
        explanation: 'Because an accumulated duration ("for twenty years") is measured up to a future point ("Next year"), use Future Perfect Continuous.'
      }
    ],
    regularSample: {
      verb: 'work',
      positive: 'By 2028, I will have been working in software engineering for a decade.',
      negative: 'He won\'t have been working there that long.',
      question: 'Will you have been working here for ten years next month?'
    },
    irregularSample: {
      verb: 'drive',
      positive: 'By dusk, we will have been driving for eight hours.',
      negative: 'We won\'t have been driving that entire time.',
      question: 'How long will you have been driving by sunset?'
    },
    spokenTip: 'Pronounce the chain smoothly: /wɪl həv bɪn/ with natural stress on the main verb participle.',
    quickTip: 'Combo check: Looks for BOTH "by [future date]" AND "for [duration of time]".'
  }
];
