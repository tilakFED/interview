import { AnswerContent } from './AnswerContent.jsx'

export function AnswerCard({ question, id, answer, index }) {
    return (
        <article className="answer-card" id={`${id}-answer`} aria-labelledby={`${id}-title`}>
            <span className="number">QUESTION {String(index + 1).padStart(2, '0')}</span>
            <h3 id={`${id}-title`}>{question}</h3>
            <div className="answer-content">
                <AnswerContent blocks={answer} />
            </div>
        </article>
    )
}
