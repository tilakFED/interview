import { Link } from 'react-router-dom'
import { interviewRoute } from '../utils/pageUrl.js'

export function TopicCard({ topic, roleId, levelId }) {
    return (
        <Link className="topic-card" to={interviewRoute(roleId, levelId, 'topic', topic.id)}>
            <span className="tag">{topic.tag}</span>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
        </Link>
    )
}
