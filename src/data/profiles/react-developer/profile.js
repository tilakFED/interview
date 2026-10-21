import { reactLevelQuestionIds, reactQuestionBank } from './questionBanks.js'
import { reactTopics } from './topics.js'

export const reactDeveloperProfile = {
    id: 'react-developer',
    position: 'React Developer',
    title: 'Build thoughtful React experiences.',
    eyebrow: 'Interview preparation · React development',
    intro: 'Practice React fundamentals and senior-level application architecture, rendering performance, state ownership, and data-loading trade-offs.',
    questionsHeading: 'React interview questions',
    questionSearchPlaceholder: 'Search React, hooks, state, rendering…',
    topicsTitle: 'Prepare for React interviews.',
    topicIntro: 'Focused React study guides for fundamentals, Hooks, data flow, quality, and application architecture.',
    levels: [
        {
            id: 'junior',
            title: 'Junior',
            description: 'React fundamentals, components, props, hooks, and state sharing.',
            questionIds: reactLevelQuestionIds.junior,
        },
        {
            id: 'senior',
            title: 'Senior',
            description: 'Application boundaries, render performance, state strategy, and server rendering.',
            questionIds: reactLevelQuestionIds.senior,
        },
    ],
    questions: reactQuestionBank,
    topics: reactTopics,
}
