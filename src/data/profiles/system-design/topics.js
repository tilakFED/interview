export const systemDesignTopics = [
    {
        id: 'architecture',
        number: '01',
        tag: 'Foundation',
        title: 'Design System Architecture',
        description: 'System foundations, tokens, theming, isolation, composition, and Web Components.',
        intro: 'Prepare to explain how a system turns design intent into reliable, reusable product experiences—not just a collection of components.',
        sections: [
            {
                heading: 'What is a design system?',
                blocks: [{ type: 'paragraph', text: 'A design system is a maintained product platform: shared principles, tokens, components, patterns, documentation, tooling, and governance. A component library is one implementation asset within it. A system also defines how teams discover, adopt, compose, contribute to, and safely upgrade those assets.' }],
            },
            {
                heading: 'Architecture layers',
                blocks: [{
                    type: 'list', ordered: true, items: [
                        { label: 'Foundations', text: 'color, typography, spacing, motion, elevation, iconography, and design principles.' },
                        { label: 'Tokens', text: 'canonical values separated from use through semantic roles such as surface, text, and status.' },
                        { label: 'Primitives and components', text: 'accessible behaviors, composable APIs, and documented states.' },
                        { label: 'Patterns', text: 'validated compositions for recurring workflows and domain needs.' },
                        { label: 'Adapters and delivery', text: 'framework-friendly packages, documentation, release automation, and migration tools.' },
                        { label: 'Governance', text: 'ownership, contribution rules, support, deprecation, and feedback loops.' },
                    ]
                }],
            },
            {
                heading: 'How would you architect a design system for 100+ products?',
                blocks: [
                    { type: 'paragraph', label: 'Answer', text: 'I would treat it as a versioned internal platform with a stable shared foundation, but not assume every product needs identical UI or must migrate at the same time. First, segment products by framework, brand, accessibility needs, criticality, and release constraints. Then establish a small set of well-owned shared contracts and let products adopt them incrementally through supported packages.' },
                    { type: 'paragraph', label: 'Concrete example', text: 'Imagine 120 products: 70 React apps, 35 Angular apps, and 15 legacy applications. Publish token packages and framework-specific component packages with compatible release policies. Pilot a representative React and Angular app, then migrate groups in waves. Give the legacy apps a token/CSS integration path while they plan upgrades, instead of blocking them on a full rewrite. Track package versions, deprecated API use, adoption blockers, accessibility defects, and upgrade progress by product cohort.' },
                    { type: 'paragraph', text: 'At this scale, the operating model is part of the architecture: named maintainers, contribution rules, support channels, release notes, migration tools, and a roadmap informed by product teams. I would optimize for a reliable paved road and clear exceptions—not central approval for every local UI decision.' },
                ],
            },
            {
                heading: 'What layers would exist in the architecture?',
                blocks: [
                    { type: 'paragraph', text: 'A practical layered model keeps the stable shared foundation separate from product-specific behavior:' },
                    {
                        type: 'list', ordered: true, items: [
                            { label: 'Principles and governance', text: 'accessibility bar, design principles, ownership, contribution process, and support policy.' },
                            { label: 'Design foundations', text: 'raw values, typography, iconography, motion, and layout scales.' },
                            { label: 'Semantic tokens and themes', text: 'roles such as color.text.primary or space.control.inline, mapped to brand or product themes.' },
                            { label: 'Primitives', text: 'low-level accessible interaction patterns such as focus management, portals, and keyboard handling.' },
                            { label: 'Components', text: 'reusable controls and display elements with stable APIs, such as buttons, dialogs, and data tables.' },
                            { label: 'Patterns and templates', text: 'validated compositions for recurring workflows, such as search/filter/results or a patient summary header.' },
                            { label: 'Framework adapters and delivery', text: 'React and Angular bindings, package distribution, documentation, testing, and upgrade tooling.' },
                            { label: 'Product application layer', text: 'domain workflows, business rules, data fetching, and product-specific composition.' },
                        ]
                    },
                    { type: 'paragraph', label: 'Concrete example', text: 'A shared Button owns accessible states, sizing, and visual variants; a product’s “Approve referral” action owns authorization, API mutation, and confirmation workflow. The system provides the reliable control, not the business decision.' },
                ],
            },
            {
                heading: 'How do you separate tokens, components, and application logic?',
                blocks: [
                    { type: 'paragraph', text: 'Use package and API boundaries that make ownership clear. Tokens describe design decisions, components implement reusable presentation and interaction behavior, and applications compose those pieces around domain data and rules.' },
                    {
                        type: 'table', headers: ['Layer', 'Owns', 'Concrete example'], rows: [
                            ['Tokens', 'Named design values and theme mappings', 'color.status.critical maps to the approved critical color in each theme.'],
                            ['Component', 'Reusable UI, semantics, interaction, and visual states', 'Alert renders a critical message with an icon and accessible announcement behavior.'],
                            ['Application', 'Domain meaning, permissions, data, and workflow', 'A product decides whether a lab result is critical, loads the result, and chooses the message for the alert.'],
                        ]
                    },
                    { type: 'paragraph', text: 'For example, avoid a generic design-system PatientRiskPanel that embeds one product’s risk rules. Instead, the product computes the domain state and composes shared Card, Badge, and Alert components. If a pattern recurs across several products, promote it only after its contract and variation points are understood.' },
                ],
            },
            {
                heading: 'Architectural principles to establish first',
                blocks: [
                    {
                        type: 'list', items: [
                            { label: 'Accessibility by default', text: 'components meet defined keyboard and semantic expectations; exceptions are explicit and tracked.' },
                            { label: 'Stable public contracts', text: 'document supported APIs, define deprecation windows, and use semantic versioning.' },
                            { label: 'Composition over product-specific configuration', text: 'expose a few intentional extension points rather than dozens of props for every possible case.' },
                            { label: 'Framework pragmatism', text: 'share foundations and contracts; choose Web Components, adapters, or native implementations according to consumer evidence.' },
                            { label: 'Progressive adoption', text: 'support coexistence and migration rather than requiring a synchronized rewrite.' },
                            { label: 'Performance budgets', text: 'keep packages modular, avoid unnecessary dependencies, and measure production output.' },
                            { label: 'Governed contribution', text: 'assign maintainers, document decision rights, and provide a path for teams to contribute.' },
                            { label: 'Observable outcomes', text: 'monitor quality, adoption friction, and user impact without treating component counts as success.' },
                        ]
                    },
                    { type: 'paragraph', label: 'Concrete example', text: 'Establish a rule that a new component proposal includes a usage need from multiple products, an accessibility interaction spec, API review, bundle impact, and a maintenance owner. This prevents the shared library becoming a dumping ground for one-off screens.' },
                ],
            },
            {
                heading: 'Biggest architectural mistakes—and how to avoid them',
                blocks: [
                    {
                        type: 'list', items: [
                            { label: 'Building a component catalog before understanding consumers', text: 'run product interviews and pilots; prioritize repeated needs and real workflows.' },
                            { label: 'Putting business logic in shared components', text: 'keep domain decisions in product code and reusable UI behavior in the system.' },
                            { label: 'Over-generalizing APIs', text: 'avoid giant components with dozens of flags; split composable primitives or define a smaller supported contract.' },
                            { label: 'Assuming one implementation fits every framework', text: 'validate interoperability, SSR, forms, events, and developer experience; use adapters where useful.' },
                            { label: 'Breaking consumers without a migration path', text: 'use deprecation periods, codemods for mechanical changes, compatibility tests, and coordinated releases.' },
                            { label: 'Ignoring accessibility and performance until late', text: 'set acceptance criteria and automated budgets from the first releases, backed by manual review and profiling.' },
                            { label: 'Confusing adoption with success', text: 'package downloads do not prove value; measure successful use, upgrade health, defects, delivery friction, and feedback.' },
                            { label: 'No ownership or governance', text: 'without maintainers and decision paths, APIs fragment and stale packages accumulate.' },
                        ]
                    },
                    { type: 'paragraph', label: 'Example answer', text: 'I have seen teams centralize every visual detail into one configurable component. It initially looked reusable, but every product needed different combinations, the API became hard to understand, and changes risked regressions across consumers. I would instead define a stable accessible primitive, compose product patterns outside it, and only standardize a pattern when usage evidence shows it is genuinely shared. Adapt this example to an experience you have actually encountered.' },
                ],
            },
            {
                heading: 'Cross-framework example: React and Angular',
                blocks: [
                    { type: 'paragraph', text: 'Start with shared token sources and component contracts. Evaluate Web Components for components where portability and encapsulation matter; publish React and Angular adapters when they materially improve framework ergonomics, typing, forms integration, or event handling. Keep implementation choice evidence-based—framework-native implementations may be preferable for complex framework-specific behavior.' },
                    { type: 'paragraph', text: 'Validate with real consumer applications, accessibility tests, SSR and hydration tests where applicable, and bundle analysis. Treat the public contract as the stable layer, then automate versioning, documentation, compatibility checks, and release notes.' },
                ],
            },
            {
                heading: 'Key trade-offs to discuss',
                blocks: [{
                    type: 'list', items: [
                        { label: 'Shadow DOM', text: 'style isolation and predictable internals versus theming, global styling, tooling, and debugging complexity.' },
                        { label: 'Shared implementation', text: 'lower duplication versus adapter overhead and the risk of a lowest-common-denominator API.' },
                        { label: 'Central control', text: 'consistency and safety versus slower local iteration; use contribution paths and clear ownership to balance both.' },
                    ]
                }],
            },
        ],
        callout: { label: 'Interview structure', text: 'State the consumer and scale constraints, describe the layers, explain why each boundary exists, identify trade-offs, and finish with how you would validate adoption and quality.' },
        relatedQuestionId: 'q1',
    },
    {
        id: 'frameworks', number: '02', tag: 'Frameworks', title: 'React & Angular Architecture',
        description: 'State, micro-frontends, change detection, Signals, RxJS, and legacy-version support.',
        intro: 'Focus on the boundaries between shared UI contracts and framework-specific composition, lifecycle, state, and rendering.',
        sections: [
            {
                heading: 'React architecture prompts', blocks: [{
                    type: 'list', items: [
                        { label: 'Composition', text: 'favor explicit props, slots/children, and small components; document supported extension points rather than exposing internals.' },
                        { label: 'Context', text: 'suitable for relatively stable, scoped dependencies such as theme or locale. High-frequency updates, broad provider scope, and unclear ownership can cause unnecessary work; split contexts or use purpose-built state tools when justified.' },
                        { label: 'State choices', text: 'local state for local interactions; Context for low-frequency shared dependencies; Redux when predictable centralized transitions, tooling, and team conventions are valuable; Zustand or similar stores for simpler external state. Choose against requirements, not trend.' },
                        { label: 'Micro-frontends', text: 'define ownership and integration contracts, isolate deployment where needed, and avoid accidental duplicated runtimes or conflicting versions.' },
                    ]
                }]
            },
            {
                heading: 'Angular architecture prompts', blocks: [{
                    type: 'list', items: [
                        'Explain change detection and how immutable updates, OnPush, and Signals can make update boundaries more explicit.',
                        'Use RxJS for asynchronous streams and composition; define subscription cleanup and avoid turning every value into a stream without need.',
                        'Use lazy loading to establish route or feature boundaries, and standalone components where supported by the application’s Angular version and migration plan.',
                        'Integrate custom elements deliberately: property binding, custom events, schemas, forms, SSR, and accessibility need verification in the target Angular versions.',
                    ]
                }]
            },
            {
                heading: 'Supporting multiple Angular versions', blocks: [
                    { type: 'paragraph', text: 'First establish the actual supported-version matrix and which capabilities are available in each version. Keep shared design tokens and stable public contracts separate from framework wrappers. Build, type-check, and test adapters against each supported version in CI; publish compatibility ranges and clear peer dependencies. Where the maintenance cost becomes unsafe, publish a version support policy and migration timeline rather than implying indefinite compatibility.' },
                    { type: 'paragraph', text: 'For a React/Angular multi-framework system, test real integration examples and event/property behavior, not just the underlying custom element. Provide framework-specific documentation and adapters where they reduce friction.' },
                ]
            },
            { heading: 'Shared state across micro-frontends', blocks: [{ type: 'paragraph', text: 'Prefer explicit, versioned contracts and keep state local unless multiple independently deployed experiences genuinely need it. Possible boundaries include URL state, backend persistence, or a small shared event/API contract. Define ownership, lifecycle, error handling, and compatibility. Avoid a hidden global store that couples release schedules.' }] },
        ],
        callout: { label: 'Practice question', text: '“How do you support React and Angular without maintaining two drifting systems?” Answer with shared foundations and contracts, selective adapters, consumer validation, version policy, and feedback-driven governance.' },
    },
    {
        id: 'api-packages', number: '03', tag: 'Packages', title: 'API Design & Monorepos',
        description: 'SemVer, deprecation, package boundaries, Nx, Turborepo, and Lerna.',
        intro: 'A package ecosystem is a product interface. Discuss compatibility, ownership, discoverability, and how changes reach consumers safely.',
        sections: [
            {
                heading: 'Semantic versioning', blocks: [
                    {
                        type: 'table', headers: ['Version part', 'Meaning', 'Example'], rows: [
                            ['MAJOR', 'Incompatible public API change', '2.0.0'], ['MINOR', 'Backward-compatible functionality', '1.1.0'], ['PATCH', 'Backward-compatible fix', '1.0.1'],
                        ]
                    },
                    { type: 'paragraph', text: 'Versioning only works when the public API is explicit and compatibility is tested. Document exceptions and support windows.' },
                ]
            },
            {
                heading: 'Deprecations and breaking changes', blocks: [{
                    type: 'list', ordered: true, items: [
                        'Confirm the user problem and identify impacted packages and consumers.',
                        'Mark the old API as deprecated with a replacement and removal timeline.',
                        'Provide migration guidance, examples, codemods where safe, and compatibility checks.',
                        'Coordinate with consumer teams, announce in changelogs and release channels, and monitor migration progress.',
                        'Remove only according to the published policy; keep a rollback or support plan for critical consumers.',
                    ]
                }]
            },
            { heading: 'Package boundaries', blocks: [{ type: 'paragraph', text: 'Organize by stable capability and consumer need: token packages, framework adapters, components, icons, and optional integrations. Declare peer dependencies intentionally, avoid duplicate foundational dependencies, publish tree-shakeable artifacts, and define what is public versus internal. Consider independent versioning only where it improves release autonomy without making compatibility difficult to understand.' }] },
            {
                heading: 'Monorepo choices', blocks: [
                    { type: 'paragraph', text: 'Nx, Turborepo, and Lerna can support coordinated development, caching, dependency graphs, or publishing workflows; compare current capabilities against the team’s needs rather than selecting by name.' },
                    {
                        type: 'list', items: [
                            { label: 'Advantages', text: 'shared tooling, atomic cross-package changes, consistent checks, and easier dependency visibility.' },
                            { label: 'Costs', text: 'larger CI/configuration surface, permission boundaries, release complexity, and repository-wide blast radius.' },
                            { label: 'At hundreds of components', text: 'group packages by domain and lifecycle, define owners, automate affected-project CI, generate catalogs/docs, and enforce API and dependency rules.' },
                        ]
                    },
                ]
            },
        ],
        callout: { label: 'Strong answer', text: 'Describe how a consumer learns what changed, whether they must act, how they migrate, and how the platform team verifies compatibility.' },
    },
    {
        id: 'testing', number: '04', tag: 'Quality', title: 'Testing Strategy',
        description: 'Unit, component, end-to-end, accessibility, visual regression, and release gates.',
        intro: 'Design test coverage around user-visible contracts and risk. No single test layer can prove component quality.',
        sections: [
            {
                heading: 'Testing layers', blocks: [{
                    type: 'list', items: [
                        { label: 'Unit', text: 'test pure logic, state transitions, formatting, and edge cases with Jest or Vitest.' },
                        { label: 'Component', text: 'test semantics, keyboard behavior, states, and user workflows in realistic DOM environments; React Testing Library is one option.' },
                        { label: 'Storybook', text: 'make states discoverable and reviewable; stories can also support interaction and visual checks.' },
                        { label: 'End-to-end', text: 'use Playwright or Cypress for critical cross-page flows and real browser integration.' },
                        { label: 'Accessibility', text: 'combine automated axe checks with keyboard, screen reader, and expert assessment.' },
                        { label: 'Visual regression', text: 'tools such as Chromatic or Percy can flag unexpected rendering changes; review baselines intentionally.' },
                    ]
                }]
            },
            {
                heading: 'Quality gate before publishing', blocks: [{
                    type: 'list', ordered: true, items: [
                        'Build, lint, type-check, and validate package exports.',
                        'Run unit and component interaction tests across supported environments.',
                        'Run critical browser integration and accessibility checks.',
                        'Review visual changes and accessible states against approved baselines.',
                        'Check bundle-size budgets, dependency/license policy, and security findings.',
                        'Generate documentation and release notes; require owner review and publish provenance.',
                    ]
                }]
            },
            { heading: 'Test the contract', blocks: [{ type: 'paragraph', text: 'For framework-agnostic components, validate custom-element registration, properties, events, slots, forms behavior, and teardown. For adapters, verify idiomatic framework binding and lifecycle behavior. Test supported browser and framework versions with a documented matrix. Prefer assertions on accessible roles and behavior over private DOM structure, which is more likely to change.' }] },
        ],
        callout: { label: 'Quality gate answer', text: 'Define severity-based blocking criteria, make failures actionable, assign ownership, and provide a fast local path to reproduce CI results.' },
    },
    {
        id: 'accessibility', number: '05', tag: 'Inclusive design', title: 'Accessibility',
        description: 'WCAG, ARIA, keyboard interaction, screen readers, accessible modals, and tables.',
        intro: 'Accessibility is a product quality and safety requirement. Build it into foundations, component APIs, composition guidance, and release processes.',
        sections: [
            {
                heading: 'Core preparation areas', blocks: [{
                    type: 'list', items: [
                        { label: 'WCAG', text: 'understand the applicable conformance target and the principles of perceivable, operable, understandable, and robust experiences. Confirm the required version and jurisdiction for the product.' },
                        { label: 'Semantics', text: 'use native HTML elements where possible; ARIA supplements semantics but does not replace behavior.' },
                        { label: 'Keyboard', text: 'ensure visible focus, logical order, no keyboard traps, and expected interaction patterns.' },
                        { label: 'Screen readers', text: 'expose meaningful names, roles, states, and status changes; verify with actual assistive technology.' },
                        { label: 'Visual access', text: 'check contrast, zoom/reflow, non-color cues, motion preferences, and text resizing.' },
                    ]
                }]
            },
            {
                heading: 'Accessible modal checklist', blocks: [{
                    type: 'list', items: [
                        'Use a dialog pattern with a clear accessible name and appropriate modal semantics.',
                        'Move focus into the dialog when opened and keep keyboard focus within it while modal.',
                        'Provide an obvious close action, support Escape when appropriate, and return focus to the trigger.',
                        'Prevent background interaction and scrolling appropriately without hiding the dialog from assistive technology.',
                        'Test nested dialogs, validation errors, zoom, mobile layouts, and screen-reader announcements.',
                    ]
                }]
            },
            { heading: 'Accessible data tables', blocks: [{ type: 'paragraph', text: 'Use a real table for tabular data. Provide a concise caption or accessible name; mark header cells with appropriate scope and associate complex multi-level headers carefully. Ensure keyboard access for interactive controls, provide understandable sorting state, and avoid relying on color alone. For very large datasets, virtualization must preserve reading order and expose enough context to assistive technology.' }] },
            { heading: 'Scaling the practice', blocks: [{ type: 'paragraph', text: 'Set acceptance criteria and component ownership, add automated checks for common failures, and include accessibility review in design and PR workflows. Automated tools find only a subset of issues; supplement them with keyboard-only and screen-reader testing, expert audits, and feedback from disabled users. Track defects through remediation and publish known limitations.' }] },
        ],
        callout: { label: 'Interview reminder', text: 'Distinguish conformance testing from real usability. Describe who is involved, how defects are prioritized, and how shared components prevent repeated barriers.' },
    },
    {
        id: 'performance', number: '06', tag: 'Engineering', title: 'Performance Engineering',
        description: 'Core Web Vitals, bundle analysis, rendering, virtualization, and profiling.',
        intro: 'Start from measured user impact, establish a baseline, locate the bottleneck, and validate improvements under representative conditions.',
        sections: [
            {
                heading: 'Metrics and diagnosis', blocks: [
                    { type: 'paragraph', text: 'Know First Contentful Paint (FCP), Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Time to Interactive (TTI) as commonly discussed measures; choose current, user-centered metrics and field data appropriate to the platform. Separate lab diagnostics from real-user experience and report meaningful segments, not just averages.' },
                    { type: 'paragraph', text: 'Use browser performance tools, application profiling, network traces, and bundle analyzers. Compare cold and warm loads, device classes, and representative workflows. Tie each optimization to a hypothesis and a measured outcome.' },
                ]
            },
            {
                heading: 'If a React app slows after adding 500 design-system components', blocks: [{
                    type: 'list', ordered: true, items: [
                        'Clarify whether the issue is initial load, interaction latency, memory, or build performance.',
                        'Inspect route chunks and dependency duplication; confirm tree-shaking and code splitting actually work.',
                        'Profile React commits and browser main-thread work to identify unnecessary re-renders or expensive effects.',
                        'Check DOM size, event listeners, retained memory, and repeated style/layout work.',
                        'Virtualize long lists only when appropriate, preserving keyboard and assistive-technology usability.',
                        'Apply a targeted fix, add a regression budget or performance test, and compare production-like results.',
                    ]
                }]
            },
            {
                heading: 'Optimization toolkit', blocks: [{
                    type: 'list', items: [
                        'Code split by route and defer optional features.',
                        'Use tree-shakeable package exports and avoid broad imports that pull unused modules.',
                        'Deduplicate dependencies, optimize assets, and ship polyfills only where required.',
                        'Reduce unnecessary render work; memoization is useful only when profiling shows a benefit.',
                        'Set bundle and runtime budgets in CI, with clear ownership and exceptions.',
                    ]
                }]
            },
        ],
        callout: { label: 'Answer pattern', text: 'Define the user-facing symptom, show how you would measure it, name likely bottleneck categories, and explain how you would prove the fix without harming accessibility.' },
    },
    {
        id: 'governance', number: '07', tag: 'Adoption', title: 'Governance & Adoption',
        description: 'Scale a system across 100 products with migration support and measurable outcomes.',
        intro: 'A design system scales through trust, useful defaults, timely support, and visible outcomes—not mandates alone.',
        sections: [
            {
                heading: 'Adoption strategy for 100 products', blocks: [{
                    type: 'list', ordered: true, items: [
                        'Secure executive sponsorship and agree on product outcomes, scope, and decision rights.',
                        'Inventory products, owners, technology stacks, accessibility needs, and migration constraints.',
                        'Recruit representative pilot teams; validate APIs, documentation, and support before broad rollout.',
                        'Publish a roadmap, contribution model, compatibility policy, and migration playbooks.',
                        'Offer codemods for repeatable changes, office hours, training, and clear escalation channels.',
                        'Roll out in cohorts with rollback options and release coordination for high-risk consumers.',
                    ]
                }]
            },
            {
                heading: 'Measure what matters', blocks: [
                    {
                        type: 'list', items: [
                            { label: 'Reach', text: 'active products and teams, not only package downloads.' },
                            { label: 'Health', text: 'supported-version currency, upgrade completion, and deprecated API usage.' },
                            { label: 'Quality', text: 'accessibility issues, visual consistency, defect trends, and support load.' },
                            { label: 'Outcomes', text: 'time to deliver common UI, reduced duplicated maintenance, and developer satisfaction.' },
                        ]
                    },
                    { type: 'paragraph', text: 'Use privacy-conscious data and pair quantitative measures with interviews. Interpret metrics in context—adoption is not valuable if the system makes products slower or less usable.' },
                ]
            },
            { heading: 'Governance that enables contribution', blocks: [{ type: 'paragraph', text: 'Define maintainers and decision paths, component acceptance criteria, contribution review expectations, support levels, and how exceptions are handled. Provide a lightweight proposal process for broad architectural changes. Make decisions and rationale searchable. Product teams should have a route to contribute without fragmenting the public contract.' }] },
        ],
        callout: { label: 'Senior-level signal', text: 'Explain how incentives and service quality change team behavior, and how governance protects accessibility and consistency while preserving local product needs.' },
    },
    {
        id: 'ai-engineering', number: '08', tag: 'AI', title: 'AI-Assisted Engineering',
        description: 'Useful workflows, privacy boundaries, human review, and quality safeguards.',
        intro: 'Discuss AI as a tool within an accountable engineering workflow. Be concrete about the tasks, data boundaries, review, and evidence of value.',
        sections: [
            {
                heading: 'Useful bounded workflows', blocks: [
                    {
                        type: 'list', items: [
                            'Drafting tests from an agreed component contract, then reviewing edge cases and assertions.',
                            'Explaining unfamiliar code or locating relevant internal documentation.',
                            'Generating first drafts of examples, release notes, or migration documentation.',
                            'Supporting repetitive migration work with generated changes that are validated by tests and human review.',
                            'Summarizing code changes for reviewers without treating the summary as proof of correctness.',
                        ]
                    },
                    { type: 'paragraph', text: 'Examples of tools include GitHub Copilot, ChatGPT, Cursor, and Claude; availability and data handling depend on organizational configuration and policy.' },
                ]
            },
            {
                heading: 'Safe introduction plan', blocks: [{
                    type: 'list', ordered: true, items: [
                        'Choose a low-risk pilot and define permitted tools, accounts, and data classes.',
                        'Do not submit sensitive data to unapproved services; clarify retention, access, and privacy terms.',
                        'Treat generated code as untrusted draft output. Review behavior, security, accessibility, dependencies, and licensing under the normal process.',
                        'Run existing quality gates and add scanning appropriate to the change; never allow AI to bypass required approvals.',
                        'Train users on limitations, hallucinations, prompt injection risks in retrieved content, and reporting routes.',
                        'Measure task quality, rework, defects, and developer feedback before expanding usage.',
                    ]
                }]
            },
            { heading: 'What to say about impact', blocks: [{ type: 'paragraph', text: 'Use an honest example: identify the task, how AI was used, what you checked manually, what changed in cycle time or quality, and what did not work. Avoid claiming productivity gains without a baseline. Emphasize accountability remains with the engineer and organization.' }] },
        ],
        callout: { label: 'Interview question', text: '“How do you safely introduce AI-assisted development?” Lead with governance and data handling, then human review and quality controls, followed by a measured pilot.' },
    },
    {
        id: 'leadership', number: '09', tag: 'Leadership', title: 'Leadership & Behavioral Questions',
        description: 'Prepare evidence-based STAR stories about decisions, conflict, failure, and influence.',
        intro: 'Prepare concise stories that show judgment, collaboration, accountability, and influence. Use real examples; do not invent metrics or outcomes.',
        sections: [
            {
                heading: 'STAR, with evidence', blocks: [
                    {
                        type: 'list', items: [
                            { label: 'Situation', text: 'context, stakeholders, constraints, and why the issue mattered.' },
                            { label: 'Task', text: 'your responsibility and the decision or outcome needed.' },
                            { label: 'Action', text: 'alternatives considered, evidence gathered, people involved, trade-offs, and what you personally did.' },
                            { label: 'Result', text: 'observable outcome, how it was measured, lessons, and what you would change next time.' },
                        ]
                    },
                    { type: 'paragraph', text: 'Keep the setup short and spend most of the answer on your reasoning and actions.' },
                ]
            },
            {
                heading: 'Build a story portfolio', blocks: [{
                    type: 'list', items: [
                        { label: 'Architecture decision', text: 'a direction you changed after new evidence.' },
                        { label: 'Conflict', text: 'UX, product, or engineering priorities differed; explain how you resolved the problem.' },
                        { label: 'Failure', text: 'a decision that did not work, how you owned it, and how you corrected course.' },
                        { label: 'Mentoring', text: 'how you helped an engineer grow through specific opportunities and feedback.' },
                        { label: 'Influence', text: 'how you drove a cross-team change without direct authority.' },
                        { label: 'Scale', text: 'how you turned an isolated solution into a repeatable platform capability.' },
                    ]
                }]
            },
            { heading: '“Changed architectural direction based on evidence”', blocks: [{ type: 'paragraph', text: 'Explain the initial hypothesis, the evidence that challenged it (prototype, production telemetry, user research, accessibility review, or operational data), and how you compared alternatives. Describe how you aligned stakeholders, managed migration costs, and measured the new direction. Be candid about uncertainty and residual trade-offs.' }] },
        ],
        callout: { label: 'Preparation exercise', text: 'Write a one-line headline for each story, list the evidence and your specific contribution, then practice a two-minute version with a clear result.' },
    },
    {
        id: 'system-design', number: '10', tag: 'System design', title: 'Design System Platform',
        description: 'Practice a platform design round covering repositories, CI/CD, publishing, and multi-framework delivery.',
        intro: 'Treat the round as a platform design exercise: discover requirements first, propose boundaries, then reason about delivery, scale, and operations.',
        sections: [
            {
                heading: 'Clarify requirements', blocks: [{
                    type: 'list', items: [
                        'Who are the consumers, how many products and teams, and which frameworks and versions?',
                        'Which browsers, accessibility standards, branding/theming needs, and deployment models apply?',
                        'What is the release cadence, compatibility expectation, contribution model, and support capacity?',
                        'What outcomes define success: consistency, delivery speed, accessibility, reliability, or cost?',
                    ]
                }]
            },
            {
                heading: 'High-level platform components', blocks: [{
                    type: 'list', ordered: true, items: [
                        { label: 'Source of truth', text: 'design principles, token definitions, component contracts, and ownership metadata.' },
                        { label: 'Build and test pipeline', text: 'linting, type checks, component and browser tests, accessibility checks, visual review, bundle budgets, and security checks.' },
                        { label: 'Artifact publishing', text: 'versioned packages, provenance, changelogs, release channels, and rollback procedures.' },
                        { label: 'Documentation portal', text: 'searchable API reference, interactive examples, accessibility guidance, support policy, and migration docs.' },
                        { label: 'Framework delivery', text: 'shared foundations with carefully selected Web Components and framework adapters based on validated consumer needs.' },
                        { label: 'Adoption feedback', text: 'privacy-conscious usage signals, consumer feedback, issue triage, and roadmap planning.' },
                    ]
                }]
            },
            { heading: 'Multi-framework strategy', blocks: [{ type: 'paragraph', text: 'Keep design tokens and behavioral/accessibility contracts shared. Use custom elements when browser-native portability provides value, while supplying React and Angular integrations for framework-specific ergonomics where needed. Test properties, events, forms, SSR/hydration, theming, and supported version combinations in representative applications. Publish a compatibility matrix and deprecation policy.' }] },
            { heading: 'Reliability and evolution', blocks: [{ type: 'paragraph', text: 'Use staged or canary releases for high-risk changes, automated compatibility checks, and clear rollback procedures. Track package and documentation health, release failures, accessibility defects, supported-version usage, and consumer satisfaction. Establish maintainers and response expectations; a platform’s operational model is part of its architecture.' }] },
        ],
        callout: { label: 'System-design flow', text: 'Clarify constraints → define success → draw layers and interfaces → walk through a component change from design to consumer → address failure modes and scale → explain governance and metrics.' },
    },
]
