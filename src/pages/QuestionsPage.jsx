import { useMemo } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { QuestionCard } from '../components/QuestionCard.jsx'
import { getLevelQuestions } from '../utils/getLevelQuestions.js'
import { interviewRoute } from '../utils/pageUrl.js'
import { ThemeControl } from '../components/ThemeControl.jsx'

export function QuestionsPage({ theme, setTheme }) {
    const { profile, level, searchTerm } = useOutletContext()
    const entries = useMemo(() => getLevelQuestions(profile, level), [profile, level])
    const filteredQuestions = entries.filter(([question]) =>
        question.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    )
    const topics = profile.topics ?? []

    return (
        <>
            <header className="hero">
                <p className="eyebrow">{profile.eyebrow} · {level.title}</p>
                <h1>{profile.title}</h1>
                <p className="intro">{profile.intro}</p>
                <p className="level-focus">{level.description}</p>
                <nav className="hero-actions" aria-label="Preparation navigation">
                    <a className="hero-link" href="#questions">Explore the questions <span aria-hidden="true">↓</span></a>
                    {topics.length > 0 && (
                        <Link className="secondary-link" to={interviewRoute(profile.id, level.id, 'topics')}>
                            Explore all preparation topics →
                        </Link>
                    )}
                </nav>
            </header>

            <section id="questions" className="section" aria-labelledby="questions-heading">
                <div className="section-heading">
                    <div>
                        <p className="section-kicker">Start here</p>
                        <h2 id="questions-heading">{profile.questionsHeading ?? 'Interview questions'}</h2>
                    </div>
                    <span className="count">{filteredQuestions.length} of {entries.length} questions</span>
                </div>
                {filteredQuestions.length > 0 ? (
                    <ol className="question-grid">
                        {filteredQuestions.map(([question, content], index) => (
                            <QuestionCard
                                key={content.id}
                                question={question}
                                id={content.id}
                                roleId={profile.id}
                                levelId={level.id}
                                index={index}
                                answer={content.answer}
                            />
                        ))}
                    </ol>
                ) : (
                    <p className="empty-state">No questions match “{searchTerm}”. Try another search.</p>
                )}
            </section>
        </>
    )
}
