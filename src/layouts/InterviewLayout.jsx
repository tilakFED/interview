import { Link, Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { interviewProfiles } from '../data/interviewProfiles.js'
import { interviewRoute } from '../utils/pageUrl.js'
import { ThemeControl } from '../components/ThemeControl.jsx'

export function InterviewLayout({ theme, setTheme }) {
    const { profileId, levelId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [searchTerm, setSearchTerm] = useState('')
    const profile = interviewProfiles[profileId]
    const level = profile?.levels.find((item) => item.id === levelId)
    const isQuestionsPage = location.pathname.endsWith('/questions')

    if (!profile || !level) return <Navigate to="/" replace />

    return (
        <main className="page interview-page">
            <div className="interview-sticky-controls">
                <header className="interview-route-header">
                    <Link className="brand-link" to="/">Interview preparation</Link>
                    <span className="selected-level">{profile.position} <span aria-hidden="true">·</span> {level.title}</span>
                    <label className="change-level-control">
                        <span>Change level</span>
                        <select
                            aria-label={`Change ${profile.position} interview level`}
                            value={level.id}
                            onChange={(event) => navigate(interviewRoute(profile.id, event.target.value))}
                        >
                            {profile.levels.map((option) => (
                                <option key={option.id} value={option.id}>{option.title}</option>
                            ))}
                        </select>
                    </label>
                </header>
                {isQuestionsPage && (
                    <div className="sticky-question-search">
                        <label className="search-label" htmlFor="question-search">Find a question</label>
                        <input
                            id="question-search"
                            className="search-input"
                            type="search"
                            placeholder={profile.questionSearchPlaceholder ?? 'Search questions…'}
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>
                )}
            </div>
            <Outlet context={{ profile, level, searchTerm, setSearchTerm }} />
            <ThemeControl theme={theme} setTheme={setTheme} />
        </main>
    )
}
