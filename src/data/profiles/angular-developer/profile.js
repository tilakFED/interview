import { angularLevelQuestionIds, angularQuestionBank } from './questionBanks.js'
import { angularTopics } from './topics.js'

export const angularDeveloperProfile = {
    id: 'angular-developer',
    position: 'Angular Developer',
    title: 'Build reliable Angular applications.',
    eyebrow: 'Interview preparation · Angular development',
    intro: 'Practice Angular fundamentals and senior-level architecture, performance, state management, and migration decisions.',
    questionsHeading: 'Angular interview questions',
    questionSearchPlaceholder: 'Search Angular, forms, RxJS, performance…',
    topicsTitle: 'Prepare for Angular interviews.',
    topicIntro: 'Focused Angular study guides for fundamentals, reactivity, forms, quality, and application architecture.',
    levels: [
        {
            id: 'junior',
            title: 'Junior',
            description: 'Core Angular concepts, components, services, data binding, and forms.',
            questionIds: angularLevelQuestionIds.junior,
        },
        {
            id: 'senior',
            title: 'Senior',
            description: 'Application architecture, rendering performance, reactive state, and safe migrations.',
            questionIds: angularLevelQuestionIds.senior,
        },
    ],
    questions: angularQuestionBank,
    topics: angularTopics,
}
