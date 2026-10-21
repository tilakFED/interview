import { Link } from 'react-router-dom'
import { interviewRoute } from '../utils/pageUrl.js'

function ContentList({ ordered, items }) {
    const List = ordered ? 'ol' : 'ul'

    return (
        <List>
            {items.map((item, index) => {
                if (typeof item === 'string') return <li key={`${index}-${item}`}>{item}</li>
                return (
                    <li key={`${index}-${item.label}`}>
                        <strong>{item.label}:</strong> {item.text}
                    </li>
                )
            })}
        </List>
    )
}

function TopicBlock({ block }) {
    if (block.type === 'list') {
        return <ContentList ordered={block.ordered} items={block.items} />
    }

    if (block.type === 'table') {
        return (
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>{block.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
                    </thead>
                    <tbody>
                        {block.rows.map((row) => (
                            <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <p>
            {block.label && <strong>{block.label}: </strong>}
            {block.text}
        </p>
    )
}

export function TopicContent({ topic, roleId, levelId }) {
    return (
        <>
            <Link className="back-link" to={interviewRoute(roleId, levelId, 'topics')}>← All preparation topics</Link>
            <p className="eyebrow">Topic {topic.number} · {topic.tag}</p>
            <h1>{topic.title}</h1>
            <p className="intro">{topic.intro}</p>
            {topic.sections.map((section) => (
                <section className="content-card" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.blocks.map((block, index) => <TopicBlock key={`${section.heading}-${index}`} block={block} />)}
                </section>
            ))}
            <aside className="callout">
                <strong>{topic.callout.label}:</strong> {topic.callout.text}
            </aside>
            {topic.relatedQuestionId && (
                <p className="related-question">
                    <Link className="back-link" to={interviewRoute(roleId, levelId, 'answer', topic.relatedQuestionId)}>
                        Related question: React and Angular architecture →
                    </Link>
                </p>
            )}
        </>
    )
}
