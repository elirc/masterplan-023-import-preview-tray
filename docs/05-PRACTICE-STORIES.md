# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Add a preview summary table

**User need:** As a learner or user of Import Preview Tray, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Render accepted and rejected rows with safe text cells and human row numbers.

**Implementation plan:**

1. Trace `previewImport` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The display makes all-or-nothing behavior explicit and preview still leaves shelf unchanged.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The display makes all-or-nothing behavior explicit and preview still leaves shelf unchanged.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Support cancel preview

**User need:** As a learner or user of Import Preview Tray, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Clear only the candidate and review output while leaving source text and committed shelf intact.

**Implementation plan:**

1. Trace `previewImport` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Cancel after a valid preview disables Commit without losing the editable input.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Cancel after a valid preview disables Commit without losing the editable input.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Add a maximum row count

**User need:** As a learner or user of Import Preview Tray, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Choose a small documented import limit and reject oversized arrays before row processing.

**Implementation plan:**

1. Trace `previewImport` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Exactly the limit is accepted if valid; one over leaves the shelf unchanged.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Exactly the limit is accepted if valid; one over leaves the shelf unchanged.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Report ignored extra fields

**User need:** As a learner or user of Import Preview Tray, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add nonblocking preview warnings for fields outside id/title without retaining them in committed items.

**Implementation plan:**

1. Trace `previewImport` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Warnings do not become errors unless the contract says so; committed shape remains explicit.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Warnings do not become errors unless the contract says so; committed shape remains explicit.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Add duplicate-specific guidance

**User need:** As a learner or user of Import Preview Tray, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Differentiate duplicate against the shelf from duplicate within the file.

**Implementation plan:**

1. Trace `previewImport` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Both remain blocking, but the reviewer can locate the relevant conflicting identity.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Both remain blocking, but the reviewer can locate the relevant conflicting identity.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Explore partial import on a branch

**User need:** As a learner or user of Import Preview Tray, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Write a replacement contract for partial success before changing commit behavior; define retry and duplicate handling.

**Implementation plan:**

1. Trace `previewImport` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Your acceptance examples demonstrate exactly which rows commit and what a retry does, unlike the reference all-or-nothing policy.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Your acceptance examples demonstrate exactly which rows commit and what a retry does, unlike the reference all-or-nothing policy.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
