export const angularQuestionBank = {
    "What is the difference between a component and a directive in Angular?": {
        "id": "angular-junior-1",
        "answer": [
            {
                "type": "paragraph",
                "text": "A component is a directive with a template; it owns a view and its behavior. Attribute and structural directives add behavior to existing elements or control how content is rendered. Use a component for a reusable UI unit with its own markup, and a directive to enhance an existing element."
            },
            {
                "type": "example",
                "text": "Build a reusable `UserCardComponent` with its own HTML, and use an attribute directive such as `appHighlight` to highlight an element on hover."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({ selector: 'app-user-card', template: '<p>{{ name }}</p>' })\nexport class UserCardComponent { name = 'Asha'; }\n\n@Directive({ selector: '[appHighlight]' })\nexport class HighlightDirective { }"
            }
        ]
    },

    "How does data binding work in Angular?": {
        "id": "angular-junior-2",
        "answer": [
            {
                "type": "paragraph",
                "text": "Angular supports interpolation and property binding to pass data into the view, event binding to handle user actions, and two-way binding when a value needs to flow both ways. Explicit one-way inputs and outputs make reusable component data flow easier to trace."
            },
            {
                "type": "example",
                "text": "A profile page displays `userName`, disables Save while a request is pending, and calls `saveProfile()` when the user clicks Save."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<h2>{{ userName }}</h2>\n<button [disabled]=\"isSaving\" (click)=\"saveProfile()\">Save</button>"
            }
        ]
    },

    "What are services and dependency injection used for?": {
        "id": "angular-junior-3",
        "answer": [
            {
                "type": "paragraph",
                "text": "Services hold reusable logic or data access outside presentation components. Angular dependency injection provides services and lets the application control their scope and lifetime. Keep components focused on presenting state and handling UI events."
            },
            {
                "type": "example",
                "text": "A `ProductListComponent` asks `ProductService` for products instead of making HTTP requests directly, so the service can also be reused and tested independently."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Injectable({ providedIn: 'root' })\nexport class ProductService {\n  constructor(private http: HttpClient) {}\n  getProducts() { return this.http.get<Product[]>('/api/products'); }\n}"
            }
        ]
    },

    "How do you build and validate a form in Angular?": {
        "id": "angular-junior-4",
        "answer": [
            {
                "type": "paragraph",
                "text": "Choose template-driven forms for simple cases and reactive forms for complex validation, dynamic controls, or testability. Provide labels and accessible errors, validate at the right time, prevent duplicate submissions, and test boundary inputs."
            },
            {
                "type": "example",
                "text": "A registration form requires an email and password, displays field-level errors, and disables submission until the form is valid."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" required>\n<button type=\"submit\" [disabled]=\"form.invalid\">Register</button>"
            }
        ]
    },

    "What is an Angular workspace?": {
        "id": "angular-junior-05",
        "answer": [
            {
                "type": "paragraph",
                "text": "An Angular workspace is a repository structure managed by the CLI. It contains project configuration, application and library source, and targets for builds, tests, and other tasks."
            },
            {
                "type": "example",
                "text": "One workspace can contain a customer-facing app, an admin app, and a shared UI library, each with its own build and test targets."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "ng new store-workspace --no-create-application\nng generate application storefront\nng generate library shared-ui"
            }
        ]
    },

    "What does the Angular CLI do?": {
        "id": "angular-junior-06",
        "answer": [
            {
                "type": "paragraph",
                "text": "The CLI scaffolds projects, generates common code, and runs configured development, build, and test tasks. It standardizes project conventions and automates repetitive work."
            },
            {
                "type": "example",
                "text": "A developer runs `ng generate component shared/user-card` to create a component using the project's conventions."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "ng generate component shared/user-card\nng test\nng build"
            }
        ]
    },

    "What is a standalone component?": {
        "id": "angular-junior-07",
        "answer": [
            {
                "type": "paragraph",
                "text": "A standalone component declares its own template dependencies and can be used without being declared in an NgModule. It simplifies bootstrapping and feature composition in modern Angular apps."
            },
            {
                "type": "example",
                "text": "A standalone `ProductPageComponent` imports `CommonModule` or the specific directives and pipes it uses, then can be referenced directly by a route."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  standalone: true,\n  selector: 'app-product-page',\n  imports: [CurrencyPipe],\n  template: '{{ price | currency }}'\n})\nexport class ProductPageComponent { price = 25; }"
            }
        ]
    },

    "What is an NgModule?": {
        "id": "angular-junior-08",
        "answer": [
            {
                "type": "paragraph",
                "text": "An NgModule groups declarations, imports, providers, and bootstrap configuration. It remains common in existing applications, while standalone APIs are preferred for many new features."
            },
            {
                "type": "example",
                "text": "An older feature module groups its declared components and imported modules, while a new standalone component can be added without declaring it in that module."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@NgModule({ declarations: [LegacyPageComponent], imports: [CommonModule] })\nexport class LegacyFeatureModule {}"
            }
        ]
    },

    "What are Angular lifecycle hooks?": {
        "id": "angular-junior-09",
        "answer": [
            {
                "type": "paragraph",
                "text": "Lifecycle hooks run at defined points as Angular creates, checks, and destroys a component. Common examples are ngOnInit for initialization and ngOnDestroy for cleanup."
            },
            {
                "type": "example",
                "text": "A component loads initial data during initialization and removes a manually registered window listener when it is destroyed."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "ngOnInit() { this.loadData(); }\nngOnDestroy() { this.listener?.(); }"
            }
        ]
    },

    "When should initialization go in ngOnInit?": {
        "id": "angular-junior-10",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use ngOnInit for setup that depends on Angular having assigned input values. Keep constructors focused on dependency injection and simple object initialization."
            },
            {
                "type": "example",
                "text": "When a parent passes `userId` into a component, initialization logic can use the assigned input; the constructor remains focused on injecting services."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Input() userId = '';\nngOnInit() { this.loadUser(this.userId); }"
            }
        ]
    },

    "What is interpolation in Angular?": {
        "id": "angular-junior-11",
        "answer": [
            {
                "type": "paragraph",
                "text": "Interpolation uses double curly braces to render an expression as text in a template. Use property binding instead when setting a DOM property."
            },
            {
                "type": "example",
                "text": "A heading renders the current user's name as text with `{{ userName }}`."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<h1>Welcome, {{ userName }}!</h1>"
            }
        ]
    },

    "How is property binding different from attribute binding?": {
        "id": "angular-junior-12",
        "answer": [
            {
                "type": "paragraph",
                "text": "Property binding sets a DOM property; attribute binding sets an HTML attribute and is useful when no equivalent property exists. Choose based on the browser behavior required."
            },
            {
                "type": "example",
                "text": "A button uses `[disabled]=\"isSaving\"` for its DOM property, while `[attr.aria-label]` sets an accessibility attribute."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<button [disabled]=\"isSaving\">Save</button>\n<button [attr.aria-label]=\"saveLabel\">Save</button>"
            }
        ]
    },

    "What is event binding?": {
        "id": "angular-junior-13",
        "answer": [
            {
                "type": "paragraph",
                "text": "Event binding listens for a DOM or component event and evaluates a template expression. It connects user actions such as clicks to component behavior."
            },
            {
                "type": "example",
                "text": "A button calls `addToCart(product)` when clicked, and the component updates the cart state."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<button (click)=\"addToCart(product)\">Add to cart</button>"
            }
        ]
    },

    "What is two-way binding?": {
        "id": "angular-junior-14",
        "answer": [
            {
                "type": "paragraph",
                "text": "Two-way binding combines a value flowing into a control with changes flowing back to the component. It is convenient for forms, while explicit inputs and outputs often make reusable APIs clearer."
            },
            {
                "type": "example",
                "text": "A search input uses `[(ngModel)]=\"searchTerm\"` so typing updates the component property and the current value appears in the input."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<input [(ngModel)]=\"searchTerm\" name=\"searchTerm\">\n<p>Searching for: {{ searchTerm }}</p>"
            }
        ]
    },

    "What is a structural directive?": {
        "id": "angular-junior-15",
        "answer": [
            {
                "type": "paragraph",
                "text": "A structural directive changes rendered structure, for example by conditionally including or repeating content. Angular also provides built-in control flow such as @if and @for."
            },
            {
                "type": "example",
                "text": "A page shows a loading message with `@if (loading)` and renders product rows with `@for` when data is available."
            },
            {
                "type": "code",
                "language": "html",
                "code": "@if (loading) { <p>Loading…</p> }\n@for (product of products; track product.id) { <p>{{ product.name }}</p> }"
            }
        ]
    },

    "What is an attribute directive?": {
        "id": "angular-junior-16",
        "answer": [
            {
                "type": "paragraph",
                "text": "An attribute directive changes behavior or appearance on an existing element without owning a separate template. It is useful for reusable host-element behavior."
            },
            {
                "type": "example",
                "text": "A reusable `appHighlight` directive changes an element's background when a pointer enters it, without providing a separate template."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Directive({ selector: '[appHighlight]' })\nexport class HighlightDirective {\n  // Add reusable host-element behavior here.\n}"
            }
        ]
    },

    "What is an Angular pipe?": {
        "id": "angular-junior-17",
        "answer": [
            {
                "type": "paragraph",
                "text": "A pipe transforms a value for display in a template, such as formatting a date. Pure pipes are generally more efficient; use impure pipes carefully because they may run frequently."
            },
            {
                "type": "example",
                "text": "A product page formats a price as currency and a timestamp as a readable date in the template."
            },
            {
                "type": "code",
                "language": "html",
                "code": "{{ createdAt | date:'mediumDate' }}\n{{ price | currency:'USD' }}"
            }
        ]
    },

    "What is the difference between pure and impure pipes?": {
        "id": "angular-junior-18",
        "answer": [
            {
                "type": "paragraph",
                "text": "A pure pipe runs when Angular detects a change to an input value or reference. An impure pipe can run on each change-detection cycle and should avoid expensive work."
            },
            {
                "type": "example",
                "text": "A pure currency-formatting pipe recalculates when its input changes; a pipe that scans a mutable collection on every check could become costly if impure."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Pipe({ name: 'displayName', pure: true })\nexport class DisplayNamePipe implements PipeTransform {\n  transform(name: string) { return name.trim(); }\n}"
            }
        ]
    },

    "How do component inputs and outputs work?": {
        "id": "angular-junior-19",
        "answer": [
            {
                "type": "paragraph",
                "text": "Inputs pass data from parent to child; outputs emit events from child to parent. This creates an explicit boundary and supports predictable one-way data flow."
            },
            {
                "type": "example",
                "text": "A parent passes a product into a child card through an input, and the card emits `addToCart` when its button is clicked."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Input() product!: Product;\n@Output() addToCart = new EventEmitter<Product>();\n\nonAdd() { this.addToCart.emit(this.product); }"
            }
        ]
    },

    "What is content projection?": {
        "id": "angular-junior-20",
        "answer": [
            {
                "type": "paragraph",
                "text": "Content projection lets a component render caller-provided markup through ng-content. It is useful for flexible shells such as cards, dialogs, and layout components."
            },
            {
                "type": "example",
                "text": "A shared card component provides its border and padding while the parent supplies the title and body markup through `<ng-content>`."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<!-- card component template -->\n<section class=\"card\"><ng-content></ng-content></section>"
            }
        ]
    },

    "What is a template reference variable?": {
        "id": "angular-junior-21",
        "answer": [
            {
                "type": "paragraph",
                "text": "A template reference variable gives a template a local reference to an element, directive, or component instance. Keep complex state and behavior in component logic rather than growing template-only interactions."
            },
            {
                "type": "example",
                "text": "A template uses `#emailInput` to focus an email field after the user selects Edit."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<input #emailInput type=\"email\">\n<button (click)=\"emailInput.focus()\">Edit email</button>"
            }
        ]
    },
    "What does the async pipe do?": {
        "id": "angular-junior-22",
        "answer": [
            {
                "type": "paragraph",
                "text": "The async pipe subscribes to an Observable or Promise, exposes its latest value, and manages subscription cleanup when the view is destroyed. It often avoids manual subscriptions in templates."
            },
            {
                "type": "example",
                "text": "A product page displays products returned by an HTTP service using the async pipe, without manually subscribing in the component."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "products$ = this.productService.getProducts();"
            },
            {
                "type": "code",
                "language": "html",
                "code": "@if (products$ | async; as products) {\n  @for (product of products; track product.id) {\n    <p>{{ product.name }}</p>\n  }\n}"
            }
        ]
    },

    "How do you avoid subscription memory leaks?": {
        "id": "angular-junior-23",
        "answer": [
            {
                "type": "paragraph",
                "text": "Prefer the async pipe or lifecycle-aware cleanup utilities. For manual subscriptions, bind teardown to the component lifecycle so subscriptions do not outlive their owner."
            },
            {
                "type": "example",
                "text": "A dashboard subscribes to live notifications. When the user navigates away, the subscription should be cleaned up so the destroyed component no longer processes updates."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "import { takeUntilDestroyed } from '@angular/core/rxjs-interop';\n\nconstructor() {\n  this.notificationService.notifications$\n    .pipe(takeUntilDestroyed())\n    .subscribe(notification => this.handleNotification(notification));\n}"
            }
        ]
    },

    "What is an Observable?": {
        "id": "angular-junior-24",
        "answer": [
            {
                "type": "paragraph",
                "text": "An Observable represents a sequence of values over time and can be composed with RxJS operators. It supports multiple emissions and cancellation through unsubscription."
            },
            {
                "type": "example",
                "text": "A search box emits a new search term whenever the user types. RxJS operators can filter, delay, and transform those values before making an API request."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "import { of } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nof(1, 2, 3).pipe(\n  map(value => value * 2)\n).subscribe(value => console.log(value));\n// Output: 2, 4, 6"
            }
        ]
    },

    "How does an Observable differ from a Promise?": {
        "id": "angular-junior-25",
        "answer": [
            {
                "type": "paragraph",
                "text": "A Promise normally resolves once and has no standard cancellation; an Observable can emit multiple values and can be cancelled by unsubscribing. Choose the abstraction that fits the source and lifecycle."
            },
            {
                "type": "example",
                "text": "A Promise is suitable for a single asynchronous result. An Observable is useful for a stream of search input, live notifications, or changing route parameters."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "const resultPromise = fetch('/api/products').then(r => r.json());\n\nconst result$ = this.http.get<Product[]>('/api/products');\nresult$.subscribe(products => console.log(products));"
            }
        ]
    },

    "What is a reactive form?": {
        "id": "angular-junior-26",
        "answer": [
            {
                "type": "paragraph",
                "text": "Reactive forms model controls and validation in component code with form controls and groups. They suit dynamic or complex forms and are straightforward to test. Define validators in the form model, then bind controls in the template so behavior can be tested independently."
            },
            {
                "type": "example",
                "text": "For a sign-in form, the email is required and must have valid email syntax before submission."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "import { FormControl, FormGroup, Validators } from '@angular/forms';\n\nform = new FormGroup({\n  email: new FormControl('', {\n    nonNullable: true,\n    validators: [Validators.required, Validators.email]\n  })\n});"
            },
            {
                "type": "code",
                "language": "html",
                "code": "<form [formGroup]=\"form\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" formControlName=\"email\" type=\"email\">\n  @if (form.controls.email.invalid && form.controls.email.touched) {\n    <p>Please enter a valid email address.</p>\n  }\n</form>"
            }
        ]
    },

    "What is a template-driven form?": {
        "id": "angular-junior-27",
        "answer": [
            {
                "type": "paragraph",
                "text": "Template-driven forms use directives in the template to create and manage controls. They can be concise for simple forms; reactive forms often scale better for complex behavior."
            },
            {
                "type": "example",
                "text": "A simple feedback form uses `ngModel` and template validation to collect a name and comment without defining a FormGroup in the component."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<form #feedbackForm=\"ngForm\" (ngSubmit)=\"submitFeedback()\">\n  <label for=\"name\">Name</label>\n  <input id=\"name\" name=\"name\" [(ngModel)]=\"name\" required>\n  <button type=\"submit\" [disabled]=\"feedbackForm.invalid\">Submit</button>\n</form>"
            }
        ]
    },

    "How should form validation errors be presented accessibly?": {
        "id": "angular-junior-28",
        "answer": [
            {
                "type": "paragraph",
                "text": "Associate fields with labels and error text, expose invalid state where appropriate, and announce important feedback. Make errors discoverable to keyboard and screen-reader users."
            },
            {
                "type": "example",
                "text": "When an email field is invalid, show a specific error, connect it to the input using `aria-describedby`, and set `aria-invalid` when validation fails."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<label for=\"email\">Email address</label>\n<input id=\"email\" type=\"email\"\n  aria-describedby=\"email-error\"\n  [attr.aria-invalid]=\"emailInvalid\">\n@if (emailInvalid) {\n  <p id=\"email-error\" role=\"alert\">Enter a valid email address.</p>\n}"
            }
        ]
    },

    "What is a FormGroup?": {
        "id": "angular-junior-29",
        "answer": [
            {
                "type": "paragraph",
                "text": "A FormGroup collects related controls and exposes their aggregate value and validity. Groups can be nested to represent sections of a form."
            },
            {
                "type": "example",
                "text": "A profile form groups first name, last name, and email. The group can be checked for validity before saving the profile."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "profileForm = new FormGroup({\n  firstName: new FormControl('', Validators.required),\n  lastName: new FormControl('', Validators.required),\n  email: new FormControl('', [Validators.required, Validators.email])\n});\n\nsaveProfile() {\n  if (this.profileForm.valid) {\n    console.log(this.profileForm.value);\n  }\n}"
            }
        ]
    },

    "What is ControlValueAccessor?": {
        "id": "angular-junior-30",
        "answer": [
            {
                "type": "paragraph",
                "text": "ControlValueAccessor connects a custom control to Angular forms by implementing value, touched, disabled, and change callbacks. A good custom control also supports accessible labeling and focus behavior. It is the adapter that lets custom UI participate in form validity and status."
            },
            {
                "type": "example",
                "text": "A reusable star-rating control can implement this contract so a parent form can validate its value like a native input."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  selector: 'app-rating',\n  template: '<button type=\"button\" (click)=\"selectRating(5)\">5 stars</button>',\n  providers: [{\n    provide: NG_VALUE_ACCESSOR,\n    useExisting: forwardRef(() => RatingComponent),\n    multi: true\n  }]\n})\nexport class RatingComponent implements ControlValueAccessor {\n  rating = 0;\n  disabled = false;\n  onChange: (value: number) => void = () => {};\n  onTouched: () => void = () => {};\n\n  writeValue(value: number): void { this.rating = value ?? 0; }\n  registerOnChange(fn: (value: number) => void): void { this.onChange = fn; }\n  registerOnTouched(fn: () => void): void { this.onTouched = fn; }\n  setDisabledState(disabled: boolean): void { this.disabled = disabled; }\n\n  selectRating(value: number): void {\n    if (this.disabled) return;\n    this.rating = value;\n    this.onChange(value);\n    this.onTouched();\n  }\n}"
            }
        ]
    },

    "What does the Angular Router do?": {
        "id": "angular-junior-31",
        "answer": [
            {
                "type": "paragraph",
                "text": "The Router maps URLs to views and supports navigation, parameters, guards, and lazy loading. It makes application views addressable through browser navigation and enables deep links, browser history, and feature loading boundaries."
            },
            {
                "type": "example",
                "text": "A `/products/42` route loads a product page and exposes `42` as the productId parameter."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const routes: Routes = [\n  { path: 'products/:productId', component: ProductPageComponent }\n];"
            },
            {
                "type": "code",
                "language": "html",
                "code": "<a routerLink=\"/products/42\">View product</a>\n<router-outlet />"
            }
        ]
    },

    "What is lazy loading in Angular?": {
        "id": "angular-junior-32",
        "answer": [
            {
                "type": "paragraph",
                "text": "Lazy loading defers loading a route or feature until needed. It can reduce initial transfer cost, but the resulting chunks and navigation experience should be measured."
            },
            {
                "type": "example",
                "text": "An admin dashboard is loaded only when a user navigates to the admin route, rather than being included in the initial application bundle."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const routes: Routes = [\n  {\n    path: 'admin',\n    loadComponent: () => import('./admin/admin.component')\n      .then(m => m.AdminComponent)\n  }\n];"
            }
        ]
    },

    "What are route parameters?": {
        "id": "angular-junior-33",
        "answer": [
            {
                "type": "paragraph",
                "text": "Route parameters are values embedded in a URL path, such as an item ID. Validate them before use and use them for addressable, shareable views."
            },
            {
                "type": "example",
                "text": "When a user opens `/orders/123`, the order detail component reads `123` from the route and requests that order from the backend."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "constructor(private route: ActivatedRoute) {}\n\nngOnInit() {\n  const orderId = this.route.snapshot.paramMap.get('orderId');\n  if (orderId) this.loadOrder(orderId);\n}"
            }
        ]
    },

    "What is a route guard?": {
        "id": "angular-junior-34",
        "answer": [
            {
                "type": "paragraph",
                "text": "A route guard can allow, reject, or redirect client navigation based on application state. It improves navigation behavior but never replaces server-side authorization."
            },
            {
                "type": "example",
                "text": "An application redirects unauthenticated users to the login page when they attempt to navigate to a protected dashboard."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const authGuard: CanActivateFn = () => {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n\n  return auth.isLoggedIn() ? true : router.createUrlTree(['/login']);\n};"
            }
        ]
    },

    "What is an HTTP interceptor?": {
        "id": "angular-junior-35",
        "answer": [
            {
                "type": "paragraph",
                "text": "An interceptor observes or modifies HTTP requests and responses for cross-cutting behavior such as tracing or auth metadata. Keep feature-specific policies out of global interceptors."
            },
            {
                "type": "example",
                "text": "An interceptor adds a request ID to outgoing API calls so backend logs can be correlated with frontend errors."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const requestIdInterceptor: HttpInterceptorFn = (req, next) => {\n  const requestId = crypto.randomUUID();\n  const updated = req.clone({\n    setHeaders: { 'X-Request-ID': requestId }\n  });\n  return next(updated);\n};"
            }
        ]
    },

    "How should an Angular app handle HTTP errors?": {
        "id": "angular-junior-36",
        "answer": [
            {
                "type": "paragraph",
                "text": "Normalize transport errors at a data boundary and show contextual recovery in the feature. Distinguish retryable failures and avoid exposing sensitive diagnostic details."
            },
            {
                "type": "example",
                "text": "If loading orders fails because the network is unavailable, show a friendly message and a Retry button rather than leaving the screen blank."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "this.orderService.getOrders().pipe(\n  catchError(error => {\n    this.errorMessage = 'Unable to load orders. Please try again.';\n    return of([]);\n  })\n).subscribe(orders => this.orders = orders);"
            }
        ]
    },

    "What is an Angular dependency-injection provider?": {
        "id": "angular-junior-37",
        "answer": [
            {
                "type": "paragraph",
                "text": "A provider tells Angular how to create or obtain a dependency. Its injector scope determines where the instance is shared and how long it lives."
            },
            {
                "type": "example",
                "text": "A logging service can be registered with a class provider, while a test can replace that service with a mock implementation."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "providers: [\n  { provide: LoggerService, useClass: ConsoleLoggerService }\n]"
            }
        ]
    },

    "What does providedIn: root mean?": {
        "id": "angular-junior-38",
        "answer": [
            {
                "type": "paragraph",
                "text": "providedIn: root registers a service with the application-level injector and normally creates one shared instance. A narrower scope can be used when feature-local instances are needed."
            },
            {
                "type": "example",
                "text": "An application-wide authentication service can be shared by the header, account page, and route guards."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Injectable({ providedIn: 'root' })\nexport class AuthService {\n  isLoggedIn(): boolean {\n    return Boolean(localStorage.getItem('session-marker'));\n  }\n}"
            }
        ]
    },

    "What makes a component suitable for a shared library?": {
        "id": "angular-junior-39",
        "answer": [
            {
                "type": "paragraph",
                "text": "It should solve a repeated consumer need with a stable API and clear ownership. Shared components should own reusable presentation and interaction, not unrelated business rules."
            },
            {
                "type": "example",
                "text": "A shared button supports consistent variants, disabled states, and accessibility across checkout, account, and admin features without containing any checkout-specific business logic."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  selector: 'app-button',\n  template: '<button [disabled]=\"disabled\" [type]=\"type\"><ng-content /></button>'\n})\nexport class ButtonComponent {\n  @Input() disabled = false;\n  @Input() type: 'button' | 'submit' = 'button';\n}"
            }
        ]
    },

    "How should Angular component styles be organized?": {
        "id": "angular-junior-40",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use the project styling approach and component-level styles where suitable, following shared tokens and theme conventions. Avoid brittle selectors into private template structure."
            },
            {
                "type": "example",
                "text": "A reusable card defines its layout in component SCSS and consumes design tokens for spacing and colors instead of repeating hard-coded values."
            },
            {
                "type": "code",
                "language": "scss",
                "code": ".product-card {\n  padding: var(--space-md);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n}"
            }
        ]
    },

    "What is ViewEncapsulation?": {
        "id": "angular-junior-41",
        "answer": [
            {
                "type": "paragraph",
                "text": "ViewEncapsulation controls how component styles are scoped. Emulated mode scopes selectors, Shadow DOM uses native shadow roots, and None makes styles global."
            },
            {
                "type": "example",
                "text": "A component can use the default Emulated mode to keep its styles scoped, or Shadow DOM when native browser style isolation is required."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  selector: 'app-isolated-widget',\n  template: '<p>Isolated content</p>',\n  encapsulation: ViewEncapsulation.ShadowDom\n})\nexport class IsolatedWidgetComponent {}"
            }
        ]
    },

    "Why should repeated Angular lists track items?": {
        "id": "angular-junior-42",
        "answer": [
            {
                "type": "paragraph",
                "text": "A stable tracking key lets Angular associate rendered rows with data across updates. It reduces unnecessary DOM replacement and helps preserve focus and child state."
            },
            {
                "type": "example",
                "text": "A product list tracks each product by its unique ID, allowing Angular to reuse the correct row when a product is added or the list is reordered."
            },
            {
                "type": "code",
                "language": "html",
                "code": "@for (product of products; track product.id) {\n  <app-product-row [product]=\"product\" />\n}"
            }
        ]
    },
    "What is change detection?": {
        "id": "angular-junior-43",
        "answer": [
            {
                "type": "paragraph",
                "text": "Change detection updates rendered views when application state changes. Knowing its triggers helps explain UI updates and diagnose unnecessary rendering work."
            },
            {
                "type": "example",
                "text": "When a user adds an item to a cart and the cart count changes from 2 to 3, Angular updates the displayed value to reflect the new state."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export class CartComponent {\n  itemCount = 2;\n\n  addItem() {\n    this.itemCount++;\n  }\n}"
            },
            {
                "type": "code",
                "language": "html",
                "code": "<p>Items in cart: {{ itemCount }}</p>\n<button (click)=\"addItem()\">Add item</button>"
            }
        ]
    },

    "What is OnPush change detection?": {
        "id": "angular-junior-44",
        "answer": [
            {
                "type": "paragraph",
                "text": "OnPush narrows when Angular checks a component using signals such as input changes, events, and reactive updates. It works best with intentional data flow and immutable boundaries."
            },
            {
                "type": "example",
                "text": "A product card receives a product object from its parent. Creating a new product object when its price changes makes the input change explicit and helps Angular recognize the update."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  selector: 'app-product-card',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: '<p>{{ product.name }}: {{ product.price }}</p>'\n})\nexport class ProductCardComponent {\n  @Input() product!: Product;\n}"
            }
        ]
    },

    "What are Angular Signals?": {
        "id": "angular-junior-45",
        "answer": [
            {
                "type": "paragraph",
                "text": "Signals are reactive values that notify consumers when they change. They support derived state and effects, making synchronous state dependencies explicit. Use computed signals for values derived from other state instead of storing a second value that can become stale."
            },
            {
                "type": "example",
                "text": "A shopping cart stores its items in a signal and derives the total price from the current item prices and quantities."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "items = signal<CartItem[]>([]);\n\ntotal = computed(() =>\n  this.items().reduce(\n    (sum, item) => sum + item.price * item.quantity,\n    0\n  )\n);"
            }
        ]
    },

    "How does a computed signal differ from a writable signal?": {
        "id": "angular-junior-46",
        "answer": [
            {
                "type": "paragraph",
                "text": "A writable signal stores state; a computed signal derives a value from other signals and recalculates when dependencies change. Prefer computed state over manually synchronized duplicates."
            },
            {
                "type": "example",
                "text": "A product page stores quantity in a writable signal and derives the subtotal from quantity and price with a computed signal."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "price = signal(100);\nquantity = signal(2);\nsubtotal = computed(() => this.price() * this.quantity());\n\n// Update stored state:\nthis.quantity.set(3);\n// subtotal now evaluates to 300."
            }
        ]
    },

    "How do you test an Angular component?": {
        "id": "angular-junior-47",
        "answer": [
            {
                "type": "paragraph",
                "text": "Test rendered behavior such as inputs, events, accessible output, and key states. Use the project test utilities and mock external dependencies at clear boundaries."
            },
            {
                "type": "example",
                "text": "For a counter component, verify the initial count, click the increment button, and assert that the rendered count changes."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "it('increments the count when clicked', () => {\n  const fixture = TestBed.createComponent(CounterComponent);\n  fixture.detectChanges();\n\n  fixture.nativeElement.querySelector('button').click();\n  fixture.detectChanges();\n\n  expect(fixture.nativeElement.querySelector('p').textContent)\n    .toContain('1');\n});"
            }
        ]
    },

    "What is TestBed?": {
        "id": "angular-junior-48",
        "answer": [
            {
                "type": "paragraph",
                "text": "TestBed configures an Angular test environment with imports, providers, and fixtures. It creates components using Angular dependency injection and rendering behavior."
            },
            {
                "type": "example",
                "text": "A component test configures TestBed with the component and any required dependencies, creates a fixture, and checks the rendered output."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "beforeEach(() => {\n  TestBed.configureTestingModule({\n    imports: [WelcomeComponent]\n  });\n});\n\nit('creates the component', () => {\n  const fixture = TestBed.createComponent(WelcomeComponent);\n  fixture.detectChanges();\n  expect(fixture.componentInstance).toBeTruthy();\n});"
            }
        ]
    },

    "How do you make an Angular component accessible?": {
        "id": "angular-junior-49",
        "answer": [
            {
                "type": "paragraph",
                "text": "Prefer semantic HTML, accessible names, keyboard support, visible focus, and correct help/error relationships. Combine automated checks with keyboard and assistive-technology testing."
            },
            {
                "type": "example",
                "text": "A search control uses a real label and a native button so users can identify the input and operate the control with a keyboard."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<label for=\"site-search\">Search products</label>\n<input id=\"site-search\" type=\"search\">\n<button type=\"button\" (click)=\"search()\">Search</button>"
            }
        ]
    },

    "What is Angular sanitization?": {
        "id": "angular-junior-50",
        "answer": [
            {
                "type": "paragraph",
                "text": "Angular sanitizes values in security-sensitive template contexts to reduce injection risks. Do not bypass sanitization for untrusted content; handle values according to their context."
            },
            {
                "type": "example",
                "text": "If a user submits text containing HTML tags, render it as ordinary text unless there is a specific, carefully sanitized rich-text requirement."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<p>{{ userSubmittedText }}</p>"
            }
        ]
    },

    "How would you structure a large Angular application?": {
        "id": "angular-senior-1",
        "answer": [
            {
                "type": "paragraph",
                "text": "Organize around product capabilities and clear ownership boundaries. Keep domain workflows, UI, and data-access responsibilities distinct, lazy-load meaningful routes, and expose stable contracts between features. The structure should make dependency direction, testing, and team ownership clear."
            },
            {
                "type": "example",
                "text": "An e-commerce application might have separate catalog, checkout, account, and administration features. Each feature owns its pages and workflows, while shared UI components live in a design-system library."
            },
            {
                "type": "code",
                "language": "text",
                "code": "src/app/\n  core/\n    auth/\n    http/\n  features/\n    catalog/\n    checkout/\n    account/\n  shared/\n    ui/\n    utilities/\n  app.routes.ts"
            }
        ]
    },

    "How do you optimize change detection and rendering in Angular?": {
        "id": "angular-senior-2",
        "answer": [
            {
                "type": "paragraph",
                "text": "Reproduce and profile the user-visible issue first. Inspect change-detection boundaries, template expressions, list identity, subscription lifetimes, and unnecessary work. OnPush, Signals, immutable updates, and tracking keys can improve update boundaries; verify against the supported Angular version and measure the result."
            },
            {
                "type": "example",
                "text": "A table becomes slow with thousands of rows. Profile it, replace unstable list tracking, avoid expensive function calls in the template, and consider virtual scrolling if users only need to see a small portion at once."
            },
            {
                "type": "code",
                "language": "html",
                "code": "@for (row of rows; track row.id) {\n  <app-table-row [row]=\"row\" />\n}"
            }
        ]
    },

    "How do you manage asynchronous state with RxJS and Signals?": {
        "id": "angular-senior-3",
        "answer": [
            {
                "type": "paragraph",
                "text": "Choose based on the problem: RxJS composes asynchronous streams, cancellation, and event sequences; Signals model synchronous reactive state and derived values. Keep ownership clear, handle errors and cleanup deliberately, and define explicit boundaries when bridging them."
            },
            {
                "type": "example",
                "text": "A search feature uses RxJS to debounce user input and cancel outdated requests, then exposes the resulting products and loading state to the template as reactive state."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "query = new FormControl('', { nonNullable: true });\nproducts = signal<Product[]>([]);\nloading = signal(false);\n\nconstructor() {\n  this.query.valueChanges.pipe(\n    debounceTime(300),\n    distinctUntilChanged(),\n    tap(() => this.loading.set(true)),\n    switchMap(query => this.productService.search(query).pipe(\n      catchError(() => of([]))\n    )),\n    takeUntilDestroyed()\n  ).subscribe(products => {\n    this.products.set(products);\n    this.loading.set(false);\n  });\n}"
            }
        ]
    },

    "How would you migrate a legacy Angular application safely?": {
        "id": "angular-senior-4",
        "answer": [
            {
                "type": "paragraph",
                "text": "Inventory versions, dependencies, build and test health, critical workflows, and owners. Set a support plan, automate small migration steps, and pilot with representative features. Upgrade incrementally with compatibility checks, rollback plans, and communication; track defects and blocked teams, not just package updates."
            },
            {
                "type": "example",
                "text": "For an application moving across several Angular major versions, first establish a clean build and baseline tests. Upgrade one supported version step at a time, run migrations, fix breaking changes, and validate key user journeys before continuing."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "ng version\nnpm ci\nng test\nng build\nng update @angular/core@<target-version> @angular/cli@<target-version>"
            }
        ]
    },

    "How do you define feature boundaries in a large Angular codebase?": {
        "id": "angular-senior-05",
        "answer": [
            {
                "type": "paragraph",
                "text": "Align boundaries with product capabilities, ownership, and change patterns. Keep public APIs explicit, prevent accidental cross-feature imports, and colocate implementation and tests."
            },
            {
                "type": "example",
                "text": "The checkout feature should not import private implementation files from the catalog feature. If it needs product information, expose a supported service or shared contract instead."
            },
            {
                "type": "code",
                "language": "text",
                "code": "features/\n  catalog/\n    public-api.ts\n    data-access/\n    pages/\n  checkout/\n    data-access/\n    pages/\nshared/\n  contracts/"
            }
        ]
    },

    "When would you choose standalone APIs over NgModules?": {
        "id": "angular-senior-06",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use standalone APIs for new features when they improve dependency visibility and composition. Retain existing module boundaries when migration risk outweighs the benefit, and migrate incrementally."
            },
            {
                "type": "example",
                "text": "A new reporting page can be implemented as a standalone component with explicit imports, while a stable legacy feature can continue using its existing NgModule until there is a practical reason to migrate."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  standalone: true,\n  selector: 'app-report-page',\n  imports: [CommonModule, ReportChartComponent],\n  template: '<app-report-chart />'\n})\nexport class ReportPageComponent {}"
            }
        ]
    },

    "How would you design lazy-loaded routes for a large app?": {
        "id": "angular-senior-07",
        "answer": [
            {
                "type": "paragraph",
                "text": "Group routes around user workflows and team ownership, then lazy-load meaningful feature boundaries. Measure initial and navigation costs and enforce authorization on the server."
            },
            {
                "type": "example",
                "text": "A large business application lazy-loads reporting and administration features so users who only use the dashboard do not need to download all feature code at startup."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const routes: Routes = [\n  {\n    path: 'reports',\n    loadChildren: () => import('./features/reports/reports.routes')\n      .then(m => m.REPORT_ROUTES)\n  }\n];"
            }
        ]
    },

    "How should state be shared across Angular features?": {
        "id": "angular-senior-08",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keep state with the feature that owns it and expose narrow contracts to legitimate consumers. Use URL or server state when that is the true source of truth; introduce a global store only when justified."
            },
            {
                "type": "example",
                "text": "A product filter that must be bookmarkable belongs in query parameters, while temporary expanded/collapsed state can remain local to the component."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "this.router.navigate([], {\n  queryParams: { category: selectedCategory },\n  queryParamsHandling: 'merge'\n});"
            }
        ]
    },

    "When would you choose NgRx over a lighter state solution?": {
        "id": "angular-senior-09",
        "answer": [
            {
                "type": "paragraph",
                "text": "Compare shared transition complexity, traceability, effects, selectors, and team needs. NgRx can support complex state; a service or signal store may be simpler for bounded state."
            },
            {
                "type": "example",
                "text": "A multi-step order workflow shared across many pages, with complex effects and auditable state transitions, may benefit from NgRx. A small profile preferences panel may only need a service with signals."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// A lightweight local state example\nreadonly preferences = signal({ theme: 'light', compactMode: false });\n\nsetTheme(theme: 'light' | 'dark') {\n  this.preferences.update(current => ({ ...current, theme }));\n}"
            }
        ]
    },

    "How do you prevent stale search requests from overwriting newer results?": {
        "id": "angular-senior-10",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use latest-query semantics such as switchMap to cancel or ignore prior requests. Debounce when appropriate and represent loading, empty, and error states explicitly."
            },
            {
                "type": "example",
                "text": "If a user types `ca` and quickly changes it to `cat`, the response for `ca` should not overwrite the newer `cat` results."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "this.searchControl.valueChanges.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap(query => this.productService.search(query)),\n  takeUntilDestroyed()\n).subscribe(results => this.results = results);"
            }
        ]
    },

    "How do switchMap, concatMap, mergeMap, and exhaustMap differ?": {
        "id": "angular-senior-11",
        "answer": [
            {
                "type": "paragraph",
                "text": "switchMap favors the latest inner operation; concatMap queues; mergeMap allows concurrency; exhaustMap ignores new inputs while one operation is active. Choose based on ordering and cancellation requirements."
            },
            {
                "type": "example",
                "text": "Use switchMap for search, concatMap for ordered writes, mergeMap for independent concurrent tasks, and exhaustMap for preventing repeated form submissions while a request is in progress."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Search: latest query wins\nsearchTerms$.pipe(switchMap(term => searchApi(term)));\n\n// Ordered operations: one after another\nupdates$.pipe(concatMap(update => saveApi(update)));\n\n// Independent operations may run concurrently\nfiles$.pipe(mergeMap(file => uploadApi(file)));\n\n// Ignore repeated clicks while the current request runs\nsubmitClicks$.pipe(exhaustMap(() => submitApi()));"
            }
        ]
    },

    "Where should catchError be placed in an RxJS pipeline?": {
        "id": "angular-senior-12",
        "answer": [
            {
                "type": "paragraph",
                "text": "Place recovery where the desired lifetime is clear: catching inside an inner request can keep an outer interaction stream alive. Normalize expected failures and avoid silently swallowing defects."
            },
            {
                "type": "example",
                "text": "A search stream should continue accepting future search terms even when one HTTP request fails. Catch the error inside `switchMap` so a failed request does not terminate the whole input stream."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "this.searchTerms$.pipe(\n  switchMap(term => this.searchApi(term).pipe(\n    catchError(error => {\n      this.errorMessage = 'Search failed.';\n      return of([]);\n    })\n  ))\n).subscribe(results => this.results = results);"
            }
        ]
    },

    "How would you bridge Signals and RxJS?": {
        "id": "angular-senior-13",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use explicit interop boundaries, keeping synchronous derived state in Signals and asynchronous composition in RxJS where appropriate. Avoid duplicate sources of truth and define error and cleanup behavior."
            },
            {
                "type": "example",
                "text": "A signal holds the current search term, while RxJS handles debouncing and HTTP cancellation. Angular's interop utilities can convert between these reactive models when needed."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "import { toObservable, toSignal } from '@angular/core/rxjs-interop';\n\nquery = signal('');\nresults = toSignal(\n  toObservable(this.query).pipe(\n    debounceTime(300),\n    switchMap(query => this.searchService.search(query))\n  ),\n  { initialValue: [] as Product[] }\n);"
            }
        ]
    },
    "When should an Angular effect be used?": {
        "id": "angular-senior-14",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use an effect to synchronize signal state with an imperative API or external side effect. Prefer computed signals for derived values, and avoid using effects to copy one signal into another when a computed value would be clearer."
            },
            {
                "type": "example",
                "text": "A theme signal can update a browser preference or an external widget when the theme changes. If the value is only used to display the theme in the template, a separate effect is unnecessary."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "theme = signal<'light' | 'dark'>('light');\n\nconstructor() {\n  effect(() => {\n    const currentTheme = this.theme();\n    document.documentElement.dataset['theme'] = currentTheme;\n  });\n}"
            }
        ]
    },

    "How would you diagnose a slow Angular view?": {
        "id": "angular-senior-15",
        "answer": [
            {
                "type": "paragraph",
                "text": "Start by reproducing the issue and measuring it. Use browser performance tools and Angular profiling where available to distinguish expensive JavaScript, change detection, DOM work, network delays, and rendering. Make one targeted change at a time and compare measurements."
            },
            {
                "type": "example",
                "text": "If a dashboard takes several seconds to update, check whether template methods repeatedly perform expensive filtering, whether lists have stable tracking keys, and whether a large amount of DOM is rendered unnecessarily."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Prefer computing filtered data when its dependencies change.\nfilteredProducts = computed(() => {\n  const term = this.searchTerm().toLowerCase();\n  return this.products().filter(product =>\n    product.name.toLowerCase().includes(term)\n  );\n});"
            }
        ]
    },

    "How do you apply OnPush safely?": {
        "id": "angular-senior-16",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define clear input ownership, prefer immutable updates, and use Signals or observable template bindings for reactive values. Test event handlers, asynchronous updates, and third-party integrations so the UI does not depend on accidental change-detection behavior."
            },
            {
                "type": "example",
                "text": "When a product price changes, replace the product object rather than mutating the existing object in place. This makes the change visible at the component input boundary."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "updatePrice(productId: number, price: number) {\n  this.products.update(products =>\n    products.map(product =>\n      product.id === productId\n        ? { ...product, price }\n        : product\n    )\n  );\n}"
            }
        ]
    },

    "How would you optimize a very large Angular list?": {
        "id": "angular-senior-17",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use stable identity tracking, reduce per-row computation, and render only the visible portion of very large datasets when appropriate. Consider pagination, virtual scrolling, server-side filtering, and accessible keyboard behavior based on the use case."
            },
            {
                "type": "example",
                "text": "For a table with 20,000 records, virtual scrolling can keep the number of rendered rows small instead of creating thousands of DOM elements at once."
            },
            {
                "type": "code",
                "language": "html",
                "code": "@for (product of products; track product.id) {\n  <app-product-row [product]=\"product\" />\n}"
            }
        ]
    },

    "How do you investigate memory growth after route navigation?": {
        "id": "angular-senior-18",
        "answer": [
            {
                "type": "paragraph",
                "text": "Take heap snapshots before and after repeated navigation, inspect retained objects, and look for subscriptions, event listeners, timers, detached DOM nodes, and services that retain component references. Verify cleanup and repeat the experiment to distinguish a leak from legitimate caching."
            },
            {
                "type": "example",
                "text": "If each visit to a reporting page adds another global event listener, the listener may retain the component after navigation. Register cleanup or use an Angular lifecycle-aware subscription pattern."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "constructor() {\n  fromEvent(window, 'resize').pipe(\n    takeUntilDestroyed()\n  ).subscribe(() => this.updateLayout());\n}"
            }
        ]
    },

    "What should be considered for Angular SSR and hydration?": {
        "id": "angular-senior-19",
        "answer": [
            {
                "type": "paragraph",
                "text": "Consider server rendering cost, browser-only APIs, data transfer, caching, security, and hydration consistency. Keep server and browser initial markup compatible, avoid request-specific state leaking between users, and measure both server response time and client interactivity."
            },
            {
                "type": "example",
                "text": "A component that reads window width during server rendering may fail because window does not exist on the server. Move browser-specific work to an appropriate browser-only lifecycle or platform-guarded path."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "import { isPlatformBrowser } from '@angular/common';\nimport { PLATFORM_ID, inject } from '@angular/core';\n\nprivate platformId = inject(PLATFORM_ID);\n\nreadViewportWidth() {\n  if (isPlatformBrowser(this.platformId)) {\n    return window.innerWidth;\n  }\n  return null;\n}"
            }
        ]
    },

    "What commonly causes hydration mismatches?": {
        "id": "angular-senior-20",
        "answer": [
            {
                "type": "paragraph",
                "text": "Hydration mismatches can arise when server and browser render different initial structures or values. Common causes include random values, time-dependent output, browser-only state, invalid HTML nesting, and data that changes between server rendering and hydration."
            },
            {
                "type": "example",
                "text": "Rendering the current time independently on the server and browser can produce different text. Use a consistent transferred value or defer client-specific display until the appropriate stage."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Avoid generating independent initial values in both environments.\n// Prefer a stable value supplied by application state or server data.\nreadonly reportTitle = signal('Monthly report');"
            }
        ]
    },

    "How would you plan a major Angular version upgrade?": {
        "id": "angular-senior-21",
        "answer": [
            {
                "type": "paragraph",
                "text": "Review Angular's official version compatibility and migration guidance, inventory dependencies, and establish build, test, and performance baselines. Upgrade in supported steps, run migrations, resolve breaking changes, and validate critical user flows before deployment."
            },
            {
                "type": "example",
                "text": "Before upgrading a large application, test the upgrade on a representative feature branch, verify UI libraries and build tooling, and prepare a rollback strategy for production."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "ng version\nnpm ci\nng test\nng build\nng update @angular/core @angular/cli"
            }
        ]
    },

    "How do you support multiple Angular versions in a shared library?": {
        "id": "angular-senior-22",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define a supported compatibility range and publish clear peer dependency requirements. Test against the versions you claim to support, avoid relying on undocumented framework internals, and use separate release lines only when the compatibility cost justifies them."
            },
            {
                "type": "example",
                "text": "A shared UI library used by several applications can publish a compatible major release and document which Angular versions it supports. Applications should validate the peer dependencies before adopting the package."
            },
            {
                "type": "code",
                "language": "json",
                "code": "{\n  \"peerDependencies\": {\n    \"@angular/common\": \"^19.0.0 || ^20.0.0\",\n    \"@angular/core\": \"^19.0.0 || ^20.0.0\"\n  }\n}"
            }
        ]
    },

    "How do you choose a monorepo strategy for Angular products?": {
        "id": "angular-senior-23",
        "answer": [
            {
                "type": "paragraph",
                "text": "Choose based on repository size, team autonomy, shared code, build performance, dependency constraints, and release requirements. Establish ownership rules, affected-project testing, consistent tooling, and enforceable boundaries. A monorepo is valuable when shared development and coordinated changes outweigh the cost of repository-wide governance."
            },
            {
                "type": "example",
                "text": "Several related applications may share a design system and API client in a monorepo, while unrelated products with separate release and access requirements may be better maintained independently."
            },
            {
                "type": "code",
                "language": "text",
                "code": "apps/\n  customer-portal/\n  admin-portal/\nlibs/\n  design-system/\n  api-client/\n  shared-models/"
            }
        ]
    },

    "How do you design a stable Angular library API?": {
        "id": "angular-senior-24",
        "answer": [
            {
                "type": "paragraph",
                "text": "Expose only intentional public symbols, keep implementation details private, document behavior, and use semantic versioning. Prefer composable APIs with clear input, output, error, and accessibility contracts. Add compatibility tests before changing public behavior."
            },
            {
                "type": "example",
                "text": "A button library should expose supported variants and events through its public API instead of requiring consumers to import internal component files or depend on private CSS selectors."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Public entry point\nexport { UiButtonComponent } from './lib/button/ui-button.component';\nexport type { UiButtonVariant } from './lib/button/ui-button.types';"
            }
        ]
    },

    "How would you create reusable form controls for product teams?": {
        "id": "angular-senior-25",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define a consistent contract for value, disabled state, touched state, validation, accessibility, and styling. Implement ControlValueAccessor when a custom component needs to participate in Angular forms, and test keyboard interaction and form integration."
            },
            {
                "type": "example",
                "text": "A reusable date picker should work with reactive forms, respect disabled state, propagate selected values, and expose validation errors in an accessible way."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export class UiTextInputComponent implements ControlValueAccessor {\n  value = '';\n  disabled = false;\n  private onChange = (_value: string) => {};\n  private onTouched = () => {};\n\n  writeValue(value: string | null): void {\n    this.value = value ?? '';\n  }\n\n  registerOnChange(fn: (value: string) => void): void {\n    this.onChange = fn;\n  }\n\n  registerOnTouched(fn: () => void): void {\n    this.onTouched = fn;\n  }\n\n  setDisabledState(disabled: boolean): void {\n    this.disabled = disabled;\n  }\n}"
            }
        ]
    },

    "How would you implement cross-field validation?": {
        "id": "angular-senior-26",
        "answer": [
            {
                "type": "paragraph",
                "text": "Attach a validator to the common parent FormGroup when validity depends on multiple controls. Return a validation error from the group validator and keep display logic separate from validation logic."
            },
            {
                "type": "example",
                "text": "A registration form requires the password and confirmation fields to match. The validator compares both values and reports a group-level error if they differ."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "const passwordMatch: ValidatorFn = (control) => {\n  const password = control.get('password')?.value;\n  const confirmation = control.get('confirmation')?.value;\n\n  return password === confirmation\n    ? null\n    : { passwordMismatch: true };\n};\n\nform = new FormGroup({\n  password: new FormControl('', Validators.required),\n  confirmation: new FormControl('', Validators.required)\n}, { validators: passwordMatch });"
            }
        ]
    },

    "How should asynchronous validators handle network failures?": {
        "id": "angular-senior-27",
        "answer": [
            {
                "type": "paragraph",
                "text": "Distinguish a confirmed validation failure from an unavailable validation service. Return the correct validation result for known outcomes, handle request errors explicitly, and decide whether the product should fail open or fail closed based on the risk. Avoid leaving controls permanently pending."
            },
            {
                "type": "example",
                "text": "A username availability check can return an error when the name is already taken. If the endpoint is unavailable, the UI should communicate that availability could not be checked rather than incorrectly claiming the username is taken."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "const usernameAvailable: AsyncValidatorFn = control =>\n  usernameService.isAvailable(control.value).pipe(\n    map(available => available ? null : { usernameTaken: true }),\n    catchError(() => of({ availabilityCheckFailed: true }))\n  );"
            }
        ]
    },

    "How do you prevent duplicate submissions in a reactive form?": {
        "id": "angular-senior-28",
        "answer": [
            {
                "type": "paragraph",
                "text": "Disable the submit control while processing, guard against repeated events, and use an RxJS strategy appropriate to the operation. The backend should also protect important writes against duplicate requests when necessary."
            },
            {
                "type": "example",
                "text": "A payment form should not start a second payment request because the user double-clicked. Use exhaustMap or an explicit in-flight guard, and use server-side idempotency for payment operations."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "submitClicks$.pipe(\n  exhaustMap(() => {\n    this.submitting.set(true);\n    return this.paymentService.pay(this.form.getRawValue()).pipe(\n      finalize(() => this.submitting.set(false))\n    );\n  })\n).subscribe();"
            }
        ]
    },

    "How would you structure HTTP caching and invalidation?": {
        "id": "angular-senior-29",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define cache ownership, key construction, expiration, invalidation, and handling of concurrent requests. Use HTTP caching semantics where appropriate, and avoid caching user-specific or sensitive responses without deliberate isolation. Invalidate affected data after mutations."
            },
            {
                "type": "example",
                "text": "A product details cache can reuse a recent GET response, then invalidate the corresponding product entry after an update so the UI does not keep displaying stale details."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "private cache = new Map<number, Product>();\n\ngetProduct(id: number) {\n  const cached = this.cache.get(id);\n  if (cached) return of(cached);\n\n  return this.http.get<Product>(`/api/products/${id}`).pipe(\n    tap(product => this.cache.set(id, product))\n  );\n}\n\nupdateProduct(product: Product) {\n  return this.http.put<Product>(`/api/products/${product.id}`, product).pipe(\n    tap(updated => this.cache.set(updated.id, updated))\n  );\n}"
            }
        ]
    },

    "How do you avoid hidden behavior in HTTP interceptors?": {
        "id": "angular-senior-30",
        "answer": [
            {
                "type": "paragraph",
                "text": "Keep interceptors focused on cross-cutting concerns such as authentication headers, tracing, and consistent error handling. Avoid implicit retries or transformations that change request semantics unexpectedly. Document ordering and test interactions between interceptors."
            },
            {
                "type": "example",
                "text": "An authentication interceptor can add a bearer token to requests sent to the trusted API origin, but should not attach the token indiscriminately to arbitrary external URLs."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).getAccessToken();\n  const trustedApi = req.url.startsWith('/api/');\n\n  if (!token || !trustedApi) {\n    return next(req);\n  }\n\n  return next(req.clone({\n    setHeaders: { Authorization: `Bearer ${token}` }\n  }));\n};"
            }
        ]
    },

    "How do you secure Angular routes and APIs?": {
        "id": "angular-senior-31",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use route guards to control client navigation and improve user experience, but enforce authentication and authorization on the server for every protected operation. Validate inputs server-side, protect tokens, use appropriate content security controls, and avoid treating hidden UI as a security boundary."
            },
            {
                "type": "example",
                "text": "A route guard may redirect unauthenticated users to the login page. The API must still reject a direct request from an unauthorized user, even if they bypass the Angular application."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "export const authGuard: CanActivateFn = () => {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n\n  return auth.isAuthenticated()\n    ? true\n    : router.createUrlTree(['/login']);\n};"
            }
        ]
    },

    "How do you handle concurrent token refresh requests?": {
        "id": "angular-senior-32",
        "answer": [
            {
                "type": "paragraph",
                "text": "Coordinate refresh so concurrent unauthorized responses share a single refresh operation. Queue or replay eligible requests after refresh succeeds, prevent refresh loops, and handle refresh failure by clearing the session and redirecting appropriately. Protect refresh credentials according to the application's authentication architecture."
            },
            {
                "type": "example",
                "text": "If five API calls fail with an expired access token at once, the client should normally perform one refresh request rather than send five competing refresh requests."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "private refreshInProgress = false;\nprivate refreshResult$?: Observable<string>;\n\nrefreshTokenOnce(): Observable<string> {\n  if (!this.refreshInProgress) {\n    this.refreshInProgress = true;\n    this.refreshResult$ = this.authApi.refresh().pipe(\n      map(result => result.accessToken),\n      finalize(() => {\n        this.refreshInProgress = false;\n        this.refreshResult$ = undefined;\n      }),\n      shareReplay({ bufferSize: 1, refCount: false })\n    );\n  }\n\n  return this.refreshResult$!;\n}"
            }
        ]
    },

    "How do you safely display rich text in Angular?": {
        "id": "angular-senior-33",
        "answer": [
            {
                "type": "paragraph",
                "text": "Treat rich text as untrusted input unless its origin and integrity are established. Use a maintained sanitizer with a restrictive allowlist, avoid bypassing Angular security protections, and consider URL schemes, embedded media, and links as separate risks."
            },
            {
                "type": "example",
                "text": "If a CMS provides formatted article content, sanitize it according to the allowed formatting and link policy before rendering. Plain interpolation is safer when formatting is not required."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Prefer plain text when HTML formatting is unnecessary.\n@Component({\n  selector: 'app-article-preview',\n  template: '<p>{{ articleSummary }}</p>'\n})\nexport class ArticlePreviewComponent {\n  articleSummary = 'Article summary supplied by the CMS';\n}"
            }
        ]
    },

    "How would you build an accessible Angular design system?": {
        "id": "angular-senior-34",
        "answer": [
            {
                "type": "paragraph",
                "text": "Build reusable components around semantic HTML, keyboard behavior, focus management, accessible names, and documented interaction patterns. Establish design tokens, accessibility acceptance criteria, automated checks, and manual testing with assistive technologies."
            },
            {
                "type": "example",
                "text": "A shared modal component should manage focus when opened, keep keyboard focus within the modal when appropriate, close predictably, and restore focus to the triggering element when dismissed."
            },
            {
                "type": "code",
                "language": "html",
                "code": "<button type=\"button\" aria-haspopup=\"dialog\" (click)=\"openDialog()\">\n  View details\n</button>\n\n<section role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title\">\n  <h2 id=\"dialog-title\">Product details</h2>\n  <p>Product information goes here.</p>\n  <button type=\"button\" (click)=\"closeDialog()\">Close</button>\n</section>"
            }
        ]
    },

    "What should an accessible overlay service guarantee?": {
        "id": "angular-senior-35",
        "answer": [
            {
                "type": "paragraph",
                "text": "An overlay service should provide reliable focus management, keyboard dismissal where appropriate, accessible labels, scroll handling, predictable stacking, and cleanup when closed. It should also define behavior for nested overlays and prevent focus from being lost behind modal content."
            },
            {
                "type": "example",
                "text": "When a confirmation dialog opens, focus moves to an appropriate control. Pressing Escape closes it when allowed, and focus returns to the button that opened the dialog."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Conceptual overlay lifecycle\nopenDialog() {\n  this.previousFocus = document.activeElement as HTMLElement;\n  this.isOpen = true;\n  // After rendering, move focus into the dialog.\n}\n\ncloseDialog() {\n  this.isOpen = false;\n  this.previousFocus?.focus();\n}"
            }
        ]
    },

    "What testing layers do you use for Angular applications?": {
        "id": "angular-senior-36",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use a testing pyramid appropriate to the application: unit tests for isolated logic, component tests for rendering and interaction, integration tests for feature boundaries, and end-to-end tests for critical user journeys. Add accessibility, contract, and performance checks where they provide measurable value."
            },
            {
                "type": "example",
                "text": "A checkout feature may unit-test price calculations, component-test form validation, integration-test the payment service boundary, and use an end-to-end test to verify a complete purchase flow."
            },
            {
                "type": "code",
                "language": "text",
                "code": "Unit tests:\n  Price calculations, validators, reducers\n\nComponent tests:\n  Rendering, inputs, outputs, interactions\n\nIntegration tests:\n  Feature services, routing, API contracts\n\nEnd-to-end tests:\n  Login, checkout, order confirmation"
            }
        ]
    },

    "How do you reduce flaky Angular browser tests?": {
        "id": "angular-senior-37",
        "answer": [
            {
                "type": "paragraph",
                "text": "Replace arbitrary sleeps with condition-based waits, control test data, isolate external dependencies, and use stable selectors. Make asynchronous behavior observable, clean up state between tests, and investigate failures instead of automatically retrying them indefinitely."
            },
            {
                "type": "example",
                "text": "Instead of waiting two seconds after clicking Search, wait until the results region contains the expected product or displays an explicit empty state."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Example using a browser-testing locator API\nawait page.getByRole('button', { name: 'Search' }).click();\nawait expect(page.getByTestId('search-results'))\n  .toContainText('Laptop');"
            }
        ]
    },

    "How can contract tests help frontend integration?": {
        "id": "angular-senior-38",
        "answer": [
            {
                "type": "paragraph",
                "text": "Contract tests verify that frontend expectations about API requests and responses match the service contract. They help detect breaking changes early, reduce integration surprises, and clarify required fields, error formats, and optional values."
            },
            {
                "type": "example",
                "text": "If the frontend expects an order response to contain an order ID and status, contract tests can catch a backend change that renames the status field before it reaches production."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "interface OrderResponse {\n  id: string;\n  status: 'pending' | 'confirmed' | 'cancelled';\n}\n\nfunction displayOrder(order: OrderResponse): string {\n  return `${order.id}: ${order.status}`;\n}"
            }
        ]
    },

    "How do you design design tokens and themes for Angular products?": {
        "id": "angular-senior-39",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define tokens for color, typography, spacing, borders, elevation, and interaction states. Keep semantic tokens separate from raw palette values, support themes through CSS custom properties, and validate contrast and consistency across components."
            },
            {
                "type": "example",
                "text": "A button should use a semantic token such as --color-primary rather than hardcoding the same blue value in multiple component stylesheets. A dark theme can then change the token without rewriting every button."
            },
            {
                "type": "code",
                "language": "css",
                "code": ":root {\n  --color-primary: #2457c5;\n  --color-surface: #ffffff;\n  --color-text: #202124;\n  --space-medium: 1rem;\n}\n\n[data-theme='dark'] {\n  --color-primary: #9bb8ff;\n  --color-surface: #1f1f1f;\n  --color-text: #f5f5f5;\n}\n\n.button {\n  background: var(--color-primary);\n  padding: var(--space-medium);\n}"
            }
        ]
    },

    "How do you prevent CSS leakage between Angular components?": {
        "id": "angular-senior-40",
        "answer": [
            {
                "type": "paragraph",
                "text": "Use Angular's component style encapsulation where appropriate, scope selectors carefully, and avoid broad global rules. Keep global styles limited to intentional resets, tokens, and typography. Remember that global styles, overlays rendered outside a component subtree, and disabled encapsulation need separate consideration."
            },
            {
                "type": "example",
                "text": "A component-specific `.card-title` selector should not accidentally style every card title in the application. Prefer component-scoped styles or an explicitly namespaced class for shared global styling."
            },
            {
                "type": "code",
                "language": "css",
                "code": ":host .product-card__title {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n\n/* Avoid broad rules such as: */\n/* h2 { color: red; } */"
            }
        ]
    },

    "How should Angular consume Web Components?": {
        "id": "angular-senior-41",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define a clear contract for custom-element properties, attributes, events, styling, and lifecycle. Configure Angular to recognize custom elements when necessary, and verify how complex values and custom events are passed. Test interoperability across browsers and framework versions."
            },
            {
                "type": "example",
                "text": "An Angular application may consume a design-system Web Component named app-date-picker. The integration must define how the selected date is supplied and how selection events are received."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  selector: 'app-booking-form',\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  template: `\n    <app-date-picker\n      [selected-date]=\"selectedDate\"\n      (date-change)=\"onDateChange($event)\">\n    </app-date-picker>\n  `\n})\nexport class BookingFormComponent {\n  selectedDate = '';\n\n  onDateChange(event: Event) {\n    this.selectedDate = (event as CustomEvent<string>).detail;\n  }\n}"
            }
        ]
    },

    "How do you make an Angular package tree-shakeable?": {
        "id": "angular-senior-42",
        "answer": [
            {
                "type": "paragraph",
                "text": "Publish modern ES module output, expose deliberate entry points, avoid unnecessary top-level side effects, and keep dependencies and exports explicit. Verify the production bundle to confirm unused code is actually removed."
            },
            {
                "type": "example",
                "text": "If an application imports only a button component from a UI library, the build should not include unrelated charting or editor functionality unless it is required by the button's dependency graph."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "// Public entry point\nexport { UiButtonComponent } from './lib/button/ui-button.component';\n\n// Import only the API needed by the consumer\nimport { UiButtonComponent } from '@company/ui/button';"
            }
        ]
    },

    "How do you set bundle budgets for Angular apps?": {
        "id": "angular-senior-43",
        "answer": [
            {
                "type": "paragraph",
                "text": "Set warning and error budgets for initial bundles and component styles based on measured baselines and product performance goals. Review budget changes explicitly and monitor real-user performance alongside build output."
            },
            {
                "type": "example",
                "text": "A CI build can warn when the initial bundle grows beyond its target and fail when it exceeds a stricter upper limit, preventing gradual bundle growth from going unnoticed."
            },
            {
                "type": "code",
                "language": "json",
                "code": "\"budgets\": [\n  {\n    \"type\": \"initial\",\n    \"maximumWarning\": \"500kb\",\n    \"maximumError\": \"1mb\"\n  },\n  {\n    \"type\": \"anyComponentStyle\",\n    \"maximumWarning\": \"8kb\",\n    \"maximumError\": \"12kb\"\n  }\n]"
            }
        ]
    },

    "How should feature flags be implemented?": {
        "id": "angular-senior-44",
        "answer": [
            {
                "type": "paragraph",
                "text": "Centralize flag evaluation, define defaults and failure behavior, and distinguish release flags from permission checks. Flags should have owners, expiry or review dates, and tests for both enabled and disabled states. Never use client-side flags as an authorization boundary."
            },
            {
                "type": "example",
                "text": "A team can gradually expose a redesigned dashboard to a small percentage of users. The backend must still enforce access to protected data regardless of the dashboard flag."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "readonly flags = signal({ newDashboard: false });\n\nshowNewDashboard = computed(() =>\n  this.flags().newDashboard\n);"
            }
        ]
    },

    "What does reliable offline support require?": {
        "id": "angular-senior-45",
        "answer": [
            {
                "type": "paragraph",
                "text": "Reliable offline behavior requires an explicit caching policy, a service worker where appropriate, a plan for stale data, and clear handling of failed requests. For offline writes, define persistence, retry, conflict resolution, and user feedback. Do not assume that installing a service worker makes every feature work offline."
            },
            {
                "type": "example",
                "text": "A field-service application might cache read-only job details and queue completed inspection forms locally until connectivity returns. It should show which submissions are pending synchronization."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "interface PendingSubmission {\n  id: string;\n  payload: InspectionForm;\n  status: 'pending' | 'synced' | 'failed';\n}\n\n// Persist pending submissions locally and synchronize them\n// when connectivity is restored."
            }
        ]
    },

    "How would you migrate NgModule features to standalone incrementally?": {
        "id": "angular-senior-46",
        "answer": [
            {
                "type": "paragraph",
                "text": "Start with a small, well-tested feature and convert its components to standalone APIs. Update imports and route configuration, verify dependency boundaries, and keep compatible NgModule-based features working during the transition. Use Angular's migration tooling where supported."
            },
            {
                "type": "example",
                "text": "A team can convert a self-contained reporting page first, then migrate its child components and routing before moving to more tightly coupled legacy features."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "@Component({\n  standalone: true,\n  selector: 'app-reports',\n  imports: [CommonModule, ReportSummaryComponent],\n  template: '<app-report-summary />'\n})\nexport class ReportsComponent {}"
            }
        ]
    },

    "How do you lead an Angular architecture change across teams?": {
        "id": "angular-senior-47",
        "answer": [
            {
                "type": "paragraph",
                "text": "Explain the problem and measurable goals, document alternatives and trade-offs, and involve the teams affected by the change. Create a reference implementation, migration guidance, automated guardrails, and a phased adoption plan. Gather feedback and measure outcomes instead of relying on mandates alone."
            },
            {
                "type": "example",
                "text": "When introducing a shared design system, pilot it in one application, document migration patterns, provide examples and support, and track adoption and accessibility defects before expanding to other teams."
            },
            {
                "type": "code",
                "language": "text",
                "code": "1. Assess current pain points and dependencies\n2. Define target architecture and decision records\n3. Build a representative pilot\n4. Publish migration guides and reusable examples\n5. Adopt incrementally with CI guardrails\n6. Measure adoption, defects, and delivery impact"
            }
        ]
    },

    "What should block an Angular release in CI?": {
        "id": "angular-senior-48",
        "answer": [
            {
                "type": "paragraph",
                "text": "Block releases on failures that violate agreed quality or security requirements, such as compilation errors, critical tests, dependency vulnerabilities above policy thresholds, unacceptable bundle growth, or failed release checks. Make flaky-test handling explicit and ensure bypasses are controlled and auditable."
            },
            {
                "type": "example",
                "text": "A release pipeline can require a successful production build, unit tests, critical end-to-end flows, and a dependency scan before allowing deployment."
            },
            {
                "type": "code",
                "language": "yaml",
                "code": "steps:\n  - name: Install dependencies\n    run: npm ci\n  - name: Build\n    run: npm run build\n  - name: Unit tests\n    run: npm test -- --watch=false\n  - name: Dependency audit\n    run: npm audit --audit-level=high"
            }
        ]
    },

    "How should errors be handled across Angular features?": {
        "id": "angular-senior-49",
        "answer": [
            {
                "type": "paragraph",
                "text": "Define consistent error categories and decide which layer owns recovery. Feature-level code should handle expected failures and provide useful user actions; global handlers can capture unexpected errors for observability. Avoid exposing sensitive details or silently converting every failure into success-shaped data."
            },
            {
                "type": "example",
                "text": "A failed profile update should display an actionable message and preserve the user's input. An unexpected programming error should be logged with diagnostic context while the interface avoids showing stack traces."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "this.profileService.updateProfile(this.form.getRawValue()).pipe(\n  catchError(error => {\n    this.errorMessage = 'Unable to save your profile. Please try again.';\n    this.logger.error('Profile update failed', error);\n    return EMPTY;\n  })\n).subscribe(() => {\n  this.successMessage = 'Profile saved.';\n});"
            }
        ]
    },

    "What observability is useful for an Angular application?": {
        "id": "angular-senior-50",
        "answer": [
            {
                "type": "paragraph",
                "text": "Track frontend errors, failed API requests, navigation performance, Core Web Vitals, and important user-flow outcomes. Correlate events with releases and environment details while respecting consent and privacy. Avoid collecting secrets, access tokens, or unnecessary personal information."
            },
            {
                "type": "example",
                "text": "If a release increases the number of failed checkout requests or worsens interaction latency, telemetry can help identify the affected version, browser, route, and API dependency."
            },
            {
                "type": "code",
                "language": "typescript",
                "code": "try {\n  await this.checkoutService.submitOrder(order);\n} catch (error) {\n  this.telemetry.captureException(error, {\n    feature: 'checkout',\n    action: 'submit-order',\n    release: this.releaseVersion\n  });\n  throw error;\n}"
            }
        ]
    }
};

export const angularLevelQuestionIds = {
    junior: Object.values(angularQuestionBank)
        .filter(({ id }) => id.startsWith('angular-junior-'))
        .map(({ id }) => id),

    senior: Object.values(angularQuestionBank)
        .filter(({ id }) => id.startsWith('angular-senior-'))
        .map(({ id }) => id)
};