import { useOutletContext, useParams } from 'react-router-dom'
import { TopicContent } from '../components/TopicContent.jsx'
import { ThemeControl } from '../components/ThemeControl.jsx'

export function TopicPage({ theme, setTheme }) {
    const { profile, level } = useOutletContext()
    const { topicId } = useParams()
    const topic = profile.topics?.find((item) => item.id === topicId)

    return (
        <>
            {topic ? (
                <TopicContent topic={topic} roleId={profile.id} levelId={level.id} />
            ) : (
                <p className="empty-state">Topic not found.</p>
            )}
            <ThemeControl theme={theme} setTheme={setTheme} />
        </>
    )
}
