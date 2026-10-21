export const reactQuestionBank = {
    "What problem does React solve?": {
        "id": "react-junior-01",
        "answer": [
            {
                "type": "paragraph",
                "text": "React helps developers build interactive user interfaces using reusable, composable components. Instead of manually changing DOM elements whenever data changes, developers describe what the UI should look like for the current state. React then reconciles the new UI description with the previous one and updates the necessary parts of the DOM. This makes complex interfaces easier to maintain, test, and extend. React is a UI library, not a complete application framework, so routing, data fetching, and other concerns may require additional libraries or framework features."
            },
            {
                "type": "example",
                "text": "For example, in an e-commerce application, changing the selected product quantity should update the displayed quantity and total price. React lets you represent that behavior through state instead of manually updating multiple DOM elements."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function ProductPrice() {\n  const [quantity, setQuantity] = useState(1);\n  const price = 500;\n\n  return (\n    <div>\n      <p>Quantity: {quantity}</p>\n      <p>Total: ₹{price * quantity}</p>\n      <button onClick={() => setQuantity(q => q + 1)}>\n        Add one\n      </button>\n    </div>\n  );\n}"
            }
        ]
    },
    "What is a React component?": {
        "id": "react-junior-02",
        "answer": [
            {
                "type": "paragraph",
                "text": "A React component is a reusable, independent unit of UI. Modern React applications primarily use function components, which return React elements describing the interface. Components receive external inputs through props and can manage their own state using Hooks. Components can be composed together to build larger interfaces. A well-designed component generally has a clear responsibility and a predictable public API."
            },
            {
                "type": "example",
                "text": "For example, a ProductCard can be reused for every item in a catalogue. Each instance receives different product data through props while sharing the same layout and behavior."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function ProductCard({ product }) {\n  return (\n    <article className=\"product-card\">\n      <h2>{product.name}</h2>\n      <p>Price: ₹{product.price}</p>\n    </article>\n  );\n}\n\nfunction ProductList({ products }) {\n  return products.map(product => (\n    <ProductCard key={product.id} product={product} />\n  ));\n}"
            }
        ]
    },
    "What is JSX?": {
        "id": "react-junior-03",
        "answer": [
            {
                "type": "paragraph",
                "text": "JSX is syntax that lets JavaScript describe a React element tree with tag-like notation. It is not HTML; the build tool transforms it into JavaScript that creates React elements. Expressions can be inserted inside braces, while statements such as if/else are written outside JSX or expressed with conditional operators. JSX also uses JavaScript attribute names such as className and htmlFor."
            },
            {
                "type": "example",
                "text": "For example, a component can calculate a greeting in JavaScript and render it as a heading. The greeting remains text content and is escaped by React."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function Greeting({ name }) {\n  const message = `Welcome, ${name}`;\n  return <h1 className=\"greeting\">{message}</h1>;\n}"
            }
        ]
    },
    "What is the difference between props and state?": {
        "id": "react-junior-04",
        "answer": [
            {
                "type": "paragraph",
                "text": "Props and state both influence what a component renders, but they have different ownership models. Props are inputs supplied by a parent and should be treated as read-only by the receiving component. State is managed by a component or a shared state owner and changes over time through supported update mechanisms. Updating state schedules React to render again when necessary. If multiple components need the same state, lift it to their closest common parent."
            },
            {
                "type": "example",
                "text": "For example, a parent passes a product name through props while a quantity selector owns the selected quantity in state. Changing the product updates the prop; clicking the increment button updates local state."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function QuantitySelector({ productName }) {\n  const [quantity, setQuantity] = useState(1);\n\n  return (\n    <div>\n      <h3>{productName}</h3>\n      <p>Quantity: {quantity}</p>\n      <button onClick={() => setQuantity(value => value + 1)}>\n        Increase\n      </button>\n    </div>\n  );\n}"
            }
        ]
    },
    "Why should React state not be mutated directly?": {
        "id": "react-junior-05",
        "answer": [
            {
                "type": "paragraph",
                "text": "React state should be treated as immutable. Mutating an existing object or array changes data without creating a new reference, which can interfere with update detection, memoization, and predictable rendering. Instead, create a new object or array containing the desired change and pass it to the setter. Immutable updates make state transitions easier to reason about, debug, and test."
            },
            {
                "type": "example",
                "text": "For example, when changing a profile name, preserve the other fields and return a new object rather than assigning directly to user.name."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function Profile() {\n  const [user, setUser] = useState({\n    name: 'Alex',\n    role: 'Developer',\n  });\n\n  function updateName() {\n    setUser(current => ({ ...current, name: 'Sam' }));\n  }\n\n  return (\n    <button onClick={updateName}>\n      Update {user.name}\n    </button>\n  );\n}"
            }
        ]
    },
    "How does useState work?": {
        "id": "react-junior-06",
        "answer": [
            {
                "type": "paragraph",
                "text": "useState returns the current state and a setter. Calling the setter schedules a render; when the next value depends on the previous one, use the functional updater form. State updates are queued and batched, so do not assume the state variable changes immediately inside the current handler."
            },
            {
                "type": "example",
                "text": "A counter increments from the latest queued value, even if multiple updates happen in one event."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(value => value + 1)}>\n      Count: {count}\n    </button>\n  );\n}"
            }
        ]
    },
    "When should you use a functional state update?": {
        "id": "react-junior-07",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use a functional updater when the next state is calculated from the previous state, especially when updates may be queued or batched. React supplies the latest pending value to the updater, so it avoids relying on a value captured by an older render. This is useful for counters, toggles, and appending to arrays. Keep the updater pure and return the complete next state value."
            },
            {
                "type": "example",
                "text": "For example, an “add to cart” action should increment the latest quantity even if several additions are queued before the next render."
            }
        ]
    },
    "Why do React list items need keys?": {
        "id": "react-junior-08",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keys provide stable identity during reconciliation so React can preserve, insert, remove, or reorder items correctly. Prefer stable data IDs over array indexes for changing lists. The key is used by React and is not passed to the component as a normal prop."
            },
            {
                "type": "example",
                "text": "If a user sorts products by price, each row should retain its product identity rather than inheriting the state at its old position."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "{products.map(product => (\n  <ProductRow key={product.id} product={product} />\n))}"
            }
        ]
    },
    "Why can array indexes be poor keys?": {
        "id": "react-junior-09",
        "answer": [
            {
                "type": "paragraph",
                "text": "An array index describes a current position, not the identity of the data item occupying it. After insertion, deletion, or reordering, React can reuse a row’s component state for a different record, causing issues such as an input value appearing on the wrong item. Stable IDs keep component identity attached to the underlying record. Index keys are reasonable only for static lists that never reorder or change."
            },
            {
                "type": "example",
                "text": "For example, if a list of editable shipping addresses is sorted and each row is keyed by index, the text typed into one row can appear beside another address after sorting."
            }
        ]
    },
    "What is conditional rendering?": {
        "id": "react-junior-10",
        "answer": [
            {
                "type": "paragraph",
                "text": "Conditional rendering means choosing which React elements to include based on current props or state. It uses normal JavaScript constructs such as if statements, ternaries, and logical expressions, so the condition should remain readable and avoid ambiguous falsy values. A component can render different content for loading, success, empty, and error states. These explicit branches make the interface respond predictably to data changes."
            },
            {
                "type": "example",
                "text": "For example, a profile panel can show a sign-in prompt when there is no user, and show the user’s details after authentication."
            }
        ]
    },
    "What is a controlled input?": {
        "id": "react-junior-11",
        "answer": [
            {
                "type": "paragraph",
                "text": "A controlled input gets its displayed value from React state and reports changes through an event handler. This keeps form state explicit and enables validation and conditional UI. The input value should be updated synchronously from its change event to keep typing responsive."
            },
            {
                "type": "example",
                "text": "This pattern makes it straightforward to show validation based on the current email value."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function EmailField() {\n  const [email, setEmail] = useState('');\n  return (\n    <label>\n      Email\n      <input value={email} onChange={event => setEmail(event.target.value)} />\n    </label>\n  );\n}"
            }
        ]
    },
    "What is an uncontrolled input?": {
        "id": "react-junior-12",
        "answer": [
            {
                "type": "paragraph",
                "text": "An uncontrolled input lets the DOM maintain the current field value instead of mirroring each keystroke in React state. You can read its value through a ref or from the submitted FormData, which can be convenient for a small form with minimal live interaction. It still needs a label and normal validation, and it is less suitable when the UI must react to every edit. Choose controlled or uncontrolled behavior consistently for a given input."
            },
            {
                "type": "example",
                "text": "For example, a simple feedback form can read its message from a ref only when the user submits rather than storing every keystroke in component state."
            }
        ]
    },
    "How do you handle a form submission in React?": {
        "id": "react-junior-13",
        "answer": [
            {
                "type": "paragraph",
                "text": "Attach a handler to the form’s onSubmit event so submission works with both the button and the Enter key. Prevent the browser’s default navigation when the app handles the request, validate the data, and track pending, success, and error states. Guard against duplicate requests and preserve the user’s input when a request fails. Report validation errors in a way that is associated with the relevant fields."
            },
            {
                "type": "example",
                "text": "For example, a registration form can reject a missing email before sending a request, disable its submit button while pending, and display a server error without clearing the entered values."
            }
        ]
    },
    "How do you share state between sibling components?": {
        "id": "react-junior-14",
        "answer": [
            {
                "type": "paragraph",
                "text": "Lift the state to their nearest common parent and pass the value and callbacks through props. This gives both siblings one clear source of truth. Keep the owner as low in the tree as possible so unrelated branches do not rerender or become coupled."
            },
            {
                "type": "example",
                "text": "A search box and results list can both use query state owned by their shared SearchPage parent."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function SearchPage() {\n  const [query, setQuery] = useState('');\n  return (\n    <>\n      <SearchBox value={query} onChange={setQuery} />\n      <Results query={query} />\n    </>\n  );\n}"
            }
        ]
    },
    "When is Context useful?": {
        "id": "react-junior-15",
        "answer": [
            {
                "type": "paragraph",
                "text": "Context makes a value available to descendants without threading it through every intermediate component’s props. It is a good fit for values shared by a meaningful subtree, such as the current theme, locale, or an authentication session. A provider update can rerender consumers, so keep provider scope and value shape focused, especially for frequently changing data. Context provides transport, not a complete state-management or caching strategy."
            },
            {
                "type": "example",
                "text": "For example, a settings section can provide the chosen locale once so its nested date and currency controls can format values consistently."
            }
        ]
    },
    "What does useEffect do?": {
        "id": "react-junior-16",
        "answer": [
            {
                "type": "paragraph",
                "text": "useEffect synchronizes a component with external systems such as subscriptions, browser APIs, or network connections. Do not use it for values that can be calculated during render. The cleanup function should undo the setup so the effect remains safe when dependencies change or a component unmounts."
            },
            {
                "type": "example",
                "text": "A subscription should be removed when the component no longer needs updates."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "useEffect(() => {\n  const unsubscribe = store.subscribe(onChange);\n  return () => unsubscribe();\n}, [store, onChange]);"
            }
        ]
    },
    "Why does useEffect need a dependency array?": {
        "id": "react-junior-17",
        "answer": [
            {
                "type": "paragraph",
                "text": "The dependency array identifies the reactive values used by an effect so React knows when the external synchronization must be set up again. Include every referenced prop, state value, or component-local function that can change between renders; the Hooks lint rule helps check this. An empty array means the effect has no changing reactive dependencies, not that it should be used to avoid reruns arbitrarily. If the dependency list seems awkward, reconsider the effect’s purpose or move pure calculations into render."
            },
            {
                "type": "example",
                "text": "For example, a document-title effect should depend on the title prop so the browser title stays in sync when the page changes."
            }
        ]
    },
    "What does the cleanup function in useEffect do?": {
        "id": "react-junior-18",
        "answer": [
            {
                "type": "paragraph",
                "text": "The cleanup function reverses or releases the external work created by an effect. React invokes it before setting up the effect again with changed dependencies and when the component is removed. Cleanup prevents duplicate listeners, abandoned timers, and subscriptions continuing to update obsolete UI. It should correspond directly to the setup performed by that effect."
            },
            {
                "type": "example",
                "text": "For example, if an effect starts a timeout to show a delayed hint, its cleanup clears that timeout when the hint is no longer needed or the component unmounts."
            }
        ]
    },
    "How do you avoid stale closures in React effects?": {
        "id": "react-junior-19",
        "answer": [
            {
                "type": "paragraph",
                "text": "A closure captures the values from the render in which it was created, so an effect or callback can observe outdated data if its dependencies are incomplete. Include the reactive values it uses so React can recreate the synchronization when those values change. For values that must be read without restarting an effect, use an appropriate ref or event-oriented pattern rather than suppressing dependency checks. Prefer a functional state updater when the next state depends only on the previous state."
            },
            {
                "type": "example",
                "text": "For example, a repeating timer that displays a changing count should not keep incrementing the initial count captured when the timer was first created."
            }
        ]
    },
    "What is useRef used for?": {
        "id": "react-junior-20",
        "answer": [
            {
                "type": "paragraph",
                "text": "useRef returns a stable object whose current property can be changed without scheduling a render. It is useful for accessing a DOM node or retaining an imperative value such as a timer handle between renders. Because ref changes do not update the screen, rendered values should normally live in state instead. A ref should not be used to bypass React’s data flow for ordinary UI."
            },
            {
                "type": "example",
                "text": "For example, a search field can be focused after a dialog opens by attaching a ref to the input and calling focus from the appropriate effect."
            }
        ]
    },
    "What is the difference between useRef and useState?": {
        "id": "react-junior-21",
        "answer": [
            {
                "type": "paragraph",
                "text": "Both values persist across renders, but updating state asks React to render again while changing ref.current does not. Use state when a value determines visible output, because React must know to recalculate the UI when it changes. Use a ref for imperative handles or bookkeeping that should survive renders but does not itself affect what is displayed. This distinction keeps updates observable and predictable."
            },
            {
                "type": "example",
                "text": "For example, store the current selected tab in state so the active panel changes, but keep a pending timeout ID in a ref so the timer can be cancelled without causing a render."
            }
        ]
    },
    "What does useMemo do?": {
        "id": "react-junior-22",
        "answer": [
            {
                "type": "paragraph",
                "text": "useMemo reuses the result of a calculation on later renders while its listed dependencies remain unchanged. It is most helpful when the calculation is measurably expensive or when a stable object identity prevents avoidable work in a memoized consumer. The calculation must remain pure, and correct behavior must not depend on the cache being retained. Start with clear code and add memoization only when profiling or a concrete identity requirement justifies it."
            },
            {
                "type": "example",
                "text": "For example, a large table can memoize its filtered row set based on the rows and search term rather than scanning every row after an unrelated panel toggle."
            }
        ]
    },
    "What does useCallback do?": {
        "id": "react-junior-23",
        "answer": [
            {
                "type": "paragraph",
                "text": "useCallback returns a cached function identity until one of its dependencies changes. This can matter when passing a callback to a memoized child or when the callback is itself an effect dependency. It does not make the function execute faster, and wrapping every handler adds dependency bookkeeping without necessarily improving performance. Keep the dependency list complete so the callback uses current values."
            },
            {
                "type": "example",
                "text": "For example, a memoized toolbar may avoid rerendering when its parent updates unrelated state if it receives the same stable onSave callback."
            }
        ]
    },
    "What is a custom Hook?": {
        "id": "react-junior-24",
        "answer": [
            {
                "type": "paragraph",
                "text": "A custom Hook is a function whose name begins with use and that composes built-in or other Hooks to reuse stateful logic. It shares logic, not component instances or state automatically; each component calling it gets its own Hook state unless the Hook connects to a shared store."
            },
            {
                "type": "example",
                "text": "A useWindowWidth hook can subscribe to resize events and clean up its listener."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const update = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', update);\n    return () => window.removeEventListener('resize', update);\n  }, []);\n  return width;\n}"
            }
        ]
    },
    "What are the Rules of Hooks?": {
        "id": "react-junior-25",
        "answer": [
            {
                "type": "paragraph",
                "text": "Call Hooks only at the top level of a function component or another custom Hook, before any conditional return. Do not call them inside conditions, loops, event handlers, or nested functions, because React relies on a stable call sequence. Custom Hooks must follow the same rule when they call other Hooks. The Hooks lint rules can catch many violations during development."
            },
            {
                "type": "example",
                "text": "For example, call useState unconditionally at the component’s top level, then use an if statement to choose which JSX to return."
            }
        ]
    },
    "Why must Hooks be called in a consistent order?": {
        "id": "react-junior-26",
        "answer": [
            {
                "type": "paragraph",
                "text": "React associates each Hook’s stored data with its position in the component’s Hook call sequence. If a Hook is skipped on one render or added in a loop, later calls can line up with the wrong stored state or effect. Calling Hooks consistently lets React match each Hook to the same logical state slot on every render. This is why conditionals should control returned UI, not whether a Hook runs."
            },
            {
                "type": "example",
                "text": "For example, place useEffect before an early return for an empty result rather than calling it only when the result contains items."
            }
        ]
    },
    "What is lifting state up?": {
        "id": "react-junior-27",
        "answer": [
            {
                "type": "paragraph",
                "text": "Lifting state up means moving a piece of state from individual child components to their closest shared parent. The parent becomes the source of truth and passes the current value and update callbacks down to each child. This is useful when siblings must stay synchronized, though the state should not be moved higher than necessary. It also makes the relationship and allowed updates explicit in the component API."
            },
            {
                "type": "example",
                "text": "For example, move a selected date to a calendar page parent when both the date picker and appointment summary must display the same selection."
            }
        ]
    },
    "How do you reset a component’s state?": {
        "id": "react-junior-28",
        "answer": [
            {
                "type": "paragraph",
                "text": "A component receives fresh state when React mounts a new component identity; removing it or changing its key can therefore reset its entire local state. Use a deliberate key change when the new identity represents a different record or workflow, not as a routine refresh trick. If only particular fields should reset, update those values explicitly through their setters or reducer. This keeps reset behavior intentional and easy to understand."
            },
            {
                "type": "example",
                "text": "For example, key an edit form by the selected customer ID so switching customers starts with that customer’s values rather than retaining the previous customer’s draft."
            }
        ]
    },
    "What is a Fragment?": {
        "id": "react-junior-29",
        "answer": [
            {
                "type": "paragraph",
                "text": "A Fragment lets a component return or group multiple sibling elements without inserting an extra wrapper into the DOM. This keeps the markup structure valid and avoids unnecessary nodes that could affect layout or CSS selectors. Use the short <> syntax for ordinary grouping, or the explicit Fragment form when a list needs a key. Fragments do not create a visual or accessibility boundary by themselves."
            },
            {
                "type": "example",
                "text": "For example, a table-row component can return a pair of adjacent <td> elements without wrapping them in an invalid div."
            }
        ]
    },
    "What is prop drilling?": {
        "id": "react-junior-30",
        "answer": [
            {
                "type": "paragraph",
                "text": "Prop drilling is passing a value through several components that do not themselves need it so a deeper descendant can use it. A small number of explicit prop layers is often clear and keeps dependencies visible. When many intermediate layers only forward the same value, composition or a narrowly scoped Context may simplify the design. Avoid introducing global state solely to eliminate a short, understandable prop chain."
            },
            {
                "type": "example",
                "text": "For example, a page title passed from a route component through several layout wrappers to a deeply nested breadcrumb is a candidate for a layout-level context or a composed header."
            }
        ]
    },
    "What is component composition?": {
        "id": "react-junior-31",
        "answer": [
            {
                "type": "paragraph",
                "text": "Component composition creates a larger interface by combining smaller components with explicit props, children, or named content slots. It lets callers control structure while reusable parts own focused behavior and semantics. Composition often scales better than a single component with many interacting boolean options. The right boundary should make valid configurations easy to express and invalid ones difficult to create."
            },
            {
                "type": "example",
                "text": "For example, a Dialog can own focus and dismissal behavior while callers compose a title, body, and action buttons as its children."
            }
        ]
    },
    "How do children props work?": {
        "id": "react-junior-32",
        "answer": [
            {
                "type": "paragraph",
                "text": "When elements are nested between a component’s opening and closing tags, React passes that content to the component through its children prop. The component can render children directly, wrap them in a layout, or place them in a specific composition region. Children may be text, one element, multiple elements, or other renderable values, so the component should define its expectations. This creates flexible APIs without requiring the component to know every child’s implementation."
            },
            {
                "type": "example",
                "text": "For example, a Card can render a caller-provided heading and content inside consistent border and spacing styles."
            }
        ]
    },
    "What is an error boundary?": {
        "id": "react-junior-33",
        "answer": [
            {
                "type": "paragraph",
                "text": "An error boundary is a component-level boundary that catches errors thrown while rendering descendants or running their lifecycle methods and then shows fallback UI. It prevents a rendering failure in one region from necessarily blanking the whole application. It does not catch errors from ordinary event handlers, asynchronous callbacks, or server-side rendering, so those failures need explicit handling. Place boundaries where a meaningful recovery or isolated fallback is possible."
            },
            {
                "type": "example",
                "text": "For example, an error boundary around a recommendation widget can show “Recommendations are unavailable” while the product page remains usable."
            }
        ]
    },
    "How should a loading state be represented?": {
        "id": "react-junior-34",
        "answer": [
            {
                "type": "paragraph",
                "text": "Represent pending work as a distinct UI state rather than treating it as an empty result. Choose feedback appropriate to the task, such as a concise status message for a short request or a skeleton when preserving page structure helps. Make the status understandable to assistive technology and avoid announcing noisy progress unnecessarily. Also decide how loading transitions to success, empty, and error states."
            },
            {
                "type": "example",
                "text": "For example, a search page can keep the previous results visible while indicating that a new query is loading, instead of briefly displaying a misleading “no matches” message."
            }
        ]
    },
    "How do you make a React button accessible?": {
        "id": "react-junior-35",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use the native button element for an action so keyboard activation, focus behavior, and accessibility semantics work by default. Give it a clear accessible name, ensure focus is visible, and use the disabled or busy state accurately. Use type=\"button\" inside a form when the control should not submit it. Do not imitate a button with a clickable div unless there is an unavoidable specialized reason."
            },
            {
                "type": "example",
                "text": "For example, an icon-only close control should be a button with an accessible name such as “Close dialog,” not an unlabeled SVG click target."
            }
        ]
    },
    "What does semantic HTML mean in a React app?": {
        "id": "react-junior-36",
        "answer": [
            {
                "type": "paragraph",
                "text": "Semantic HTML means choosing elements that accurately describe the role of their content and actions, such as main for primary content, nav for navigation, and button for an action. These elements provide built-in keyboard behavior and meaning to browsers and assistive technologies. Semantic markup also gives code and tests clearer structure. React does not change the semantics of the HTML elements it renders."
            },
            {
                "type": "example",
                "text": "For example, use a button for “Save changes” and an anchor with a real destination for a link to the account page."
            }
        ]
    },
    "How do you render a list of items in React?": {
        "id": "react-junior-37",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use JavaScript’s map operation to turn each data record into a React element, and give each sibling a key that is stable for that record. Keep the mapping close to the data and extract a row component when it improves clarity or reuse. Handle the empty collection separately so users know whether there are no items or data is still pending. Keys help reconciliation but are not visible UI content."
            },
            {
                "type": "example",
                "text": "For example, map each notification to a NotificationRow keyed by its notification ID, and render a distinct message when the notification array is empty."
            }
        ]
    },
    "How do you handle an event in React?": {
        "id": "react-junior-38",
        "answer": [
            {
                "type": "paragraph",
                "text": "Pass a function reference to the appropriate event prop, such as onClick or onChange, and let React invoke it when the event occurs. The handler can update state, call a service, or communicate intent to a parent through a callback. Passing handler() instead of handler would execute the function during render unless it is wrapped in another function. Keep handlers focused and use the event data only as needed."
            },
            {
                "type": "example",
                "text": "For example, pass onClick={() => setOpen(true)} to a menu button so the menu opens after the user activates it, not while rendering."
            }
        ]
    },
    "What is event propagation?": {
        "id": "react-junior-39",
        "answer": [
            {
                "type": "paragraph",
                "text": "DOM events commonly move through a capture phase toward the target and then a bubble phase back through ancestors. React event handlers participate in this model, so a parent handler may run after a nested control handles the event. stopPropagation prevents the event from continuing along that path, but should be used only when the component interaction requires it. Prefer clear semantic structure and avoid suppressing propagation as a general fix."
            },
            {
                "type": "example",
                "text": "For example, a clickable notification row may contain a separate dismiss button; stopping the dismiss click from bubbling prevents it from also opening the notification."
            }
        ]
    },
    "What is a portal in React?": {
        "id": "react-junior-40",
        "answer": [
            {
                "type": "paragraph",
                "text": "A portal renders React children into a different DOM node while preserving their position in the React component tree. The portal content still receives context and its events bubble according to the React tree, even though it is elsewhere in the DOM. Portals are useful when layering or parent overflow makes ordinary placement unsuitable. The destination node and focus behavior still need deliberate management."
            },
            {
                "type": "example",
                "text": "For example, render a modal into a dedicated element beside the app root so it can appear above content clipped by an ancestor’s overflow rule."
            }
        ]
    },
    "How do you fetch data in a React application?": {
        "id": "react-junior-41",
        "answer": [
            {
                "type": "paragraph",
                "text": "Follow the application’s framework or data-fetching layer so caching, request deduplication, and error handling stay consistent. Represent pending, successful, empty, and failed outcomes explicitly, and avoid treating an unfinished request as a successful empty result. Handle cancellation or ignore results that no longer match the active query when users can change inputs quickly. Keep request logic out of render so rendering remains pure."
            },
            {
                "type": "example",
                "text": "For example, when a user changes a city filter twice quickly, show the weather response only for the latest selected city and provide a retry action if that request fails."
            }
        ]
    },
    "Why should a React key be stable across renders?": {
        "id": "react-junior-42",
        "answer": [
            {
                "type": "paragraph",
                "text": "A key tells React which sibling element corresponds to the same logical item from one render to the next. A stable data identifier preserves the correct component state when items move or neighboring items are inserted or removed. Random values or keys derived from changing content make React treat existing items as new, causing remounts and lost input or focus. Keys should change only when a genuinely fresh component identity is intended."
            },
            {
                "type": "example",
                "text": "For example, use a persisted comment ID as the key so expanding one comment remains associated with it when a new comment is added above."
            }
        ]
    },
    "What is StrictMode used for?": {
        "id": "react-junior-43",
        "answer": [
            {
                "type": "paragraph",
                "text": "StrictMode is a development-only wrapper that enables checks intended to reveal unsafe patterns and missing effect cleanup. Some component and effect work may be invoked more than once in development to expose code that incorrectly depends on running exactly once. This does not mean production performs those extra checks or that duplicate behavior should be hidden with a “run once” ref. Write pure rendering and reversible effects so the component behaves correctly under the checks."
            },
            {
                "type": "example",
                "text": "For example, a StrictMode development run can reveal that a subscription effect adds a listener but forgets to remove it during cleanup."
            }
        ]
    },
    "What is the virtual DOM?": {
        "id": "react-junior-44",
        "answer": [
            {
                "type": "paragraph",
                "text": "React elements are lightweight descriptions of the UI a component wants to render, rather than direct DOM nodes. React uses those descriptions and its reconciliation process to determine host updates, such as DOM changes, while coordinating component state and rendering. This declarative model lets developers describe the result for current state instead of manually tracking every DOM mutation. It does not guarantee that every render or update is automatically inexpensive, so performance still needs measurement."
            },
            {
                "type": "example",
                "text": "For example, when a message count changes from 2 to 3, the component returns the updated description and React applies the necessary text update to the mounted page."
            }
        ]
    },
    "How do you test a React component?": {
        "id": "react-junior-45",
        "answer": [
            {
                "type": "paragraph",
                "text": "Test a component through behavior that a user or another consumer can observe, including accessible names, rendered text, and state changes. Exercise important success, empty, loading, and error cases rather than asserting implementation details such as internal Hook calls. Mock external services at a clear boundary so the test remains focused while still checking the component’s response. A maintainable test should tolerate refactoring that preserves the public behavior."
            },
            {
                "type": "example",
                "text": "For example, a password form test can locate the field by its label, enter a value, submit, and assert that the expected validation message appears."
            }
        ]
    },
    "How do you test a user interaction?": {
        "id": "react-junior-46",
        "answer": [
            {
                "type": "paragraph",
                "text": "Render the component in a realistic test environment and locate the control as a user would, preferably by role and accessible name or by label. Perform the interaction with a user-event utility so focus and browser-like behavior are represented, then assert the visible result or announced status. Await asynchronous UI changes rather than relying on arbitrary delays. This verifies the interaction contract instead of a private implementation detail."
            },
            {
                "type": "example",
                "text": "For example, activate a “Show details” button with a keyboard-like click and assert that the associated details region becomes visible."
            }
        ]
    },
    "What is the purpose of React Developer Tools?": {
        "id": "react-junior-47",
        "answer": [
            {
                "type": "paragraph",
                "text": "React Developer Tools is a browser extension that helps inspect the React component tree and examine component props and state during development. Its Profiler records commits and can show which components rendered and how much work they performed. These observations can guide targeted performance investigation, but the tool does not replace production measurements or user-focused tests. Use it to identify a cause before applying memoization or moving state."
            },
            {
                "type": "example",
                "text": "For example, profile a dashboard update to determine whether changing one chart filter is causing unrelated navigation and profile panels to render too."
            }
        ]
    },
    "What is ReactDOM.createRoot used for?": {
        "id": "react-junior-48",
        "answer": [
            {
                "type": "paragraph",
                "text": "createRoot attaches a React application to a DOM container and creates the root through which React manages that part of the page. It is normally called once at the client entry point. Keeping the root setup separate from feature components makes bootstrapping, providers, and test setup easier to understand."
            },
            {
                "type": "example",
                "text": "For example, the HTML page can provide a root element and the entry module mounts the top-level App there."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "const container = document.getElementById('root');\nif (!container) throw new Error('Root element not found');\ncreateRoot(container).render(<App />);"
            }
        ]
    },
    "How do you assign CSS classes conditionally in React?": {
        "id": "react-junior-49",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use a JavaScript expression to derive the class from state or props, while keeping the condition close to the element whose appearance it controls. Preserve base classes and make the resulting class names easy to inspect; complex or repeated styling logic can be extracted into a helper or class-name utility. The selected state should also be reflected semantically when appropriate, rather than conveyed by color alone."
            },
            {
                "type": "example",
                "text": "For example, a selected tab can receive an active class while all tabs retain their shared tab class."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "<button\n  className={isActive ? 'tab tab--active' : 'tab'}\n  aria-selected={isActive}\n>\n  Overview\n</button>"
            }
        ]
    },
    "How do you render an empty state for a collection?": {
        "id": "react-junior-50",
        "answer": [
            {
                "type": "paragraph",
                "text": "Distinguish an empty successful result from a loading or failed request, since each state calls for different feedback. Render a helpful empty message and, when appropriate, a next action that explains how the user can create or discover content. Do not show “no results” while data is still loading, and preserve a separate error message if retrieval fails."
            },
            {
                "type": "example",
                "text": "For example, a task list can show an invitation to create the first task only after loading has completed and the returned collection is empty."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "{isLoading ? (\n  <p role=\"status\">Loading tasks…</p>\n) : tasks.length === 0 ? (\n  <p>No tasks yet. Create your first task.</p>\n) : (\n  <TaskList tasks={tasks} />\n)}"
            }
        ]
    },
    "How do you split a React application into domain features?": {
        "id": "react-senior-01",
        "answer": [
            {
                "type": "paragraph",
                "text": "Organize modules around product capabilities so a feature’s UI, data access, and tests can evolve together. Define explicit dependency directions and shared contracts for routing, state ownership, errors, and design-system usage rather than relying on folder names alone. Keep genuinely common code in stable shared packages, but promote abstractions only after recurring needs are clear. Review boundaries against team ownership and expected change patterns."
            },
            {
                "type": "example",
                "text": "For example, a checkout feature can own its cart review and payment orchestration while depending on a shared identity API, without importing catalog internals."
            }
        ]
    },
    "How do you diagnose unnecessary React renders?": {
        "id": "react-senior-02",
        "answer": [
            {
                "type": "paragraph",
                "text": "First reproduce the interaction and record a representative commit with React DevTools Profiler and browser performance tools. Inspect which state updates, context consumers, prop identities, list items, and calculations explain the work instead of assuming every render is harmful. Address the cause by narrowing state or context scope, stabilizing a meaningful identity, or optimizing expensive calculation, then profile the same workflow again. Keep the fix only when it improves a relevant user outcome without obscuring the code."
            },
            {
                "type": "example",
                "text": "For example, profiling a notification badge update may reveal that it rerenders an entire settings panel because both consume one broad context; separating the badge count can reduce that fan-out."
            }
        ]
    },
    "How do you decide between local state, Context, and a state library?": {
        "id": "react-senior-03",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keep state local when one component or a small subtree owns the interaction, and lift it to a common parent when a few related siblings need it. Context is useful to distribute a scoped value, but it does not provide selectors, caching, or a complete transition model by itself. Choose a state library when cross-feature ownership, selective subscriptions, debugging tools, persistence, or complex workflows justify the dependency and conventions. Evaluate the simplest option against actual access patterns and expected change."
            },
            {
                "type": "example",
                "text": "For example, a dialog’s open state belongs locally, a selected workspace shared across its navigation subtree may use Context, and a multi-step offline editing workflow may warrant a dedicated state layer."
            }
        ]
    },
    "How do you optimize a context that updates frequently?": {
        "id": "react-senior-04",
        "answer": [
            {
                "type": "paragraph",
                "text": "Profile consumer render costs and identify whether the provider’s value changes more often or contains more data than each consumer needs. Split unrelated values into focused contexts, narrow the provider’s subtree, and avoid recreating wrapper objects or callbacks unnecessarily when their identity matters. If broad updates remain expensive, move state nearer to consumers or adopt a store that supports selectors and granular subscriptions. Verify the result with the same representative interaction."
            },
            {
                "type": "example",
                "text": "For example, separate rapidly changing playback position from rarely changing player settings so opening the settings panel does not make every time display consume unrelated updates."
            }
        ]
    },
    "When should you use memo, useMemo, or useCallback?": {
        "id": "react-senior-05",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use memo to skip rendering a component when its props are unchanged, useMemo to reuse an expensive calculated value, and useCallback to preserve a function identity when that identity affects a consumer or dependency. These mechanisms are most useful when profiling shows a real cost or when stable identity is part of a deliberate component contract. They add dependency and comparison complexity, so they should not be applied uniformly. Dependencies must remain complete and the underlying behavior correct without relying on a cache."
            },
            {
                "type": "example",
                "text": "For example, memo can help a costly chart avoid rerendering when a parent toggles unrelated help text, provided the chart’s data and callback props remain stable."
            }
        ]
    },
    "How does React reconciliation use keys?": {
        "id": "react-senior-06",
        "answer": [
            {
                "type": "paragraph",
                "text": "During reconciliation, React uses element type and position, with keys identifying sibling elements whose positions may change. A stable key lets React match a rendered child to the same logical record after insertion, deletion, or reordering and preserve the appropriate component state. Keys must be unique among siblings and should represent domain identity rather than array position for dynamic collections. Changing a key deliberately tells React to treat the subtree as a new identity and remount it."
            },
            {
                "type": "example",
                "text": "For example, key editable invoice rows by invoice-line ID so sorting by due date does not transfer a row’s draft input to a different line."
            }
        ]
    },
    "What is concurrent rendering in React?": {
        "id": "react-senior-07",
        "answer": [
            {
                "type": "paragraph",
                "text": "Concurrent rendering is React’s ability to prepare rendering work, pause or abandon it when appropriate, and prioritize more urgent updates. It helps React keep interactions responsive while working on a more expensive view, but it does not make arbitrary JavaScript computation interruptible once that synchronous code is running. Components and render logic must be pure because React may restart work before committing it. Use the supported scheduling APIs and test user-visible behavior rather than assuming a render runs exactly once."
            },
            {
                "type": "example",
                "text": "For example, React can prioritize displaying each keystroke in a search box while it prepares a lower-priority results view for the new query."
            }
        ]
    },
    "How do transitions improve responsiveness?": {
        "id": "react-senior-08",
        "answer": [
            {
                "type": "paragraph",
                "text": "A transition marks an update as non-urgent so React can keep urgent interactions, such as typing, responsive while preparing the resulting UI. Use it when updating a larger view can be deferred without making the user’s immediate action feel delayed. A transition does not reduce the computational cost of the view, so expensive work may still need profiling and optimization. Provide appropriate pending feedback when the transition takes noticeable time."
            },
            {
                "type": "example",
                "text": "For example, keep a selected tab indicator responsive while marking the large report panel update as a transition when switching reports."
            }
        ]
    },
    "When is useDeferredValue useful?": {
        "id": "react-senior-09",
        "answer": [
            {
                "type": "paragraph",
                "text": "useDeferredValue lets a value used by a slower part of the interface lag behind the latest urgent value while React works on the new rendering. This can keep a controlled input responsive when a dependent result view is expensive, especially when that view can skip renders while its deferred input is unchanged. It is a scheduling aid, not a debounce or request-cancellation mechanism, and it should be paired with clear pending-state design. Measure the actual interaction before adopting it."
            },
            {
                "type": "example",
                "text": "For example, let a typed product search term update immediately while a large locally rendered product grid continues to display results for the prior term until the next render is ready."
            }
        ]
    },
    "How do Suspense boundaries affect application design?": {
        "id": "react-senior-10",
        "answer": [
            {
                "type": "paragraph",
                "text": "A Suspense boundary determines which part of the tree can show fallback UI while a supported child is waiting for work to complete. Its placement defines the user-visible loading region, so boundaries should align with meaningful content that can remain independently useful. Coordinate Suspense with the framework’s data-loading and error-boundary strategy, since Suspense itself is not a general error handler or universal fetch mechanism. Avoid fallback designs that cause confusing layout jumps or hide too much content."
            },
            {
                "type": "example",
                "text": "For example, a product page can keep its title and purchase controls visible while a separate boundary shows a compact fallback for the recommendation carousel."
            }
        ]
    },
    "How should errors be handled in a large React app?": {
        "id": "react-senior-11",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use error boundaries to contain failures during rendering and explicit error states for network requests, user actions, and other asynchronous work. Normalize expected service errors at data boundaries so components can present consistent messages and recovery actions without understanding transport details. Report unexpected failures with safe diagnostic context while avoiding sensitive data. Place recovery at the level where the user can retry or continue, and test both containment and recovery behavior."
            },
            {
                "type": "example",
                "text": "For example, a failed analytics panel can offer a retry action and report the failure without preventing the surrounding account overview from rendering."
            }
        ]
    },
    "How would you design error boundaries for routes?": {
        "id": "react-senior-12",
        "answer": [
            {
                "type": "paragraph",
                "text": "Place route-level boundaries where a failure should stop affecting sibling routes or shared application chrome. Give each fallback a useful explanation and a recovery path such as retrying the route or returning to a safe location, and report the exception through the application’s diagnostics service. Keep a higher-level boundary as a last-resort fallback, not the only boundary for every feature. Test failures in nested routes as well as the fallback navigation itself."
            },
            {
                "type": "example",
                "text": "For example, a failure in an account billing route can show a billing-specific retry panel while the global navigation and support link remain available."
            }
        ]
    },
    "How do you choose client rendering, SSR, and prerendering?": {
        "id": "react-senior-13",
        "answer": [
            {
                "type": "paragraph",
                "text": "Compare each route’s SEO and personalization needs, time to useful content, cacheability, data freshness, and operational costs. Static prerendering suits content that changes predictably, server rendering can help request-specific initial content, and client rendering can fit highly interactive personalized areas. These modes can coexist in one application rather than being chosen globally. Validate with representative routes and field performance data before accepting added server complexity."
            },
            {
                "type": "example",
                "text": "For example, prerender public help articles for fast cacheable delivery while rendering a private account dashboard with request-specific data under the application’s authenticated server or client flow."
            }
        ]
    },
    "What causes hydration mismatches in React?": {
        "id": "react-senior-14",
        "answer": [
            {
                "type": "paragraph",
                "text": "A hydration mismatch occurs when the client’s initial render does not produce the same structure and content as the server-rendered markup. Common causes include current-time or random values, browser-only conditions, different initial data, locale differences, and invalid HTML that the browser repairs. Make the first render deterministic and provide the client with the data and formatting context used on the server. Defer truly browser-specific UI until after hydration rather than branching unpredictably during the initial render."
            },
            {
                "type": "example",
                "text": "For example, render a server-provided timestamp consistently on both sides, then update it to a live clock in an effect after hydration."
            }
        ]
    },
    "How should data fetching be organized in React?": {
        "id": "react-senior-15",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use the framework’s route loaders or a consistent query layer to define request ownership, caching, invalidation, and loading and error behavior. Centralized conventions help deduplicate requests and prevent components from implementing subtly different retry and race-handling logic. Keep presentation components focused on the data state they receive, while data boundaries handle transport and normalization. Choose an approach that fits the application’s rendering model rather than scattering ad hoc effects by default."
            },
            {
                "type": "example",
                "text": "For example, a project route loader can fetch project details and permissions once, then provide the result to the header and activity panel under the same cache key."
            }
        ]
    },
    "How do you prevent stale network responses from replacing newer data?": {
        "id": "react-senior-16",
        "answer": [
            {
                "type": "paragraph",
                "text": "Tie each response to the query or user intent that initiated it, and apply it only if that intent is still current. Abort obsolete requests when the API and runtime support cancellation, or use a request identifier/latest-request guard when cancellation cannot be relied on. Also handle loading and error state per active request so an old completion cannot clear the newer request’s status. Test out-of-order responses explicitly."
            },
            {
                "type": "example",
                "text": "For example, if a user searches for “ca” and then “cat,” a slower response for “ca” must not overwrite the results already requested for “cat.”"
            }
        ]
    },
    "How do you manage server state versus client UI state?": {
        "id": "react-senior-17",
        "answer": [
            {
                "type": "paragraph",
                "text": "Server state represents data owned by a remote system and therefore needs fetching, caching, freshness, synchronization, and invalidation rules. Client UI state represents local interaction such as an open menu, current focus, or temporary selection. Keeping these models separate avoids treating cached server data like an ordinary local field or sending transient interface state to the server unnecessarily. Define explicit synchronization only when product behavior requires it."
            },
            {
                "type": "example",
                "text": "For example, cache the current account’s invoices in a query layer but keep whether the invoice filter drawer is open in local component state."
            }
        ]
    },
    "How do you avoid request waterfalls?": {
        "id": "react-senior-18",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use network traces to identify requests that start only after unrelated earlier requests complete. Start independent requests concurrently, combine orchestration in a route loader or server boundary when appropriate, and reuse cached data rather than refetching it in nested components. Preserve true dependencies where one request needs another’s result, but reduce the number of sequential network round trips on the critical path. Measure latency under realistic network conditions after changes."
            },
            {
                "type": "example",
                "text": "For example, fetch a user’s profile and feature configuration in parallel instead of waiting for the profile request to finish before starting the independent configuration request."
            }
        ]
    },
    "What is an optimistic UI update?": {
        "id": "react-senior-19",
        "answer": [
            {
                "type": "paragraph",
                "text": "An optimistic update immediately displays the expected result while a server mutation is pending, making an interaction feel faster. It works best when success is likely and the client can accurately reconcile or roll back the change if the request fails. Preserve a way to show pending or failure feedback, and use the server’s authoritative response to resolve conflicts. Avoid optimistic behavior for operations where an incorrect temporary state could cause significant harm."
            },
            {
                "type": "example",
                "text": "For example, a saved-item icon can switch on immediately after a click, then revert and announce an error if the save request is rejected."
            }
        ]
    },
    "How do you design a robust form in React?": {
        "id": "react-senior-20",
        "answer": [
            {
                "type": "paragraph",
                "text": "Choose controlled fields or a form library based on the form’s validation, scale, and submission needs rather than assuming every field needs global React state. Provide programmatically associated labels, useful inline validation, and clear pending, success, and error states. Validate on the server as well as the client, preserve values when submission fails, and handle keyboard navigation and focus on errors. Test realistic submission and correction workflows."
            },
            {
                "type": "example",
                "text": "For example, an address form can retain all entered fields after the server rejects an unsupported postal code, then focus and describe the field that needs correction."
            }
        ]
    },
    "How do you prevent unnecessary rerenders in a large form?": {
        "id": "react-senior-21",
        "answer": [
            {
                "type": "paragraph",
                "text": "Profile the form while typing and determine whether broad state or context updates are rerendering unrelated fields. Keep field state close to its control when possible, or use a form library with per-field subscriptions and selectors. Derive summaries only when needed and avoid publishing every keystroke through application-wide context. Preserve validation and accessibility behavior while narrowing updates, then verify improvement with realistic form data."
            },
            {
                "type": "example",
                "text": "For example, updating the “delivery instructions” field should not rerender hundreds of unrelated billing controls simply because every field subscribes to one whole-form context value."
            }
        ]
    },
    "How would you build a reusable React component library?": {
        "id": "react-senior-22",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define the library’s audience, supported React versions, semantic and accessibility behavior, design tokens, and intentional extension points before broadening its API. Keep product-specific workflows outside generic UI components, and validate usability in real consumer applications rather than only in isolated stories. Publish modular packages with clear peer dependencies, documentation, and compatibility policy. Include visual, interaction, accessibility, and packaging tests that protect the public contract."
            },
            {
                "type": "example",
                "text": "For example, a shared DatePicker should expose predictable value and change contracts while leaving an application-specific booking rule to the consuming product."
            }
        ]
    },
    "How do you design a compound component API?": {
        "id": "react-senior-23",
        "answer": [
            {
                "type": "paragraph",
                "text": "A compound API is useful when related pieces need flexible placement but must coordinate shared behavior, often through a scoped Context. Define which pieces are required, how state can be controlled or uncontrolled, and what accessibility responsibilities each part has. Make invalid combinations diagnosable and keep the relationship understandable from the public API. Do not use hidden shared state when explicit composition would be clearer."
            },
            {
                "type": "example",
                "text": "For example, Tabs, TabList, Tab, and TabPanel can coordinate selection while allowing a product to place extra explanatory content around the tab list."
            }
        ]
    },
    "When would you use render props or a custom Hook?": {
        "id": "react-senior-24",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use a custom Hook to share stateful behavior while letting each caller render its own interface. Use a render prop when a component must own a behavior or resource but callers need direct control over the rendered output at a particular point. Both patterns create API contracts, so account for typing, readability, and composition before selecting one. Prefer ordinary composition or a custom Hook when they solve the need more simply."
            },
            {
                "type": "example",
                "text": "For example, a useOnlineStatus Hook can provide a boolean to several independent components, while a render-prop measurement component can expose measured dimensions exactly where a caller chooses its layout."
            }
        ]
    },
    "How do you manage design tokens and themes in React?": {
        "id": "react-senior-25",
        "answer": [
            {
                "type": "paragraph",
                "text": "Represent shared design decisions with semantic tokens such as surface, text, and accent colors rather than embedding product-specific values throughout components. Apply tokens through CSS variables or the established theming system so themes can change without duplicating component logic. Verify contrast, focus, disabled, and error states across themes, and scope updates to avoid unnecessary application-wide work. Keep product semantics in the consuming application when they are not genuinely shared."
            },
            {
                "type": "example",
                "text": "For example, a destructive-action button can use a semantic danger token that maps to accessible colors in both light and dark themes."
            }
        ]
    },
    "How do you build accessible dialogs in React?": {
        "id": "react-senior-26",
        "answer": [
            {
                "type": "paragraph",
                "text": "Prefer a well-maintained dialog primitive when possible because modal focus and keyboard behavior have many edge cases. A correct modal needs an accessible name, focus moved into it, contained keyboard navigation when modal, Escape handling where appropriate, background interaction management, and focus restored to the trigger on close. Consider nested dialogs, zoom, scrolling, and error states, and test with keyboard and assistive technology. A visual overlay alone does not provide dialog semantics."
            },
            {
                "type": "example",
                "text": "For example, after a user opens a delete-confirmation dialog, focus should move to the dialog’s heading or first appropriate control and return to the Delete button if the dialog is cancelled."
            }
        ]
    },
    "How do you approach micro-frontends in React?": {
        "id": "react-senior-27",
        "answer": [
            {
                "type": "paragraph",
                "text": "Adopt micro-frontends when independent team ownership, deployment, or technology boundaries provide measurable value that outweighs integration costs. Define contracts for routing, shared dependencies, styling, communication, authentication, and failure handling before teams implement separate runtime units. Monitor duplicate bundles, loading behavior, and operational complexity as part of the decision. A modular monolith may provide clearer boundaries without introducing distributed runtime concerns."
            },
            {
                "type": "example",
                "text": "For example, independently deployed checkout and storefront teams may justify route-level integration if they can agree on a versioned navigation and identity contract."
            }
        ]
    },
    "How do you share state across micro-frontends?": {
        "id": "react-senior-28",
        "answer": [
            {
                "type": "paragraph",
                "text": "Choose the narrowest durable communication mechanism that fits the data: URL state for navigable selections, backend persistence for shared server-owned data, or explicit versioned events for runtime coordination. Avoid an unowned global store because it creates hidden coupling across deployment and release schedules. Document who owns writes, how consumers handle missing or older event versions, and what happens when one frontend is unavailable. Keep high-frequency internal UI state inside its owning frontend."
            },
            {
                "type": "example",
                "text": "For example, share a selected product category through the URL so independently deployed catalog and search views can both restore the same navigable selection."
            }
        ]
    },
    "How do you optimize React bundle size?": {
        "id": "react-senior-29",
        "answer": [
            {
                "type": "paragraph",
                "text": "Inspect production build output to find large chunks, duplicate dependencies, and code included only for optional features. Split code at meaningful route or capability boundaries, use tree-shakeable imports, and defer noncritical functionality when it improves the initial experience. Check that dependencies and shared chunks are actually deduplicated across entry points. Validate the user impact with real network and performance measurements rather than optimizing a size number in isolation."
            },
            {
                "type": "example",
                "text": "For example, load the rich-text editor only when a user opens the compose screen instead of including its parser in the initial dashboard bundle."
            }
        ]
    },
    "How do you set performance budgets for a React app?": {
        "id": "react-senior-30",
        "answer": [
            {
                "type": "paragraph",
                "text": "Base budgets on important user journeys and set measurable limits for initial and route-level JavaScript, key interaction responsiveness, and other relevant field metrics. Establish a baseline with production-like builds, assign ownership for regressions, and add CI reporting that explains which change exceeded a budget. Exceptions should be explicit, time-bound, and justified by user value. Verify the deployed application because build estimates do not capture every runtime condition."
            },
            {
                "type": "example",
                "text": "For example, set a route-specific JavaScript ceiling for the checkout entry point and alert its owning team when a dependency upgrade pushes the chunk beyond that threshold."
            }
        ]
    },
    "How do you virtualize a long React list accessibly?": {
        "id": "react-senior-31",
        "answer": [
            {
                "type": "paragraph",
                "text": "Virtualization reduces mounted DOM work by rendering only the visible portion of a large collection, but it can change keyboard and screen-reader navigation. Use it only when data size and profiling show that ordinary rendering is insufficient, and select a library that supports the required interaction model. Preserve logical focus when rows are recycled, expose useful position and count information where appropriate, and verify behavior with assistive technology. Consider pagination or simpler filtering if those better fit the task."
            },
            {
                "type": "example",
                "text": "For example, a virtualized results grid should keep the focused result reachable when scrolling causes its current DOM row to be recycled."
            }
        ]
    },
    "How do you investigate memory leaks in React?": {
        "id": "react-senior-32",
        "answer": [
            {
                "type": "paragraph",
                "text": "Reproduce a workflow that repeatedly mounts and removes the suspected feature, then compare browser heap snapshots and retained-object paths. Look for subscriptions, event listeners, timers, observers, detached DOM nodes, or unbounded caches that remain reachable after the UI is gone. Add cleanup at the owner that created the resource and repeat the same workflow to confirm retention returns to an expected level. Distinguish a true leak from normal caching or a temporary heap increase."
            },
            {
                "type": "example",
                "text": "For example, open and close a live-updating chart repeatedly and check whether each closed chart leaves another active WebSocket listener retained in the heap."
            }
        ]
    },
    "How do you coordinate code splitting with route loading?": {
        "id": "react-senior-33",
        "answer": [
            {
                "type": "paragraph",
                "text": "Split at boundaries that correspond to user journeys or optional capabilities, and make route navigation coordinate loading of the code and required data. Preload likely next routes only when observed navigation patterns and network cost justify it. Provide useful loading and chunk-failure behavior, and inspect waterfalls to avoid serializing code and data unnecessarily. Avoid very small chunks that increase request and orchestration overhead without meaningful caching benefits."
            },
            {
                "type": "example",
                "text": "For example, prefetch the checkout bundle after a user adds an item to the cart, while keeping payment-provider code out of routes that never enter checkout."
            }
        ]
    },
    "How do you design React application security boundaries?": {
        "id": "react-senior-34",
        "answer": [
            {
                "type": "paragraph",
                "text": "Assume all client-side code and data can be inspected or modified by the user. Enforce authorization, validation, and sensitive business rules on trusted server boundaries; client route guards improve experience but cannot grant access. Sanitize untrusted content, avoid embedding secrets in bundles, and review how tokens and personal data are stored and logged. Treat third-party scripts and dependencies as part of the application’s threat surface."
            },
            {
                "type": "example",
                "text": "For example, hiding an administrator link in React is not sufficient; the server endpoint must independently verify the caller’s permission before returning administrative data."
            }
        ]
    },
    "How should untrusted HTML be rendered in React?": {
        "id": "react-senior-35",
        "answer": [
            {
                "type": "paragraph",
                "text": "Render untrusted content as ordinary text whenever rich markup is not essential, because React escapes text values by default. If HTML must be supported, sanitize it with a maintained sanitizer and a narrowly defined allowlist before using an HTML insertion API. Keep sanitization at a clear trust boundary and account for links, embedded media, and URL schemes as well as tags. Never treat data from an API or user input as trusted merely because it is stored on the server."
            },
            {
                "type": "example",
                "text": "For example, a comment preview should display a submitted string as text unless the product explicitly supports a sanitized subset of formatting such as emphasis and lists."
            }
        ]
    },
    "How do you approach a React major-version migration?": {
        "id": "react-senior-36",
        "answer": [
            {
                "type": "paragraph",
                "text": "Inventory React APIs, renderers, dependencies, build tooling, and critical user workflows before changing the runtime. Review official migration guidance, update dependencies in manageable stages, and use codemods only where their transformations are understood and reviewable. Test representative integrations and production-like builds, then communicate any public API or peer-dependency changes to consuming teams. Keep rollback options and monitor the rollout for runtime and hydration regressions."
            },
            {
                "type": "example",
                "text": "For example, upgrade a shared component package and its fixture applications first to expose peer-dependency or StrictMode issues before migrating every product route."
            }
        ]
    },
    "How do you test React applications at multiple levels?": {
        "id": "react-senior-37",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use unit tests for pure transformations and business rules, component tests for accessible interactions and visible state changes, and browser-level tests for critical workflows across real routing and integration boundaries. Choose additional accessibility, visual, and performance checks according to risk rather than duplicating every assertion at every level. Keep test data deterministic and mock external services at well-defined boundaries. The test mix should catch regressions quickly while retaining confidence in user journeys."
            },
            {
                "type": "example",
                "text": "For example, test price calculations as pure unit cases, quantity selection as a component interaction, and the complete checkout confirmation as a browser workflow."
            }
        ]
    },
    "How do you reduce flaky React end-to-end tests?": {
        "id": "react-senior-38",
        "answer": [
            {
                "type": "paragraph",
                "text": "Replace fixed sleeps with waits for observable outcomes such as a role, URL, or completed request, and isolate each test’s data and account state. Control or stub unstable external services at a boundary while retaining a smaller set of true integration checks. Prefer accessible selectors over brittle CSS structure, and capture diagnostics that make failures actionable. Track flaky tests, fix the underlying nondeterminism, and remove coverage that no longer provides reliable value."
            },
            {
                "type": "example",
                "text": "For example, wait for the order-confirmation heading after submission instead of sleeping for two seconds and hoping the network has completed."
            }
        ]
    },
    "How do you test a React component library across frameworks or apps?": {
        "id": "react-senior-39",
        "answer": [
            {
                "type": "paragraph",
                "text": "Verify the component’s documented public behavior, emitted package format, peer dependencies, and styles inside representative consumer applications. Add accessibility and visual checks for key states, and test installation and imports from the published artifact rather than only from a monorepo source path. Consumer fixtures reveal integration and ergonomics problems that isolated component tests cannot catch. Keep the supported React and bundler matrix explicit and proportionate to actual users."
            },
            {
                "type": "example",
                "text": "For example, install a prerelease package into a minimal Vite app and a server-rendered fixture to detect broken exports or assumptions about browser globals."
            }
        ]
    },
    "How do you define error and retry behavior for mutations?": {
        "id": "react-senior-40",
        "answer": [
            {
                "type": "paragraph",
                "text": "Classify failures by whether retrying is safe and useful, and make operations idempotent or use idempotency keys when duplicate submission would be harmful. Preserve user-entered data, show an actionable error, and make retry status visible rather than silently repeating every failure. Reconcile successful responses with cached server state and provide a clear recovery path for conflicts or validation errors. Test timeouts and duplicate clicks as well as normal rejection."
            },
            {
                "type": "example",
                "text": "For example, retrying a failed read-like status update may be safe, while submitting a payment capture should not be automatically repeated without an idempotency guarantee."
            }
        ]
    },
    "How do you handle authentication in a React single-page app?": {
        "id": "react-senior-41",
        "answer": [
            {
                "type": "paragraph",
                "text": "Integrate with the organization’s approved identity flow and minimize the lifetime and exposure of credentials in browser code. Treat client-side session checks as a user-experience concern; every protected server operation must still enforce authorization. Handle session expiry, logout, and redirect destinations safely, and avoid putting sensitive tokens or personal data in logs or URLs. Coordinate refresh and error behavior with the identity platform rather than inventing an inconsistent mechanism."
            },
            {
                "type": "example",
                "text": "For example, when an API reports an expired session, preserve a safe return path through the approved sign-in flow and recheck permissions on the server after the user returns."
            }
        ]
    },
    "How do you keep a React design system compatible with consumers?": {
        "id": "react-senior-42",
        "answer": [
            {
                "type": "paragraph",
                "text": "Publish explicit APIs, supported runtime ranges, and deprecation policies so consuming teams can plan upgrades. Use semantic versioning consistently, test representative consumer applications against candidate releases, and avoid undocumented behavior becoming a dependency. For breaking changes, provide migration guidance or codemods when transformations are mechanical and safe. Monitor adoption and remove deprecated paths only after the agreed support window."
            },
            {
                "type": "example",
                "text": "For example, deprecate an old Button prop in a minor release with a migration note, then remove it only in a planned major version after consumers have had time to update."
            }
        ]
    },
    "How do you prevent duplicated React runtimes in a monorepo?": {
        "id": "react-senior-43",
        "answer": [
            {
                "type": "paragraph",
                "text": "Declare React and ReactDOM as peer dependencies for reusable libraries rather than bundling private copies into each package. Align compatible versions and configure workspace and bundler resolution so applications use one runtime instance where required. Inspect the resolved dependency graph and validate the built artifact in an actual consumer, since workspace source imports can hide packaging problems. Duplicate runtimes can cause invalid Hook call errors and inconsistent context identity."
            },
            {
                "type": "example",
                "text": "For example, run the package manager’s dependency-tree inspection after linking a UI package and confirm that both the application and package resolve the intended React installation."
            }
        ]
    },
    "How do you handle feature flags in React?": {
        "id": "react-senior-44",
        "answer": [
            {
                "type": "paragraph",
                "text": "Evaluate flags at a clear application boundary and define a safe default for unavailable or malformed flag data. Make both variants testable with deterministic overrides, monitor rollout behavior, and remove temporary branches when the experiment or migration ends. Keep server authorization independent of client flags because users can alter client code and flag values. Consider how flag changes affect cached data and navigation as well as visual presentation."
            },
            {
                "type": "example",
                "text": "For example, use a test override to verify the old and new profile layouts, then gradually enable the new layout for cohorts while monitoring error rates."
            }
        ]
    },
    "How do you support internationalization in a React application?": {
        "id": "react-senior-45",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use a message catalog and localization library that support interpolation, plural rules, and locale-aware formatting rather than concatenating translated fragments. Format dates, numbers, and currencies with the active locale and allow translated strings to expand or reorder. Include right-to-left layout testing when those locales are supported, and ensure accessible names and validation messages are translated too. Coordinate locale loading and fallback behavior so missing messages are observable and manageable."
            },
            {
                "type": "example",
                "text": "For example, display an item count through a plural-aware message and format its price with the user’s currency and locale instead of appending a hard-coded currency symbol."
            }
        ]
    },
    "How do you handle localization without coupling components to one language?": {
        "id": "react-senior-46",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keep language selection and message lookup in the application’s localization layer, not in presentational component logic. A reusable component should receive translated strings or a narrowly scoped translation function, use the translated content for both visible text and accessible names, and avoid assembling sentences from fragments so grammar and word order can change by locale. Keep validation messages, dates, numbers, and plural forms localizable as well."
            },
            {
                "type": "example",
                "text": "For a payment button, changing the active locale should update both its visible label and screen-reader name from the same message key, while the button behavior remains unchanged."
            },
            {
                "type": "code",
                "language": "jsx",
                "code": "function PayButton({ t }) {\n  const label = t('checkout.pay');\n  return <button aria-label={label}>{label}</button>;\n}"
            }
        ]
    },
    "How do you profile React rendering in production-like conditions?": {
        "id": "react-senior-47",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use a profiling-enabled build or appropriate production instrumentation together with browser performance traces, representative data, and realistic network and device conditions. Profile a specific user journey and identify whether React rendering, scripting, layout, or network work dominates before choosing an optimization. Compare before-and-after measurements on the same workflow and account for profiling overhead. Use the findings to guide a targeted change rather than optimizing component counts in isolation."
            },
            {
                "type": "example",
                "text": "For example, record a production-like dashboard load and compare the time from selecting a date range to a usable chart before and after reducing the chart’s data transformation cost."
            }
        ]
    },
    "How do you design a migration from a legacy React architecture?": {
        "id": "react-senior-48",
        "answer": [
            {
                "type": "paragraph",
                "text": "Inventory routes, dependencies, ownership, runtime constraints, and critical user workflows, then define the target boundaries and compatibility seams. Migrate incrementally by feature so teams can continue shipping and each step can be tested against the existing behavior. Add observability and rollback plans for risky changes, and remove temporary adapters once consumers have moved. Validate the migration through user outcomes and maintenance cost, not just completion of code movement."
            },
            {
                "type": "example",
                "text": "For example, introduce a new data-access layer behind the existing product-detail API, migrate one route to it, and expand after its behavior and performance match the legacy path."
            }
        ]
    },
    "How do you make React components robust under StrictMode?": {
        "id": "react-senior-49",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keep rendering pure and ensure each effect’s cleanup fully reverses the resources established by its setup. Do not depend on development-only call counts or use a ref to suppress a second setup, because that can conceal missing cleanup and break real remount behavior. Make subscriptions, timers, and requests safe to start and stop repeatedly, and test public behavior rather than internal invocation timing. This produces components that are resilient to remounting and lifecycle changes beyond StrictMode checks."
            },
            {
                "type": "example",
                "text": "For example, a live stock-price component should unsubscribe during cleanup so a StrictMode setup-cleanup-setup sequence leaves exactly one active subscription."
            }
        ]
    },
    "How do you ensure React state updates remain predictable?": {
        "id": "react-senior-50",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keep state minimal, colocate it with the components that own the interaction, and derive values during render when they can be calculated from existing state. Represent related changes in a reducer when explicit transitions improve clarity, and use immutable updates so each transition produces an understandable next value. Avoid effects that mirror one piece of state into another, since duplicated state can drift out of sync. Define ownership and update paths so each important value has a clear source of truth."
            },
            {
                "type": "example",
                "text": "For example, store the selected product IDs and derive the cart item count from that set instead of separately updating both the selection and a count state variable."
            }
        ]
    }
};

export const reactLevelQuestionIds = {
    junior: Object.values(reactQuestionBank).filter(({ id }) => id.startsWith('react-junior-')).map(({ id }) => id),
    senior: Object.values(reactQuestionBank).filter(({ id }) => id.startsWith('react-senior-')).map(({ id }) => id),
};