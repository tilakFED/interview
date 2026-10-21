function getQuestionContext(question, framework) {
    const questionText = question.toLowerCase()

    if (/locali[sz]ation|internationali[sz]ation|i18n|translation|translated|locale|multiple languages/.test(questionText)) {
        if (/internationali[sz]ation|i18n/.test(questionText)) {
            return {
                detail: 'Treat internationalization as an application capability: keep messages out of component logic, use locale-aware formatting and plural rules, allow text expansion and right-to-left layouts, and make locale changes flow through the UI consistently.',
                example: 'For example, a booking summary can format its date, time, and total with the active locale and render the correct singular or plural message. Switching from English to French should update those values and the document direction where needed without changing the booking component.',
            }
        }

        return {
            detail: 'Keep language selection outside presentational component logic. Pass translated content or a translation function through a clear application boundary, use stable message keys for visible and accessible text, and support parameters and plural forms rather than assembling sentences from fragments.',
            example: 'For example, a reusable checkout button can render t(\'checkout.pay\') and receive its localized accessible name from the same message catalog. The component contains no English copy; changing the locale updates the button, validation messages, and screen-reader label together.',
        }
    }

    if (/accessib|screen reader|keyboard|semantic html|aria/.test(questionText)) {
        return {
            detail: 'Explain the experience for keyboard and assistive-technology users as well as the visual state. Name the semantic structure, focus behavior, accessible announcement, and how you would verify it manually in addition to automated checks.',
            example: 'For example, a form error should be associated with its field, announced when appropriate, and reachable without a mouse; test it with keyboard navigation and a screen reader.',
        }
    }

    if (/test|testing|testbed|quality gate|flaky/.test(questionText)) {
        return {
            detail: 'Separate the behavior under test from implementation details. A strong test describes the starting state, the user action or input, and the observable result, while isolating network or other unstable dependencies.',
            example: 'For example, test a failed save by submitting valid input, returning a server error from a mocked service, and checking that an actionable message appears while the user-entered values remain available.',
        }
    }

    if (/performance|render|change detection|bundle|virtualiz|memory|profil/.test(questionText)) {
        return {
            detail: 'Start from a reproducible user-visible symptom, establish a baseline, and profile before choosing an optimization. Consider CPU work, network transfer, memory, and DOM size separately, then compare the same workflow after the change.',
            example: 'For example, if a searchable product table feels slow, profile typing with production-like data, identify whether filtering, rendering, or network requests dominate, then optimize that measured bottleneck and recheck keyboard behavior.',
        }
    }

    if (/form|validat|controlvalueaccessor|input|submission/.test(questionText)) {
        return {
            detail: 'Treat a form as a user workflow, not just a collection of fields. Explain who owns each value, when validation runs, how pending and failure states are represented, and how server-side validation is reconciled with the UI.',
            example: 'For example, in a checkout form, validate required fields before submission, prevent duplicate orders while the request is pending, associate server errors with the relevant field, and preserve entries if payment fails.',
        }
    }

    if (/route|routing|navigation|lazy load|deep link|guard/.test(questionText)) {
        return {
            detail: 'Connect the route to a user task and define behavior for direct entry, refresh, invalid parameters, loading, and access denial. Keep client navigation safeguards separate from server authorization.',
            example: 'For example, a link to an order detail page should work when pasted into a new tab, show a loading state while the order is fetched, handle an unknown order, and still enforce permission on the API.',
        }
    }

    if (/security|secret|auth|sanit|xss|permission/.test(questionText)) {
        return {
            detail: 'Describe the trust boundary explicitly: browser code and its storage are user-controlled, so sensitive data and authorization decisions must be verified by a trusted server. Explain safe handling and failure behavior, not just the API or framework feature.',
            example: 'For example, hiding an admin button improves the interface, but the server must still reject an unauthorized admin request; never ship a private API key in a frontend environment file.',
        }
    }

    if (/observable|rxjs|signal|promise|async|http|request|data load|cache|fetch/.test(questionText)) {
        return {
            detail: 'Make the lifecycle and ownership of asynchronous work clear. Discuss how newer input affects older work, how errors are surfaced, who cancels or cleans up the operation, and whether cached data can become stale.',
            example: 'For example, when a user types several search terms quickly, cancel or ignore outdated requests so a slower response for an earlier term cannot replace the latest results.',
        }
    }

    if (/state|context|reducer|props|hook|effect|signal/.test(questionText)) {
        return {
            detail: 'Identify the source of truth, the components or features that own it, and what should trigger an update. Prefer derived values over duplicate state, and choose sharing mechanisms based on update frequency and consumer boundaries.',
            example: 'For example, a filter panel and results list can share the selected filters through their nearest common page owner; unrelated navigation state should not be placed in that same high-frequency update path.',
        }
    }

    if (/architect|architecture|design system|component|library|package|monorepo|module|feature boundary|migration|upgrade|version|micro.frontend/.test(questionText)) {
        return {
            detail: 'Frame the decision around consumers, ownership, and change over time. State the boundary and public contract, compare viable alternatives, identify migration or compatibility costs, and explain how you would validate the choice with real consumers.',
            example: 'For example, when extracting a shared component, pilot its API in two consuming features, keep domain-specific decisions in those features, and promote the component only after accessibility, upgrade, and ownership expectations are clear.',
        }
    }

    if (/key|list|array|collection|table|children|composition|fragment/.test(questionText)) {
        return {
            detail: 'Relate the concept to identity and composition in a real interface. Explain what should remain stable as data changes, what owns the markup or state, and how you would verify behavior after insertion, removal, and reordering.',
            example: 'For example, use a stable record ID for each row in a sortable customer table so an expanded row or focused control remains associated with the same customer after sorting.',
        }
    }

    if (framework === 'Angular') {
        return {
            detail: 'Tie the Angular feature to a clear component or service boundary, explain how data enters and leaves that boundary, and mention how you would test its rendered behavior and cleanup.',
            example: 'For example, in an order-detail feature, keep reusable display behavior in a focused component, load order data through an injected data service, and show explicit loading, empty, and failure states.',
        }
    }

    if (framework === 'React') {
        return {
            detail: 'Tie the React concept to component ownership, the direction of data flow, and the user-visible result. Explain what should trigger a render and how you would test the behavior rather than a private implementation detail.',
            example: 'For example, in a product search view, keep the query with the component that coordinates the input and results, render each result using stable data identity, and test that changing the query updates the visible list.',
        }
    }

    return {
        detail: 'A complete answer should connect the concept to its owner, its observable behavior, and how it will be verified. State the relevant trade-off and explain what you would measure or test before adopting the approach broadly.',
        example: 'For example, apply the approach to one representative feature first, verify its behavior with a realistic consumer, and use the result to decide whether the pattern should be reused elsewhere.',
    }
}

export function enrichQuestionBank(questionBank, framework) {
    const entries = Object.entries(questionBank)
    const usedExamples = new Set(entries.flatMap(([, content]) =>
        (content.answer ?? [])
            .filter((block) => block.type === 'example')
            .map((block) => block.text.trim().toLowerCase()),
    ))

    return Object.fromEntries(entries.map(([question, content]) => {
        const answer = content.answer ?? []
        const context = getQuestionContext(question, framework)
        const alreadyHasExample = answer.some((block) => block.type === 'example' || block.type === 'code')
        let example = context.example

        if (!alreadyHasExample && usedExamples.has(example.trim().toLowerCase())) {
            example = `For “${question}”, apply the concept to the exact feature in the prompt: state one realistic input, the expected result, and an edge case that would confirm the behavior.`
        }

        if (!alreadyHasExample) usedExamples.add(example.trim().toLowerCase())

        return [question, {
            ...content,
            answer: [
                ...answer,
                { type: 'paragraph', label: 'How to apply it', text: context.detail },
                ...(!alreadyHasExample ? [{ type: 'example', text: example }] : []),
            ],
        }]
    }))
}
