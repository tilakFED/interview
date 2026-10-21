# Design Systems Interview Preparation

A React + Vite interview-preparation app. Each role's question bank and study topics are stored in that role's folder, separately from the shared UI, so the content can later be replaced with API data.

## Lightweight position-based structure

The app opens on an interview track and level selection page. It currently includes System Design, Angular Developer, and React Developer. Angular and React each have Junior and Senior levels, with 50 questions and answers in each level (100 per framework). Users navigate to paths such as `/angular-developer/junior/questions` or `/react-developer/senior/questions`. The interview header's Change level selector is populated from the active profile's levels. Each level defines `questionIds`; only those questions are listed, and direct answer routes for questions outside that level redirect back to its question list. Position-specific content lives in profile modules, while shared pages render any registered profile and level without role-specific UI logic.

Profiles use a consistent folder layout under `src/data/profiles/`: each role has a `<role>/profile.js`, `<role>/questionBanks.js`, and `<role>/topics.js` module. System Design, Angular Developer, and React Developer keep their role content together and use the same profile and topic schemas rendered by shared components. To add another position, create a role folder with its profile, question banks, and optional topics, then register the profile in `src/data/interviewProfiles.js`. Each level's `questionIds` controls its question list. Questions use the same question-text key and `{ id, answer }` value shape. Nested routes cover questions, one selected answer, topic catalogs, and individual topics. No role-specific page components or UI rewrites are needed.

Study topics are optional. A profile with only questions and answers can omit `topics` and the study-guide link will not be shown.

## Data model

Each role's question bank is a map whose keys are question text and whose values contain a stable ID plus answer content blocks:

- `id`: stable anchor identifier for navigation
- `answer`: ordered paragraph, list, example, and code blocks. Each question is enriched with an applied explanation and a practical example; code blocks carry a language label and are rendered safely as text.

For an API integration, replace the static import with fetched records and normalize them into the same shape, or change the components to consume the API response directly.

## Reusable UI

- `QuestionCard`, `AnswerCard`, and `AnswerContent` live in `src/components/` and are exported through `src/components/index.js` for reuse.
- Questions render on the selected level route; answers render on a dedicated route for the selected question.
- The answer route verifies the question belongs to the active level.
- System Design guides are in `src/data/profiles/system-design/topics.js`; Angular and React have matching role-local topic modules. All are rendered by the shared `TopicCard` and `TopicContent` components.
- Topic catalog and detail pages use nested profile-and-level routes.

## Run locally

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production build.
- `npm run lint` runs Oxlint.
