// ╔══════════════════════════════════════════════════════════════════════════╗
// ║   iOS Senior/Lead Engineering Curriculum — Turon Business Edition        ║
// ║   3 Months · 12 Modules · Aligned to 5-Layer System Design Architecture  ║
// ║   Target: Middle → Senior / Lead iOS Engineers                           ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// ── Month Map ─────────────────────────────────────────────────────────────────
//
//  MONTH 1 — Architecture Foundation          (Modules 01 – 04)
//     01 · SPM Modular Infrastructure
//     02 · SwiftUI Mastery & App Root Architecture
//     03 · Protocol-Oriented Design & AppEnvironment
//     04 · Dependency Injection & DI Container
//
//  MONTH 2 — RIBs Core Architecture           (Modules 05 – 08)
//     05 · RIBs Layer 1 — Builder & Composition Root
//     06 · RIBs Layer 2 — Interactor & Business Logic
//     07 · RIBs Layer 3 — Router & Navigation Architecture
//     08 · Advanced Custom Property Wrappers
//
//  MONTH 3 — Production-Grade Engineering     (Modules 09 – 12)
//     09 · Swift 6 Strict Concurrency & Thread Safety
//     10 · Advanced Protocol-Oriented Networking
//     11 · Enterprise SDK Integrations & Production Systems
//     12 · Testing, QA & Architecture Defence
//
// ─────────────────────────────────────────────────────────────────────────────

import type { Translations } from '../i18n/index.ts';

export interface SubSection {
  head: string;
  items: string[];
}

export interface Module {
  num: string;
  category: string;
  title: string;
  subsections: SubSection[];
}

export interface Month {
  name: string;
  items: Module[];
}

export function getModules(): Module[] {
  return [

    // ══════════════════════════════════════════════════════════════════════════
    // MONTH 1 — ARCHITECTURE FOUNDATION
    // ══════════════════════════════════════════════════════════════════════════

    // ── MODULE 01 ─────────────────────────────────────────────────────────────
    {
      num: '01',
      category: 'Modular Architecture',
      title: 'SPM Modular Infrastructure',
      subsections: [
        {
          head: 'Why Modularise? The Compile-Time Isolation Principle',
          items: [
            'Monolith vs. modular: build time, coupling, and testability comparison',
            'Compiler-enforced boundaries: why SPM beats "by convention" rules',
            'The 5-layer dependency graph: DesignSystem ← SharedPackage ← CorePackage ← Feature modules',
            'Visualising your module graph and detecting illegal imports before they ship',
          ],
        },
        {
          head: 'DesignSystem Package — Single Source of Visual Truth',
          items: [
            'Package.swift anatomy: products, targets, platforms, swiftLanguageModes: [.v6]',
            'DSColor, DSFont, DSSpacing, DSRadius, DSIconSize — semantic token design',
            'DSImage: xcassets inside SPM, resource bundling with .process("Resources")',
            'ShimmerModifier, LanguagePicker — reusable SwiftUI components with no feature knowledge',
            'Localizable.xcstrings: multi-language string catalogue inside a package',
          ],
        },
        {
          head: 'SharedPackage — Cross-Cutting Utilities & UI Primitives',
          items: [
            'SharedUI: InputCells (TextInputField, PasswordInputField, PhoneInputField, PinCodeInputField)',
            'VerificationField, AmountInputParser, SelectInputField — reusable form infrastructure',
            'SharedUtils: BiometricAuth, NetworkMonitor, CurrencyFormatter, DateUtils, DecimalUtils',
            'IBANUtils, CardNumberUtils, ClipboardManager, HapticManager, BankValidator',
            'Storage layer: KeychainStorage, SecureStorage, MKeychainManager, UserDefault wrapper',
          ],
        },
        {
          head: 'CorePackage — App-Wide Protocols, DI & Global Managers',
          items: [
            'CorePackage responsibility: owns AppEnvironment, DependencyContainer, AppRoot, FeatureRouting',
            'GlobalManagers: AppStateManager, LanguageManager, GlobalLoadingManager, SnackBarManager',
            'KeychainManager + PinCodeKeychainService: unified secure storage façade',
            'ThemeManager, ThemeModifier, AppTheme: scheme-aware dark/light mode architecture',
            'Binary target integration: MetinSDK.xcframework as .binaryTarget in Package.swift',
          ],
        },
        {
          head: 'Feature Package Anatomy — AuthFeature / DashboardFeature Deep Dive',
          items: [
            'Feature package structure: Sources/FeatureName, Resources, Package.swift dependencies',
            'Allowed imports: CorePackage, SharedPackage, NetworkCore, DesignSystem — never another Feature',
            'Demo target pattern: AuthFeatureDemoApp, HistoryFeatureDemoApp — independent preview apps',
            'Intra-package access control: public only on Builder.makeRootView(), everything else internal',
            'Practicum: scaffold a new feature package from scratch with correct dependency graph',
          ],
        },
      ],
    },

    // ── MODULE 02 ─────────────────────────────────────────────────────────────
    {
      num: '02',
      category: 'SwiftUI Foundations',
      title: 'SwiftUI Mastery & App Root Architecture',
      subsections: [
        {
          head: 'Modern SwiftUI State Management (Swift 6 Edition)',
          items: [
            '@State, @Binding, @Bindable — ownership and mutation rules',
            '@Observable vs @ObservableObject: migration path and performance differences',
            '@StateObject vs @ObservedObject: lifetime semantics and common pitfalls',
            '@EnvironmentObject, @Environment, @EnvironmentValues: custom key design',
            'LanguageEnvironment: custom @Environment key for LanguageManager injection',
          ],
        },
        {
          head: 'Advanced Layout & Component Patterns',
          items: [
            'ViewModifier protocol: LocalizedViewModifier, ThemeModifier — global UI mutation',
            'LazyVStack, LazyHStack: performance budgeting for large lists',
            'Custom InputField architecture: InputFieldConfig, InputFieldState, InputFieldTheme',
            'VerificationField internals: CodeType, TextFieldStyle, TypingState state machine',
            'ShimmerModifier: building skeleton screens with phase-animated gradients',
          ],
        },
        {
          head: 'Navigation Architecture with SwiftGeniusRouter',
          items: [
            'NavigationStack vs custom RouterView: when and why to use each',
            'AnyRouter: type-erased navigation abstraction (push, sheet, modal, alert)',
            'RouterView<Content>: the SwiftGeniusRouter entry point in each feature flow',
            'showScreen(.push), showSheet(detents:), showAlert — unified navigation API',
            'Programmatic popToRoot, dismissScreen, dismissAllModals from any ViewModel',
          ],
        },
        {
          head: 'AppRootView & Splash → Auth → Main → Unsafe Flow',
          items: [
            'AppRootView<SplashContent, AuthContent, MainContent, UnsafeContent>: generic view switching',
            'AppRootViewModel: observing AppStateManager.appRootFlow with @Observable',
            'AppRootFlow enum: .auth, .main, .unsafe — state-driven root replacement',
            '.animation(.easeInOut) on root switch: smooth cross-fade transitions',
            'GlobalLoadingOverlay, SnackBarView, SuccessAlertWindowPresenter: overlay architecture',
          ],
        },
        {
          head: 'MainTabView & Tab-Level Architecture',
          items: [
            'MainTabViewModel as tab coordinator: controls selected tab and refresh signals',
            'NetworkRefreshSignal.Token: Combine-based signal triggering network refetch on tab change',
            'TabFlowRouting protocol: cross-tab navigation without importing sibling features',
            'Tab content factories: dashboardContent, historyContent, servicesContent closures',
            'Practicum: build a fully generic tab host that compiles with zero knowledge of its tabs',
          ],
        },
      ],
    },

    // ── MODULE 03 ─────────────────────────────────────────────────────────────
    {
      num: '03',
      category: 'Software Engineering',
      title: 'Protocol-Oriented Architecture & AppEnvironment Design',
      subsections: [
        {
          head: 'Protocol-Oriented Programming at Enterprise Scale',
          items: [
            'Protocol vs class inheritance: composability and testability trade-offs',
            'Protocol composition: AppEnvironment = AppLanguageEnvironment + session + DI access',
            'Associated types, opaque return types (some View, some Sendable) in protocol design',
            'Default implementations with public extension: restoreSession(), withLoading()',
            'Protocol extensions as behaviour inheritance without class coupling',
          ],
        },
        {
          head: "AppEnvironment Protocol — The App's Contract",
          items: [
            'AppEnvironment surface: container, isAuthenticated, currentRootFlow, snackBarManager',
            'login(), logout(), updateRoot(with:), withLoading<T>() — all on @MainActor',
            'restoreSession() async → Bool: access token check → refresh attempt → auth fallback',
            'AppLanguageEnvironment: currentLanguage, setLanguage — isolated language sub-protocol',
            'Why AppEnvironment lives in CorePackage, not the app target: dependency direction rule',
          ],
        },
        {
          head: 'LiveAppEnvironment — The Concrete Implementation',
          items: [
            'LiveAppEnvironment struct: resolves managers from DependencyContainer at init',
            'logout() implementation: snapshot access token → async server kill → local clear → root switch',
            'withLoading<T>(): generic rethrows wrapper delegating to GlobalLoadingManager',
            'onSessionExpired hook: wiring AppNetworking.onSessionExpired to env.logout()',
            'Testing with mock AppEnvironment: full feature tests without real network or Keychain',
          ],
        },
        {
          head: 'Dependency Inversion in Practice',
          items: [
            'The Dependency Rule: all arrows point inward toward CorePackage, never outward',
            'EndpointProtocol, NetworkExecuting, CoreInteracting: interfaces owned by the consumer',
            'Repositoring protocols per screen: IdentificationRepositoring, ConfirmationRepositoring',
            'Interacting protocols per feature: LanguageInteracting, PinCodeInteracting',
            'Practicum: draw the complete dependency graph of AuthFeature and verify no violations',
          ],
        },
        {
          head: 'SOLID Principles Applied to Your Real Codebase',
          items: [
            'SRP: AuthCoreInteractor owns only session persistence and app-level actions',
            'OCP: adding a new feature never modifies CorePackage — only extends it via conformance',
            'LSP: MockAppEnvironment is a drop-in replacement for LiveAppEnvironment in every test',
            'ISP: FeatureInteracting vs CoreInteracting — segregated by what the caller needs',
            'DIP: DashboardViewModel depends on CoreInteracting protocol, not DashboardCoreInteractor directly',
          ],
        },
      ],
    },

    // ── MODULE 04 ─────────────────────────────────────────────────────────────
    {
      num: '04',
      category: 'Dependency Injection',
      title: 'Dependency Injection & DI Container Architecture',
      subsections: [
        {
          head: 'DI Theory: Constructor vs Property vs Service Locator',
          items: [
            'Constructor injection: the primary pattern used in all CoreBuilders',
            'Service Locator pattern: DependencyContainer.resolve<T>() — when and why',
            'Ambient context anti-pattern: why scattered singletons kill testability',
            'DI Container as a registry: type-key-based storage with services: [String: Any]',
            'register<T>(_ type:, service:) and resolve<T>(_ type:) — generic type-safe API',
          ],
        },
        {
          head: 'DependencyContainer Implementation Deep Dive',
          items: [
            'String key from type name: why "\\(type)" is both simple and sufficient',
            'Type erasure: storing Any, casting back to T on resolve — safety analysis',
            'Thread safety considerations: when to wrap with @MainActor vs actor isolation',
            'Extending the container: registering protocol types vs concrete types',
            'Anti-patterns: over-registration, circular dependencies, lazy resolution timing',
          ],
        },
        {
          head: 'Dependencies Struct — The Bootstrap Object',
          items: [
            'Dependencies.init(): instantiation order — AppStateManager before LanguageManager',
            'registerAll(): wiring concrete instances to their protocol types in the container',
            'AppStateManager: initial appRootFlow determined at launch (auth vs main)',
            'GlobalLoadingManager: isLoading @Observable property driving the root overlay',
            'SnackBarManager: currentSnack, currentSuccessAlert — dual-channel alert system',
          ],
        },
        {
          head: 'AppDelegate as Composition Host',
          items: [
            'AppDelegate.makeCompositionRoot(): the single factory method that builds everything',
            'lazy var compositionRoot: ensures DI is complete before WindowGroup accesses views',
            'Passing closures for side-effects: onLogout, serverLogout, sessionRefresher',
            'AppNetworking.onSessionExpired: functional callback wiring at bootstrap time',
            'Practicum: write a complete AppDelegate → Dependencies → LiveAppEnvironment boot sequence from memory',
          ],
        },
        {
          head: 'Environment Schemes & Build Configurations',
          items: [
            'Dev / Staging / Release scheme differentiation using xcconfig',
            'APIClient.default vs AppNetworking.authorizedExecutor: executor selection by auth state',
            'PreviewNetworking: mock executor for SwiftUI previews inside SPM packages',
            'DevPreView helper: injecting mock AppEnvironment into isolated feature previews',
            'AppPreview: standardised preview scaffold ensuring @MainActor correctness',
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // MONTH 2 — RIBs CORE ARCHITECTURE
    // ══════════════════════════════════════════════════════════════════════════

    // ── MODULE 05 ─────────────────────────────────────────────────────────────
    {
      num: '05',
      category: 'RIBs Architecture',
      title: 'RIBs Layer 1 — Builder & Composition Root',
      subsections: [
        {
          head: 'The Builder Pattern — Object Graph Factory',
          items: [
            'Builder responsibility: create, assemble, and own all objects in a feature scope',
            'Builder is a value type (struct): no retain cycles, no lifecycle ambiguity',
            'AuthCoreBuilder init: receives AppEnvironment + NetworkExecutor, creates repository and MetinSDKManager',
            'makeRootView() → some View: the single public surface of a feature module',
            'Why Builder methods are internal (fileprivate/internal): callers use only makeRootView()',
          ],
        },
        {
          head: 'AppCompositionRoot — The Wiring Centre',
          items: [
            'AppCompositionRoot structure: @MainActor struct, holds LiveAppEnvironment',
            'build() → some View: creates AppRootView with four @ViewBuilder factory closures',
            'authView(): creates AuthCoreInteractor → AuthCoreBuilder → makeRootView()',
            'mainRootView(): creates MainTabViewModel, wires all tab content via private factory methods',
            'makeDashboard(), makeHistory(), makeSheetAction(): private feature factories with interactor injection',
          ],
        },
        {
          head: 'Feature Factory Methods — The makeSomething() Pattern',
          items: [
            'Every feature factory: create Interactor(environment:, tabFlowRouting:, refreshSignalToken:) → create Builder(interactor:, executor:)',
            'Executor selection: APIClient.default.executor for auth vs AppNetworking.authorizedExecutor for main features',
            'NetworkRefreshSignal.Token: tab-specific tokens for targeted network refresh events',
            'Lazy feature creation: feature objects only allocated when their tab is first shown',
            'Extending AppCompositionRoot: adding a new feature in 3 lines without touching CorePackage',
          ],
        },
        {
          head: 'AuthCoreBuilder: Multi-Screen Flow Factory',
          items: [
            'AuthFlowHostView: internal SwiftUI view holding the builder and reset UUID state',
            'rootView(router:, onReset:) → some View: assembles AuthRootView with 9 @ViewBuilder screen factories',
            'Screen factory methods: languageView, identificationView, createPasswordView, digitalSignatureView…',
            'Each factory creates ViewModel(state: AuthStateRouterProtocol, repository:, interacting:)',
            'onReset closure: identity-reset pattern using .id(resetID) for certificate revocation handling',
          ],
        },
        {
          head: 'DashboardCoreBuilder: Extension-Based Screen Registration',
          items: [
            'Core init: interactor + executor → creates DashboardCoreRepository internally',
            'dashboardView(router:): creates DashboardCoreRouter → DashboardViewModel → DashboardView',
            'Extension blocks per domain: accounts, sheets, cross-rate — scaling without monolithic Builder',
            'accountDetailsView(account:, onShowAllRestrictions:): callback-based sheet composition',
            'Practicum: implement a fully functional FeatureCoreBuilder for a new "Loans" feature module',
          ],
        },
      ],
    },

    // ── MODULE 06 ─────────────────────────────────────────────────────────────
    {
      num: '06',
      category: 'Business Logic',
      title: 'RIBs Layer 2 — Interactor & Business Logic',
      subsections: [
        {
          head: 'FeatureInteracting Protocol — The Base Contract',
          items: [
            'withLoading<T>(_ operation:) async rethrows → T: generic loading wrapper',
            'showSnackBar(_ message:, style:): unified error/success surface for all ViewModels',
            'safeLoad(_ op:): fire-and-forget async loader in withTaskGroup — catches and displays errors',
            'Why FeatureInteracting is in CorePackage: shared by all features without circular imports',
            'Default implementations in protocol extension: zero boilerplate in concrete interactors',
          ],
        },
        {
          head: 'CoreInteracting Protocol — The Feature Bridge',
          items: [
            'CoreInteracting: FeatureInteracting + var environment: AppEnvironment { get }',
            'withLoading delegating to environment.withLoading: single implementation for all features',
            'showSnackBar delegating to environment.snackBarManager.show: unified UX',
            'showSuccess(title:, message:, onDismiss:): success alert via SnackBarManager dual channel',
            'Concrete conformance: DashboardCoreInteractor, AuthCoreInteractor, ChatsCoreInteractor',
          ],
        },
        {
          head: 'AuthCoreInteractor — App-Level Session Actions',
          items: [
            'login(): delegates to environment.login() → triggers root switch to .main',
            'persistAuthSession(_ response:): writes accessToken, refreshToken, expiry to SecureSettings',
            'Token expiry storage: server sends duration in seconds, stored as Unix timestamp (now + duration)',
            'LanguageInteracting conformance: setLanguage() updates AppSettings and LanguageManager',
            'Extension-based protocol conformance: keeps Interactor focused and scannable',
          ],
        },
        {
          head: 'DashboardCoreInteractor — Feature-Scoped Interactor',
          items: [
            'Holds AppEnvironment, TabFlowRouting?, NetworkRefreshSignal.Token as stored properties',
            'logout(): environment.logout() — single-line app-level action from a feature interactor',
            'refreshSignalToken: exposed to Builder, passed into DashboardView for tab-change triggered reload',
            'TabFlowRouting: optional injection — interactor works in isolation (demo targets) or full app',
            'Anti-pattern analysis: what happens when you put business logic in the ViewModel instead',
          ],
        },
        {
          head: 'Cross-Module Communication via TabFlowRouting',
          items: [
            'TabFlowRouting protocol: defined in CorePackage, implemented by MainTabViewModel',
            'Use case: DashboardViewModel needs to navigate to the Payments tab',
            'Solution: DashboardCoreInteractor holds TabFlowRouting?, calls tabRouting.switchToPayments()',
            'Why not NotificationCenter: type-safety, testability, explicit contract',
            'Practicum: implement cross-tab navigation from History to Dashboard using TabFlowRouting',
          ],
        },
      ],
    },

    // ── MODULE 07 ─────────────────────────────────────────────────────────────
    {
      num: '07',
      category: 'Navigation Architecture',
      title: 'RIBs Layer 3 — Router & Navigation Architecture',
      subsections: [
        {
          head: 'FeatureRouting Protocol & AnyRouter',
          items: [
            'FeatureRouting: @MainActor protocol with var router: Router { get }',
            'Router typealias = AnyRouter (from SwiftGeniusRouter): type-erased navigation interface',
            'RouterView typealias: the SwiftUI entry point that provides Router to the content closure',
            'Default implementations: dismissScreen, dismissModal, dismissAllModals, popToRoot',
            'showAlert overloads: simple, parameterised, error-shorthand — all in the protocol extension',
          ],
        },
        {
          head: 'DashboardCoreRouter — Production Navigation Implementation',
          items: [
            'showBalance(): router.showScreen(.push) with builder.balanceView(router:)',
            'showCrossRateView(): push navigation to currency rate screen',
            'showAccountTypeFilter(types:, selectedCodes:, onDone:): sheet with callback closure',
            'showAccountDetails(_ account:): sheet with detents [.medium, .large] and contentInteraction: .scrolls',
            'showAccountFilter(_ viewModel:): sheet with fraction detent — passing pre-built ViewModel',
          ],
        },
        {
          head: 'Builder-Router Circular Reference Handling',
          items: [
            'Router holds Builder (strong): router creates views via builder factories',
            'Builder holds Router (none): builder never references router directly',
            'ViewModel holds Router (via -.-> weak/method): calls routing methods, does not retain',
            'Capturing router in closures: baseRouter capture pattern for nested navigation in sheets',
            'Memory management: why struct-based Router + Builder eliminate retain cycles entirely',
          ],
        },
        {
          head: 'AuthStateRouterProtocol — Auth Flow State Machine',
          items: [
            'AuthStateRouterProtocol: navigation contract between AuthRootView and screen ViewModels',
            'AuthScreen enum: the typed destinations in the auth flow (language, identification, pin…)',
            'AuthFlowType enum: .signIn vs .forgotPassword — drives which screens are shown',
            'AuthRootView: switches between screens based on state, passes authState to screen factories',
            'Why a state router instead of a stack: auth is a linear wizard, not a tree',
          ],
        },
        {
          head: 'Advanced Navigation Patterns',
          items: [
            'Deep link integration: mapping URL paths to RouterView destinations',
            'Resetting a flow: .id(UUID()) identity reset for certificate revocation (AuthFlowHostView pattern)',
            'SheetScreen enum: typed sheet destinations for sheet-based feature navigation',
            'Notification-driven navigation: .onNotificationRecieved(name:) for cross-layer triggers',
            'Practicum: build a complete Router for a "Transfer" feature with 6 screens and 3 sheet types',
          ],
        },
      ],
    },

    // ── MODULE 08 ─────────────────────────────────────────────────────────────
    {
      num: '08',
      category: 'Advanced Swift',
      title: 'Advanced Custom Property Wrappers',
      subsections: [
        {
          head: '@propertyWrapper Fundamentals & Design Rules',
          items: [
            '@propertyWrapper anatomy: wrappedValue, projectedValue ($), init variations',
            'When to write a property wrapper vs a helper function vs a protocol',
            'Sendability: @Sendable constraints on property wrappers in Swift 6 strict mode',
            'Composing wrappers: layering @PersistedPublished over @Published semantics',
            'Testing property wrappers in isolation: no ViewModel needed',
          ],
        },
        {
          head: 'Thread Safety Wrappers: @Atomic',
          items: [
            '@Atomic<T>: wrapping an NSLock or os_unfair_lock for synchronised read/write',
            'Use case: shared mutable state accessed from multiple async contexts',
            'Actor vs @Atomic: when the actor model is overkill and @Atomic is sufficient',
            'get { lock.withLock { value } } / set { lock.withLock { value = newValue } } implementation',
            'Benchmarking @Atomic vs actor vs DispatchQueue.sync on realistic workloads',
          ],
        },
        {
          head: 'Async State Wrappers: @LoadingState, @Countdown, @Once',
          items: [
            '@LoadingState<T>: enum { idle, loading, loaded(T), error(Error) } with @Published projection',
            '@Countdown: decrementing timer published to SwiftUI — OTP resend cooldown use case',
            '@Once: executes a closure exactly once regardless of how many times the property is set',
            '@Distinct<T: Equatable>: publishes only when the new value is different from the previous',
            '@NetworkResult<T>: wraps async/await network call state including pagination support',
          ],
        },
        {
          head: 'Form & Validation Wrappers: @RequiredField, @Validated, @Trimmed',
          items: [
            '@RequiredField: tracks isEmpty, triggers form-level isValid aggregation',
            '@Validated<T>: accepts a validation closure, exposes isValid and errorMessage',
            '@Trimmed: automatically trims whitespace on set — phone/email field hygiene',
            '@DigitsOnly: strips non-numeric characters on set — card number, OTP fields',
            '@Masked: applies a format mask on set (card number: XXXX XXXX XXXX XXXX)',
          ],
        },
        {
          head: 'Storage & Persistence Wrappers: @PersistedPublished, @Cached, @Expiring',
          items: [
            '@PersistedPublished: combines @Published with UserDefaults/Keychain write-through',
            '@Cached<T>: in-memory cache with TTL — avoids redundant network calls',
            '@Expiring<T>: value becomes nil after a time interval — session-scoped data',
            '@SensitiveData: masks value in logs and debug descriptions (Keychain PIN, token)',
            'Practicum: implement a @PagedList wrapper managing offset, hasMore, and appending pages',
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // MONTH 3 — PRODUCTION-GRADE ENGINEERING
    // ══════════════════════════════════════════════════════════════════════════

    // ── MODULE 09 ─────────────────────────────────────────────────────────────
    {
      num: '09',
      category: 'Swift Concurrency',
      title: 'Swift 6 Strict Concurrency & Thread Safety',
      subsections: [
        {
          head: 'Swift 6 Concurrency Model — The Rules',
          items: [
            'swiftLanguageModes: [.v6] in Package.swift: what changes and why it matters',
            'Sendable protocol: what types are safe to cross concurrency boundaries',
            '@Sendable closures: the hidden rule in escaping closures and async contexts',
            'Data isolation: @MainActor, actor, nonisolated, sending keyword',
            'Diagnosing and fixing "Sending X risks causing data races" compiler errors',
          ],
        },
        {
          head: '@MainActor — Mandatory for All UI Code',
          items: [
            '@MainActor on structs, classes, and functions: inheritance rules and opt-out with nonisolated',
            'All ViewModels, Builders, Routers, Interactors: why every type in the UI layer is @MainActor',
            'Calling @MainActor functions from async contexts: await MainActor.run { } pattern',
            'AppDelegate and TuronBusinessApp: @MainActor requirements in app entry points',
            'Common crash: modifying @Published from background thread — root cause and fix',
          ],
        },
        {
          head: 'Swift Actors — Deep Dive',
          items: [
            'actor vs class: serial executor, no data races, cross-actor await requirement',
            'Actor re-entrancy: why your actor can interleave between awaits',
            'nonisolated methods on actors: when and how to expose synchronous interface',
            'Distributed actors (preview): future-proofing for multi-process architectures',
            'RefreshCoordinatorActor: full code walkthrough — request coalescing via shared Task',
          ],
        },
        {
          head: 'RefreshCoordinatorActor — Request Coalescing in Production',
          items: [
            'Problem: 5 concurrent requests on 401 → 5 parallel refresh calls → race condition',
            'Solution: var refreshTask: Task<RefreshedTokens, Error>? stored in actor state',
            'refreshIfNeeded(): if refreshTask exists → await existing task; else create new one',
            'Token rotation: conditionally updating refreshToken only if server returned a non-empty value',
            'Error path: 401 on refresh itself → Task { @MainActor in AppNetworking.onSessionExpired?() }',
          ],
        },
        {
          head: 'TokenStoreActor — Thread-Safe Token Management',
          items: [
            'TokenStoreActor: actor wrapping access/refresh token in-memory store',
            'getAccessToken() async → String, setTokens(access:, refresh:) async → Void',
            'clear() async: called on logout before SecureSettings.clearAll()',
            'Why not UserDefaults: Keychain read/write from TokenStoreActor vs SecureSettings',
            'Practicum: simulate 10 concurrent 401 responses and prove only one refresh request is made',
          ],
        },
      ],
    },

    // ── MODULE 10 ─────────────────────────────────────────────────────────────
    {
      num: '10',
      category: 'Networking',
      title: 'Advanced Protocol-Oriented Networking',
      subsections: [
        {
          head: 'EndpointProtocol — The Type-Safe Request Contract',
          items: [
            'EndpointProtocol: Sendable protocol with path, method, headers, task, authorization, responseKind',
            'HTTPMethod enum: .get, .post, .put, .patch, .delete',
            'RequestTask enum: .plain, .body(Encodable), .queryParameters([String: String])',
            'AuthorizationPolicy enum: .public vs .bearerToken (automatic injection requirement)',
            'ResponseKind structure: JSON vs plain text vs binary target payload classification',
          ],
        },
        {
          head: 'NetworkExecuting — The Abstraction Interface',
          items: [
            'NetworkExecuting protocol: send<T: Decodable>(_ endpoint: EndpointProtocol) async throws -> T',
            'Why repositories depend on NetworkExecuting, not URLSession directly: architectural decoupling',
            'MockNetworkExecutor: stubbing raw JSON strings or model structures for 100% offline testing',
            'Handling system errors vs business logic errors mapping custom backend structures',
            'NetworkMonitor integration: throwing intermediate network unavailability errors before firing URLSession',
          ],
        },
        {
          head: 'AuthorizedNetworkExecutor — Interception & Interleaving Layer',
          items: [
            'Concrete implementation conforming to NetworkExecuting protocol',
            'Request building: reading path/method, encoding JSON bodies, mapping AuthorizationPolicy',
            'Bearer token injection: reading token from TokenStoreActor, applying to HTTP headers',
            'Interception loop: checking if request fails with HTTP Status 401 (Unauthorized)',
            'Automatic recovery flow: catch 401 → await RefreshCoordinatorActor.refreshIfNeeded() → reconstruct headers with fresh token → retry operation',
          ],
        },
        {
          head: 'NetworkExecutor & Transport Layer',
          items: [
            'NetworkExecutor (unauthenticated): handles plain endpoints like /login or /verify-otp',
            'URLSessionTransport: handles raw URLRequest execution on an isolated background configuration',
            'PulseLoggingTransport: wrapping transport with Pulse framework interception for unified network console diagnostics',
            'SSL Pinning implementation: embedding public keys inside CorePackage using security anchors',
            'Practicum: wire up a completely secure endpoint flow and intercept it with structural 401 handling',
          ],
        },
      ],
    },

    // ── MODULE 11 ─────────────────────────────────────────────────────────────
    {
      num: '11',
      category: 'Enterprise Integration',
      title: 'Enterprise SDK Integrations & Production Systems',
      subsections: [
        {
          head: 'MetinSDK & EDS Integration (Digital Signature Bridge)',
          items: [
            'MetinSDKManager protocol and implementation inside CorePackage wrapper',
            'EDS (Electronic Digital Signature) ecosystem: keys, certificates, hardware interaction',
            'MetinSDK.xcframework binary integration challenges and SPM wrapper configuration',
            'Signing data payloads: transforming FinTech transaction JSON into signed base64 blocks',
            'Certificate revocation and lifecycle management: AuthCoreBuilder reset flow linkage',
          ],
        },
        {
          head: 'Production Security & Local Diagnostics',
          items: [
            'AppLogger: unified logging facade with Diagnostic Log Levels (.debug, .info, .warning, .error)',
            'OSLog integration: structuring subsystem and category parameters for native Apple Console debugging',
            'Privacy Protection UI: automatically applying custom BlurOverlay on Application lifecycle resignation',
            'Sensitive Data protection: securing memory dumps against token/PIN extraction',
            'DeepLink security: route sanitisation and validation rules inside CoreRouter parsing methods',
          ],
        },
        {
          head: 'Analytics Facade & Facet Design',
          items: [
            'Firebase & Mixpanel multi-channel reporting via standard AnalyticsFacade structure',
            'Behavioral tracking engine: screen tracking views and semantic transactional events mapping',
            'Scalable Localization: setting up centralized multi-language engines running AppLocalModifier',
            'AppThemeModifier design: dynamic user settings synchronisation across nested feature structures',
            'Practicum: implement an isolated security bridge module protecting raw memory footprints',
          ],
        },
      ],
    },

    // ── MODULE 12 ─────────────────────────────────────────────────────────────
    {
      num: '12',
      category: 'Quality Assurance',
      title: 'Testing, QA & Architecture Defence',
      subsections: [
        {
          head: 'Production-Grade Unit Testing Strategies',
          items: [
            'Isolated Business Logic verification: eliminating network flake via MockNetworkExecutor injection',
            'Testing ViewModel states under extreme thread contention using virtual tasks',
            'Mock Services & Data Stubbing: writing stable JSON payloads inside test bundle infrastructures',
            'Verifying state machines: asserting exact transitions in AuthStateRouterProtocol flows',
            'XCTest vs modern Swift Testing framework: picking tools for cross-concurrency validation',
          ],
        },
        {
          head: 'Automated UI Flow Verification',
          items: [
            'XCUITest Framework architecture: launch environments, app injection, element queries',
            'Multi-screen Navigation Testing: validating linear Auth flow wizards automatically',
            'Page Object Pattern in UI tests: separating query logic from functional test scenarios',
            'Automated localization smoke testing: capturing layouts across various dynamic languages',
            'CI/CD Pipeline Integration: setting up automated GitHub Action runners executing test schemes',
          ],
        },
        {
          head: 'Architecture Defence & Review Engineering',
          items: [
            'Code Review mastery: creating systematic PR templates focused on dependency rules',
            'Defending boundaries: writing automatic script assertions checking module graphs for illegal imports',
            'Refactoring Monolithic Legacy Logic: step-by-step breakdown using core abstraction models',
            'The Senior Mindset: explaining System Design, balancing modular complexity, justifying trade-offs',
            'Practicum: complete a full Capstone project review and defend its structural graph against an architect panel',
          ],
        },
      ],
    },
  ];
}

/** Modullarni 3 oyga taqsimlangan ko'rinishi (oy nomlari `t` dan tarjima qilinadi). */
export function getMonths(t: Translations): Month[] {
  const modules = getModules();
  return [
    { name: t.months[0], items: modules.slice(0, 4) },
    { name: t.months[1], items: modules.slice(4, 8) },
    { name: t.months[2], items: modules.slice(8, 12) }
  ];
}
