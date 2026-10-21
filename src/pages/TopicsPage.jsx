import { Link, useOutletContext } from 'react-router-dom'
import { TopicCard } from '../components/TopicCard.jsx'
import { interviewRoute } from '../utils/pageUrl.js'

export function TopicsPage() {
    const { profile, level } = useOutletContext()
    const topics = profile.topics ?? []

    return (
        <>
            <Link className="page-back-link" to={interviewRoute(profile.id, level.id)}>← Back to interview questions</Link>
            <header className="hero">
                <p className="eyebrow">{profile.eyebrow} · topic guide</p>
                <h1>{profile.topicsTitle ?? 'Preparation topics'}</h1>
                <p className="intro">{profile.topicIntro ?? 'Explore the study guides for this interview track.'}</p>
            </header>
            <section className="section" aria-labelledby="topics-heading">
                <div className="section-heading">
                    <div>
                        <p className="section-kicker">Study guides</p>
                        <h2 id="topics-heading">Preparation topics</h2>
                    </div>
                    <span className="count">{topics.length} guides</span>
                </div>
                {topics.length ? (
                    <div className="topic-grid">
                        {topics.map((topic) => <TopicCard key={topic.id} topic={topic} roleId={profile.id} levelId={level.id} />)}
                    </div>
                ) : (
                    <p className="empty-state">No study guides are available for this interview track yet.</p>
                )}
            </section>
        </>
    )
}
