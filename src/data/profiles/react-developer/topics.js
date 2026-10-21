export const reactTopics = [
    {
        id: 'react-fundamentals', number: '01', tag: 'Fundamentals',
        title: 'React Fundamentals',
        description: 'Components, JSX, props, state, rendering, and composition.',
        intro: 'Review the core mental model behind React and practice explaining how data changes become user-visible UI.',
        sections: [
            {
                heading: 'Component and data flow', blocks: [
                    {
                        type: 'list', items: [
                            { label: 'Components', text: 'compose reusable UI from functions and elements. Keep rendering pure for the same props and state.' },
                            { label: 'Props', text: 'are read-only inputs supplied by a parent and are the primary way to configure child components.' },
                            { label: 'State', text: 'is owned by a component and updated through setters or reducers; do not mutate objects in place.' },
                            { label: 'Composition', text: 'uses children and smaller components to support variation without giant APIs full of flags.' },
                        ]
                    },
                    { type: 'paragraph', text: 'When multiple components need the same state, place it at their nearest common owner. Use Context for appropriate subtree-scoped values, not as a default global store.' },
                ]
            },
            {
                heading: 'Rendering and effects', blocks: [
                    { type: 'paragraph', text: 'React renders from current props and state. Keys help match list items by stable identity. Effects synchronize with external systems; they are not needed for every derived value or user action. Effect setup should be paired with cleanup when the external resource has a lifecycle.' },
                    {
                        type: 'list', items: [
                            'Use stable data IDs for changing lists; indexes can attach state to the wrong row after reordering.',
                            'Calculate values from props and state during rendering when possible.',
                            'Follow the Rules of Hooks so Hook state remains associated with a stable call order.',
                        ]
                    },
                ]
            },
            {
                heading: 'What interviewers look for', blocks: [{
                    type: 'list', items: [
                        'Can you explain props, state, and one-way data flow?',
                        'Can you choose an appropriate component boundary and composition API?',
                        'Can you explain keys and why in-place mutation is problematic?',
                        'Can you distinguish an effect from a value that should be derived during render?',
                    ]
                }]
            },
        ],
        callout: { label: 'Practice prompt', text: 'Describe a search page where a parent owns the query, an input updates it, and a results component renders matching items with stable keys.' },
    },
    {
        id: 'react-hooks-state', number: '02', tag: 'Hooks & state',
        title: 'Hooks, State & Data Flow',
        description: 'Choose Hooks, Context, reducers, and state libraries with clear ownership.',
        intro: 'Strong answers explain what owns state, how updates flow, and how to avoid redundant or overly broad state.',
        sections: [
            {
                heading: 'Select an appropriate state tool', blocks: [{
                    type: 'table', headers: ['Need', 'Typical choice', 'Consider'], rows: [
                        ['One component interaction', 'useState', 'Keep state close to the UI that owns it.'],
                        ['Related state transitions', 'useReducer', 'Use explicit actions when transitions need a clear model.'],
                        ['Scoped dependency or stable value', 'Context', 'Broad high-frequency updates can cause render fan-out.'],
                        ['Cross-feature server data', 'Query/data library', 'Define caching, freshness, and invalidation.'],
                    ]
                }]
            },
            {
                heading: 'Hook guidance', blocks: [{
                    type: 'list', items: [
                        'Use useEffect to synchronize with external systems; include reactive dependencies and clean up resources.',
                        'Use useRef for imperative values that should persist without triggering rendering.',
                        'Use useMemo and useCallback when profiling or identity-sensitive APIs justify their added complexity.',
                        'Create custom Hooks to reuse stateful logic; each call has independent Hook state unless backed by shared storage.',
                    ]
                }]
            },
            { heading: 'Avoid redundant state', blocks: [{ type: 'paragraph', text: 'If a value can be calculated from current props and state, derive it during render instead of storing a second copy and synchronizing it with an effect. Keep ownership and update paths explicit so debugging does not require tracing multiple copies of the same value.' }] },
        ],
        callout: { label: 'Senior-level signal', text: 'Explain why a state boundary is located where it is, how consumers subscribe to updates, and what changes when the state becomes server-owned.' },
    },
    {
        id: 'react-forms-routing', number: '03', tag: 'Forms & routing',
        title: 'Forms, Data Loading & Routing',
        description: 'Handle validation, requests, caching, route boundaries, and error states.',
        intro: 'Prepare to discuss the entire user journey: entering data, loading results, navigating directly, and recovering from failures.',
        sections: [
            {
                heading: 'Forms and user input', blocks: [{
                    type: 'list', items: [
                        'Use controlled inputs when React state must drive the current value; uncontrolled inputs can suit simpler integrations.',
                        'Provide labels, accessible validation feedback, and clear pending and success states.',
                        'Preserve user input after expected request failures and prevent duplicate submissions.',
                        'Keep per-field state local or use a form library with subscriptions for large forms.',
                    ]
                }]
            },
            {
                heading: 'Data loading boundaries', blocks: [
                    { type: 'paragraph', text: 'Prefer a consistent route or query-layer approach over scattered ad hoc effects. Model loading, empty, success, and error states. Define caching and invalidation, prevent stale requests from replacing newer results, and avoid waterfalls by loading independent data concurrently.' },
                    {
                        type: 'list', ordered: true, items: [
                            'Identify whether the value is server state, URL state, or local UI state.',
                            'Choose a loading boundary and define retry/cancellation behavior.',
                            'Handle direct route entry, refresh, and invalid parameters.',
                            'Measure the critical path with representative network and device conditions.',
                        ]
                    },
                ]
            },
            {
                heading: 'Practice scenarios', blocks: [{
                    type: 'list', items: [
                        'Design an edit form that handles optimistic updates and server validation errors.',
                        'Explain how a search screen avoids displaying results for an old query.',
                        'Describe route-level loading and recovery for a slow or unavailable API.',
                    ]
                }]
            },
        ],
        callout: { label: 'Answer checklist', text: 'Discuss state ownership, accessible input, server authority, cache freshness, stale-request handling, and the user’s recovery path.' },
    },
    {
        id: 'react-testing-accessibility', number: '04', tag: 'Quality',
        title: 'Testing & Accessibility',
        description: 'Test observable component contracts and accessible interactions.',
        intro: 'Show that React quality means more than snapshots: users must be able to operate and understand the interface.',
        sections: [
            {
                heading: 'Testing layers', blocks: [{
                    type: 'list', items: [
                        { label: 'Unit', text: 'test pure functions, reducers, and domain transformations.' },
                        { label: 'Component', text: 'test accessible roles, labels, interactions, and important states.' },
                        { label: 'Integration', text: 'validate routing, data loading, and component collaboration.' },
                        { label: 'End-to-end', text: 'protect the critical workflows in a real browser.' },
                    ]
                }]
            },
            {
                heading: 'Accessibility essentials', blocks: [{
                    type: 'list', items: [
                        'Use native buttons, links, inputs, and landmarks instead of recreating their behavior with generic elements.',
                        'Ensure keyboard access, visible focus, accessible names, and correctly associated validation messages.',
                        'Manage focus and background interaction for dialogs and overlays.',
                        'Combine automated checks with keyboard and screen-reader testing.',
                    ]
                }]
            },
            { heading: 'Test public behavior', blocks: [{ type: 'paragraph', text: 'Prefer assertions based on accessible roles and user-visible outcomes over private component state or exact DOM shape. Mock at service boundaries and cover loading, empty, error, and success paths. Snapshot tests can complement behavior tests but rarely explain whether an interaction works.' }] },
        ],
        callout: { label: 'Interview tip', text: 'Give an example of a user behavior test, an accessibility issue it would catch, and a manual check automation cannot replace.' },
    },
    {
        id: 'react-architecture', number: '05', tag: 'Architecture',
        title: 'React Application Architecture',
        description: 'Feature boundaries, rendering strategies, performance, security, and migrations.',
        intro: 'Senior React interviews explore trade-offs across application scale, deployment, performance, and team ownership.',
        sections: [
            {
                heading: 'Feature and rendering architecture', blocks: [
                    { type: 'paragraph', text: 'Organize around product capabilities with explicit route, data-access, and shared-library boundaries. Choose client rendering, server rendering, or prerendering based on SEO, personalization, caching, and operational constraints. Keep server state distinct from local UI state.' },
                    {
                        type: 'list', items: [
                            'Define module ownership and allowed dependency direction.',
                            'Use route-level code splitting and verify actual consumer bundles.',
                            'Keep shared component APIs stable and avoid encoding product business rules in the design system.',
                        ]
                    },
                ]
            },
            {
                heading: 'Performance and resilience', blocks: [{
                    type: 'list', items: [
                        'Profile before memoizing; inspect state placement, context fan-out, expensive rendering, and network waterfalls.',
                        'Use virtualization only when measured needs justify it and keyboard/focus behavior remains usable.',
                        'Add boundaries and recovery UI for route-level rendering and data failures.',
                        'Set bundle and interaction budgets with clear ownership and production verification.',
                    ]
                }]
            },
            { heading: 'Security and migration', blocks: [{ type: 'paragraph', text: 'Treat browser data as inspectable, authorize every protected operation on the server, and sanitize untrusted rich text. For migrations, inventory dependencies and risk, create compatibility seams, and upgrade feature by feature with representative tests and clear consumer communication.' }] },
        ],
        callout: { label: 'Architecture answer flow', text: 'Clarify requirements → draw feature and data boundaries → choose rendering and delivery → address performance, errors, and security → explain rollout and measurement.' },
    },
]
