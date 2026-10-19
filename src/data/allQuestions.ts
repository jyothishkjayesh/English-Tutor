import { PracticeQuestion } from '../types';

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // =============================================================
  // PRESENT TENSES
  // =============================================================

  // --- Present Simple ---
  {
    id: 'ps-1',
    tenseId: 'present-simple',
    type: 'mcq',
    difficulty: 'beginner',
    prompt: 'Choose the correct form of the verb to complete the sentence:',
    sentenceWithBlank: 'Sophia ______ (teach) biology at the local high school.',
    options: ['teaches', 'teach', 'is teaching', 'taught'],
    correctAnswer: 'teaches',
    explanation: 'For third-person singular subjects (Sophia = she) in the Simple Present, we add "-es" to verbs ending in "-ch".',
    signalWordDetected: 'Regular profession / permanent state',
    ruleReference: 'Subject + V1 (s/es) for 3rd person singular'
  },
  {
    id: 'ps-2',
    tenseId: 'present-simple',
    type: 'mcq',
    difficulty: 'beginner',
    prompt: 'Choose the correct negative sentence:',
    sentenceWithBlank: 'He ______ coffee in the evening.',
    options: ['doesn\'t drink', 'don\'t drink', 'doesn\'t drinks', 'is not drink'],
    correctAnswer: 'doesn\'t drink',
    explanation: 'With 3rd person singular (he), we use "does not / doesn\'t" followed by the base form of the verb (drink). "doesn\'t drinks" is a common error!',
    ruleReference: 'Subject + does not + V1 (base form)'
  },
  {
    id: 'ps-3',
    tenseId: 'present-simple',
    type: 'fill_in_the_blank',
    difficulty: 'intermediate',
    prompt: 'Type or choose the correct conjugated verb for the timetable schedule:',
    sentenceWithBlank: 'The express train to Edinburgh ______ (depart) at 7:15 PM tomorrow.',
    baseVerb: 'depart',
    options: ['departs', 'will depart', 'is departing', 'departed'],
    correctAnswer: 'departs',
    explanation: 'We use the Simple Present for fixed timetables, schedules, and public transport departures, even when referring to future events.',
    signalWordDetected: 'at 7:15 PM tomorrow (scheduled timetable)',
    ruleReference: 'Simple Present for Timetables'
  },
  {
    id: 'ps-4',
    tenseId: 'present-simple',
    type: 'spot_error',
    difficulty: 'intermediate',
    prompt: 'Identify the error in this sentence: "Why does they always arrive late to the weekly meeting?"',
    options: ['"does" should be "do"', '"arrive" should be "arrives"', '"weekly" should be "week"', 'There is no error'],
    correctAnswer: '"does" should be "do"',
    explanation: 'The subject is plural ("they"), which takes the auxiliary "do" in questions: "Why do they always arrive late...?"',
    ruleReference: 'Do/Does Subject Agreement'
  },

  // --- Present Continuous ---
  {
    id: 'pc-1',
    tenseId: 'present-continuous',
    type: 'mcq',
    difficulty: 'beginner',
    prompt: 'Complete the sentence with the action taking place right now:',
    sentenceWithBlank: 'Look! The chef ______ (prepare) a special pasta sauce.',
    options: ['is preparing', 'prepares', 'are preparing', 'prepared'],
    correctAnswer: 'is preparing',
    explanation: '"Look!" indicates that the action is unfolding right at this exact moment in front of the speaker. Subject "the chef" (he/she) requires "is + preparing".',
    signalWordDetected: 'Look!',
    ruleReference: 'Subject + is/am/are + V-ing'
  },
  {
    id: 'pc-2',
    tenseId: 'present-continuous',
    type: 'spot_error',
    difficulty: 'intermediate',
    prompt: 'Which sentence is grammatically INCORRECT?',
    options: [
      'I am knowing the answer to this complex riddle.',
      'She is studying biomedical science this term.',
      'They are flying to Madrid this evening.',
      'Why is the printer making that strange noise?'
    ],
    correctAnswer: 'I am knowing the answer to this complex riddle.',
    explanation: '"Know" is a stative verb expressing a cognitive state, which cannot normally be used in the continuous form. The correct sentence is "I know the answer."',
    ruleReference: 'Stative Verbs Cannot Take -ing'
  },
  {
    id: 'pc-3',
    tenseId: 'present-continuous',
    type: 'fill_in_the_blank',
    difficulty: 'intermediate',
    prompt: 'Fill in the blank with the correct form:',
    sentenceWithBlank: 'We ______ (stay) with our cousins this week while our roof is repaired.',
    baseVerb: 'stay',
    options: ['are staying', 'stay', 'have stayed', 'were staying'],
    correctAnswer: 'are staying',
    explanation: 'The temporary situation ("this week while our roof is repaired") calls for the Present Continuous ("are staying").',
    signalWordDetected: 'this week (temporary situation)',
    ruleReference: 'Temporary Situations'
  },

  // --- Present Perfect ---
  {
    id: 'pp-1',
    tenseId: 'present-perfect',
    type: 'mcq',
    difficulty: 'beginner',
    prompt: 'Choose the correct form to show an unfinished life experience:',
    sentenceWithBlank: 'Lucas ______ (never / see) the ocean before today.',
    options: ['has never seen', 'have never seen', 'never saw', 'is never seeing'],
    correctAnswer: 'has never seen',
    explanation: 'For life experiences up to the present with 3rd person singular (Lucas), we use "has + never + seen (V3)".',
    signalWordDetected: 'never / before today',
    ruleReference: 'Subject + has/have + V3'
  },
  {
    id: 'pp-2',
    tenseId: 'present-perfect',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Which word correctly completes the sentence?',
    sentenceWithBlank: 'She has been a resident of Seattle ______ October 2021.',
    options: ['since', 'for', 'from', 'during'],
    correctAnswer: 'since',
    explanation: '"Since" is used with a specific starting point in time (October 2021). "For" is used with a period/duration (e.g., for three years).',
    signalWordDetected: 'October 2021 (specific point)',
    ruleReference: 'Since vs. For'
  },
  {
    id: 'pp-3',
    tenseId: 'present-perfect',
    type: 'spot_error',
    difficulty: 'advanced',
    prompt: 'Find the mistake in this sentence: "I have visited the Louvre Museum yesterday afternoon."',
    options: [
      'Change "have visited" to "visited"',
      'Change "yesterday" to "since yesterday"',
      'Change "visited" to "visiting"',
      'There is no mistake'
    ],
    correctAnswer: 'Change "have visited" to "visited"',
    explanation: 'Never use the Present Perfect with specific completed past time expressions like "yesterday", "last week", or "in 2015". Use Simple Past ("I visited") instead.',
    signalWordDetected: 'yesterday afternoon (specific past time)',
    ruleReference: 'Present Perfect vs. Simple Past'
  },

  // --- Present Perfect Continuous ---
  {
    id: 'ppc-1',
    tenseId: 'present-perfect-continuous',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Choose the best tense to emphasize the uninterrupted duration:',
    sentenceWithBlank: 'They are exhausted because they ______ (remodel) the kitchen all morning.',
    options: ['have been remodeling', 'are remodeling', 'remodeled', 'were remodeling'],
    correctAnswer: 'have been remodeling',
    explanation: 'The sentence emphasizes an ongoing activity ("all morning") that caused a present result ("they are exhausted"). This requires the Present Perfect Continuous.',
    signalWordDetected: 'all morning (duration with present result)',
    ruleReference: 'Subject + have/has + been + V-ing'
  },
  {
    id: 'ppc-2',
    tenseId: 'present-perfect-continuous',
    type: 'fill_in_the_blank',
    difficulty: 'intermediate',
    prompt: 'Complete the sentence:',
    sentenceWithBlank: 'How long ______ you ______ (wait) for the express bus?',
    baseVerb: 'wait',
    options: ['have / been waiting', 'are / waiting', 'did / wait', 'had / waited'],
    correctAnswer: 'have / been waiting',
    explanation: '"How long" asking about an ongoing action starting in the past and continuing now uses "Have you been waiting...?"',
    signalWordDetected: 'How long',
    ruleReference: 'Duration questions'
  },

  // =============================================================
  // PAST TENSES
  // =============================================================

  // --- Simple Past ---
  {
    id: 'past-s-1',
    tenseId: 'past-simple',
    type: 'mcq',
    difficulty: 'beginner',
    prompt: 'Choose the correct past form:',
    sentenceWithBlank: 'Yesterday, the team ______ (win) the regional football cup.',
    options: ['won', 'winned', 'wins', 'has won'],
    correctAnswer: 'won',
    explanation: '"Win" is an irregular verb. Its V2 past simple form is "won", not "winned". "Yesterday" specifies a closed past time.',
    signalWordDetected: 'Yesterday',
    ruleReference: 'Irregular Past Simple V2'
  },
  {
    id: 'past-s-2',
    tenseId: 'past-simple',
    type: 'spot_error',
    difficulty: 'intermediate',
    prompt: 'Spot the error: "Did you saw the total solar eclipse last week?"',
    options: [
      '"saw" should be "see"',
      '"Did" should be "Do"',
      '"last week" should be "since last week"',
      'No error'
    ],
    correctAnswer: '"saw" should be "see"',
    explanation: 'In past simple questions with the auxiliary "Did", the main verb MUST remain in the base form (V1). "Did you see", never "Did you saw".',
    ruleReference: 'Did + Subject + V1 (base form)'
  },
  {
    id: 'past-s-3',
    tenseId: 'past-simple',
    type: 'fill_in_the_blank',
    difficulty: 'beginner',
    prompt: 'Complete the sentence in the negative past form:',
    sentenceWithBlank: 'We ______ (not / go) to the beach because of the stormy weather.',
    baseVerb: 'not go',
    options: ['didn\'t go', 'didn\'t went', 'don\'t go', 'wasn\'t go'],
    correctAnswer: 'didn\'t go',
    explanation: 'Negative simple past uses "didn\'t" + base form: "didn\'t go".',
    ruleReference: 'didn\'t + V1'
  },

  // --- Past Continuous ---
  {
    id: 'past-c-1',
    tenseId: 'past-continuous',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Choose the correct form for the background action:',
    sentenceWithBlank: 'I ______ (walk) through the forest when I suddenly spotted a rare deer.',
    options: ['was walking', 'walked', 'were walking', 'am walking'],
    correctAnswer: 'was walking',
    explanation: 'The longer ongoing background action ("was walking") was interrupted by a sudden short event ("spotted"). Subject "I" takes "was".',
    signalWordDetected: 'when (interruption in past)',
    ruleReference: 'Interrupted past action'
  },
  {
    id: 'past-c-2',
    tenseId: 'past-continuous',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Choose the correct combination for two simultaneous past actions:',
    sentenceWithBlank: 'While Leo ______ (read), his sister ______ (paint) a portrait.',
    options: [
      'was reading / was painting',
      'read / painted',
      'was reading / painted',
      'is reading / is painting'
    ],
    correctAnswer: 'was reading / was painting',
    explanation: 'Two ongoing actions occurring at the exact same moment in the past linked with "While" both take the Past Continuous: "was reading / was painting".',
    signalWordDetected: 'While (parallel past actions)',
    ruleReference: 'Parallel past activities'
  },

  // --- Past Perfect ---
  {
    id: 'past-p-1',
    tenseId: 'past-perfect',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Choose the action that occurred earlier in the past:',
    sentenceWithBlank: 'By the time the rescue team arrived, the hikers ______ (find) shelter in a cave.',
    options: ['had found', 'found', 'have found', 'were finding'],
    correctAnswer: 'had found',
    explanation: 'The hikers found shelter BEFORE the rescue team arrived. The earlier past event requires the Past Perfect ("had found").',
    signalWordDetected: 'By the time (past milestone)',
    ruleReference: 'Event 1 (Past Perfect) before Event 2 (Past Simple)'
  },
  {
    id: 'past-p-2',
    tenseId: 'past-perfect',
    type: 'spot_error',
    difficulty: 'advanced',
    prompt: 'Identify the error: "She couldn\'t enter the building because she had forgot her security badge at home."',
    options: [
      '"had forgot" should be "had forgotten"',
      '"couldn\'t" should be "can\'t"',
      '"enter" should be "entered"',
      'No error'
    ],
    correctAnswer: '"had forgot" should be "had forgotten"',
    explanation: 'Past Perfect requires the Past Participle (V3). For "forget", V2 is "forgot", but V3 is "forgotten": "had forgotten".',
    ruleReference: 'had + V3 (Past Participle)'
  },

  // --- Past Perfect Continuous ---
  {
    id: 'past-pc-1',
    tenseId: 'past-perfect-continuous',
    type: 'mcq',
    difficulty: 'advanced',
    prompt: 'Choose the tense that best shows duration before a past event:',
    sentenceWithBlank: 'The pianist ______ (practice) for four hours before the recital finally began.',
    options: [
      'had been practicing',
      'was practicing',
      'has been practicing',
      'practiced'
    ],
    correctAnswer: 'had been practicing',
    explanation: 'The ongoing action lasted for a duration ("for four hours") leading right up to another past event ("before the recital began"). This is the classic use of Past Perfect Continuous.',
    signalWordDetected: 'for four hours before... (duration before past event)',
    ruleReference: 'Subject + had + been + V-ing'
  },

  // =============================================================
  // FUTURE TENSES
  // =============================================================

  // --- Simple Future ---
  {
    id: 'fut-s-1',
    tenseId: 'future-simple',
    type: 'mcq',
    difficulty: 'beginner',
    prompt: 'Choose the correct spontaneous decision in response to this situation:',
    sentenceWithBlank: '"The phone is ringing!" — "Don\'t worry, I ______ (answer) it."',
    options: ['will answer', 'am answering', 'answered', 'will answering'],
    correctAnswer: 'will answer',
    explanation: 'For instant, on-the-spot decisions made at the moment of speaking, we use Simple Future with "will + V1".',
    ruleReference: 'Spontaneous decisions with "will"'
  },
  {
    id: 'fut-s-2',
    tenseId: 'future-simple',
    type: 'spot_error',
    difficulty: 'intermediate',
    prompt: 'Spot the grammatical error: "When she will arrive at the office, we will start the quarterly review."',
    options: [
      '"will arrive" should be "arrives"',
      '"will start" should be "start"',
      '"quarterly" should be "quarter"',
      'No error'
    ],
    correctAnswer: '"will arrive" should be "arrives"',
    explanation: 'In time clauses starting with "when", "as soon as", "before", or "after", we must use the Simple Present ("arrives"), not "will arrive".',
    ruleReference: 'Time clauses do not use "will"'
  },

  // --- Future Continuous ---
  {
    id: 'fut-c-1',
    tenseId: 'future-continuous',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Choose the form for an action in progress at a specific future hour:',
    sentenceWithBlank: 'At 10:00 AM tomorrow, our team ______ (present) the new product pitch to investors.',
    options: [
      'will be presenting',
      'will present',
      'presents',
      'is present'
    ],
    correctAnswer: 'will be presenting',
    explanation: 'At that specific exact time tomorrow ("At 10:00 AM"), the presentation will be ongoing and in progress. Use Future Continuous ("will be presenting").',
    signalWordDetected: 'At 10:00 AM tomorrow',
    ruleReference: 'will be + V-ing'
  },

  // --- Future Perfect ---
  {
    id: 'fut-p-1',
    tenseId: 'future-perfect',
    type: 'mcq',
    difficulty: 'intermediate',
    prompt: 'Choose the correct form showing completion before a future deadline:',
    sentenceWithBlank: 'By next Friday, the contractors ______ (complete) the entire bridge renovation.',
    options: [
      'will have completed',
      'will complete',
      'will be completing',
      'have completed'
    ],
    correctAnswer: 'will have completed',
    explanation: '"By next Friday" introduces a future deadline by which the renovation will be done. This requires the Future Perfect ("will have completed").',
    signalWordDetected: 'By next Friday',
    ruleReference: 'will have + V3'
  },
  {
    id: 'fut-p-2',
    tenseId: 'future-perfect',
    type: 'spot_error',
    difficulty: 'advanced',
    prompt: 'Find the mistake: "By the end of this semester, Oliver will has passed all his electrical engineering exams."',
    options: [
      '"will has passed" should be "will have passed"',
      '"this" should be "these"',
      '"passed" should be "pass"',
      'No error'
    ],
    correctAnswer: '"will has passed" should be "will have passed"',
    explanation: 'After the modal auxiliary "will", the bare infinitive "have" is always required. "will has" is always grammatically incorrect!',
    ruleReference: 'Modal + have + V3'
  },

  // --- Future Perfect Continuous ---
  {
    id: 'fut-pc-1',
    tenseId: 'future-perfect-continuous',
    type: 'mcq',
    difficulty: 'advanced',
    prompt: 'Select the correct tense for duration up to a future milestone:',
    sentenceWithBlank: 'In December, Dr. Miller ______ (teach) at the medical faculty for twenty-five years.',
    options: [
      'will have been teaching',
      'will be teaching',
      'will teach',
      'has been teaching'
    ],
    correctAnswer: 'will have been teaching',
    explanation: 'The sentence connects a future milestone ("In December") with an accumulated duration ("for twenty-five years"). This requires Future Perfect Continuous ("will have been teaching").',
    signalWordDetected: 'In December... for twenty-five years',
    ruleReference: 'will have been + V-ing'
  },

  // =============================================================
  // TENSE IDENTIFICATION CHALLENGES (ALL TENSES)
  // =============================================================
  {
    id: 'id-1',
    tenseId: 'present-perfect',
    type: 'identify_tense',
    difficulty: 'intermediate',
    prompt: 'Which tense is used in this sentence? "The company has launched three new AI products this quarter."',
    options: [
      'Present Perfect',
      'Simple Past',
      'Present Continuous',
      'Past Perfect'
    ],
    correctAnswer: 'Present Perfect',
    explanation: '"has launched" = auxiliary "has" + past participle "launched", connecting a past action to the current open quarter.',
    ruleReference: 'has/have + V3'
  },
  {
    id: 'id-2',
    tenseId: 'past-continuous',
    type: 'identify_tense',
    difficulty: 'beginner',
    prompt: 'Identify the tense: "The children were splashing happily in the shallow waves."',
    options: [
      'Past Continuous',
      'Simple Past',
      'Past Perfect',
      'Present Continuous'
    ],
    correctAnswer: 'Past Continuous',
    explanation: '"were splashing" = past auxiliary "were" + verb with "-ing" ending.',
    ruleReference: 'was/were + V-ing'
  },
  {
    id: 'id-3',
    tenseId: 'past-perfect',
    type: 'identify_tense',
    difficulty: 'intermediate',
    prompt: 'Identify the tense: "The scientist had examined the geological samples before presenting the report."',
    options: [
      'Past Perfect',
      'Simple Past',
      'Past Perfect Continuous',
      'Present Perfect'
    ],
    correctAnswer: 'Past Perfect',
    explanation: '"had examined" = "had" + past participle (V3), indicating an action that took place prior to another past event.',
    ruleReference: 'had + V3'
  },
  {
    id: 'id-4',
    tenseId: 'future-continuous',
    type: 'identify_tense',
    difficulty: 'intermediate',
    prompt: 'Identify the tense: "This time next week, we will be relaxing under the palm trees in Maui."',
    options: [
      'Future Continuous',
      'Simple Future',
      'Future Perfect',
      'Present Continuous'
    ],
    correctAnswer: 'Future Continuous',
    explanation: '"will be relaxing" = "will be" + verb-ing, indicating an action ongoing at a specified future moment.',
    ruleReference: 'will be + V-ing'
  },
  {
    id: 'id-5',
    tenseId: 'future-perfect',
    type: 'identify_tense',
    difficulty: 'intermediate',
    prompt: 'Identify the tense: "By sunset, the sailors will have reached the protected harbor."',
    options: [
      'Future Perfect',
      'Simple Future',
      'Future Continuous',
      'Present Perfect'
    ],
    correctAnswer: 'Future Perfect',
    explanation: '"will have reached" = "will have" + past participle (V3), indicating completion before the future deadline "By sunset".',
    ruleReference: 'will have + V3'
  },
  {
    id: 'id-6',
    tenseId: 'present-perfect-continuous',
    type: 'identify_tense',
    difficulty: 'intermediate',
    prompt: 'Identify the tense: "How long has it been snowing in the mountains?"',
    options: [
      'Present Perfect Continuous',
      'Present Continuous',
      'Past Perfect Continuous',
      'Present Perfect'
    ],
    correctAnswer: 'Present Perfect Continuous',
    explanation: '"has it been snowing" = "has" + "been" + verb-ing, asking about ongoing duration up to the present moment.',
    ruleReference: 'has/have been + V-ing'
  }
];
