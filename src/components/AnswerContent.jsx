export function AnswerContent({ blocks = [] }) {
    return blocks.map((block, index) => {
        if (block.type === 'code') {
            return (
                <figure className="answer-code" key={`code-${index}`}>
                    <figcaption>{block.language} example</figcaption>
                    <pre><code>{block.code}</code></pre>
                </figure>
            )
        }

        if (block.type === 'example') {
            return (
                <aside className="answer-example" key={`example-${index}`}>
                    <strong>Example:</strong> {block.text}
                </aside>
            )
        }

        if (block.type === 'list') {
            return (
                <ul key={`list-${index}`}>
                    {block.items.map((item) => {
                        const [label, ...description] = item.split(':')
                        return (
                            <li key={item}>
                                <strong>{label}:</strong>{description.join(':')}
                            </li>
                        )
                    })}
                </ul>
            )
        }

        return <p key={`paragraph-${index}`}>{block.text}</p>
    })
}
