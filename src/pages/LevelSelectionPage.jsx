import { Link } from 'react-router-dom'
import { interviewProfiles } from '../data/interviewProfiles.js'
import { interviewRoute } from '../utils/pageUrl.js'
import { ThemeControl } from '../components/ThemeControl.jsx'

export function LevelSelectionPage({ theme, setTheme }) {
    const profiles = Object.values(interviewProfiles)

    return (
        <main className="page level-picker-page">
            <header className="hero level-picker-hero">
                <p className="eyebrow">Interview preparation</p>
                <h1>Choose your interview level.</h1>
                <p className="intro">
                    Select the level you’re preparing for. You’ll get a focused route with
                    questions curated for that level and preparation guides for the interview track.
                </p>
            </header>

            {profiles.map((profile) => (
                <section className="section" key={profile.id} aria-labelledby={`${profile.id}-heading`}>
                    <div className="section-heading">
                        <div>
                            <p className="section-kicker">Interview track</p>
                            <h2 id={`${profile.id}-heading`}>{profile.position}</h2>
                        </div>
                        <span className="count">{profile.levels.length} levels</span>
                    </div>
                    <div className="level-grid">
                        {profile.levels.map((level, index) => (
                            <Link
                                className="level-card"
                                key={level.id}
                                to={interviewRoute(profile.id, level.id)}
                            >
                                <span className="question-number" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="level-card-copy">
                                    <strong>{level.title}</strong>
                                    <span>{level.description}</span>
                                </span>
                                <span className="level-card-arrow" aria-hidden="true">→</span>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
            <ThemeControl theme={theme} setTheme={setTheme} />
        </main>
    )
}
