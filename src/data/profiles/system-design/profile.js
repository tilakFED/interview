import { interviewQuestions } from './questionBanks.js'
import { systemDesignTopics } from './topics.js'
import { enrichQuestionBank } from '../../../utils/enrichQuestionBank.js'

const questions = enrichQuestionBank(interviewQuestions, 'System Design')

export const systemDesignProfile = {
    id: 'system-design',
    position: 'System Design',
    title: 'Design systems, at scale.',
    eyebrow: 'Interview preparation · System design',
    intro: 'A focused set of questions to help you prepare for design-system architecture, engineering leadership, and platform strategy conversations.',
    questionsHeading: 'Top system design questions likely to be asked',
    questionSearchPlaceholder: 'Search architecture, accessibility, migration…',
    topicsTitle: 'Go deeper on the topics.',
    topicIntro: 'Preparation guides for design-system architecture, framework strategy, quality, performance, governance, leadership, and platform design.',
    levels: [
        {
            id: 'junior',
            title: 'Junior / Entry-level',
            description: 'Practice core concepts, clear communication, and foundational architecture decisions.',
            questionIds: ['q2', 'q3', 'q5'],
        },
        {
            id: 'mid-level',
            title: 'Mid-level',
            description: 'Focus on implementation choices, trade-offs, and delivering reliable systems.',
            questionIds: ['q1', 'q2', 'q3', 'q5', 'q6'],
        },
        {
            id: 'senior',
            title: 'Senior',
            description: 'Prepare for system-wide design, migration strategy, quality, and cross-team influence.',
            questionIds: ['q1', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'],
        },
        {
            id: 'staff',
            title: 'Staff / Principal',
            description: 'Explore platform strategy, organizational scale, governance, and long-term technical direction.',
            questionIds: ['q1', 'q4', 'q6', 'q7', 'q8', 'q9', 'q10'],
        },
    ],
    questions,
    topics: systemDesignTopics,
}
