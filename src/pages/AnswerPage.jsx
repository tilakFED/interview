import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { AnswerCard } from '../components/AnswerCard.jsx'
import { getLevelQuestions } from '../utils/getLevelQuestions.js'
import { interviewRoute } from '../utils/pageUrl.js'

export function AnswerPage() {
    const { profile, level } = useOutletContext()
    const { questionId } = useParams()
    const entries = getLevelQuestions(profile, level)
    const selectedAnswer = entries.find(([, content]) => content.id === questionId)

    if (!selectedAnswer) {
        return <Navigate to={interviewRoute(profile.id, level.id)} replace />
    }

    return (
        <>
            <Link className="page-back-link" to={interviewRoute(profile.id, level.id)}>
                ← Back to questions
            </Link>
            <section className="answers-section" aria-label="Selected interview answer">
                <AnswerCard
                    question={selectedAnswer[0]}
                    id={selectedAnswer[1].id}
                    answer={selectedAnswer[1].answer}
                    index={entries.indexOf(selectedAnswer)}
                />
            </section>
        </>
    )
}
