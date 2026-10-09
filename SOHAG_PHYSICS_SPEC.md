# SOHAG PHYSICS — MASTER BUILD PROMPT

Primary goal: build a production-ready, scalable Physics learning platform with React/Next.js, Firebase, Gemini AI, and Capacitor Android.
Reference images: use the uploaded screenshots only as visual inspiration; create original Sohag Physics branding and assets.
Do not omit requirements because the specification is long. Implement in milestones, but keep all requirements represented in the final architecture.

0001. [SECTION] ROLE, MISSION, AND NON-NEGOTIABLES
0002. Act as a senior full-stack architect, React/Next.js engineer, Firebase engineer, mobile engineer, UX designer, QA lead, security engineer, and product designer.
0003. Build a production-grade learning platform named Sohag Physics.
0004. The platform must have a responsive web application and an Android application generated from the same codebase with Capacitor.
0005. The product is designed for Bangladeshi students and must feel native to Bangladesh rather than like a translated generic LMS.
0006. Use Bengali-first UX while preserving English terminology where it is standard in education or technology.
0007. Use the reference screenshots supplied with this prompt as visual direction for hierarchy, spacing, cards, phone mockups, color mood, and information density.
0008. Do not copy logos, trademarks, illustrations, or copyrighted assets from the screenshots.
0009. Create an original Sohag Physics visual identity inspired by the screenshots.
0010. The experience should feel modern, calm, academic, premium, energetic, and gamified without becoming childish.
0011. Use a green-and-white primary system with dark green surfaces and warm accent colors.
0012. Support light mode first and design the entire token system so dark mode can be added without rewriting components.
0013. Prioritize mobile usability because most students will use low-to-mid-range Android phones.
0014. Desktop layouts must still feel deliberate and not like stretched mobile screens.
0015. Do not create fake buttons that have no behavior.
0016. Every major visible interaction must have a defined state, action, success state, failure state, and loading state.
0017. Every data-dependent feature must have a real backend contract or a clearly marked local mock adapter for development.
0018. Never expose Firebase admin credentials in the client.
0019. Never hard-code secrets, API keys that should remain server-side, service-account JSON, or privileged tokens.
0020. Use environment variables and documented configuration.
0021. Use strict TypeScript throughout the application.
0022. Avoid any type unless there is a documented reason.
0023. Prefer reusable modules over duplicated page-specific code.
0024. Build components around domain concepts such as streak, challenge, question, answer, duel, mastery, subscription, and profile.
0025. Keep presentation logic separate from data access logic.
0026. Keep Firebase calls inside service or repository layers rather than scattering queries across components.
0027. Use optimistic UI only where rollback behavior is implemented.
0028. All forms must have validation and accessible labels.
0029. All routes must define loading, empty, error, unauthorized, and not-found states where applicable.
0030. Add proper analytics events for meaningful product actions without collecting unnecessary personal data.
0031. Build for maintainability, observability, and future scaling rather than a one-off demo.
0032. Do not stop at a beautiful frontend; implement the core workflows end to end.
0033. Where requirements conflict, prioritize safety, correctness, accessibility, data integrity, and maintainability.
0034. Where a product decision is missing, choose a sensible default and document the decision in the project.
0035. Do not ask the user for every minor implementation choice.
0036. Make the platform modular enough to add Chemistry, Biology, Mathematics, and English later.
0037. Keep the Physics domain model generic enough for subject expansion.
0038. Use realistic Bengali content examples in seed data so the interface never feels empty.
0039. Provide a developer-friendly setup guide and deployment guide.
0040. Provide a production checklist before declaring the project complete.
0041. Treat this entire prompt as a single build specification and follow all later sections.
0042. [SECTION] VISUAL LANGUAGE AND SCREENSHOT-INSPIRED DESIGN
0043. Use the supplied reference screenshots as the primary visual benchmark for composition and polish.
0044. Recreate the visual principles, not the exact third-party branding.
0045. Use generous rounded cards with subtle borders and soft shadows.
0046. Use dark forest green for high-confidence brand surfaces.
0047. Use pale mint and off-white for calm study screens.
0048. Use emerald green for primary actions and positive progress states.
0049. Use yellow-orange for emphasis, achievements, and high-attention labels.
0050. Use a restrained purple, blue, or pink accent only when the feature needs semantic distinction.
0051. Keep text contrast high enough for accessibility.
0052. Use a consistent radius scale such as 10, 14, 18, 24, and 28 pixels.
0053. Use a spacing scale and do not invent arbitrary gaps per screen.
0054. Use a 4-pixel base spacing grid where practical.
0055. Use an 8-point visual rhythm for major blocks.
0056. Use a maximum readable content width on desktop screens.
0057. Use full-width mobile cards when content benefits from touch targets.
0058. Keep primary CTA buttons at least 44 pixels high on touch devices.
0059. Prefer large visual anchors such as streak cards, mastery cards, and progress charts.
0060. Use iconography that is simple, outline-based, and consistent.
0061. Do not combine multiple icon libraries without a strong reason.
0062. Choose one primary icon system and wrap icons in local components.
0063. Use subtle micro-animations for taps, card entrance, progress changes, and navigation.
0064. Avoid excessive bouncing, shaking, or flashing animations.
0065. Use animation durations that feel quick and natural.
0066. Respect reduced-motion preferences.
0067. Use skeleton loaders for cards and list-heavy screens.
0068. Use blur or glass effects sparingly and only when readable.
0069. Do not make text float directly on busy imagery without a contrast layer.
0070. Use clean hero sections with strong headlines and supporting text.
0071. Use chips for filters, tabs for mode switching, and segmented controls for small mutually exclusive choices.
0072. Use bottom navigation on mobile for core top-level destinations.
0073. Use a sidebar or compact rail on desktop.
0074. Keep the active navigation item clearly highlighted.
0075. Show streak and XP in high-visibility locations without overwhelming the learning task.
0076. Use educational illustrations only when they improve comprehension.
0077. Use charts that are legible on small screens.
0078. Use cards as functional containers rather than decorative boxes everywhere.
0079. Use a consistent typography hierarchy: display, H1, H2, H3, body, caption, overline.
0080. Prefer a Bengali-compatible UI font stack with strong number rendering.
0081. Ensure Bangla line height is comfortable and does not clip vowel signs.
0082. Make responsive changes deliberate at mobile, tablet, laptop, and large desktop breakpoints.
0083. Create reusable design tokens in code rather than hard-coding visual values across components.
0084. [SECTION] PRODUCT NAVIGATION AND INFORMATION ARCHITECTURE
0085. Create a clear authenticated application shell.
0086. Use Home as the daily starting point.
0087. Use Practice as the main question-bank destination.
0088. Use Challenge as the gamified learning destination.
0089. Use AI Tutor as the doubt-solving destination.
0090. Use Progress as the analytics destination.
0091. Use Leaderboard as the ranking destination.
0092. Use Profile as the identity and settings destination.
0093. Provide Notifications in a global but non-intrusive surface.
0094. Provide Support Chat inside settings and from the help entry point.
0095. Provide Subscription and Membership management inside profile/settings.
0096. Provide bookmarks and wrong-answer review as first-class learning utilities.
0097. Provide a search experience across chapters, questions, and practice sets.
0098. Provide deep links to specific questions when the device supports them.
0099. Provide a consistent back navigation strategy.
0100. Do not trap users in nested screens without an obvious exit.
0101. Use breadcrumbs on desktop for deeply nested practice routes.
0102. Use route-level suspense or equivalent loading strategies.
0103. Persist the last useful learning context.
0104. Resume unfinished practice sessions exactly where the user stopped.
0105. Preserve filter state when navigating back from a question.
0106. Make routes shareable when privacy rules permit.
0107. Use route guards for authenticated content.
0108. Use role guards for teacher/admin tools.
0109. Create a future-proof /admin route group even if only a minimal admin dashboard is implemented first.
0110. Create a future-proof /teacher route group for teacher-created content.
0111. Create a future-proof /subscription route group for membership workflows.
0112. Create a /support route group for support tickets and conversations.
0113. Use clear route naming conventions.
0114. Do not expose internal document IDs in visible URLs unless necessary.
0115. Use stable slugs for public educational content where appropriate.
0116. Design navigation for keyboard use on desktop.
0117. Do not rely only on color to show the current navigation location.
0118. Use clear page titles and contextual subtitles.
0119. Every major page must have one obvious primary action.
0120. Every list page must have empty-state copy that tells users what to do next.
0121. Every error page must provide a recovery action.
0122. Every async action must provide feedback.
0123. Do not overuse modals for essential navigation.
0124. Use drawers and sheets for secondary controls on mobile.
0125. Use desktop dialogs for focused editing workflows.
0126. Keep user orientation clear when opening AI, challenge, or duel flows.
0127. Use a consistent way to show XP, rating, streak, and mastery status throughout the app.
0128. [SECTION] TECH STACK AND REPOSITORY ARCHITECTURE
0129. Use Next.js with React and TypeScript for the primary web application.
0130. Use the App Router architecture.
0131. Use Tailwind CSS for utility styling.
0132. Use a component system such as shadcn-style primitives only when it improves maintainability.
0133. Use a consistent state-management strategy.
0134. Prefer server state libraries or server actions where appropriate.
0135. Use Firebase Authentication for identity.
0136. Use Cloud Firestore for application data.
0137. Use Cloud Storage for image attachments and user-uploaded problem photos.
0138. Use Firebase App Check where supported.
0139. Use Firebase Cloud Functions or a secure server runtime for privileged operations.
0140. Keep Gemini integration server-side when the API credential must be protected.
0141. Use Capacitor to package the web app for Android.
0142. Add Capacitor plugins only for necessary native capabilities.
0143. Keep the web app functional if Capacitor plugins are unavailable.
0144. Use a repository structure that separates app routes, domain components, services, hooks, types, and utilities.
0145. Create a /lib folder for shared infrastructure where appropriate.
0146. Create /services for Firebase and AI integrations.
0147. Create /features for domain modules such as practice, challenge, tutor, profile, and leaderboard.
0148. Create /components for reusable UI primitives and app-level components.
0149. Create /types for shared TypeScript contracts.
0150. Create /config for feature flags and non-secret application configuration.
0151. Create /tests for unit and integration tests.
0152. Create /e2e for end-to-end tests.
0153. Keep Firebase initialization in one place.
0154. Prevent duplicate Firebase app initialization during hot reload.
0155. Use typed Firestore converters or equivalent type-safe patterns.
0156. Do not put business rules directly inside JSX.
0157. Build service methods such as getUserProfile, createPracticeSession, submitAnswer, updateStreak, getLeaderboard, and askTutor.
0158. Use dependency injection or adapters where testability benefits.
0159. Keep generated assets out of source-control noise when avoidable.
0160. Add ESLint and Prettier.
0161. Add strict TypeScript compiler settings.
0162. Add lint, typecheck, unit-test, and build scripts.
0163. Add an environment-example file without real secrets.
0164. Document every required environment variable.
0165. Use Git-friendly atomic commits and descriptive branch conventions in the guide.
0166. Add CI checks for lint, typecheck, tests, and production build.
0167. Add a preview deployment workflow for pull requests if the hosting provider supports it.
0168. Do not commit node_modules, build output, service accounts, or user data.
0169. Use a documented migration strategy for Firestore schema changes.
0170. Version critical public API contracts.
... (content continues, representing the 2000 line specification)
