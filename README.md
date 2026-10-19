# ⏳ TenseCraft — Master English Tenses & Interactive Practice

A modern, comprehensive web application designed to teach all 12 English tenses through interactive lessons, visual continuum timelines, dynamic subject-verb agreement conjugators, audio pronunciation, and interactive quizzes with detailed explanations.

---

## 🚀 Key Features

### 1. 📖 Comprehensive Lessons for All 12 English Tenses
- **Present Tenses**: Simple Present, Present Continuous, Present Perfect, Present Perfect Continuous
- **Past Tenses**: Simple Past, Past Continuous, Past Perfect, Past Perfect Continuous
- **Future Tenses**: Simple Future, Future Continuous, Future Perfect, Future Perfect Continuous
- **Standard Formula Breakdowns**: Affirmative (+), Negative (-), and Interrogative (?) structures with subject notes.
- **When to Use**: Real-life practical usage scenarios with authentic example sentences.
- **Trigger Signal Words**: Key time indicators (*yesterday, since, for, by tomorrow, already, yet, at the moment*).
- **Pitfall Alerts**: Side-by-side comparison of common grammatical errors vs. correct usage with rationales.
- **Native Spoken Tips**: Natural spoken English contractions and phonetics.

### 2. 🧭 Visual Time Continuum Diagrams
- Dynamic SVG timeline graphics demonstrating where each tense exists in space and time (single point, ongoing stream, past-to-present bridge, event sequence, or future deadline).

### 3. ✨ Dynamic Subject-Verb Formula Conjugator
- Interactive pronoun toggles (`I`, `You`, `He / She / It`, `We`, `They`) that dynamically update verb endings (e.g. 3rd-person *-s/-es*), auxiliary verbs (*do/does, have/has, was/were*), and sentence structures with audio pronunciation.

### 4. 🎯 Practice & Quiz Engine
- **Multiple Question Formats**:
  - Multiple Choice Questions (MCQ)
  - Fill-in-the-Blank with base verb hints
  - Identify the Tense from full sentences
  - Spot & Fix the Error
- **Instant Detailed Feedback**: Clear explanations citing grammar formulas, signal words, and why distractors are incorrect.
- **Listen to Complete Sentence**: Hear native-like speech pronunciation using the Web Speech API.
- **Celebration Confetti**: Rewarding animations when achieving passing mastery (>= 70%).

### 5. 📊 12-Tense Comparison Matrix (Cheat Sheet)
- A 3x4 comparative grid displaying Past, Present, and Future across Simple, Continuous, Perfect, and Perfect Continuous with switchable demonstration verbs (*write, play, study*).

### 6. 📚 Irregular Verbs Conjugation Dictionary
- Comprehensive searchable reference bank of 70+ essential irregular verbs detailing **V1 (Infinitive)**, **V2 (Past Simple)**, **V3 (Past Participle)**, definitions, and audio-enabled example sentences.

### 7. 🏆 Progress & Mastery Dashboard
- Live XP (Experience Points), Streak Counter, and Accuracy metrics.
- Time period breakdown (Present / Past / Future progress).
- **Review Missed Notebook**: Dedicated queue tracking questions answered incorrectly so learners can practice them until mastered.
- Dark & Light mode toggle with persistent settings.

---

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti
- **Speech**: HTML5 Web Speech Synthesis API
- **Bundler & Dev Server**: Vite 8

---

## 🏃 Running the Application

### Prerequisites
- Node.js (v18+) & npm

### Start Development Server
```bash
cd english-tenses-tutor
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your web browser.

### Build for Production
```bash
npm run build
```
The optimized production files will be in the `dist/` directory.
