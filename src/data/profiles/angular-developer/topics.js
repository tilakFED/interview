export const angularTopics = [
    {
        id: 'angular-fundamentals', number: '01', tag: 'Fundamentals',
        title: 'Angular Fundamentals',
        description: 'Components, templates, dependency injection, lifecycle, and standalone APIs.',
        intro: 'Review Angular building blocks and explain how they work together in a small feature.',
        sections: [
            {
                heading: 'Core building blocks', blocks: [
                    {
                        type: 'list', items: [
                            { label: 'Components', text: 'own a view, template, styles, and UI behavior. Keep responsibilities focused and expose clear inputs and outputs.' },
                            { label: 'Templates', text: 'describe rendering with interpolation, property and event binding, control flow, and pipes.' },
                            { label: 'Services', text: 'encapsulate reusable business or data-access operations outside presentation components.' },
                            { label: 'Dependency injection', text: 'provides dependencies at a deliberate scope; provider placement determines sharing and lifetime.' },
                            { label: 'Directives and pipes', text: 'add reusable host behavior or transform values for presentation.' },
                        ]
                    },
                    { type: 'paragraph', text: 'Use standalone components and APIs for new work where they simplify dependencies. Understand NgModules too, since many production applications still use them.' },
                ]
            },
            {
                heading: 'Lifecycle and data flow', blocks: [
                    { type: 'paragraph', text: 'Keep construction simple, initialize work that depends on Angular inputs at the appropriate lifecycle phase, and clean up resources when their owner is destroyed. Pass state down through inputs and report user intent up through outputs. Avoid hidden mutable state shared between unrelated components.' },
                    {
                        type: 'list', items: [
                            'Use computed values for derived UI state instead of storing duplicates.',
                            'Prefer template async handling or lifecycle-bound subscriptions to unmanaged subscriptions.',
                            'Use content projection when a reusable shell needs caller-owned content.',
                        ]
                    },
                ]
            },
            {
                heading: 'What interviewers look for', blocks: [{
                    type: 'list', items: [
                        'Explain the difference between a component, directive, service, and pipe.',
                        'Choose component boundaries based on responsibilities and consumer needs.',
                        'Describe where a dependency is provided and how that affects its lifetime.',
                        'Include accessibility and testability in component design.',
                    ]
                }]
            },
        ],
        callout: { label: 'Practice prompt', text: 'Explain how a page gets data from a service, passes it to a child component, and handles a user action without putting application logic in the template.' },
    },
    {
        id: 'angular-reactivity', number: '02', tag: 'Reactivity',
        title: 'Change Detection, Signals & RxJS',
        description: 'Rendering triggers, derived state, observable composition, and cleanup.',
        intro: 'Connect reactive APIs to user-visible behavior, performance, and ownership—not just a list of operators or framework features.',
        sections: [
            {
                heading: 'Choose the right reactive model', blocks: [{
                    type: 'table', headers: ['Need', 'Useful approach', 'Watch for'], rows: [
                        ['Local synchronous state', 'Signals and computed values', 'Avoid duplicate derived state or effects that copy values.'],
                        ['Async streams and event composition', 'RxJS Observables and operators', 'Choose cancellation and concurrency semantics intentionally.'],
                        ['Template subscription display', 'Async pipe or lifecycle-aware interop', 'Represent errors, loading, and empty states.'],
                    ]
                }]
            },
            {
                heading: 'Rendering performance', blocks: [
                    { type: 'paragraph', text: 'Start by profiling a reproducible interaction. Inspect expensive template work, broad update scopes, list identity, subscriptions, and DOM size. OnPush, Signals, immutable data, and stable tracking keys can clarify update boundaries; validate each optimization against the supported Angular version and production-like behavior.' },
                    {
                        type: 'list', items: [
                            'Use computed for pure derivation and effects only to synchronize with external systems.',
                            'Use switchMap for latest-search semantics; select other RxJS mapping operators when their concurrency behavior fits better.',
                            'Tie subscriptions and listeners to the lifecycle of the feature that owns them.',
                        ]
                    },
                ]
            },
            {
                heading: 'Diagnose a slow view', blocks: [{
                    type: 'list', ordered: true, items: [
                        'Clarify whether the symptom is initial rendering, interaction latency, memory, or build time.',
                        'Profile change detection and browser main-thread work using representative data.',
                        'Identify the measured cause before adding memoization or virtualization.',
                        'Apply one targeted change, retest accessibility, and compare results.',
                    ]
                }]
            },
        ],
        callout: { label: 'Senior-level signal', text: 'Explain who owns state, what triggers work, how asynchronous work is cancelled, and how you prove an optimization helped.' },
    },
    {
        id: 'angular-forms-routing', number: '03', tag: 'Forms & routing',
        title: 'Forms, Validation & Routing',
        description: 'Reactive forms, custom controls, route boundaries, guards, and loading.',
        intro: 'Forms and routes reveal how you handle user input, feature boundaries, validation, and browser navigation.',
        sections: [
            {
                heading: 'Form strategy', blocks: [
                    { type: 'paragraph', text: 'Template-driven forms can suit simple cases. Reactive forms make complex, dynamic, and heavily tested forms easier to model in TypeScript. Put cross-field rules at the owning group, handle asynchronous validation deliberately, and treat server validation as authoritative.' },
                    {
                        type: 'list', items: [
                            'Associate labels, help text, and errors with fields; communicate invalid and pending states accessibly.',
                            'Use ControlValueAccessor to connect custom controls to Angular forms.',
                            'Prevent duplicate submissions and preserve user input when a request fails.',
                        ]
                    },
                ]
            },
            {
                heading: 'Routing and feature boundaries', blocks: [
                    { type: 'paragraph', text: 'Use routes to make important views deep-linkable and organize application features. Lazy-load meaningful boundaries rather than creating many tiny chunks. Validate route parameters, define not-found and error states, and use guards for client navigation while keeping authorization on the server.' },
                    {
                        type: 'list', ordered: true, items: [
                            'Identify route ownership and required data.',
                            'Define loading, failure, and access-denied behavior.',
                            'Test direct entry, browser history, refresh, and navigation between features.',
                        ]
                    },
                ]
            },
            {
                heading: 'Practice scenarios', blocks: [{
                    type: 'list', items: [
                        'Design a multi-step form that saves a draft and resumes from a deep link.',
                        'Explain where a custom date picker integrates with validation and form status.',
                        'Describe what happens when a route parameter is invalid or data loading fails.',
                    ]
                }]
            },
        ],
        callout: { label: 'Answer checklist', text: 'Cover data ownership, validation timing, accessible feedback, navigation behavior, failure recovery, and what must be enforced by the backend.' },
    },
    {
        id: 'angular-quality', number: '04', tag: 'Quality',
        title: 'Testing & Accessibility',
        description: 'Test component contracts and user workflows; build accessible behavior into UI.',
        intro: 'Explain how tests protect behavior and how accessibility is verified beyond automated checks.',
        sections: [
            {
                heading: 'Testing layers', blocks: [{
                    type: 'list', items: [
                        { label: 'Unit', text: 'cover pure calculations, transformations, and state transitions.' },
                        { label: 'Component', text: 'verify inputs, outputs, rendered semantics, keyboard behavior, and states.' },
                        { label: 'Integration', text: 'validate routing, dependency injection, forms, and data-access interactions.' },
                        { label: 'Browser end-to-end', text: 'protect critical user journeys across real browser behavior.' },
                    ]
                }]
            },
            {
                heading: 'Accessibility essentials', blocks: [{
                    type: 'list', items: [
                        'Prefer semantic elements and provide accessible names and descriptions.',
                        'Support keyboard operation, visible focus, logical order, and focus restoration for overlays.',
                        'Connect validation errors and status messages to controls.',
                        'Combine automated checks with keyboard and screen-reader testing.',
                    ]
                }]
            },
            { heading: 'Write resilient tests', blocks: [{ type: 'paragraph', text: 'Assert user-visible behavior and accessible roles instead of private template structure. Keep tests deterministic, isolate service boundaries, and include error and loading cases. Automation catches only a subset of accessibility defects, so include manual assessment.' }] },
        ],
        callout: { label: 'Interview tip', text: 'Describe one defect a test would catch, one issue automation would miss, and how the team would prevent recurrence.' },
    },
    {
        id: 'angular-architecture', number: '05', tag: 'Architecture',
        title: 'Angular Application Architecture',
        description: 'Feature boundaries, libraries, version upgrades, security, and production readiness.',
        intro: 'Discuss how an Angular application can evolve safely across teams, releases, and changing product requirements.',
        sections: [
            {
                heading: 'Feature and library boundaries', blocks: [
                    { type: 'paragraph', text: 'Organize around product capabilities and ownership. Keep public APIs explicit, avoid circular dependencies, and separate domain decisions from shared UI. Use libraries when they provide a stable contract and clear maintenance ownership—not just to move files.' },
                    {
                        type: 'list', items: [
                            'Define supported Angular and TypeScript versions and publish compatibility ranges.',
                            'Use code splitting and tree-shakeable exports, then measure consumer bundles.',
                            'Document deprecation windows and provide codemods for safe mechanical migrations.',
                        ]
                    },
                ]
            },
            {
                heading: 'Security and resilience', blocks: [{
                    type: 'list', items: [
                        'Treat client-side guards as navigation UX, not authorization.',
                        'Never ship secrets in configuration included in the browser bundle.',
                        'Use Angular sanitization correctly; do not trust arbitrary HTML.',
                        'Define retry, offline, and error-recovery behavior by operation.',
                    ]
                }]
            },
            { heading: 'Upgrade strategy', blocks: [{ type: 'paragraph', text: 'Inventory dependencies, custom builders, browser support, and critical workflows. Apply migrations incrementally, test representative consuming applications, and coordinate releases with owners. Track build health, regressions, and blocked teams; package upgrades alone do not prove success.' }] },
        ],
        callout: { label: 'Architecture answer flow', text: 'State consumers and constraints → draw feature boundaries → explain contracts and delivery → address failure and security → describe migration, ownership, and measures.' },
    },
]
