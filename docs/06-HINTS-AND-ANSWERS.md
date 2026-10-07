# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a preview summary table

**Hint 1 — ownership:** Begin from the `#review` rendering in `public/app.js`. Render accepted and rejected rows with safe text cells and human row numbers.

**Hint 2 — reasoning:** Revisit the decision “Separate preview from mutation”. Ask yourself: How would you detect a preview function that secretly mutated the shelf?

**Answer direction:** A defensible solution demonstrates this observable result: The display makes all-or-nothing behavior explicit and preview still leaves shelf unchanged. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Support cancel preview

**Hint 1 — ownership:** Begin from the `preview` variable and Commit button state in `public/app.js`. Clear only the candidate and review output while leaving source text and committed shelf intact.

**Hint 2 — reasoning:** Revisit the decision “Separate preview from mutation”. Ask yourself: How would you detect a preview function that secretly mutated the shelf?

**Answer direction:** A defensible solution demonstrates this observable result: Cancel after a valid preview disables Commit without losing the editable input. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add a maximum row count

**Hint 1 — ownership:** Begin from the array check at the top of `previewImport`. Choose a small documented import limit and reject oversized arrays before row processing.

**Hint 2 — reasoning:** Revisit the decision “Choose all-or-nothing semantics”. Ask yourself: What must a partial-import retry know that this implementation does not need?

**Answer direction:** A defensible solution demonstrates this observable result: Exactly the limit is accepted if valid; one over leaves the shelf unchanged. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Report ignored extra fields

**Hint 1 — ownership:** Begin from the `item` object built in `previewImport`. Add nonblocking preview warnings for fields outside id/title without retaining them in committed items.

**Hint 2 — reasoning:** Revisit the decision “Separate preview from mutation”. Ask yourself: How would you detect a preview function that secretly mutated the shelf?

**Answer direction:** A defensible solution demonstrates this observable result: Warnings do not become errors unless the contract says so; committed shape remains explicit. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Add duplicate-specific guidance

**Hint 1 — ownership:** Begin from the `ids` Set seeded from the shelf in `previewImport`. Differentiate duplicate against the shelf from duplicate within the file.

**Hint 2 — reasoning:** Revisit the decision “Choose all-or-nothing semantics”. Ask yourself: What must a partial-import retry know that this implementation does not need?

**Answer direction:** A defensible solution demonstrates this observable result: Both remain blocking, but the reviewer can locate the relevant conflicting identity. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Explore partial import on a branch

**Hint 1 — ownership:** Begin from the `canCommit` check in `commitImport`. Write a replacement contract for partial success before changing commit behavior; define retry and duplicate handling.

**Hint 2 — reasoning:** Revisit the decision “Choose all-or-nothing semantics”. Ask yourself: What must a partial-import retry know that this implementation does not need?

**Answer direction:** A defensible solution demonstrates this observable result: Your acceptance examples demonstrate exactly which rows commit and what a retry does, unlike the reference all-or-nothing policy. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Preview → parse array → seed seen IDs from committed shelf → validate each row → freeze accepted candidate objects and preview metadata → render review only. Commit → compare exact source and version → reject any invalid rows → append copied accepted records to a new versioned shelf.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
