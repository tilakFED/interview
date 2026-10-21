export const interviewQuestions = {
    'How would you architect a design system supporting React and Angular?': {
        id: 'q1',
        answer: [
            {
                type: 'paragraph',
                text: 'I would separate the system into framework-agnostic foundations and framework-specific integration layers. The shared foundation would include design tokens, visual assets, accessibility requirements, and documented interaction patterns. Components could be implemented as Web Components where cross-framework reuse provides clear value, with React and Angular packages providing ergonomic bindings, typed APIs, and framework conventions.',
            },
            {
                type: 'paragraph',
                text: 'I would publish independently versioned packages, establish clear ownership, and automate builds, tests, documentation, and releases. I would validate the APIs in representative React and Angular applications before broad adoption. The key trade-off is not forcing every component into one implementation model: teams should share the contract and design language while choosing implementation approaches that fit the component and consumer needs.',
            },
        ],
    },
    'Why Web Components?': {
        id: 'q2',
        answer: [
            {
                type: 'paragraph',
                text: 'Web Components offer browser-native custom elements and Shadow DOM, which can provide a stable integration boundary across frameworks and reduce the need to maintain duplicate implementations. They are useful when a component must be consumed by React, Angular, and non-framework applications.',
            },
            {
                type: 'paragraph',
                text: 'They are not automatically the best choice for every component. I would assess framework interoperability, server-side rendering, accessibility, styling and theming, bundle size, and developer experience. In React, for example, property and event handling may need a wrapper for a seamless API. I would adopt Web Components where cross-framework portability outweighs those costs, and keep framework-native components where they offer a better fit.',
            },
        ],
    },
    'How do you manage semantic versioning and breaking changes?': {
        id: 'q3',
        answer: [
            {
                type: 'paragraph',
                text: 'I use semantic versioning as a published compatibility contract: patch releases are backward-compatible fixes, minor releases add backward-compatible functionality, and major releases communicate breaking changes. I pair that with explicit API ownership, changelogs, migration guides, and automated compatibility checks.',
            },
            {
                type: 'paragraph',
                text: 'For a breaking change, I first validate the need and identify affected consumers. Where practical, I introduce a deprecation period, warnings, codemods, and a migration path; then I coordinate the release with consumer teams and monitor adoption. I also distinguish public APIs from internal implementation details so that teams know what is supported and what may change.',
            },
        ],
    },
    'How do you measure design-system adoption?': {
        id: 'q4',
        answer: [
            {
                type: 'paragraph',
                text: 'I would measure adoption as a combination of reach, depth, and outcomes, rather than counting package downloads alone. Useful indicators include:',
            },
            {
                type: 'list',
                items: [
                    'Reach: active products and teams using supported packages.',
                    'Depth: share of eligible UI built with system components and tokens.',
                    'Health: version currency, upgrade completion, and deprecated API usage.',
                    'Outcomes: accessibility defects, UI consistency, delivery time, and support burden.',
                ],
            },
            {
                type: 'paragraph',
                text: 'I would combine privacy-conscious telemetry and repository analysis with qualitative feedback from teams. Metrics need context: a high component count does not prove that the system is useful. I would use a baseline, set measurable goals with product teams, and review trends to prioritize improvements.',
            },
        ],
    },
    'How do you handle accessibility at scale?': {
        id: 'q5',
        answer: [
            {
                type: 'paragraph',
                text: 'I would make accessibility part of the component lifecycle, not a final audit. Define supported accessibility behaviors and acceptance criteria, build semantic HTML and keyboard interaction into primitives, and provide clear guidance for teams composing more complex experiences.',
            },
            {
                type: 'paragraph',
                text: 'Automated checks in component tests and CI can catch common issues such as missing accessible names, invalid relationships, and contrast regressions. They cannot establish that an experience is fully accessible, so I would also use keyboard-only testing, screen-reader testing, expert review, and feedback from people with disabilities. I would publish known limitations, assign owners to defects, and track remediation across releases.',
            },
        ],
    },
    'How do you reduce bundle size across hundreds of applications?': {
        id: 'q6',
        answer: [
            {
                type: 'paragraph',
                text: 'First, I would establish a baseline using representative applications and identify whether the cost comes from duplicate dependencies, oversized components, styles, or loading strategy. Then I would design packages for tree-shaking, avoid unnecessary runtime dependencies, split optional features, and ensure consumers can import only what they use.',
            },
            {
                type: 'paragraph',
                text: 'I would also deduplicate shared packages where the deployment architecture allows it, optimize assets and CSS, and avoid shipping large polyfills to browsers that do not need them. Bundle budgets and size reports in CI help prevent regressions. I would compare real production output and runtime performance—not just package-level size—before deciding which optimization has the best impact.',
            },
        ],
    },
    'Explain a major architectural decision you influenced.': {
        id: 'q7',
        answer: [
            {
                type: 'paragraph',
                text: 'Use a real example and frame it with the STAR structure: Situation—what constraint or user problem existed; Task—what decision you were responsible for influencing; Action—what options you evaluated, who you consulted, and how you tested the trade-offs; Result—what changed and how you measured it.',
            },
            {
                type: 'paragraph',
                text: 'For instance, you might describe choosing a shared component contract with framework-specific adapters over maintaining entirely separate libraries. Explain the alternatives and trade-offs honestly, including what you would revisit. End with concrete evidence such as reduced duplication, improved release coordination, better accessibility consistency, or faster delivery—use metrics only if you can substantiate them.',
            },
        ],
    },
    'How would you migrate 50+ applications to a new design system?': {
        id: 'q8',
        answer: [
            {
                type: 'paragraph',
                text: 'I would avoid a single big-bang migration. Start with an inventory of applications, owners, frameworks, current dependencies, criticality, and migration constraints. Segment them into cohorts, select representative pilots, and agree on success criteria and a support model.',
            },
            {
                type: 'paragraph',
                text: 'Then I would provide a migration toolkit: clear upgrade guides, codemods for repeatable changes, compatibility guidance, test examples, and office hours. Migrate a few pilots first, incorporate their feedback, and roll out in waves. Track progress and blockers in a shared dashboard, keep rollback options for high-risk releases, and coordinate breaking changes with product roadmaps. The goal is safe, observable progress—not simply a deadline-driven package upgrade.',
            },
        ],
    },
    'How would you introduce AI-assisted development safely?': {
        id: 'q9',
        answer: [
            {
                type: 'paragraph',
                text: 'I would begin with bounded, low-risk use cases such as explaining component APIs, generating draft examples, or helping locate migration guidance. The approved sources should be current, access-controlled, and clearly identified; the assistant should not invent guarantees or expose private code and data to unapproved services.',
            },
            {
                type: 'paragraph',
                text: 'Generated code remains a draft and must pass the same human review, tests, accessibility checks, security checks, and licensing policies as other code. I would pilot with a small group, define prohibited data and actions, document limitations, and provide a way to report incorrect or unsafe suggestions. Evaluate usefulness, error rates, and developer feedback before expanding the scope.',
            },
        ],
    },
    'How would you design EDS for 100+ products and multiple frameworks?': {
        id: 'q10',
        answer: [
            {
                type: 'paragraph',
                text: 'I would treat EDS as a platform with clear layers and governance. Establish shared foundations—tokens, accessibility standards, design principles, content guidance, and component contracts—then provide framework-specific packages or adapters where teams need native APIs. Keep the core modular so products can adopt the parts they need without taking on the entire platform.',
            },
            {
                type: 'paragraph',
                text: 'At this scale, operating model matters as much as code. Define contribution and release processes, named maintainers, support expectations, compatibility policies, and a transparent roadmap. Use automated quality gates, documentation, design-to-code alignment, and a small set of adoption and health metrics. Organize product teams into feedback channels or working groups so EDS evolves from real needs while protecting consistency and accessibility across products.',
            },
        ],
    },
}
