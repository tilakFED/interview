import { Link } from 'react-router-dom'
import { AnswerContent } from './AnswerContent.jsx'
import { interviewRoute } from '../utils/pageUrl.js'

export function QuestionCard({ question, id, index, roleId, levelId, answer, href }) {
    return (
        <li className="question-card">
            <details className="question-answer">
                <summary className="question-summary">
                    <span className="question-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="question">{question}</span>
                    <span className="question-toggle" aria-hidden="true">View answer</span>
                </summary>
                <div className="inline-answer">
                    <AnswerContent blocks={answer} />
                    <Link className="full-answer-link" to={href ?? interviewRoute(roleId, levelId, 'answer', id)}>
                        Open answer on its own page →
                    </Link>
                </div>
            </details>
        </li>
    )
}
