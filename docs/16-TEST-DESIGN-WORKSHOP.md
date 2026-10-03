# M023: design checks that teach you something

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

The baseline check route is **npm test, plus the relevant real interaction or CLI observation**. The original verification record describes its actual scope. This workshop explains how to choose fresh evidence for your own story without multiplying shallow tests or treating a screenshot as proof of every behavior.

## 1. State the oracle

An expected result needs an independent reason. Use the product contract, a hand calculation, a manually drawn state transition or the meaningful source order. Calling the function under test to compute its own expected answer proves little. In a layout task, a style string can match your implementation while the content is still clipped.

| Reference situation | Independent expectation | Why this matters |
|---|---|---|
| One valid and one invalid row | One accepted, one rejected; neither committed | This is an explicit contract example; change it only by changing the contract. |
| Edit input after preview | Preview invalidated; commit unavailable | This is an explicit contract example; change it only by changing the contract. |
| Shelf version changes after preview | Commit rejects stale preview until review is repeated | This is an explicit contract example; change it only by changing the contract. |

For one row, write a plausible wrong implementation and explain why the expected result rejects it. For another row, explain why it would not reject that same wrong implementation. This prevents you from treating every fixture as equally informative.

## 2. Separate layers of evidence

The central reading anchor is `public/core.js`. The adapter is `public/app.js`. A focused core check can expose a policy error without constructing the whole page. An interaction check can expose a wrong event hookup, stale output or missing focus movement even when the core returns the right answer. Static content needs meaning, navigation and layout observations that a file-existence check cannot supply.

Write which layer your selected story changes. Add or repeat the checks appropriate to that layer. Do not build an elaborate test harness for a reversible wording adjustment, and do not rely on a wording inspection for a changed state transition. Match the cost of the check to the consequence and uncertainty of the change.

## 3. Choose boundaries deliberately

List equal-to-threshold, empty, missing, invalid, duplicate and reordered situations only where they apply to this contract. A checklist of irrelevant inputs is not thoughtful testing. For each relevant boundary, explain which two meanings might accidentally collapse: missing versus zero, own versus inherited, saved versus staged, preview versus committed, or current versus stale.

Your source-specific distinction is: Preview is a proposal, not a mutation. A person reviews one source string against one shelf version; changing either invalidates what was reviewed. The commit function must enforce that condition even when the interface disables a button. Accepted rows in a mixed preview are diagnostic information, not proof that a partial import occurred. Use it to choose a test, not as decoration in a test name.

## 4. Test transitions, not only states

A valid screen and an error screen can each look correct in isolation while recovery between them is broken. Write a short sequence: successful action, changed input or state, failure or empty result, correction, repeated action. Predict which old values remain and which derived output must disappear. For a static page, use a sequence of viewport or focus changes instead of inventing data transitions.

## 5. Challenge preservation

Identify the caller-owned or source-owned information that should remain unchanged. Compare it before and after the operation. Where a copy is promised, modify the returned structure in a scratch regression and inspect the original. Where a copy is not promised, document the aliasing contract instead of asserting deep independence that the code does not provide.

## 6. Design one mutation probe

Begin with this proposed mistake: Push accepted rows into store.items inside previewImport. Predict the smallest failing observation: Preview a valid file without clicking Commit and inspect shelf length. Introduce the mistake only on your practice branch, confirm the check fails for the intended reason, then restore the correct behavior. If the check stays green, review its oracle and execution path before adding more assertions.

The exercise is not a claim that formal mutation-testing software was run. It is one controlled experiment showing that your check can detect a relevant defect. Keep the result honest and scoped.

## 7. Avoid timing and environment illusions

Use explicit inputs and deterministic fixtures whenever the contract allows them. For delayed work, distinguish scheduling order from observed elapsed time and use the project's injected boundary where available. For layout, record viewport and text conditions. For Git, inspect the intended repository and snapshot. A test passing in the wrong environment can be worse than a clear failure.

## 8. Write an evidence receipt

```text
Story and requirement:
Changed behavior:
Input or interaction sequence:
Expected result and its independent source:
Actual command or browser steps:
Actual observation:
Wrong candidate this check rejects:
Neighboring behavior preserved:
Limit of the evidence:
Next unresolved question:
```

## 9. Decide when to stop checking

Once the relevant checks pass and the diff introduces no new uncertainty, proceed to review and handoff. Repeat or broaden verification when a new edit, a failure or an unresolved concern justifies it. Running the same unchanged suite many times is not a substitute for choosing a discriminating case.

## 10. Teach the check back

Explain why your strongest assertion or browser observation would fail for a plausible wrong implementation. If you can only say that the test matches the code, strengthen the oracle. The ability to explain a useful failure is part of understanding the feature itself.
